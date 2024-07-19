import { useState } from "react";
import MenuIcon from "../assets/menu";
import ExitIcon from "../assets/exit";
import { navItems } from "../constant";

function Navbar() {
  const [isMobile, setSetIsMobile] = useState<boolean>(false);

  const toggleMenu = () => {
    setSetIsMobile((prev) => !prev);
  };

  function smoothScroll(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault();
    const targetElementId = (event.target as HTMLAnchorElement).getAttribute(
      "href",
    );

    if (targetElementId) {
      const targetId = targetElementId.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const offsetTop = targetElement.offsetTop;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    }
  }

  return (
    <nav className="sticky top-0 z-50 border border-neutral-700/80 py-3 backdrop-blur-lg">
      <div className="text-md f container relative mx-auto px-4 font-medium">
        <div className="flex items-center justify-between">
          <div className="flex flex-shrink-0 items-center">
            <a
              className="tracking-widest mix-blend-difference"
              href="#me"
              onClick={(event) => smoothScroll(event)}
            >
              rain
            </a>
          </div>
          <ul className="hidden space-x-10 lg:flex">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href} onClick={(event) => smoothScroll(event)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex-col justify-end md:flex lg:hidden">
            <button onClick={toggleMenu}>
              {isMobile ? (
                <ExitIcon className="h-8 w-8" />
              ) : (
                <MenuIcon className="h-8 w-8" />
              )}
            </button>
          </div>
        </div>
        {isMobile && (
          <div className="fixed right-0 z-50 mt-3 flex h-full w-full flex-col place-items-center justify-center bg-slate-950 bg-opacity-60 bg-clip-padding p-12 backdrop-filter lg:hidden">
            {navItems.map((item, index) => (
              <ul key={index}>
                <li>
                  <a href={item.href} onClick={(event) => smoothScroll(event)}>
                    {item.label}
                  </a>
                </li>
              </ul>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
