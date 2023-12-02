import { useEffect, useState } from "react";

//img
import ImagenDesktop from "../assets/images/image-web-3-desktop.jpg";
import ImagenMobile from "../assets/images/image-web-3-mobile.jpg";
import HeroArticle from "./Herocomp/HeroArticle";

const Hero = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <section className="px-5 md:px-0 flex flex-col gap-6 md:gap-y-10 md:grid md:grid-cols-3 md:grid-rows-2  lg:h-[50vh]">
        <img
          className="md:col-span-2 md:h-full md:w-full"
          src={width > 768 ? ImagenDesktop : ImagenMobile}
          alt={width > 768 ? "Imagen de un escritorio" : "Imagen de un celular"}
        />
        {width > 1000 ? (
          <>
            <article className="bg-Very-dark-blue  p-6 flex flex-col gap-5 md:row-span-2 md:justify-around ">
              <h2 className="text-Soft-orange text-2xl font-bold mb-4 lg:text-6xl">New</h2>
              <HeroArticle h3="Hydrogen VS Electric Cars" p="Will hydrogen-fueled cars ever catch up to EVs?" />
              <span className="h-[1px] bg-white/40 w-full"></span>
              <HeroArticle
                h3="The Downsides of AI Artistry"
                p="What are the possible adverse effects of on-demand AI image generation?"
              />
              <span className="h-[1px] bg-white/40 w-full"></span>
              <HeroArticle
                h3="Is VC Funding Drying Up?"
                p="Private funding by VC firms is down 50% YOY. We take a look at what that"
              />
            </article>
            <div className="md:grid md:col-span-2">
              <div className="flex flex-col gap-5 items-start md:grid md:grid-col-2 md:grid-flow-col ">
                <h1 className="text-5xl font-extrabold md:h-full md:text-7xl">The Bright Future of Web 3.0?</h1>
                <div className="md:h-full md:flex md:flex-col md:items-start  ">
                  <p className="font-sans text-sm md:text-base md:font-semibold md:text-black  ">
                    We dive into the next evolution of the web that claims to put the power of the platforms back into
                    the hands of the people. But is it really fulfilling its promise?
                  </p>
                  <a
                    className="bg-Soft-red py-3 px-10 border-none uppercase text-Off-white font-medium md:mt-16 hover:bg-Very-dark-blue"
                    href="#">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col gap-5 items-start">
              <h1 className="text-5xl font-extrabold">The Bright Future of Web 3.0?</h1>
              <p className="font-sans text-sm">
                We dive into the next evolution of the web that claims to put the power of the platforms back into the
                hands of the people. But is it really fulfilling its promise?
              </p>
              <a className="bg-Soft-red py-2 px-7 border-none uppercase text-Off-white font-medium " href="#">
                Read More
              </a>
            </div>
            <article className="bg-Very-dark-blue  p-6 flex flex-col gap-5">
              <h2 className="text-Soft-orange text-2xl font-bold mb-4">New</h2>
              <HeroArticle h3="Hydrogen VS Electric Cars" p="Will hydrogen-fueled cars ever catch up to EVs?" />
              <span className="h-[1px] bg-white/40 w-full"></span>
              <HeroArticle
                h3="The Downsides of AI Artistry"
                p="What are the possible adverse effects of on-demand AI image generation?"
              />
              <span className="h-[1px] bg-white/40 w-full"></span>
              <HeroArticle
                h3="Is VC Funding Drying Up?"
                p="Private funding by VC firms is down 50% YOY. We take a look at what that"
              />
            </article>
          </>
        )}
      </section>
    </div>
  );
};

export default Hero;
