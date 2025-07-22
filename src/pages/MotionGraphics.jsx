import React, { useEffect, useRef, useState } from "react";
import HorizontalPanels from "../../components/HorizontalScroll";
import StoryText from "../../components/StoryText";
import MarqueeTitle from "../../components/MarqueeTitle";
import GlassNavBar from "../../components/GlassmorphicNav";
import ScrollToTopButton from "../../components/ScrolltoTopButton";
import { CardBody, CardContainer, CardItem } from "../../components/3dCard";
import StickyFooter from "../../components/StickyFooter";
import SectionWrapper from "../../components/SectionWrapper";
import ExtraSection from "../../components/ExtraSection";

const images = [
    "https://github.com/s4brina/motion-graphics/raw/refs/heads/main/ECHOFINAL_1.mp4",
    "https://github.com/s4brina/motion-graphics/raw/refs/heads/main/ECHOFINAL_2.mp4",
    "https://github.com/s4brina/motion-graphics/raw/refs/heads/main/SPIN_2.mp4",
    "https://github.com/s4brina/motion-graphics/raw/refs/heads/main/orange.mp4",
"https://github.com/s4brina/motion-graphics/raw/refs/heads/main/sabrina-dragani-kinetic.mp4",
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
    "I dabble in 2d animation - here are some of my Motion Graphics works made with Adobe After Effects.";


const MotionGraphics = () => {
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
                            text="Motion Design"
                            images={[
                                "https://i.pinimg.com/originals/27/12/22/27122204d43e88725018ff4ebec3e260.gif",
                                "https://media3.giphy.com/media/v1.Y2lkPTZjMDliOTUybDAzcmZrbTZ3cjY2dGFuNWU1bmx4a2lkMWhmZWl2a2hxNm5hbWdjcyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/xUOxeRITrMzqPwbPJ6/source.gif",
                                "https://cdn.motiondesign.school/uploads/2021/03/Lesson_1.gif",
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

             


                <ScrollToTopButton />



        

                <StickyFooter />
            </div>
        </>
    );
};

export default MotionGraphics;
