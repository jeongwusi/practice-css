import { useState } from "react";
import BlackButton from "../Button/BlackButton/BlackButton";

const TailwindCssCardPreview = () => {
  const [cardColor, setCardColor] = useState(true);

  const handleBlackButton = () => {
    cardColor === true ? setCardColor(false) : setCardColor(true);
  };
  return (
    <article>
      <section
        className={`mx-auto my-0 flex h-[123px] w-[208px] cursor-pointer items-center rounded border-none shadow-md shadow-gray-500 ${
          cardColor ? "bg-white" : "bg-black"
        } px-3 pb-1 pt-0 transition duration-300`}
      >
        <div className="h-[26px] w-[40px] rounded bg-[#cbba64]" />
      </section>
      <BlackButton onClick={handleBlackButton} />
    </article>
  );
};

export default TailwindCssCardPreview;
