import React from "react";
import Header from "../components/Header";
import AnimalsCard from "../helpers/AnimalsCard";
import cat from "../assets/introImg/cats.png";
import dog from "../assets/introImg/dogs.png";

function Cats() {
  return (
    <>
      <Header />
      <div className="mt-35 w-[80%] ml-[10%] flex justify-around">
        <AnimalsCard
          image={cat}
          name="Мурзик"
          gender="Мужской"
          age="2 года"
          breed="Шотландская вислоухая"
        />
        <AnimalsCard
          image={dog}
          name="Мурзик"
          gender="Мужской"
          age="2 года"
          breed="Шотландская вислоухая"
        />
      </div>
    </>
  );
}

export default Cats;
