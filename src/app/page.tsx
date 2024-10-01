"use client"
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [storyStep, setStoryStep] = useState("beginStory")
  const [storyPreferences, setStoryPreferences] = useState({
    ageGroup: '',
    genre: '',
    characterLength: "",
    storyType: ""
  });
  function handleStoryStepChange(storyStep: string) {
    switch (storyStep) {
      case "beginStory": setStoryStep("selectAgeGroup");
        break;
      case "selectAgeGroup": setStoryStep("selectGenre");
        break;
      case "selectGenre": setStoryStep("characterLength");
        break;
      case "characterLength": setStoryStep("storyType");
        break;
      case "storyType": setStoryStep("success");
        setStoryPreferences({
          ageGroup: '',
          genre: '',
          characterLength: "",
          storyType: ""
        })
        break;
      case "success": setStoryStep("beginStory");
        break;

    }
  }
  const { ageGroup, genre, characterLength, storyType } = storyPreferences;
  console.log("storystep", storyStep);
  console.log("storyPreferences", storyPreferences);
  return (
    <div className=" h-screen  relative grid place-items-center ">
      <Image src={"/images/bgBubbles.svg"} height={854} width={1073} className="h-full max-h-screen -z-10 w-fit absolute -top-24 p-0 left-0 bg-contain" alt="tinytales logo" />

      <div className="w-full  max-w-[980px] min-h-[512px] p-7 rounded-[28px] backdrop-blur-3xl bg-white/[13%] mx-auto shadow-[0px_0px_10px_5px_rgba(255,255,255,0.2)]">
        <div className="grid place-items-center gap-3">
          <Image src={"/images/tinlytalesicon.svg"} height={78} width={78} className="size-[50px] md:size-[78px]" alt=" tinytales logo Icon" />
          <p className="md:text-[40px] text-white text-center tracking-[10px] font-extrabold">TinyTales</p>
        </div>
        <br className="h-8" />


        {/* story steps */}


        {/* beginStory */}
        {storyStep === "beginStory" && (
          <div className="grid place-items-center gap-4">
            <p className="md:text-lg text-white text-center max-w-[560px] leading-normal">Unleash your imagination! Write your story type below, and watch it come to life!</p>
            {/* <button onClick={() => handleStoryStepChange(storyStep)} className="flex justify-center items-center gap-3 w-full max-w-96 py-4 bg-[#026E78] rounded-md mx-auto cursor-pointer hover:opacity-70">
              <span className="text-white text-lg font-semibold ">•    Create Tale </span>
              <Image src={"/images/magicStick.svg"} height={35} width={35} className="size-[20px] md:size-[35px]" alt="magic stick" />
            </button> */}

            {/* <button
              onClick={() => handleStoryStepChange(storyStep)}
              className="flex justify-center items-center gap-3 w-full max-w-96 py-4 bg-[#026E78] rounded-md mx-auto cursor-pointer hover:bg-[#028a96] hover:scale-105 transition-transform duration-300 ease-out shadow-lg hover:shadow-xl group"
            >
              <span className="text-white text-lg font-semibold">• Create Tale</span>
              <Image
                src="/images/magicStick.svg"
                height={35}
                width={35}
                className="size-[20px] md:size-[35px] transition-transform duration-500 ease-out group-hover:rotate-12 delay-200"
                alt="magic stick"
              />
            </button> */}

            {/* 
            <button
              onClick={() => handleStoryStepChange(storyStep)}
              className="flex justify-center items-center gap-3 w-full max-w-96 py-4 bg-[#026E78] rounded-md mx-auto cursor-pointer hover:bg-[#028a96] hover:scale-105 transition-transform duration-300 ease-out shadow-lg hover:shadow-xl group hover:animate-pulse"
            >
              <span className="text-white text-lg font-semibold group-hover:animate-bounce">• Create Tale</span>
              <Image
                src="/images/magicStick.svg"
                height={35}
                width={35}
                className="size-[20px] md:size-[35px] transition-transform duration-500 ease-out group-hover:rotate-[360deg] group-hover:animate-shake"
                alt="magic stick"
              />
            </button> */}


            <button
              onClick={() => handleStoryStepChange(storyStep)}
              className="flex justify-center items-center gap-3 w-full max-w-96 py-4 bg-[#026E78] rounded-md mx-auto cursor-pointer hover:bg-[#028a96] hover:scale-105 transition-transform duration-300 ease-out shadow-lg hover:shadow-xl group"
            >
              <span className="text-white text-lg font-semibold">• Create Tale</span>
              <Image
                src="/images/magicStick.svg"
                height={35}
                width={35}
                className="size-[20px] md:size-[35px] transition-transform duration-1000 ease-out group-hover:rotate-[360deg]"
                alt="magic stick"
              />
            </button>

          </div>
        )}

        {storyStep === "selectAgeGroup" && (
          <div className="grid place-items-center gap-8">
            <p className="text-white text-lg tracking-wide text-center ">Select an age group to generate a story tailored for that audience.</p>
            <div className="flex justify-center items-center flex-wrap gap-3">

              {["1-13", "14-19", "20-30", "30+"].map((age: string, index) => (
                <div
                  key={index}
                  onClick={() => setStoryPreferences(prevState => ({
                    ...prevState,
                    ageGroup: age
                  }))}
                  className={`${ageGroup === age ? 'bg-gradient-to-r from-[#3aadda] to-[#0f41a7]' : 'bg-gradient-to-r from-[#3ba9d4a8] to-[#305c9e8a]'}  cursor-pointer text-white  px-12 py-4 rounded-full transition duration-300 hover:bg-gradient-to-r hover:from-[#3aadda] hover:to-[#0f41a7]`}>
                  {age}
                </div>

              ))}
            </div>

            <button
              onClick={() => handleStoryStepChange(storyStep)}
              className="flex justify-center items-center gap-3 w-full max-w-96 py-4 bg-[#026E78] rounded-md mx-auto cursor-pointer hover:bg-[#028a96] hover:scale-105 transition-transform duration-300 ease-out shadow-lg hover:shadow-xl group"
            >
              <span className="text-white text-lg font-semibold">Contiue</span>
              <Image
                src="/images/magicStick.svg"
                height={35}
                width={35}
                className="size-[20px] md:size-[35px] transition-transform duration-1000 ease-out group-hover:rotate-[360deg]"
                alt="magic stick"
              />
            </button>
          </div >
        )
        }

        {storyStep === "selectGenre" && (
          <div className="grid place-items-center gap-8">
            <p className="text-white text-lg tracking-wide text-center ">Select any Genre to generate a story tailored for that audience.</p>
            <div className="flex justify-center flex-wrap items-center gap-3">

              {["Fantasy", "Comedy", "Horror", "Romance", "Science Fiction"].map((genreText: string, index) => (
                <div key={index} onClick={() => setStoryPreferences(prevState => ({
                  ...prevState,
                  genre: genreText
                }))} className={` ${genre === genreText ? 'bg-gradient-to-r from-[#3aadda] to-[#0f41a7]' : 'bg-gradient-to-r from-[#3ba9d4a8] to-[#305c9e8a]'} cursor-pointer text-white px-12 py-4 rounded-full hover:bg-gradient-to-r hover:from-[#3aadda] hover:to-[#0f41a7] `}>{genreText}</div>

              ))}
            </div>
            <button
              onClick={() => handleStoryStepChange(storyStep)}
              className="flex justify-center items-center gap-3 w-full max-w-96 py-4 bg-[#026E78] rounded-md mx-auto cursor-pointer hover:bg-[#028a96] hover:scale-105 transition-transform duration-300 ease-out shadow-lg hover:shadow-xl group"
            >
              <span className="text-white text-lg font-semibold">Contiue</span>
              <Image
                src="/images/magicStick.svg"
                height={35}
                width={35}
                className="size-[20px] md:size-[35px] transition-transform duration-1000 ease-out group-hover:rotate-[360deg]"
                alt="magic stick"
              />
            </button>
          </div >
        )}

        {storyStep === "characterLength" && (
          <div className="grid place-items-center flex-wrap gap-8">
            <p className="text-white text-lg tracking-wide text-center ">Select how many characters you want in your story.</p>
            <div className="flex justify-center items-center gap-3">

              {["One", "Two", "Three", "Four"].map((characterLengthText: string, index) => (
                <div key={index} onClick={() => setStoryPreferences(prevState => ({
                  ...prevState,
                  characterLength: characterLengthText
                }))} className={`${characterLength === characterLengthText ? 'bg-gradient-to-r from-[#3aadda] to-[#0f41a7]' : 'bg-gradient-to-r from-[#3ba9d4a8] to-[#305c9e8a]'} cursor-pointer text-white  px-12 py-4 rounded-full hover:bg-gradient-to-r hover:from-[#3aadda] hover:to-[#0f41a7] `}>{characterLengthText}</div>

              ))}
            </div>
            <button
              onClick={() => handleStoryStepChange(storyStep)}
              className="flex justify-center items-center gap-3 w-full max-w-96 py-4 bg-[#026E78] rounded-md mx-auto cursor-pointer hover:bg-[#028a96] hover:scale-105 transition-transform duration-300 ease-out shadow-lg hover:shadow-xl group"
            >
              <span className="text-white text-lg font-semibold">Contiue</span>
              <Image
                src="/images/magicStick.svg"
                height={35}
                width={35}
                className="size-[20px] md:size-[35px] transition-transform duration-1000 ease-out group-hover:rotate-[360deg]"
                alt="magic stick"
              />
            </button>
          </div >
        )}

        {storyStep === "storyType" && (
          <div className="grid place-items-center gap-4">
            <p className="md:text-lg text-white text-center max-w-[560px] leading-normal font-[family-name:var(--font-baloo-tamma)]">Unleash your imagination! Write your story type below, and watch it come to life!</p>
            <input value={storyType} onChange={(e) => setStoryPreferences(prevState => ({
              ...prevState,
              storyType: e.target.value
            }))} type="text" placeholder="Enter your story type" className="w-full text-white bg-[#FDFDFF]/30 py-4 px-2 outline-none max-w-96  rounded-md" />
            <button
              onClick={() => handleStoryStepChange(storyStep)}
              className="flex justify-center items-center gap-3 w-full max-w-96 py-4 bg-[#026E78] rounded-md mx-auto cursor-pointer hover:bg-[#028a96] hover:scale-105 transition-transform duration-300 ease-out shadow-lg hover:shadow-xl group"
            >
              <span className="text-white text-lg font-semibold">Create Tale</span>
              <Image
                src="/images/magicStick.svg"
                height={35}
                width={35}
                className="size-[20px] md:size-[35px] transition-transform duration-1000 ease-out group-hover:rotate-[360deg]"
                alt="magic stick"
              />
            </button>
          </div>
        )}

        {storyStep === "success" && (
          <div className="grid place-items-center gap-8">
            <p className="md:text-[30px] text-white text-center tracking-wide font-bold">Hooray! Your Story is generated successfully.</p>
            <p className="md:text-[20px] text-white text-center tracking-wide font-normal">Create a new story? <button onClick={() => handleStoryStepChange(storyStep)} className="underline hover:opacity-70 cursor-pointer text-[#3aadda]">Generate new tale</button></p>
          </div>

        )}

      </div >

    </div >
  );
}
