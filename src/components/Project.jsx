const Project = ({
  image,
  number,
  title,
  description,
  reverse = false,
  aos,
  aosDelay,
  className
}) => {
  return (
    <div
      className={`w-full flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } gap-10 justify-center items-center md:items-start`}
      data-aos={aos}
      data-aos-delay={aosDelay}
    >
      {/* Gambar */}
      <div
        className={`w-full md:w-2/6 h-56 md:h-[300px] bg-cover bg-center rounded-xl  ${className}`}
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      {/* Teks */}
      <div className="w-full md:w-3/6 flex flex-col justify-center gap-y-5 text-center md:text-left">
        <p className="text-white font-bold text-3xl">{number}</p>
        <p className="text-white font-bold text-3xl">{title}</p>
        <p className="text-white">{description}</p>
      </div>
    </div>
  );
};

export default Project;
