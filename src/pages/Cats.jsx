import React from "react";
import Cat1 from "../../src/assets/cat1.jpg"
import Cat2 from "../../src/assets/cat2.jpg"
import Cat3 from "../../src/assets/photo3.jpg"
import Cat4 from "../../src/assets/cat5.webp"

const Cats = () => {

  return (
    <>
     <main className="mt-20">
     <h1 className="text-3xl font-bold">Cats Page</h1>
      <div className="w-full  h-100 flex justify-around ">
        <div className="w-5/12 bg-blue-300 rounded-3xl flex items-center justify-start">
        <img src={Cat1} alt="" className="w-5/10 rounded-4xl" />
        <p className="text-2xl font-bold ml-10 ">Mурзик<br />2года <br />Бирманская кошка</p>
        </div>
        <div className="w-5/12 bg-blue-300 rounded-3xl flex items-center justify-start">
        <img src={Cat2} alt="" className="w-5/10 rounded-4xl" />
        <p className="text-2xl font-bold ml-10 ">Барсик<br />2года <br />Шотландская вислоухая</p></div>
        
      </div>
      <div className=" mt-20 w-full  h-100 flex justify-around">
      <div className="w-5/12 bg-blue-300 rounded-3xl flex items-center justify-start">
        <img src={Cat3} alt="" className="w-5/10 h-60 rounded-4xl" />
        <p className="text-2xl font-bold ml-10 ">Тайга<br />3года <br />Пиксибоб</p>
        </div>
        <div className="w-5/12 bg-blue-300 rounded-3xl flex items-center justify-start"> 
        <img src={Cat4} alt="" className="w-5/10 rounded-4xl" />
        <p className="text-2xl font-bold ml-10 ">Смоки<br />2года <br />Теннессийский рекс</p></div>
      </div>
     </main>
    </>
  );
};

export default Cats;
