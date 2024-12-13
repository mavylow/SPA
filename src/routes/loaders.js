import { defer, json } from "react-router-dom";

const fetchData = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw json(
      { message: `${window.location.pathname} not found` },
      { status: 404 }
    );
  }
  return response.json();
};

export const albumLoader = async ({ params }) => {
  const albumId = params.id;

  const albumData = await fetchData(
    `https://jsonplaceholder.typicode.com/albums/${albumId}`
  );
  const photos = fetchData(
    `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`
  );
  const user = fetchData(
    `https://jsonplaceholder.typicode.com/users/${albumData.userId}`
  );

  return defer({
    user,
    album: albumData,
    photos,
  });
};

export const userLoader = async ({ params }) => {
  const userId = params.userId;

  const userData = await fetchData(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  const albums = fetchData(
    `https://jsonplaceholder.typicode.com/albums?userId=${userId}`
  );

  return defer({
    user: userData,
    albums,
  });
};

export const albumsLoader = async () => {
  const albums = fetchData(
    `https://jsonplaceholder.typicode.com/albums`
  );
  return defer({ albums });
};

export const usersLoader = async () => {
  const users = fetchData(
    `https://jsonplaceholder.typicode.com/users`
  );
  return defer({ users });
};
