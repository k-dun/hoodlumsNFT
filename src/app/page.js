"use client";

import Hero from './components/hero/hero';
import About from './components/about/about';
import Lumdao from './components/lumdao/lumdao';
import Team from './components/team/team';
import Tools from './components/tools/tools';
import Socials from './components/socials/socials';
import Footer from './components/footer/footer';
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    const handleHashChange = () => {
      const { hash } = window.location;
      if (hash) {
        const element = document.getElementById(hash.slice(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Lumdao />
      <Team />
      <Tools />
      <Socials />
      <Footer />
    </>
  );
}
