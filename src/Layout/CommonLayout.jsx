import { Outlet } from "react-router-dom";
const CommonLayout = () => {
  return (
    <div>
      <header>This is header</header>
      <nav></nav>
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </div>
  );
};

export default CommonLayout;
