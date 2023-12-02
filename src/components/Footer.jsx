import PC from "../assets/images/image-retro-pcs.jpg";
import Keyboard from "../assets/images/image-top-laptops.jpg";
import Joystick from "../assets/images/image-gaming-growth.jpg";

import SectionCard from "./Herocomp/SectionCard.jsx";

const Footer = () => {
  return (
    <footer className="grid grid-flow-row gap-10 mb-20 px-5 mx-auto mt-10 md:grid-flow-col lg:h-[20vh]  lg:justify-center lg:items-center">
      <SectionCard img={PC} p2="01" h3="Reviving Retro PCs" p1="What happens when old PCs are given modern upgrades?" />
      <SectionCard
        img={Keyboard}
        p2="02"
        h3="Top 10 Laptops of 2022"
        p1="Our best picks for various needs and budgets."
      />
      <SectionCard
        img={Joystick}
        p2="03"
        h3="The Growth of Gaming"
        p1=" How the pandemic has sparked fresh opportunities."
      />
    </footer>
  );
};

export default Footer;
