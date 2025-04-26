import React from "react";
import AnimalsCard from "../helpers/AnimalsCard";
import Header from "../components/Header";
import cloin from '../assets/fishsimg/cloin.jpg'
import pink from '../assets/fishsimg/pink.jpg'
import rim from '../assets/fishsimg/rim.jpg'
import trumpi from '../assets/fishsimg/trumpi.jpg'
import  armenin from '../assets/fishsimg/armenin.jpg'
import shark from '../assets/fishsimg/shark.jpg'

const Fishes = () => {
  return (
    <>
      <Header />
      <div className="mt-35 w-[80%] ml-[10%] flex justify-around">
        <AnimalsCard
          image={cloin}
          name="Мартин"
          gender="Мужской"
          age="1 год"
          breed="Рыба клоун"
        />
        <AnimalsCard
          image={pink}
          name="Пинки"
          gender="Женский"
          age="6 месецов"
          breed="розовый корась"
        />
      </div>
      <div className="mt-35 w-[80%] ml-[10%] flex justify-around">
        <AnimalsCard
          image={rim}
          name="Дори"
          gender="женский"
          age="7 месецов"
          breed="рыба пловник"
        />
        <AnimalsCard
          image={trumpi}
          name="Трамп"
          gender="Мужской"
          age="78 года"
          breed="трампипорарамби"
        />
      </div>

      <div className="mt-35 w-[80%] ml-[10%] flex justify-around">
        <AnimalsCard
          image={armenin}
          name="Арменка"
          gender="Мужской"
          age="2.5 года"
          breed="арменская пресноводная"
        />
        <AnimalsCard
          image={shark}
          name="Миби"
          gender="Женский"
          age="1 год"
          breed="Акула"
        />
      </div>
    </>
  );
};

export default Fishes;
