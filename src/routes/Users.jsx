import { Suspense, useCallback } from "react";
import {
  Await,
  useLoaderData,
  useNavigate,
} from "react-router-dom";

function Users() {
  const { users } = useLoaderData();

  const navigate = useNavigate();

  const goToUser = useCallback(
    (id) => () => navigate(`/users/${id}`),
    [navigate]
  );
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <Await resolve={users}>
        {(resolvedUsers) => (
          <div className="flex flex-col max-w-50 w-fit ">
            {resolvedUsers.map((user) => {
              return (
                <div
                  className="underline hover:text-blue-600 cursor-pointer inline-block"
                  key={user.id}
                  onClick={goToUser(user.id)}
                >
                  {user.name}
                </div>
              );
            })}
          </div>
        )}
      </Await>
    </Suspense>
  );
}

export default Users;
