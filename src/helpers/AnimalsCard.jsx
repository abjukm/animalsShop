import React from "react";

const AnimalsCard = ({ image, name, age, gender, breed }) => {
  return (
    <div className="flex max-w-2xl rounded-2xl shadow-lg overflow-hidden bg-white">
      <img src={image} alt={name} className="w-1/3 object-cover h-64" />
      <div className="w-2/3 p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-2">{name}</h2>
          <p className="text-gray-700">Пол: {gender}</p>
          <p className="text-gray-700">Возраст: {age}</p>
          <p className="text-gray-700">Порода: {breed}</p>
        </div>
        <button className="mt-4 bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition">
          Забрать
        </button>
      </div>
    </div>
  );
};

export default AnimalsCard;
