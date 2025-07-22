import React, { useEffect, useRef, useState } from "react";
import HorizontalPanels from "../../components/HorizontalScroll";
import StoryText from "../../components/StoryText";
import MarqueeTitle from "../../components/MarqueeTitle";
import GlassNavBar from "../../components/GlassmorphicNav";
import ScrollToTopButton from "../../components/ScrolltoTopButton";
import { CardBody, CardContainer, CardItem } from "../../components/3dCard";
import StickyFooter from "../../components/StickyFooter";
import SectionWrapper from "../../components/SectionWrapper";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
import CursorLabel from "../../components/CursorLabel";
import ProgressBar from "../../components/ProgressBar"
import ExtraSection from "../../components/ExtraSection";


const images = [
    "https://cdn.myportfolio.com/cc259c28-15c7-4ced-8d2f-ef1e719e4384/7b98ce8d-815a-4833-9719-5cdec0df64df_rw_1920.png?h=b930f3951afe7915b0717eb9f5701f04",
    "https://cdn.myportfolio.com/cc259c28-15c7-4ced-8d2f-ef1e719e4384/05e227d2-3e96-4d22-8dbb-5713d857feeb_rw_3840.jpg?h=cf541b60eb9fddf35d53c0fc98462234",
    "https://cdn.myportfolio.com/cc259c28-15c7-4ced-8d2f-ef1e719e4384/2a709091-89ac-46b4-bbfc-1372ccc51bb9_rw_1920.png?h=548bc0af1b8fa49eafed8e6683ffb274",
    "https://cdn.myportfolio.com/cc259c28-15c7-4ced-8d2f-ef1e719e4384/90bbe0a2-2d13-430b-b5e7-e2c77c1869be.png?h=86dd8d886265b837c3b18167f7a78fd5",
    "https://cdn.myportfolio.com/cc259c28-15c7-4ced-8d2f-ef1e719e4384/ccf7e9b4-0e81-4e01-b96c-2e18ac078921_rw_1200.png?h=0e1f46a4cffc199d5e324f05d301d6c5"
];


const texts = [
    " ",
    "The Landing Page",
    "Responsive",
    "More info on Image 4",
    "Last image description"
];

const images2 = [
    "https://cdn.myportfolio.com/cc259c28-15c7-4ced-8d2f-ef1e719e4384/79c0e9f6-61bd-43af-b20e-d3bd4a23bf8f_rw_1920.png?h=6260dd75985417e29504b4edc63dfe9f",
    "https://cdn.myportfolio.com/cc259c28-15c7-4ced-8d2f-ef1e719e4384/737bc606-64fd-4ed1-97e1-201112a8579a_rw_1920.png?h=5d50fc615f038a98d413ff3dfc12bd2e",
    "https://cdn.myportfolio.com/cc259c28-15c7-4ced-8d2f-ef1e719e4384/94c6ddd0-2d5e-40a6-8f3d-33f143ee82aa_rw_1920.png?h=c6cb0f995f56e34d4dc9ab684dee7918",
    "https://cdn.myportfolio.com/cc259c28-15c7-4ced-8d2f-ef1e719e4384/ed73a70c-96d4-4c59-870a-a0bacd08e0bc_rw_1920.png?h=5e38c7b3f6fd02f3ce6e9686d876c9ec",
    "https://cdn.myportfolio.com/cc259c28-15c7-4ced-8d2f-ef1e719e4384/fa5d4329-e674-44a2-9305-c6dc2584e2ff_rw_1920.png?h=4e74f9ea6eb234312104b6d837648d7c"
];

const images3 = [
    "https://cdn.myportfolio.com/cc259c28-15c7-4ced-8d2f-ef1e719e4384/a21eae5a-d3c9-4bfb-a062-d3768f30a75e_rw_1920.png?h=fd824fd93ee7842bb3f948f63e1aa8dd",
    "https://cdn.myportfolio.com/cc259c28-15c7-4ced-8d2f-ef1e719e4384/f6c05e60-adb8-42cd-9a83-e4ec1047957d_rw_1920.jpeg?h=313bd9c1385fbd7c58a7d1fac13ce0de",
];

