const Square = ({ Icon, iconSize, text, aos, aosDelay, onClick }) => {
  return (
    <div
      className={`relative rounded-sm border-2 border-black flex flex-col justify-center items-center overflow-hidden group cursor-pointer `}
      data-aos={`${aos}`}
      data-aos-delay={`${aosDelay}`}
      onClick={onClick}
    >
      {/* hitam */}
      <span className="absolute inset-0 bg-black origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></span>

      <div className="relative z-10 flex flex-col items-center gap-2 ">
        {Icon && (
          <Icon
            size={iconSize}
            className="text-black transition-colors duration-500 group-hover:text-white"
          />
        )}
        {text && (
          <p className="font-semibold font-[Roboto] text-center text-black transition-colors duration-500 group-hover:text-white">
            {text}
          </p>
        )}
      </div>
    </div>
  );
};

export default Square;
