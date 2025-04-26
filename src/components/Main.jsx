import React from "react";
import { useNavigate } from "react-router-dom";
import Photo from "../assets/img/Intro.jpg";
import fotodog from "../assets/img/fotodog.png";

const Main = () => {
  return (
    <>
      <main className="w-full ">
        <section className="w-full h-100 bg-black flex items-center justify-center ">
          <div className="w-10/12 h-80 bg-white rounded-3xl flex items-center justify-around  ">
            <div>
              <div className="text-3xl font-bold ">
                <p>
                  Стать участником;
                  <br />
                  Получить скидку{" "}
                </p>
              </div>
              <button className="text-3xl font-bold mt-10 text-white bg-black rounded-3xl h-15 w-50 transition-transform transform hover:scale-105 hover:bg-gray-800 cursor-pointer">
                Join
              </button>
            </div>
            <div className="">
              <img src={Photo} alt="" />
            </div>
          </div>
        </section>

        <div className="flex flex-col justify-center max-w-xl  rounded-xl ml-50 min-h-screen">
          <h1 className="text-xl font-semibold">
            Несколько хороших советов для
          </h1>
          <h1 className="text-xl font-semibold mb-4">
            заботы о вашем питомце:
          </h1>

          <div className="text-[#5C5C5C] space-y-4 rounded-md p-4">
            <div>
              <p className="font-semibold">Терпение и понимание:</p>
              <p>
                Поймите, что у домашних животных есть свой характер.
                <br />
                Будьте терпеливы, особенно во время тренировок.
              </p>
            </div>

            <div>
              <p className="font-semibold">educate yourself:</p>
              <p>
                Узнайте о конкретной породе, поведении и здоровье вашего питомца
                Требования.
              </p>
            </div>

            <div>
              <p className="font-semibold">
                Готовность к чрезвычайным ситуациям:
              </p>
              <p>
                Ознакомьтесь с местом расположения ближайшего ЧП ветеринарная
                клиника.
              </p>
            </div>

            <div>
              <p className="font-semibold">Положительное подкрепление:</p>
              <p>Изучите техники положительного подкрепления.</p>
            </div>
          </div>
          <img src={fotodog} alt="" className="absolute ml-150" />
        </div>
      </main>
    </>
  );
};

export default Main;
