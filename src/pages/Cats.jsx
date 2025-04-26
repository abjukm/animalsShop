import React from "react";
import Cat1 from "../../src/assets/cat1.jpg";
import Cat2 from "../../src/assets/cat2.jpg";
import Cat3 from "../../src/assets/photo3.jpg";
import Cat4 from "../../src/assets/cat5.webp";
import Cat5 from "../../src/assets/cat7.jpg";
import Cat6 from "../../src/assets/cat6.webp";
import Header from "../components/Header";
import AnimalsCard from "../helpers/AnimalsCard";

const Cats = () => {
  return (
    <>
      <Header />

      <div className="mt-35 w-[80%] ml-[10%] flex justify-between">
        <AnimalsCard
          image={Cat1}
          name="Мурзик"
          gender="Мужской"
          age="2 года"
          breed="Шотландская вислоухая"
        />
        <AnimalsCard
          image={Cat2}
          name="Винкс"
          gender="Женский"
          age="3 года"
          breed="Бирманская кошка"
        />
      </div>
      <div className="mt-35 w-[80%] ml-[10%] flex justify-between">
        <AnimalsCard
          image={Cat3}
          name="Персик"
          gender="Мужской"
          age="4 года"
          breed="Пиксибоб"
        />
        <AnimalsCard
          image={Cat4}
          name="Паша"
          gender="Мужской"
          age="2 года"
          breed="Теннессийский рекс"
        />
      </div>
      <div className="mt-35 w-[80%] ml-[10%] flex justify-between">
        <AnimalsCard
          image={Cat5}
          name="Снежок"
          gender="Мужской"
          age="2 года"
          breed="Гималайская"
        />
        <AnimalsCard
          image={Cat6}
          name="Пушок"
          gender="Женский"
          age="2 года"
          breed="Таласская"
        />
      </div>
    </>
  );
};

export default Cats;
