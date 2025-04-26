import React from "react";
import Header from "../components/Header";
import AnimalsCard from "../helpers/AnimalsCard";
import canary from "../assets/birdsimg/canary.webp";
import sinitca from "../assets/birdsimg/sinitca.jpg";
import parrot from "../assets/birdsimg/parrot.jpg";
import corella from "../assets/birdsimg/corella.jpg";
import ara from "../assets/birdsimg/ara.jpg";
import amadine from "../assets/birdsimg/amadine.jpg";

const Birds = () => {
  return (
    <>
      <div>
        <Header />
        <div className="mt-35 w-[80%] ml-[10%] flex justify-around">
          <AnimalsCard
            image={canary}
            name="Аурио"
            gender="Мужской"
            age="1 год"
            breed="Канарейка"
          />
          <AnimalsCard
            image={sinitca}
            name="Лазу"
            gender="Женский"
            age="2 года"
            breed="Синица лазоревка"
          />
        </div>
        <div className="mt-35 w-[80%] ml-[10%] flex justify-around">
          <AnimalsCard
            image={parrot}
            name="Зико"
            gender="Мужской"
            age="3 года"
            breed="Попугай"
          />
          <AnimalsCard
            image={corella}
            name="Альма"
            gender="Женский"
            age="1.5 года"
            breed="Корелла"
          />
        </div>
        <div className="mt-35 w-[80%] ml-[10%] flex justify-around">
          <AnimalsCard
            image={ara}
            name="Рио"
            gender="Мужской"
            age="2.5 года"
            breed="Ара"
          />
          <AnimalsCard
            image={amadine}
            name="Сави"
            gender="Женский"
            age="1 год"
            breed="Амадина"
          />
        </div>
      </div>
      ;
      <div className="">
        <Header />
        <div className="mt-35 w-[80%] ml-[10%] flex justify-around">
          <AnimalsCard image={canary} />
        </div>
        <div className="mt-35 w-[80%] ml-[10%] flex justify-around">
          <AnimalsCard
            image={""}
            name="Аурио"
            gender="Мужской"
            age="1 год"
            breed="Канарейка"
          />
          <AnimalsCard
            image={sinitca}
            name="Лазу"
            gender="Женский"
            age="2 года"
            breed="Синица лазоревка"
          />
        </div>
        <div className="mt-35 w-[80%] ml-[10%] flex justify-around">
          <AnimalsCard image={parrot} />
          <AnimalsCard
            image={""}
            name="Зико"
            gender="Мужской"
            age="3 года"
            breed="Попугай"
          />
          <AnimalsCard
            image={corella}
            name="Альма"
            gender="Женский"
            age="1.5 года"
            breed="Корелла"
          />
        </div>
        <div className="mt-35 w-[80%] ml-[10%] flex justify-around">
          <AnimalsCard image={ara} />
          <div className="mt-35 w-[80%] ml-[10%] flex justify-around">
            <AnimalsCard
              image={""}
              name="Рио"
              gender="Мужской"
              age="2.5 года"
              breed="Ара"
            />
            <AnimalsCard
              image={amadine}
              name="Сави"
              gender="Женский"
              age="1 год"
              breed="Амадина"
            />
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default Birds;
