import { Suspense, useCallback } from "react";
import {
  useNavigate,
  useLoaderData,
  Await,
} from "react-router-dom";

function User() {
  const { user, albums } = useLoaderData();
  const navigate = useNavigate();

  const goToAlbum = useCallback(
    (id) => () => navigate(`/albums/${id}`),
    [navigate]
  );

  return (
    <>
      <Suspense fallback={<div>Loading user...</div>}>
        <Await resolve={user}>
          {(resolvedUser) => (
            <div className="flex flex-col my-6">
              <div className="font-medium">
                {resolvedUser.name}
              </div>
              <div className="flex flex-col text-gray-600 text-xs">
                <div>Username: {resolvedUser.username}</div>
                <div>Email: {resolvedUser.email}</div>
                <div>Phone: {resolvedUser.phone}</div>
                <div>Site: {resolvedUser.website}</div>
              </div>
            </div>
          )}
        </Await>
      </Suspense>

      <div className="font-medium my-1">Albums</div>
      <Suspense fallback={<div>Loading albums...</div>}>
        <Await resolve={albums}>
          {(resolvedAlbums) => (
            <div className="flex flex-col max-w-50 w-fit ">
              {resolvedAlbums.map((album) => (
                <div
                  key={album.id}
                  onClick={goToAlbum(album.id)}
                  className="underline hover:text-blue-600 cursor-pointer inline-block"
                >
                  {album.title}
                </div>
              ))}
            </div>
          )}
        </Await>
      </Suspense>
    </>
  );
}

export default User;
