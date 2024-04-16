import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="w-full h-[100vh] flex flex-col justify-center pb-24 bg-[#F399A5]">
        <div className="lg:w-[60vw] lg:max-w-[1528px] lg:mx-auto">
          <div className="px-6 lg:w-[60vw]">
            <Image src="/hoodlums-header.jpg" priority={true} className="w-full rounded-sm lg:border-b-2 lg:border-[#FCFAFF]" width="2000" height="520" alt="Hoodlums NFT Project - art by SomeHoodlum" />
          </div>
          <div className="w-[80vw] lg:w-[40vw] flex mx-auto justify-center pt-10 pb-6 border-b-2 border-t-2 lg:border-none border-[#FCFAFF]">
            <div className="lg:hidden flex flex-wrap justify-center">
              <Link href="/#about"><button className="w-[34svw] lg:w-[30vw] font-semibold text-[#303030] bg-[#FCFAFF] text-base md:text-xl lg:text-2xl px-5 py-3 rounded-md border border-[#5AC9F4] mb-4 mx-2">About</button></Link>
              <Link href="/#LumDAO"><button className="w-[34svw] lg:w-[30vw] font-semibold text-[#303030] bg-[#FCFAFF] text-base md:text-xl lg:text-2xl px-5 py-3 rounded-md border border-[#5AC9F4] mb-4 mx-2">LumDAO</button></Link>
              <Link href="/#team"><button className="w-[34svw] lg:w-[30vw] font-semibold text-[#303030] bg-[#FCFAFF] text-base md:text-xl lg:text-2xl px-5 py-3 rounded-md border border-[#5AC9F4] mb-4 mx-2">Team</button></Link>
              <Link href="/#tools"><button className="w-[34svw] lg:w-[30vw] font-semibold text-[#303030] bg-[#FCFAFF] text-base md:text-xl lg:text-2xl px-5 py-3 rounded-md border border-[#5AC9F4] mb-4 mx-2">Tools</button></Link>
              <Link href="https://www.flowty.io/collection/0x427ceada271aa0b1/SturdyItems" target="_blank"><button className="w-[34svw] lg:w-[30vw] font-semibold text-[#303030] bg-[#FCFAFF] text-base md:text-xl lg:text-2xl px-5 py-3 rounded-md border border-[#5AC9F4] mb-4 mx-2">Marketplace</button></Link>
              <Link href="#socials"><button className="w-[34svw] lg:w-[30vw] font-semibold text-[#303030] bg-[#FCFAFF] text-base md:text-xl lg:text-2xl px-5 py-3 rounded-md border border-[#5AC9F4] mb-4 mx-2">Socials</button></Link>
            </div>
            <div className="hidden lg:flex lg:flex-col lg:justify-center">
              <div className="lg:w-full lg:flex lg:flex-row">
                <Link href="/#about"><button className="w-[34svw] lg:w-[25vw] font-semibold text-[#303030] bg-[#FCFAFF] hover:lg:bg-[#5AC9F4] hover:lg:border-[#FCFAFF] text-base md:text-xl lg:text-2xl px-5 lg:px-8 py-3 lg:py-4 rounded-md border lg:border-2 border-[#5AC9F4] mb-4 mx-2">About</button></Link>
                <Link href="/#LumDAO"><button className="w-[34svw] lg:w-[25vw] font-semibold text-[#303030] bg-[#FCFAFF] hover:lg:bg-[#5AC9F4] hover:lg:border-[#FCFAFF] text-base md:text-xl lg:text-2xl px-5 lg:px-8 py-3 lg:py-4 rounded-md border lg:border-2 border-[#5AC9F4] mb-4 mx-2">LumDAO</button></Link>
              </div>
              <div className="lg:w-full lg:flex lg:flex-row">
                <Link href="/#team"><button className="w-[34svw] lg:w-[25vw] font-semibold text-[#303030] bg-[#FCFAFF] hover:lg:bg-[#5AC9F4] hover:lg:border-[#FCFAFF] text-base md:text-xl lg:text-2xl px-5 lg:px-8 py-3 lg:py-4 rounded-md border lg:border-2 border-[#5AC9F4] mb-4 mx-2">Team</button></Link>
                <Link href="/#tools"><button className="w-[34svw] lg:w-[25vw] font-semibold text-[#303030] bg-[#FCFAFF] hover:lg:bg-[#5AC9F4] hover:lg:border-[#FCFAFF] text-base md:text-xl lg:text-2xl px-5 lg:px-8  py-3 lg:py-4 rounded-md border lg:border-2 border-[#5AC9F4] mb-4 mx-2">Tools</button></Link>
              </div>
              <div className="lg:w-full lg:flex lg:flex-row">
                <Link href="https://www.flowty.io/collection/0x427ceada271aa0b1/SturdyItems" target="_blank"><button className="w-[34svw] lg:w-[25vw] font-semibold text-[#303030] bg-[#FCFAFF] hover:lg:bg-[#5AC9F4] hover:lg:border-[#FCFAFF] text-base md:text-xl lg:text-2xl px-5 lg:px-8 py-3 lg:py-4 rounded-md border lg:border-2 border-[#5AC9F4] mb-4 mx-2">Marketplace</button></Link>
                <Link href="#socials"><button className="w-[34svw] lg:w-[25vw] font-semibold text-[#303030] bg-[#FCFAFF] hover:lg:bg-[#5AC9F4] hover:lg:border-[#FCFAFF] text-base md:text-xl lg:text-2xl px-5 lg:px-8 py-3 lg:py-4 rounded-md border lg:border-2 border-[#5AC9F4] mb-4 mx-2">Socials</button></Link>
              </div>
            </div>
          </div>
          <div className="w-[75svw] lg:w-[60vw] lg:border-t-2 lg:border-[#FCFAFF] mx-auto">
            <Image src="/bySH.png" priority={true} className="w-full lg:w-[40vw] lg:mx-auto" width="2000" height="520" alt="with art by SomeHoodlum" />
          </div>
        </div>
      </div>
    </>
  );
}
