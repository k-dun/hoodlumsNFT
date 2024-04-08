import Hero from './components/hero/hero';
import About from './components/about/about';
import Lumdao from './components/lumdao/lumdao';
import Team from './components/team/team';
import Tools from './components/tools/tools';
import Socials from './components/socials/socials';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Lumdao />
      <Team />
      <Tools />
      <Socials />
    </>
  );
}
