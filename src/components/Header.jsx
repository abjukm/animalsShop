import React from "react";
import logo from "../assets/introImg/logo.png";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const handleCardClick = (path) => {
    navigate(path);
  };
  return (
    <>
      <div className="bg-black w-full fixed top-0 left-0 z-20 h-25 flex items-center">
        <div className="w-[90%] ml-[5%] flex justify-around items-center ">
          <div
            className="flex items-center justify-between"
            onClick={() => handleCardClick("/")}
          >
            <img className="rounded-[50%]" src={logo} alt="" />
            <h1 className="text-white text-[30px] pl-5">ZooTopia</h1>
          </div>
          <p className="text-white ml-[-80px]">
            Find everything that you need for your pet
          </p>
          <p className="text-white mr-20">PetShop</p>
        </div>
      </div>
    </>
  );
}

export default Header;
