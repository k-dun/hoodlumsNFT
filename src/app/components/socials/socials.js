import Image from "next/image";
import Link from "next/link";

export default function Socials() {
  return (
    <>
      <div className="w-full min-h-[50svh] flex flex-col bg-[#83AF95] pt-14 items-center">
        <h2 className="mx-auto text-[#FCFAFF] font-marker text-4xl" id="about">Socials</h2>
        <div className="w-[50svw] pt-12 flex flex-row px-6 justify-between items-center">
          <Image src="./twitter-icon.svg" width="30" height="30" alt="Hoodlums Twitter" />
          <Image src="./ig-icon.svg" width="35" height="35" alt="Hoodlums Instagram" className="ml-2" />
          <Image src="./discord.svg" width="40" height="40" alt="Hoodlums Discord" className="ml-1" />
        </div>
        <div className="w-full pt-8">
          <Image src="/socials.png" className="w-full" width="400" height="400" alt="Art by SomeHoodlum" />
        </div>
      </div>
    </>
  );
}