import React from "react";
import Header from "../components/Header";
import AnimalsCard from "../helpers/AnimalsCard";

const Birds = () => {
  return (
    <>
      <Header />

      <div className="mt-35 w-[80%] ml-[10%] flex justify-around">
        <AnimalsCard
          image={""}
          name="Аурио"
          gender="Мужской"
          age="1 год"
          breed="Канарейка"
        />
        <AnimalsCard
          image={""}
          name="Лазу"
          gender="Женский"
          age="2 года"
          breed="Синица лазоревка"
        />
      </div>
      <div className="mt-35 w-[80%] ml-[10%] flex justify-around">
        <AnimalsCard
          image={""}
          name="Зико"
          gender="Мужской"
          age="3 года"
          breed="Попугай"
        />
        <AnimalsCard
          image={""}
          name="Альма"
          gender="Женский"
          age="1.5 года"
          breed="Корелла"
        />
      </div>

      <div className="mt-35 w-[80%] ml-[10%] flex justify-around">
        <AnimalsCard
          image={""}
          name="Рио"
          gender="Мужской"
          age="2.5 года"
          breed="Ара"
        />
        <AnimalsCard
          image={""}
          name="Сави"
          gender="Женский"
          age="1 год"
          breed="Амадина"
        />
      </div>
    </>
  );
};

export default Birds;
