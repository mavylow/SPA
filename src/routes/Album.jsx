import {
  useNavigate,
  useLoaderData,
  Await,
} from "react-router-dom";
import { Suspense, useCallback } from "react";

export default function Album() {
  const { album, photos, user } = useLoaderData();
  const navigate = useNavigate();

  const goToUser = useCallback(
    (id) => () => navigate(`/users/${id}`),
    [navigate]
  );

  return (
    <>
      <div className="font-medium">{album.title}</div>
      <Suspense fallback="Loading user...">
        <Await resolve={user}>
          {(resolvedUser) => (
            <div className="flex flex-row text-gray-600 text-xs">
              <div className="mr-1">Created by:</div>
              <div
                onClick={goToUser(resolvedUser.id)}
                className="underline hover:text-blue-600 cursor-pointer inline-block"
              >
                {resolvedUser.name}
              </div>
            </div>
          )}
        </Await>
      </Suspense>
      <Suspense fallback="Loading photos...">
        <Await resolve={photos}>
          {(resolvedPhotos) => (
            <div className="flex flex-wrap flex-row gap-8 justify-between my-4">
              {resolvedPhotos.map((photo) => (
                <div key={photo.id} className="w-48 h-48">
                  <img
                    src={photo.url}
                    alt={photo.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </Await>
      </Suspense>
    </>
  );
}
