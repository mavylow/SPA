import { Suspense, useCallback } from "react";
import {
  Await,
  useLoaderData,
  useNavigate,
} from "react-router-dom";

function Albums() {
  const { albums } = useLoaderData();

  const navigate = useNavigate();
  const goToAlbum = useCallback(
    (id) => {
      return () => navigate(`/albums/${id}`);
    },
    [navigate]
  );

  return (
    <>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Await resolve={albums}>
          {(resolvedAlbums) => (
            <div className="flex flex-col max-w-45 w-fit ">
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

export default Albums;
