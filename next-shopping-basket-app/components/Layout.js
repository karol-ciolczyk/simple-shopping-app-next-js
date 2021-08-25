import { MainNavbar } from "./MainNavbar";

export const Layout = function (props) {
  return (
    <div>
      <MainNavbar />
      <main>{props.children}</main>
    </div>
  );
};
