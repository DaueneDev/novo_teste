"use client";
import Link from "next/link";
import { Fragment, useState } from "react";

const Menus = ({ single, menus }) => {
  const singleMenus = menus
    ? menus
    : [
        { id: 1, href: "about+", title: "About+" },
        { id: 2, href: "shows", title: "Shows" },
        { id: 3, href: "pricing", title: "Pricing" },
        { id: 4, href: "team", title: "Team" },
        { id: 5, href: "news", title: "Blog" },
      ];
  return (
    <nav id="mobile-menu" className="d-none d-xl-block">
      {single ? (
        <ul>
          <li className="has-dropdown active menu-thumb">
            <Link href="/">
              Home
              <i className="fas fa-angle-down" />
            </Link>
            <ul className="submenu has-homemenu">
              <li className="border-none">
                <div className="row g-4">
                  <div className="col-lg-3 homemenu">
                    <div className="homemenu-thumb">
                      <img src="assets/img/header/home-1.jpg" alt="img" />
                      <div className="demo-button">
                        <Link href="/" className="theme-btn">
                          <span>Multi Page</span>
                        </Link>
                        <Link href="index+-one-page" className="theme-btn">
                          <span>One Page</span>
                        </Link>
                      </div>
                    </div>
                    <div className="homemenu-content text-center">
                      <h4 className="homemenu-title">Home 01</h4>
                    </div>
                  </div>
                  <div className="col-lg-3  homemenu">
                    <div className="homemenu-thumb mb-15">
                      <img src="assets/img/header/home-2.jpg" alt="img" />
                      <div className="demo-button">
                        <Link href="index+-2" className="theme-btn">
                          <span>Multi Page</span>
                        </Link>
                        <Link href="index+-two-page" className="theme-btn">
                          <span>One Page</span>
                        </Link>
                      </div>
                    </div>
                    <div className="homemenu-content text-center">
                      <h4 className="homemenu-title">Home 02</h4>
                    </div>
                  </div>
                  <div className="col-lg-3 homemenu">
                    <div className="homemenu-thumb mb-15">
                      <img src="assets/img/header/home-3.jpg" alt="img" />
                      <div className="demo-button">
                        <Link href="index+-3" className="theme-btn">
                          <span>Multi Page</span>
                        </Link>
                        <Link href="index+-three-page" className="theme-btn">
                          <span>One Page</span>
                        </Link>
                      </div>
                    </div>
                    <div className="homemenu-content text-center">
                      <h4 className="homemenu-title">Home 03</h4>
                    </div>
                  </div>
                  <div className="col-lg-3 homemenu">
                    <div className="homemenu-thumb mb-15">
                      <img src="assets/img/header/home-4.jpg" alt="img" />
                      <div className="demo-button">
                        <Link href="index+-4" className="theme-btn">
                          <span>Multi Page</span>
                        </Link>
                        <Link href="index+-four-page" className="theme-btn">
                          <span>One Page</span>
                        </Link>
                      </div>
                    </div>
                    <div className="homemenu-content text-center">
                      <h4 className="homemenu-title">Home 04</h4>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </li>
          <li className="has-dropdown active d-xl-none">
            <Link href="team" className="border-none">
              Home
              <i className="fas fa-angle-down" />
            </Link>
            <ul className="submenu">
              <li>
                <Link href="/">Home 01</Link>
              </li>
              <li>
                <Link href="index+-2">Home 02</Link>
              </li>
              <li>
                <Link href="index+-3">Home 03</Link>
              </li>
              <li>
                <Link href="index+-4">Home 04</Link>
              </li>
            </ul>
          </li>
          {singleMenus.map((menu) => (
            <li key={menu.id}>
              <a href={`#${menu.href}`}>{menu.title}</a>
            </li>
          ))}
        </ul>
      ) : (
        <ul>
          <li className="has-dropdown active menu-thumb">
            <Link href="/">
              Sucursais
              <i className="fas fa-angle-down" />
            </Link>
            <ul className="submenu has-homemenu">
              <li className="border-none">
                <div className="row g-4">
                  <div className="col-lg-3 homemenu">
                    <div className="homemenu-thumb">
                      <img src="assets/img/header/home-1.jpg" alt="img" />
                      <div className="demo-button">
                        <Link href="Sucursal" className="theme-btn">
                          <span>Ver</span>
                        </Link>
                      </div>
                    </div>
                    <div className="homemenu-content text-center">
                      <h4 className="homemenu-title">Sucursal De Boane</h4>
                    </div>
                  </div>
                  <div className="col-lg-3  homemenu">
                    <div className="homemenu-thumb mb-15">
                      <img src="assets/img/header/home-1.jpg" alt="img" />
                      <div className="demo-button">
                        <Link href="Sucursal" className="theme-btn">
                          <span>Ver</span>
                        </Link>
                      </div>
                    </div>
                    <div className="homemenu-content text-center">
                      <h4 className="homemenu-title">Sucursal De Kumbeza</h4>
                    </div>
                  </div>
                  <div className="col-lg-3 homemenu">
                    <div className="homemenu-thumb mb-15">
                      <img src="assets/img/header/home-1.jpg" alt="img" />
                      <div className="demo-button">
                        <Link href="Sucursal" className="theme-btn">
                          <span>Ver</span>
                        </Link>
                      </div>
                    </div>
                    <div className="homemenu-content text-center">
                      <h4 className="homemenu-title">Sucursal De Mavoko</h4>
                    </div>
                  </div>
                  <div className="col-lg-3 homemenu">
                    <div className="homemenu-thumb mb-15">
                      <img src="assets/img/header/home-1.jpg" alt="img" />
                      <div className="demo-button">
                        <Link href="Sucursal" className="theme-btn">
                          <span>Ver</span>
                        </Link>
                      </div>
                    </div>
                    <div className="homemenu-content text-center">
                      <h4 className="homemenu-title">Sucursal De Marracuene</h4>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </li>
          <li className="has-dropdown active d-xl-none">
            <Link href="team" className="border-none">
              Sucursais
              <i className="fas fa-angle-down" />
            </Link>
            <ul className="submenu">
              <li>
                <Link href="Sucursal">Sucursal De Boane</Link>
              </li>
              <li>
                <Link href="Sucursal">Sucursal De Kumbeza</Link>
              </li>
              <li>
                <Link href="Sucursal">Sucursal De Mavoko</Link>
              </li>
              <li>
                <Link href="Sucursal">Sucursal De Marracuene</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="about">Sobre Nós</Link>
          </li>
          <li>
            <Link href="service">Serviços</Link>
          </li>
          <li>
            <Link href="news">Blog</Link>
          </li>
          <li>
            <Link href="contact">Contactos</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};
export default Menus;

export const MobileMenu = ({ menus, single }) => {
  const [activeMenu, setActiveMenu] = useState("");
  const [multiMenu, setMultiMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };
  const multiMenuSet = (value) =>
      setMultiMenu(multiMenu === value ? "" : value),
    multiMenuActiveLi = (value) =>
      value === multiMenu ? { display: "block" } : { display: "none" };
  const singleMenus = menus
    ? menus
    : [
        { id: 1, href: "about", title: "About" },
        { id: 2, href: "shows", title: "Shows" },
        { id: 3, href: "pricing", title: "Pricing" },
        { id: 4, href: "team", title: "Team" },
        { id: 5, href: "news", title: "Blog" },
      ];
  return (
    <nav className="mean-nav d-block d-xl-none">
      <ul>
        <li className="has-dropdown active d-lg-none">
          <a
            href="#"
            className="border-none"
            onClick={() => activeMenuSet("home")}
            onMouseEnter={(e) => (e.target.style.color = "#0367A0")}
      onMouseLeave={(e) => (e.target.style.color = "#049DBF")}
          >
            Sucursais
            <i className="fas fa-angle-down" />
          </a>
          <ul onMouseEnter={(e) => (e.target.style.color = "#0367A0")}
      onMouseLeave={(e) => (e.target.style.color = "#049DBF")} className="submenu" style={activeLi("home")}>
            <li>
              <Link href="Sucursal" onMouseEnter={(e) => (e.target.style.color = "#0367A0")}
      onMouseLeave={(e) => (e.target.style.color = "#049DBF")}>Sucursal De Boane</Link>
            </li>
            <li>
              <Link href="Sucursal" onMouseEnter={(e) => (e.target.style.color = "#0367A0")}
      onMouseLeave={(e) => (e.target.style.color = "#049DBF")}>Sucursal De Kumbeza</Link>
            </li>
            <li>
              <Link href="Sucursal" onMouseEnter={(e) => (e.target.style.color = "#0367A0")}
      onMouseLeave={(e) => (e.target.style.color = "#049DBF")}>Sucursal De Mavoko</Link>
            </li>
            <li>
              <Link href="Sucursal" onMouseEnter={(e) => (e.target.style.color = "#0367A0")}
      onMouseLeave={(e) => (e.target.style.color = "#049DBF")}>Sucursal De Marracuene</Link>
            </li>
          </ul>
          <a
            className="mean-expand"
            href="#"
            onClick={() => activeMenuSet("home")}
            onMouseEnter={(e) => (e.target.style.color = "#0367A0")}
            onMouseLeave={(e) => (e.target.style.color = "#049DBF")}
          >
            <i className="far fa-plus" />
          </a>
        </li>
        {single ? (
          <Fragment>
            {singleMenus.map((menu) => (
              <li key={menu.id}>
                <a href={`#${menu.href}`} className="border-none">
                  {menu.title}
                </a>
              </li>
            ))}
          </Fragment>
        ) : (
          <Fragment onMouseEnter={(e) => (e.target.style.color = "#0367A0")}
          onMouseLeave={(e) => (e.target.style.color = "#049DBF")}>
            <li>
              <Link href="/" onMouseEnter={(e) => (e.target.style.color = "#0367A0")}
      onMouseLeave={(e) => (e.target.style.color = "#049DBF")}> Home</Link>
            </li>
            <li>
              <Link href="about" onMouseEnter={(e) => (e.target.style.color = "#0367A0")}
      onMouseLeave={(e) => (e.target.style.color = "#049DBF")}>Sobre Nós</Link>
            </li>
            <li>
              <Link href="service" onMouseEnter={(e) => (e.target.style.color = "#0367A0")}
      onMouseLeave={(e) => (e.target.style.color = "#049DBF")}>Serviços</Link>
            </li>
            <li>
              <Link href="news" onMouseEnter={(e) => (e.target.style.color = "#0367A0")}
      onMouseLeave={(e) => (e.target.style.color = "#049DBF")}>Blog</Link>
            </li>
            <li className="mean-last">
              <Link href="contact" onMouseEnter={(e) => (e.target.style.color = "#0367A0")}
      onMouseLeave={(e) => (e.target.style.color = "#049DBF")}>Contactos</Link>
            </li>
          </Fragment>
        )}
      </ul>
    </nav>
  );
};
