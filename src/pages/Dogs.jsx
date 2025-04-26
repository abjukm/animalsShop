import React from "react";
import Header from "../components/Header";
import AnimalsCard from "../helpers/AnimalsCard";
import bea from "../assets/dogsimg/beagle.jpg"
import coc from "../assets/dogsimg/cocker.jpg"
import king from "../assets/dogsimg/king.jpg"
import korgi from "../assets/dogsimg/korgi.jpg"
import mal from "../assets/dogsimg/maltipu.jpg"
import pug from '../assets/dogsimg/pug.jpg'

const Dogs = () => {
  return (
    <>
      <Header />
      <div className="mt-35 w-[80%] ml-[10%] flex justify-around">
        <AnimalsCard
          image={bea}
          name="Макс"
          gender="Мужской"
          age="3 года"
          breed="Бигль"
        />
        <AnimalsCard
          image={coc}
          name="Луна"
          gender="Женский"
          age="3 года"
          breed="Кокер спаниель"
        />
      </div>
      <div className="mt-35 w-[80%] ml-[10%] flex justify-around">
        <AnimalsCard
          image={king}
          name="Белла"
          gender="Женский"
          age="2 года"
          breed="Кинг чарльз"
        />
        <AnimalsCard
          image={korgi}
          name="Рекс"
          gender="Мужской"
          age="1 года"
          breed="Корги"
        />
      </div>
      <div className="mt-35 w-[80%] ml-[10%] flex justify-around">
        <AnimalsCard
          image={mal}
          name="Барни"
          gender="Мужской"
          age="1 года"
          breed="Мальтипу"
        />
        <AnimalsCard
          image={pug}
          name="Чарли"
          gender="Мужской"
          age="1 года"
          breed="Мопс"
        />
      </div>
    </>
  );
};

export default Dogs;
