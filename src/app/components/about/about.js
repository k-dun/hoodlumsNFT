import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <>
      <div className="md:hidden w-full flex flex-col bg-[#5AC9F4] pt-14" id="about">
        <h2 className="mx-auto text-[#FCFAFF] font-marker text-4xl">ABOUT</h2>
        <h3 className="mx-6 pt-8 text-[#303030] font-dmsans text-lg">Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
          consequat. <br /><br />
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
          mollit anim id est laborum. <br /><br />
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
          mollit anim id est laborum.</h3>
        <div className="w-full pt-12">
          <Image src="/bussin.png" className="w-full" width="2000" height="520" alt="bussin by SomeHoodlum" />
        </div>
      </div>

      <div className="hidden md:w-full md:flex md:flex-col md:items-center md:bg-[#5ac9f4] md:pt-14">
        <h2 className="md:mx-auto md:text-[#FCFAFF] md:font-marker md:text-6xl" id="about">ABOUT</h2>
        <h3 className="md:w-[70vw] lg:w-[60vw] md:pt-12 lg:pt-16 md:text-[#303030] md:font-dmsans md:text-2xl lg:text-3xl">Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
          consequat. <br /><br />
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
          mollit anim id est laborum. <br /><br />
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
          mollit anim id est laborum.</h3>
        <div className="md:w-full md:pt-12 lg:pt-16 md:flex md:justify-center">
          <Image src="/bussin.png" className="md:w-[70vw] lg:w-[60vw] md:border-l md:border-r md:border-[#FCFAFF]" width="2000" height="520" alt="bussin by SomeHoodlum" />
        </div>      
      </div>
    </>
  );
}