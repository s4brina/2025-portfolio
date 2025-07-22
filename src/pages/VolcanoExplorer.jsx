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
    "https://cdn.myportfolio.com/cc259c28-15c7-4ced-8d2f-ef1e719e4384/e90eeb99-c609-4391-8db0-e957469997d4_rw_1920.png?h=2fb3e28e0816e3f13e7936a8ef4684b3",
    "https://cdn.myportfolio.com/cc259c28-15c7-4ced-8d2f-ef1e719e4384/fa976b6d-26c8-41b2-a67b-33f1e67154e1_rw_3840.png?h=1954addcb509a8f88b7958f2c1de74df",
    "https://cdn.myportfolio.com/cc259c28-15c7-4ced-8d2f-ef1e719e4384/2a66cec4-a85c-45eb-b917-84dba2ba51ab_rw_1920.png?h=30c0cc695a0912508d45a8c9adfe10af",
    "https://cdn.myportfolio.com/cc259c28-15c7-4ced-8d2f-ef1e719e4384/0dc79d36-f96b-4de9-bbc4-2c81f333729a_rw_1920.png?h=cd91a2a3e7bd705a89cbf33e44df0d9e",

];

const images2 = [
    "https://cdn.myportfolio.com/cc259c28-15c7-4ced-8d2f-ef1e719e4384/19085902-be33-4811-a1b1-36057f7887ac_rw_1920.png?h=5db422f47d8ed02dd2748e0ce46a4d5f",
    "https://i.imgur.com/x5F1CnY.png",
    "https://i.imgur.com/KWpStET.png",
    "https://i.imgur.com/2iu4jNF.png",

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
    "Volcano Explorer is a React-based web app that allows users to explore global volcano data through interactive tables, maps, and charts. ";

const secondText =
    "The application was designed with a clean, user-friendly, and minimalist aesthetic in mind. Large, relevant images fill negative space effectively, complemented by a modern color palette.";

const thirdText =
    "The navigation bar is a simple, sticky menu with the site logo and essential links that switch from login/register to logout when logged in, ensuring easy navigation on every page";

const fourthText =
    "Volcano Explorer displays my skills in React, API integration, and UX design. It reflects my ability to build responsive, data-driven applications with a focus on functionality and user-centric design."

const VolcanoExplorer = () => {
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
                            text="Volcano Explorer"
                            images={[
                                "https://cdn.myportfolio.com/cc259c28-15c7-4ced-8d2f-ef1e719e4384/e57282eb-64c8-415a-a367-50fe51b37185_rw_1920.jpg?h=45543ecfcd23d0e31a5a5b7d6d7e1ae8",
                                "https://i.pinimg.com/736x/06/04/df/0604df2ccbb7f48536b52e5c3f37f78b.jpg",
                                "https://i.pinimg.com/1200x/3b/cc/ec/3bccecb72c73cd4d4c5ec9106e9e011d.jpg",
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
                        src="https://www-ccv.adobe.io/v1/player/ccv/8VphrLnM8gi/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
                        title="Y2KORE Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    />
                </SectionWrapper>

                <SectionWrapper ref={(el) => setSectionRef(el, 2)} color="transparent">
                    <StoryText text={mainText} />
                </SectionWrapper>

                <SectionWrapper ref={(el) => setSectionRef(el, 3)} color="transparent">
                    <HorizontalPanels images={images} texts={texts} />
                </SectionWrapper>

                <ExtraSection
                    title="About"
                    descriptionTop={
                        <>
                            This project involved creating a <strong>React-based web application</strong> that leverages a <strong>REST API</strong> to provide users with an interactive platform for exploring and analyzing global volcano data. "
                        </>
                    }
                    descriptionMiddle={
                        <>
                            Designed as a centralized resource, the app offers detailed insights into each volcano's location, eruption history, elevation, and regional population density.

                        </>
                    }
                    descriptionBottom={
                        <>
                            By combining an organized, user-friendly interface with powerful analytical tools, it facilitates a deeper understanding of volcanic activity worldwide.
                        </>
                    }
                />


                <SectionWrapper ref={(el) => setSectionRef(el, 2)} color="transparent">
                    <StoryText text={secondText} />
                </SectionWrapper>

                <SectionWrapper ref={(el) => setSectionRef(el, 2)} color="transparent">
                    <StoryText text={thirdText} />
                </SectionWrapper>

                <SectionWrapper ref={(el) => setSectionRef(el, 3)} color="transparent">
                    <HorizontalPanels images={images2} texts={texts} />
                </SectionWrapper>

                <SectionWrapper ref={(el) => setSectionRef(el, 2)} color="transparent">
                    <StoryText text={fourthText} />
                </SectionWrapper>


                <ScrollToTopButton />



        

                <StickyFooter />
            </div>
        </>
    );
};

export default VolcanoExplorer;
