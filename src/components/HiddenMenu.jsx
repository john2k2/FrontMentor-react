// eslint-disable-next-line react/prop-types
const HiddenMenu = ({ menu }) => {
  return (
    <div>
      <ul
        className={`
          flex flex-col gap-14 items-start text-2xl font-bold capitalize text-Dark-grayish-blue transition-all  top-0 right-0 bg-white  w-[50vw] h-screen justify-start py-10 px-10 z-10 relative ${
            menu ? "translate-x-full" : "translate-x-[100vw] "
          }`}>
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
    </div>
  );
};

export default HiddenMenu;
