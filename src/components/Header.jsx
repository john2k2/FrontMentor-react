import { useState } from "react";

//img
import Imagenlogo from "../assets/images/logo.svg";
import ImagenHamburguesa from "../assets/images/icon-menu.svg";
import HiddenMenu from "./HiddenMenu";
import CloseMenu from "../assets/images/icon-menu-close.svg";

const Header = () => {
  const [menu, setMenu] = useState(false);

  const handleClick = () => {
    if (menu === false) {
      setMenu(true);
    } else {
      setMenu(false);
    }
  };

  return (
    <>
      <header className="flex justify-between h-[10vh] items-center px-5 md:px-0 ">
        <div className="flex">
          <img src={Imagenlogo} alt="" />
        </div>
        <nav>
          <ul className="md:flex gap-5 hidden md:text-base md:font-bold md:capitalize md:text-Dark-grayish-blue ">
            <li>
              <a className="hover:text-Soft-orange" href="#">
                home
              </a>
            </li>
            <li>
              <a className="hover:text-Soft-orange" href="#">
                new
              </a>
            </li>
            <li>
              <a className="hover:text-Soft-orange" href="#">
                popular
              </a>
            </li>
            <li>
              <a className="hover:text-Soft-orange" href="#">
                trending
              </a>
            </li>
            <li>
              <a className="hover:text-Soft-orange" href="#">
                categories
              </a>
            </li>
          </ul>
          <div>
            <img
              onClick={handleClick}
              className="md:hidden cursor-pointer"
              src={menu ? CloseMenu : ImagenHamburguesa}
              alt=""
            />
          </div>
          <div className="overflow-hidden absolute w-full  right-0 top-[10%] md:hidden">
            <HiddenMenu menu={menu} setMenu={setMenu} />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
