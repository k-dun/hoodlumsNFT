import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="w-full min-h-[100svh] max-w-[1440px] flex flex-col justify-center pb-24 bg-[#F399A5]">
        <div className="px-6">
          <Image src="/hoodlums-header.jpg" priority={true} className="w-full rounded-sm" width="2000" height="520" alt="Hoodlums NFT Project - art by SomeHoodlum" />
        </div>
        <div className="w-[80svw] flex mx-auto justify-center pt-10 pb-6 border-b-2 border-t-2 border-[#FCFAFF]">
          <div className="flex flex-wrap justify-center">
            <Link href="/#about"><button className="w-[34svw] font-semibold text-[#404040] bg-[#FCFAFF] text-sm md:text-base px-5 py-3 rounded-md border border-[#5AC9F4] mb-4 mx-2">About</button></Link>
            <Link href="/#LumDAO"><button className="w-[34svw] font-semibold text-[#404040] bg-[#FCFAFF] text-sm md:text-base px-5 py-3 rounded-md border border-[#5AC9F4] mb-4 mx-2">LumDAO</button></Link>
            <Link href="/#team"><button className="w-[34svw] font-semibold text-[#404040] bg-[#FCFAFF] text-sm md:text-base px-5 py-3 rounded-md border border-[#5AC9F4] mb-4 mx-2">Team</button></Link>
            <Link href="/#tools"><button className="w-[34svw] font-semibold text-[#404040] bg-[#FCFAFF] text-sm md:text-base px-5 py-3 rounded-md border border-[#5AC9F4] mb-4 mx-2">Tools</button></Link>
            <Link href="https://www.flowty.io/collection/0x427ceada271aa0b1/SturdyItems" target="_blank"><button className="w-[34svw] font-semibold text-[#404040] bg-[#FCFAFF] text-sm md:text-base px-5 py-3 rounded-md border border-[#5AC9F4] mb-4 mx-2">Marketplace</button></Link>
            <Link href="#socials"><button className="w-[34svw] font-semibold text-[#404040] bg-[#FCFAFF] text-sm md:text-base px-5 py-3 rounded-md border border-[#5AC9F4] mb-4 mx-2">Socials</button></Link>
          </div>
        </div>
        <div className="w-[75svw] mx-auto">
          <Image src="/bySH.png" priority={true} className="w-full" width="2000" height="520" alt="with art by SomeHoodlum" />
        </div>
      </div>
    </>
  );
}
