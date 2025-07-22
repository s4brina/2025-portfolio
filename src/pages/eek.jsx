import React, { useEffect, useRef, useState } from "react";
import HorizontalPanels from "../../components/HorizontalScroll";
import StoryText from "../../components/StoryText";
import MarqueeTitle from "../../components/MarqueeTitle";
import GlassNavBar from "../../components/GlassmorphicNav";
import ScrollToTopButton from "../../components/ScrolltoTopButton";
import { CardBody, CardContainer, CardItem } from "../../components/3dCard";
import StickyFooter from "../../components/StickyFooter";
import SectionWrapper from "../../components/SectionWrapper";

const images = [
    "https://cdn.myportfolio.com/cc259c28-15c7-4ced-8d2f-ef1e719e4384/dcd46f8b-a2c4-4f07-b5d0-5c8e96885245_rw_1920.png?h=cb666c7cd649222066c790c1c24255f9",
    "https://cdn.myportfolio.com/cc259c28-15c7-4ced-8d2f-ef1e719e4384/922545a9-d107-4896-aa9b-7b8494924ec9_rw_1920.png?h=fa54ef924478afb72e2a4d5260a4f20b",
    "https://cdn.myportfolio.com/cc259c28-15c7-4ced-8d2f-ef1e719e4384/d05d9024-72d1-409f-8b0c-9be7912576dd_rw_1920.png?h=5b9878e213e71ab5c55dfa988425dbbb",
    "https://cdn.myportfolio.com/cc259c28-15c7-4ced-8d2f-ef1e719e4384/b1d63206-cf0b-4598-85d5-46043d095f94_rw_1920.png?h=ed0a95fbc0e91b0a826f872d91b58340",
    "https://cdn.myportfolio.com/cc259c28-15c7-4ced-8d2f-ef1e719e4384/d05d9024-72d1-409f-8b0c-9be7912576dd_rw_1920.png?h=5b9878e213e71ab5c55dfa988425dbbb",

  ];
  
  const texts = [
    " ",
    "The Landing Page",
    "Responsive",
    "More info on Image 4",
    "Last image description",
  ];

const sectionColors = [
    "#050506", // deep black with a hint of blue
    "#0a0b10", // very dark navy
    "#0a0b10", // midnight indigo
    "#ffffff", // slightly lighter twilight
    "#10121c", // very dark desaturated sapphire
    "#131522", // muted violet-black
    "#151828", // deep slate-purple
];

const mainText =
    "EEK is a creative film portfolio I developed for a client, delivering a unique, abstract, interactive canvas-style website that challenges the typical scrolling experience.";

const secondText =
    "Visitors can use their mouse to click, drag, and zoom through the gallery. They can toggle between image views and project titles for seamless navigation, while playful details like mouse coordinate tracking add an extra layer of interactivity. ";

const Eek = () => {
    const [bgColor, setBgColor] = useState(sectionColors[0]);
    const sectionRefs = useRef([]);

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
            if (observer) {
                sectionRefs.current.forEach((section) => {
                    if (section) observer.unobserve(section);
                });
            }
        };
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

                }

                }

            />

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
                            text="eek.cool"
                            images={[
                                "https://cdn.myportfolio.com/cc259c28-15c7-4ced-8d2f-ef1e719e4384/80d89086-d904-4ba2-b364-8fb1e5422e29_rw_1920.png?h=f7b2f11843075e7cc47f15be347f8f8d",
                                "https://cdn.myportfolio.com/cc259c28-15c7-4ced-8d2f-ef1e719e4384/7e674f08-75c0-4ff0-a1ce-3ea8f23d8e8b_rw_1920.png?h=093563eec4da7c5f9347ffe8c20d6555",
                                "https://eek.cool/chatreuse.png",
                            ]}
                            directions={["left", "right", "left"]}
                        />
                    </SectionWrapper>
                </main>

               

                <SectionWrapper ref={(el) => setSectionRef(el, 2)} color="transparent">
                    <StoryText text={mainText} />
                </SectionWrapper>

                <SectionWrapper ref={(el) => setSectionRef(el, 3)} color="transparent">
                <HorizontalPanels images={images} texts={texts} />
                </SectionWrapper>

                <SectionWrapper ref={(el) => setSectionRef(el, 4)} color="transparent">
                    <StoryText text={secondText} />
                </SectionWrapper>

                <ScrollToTopButton />

               

                <SectionWrapper
                    ref={(el) => setSectionRef(el, 4)}
                    color="transparent"
                    className="min-h-screen flex items-center justify-center"
                >
                    <h2 className="text-5xl font-semibold">Next vertical section</h2>
                </SectionWrapper>

                <StickyFooter />
            </div>
        </>
    );
};

export default Eek;
