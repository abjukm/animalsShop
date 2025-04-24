import React from "react";
import { useNavigate } from "react-router-dom";
import Photo from "../assets/img/Intro.jpg";
import fotodog from "../assets/img/fotodog.png";

function Main() {
  const navigate = useNavigate();

  const handleCardClick = (path) => {
    navigate(path);
  };
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
              <button className="text-3xl font-bold mt-10 text-white bg-black rounded-3xl h-15 w-50 transition-transform transform hover:scale-105 hover:bg-gray-800 ">
              </button>
              <button
                className="text-3xl font-bold mt-10 text-white bg-black rounded-3xl h-15 w-50"
                onClick={() => handleCardClick("/registr")}
              >
                Join
              </button>
            </div>
            <div className="">
              <img src={Photo} alt="" />
            </div>
          </div>
        </section>

        <div className="flex flex-col justify-center max-w-xl  rounded-xl ml-50 min-h-screen">
          <h1 className="text-xl font-semibold">some good advice for</h1>
          <h1 className="text-xl font-semibold mb-4">
            taking care of your pet:
          </h1>

          <div className="text-[#5C5C5C] space-y-4 rounded-md p-4">
            <div>
              <p className="font-semibold">patience and understanding:</p>
              <p>
                understand the pets have their personalities.
                <br />
                be patient, especially during training.
              </p>
            </div>

            <div>
              <p className="font-semibold">educate yourself:</p>
              <p>
                learn about your pet’s specific breed, behaviors, and health
                requirements.
              </p>
            </div>

            <div>
              <p className="font-semibold">emergency preparedness:</p>
              <p>
                familiarize yourself with the location of the nearest emergency
                veterinary clinic.
              </p>
            </div>

            <div>
              <p className="font-semibold">positive reinforcement:</p>
              <p>learn positive reinforcement techniques.</p>
            </div>
          </div>
          <img src={fotodog} alt="" className="absolute ml-150" />
        </div>
      </main>
    </>
  );
}

export default Main;
