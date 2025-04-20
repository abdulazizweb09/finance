import { Outlet } from "react-router-dom";
import { Sidebar } from "..";
function MainLayout() {
  return (
    <>
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;
