import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import { Frameworks } from "../components/FrameWorks";
import ReadBlogsButton from "../components/CopyEmailButton";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Float } from "@react-three/drei";
import { Astronaut } from "../components/Astronaut";
import Loader from "../components/Loader";


const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
       <div className="absolute top-[-35vh] right-[-30vh] translate-y-0 w-[700px] h-[700px] md:w-[700px] md:h-[700px] overflow-visible">
  <Canvas camera={{ position: [0, 0, 2.5] }}>
    <Suspense fallback={<Loader />}>
      <Float>
        <Astronaut scale={0.15} position={[0, -0.75, 0]} />
      </Float>
    </Suspense>
  </Canvas>
</div>

          <div className="z-10">
            <p className="headtext">Hi, I'm Unnati Srivastava</p>
            <p className="subtext">
              I am a dedicated and results-driven full-stack developer passionate about building efficient, scalable, and user-centric web applications. Proficient in front-end technologies like React.js, and well-versed in back-end development with Node.js, MongoDB, Redis, WebRTC, I thrive on crafting seamless solutions that bridge design and functionality. With a strong focus on problem-solving and innovation, my goal is to create impactful digital experiences that empower businesses and delight users.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl text-gray-500">
              LET'S CODE MAGIC
            </p>
            <Card
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              text="Fullstack"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text="SEO"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
              text="Scalability"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              text="Responsiveness"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              text="Testing"
              containerRef={grid2Container}
            />
            {/* <Card
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
              image="assets/logos/csharp-pink.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "70%", left: "25%" }}
              image="assets/logos/dotnet-pink.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "5%", left: "10%" }}
              image="assets/logos/blazor-pink.png"
              containerRef={grid2Container}
            /> */}
          </div>
        </div>
        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              I'm based in INDIA, and open to remote work worldwide
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>
        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Have a look at my blogs.
            </p>
            <ReadBlogsButton />
          </div>
        </div>
        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headText">Teck Stack</p>
            <p className="subtext">
              I specialize in a variety of languages, frameworks, and tools that
              allow me to build robust and scalable applications
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