const images4 = [
    "https://cdn.myportfolio.com/cc259c28-15c7-4ced-8d2f-ef1e719e4384/d5a55438-0658-4ba2-8a4a-7bd62990c66b_rw_1920.png?h=657b862d831437ee2cffdeaf72aeecb8",
    "https://cdn.myportfolio.com/cc259c28-15c7-4ced-8d2f-ef1e719e4384/7275f91e-b173-4e94-b2a4-e43198f100d2_rw_1920.png?h=167ebd67ed4c35678710f1c43f556787",

    "https://cdn.myportfolio.com/cc259c28-15c7-4ced-8d2f-ef1e719e4384/b06492e3-0308-4108-bef5-3a2653e9a80f_rw_1920.png?h=bce9a21ccf5f8b2302c866a64c2e58cc",
    "https://cdn.myportfolio.com/cc259c28-15c7-4ced-8d2f-ef1e719e4384/cd31c8ab-8c9b-4fad-9c45-f80b0260ae08_rw_1920.png?h=ff1c320fa55dc802340d003a1287c43b",
    "https://cdn.myportfolio.com/cc259c28-15c7-4ced-8d2f-ef1e719e4384/08e43993-2992-44a7-b8eb-eb7ee4e05887_rw_1920.png?h=33b25160132d5572d659f86525a7b8c0",
    "https://cdn.myportfolio.com/cc259c28-15c7-4ced-8d2f-ef1e719e4384/4a04d0de-a35d-4b89-990d-c02833bff926_rw_1920.png?h=9bd81745bf206fd4b051d022e08cf255",
];



const sectionColors = [
    "#050506", "#0a0b10", "#0c0d15",
    "#0e1018", "#10121c", "#131522", "#151828", "#050506", "#0a0b10", "#0c0d15",
    "#0e1018", "#10121c", "#151828", "#050506",
];

const mainText =
    "TabLED, my 2024 capstone, is a custom-built interactive LED table integrating Arduino, Node.js, and precision woodworking—a showcase of innovation and technical skill.";

const secondText =
    "After completion, I proudly showcased TabLED at QUT’s annual Design Festival.";

const thirdText =
    "The TabLED app provides real-time control of the LEDs, allowing users to seamlessly adjust individual LEDs' colors, brightness, and patterns."

const fourthText =
    "Through observations and interviews, user testing was conducted in order to identify issues and improve the user experience."

    const fifthText =
    "This project showcases my full-stack approach—from building the physical table to designing the electronics and developing the web-based control interface."

    const sixthText = 
    "I built custom hardware and a responsive web server to create an interactive LED experience, showing my skills in design and software integration."

