import React from "react";
import { useNavigate } from "react-router-dom";
import cats from "../assets/introImg/cats.png";
import dogs from "../assets/introImg/dogs.png";
import birds from "../assets/introImg/birds.png";
import fishes from "../assets/introImg/fishes.png";
import { Main } from "./Main";
import { Footer } from "./Footer";

function Intro() {
  const navigate = useNavigate();

  const handleCardClick = (path) => {
    navigate(path);
  };
  return (
    <>
      <div className="w-full h-[551px] flex flex-col items-center mt-[164px] justify-center">
        <input
          type="text"
          placeholder="Поиск"
          class="w-[452px] h-[62px] px-4 py-2 rounded-full border border-black text-gray-500 outline-none placeholder-gray-500 placeholder:text-[30px] placeholder: pl-[70px] placeholder: pt-[16px]"
        />
        <div className="w-[1000px] flex flex-col justify-between h-[320px] mt-[50px]">
          <h1 className="text-[23px] ml-[30px] font-medium">Выбери питомца</h1>
          <div className="flex justify-around text-white text-[40px] font-semibold">
            <div
              className="relative w-48 h-64 rounded-xl overflow-hidden"
              onClick={() => handleCardClick("/cats")}
            >
              <img
                src={cats}
                alt="catsImg"
                className="rounded-4xl object-cover w-full h-full"
              />
              <h2 className="absolute bottom-4 left-4">Кошки</h2>
            </div>
            <div
              className="relative w-48 h-64 rounded-xl overflow-hidden"
              onClick={() => handleCardClick("/dogs")}
            >
              <img
                src={dogs}
                alt="dogsImg"
                className="rounded-4xl object-cover w-full h-full"
              />
              <h2 className="absolute bottom-4 left-4">Собачки</h2>
            </div>
            <div
              className="relative w-48 h-64 rounded-xl overflow-hidden"
              onClick={() => handleCardClick("/birds")}
            >
              <img
                src={birds}
                alt="birdsImg"
                className="rounded-4xl object-cover w-full h-full"
              />
              <h2 className="absolute bottom-4 left-4">Птички</h2>
            </div>
            <div
              className="relative w-48 h-64 rounded-xl overflow-hidden"
              onClick={() => handleCardClick("/fishes")}
            >
              <img
                src={fishes}
                alt="fishesImg"
                className="rounded-4xl object-cover w-full h-full"
              />
              <h2 className="absolute bottom-4 left-4">Рыбки</h2>
            </div>
          </div>
        </div>
      </div>
      <Main />
      <Footer/>
    </>
  );
}

export default Intro;
