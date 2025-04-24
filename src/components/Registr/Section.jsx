import React from "react";
import logo from "../../assets/img/Woman.svg";
import user1 from "../../assets/img/user1.svg";
import heart from "../../assets/img/heart.svg";
import shopping from "../../assets/img/shopping-bag.svg";
import cord from "../../assets/img/credit-card.svg"
import vector from "../../assets/img/Vector.svg";
import apen from "../../assets/img/Apen.svg";

const Section = () => {
  return (
    <>
      <main className="flex">
        <div className="w-[200px]  h-[500px] ps-[20px] bg-black text-white flex flex-col justify-between rounded-br-[50px] ">
          <div className="h-[300px] flex flex-col justify-evenly">
            <div className="flex">
              <img className="" src={user1} alt="userr" />
              <p className="">Profile</p>
            </div>
            <div className="flex">
              <img className="" src={heart} alt="" />
              <p className="">Favorites</p>
            </div>
            <div className="flex">
              <img className="" src={shopping} alt="" />
              <p className="">Previous Shops</p>
            </div>
            <div className="flex">
              <img className="" src={cord} alt="" />
              <p className="">Peyment</p>
            </div>
          </div>
          <div>
            <div className="flex my-[20px]">
              <img className="" src={vector} alt="" />
              <p className="">Settings</p>
            </div>
          </div>
        </div>
        <div className="w-[1100px] h-[500px] bg-black">
          <div className="rounded-tl-[50px] w-full h-full bg-amber-50 flex p-[100px] justify-between items-end">
            <div className="">
              <div>
                <h1 className="font-bold">EDIT YOUR PROFILE</h1>
                <div className="mе-6">
                  <img src={logo} alt="" />
                  <img src={apen} alt="" className="" />
                </div>
                <h1 className="font-bold">PROFILE</h1>
                <div>
                  <input
                    type="text"
                    className="block w-[300px] mb-5 border-b-2 border-black text-base py-2 focus:outline-none"
                    placeholder="Name"
                  />
                  <input
                    type="text"
                    className="block w-[300px] mb-5 border-b-2 border-black text-base py-2 focus:outline-none"
                    placeholder="Surname"
                  />
                  <input
                    type="email"
                    className="block w-[300px] mb-5 border-b-2 border-black text-base py-2 focus:outline-none"
                    placeholder="Email Address"
                  />

                  <div className="block w-[300px] mb-5 border-b-2 border-black text-base py-2 pr-10 focus:outline-none relative">
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
              <button className="bg-black text-white font-bold py-3 px-6 rounded-full text-base flex items-center gap-2 hover:bg-gray-800 transition">
                Logout
                <span className="w-5 h-5">&#10132;</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Section