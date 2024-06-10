import Image from "next/image";
import Link from "next/link";

const Hero = ({ navLinks, onNavClick }) => {

  return (
    <>
      <div className="w-[100vw] min-h-[100vh] flex flex-col items-center justify-center bg-[#F399A5]">
        <div className="md:w-[80vw] md:mx-auto lg:w-[60vw] lg:mx-auto">
          <div className="px-6 md:w-[80vw] lg:w-[60vw]">
            <Image src="/hoodlums-header.jpg" priority={true} className="w-full rounded-sm lg:border-b-2 lg:border-[#FCFAFF]" width="2000" height="520" alt="Hoodlums NFT Project - art by SomeHoodlum" />
          </div>
          <div className="w-[80vw] md:w-[60vw] lg:w-[40vw] flex mx-auto justify-center pt-10 pb-6 border-b-2 border-t-2 lg:border-none border-[#FCFAFF]">
            <div className="lg:hidden flex flex-wrap justify-center md:grid md:grid-cols-2 md:gap-6">
              <Link href="#" onClick={(e) => { e.preventDefault(); onNavClick('mobileAbout')}} scroll={false}><button className="w-[34svw] md:w-[25vw] lg:w-[30vw] font-semibold text-[#303030] bg-[#FCFAFF] text-base md:text-xl px-5 py-3 rounded-md border border-[#5AC9F4] mb-4 mx-2">About</button></Link>
              <Link href="#" onClick={(e) => { e.preventDefault(); onNavClick('mobileLumDAO')}} scroll={false}><button className="w-[34svw] md:w-[25vw] lg:w-[30vw] font-semibold text-[#303030] bg-[#FCFAFF] text-base md:text-xl px-5 py-3 rounded-md border border-[#5AC9F4] mb-4 mx-2">LumDAO</button></Link>
              <Link href="#" onClick={(e) => { e.preventDefault(); onNavClick('mobileTeam')}} scroll={false}><button className="w-[34svw] md:w-[25vw] lg:w-[30vw] font-semibold text-[#303030] bg-[#FCFAFF] text-base md:text-xl px-5 py-3 rounded-md border border-[#5AC9F4] mb-4 mx-2">Team</button></Link>
              <Link href="#" onClick={(e) => { e.preventDefault(); onNavClick('mobileTools')}} scroll={false}><button className="w-[34svw] md:w-[25vw] lg:w-[30vw] font-semibold text-[#303030] bg-[#FCFAFF] text-base md:text-xl px-5 py-3 rounded-md border border-[#5AC9F4] mb-4 mx-2">Tools</button></Link>
              <Link href="https://www.flowty.io/collection/0x427ceada271aa0b1/SturdyItems" target="_blank"><button className="w-[34svw] md:w-[25vw] lg:w-[30vw] font-semibold text-[#303030] bg-[#FCFAFF] text-base md:text-xl px-5 py-3 rounded-md border border-[#5AC9F4] mb-4 mx-2">Marketplace</button></Link>
              <Link href="#" onClick={(e) => { e.preventDefault(); onNavClick('mobileSocials')}} scroll={false}><button className="w-[34svw] md:w-[25vw] lg:w-[30vw] font-semibold text-[#303030] bg-[#FCFAFF] text-base md:text-xl px-5 py-3 rounded-md border border-[#5AC9F4] mb-4 mx-2">Socials</button></Link>
            </div>
            <div className="hidden lg:flex lg:flex-col lg:justify-center">
              <div className="lg:w-full lg:flex lg:flex-row">
                <a href="" onClick={(e) => { e.preventDefault(); onNavClick('desktopAbout')}}><button className="lg:w-[20vw] font-semibold text-[#303030] bg-[#FCFAFF] hover:lg:bg-[#5AC9F4] hover:lg:border-[#FCFAFF] lg:text-xl px-5 lg:px-8 py-3 lg:py-4 rounded-md border lg:border-2 border-[#5AC9F4] mb-4 mx-2">About</button></a>
                <a href="" onClick={(e) => { e.preventDefault(); onNavClick('desktopLumDAO')}}><button className="lg:w-[20vw] font-semibold text-[#303030] bg-[#FCFAFF] hover:lg:bg-[#5AC9F4] hover:lg:border-[#FCFAFF] lg:text-xl px-5 lg:px-8 py-3 lg:py-4 rounded-md border lg:border-2 border-[#5AC9F4] mb-4 mx-2">LumDAO</button></a>
              </div>
              <div className="lg:w-full lg:flex lg:flex-row">
                <a href="" onClick={(e) => { e.preventDefault(); onNavClick('desktopTeam')}}><button className="lg:w-[20vw] font-semibold text-[#303030] bg-[#FCFAFF] hover:lg:bg-[#5AC9F4] hover:lg:border-[#FCFAFF] lg:text-xl px-5 lg:px-8 py-3 lg:py-4 rounded-md border lg:border-2 border-[#5AC9F4] mb-4 mx-2">Team</button></a>
                <a href="" onClick={(e) => { e.preventDefault(); onNavClick('desktopTools')}}><button className="lg:w-[20vw] font-semibold text-[#303030] bg-[#FCFAFF] hover:lg:bg-[#5AC9F4] hover:lg:border-[#FCFAFF] lg:text-xl px-5 lg:px-8  py-3 lg:py-4 rounded-md border lg:border-2 border-[#5AC9F4] mb-4 mx-2">Tools</button></a>
              </div>
              <div className="lg:w-full lg:flex lg:flex-row">
                <Link href="https://www.flowty.io/collection/0x427ceada271aa0b1/SturdyItems" target="_blank"><button className="lg:w-[20vw] font-semibold text-[#303030] bg-[#FCFAFF] hover:lg:bg-[#5AC9F4] hover:lg:border-[#FCFAFF] lg:text-xl px-5 lg:px-8 py-3 lg:py-4 rounded-md border lg:border-2 border-[#5AC9F4] mb-4 mx-2">Marketplace</button></Link>
                <a href="" onClick={(e) => { e.preventDefault(); onNavClick('desktopSocials')}}><button className="lg:w-[20vw] font-semibold text-[#303030] bg-[#FCFAFF] hover:lg:bg-[#5AC9F4] hover:lg:border-[#FCFAFF] lg:text-xl px-5 lg:px-8 py-3 lg:py-4 rounded-md border lg:border-2 border-[#5AC9F4] mb-4 mx-2">Socials</button></a>
              </div>
            </div>
          </div>
          <div className="w-[75svw] md:w-[65vw] lg:w-[60vw] md:flex md:justify-center lg:border-t-2 lg:border-[#FCFAFF] mx-auto">
            <Image src="/bySH.png" priority={true} className="w-full md:w-[50vw] lg:w-[40vw] lg:mx-auto" width="2000" height="520" alt="with art by SomeHoodlum" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;