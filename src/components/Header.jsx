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
        <div className="w-[94%] ml-[3%] flex justify-between items-center ">
          <div className="w-50 flex items-center justify-between">
            <img
              className="rounded-[50%]"
              src={logo}
              alt=""
              onClick={() => handleCardClick("/")}
            />
            <h1 className="text-white text-[30px]">ZooTopia</h1>
          </div>
          <p className="text-white">
            Find everything that you need for your pet
          </p>
          <p className="text-white">PetShop</p>
        </div>
      </div>
    </>
  );
}

export default Header;
