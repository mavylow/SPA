import { NavLink, Outlet } from "react-router-dom";
import "./Layout.css";
export default function Layout() {
  return (
    <>
      <header className="flex justify-end my-1 h-[7vh]">
        <NavLink to="/albums" className="mx-5">
          Albums
        </NavLink>
        <NavLink to="/users" className="mx-5">
          Users
        </NavLink>
      </header>
      <main className="min-h-[70vh] px-5 my-5">
        <Outlet />
      </main>
      <hr></hr>
      <footer className="flex justify-between text-xs text-gray-600 items-center h-[15vh] px-5">
        <div>Created by: Sofia Maiseenko</div>
        <div>BSU: 2024</div>
      </footer>
    </>
  );
}
