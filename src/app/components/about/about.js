import Image from "next/image";
import Link from "next/link";

export default function About() {

  return (
    <>
      <div className="about-section lg:hidden w-full flex flex-col bg-[#5AC9F4] pt-14">
        <h2 className="mx-auto text-[#FCFAFF] font-marker text-4xl md:text-6xl">ABOUT</h2>
        <div className="md:w-[70vw] md:mx-auto">
          <h3 className="mx-6 pt-8 text-[#303030] font-dmsans text-lg md:text-2xl">Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
            consequat. <br /><br />
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
            mollit anim id est laborum. <br /><br />
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
            mollit anim id est laborum.</h3>
          <div className="w-full pt-12">
            <Image src="/bussin.png" className="w-full md:border-l md:border-r md:border-[#FCFAFF]" width="2000" height="520" alt="bussin by SomeHoodlum" />
          </div>
        </div>
      </div>

      <div className="about-section hidden md:hidden lg:w-full lg:flex lg:flex-col lg:items-center lg:bg-[#5ac9f4] lg:pt-14">
        <h2 className="lg:mx-auto lg:text-[#FCFAFF] lg:font-marker lg:text-6xl">ABOUT</h2>
        <h3 className="lg:w-[60vw] lg:pt-16 lg:text-[#303030] lg:font-dmsans lg:text-3xl">Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
          consequat. <br /><br />
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
          mollit anim id est laborum. <br /><br />
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
          mollit anim id est laborum.</h3>
        <div className="lg:w-full lg:pt-16 lg:flex lg:justify-center">
          <Image src="/bussin.png" className="lg:w-[60vw] lg:border-l lg:border-r lg:border-[#FCFAFF]" width="2000" height="520" alt="bussin by SomeHoodlum" />
        </div>      
      </div>
    </>
  );
}