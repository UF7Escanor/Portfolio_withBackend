import Hero from "../Hero";
import Skills from "../Skills";
import Projects from "../Projects";

import Contact from "../Contact";

import RandomTitle from "../RandomTitle";

export default function Home() {
  return (
    <>
      <Hero />

      <RandomTitle title="Skills" description="Skills I worked on" />
      <Skills />
      <RandomTitle title="Portfolio" description="My Latest Projects" />

      <Projects />

      <Contact />
    </>
  );
}
