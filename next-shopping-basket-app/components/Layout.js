import { loadGetInitialProps } from "next/dist/shared/lib/utils";

export const Layout = function () {
  return (
    <div>
      <AppBarNavigation />
      <main>{loadGetInitialProps.children}</main>
    </div>
  );
};
