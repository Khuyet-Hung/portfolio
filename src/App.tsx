import "./i18n";
import { useTranslation } from "react-i18next";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Contact from "./components/sections/Contact";
import "@assets/styles/index.scss";
import {
  Parallax,
  ParallaxLayer,
  type IParallax,
} from "@react-spring/parallax";
import { useRef } from "react";
import Header from "@components/layout/header";
import HomeContent from "@components/sections/Home/HomeContent";

function App() {
  const { i18n } = useTranslation();
  const ref = useRef<IParallax>(null);
  const scrollToSection = (offset: number) => {
    console.log('🚀 ~ scrollToSection ~ offset:', offset)
    if (ref.current) {
      ref.current.scrollTo(offset);
    }
  };

  const pagesNumber = 2; // Total number of pages in the parallax effect
  return (
    <Parallax pages={pagesNumber} ref={ref}>
      <ParallaxLayer
        sticky={{ start: 0, end: pagesNumber }}
        className="parallax-layer"
      >
        <Header
          lang={i18n.language}
          onLangChange={(lng) => i18n.changeLanguage(lng)}
          onScrollToSection={scrollToSection}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0} className="parallax-layer">
          <Home />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={-0.3} className="parallax-layer">
        <HomeContent/>
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0} className="parallax-layer">
          <About />
      </ParallaxLayer>
      {/* <ParallaxLayer offset={2} speed={0.5}className="parallax-layer">
          <Projects />
      </ParallaxLayer>
      <ParallaxLayer offset={3} speed={0.5}className="parallax-layer">
          <Skills />
      </ParallaxLayer>
      <ParallaxLayer offset={4} speed={0.5}className="parallax-layer">
          <Contact />
      </ParallaxLayer> */}
    </Parallax>
  );
}

export default App;
