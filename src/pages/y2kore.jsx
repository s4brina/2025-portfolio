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
    "https://cdn.myportfolio.com/cc259c28-15c7-4ced-8d2f-ef1e719e4384/74b55d0c-eec9-4a43-960d-e155362ccccd_rw_1920.png?h=7b369915fbf1d4524f7da31080c00fc3",
    "https://cdn.myportfolio.com/cc259c28-15c7-4ced-8d2f-ef1e719e4384/8c368329-4e90-47f7-8ca3-c8ce8e80b592_rw_1920.png?h=17329771e1535db5c1830abb2abee611",
    "https://cdn.myportfolio.com/cc259c28-15c7-4ced-8d2f-ef1e719e4384/aca2917d-bfb8-4874-bec6-785ec92d9039_rw_1920.png?h=b498d95699c0d46bdbdca8b3c07bf88a",

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
    "#0c0d15", // midnight indigo
    "#0e1018", // slightly lighter twilight
    "#10121c", // very dark desaturated sapphire
    "#131522", // muted violet-black
    "#151828", // deep slate-purple
];

const mainText =
    "Y2KORE was my Y2K-inspired fashion label. In under a year, it gained 1,000+ followers and 200+ sales, sharpening my skills in digital marketing, e-commerce, and brand building.";

const secondText =
    "This experience was rewarding, teaching me ecommerce operations, POS systems, market trend analysis, and social media strategies for business growth.";

const Y2kore = () => {
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
                            text="Y2KORE"
                            images={[
                                "https://i.pinimg.com/originals/4f/29/49/4f29490209eaac0e465bf1b08258d974.gif",
                                "https://i.pinimg.com/originals/2a/1a/8f/2a1a8f6f45515dfc4c5d0a06d8e21fe3.gif",
                                "https://i.pinimg.com/originals/da/89/37/da89376e9d5465928743b6811c6d414a.gif",
                            ]}
                            directions={["left", "right", "left"]}
                        />
                    </SectionWrapper>
                </main>

                <SectionWrapper ref={(el) => setSectionRef(el, 0)} color="transparent">
                    <iframe
                        className="rounded-4xl shadow-lg"
                        style={{
                            width: "100vw",
                            height: "100vh",
                            objectFit: "cover",
                            border: "none",
                        }}
                        src="https://www.youtube.com/embed/7UlTejOCxiY?autoplay=1&mute=1&loop=1&playlist=7UlTejOCxiY&controls=0&modestbranding=1&rel=0"
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

                <SectionWrapper ref={(el) => setSectionRef(el, 4)} color="transparent">
                    <StoryText text={secondText} />
                </SectionWrapper>

                <ScrollToTopButton />

               

                <StickyFooter />
            </div>
        </>
    );
};

export default Y2kore;
