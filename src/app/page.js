"use client";

import Hero from './components/hero/hero';
import About from './components/about/about';
import Lumdao from './components/lumdao/lumdao';
import Team from './components/team/team';
import Tools from './components/tools/tools';
import Socials from './components/socials/socials';
import Footer from './components/footer/footer';

export default function Home() {

  const navLinks = {
    mobileAbout: '.about-section',
    mobileLumDAO: '.lumDAO-section',
    mobileTeam: '.team-section',
    mobileTools: '.tools-section',
    mobileSocials: '.socials-section',
    desktopAbout: '.about-section.hidden',
    desktopLumDAO: '.lumDAO-section.hidden',
    desktopTeam: '.team-section.hidden',
    desktopTools: '.tools-section.hidden',
    desktopSocials: '.socials-section.hidden',
  };

  const handleNavClick = (linkName) => {
    const targetSection = document.querySelector(navLinks[linkName]);
    console.log('Target section: ', targetSection);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Hero navLinks={navLinks} onNavClick={handleNavClick} />
      <About />
      <Lumdao />
      <Team />
      <Tools />
      <Socials />
      <Footer />
    </>
  );
}
