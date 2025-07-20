import React, { useEffect, useRef } from 'react';
import HeroText from './HeroText';
// import './HeroSection.css';

const HeroSection = () => {
  const unicornEmbedRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.unicorn.studio/v1.3.2/unicornStudio.umd.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.UnicornStudio.addScene({
        elementId: "unnati-srivastava",
        fps: 100,
        scale: 1,
        dpi: 1,
        lazyLoad: true,
        filePath: "./assets/effect.json",
        interactivity: {
          mouse: {
            disableMobile: true,
          },
        },
      }).catch((err) => console.error("Error initializing scene:", err));
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Unicorn Background */}
      <div className="absolute inset-0 z-0">
        <div
          id="unnati-srivastava"
          ref={unicornEmbedRef}
          className="w-full h-full"
        />
      </div>

      {/* Content Layer */}
            <div className="absolute inset-0 z-10 flex flex-col h-full items-start justify-center px-8 sm:px-12 lg:px-16 gap-4">
        <div className="flex flex-col items-start">
          <h1 className="text-white text-7xl font-Gabarito mt-12">
            Hi, I'm Unnati.
          </h1>
<p className="text-white text-2xl font-Gabarito mt-6">
  I'm a full-stack developer with hands-on experience in building scalable web applications using Next.js Node.js and AI. I contribute to open source, write blogs, and craft smooth user experiences with GSAP and Framer Motion.
  <br /><br />
  You can follow me on{" "}
  <a href="www.linkedin.com/in/unnatisrivastava" target="_blank" rel="noopener noreferrer" className="underline text-[#d6995c] hover:text-blue-200">LinkedIn</a>,{" "}
  <a href="https://github.com/unnati06" target="_blank" rel="noopener noreferrer" className="underline text-[#d6995c] hover:text-blue-200">GitHub</a>,{" "}
  <a href="https://medium.com/@unnatisrivastava0603" target="_blank" rel="noopener noreferrer" className="underline text-[#d6995c] hover:text-blue-200">Medium</a>,{" "}
  <a href="https://x.com/UnnatiSriv06" target="_blank" rel="noopener noreferrer" className="underline text-[#d6995c] hover:text-blue-200">X</a>, and{" "}
  <a href="https://discord.com/channels/@me/1369382049672073228" target="_blank" rel="noopener noreferrer" className="underline text-[#d6995c] hover:text-blue-200">Discord</a>.
</p>

        </div>
        <div className="mt-4">
          <button className="text-white text-lg font-Gabarito border-2 border-white rounded-full px-4 py-2 hover:bg-white hover:text-black transition">
            <a
              href="https://drive.google.com/file/d/1SKHfUiRHZ_mfi85rjFsEqGGLjdzkqEiv/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume
            </a>
          </button>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <dotlottie-player
            src="https://lottie.host/66ab2b25-d8e8-4f3f-b48f-37ff3d4bcb54/wZekMymZx9.lottie"
            background="transparent"
            speed="1"
            style={{ width: "300px", height: "300px" }}
            loop
            autoplay
          ></dotlottie-player>
        </div>
      </div>

    </div>
  );
};


export default HeroSection;