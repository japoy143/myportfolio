import { PropsWithChildren } from "react";

type LayoutProps = PropsWithChildren;
function Layout({ children }: LayoutProps) {
  return (
    <div id="me" className="bg-gradient-to-r from-black to-[#130F40]">
      {children}
    </div>
  );
}

export default Layout;
