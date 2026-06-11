import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useState } from "react";
import { FaArrowDownLong } from "react-icons/fa6";
function App() {
  const [showContent, setShowContent] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  });

  useGSAP(() => {

    if(!showContent) return;

   gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-1",
      ease: "Expo.easeInOut",
    });

    gsap.to(".sky", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".bg", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".character", {
      scale: 0.7,
      x: "-50%",
      bottom: "-50%",
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".text", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });
    const main = document.querySelector(".main");
    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".main .text", {
        x: `${xMove * 0.4}%`,
      });
      gsap.to(".sky", {
        x: xMove,
      });
      gsap.to(".bg", {
        x: xMove * 1.7,
      });
    });
  },[showContent] );
  return (
    <>
      <div className="svg  fixed flex items-center justify-between top-0 left-0 z-[100] w-full h-screen bg-[#000] overflow-hidden">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYmid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./src/assets/bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYmid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && (
        <div className="main w-full rotate-[-10deg] scale-[1.7]">
          <div className="loading overflow-hidden relative w-full h-screen bg-black">
            <div className="navbar absolute w-full left-0 top-0 z-[10]  py-5 px-10 ">
              <div className="logo flex gap-7 items-center ">
                <div className="lines flex flex-col gap-1 ">
                  <div className="line  w-10 h-1 bg-white"></div>
                  <div className="line  w-7.5 h-1 bg-white"></div>
                  <div className="line  w-5 h-1 bg-white"></div>
                </div>
                <h3 className="text-3xl text-white leading-none">Rockstart</h3>
              </div>
            </div>
            <div className=" imagesdiv relative w-full h-screen">
              <img
                className="absolute sky  overflow-hidden scale-x-[1.4] rotate-[-20deg] top-0 left-0 w-full h-full object-cover"
                src="./src/assets/sky.png"
                alt=""
              />
              <img
                className="absolute bg scale-x-[1.5] rotate-[-25deg] top-0 left-0 w-full h-full object-cover"
                src="./src/assets/bg.png"
                alt=""
              />
              <div className=" text flex flex-col  text-white gap-3 absolute top-10 left-1/2 -translate-x-1/2   ">
                <h1 className="text-[6rem] leading-none -ml-30 ">grand</h1>
                <h1 className="text-[6rem] leading-none ml-5 ">theft</h1>
                <h1 className="text-[6rem] leading-none -ml-30 ">auto</h1>
              </div>

              <img
                className="absolute character -bottom-[50%] left-1/2 -translate-x-1/2 scale-[3] rotate-[-20deg] "
                src="./src/assets/girlbg.png"
                alt=""
              />
            </div>
            <div className="btmbar absolute  bottom-0 left-0 w-full py-8 px-10 bg-gradient-to-t from-black to-transparent">
              <div className="flex gap-4 items-center">
                <FaArrowDownLong size={30} color="white" />
                <h3 className="text-xl text-white">Scroll Down</h3>
              </div>
              <img
                className="absolute top-1/2 left-1/2 h-[50px] -translate-x-1/2 -translate-y-1/2 "
                src="./src/assets/ps5.png"
                alt=""
              />
            </div>
          </div>
          <div className="w-full absolute h-screen flex  items-center justify-center px-10 bg-black">
            <div className="cantr w-full h-[80%] flex  ">
              <div className="limg  relative w-1/2 h-full  ">
                <img
                  className="absolute scale-[0.8] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
                  src="./src/assets/imag.png"
                  alt=""
                />
              </div>
              <div className="rg w-[40%] text-white">
                <h1 className=" text-7xl">Still Running,</h1>
                <h1 className="text-7xl">Not Huntinig</h1>
                <p className="mt-10 text-xl font-[Helvetica_Now_Display]">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Laborum itaque quae corrupti blanditiis obcaecati saepe beatae
                  sapiente totam.
                  
                </p>
                <p className="mt-3 text-xl font-[Helvetica_Now_Display]">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Laborum itaque quae corrupti blanditiis obcaecati saepe beatae
                  sapiente totam in voluptatibus nemo nam harum reprehenderit
                  consectetur tempora, rerum repudiandae libero fugit.
                </p>
                
                <button className="bg-yellow-500 px-5 py-5 text-black text-2xl mt-10">Download NOw</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