const Y2kore = () => {
    const [bgColor, setBgColor] = useState(sectionColors[0]);
    const [pageReady, setPageReady] = useState(false);
    const sectionRefs = useRef([]);

    // Handle background color switching
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0.5,
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const index = sectionRefs.current.findIndex(
                        (section) => section === entry.target
                    );
                    if (index !== -1) {
                        setBgColor(sectionColors[index]);
                    }
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        sectionRefs.current.forEach((section) => {
            if (section) observer.observe(section);
        });

        return () => {
            sectionRefs.current.forEach((section) => {
                if (section) observer.unobserve(section);
            });
        };
    }, []);

    // Wait for full layout before initializing animations
    useEffect(() => {
        const handleReady = () => {
            setTimeout(() => {
                setPageReady(true);
                ScrollTrigger.refresh();
            }, 100);
        };

        if (document.readyState === "complete") {
            handleReady();
        } else {
            window.addEventListener("load", handleReady);
            return () => window.removeEventListener("load", handleReady);
        }
    }, []);

    const setSectionRef = (el, idx) => {
        sectionRefs.current[idx] = el;
    };

    return (
        <>
            {/* Fixed background div behind all content */}
            <div
                style={{
                    position: "fixed",
                    inset: 0,
                    backgroundColor: bgColor,
                    transition: "background-color 1s ease",
                    zIndex: -1,
                }}
            />

            <ProgressBar sectionRefs={sectionRefs} />
            <div id="scroll-container" className="relative text-white">
                <main className="overflow-hidden bg-transparent text-white mb-0 pb-0">
                    <div className="h-[20vh]" />

                    <style jsx global>{`
                        html,
                        body {
                            background-color: transparent;
                            color: white;
                            margin: 0;
                            padding: 0;
                            overflow-x: hidden;
                        }
                    `}</style>

                    <GlassNavBar />

                    <SectionWrapper ref={(el) => setSectionRef(el, 0)} color="transparent">
                        <MarqueeTitle
                            text="TabLED"
                            images={[
                                "https://i.pinimg.com/736x/c2/6f/38/c26f389af29c1c14565a636ff8ca8594.jpg",
                                "https://i.pinimg.com/1200x/c9/98/1b/c9981b9ac69469c154e3fe798602f410.jpg",
                                "https://i.pinimg.com/736x/55/81/dc/5581dce37e571ef90380ff3411eb87ad.jpg",
                            ]}
                            directions={["left", "right", "left"]}
                        />
                    </SectionWrapper>
                </main>


                <SectionWrapper ref={(el) => setSectionRef(el, 1)} color="transparent">
                    <iframe
                        className="rounded-4xl shadow-lg"
                        style={{
                            width: "100vw",
                            height: "100vh",
                            objectFit: "cover",
                            border: "none",
                        }}
                        src="https://www.youtube.com/embed/EGvSu0YOL5Y?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&loop=1&playlist=EGvSu0YOL5Y"
                        title="TABLED Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    />
                </SectionWrapper>

                <SectionWrapper ref={(el) => setSectionRef(el, 2)} color="transparent">
                    <StoryText text={mainText} ready={pageReady} />
                </SectionWrapper>

                <SectionWrapper ref={(el) => setSectionRef(el, 3)} color="transparent">
                    <HorizontalPanels images={images} texts={texts} />
                </SectionWrapper>

                <SectionWrapper ref={(el) => setSectionRef(el, 4)} color="transparent">
                    <StoryText text={secondText} ready={pageReady} />
                </SectionWrapper>

                <SectionWrapper ref={(el) => setSectionRef(el, 5)} color="transparent">
                    <CursorLabel
                        text="Me at the QUT award ceremony — I won the Adobe Award ✨"
                        containerRef={sectionRefs.current[5]}
                    />
                    <HorizontalPanels images={images2} />
                </SectionWrapper>



                <SectionWrapper ref={(el) => setSectionRef(el, 7)} color="transparent">
                    <StoryText text={thirdText} ready={pageReady} />
                </SectionWrapper>

                <SectionWrapper ref={(el) => setSectionRef(el, 8)} color="transparent">
                    <HorizontalPanels images={images3} />
                </SectionWrapper>

                <SectionWrapper ref={(el) => setSectionRef(el, 9)} color="transparent">
                    <StoryText text={fourthText} ready={pageReady} />
                </SectionWrapper>
              

                <SectionWrapper ref={(el) => setSectionRef(el, 10)} color="transparent">
                <CursorLabel
                        text="I ensured to test TabLED and it's interface with a diverse range of users."
                        containerRef={sectionRefs.current[10]}
                    />
                    <HorizontalPanels images={images4} />
                </SectionWrapper>

                <SectionWrapper ref={(el) => setSectionRef(el, 9)} color="transparent">
                    <StoryText text={fifthText} ready={pageReady} />
                </SectionWrapper>
                <SectionWrapper ref={(el) => setSectionRef(el, 9)} color="transparent">
                    <StoryText text={sixthText} ready={pageReady} />
                </SectionWrapper>

                <ScrollToTopButton />



                <SectionWrapper
                    ref={(el) => setSectionRef(el, 12)}
                    color="transparent"
                    className="min-h-screen flex items-center justify-center"
                >
                     <ExtraSection
      title="EXTRA"
      descriptionTop="These are the links to my GitHub repositories, where I’ve uploaded all files for the main TabLED web server—covering both the Node.js backend and the Arduino C++ logic."
      links={[
        {
          href: "https://github.com/s4brina/TabLED",
          label: "Node.js Web Server Code →",
        },
        {
          href: "https://github.com/s4brina/ArduinoIDE-TabLED",
          label: "Arduino IDE Code (C++) →",
        },
      ]}
      descriptionMiddle={
        <>
          The <strong>Node.js server</strong> powers both the front-end and back-end of the app. It bridges the gap between the Arduino and the web interface—sending LED instructions based on user actions.
        </>
      }
      descriptionBottom={
        <>
          The <strong>Arduino code</strong> defines LED animations and behaviors—handling the real-time visual effects triggered through the interface.
        </>
      }
    />
                </SectionWrapper>

                <StickyFooter />
            </div>
        </>
    );
};

export default Y2kore;
