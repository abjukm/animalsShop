import React from "react";
import logo from "../../assets/img/Woman.svg";
import user1 from "../../assets/img/user1.svg";
import heart from "../../assets/img/heart.svg";
import shopping from "../../assets/img/shopping-bag.svg";
import cord from "../../assets/img/credit-card.svg";
import vector from "../../assets/img/Vector.svg";
import apen from "../../assets/img/Apen.svg";
import Header from "../Header";

const Section = () => {
  return (
    <>
      <Header />
      <main className="flex mt-25 fixed w-full h-full">
        <div className="w-[200px]  h-[660px] ps-[20px] bg-black text-white flex flex-col justify-between rounded-br-[100px] z-20 ">
          <div className="h-[300px] flex flex-col justify-evenly mt-15">
            <div className="flex items-center hover:text-[#EBC154] cursor-pointer">
              <img className="" src={user1} alt="userr" />
              <p className="">Profile</p>
            </div>
            <div className="flex hover:text-[#EBC154] cursor-pointer">
              <img className="" src={heart} alt="" />
              <p className="">Favorites</p>
            </div>
            <div className="flex items-center hover:text-[#EBC154] cursor-pointer">
              <img className="" src={shopping} alt="" />
              <p className="">Previous Shops</p>
            </div>
            <div className="flex items-center hover:text-[#EBC154] cursor-pointer">
              <img className="" src={cord} alt="" />
              <p className="">Peyment</p>
            </div>
          </div>
          <div>
            <div className="flex items-center my-[20px] mb-10 hover:text-[#EBC154] cursor-pointer">
              <img className="" src={vector} alt="" />
              <p className="">Settings</p>
            </div>
          </div>
        </div>
        <div className="absolute mt-110 ml-0 bg-amber-50 z-10 w-50 h-50"></div>
        <div className="w-full h-[660px] bg-black z-10">
          <div className="rounded-tl-[120px] w-full h-full bg-amber-50 p-[100px]">
            <div className="w-[70%] flex justify-between items-end ml-50 mt-10">
              <div className="">
                <div className="flex flex-col justify-between h-[370px]">
                  <div className="flex items-center justify-between">
                    <h1 className="font-bold text-3xl">EDIT YOUR PROFILE</h1>
                    <div className="mе-6 relative">
                      <img src={logo} alt="" className="object-cover" />
                      <img
                        src={apen}
                        alt=""
                        className="absolute bottom-6 left-6"
                      />
                    </div>
                  </div>
                  <h1 className="font-bold">PROFILE</h1>
                  <div>
                    <input
                      type="text"
                      className="block w-[450px] mb-5 border-b-2 border-black text-base py-2 focus:outline-none"
                      placeholder="Name"
                    />
                    <input
                      type="text"
                      className="block w-[450px] mb-5 border-b-2 border-black text-base py-2 focus:outline-none"
                      placeholder="Surname"
                    />
                    <input
                      type="email"
                      className="block w-[450px] mb-5 border-b-2 border-black text-base py-2 focus:outline-none"
                      placeholder="Email Address"
                    />

                    <div className="block w-[450px] mb-5 border-b-2 border-black text-base py-2 pr-10 focus:outline-none relative">
                      <input
                        type="password"
                        placeholder="Password"
                        id="password"
                      />
                      <span
                        className="absolute right-2 top-2 text-gray-500 cursor-pointer"
                        onClick="togglePassword()"
                      >
                        👁️
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <button className="bg-black text-white font-bold py-3 px-6 rounded-full text-base flex items-center gap-2 hover:bg-gray-800 transition cursor-pointer">
                  LogOut
                  <span className="w-5 h-5">&#10132;</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Section;
