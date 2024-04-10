import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <>
      <div className="w-full min-h-[100svh] flex flex-col bg-[#5AC9F4] pt-14">
        <h2 className="mx-auto text-[#FCFAFF] font-marker text-4xl" id="about">ABOUT</h2>
        <h3 className="mx-6 md:mx-36 pt-8 text-[#404040] font-dmsans text-lg">Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
          consequat. <br /><br />
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
          mollit anim id est laborum. <br /><br />
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
          mollit anim id est laborum.</h3>
        <div className="w-full pt-12 md:justify-end">
          <Image src="/bussin.png" className="w-full md:w-[80vw]" width="2000" height="520" alt="bussin by SomeHoodlum" />
        </div>
      </div>
    </>
  );
}