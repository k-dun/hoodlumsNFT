import Image from "next/image";
import Link from "next/link";

export default function Socials() {
  return (
    <>
      <div className="socials-section lg:hidden w-full min-h-[50svh] flex flex-col bg-[#83AF95] pt-14 items-center">
        <h2 className="mx-auto text-[#FCFAFF] font-marker text-4xl md:text-6xl">Socials</h2>
        <div className="md:w-[60vw] md:mx-auto">
          <div className="w-full pt-12 flex flex-row px-6 justify-center items-center">
            <Image src="./twitter-icon.svg" width="30" height="30" alt="Hoodlums Twitter" className="mx-6" />
            <Image src="./ig-icon.svg" width="35" height="35" alt="Hoodlums Instagram" className="mx-6" />
            <Image src="./discord.svg" width="40" height="40" alt="Hoodlums Discord" className="mx-6" />
          </div>
          <div className="w-full pt-8 border-b border-b-[#FCFAFF] md:border-none">
            <Image src="/socials.png" className="w-full" width="400" height="400" alt="Art by SomeHoodlum" />
          </div>
        </div>
      </div>

      <div className="socials-section hidden md:hidden lg:w-full lg:flex lg:flex-col lg:bg-[#83AF95] lg:pt-14 lg:items-center lg:border-b lg:border-b-[#FCFAFF]">
        <h2 className="lg:mx-auto lg:text-[#FCFAFF] lg:font-marker lg:text-6xl">Socials</h2>
        <div className="lg:w-[70vw] lg:flex lg:flex-row">
          <div className="lg:w-[50vw] lg:pt-12 lg:flex lg:flex-row lg:px-32 lg:justify-center lg:items-center">
            <Image src="./twitter-icon.svg" width="60" height="60" alt="Hoodlums Twitter" className="lg:mx-6" />
            <Image src="./ig-icon.svg" width="65" height="65" alt="Hoodlums Instagram" className="lg:mx-6" />
            <Image src="./discord.svg" width="75" height="75" alt="Hoodlums Discord" className="lg:mx-6" />
          </div>
          <div className="lg:w-[50vw] lg:pt-8">
            <Image src="/socials.png" className="lg:w-full" width="400" height="400" alt="Art by SomeHoodlum" />
          </div>
        </div>
      </div>
    </>
  );
}