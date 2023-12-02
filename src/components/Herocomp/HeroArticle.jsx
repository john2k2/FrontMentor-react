// eslint-disable-next-line react/prop-types
const HeroArticle = ({ h3, p }) => {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="font-bold lg:text-3xl text-xl text-Off-white hover:text-Soft-orange">{h3}</h3>
      <p className="font-light text-Grayish-blue lg:text-xl">{p}</p>
    </div>
  );
};

export default HeroArticle;
