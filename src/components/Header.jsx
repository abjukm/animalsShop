import React from "react";
import logo from "../assets/introImg/logo.png";
import { useNavigate } from "react-router-dom";
import petshop from "../assets/footicon/petshop.svg";

function Header() {
  const navigate = useNavigate();

  const handleCardClick = (path) => {
    navigate(path);
  };
  return (
    <>
      <div className="bg-black w-full fixed top-0 left-0 z-20 h-25 flex items-center">
        <div className="w-full flex justify-between items-center ml-[20px]">
          <div className="flex items-center justify-between">
            <img
              className="rounded-[50%] overflow-hidden transition-transform transform hover:scale-120 cursor-pointer"
              src={logo}
              alt=""
              onClick={() => handleCardClick("/registr")}
            />
            <h1 className="text-white text-[30px] pl-5">ZooTopia</h1>
          </div>
          <p className="text-white ml-[-80px] text-[25px]">
            Найдите все, что вам нужно для вашего питомца
          </p>
          <img
            src={petshop}
            alt=""
            className="mr-20 cursor-pointer overflow-hidden transition-transform transform hover:scale-120"
            onClick={() => handleCardClick("/")}
          />
        </div>
      </div>
    </>
  );
}

export default Header;
