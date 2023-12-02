export const SectionCard = ({ img, h3, p1, p2 }) => {
  return (
    <>
      <div className="flex gap-5 md:mt-10">
        <img className="w-32 md:w-52" src={img} alt="Imagen de un escritorio" />
        <div className="flex flex-col gap-5">
          <p className="text-Grayish-blue font-bold text-3xl md:text-5xl">{p2}</p>
          <h3 className="font-black text-base md:text-2xl">{h3}</h3>
          <p className="text-sm md:text-xl">{p1}</p>
        </div>
      </div>
    </>
  );
};
