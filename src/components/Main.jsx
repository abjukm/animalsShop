import React from "react";
import Photo from "../assets/img/Intro.jpg";

const Main = () => {
  return (
    <>
      <main className="w-full ">
        <section className="w-full h-100 bg-black flex items-center justify-center ">
          <div className="w-10/12 h-80 bg-white rounded-3xl flex items-center justify-around  ">
            <div>
              <div className="text-3xl font-bold ">
                <p>
                  Become a member;
                  <br />
                  Get a discount{" "}
                </p>
              </div>
              <button className="text-3xl font-bold mt-10 text-white bg-black rounded-3xl h-15 w-50">
                Join
              </button>
            </div>
            <div className="">
              <img src={Photo} alt="" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Main;
