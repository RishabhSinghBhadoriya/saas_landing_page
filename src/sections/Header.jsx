/* eslint-disable react/prop-types */
import clsx from "clsx";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-scroll";


export const Header = () => {
  const [hasScrolled,SethasScrolled]=useState(false);
  const [isOpen,setIsOpen]=useState(false);
  useEffect(()=>{
    const handlescroll=()=>{
      SethasScrolled(window.scrollY>32)
    };
    window.addEventListener('scroll',handlescroll);
    return ()=>{
      window.removeEventListener('scroll',handlescroll);
    };
  },);
  const Navlink = ({ title }) => (
    <Link onClick={()=>setIsOpen(false)} to={title} offset={-100} spy smooth activeClass="nav-active"
      className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5"
    >
      {title}
    </Link>
  );
  return (
    <header className={clsx("fixed top-0 left-0 z-50 w-full py-10 transition-all duration-500 max-lg:py-4",hasScrolled&&"py-2 bg-black-100 backdrop-blur-[8px]")}>
      <div className="container flex h-14 items-center max-lg:px-5">
        <a className="lg:hidden flex-1 cursor-pointer z-2">
          <img
            src=""
            width={115}
            height={55}
            alt="logo"
          />
        </a>
        <div className={clsx("w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2 max-lg:opacity-0", isOpen?"max-lg:opacity-100":"max-lg:pointer-events-none")}>
          <div className="w-full border-2 border-amber-400 max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:px-4">
            <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto">
              <ul className="flex max-lg:block max-lg:px-12">
                <li className="nav-li">
                  <Navlink title="features" />
                  <div className="dot" />
                  <Navlink title="pricing" />
                </li>
                <li className="nav-logo">
                  <a to="hero" offset={-250} className={clsx("max-lg:hidden transition-transform duration-500 cursor-pointer")}>
                    <img
                      src=""
                      width={160}
                      height={55}
                      alt="logo"
                    />
                  </a>
                </li>
                <li className="nav-li">
                  <Navlink title="faq"/>
                  <div className="dot" />
                  <Navlink title="download"/>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <button className="lg:hidden z-2 size-10 border-2 border-s4/25 rounded-full justify-center items-center" onClick={()=>setIsOpen(prevState=>!prevState)}>
          {isOpen?"❌":"✨"}
        </button>
      </div>
    </header>
  );
};
