import Image from "next/image";
import Link from "next/link";

export default function Socials() {
  return (
    <>
      <div className="md:hidden w-full min-h-[50svh] flex flex-col bg-[#83AF95] pt-14 items-center">
        <h2 className="mx-auto text-[#FCFAFF] font-marker text-4xl" id="socials">Socials</h2>
        <div className="w-[50svw] pt-12 flex flex-row px-6 justify-between items-center">
          <Image src="./twitter-icon.svg" width="30" height="30" alt="Hoodlums Twitter" />
          <Image src="./ig-icon.svg" width="35" height="35" alt="Hoodlums Instagram" className="ml-2" />
          <Image src="./discord.svg" width="40" height="40" alt="Hoodlums Discord" className="ml-1" />
        </div>
        <div className="w-full pt-8 border-b border-b-[#FCFAFF]">
          <Image src="/socials.png" className="w-full" width="400" height="400" alt="Art by SomeHoodlum" />
        </div>
      </div>

      <div className="hidden md:w-full md:min-h-[50vh] md:flex md:flex-col md:bg-[#83AF95] md:pt-14 md:items-center md:border-b md:border-b-[#FCFAFF]">
        <h2 className="md:mx-auto md:text-[#FCFAFF] md:font-marker md:text-6xl" id="socials">Socials</h2>
        <div className="md:w-full md:flex md:flex-row">
          <div className="md:w-[50vw] md:pt-12 md:flex md:flex-row md:px-32 md:justify-between md:items-center">
            <Image src="./twitter-icon.svg" width="40" height="40" alt="Hoodlums Twitter" />
            <Image src="./ig-icon.svg" width="45" height="45" alt="Hoodlums Instagram" className="md:ml-2" />
            <Image src="./discord.svg" width="50" height="50" alt="Hoodlums Discord" className="md:ml-1" />
          </div>
          <div className="md:w-[50vw] md:pt-8">
            <Image src="/socials.png" className="md:w-full" width="400" height="400" alt="Art by SomeHoodlum" />
          </div>
        </div>
      </div>
    </>
  );
}