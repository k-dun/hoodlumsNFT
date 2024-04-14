import Image from "next/image";
import Link from "next/link";

export default function Tools() {
  return (
    <>
      <div className="md:hidden w-full min-h-[100svh] flex flex-col bg-[#F08B8E] pt-14">
        <h2 className="mx-auto text-[#FCFAFF] font-marker text-4xl" id="tools">Tools</h2>
        <h3 className="mx-6 pt-8 text-[#404040] font-dmsans text-lg">Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
          consequat:<br />
          <Link href="/gallery" target="_blank"><button className="w-[40svw] font-semibold text-[#404040] bg-[#FCFAFF] text-sm my-4 px-5 py-3 rounded-md border border-[#5AC9F4]">GALLERY</button></Link><br />
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
          mollit anim id est laborum:<br />
          <Link href="/lumresearch" target="_blank"><button className="w-[40svw] font-semibold text-[#404040] bg-[#FCFAFF] text-sm mt-4 px-5 py-3 rounded-md border border-[#5AC9F4]">LUM RESEARCH</button></Link>
        </h3>
        <div className="w-full pt-6">
          <Image src="/liluzi.png" className="w-full" width="400" height="400" alt="Lil Uzi Vert by SomeHoodlum" />
        </div>
      </div>

      <div className="hidden md:w-full md:flex md:flex-col md:bg-[#F08B8E] md:pt-14 md:pb-8">
        <h2 className="md:mx-auto md:text-[#FCFAFF] md:font-marker md:text-6xl" id="tools">Tools</h2>
        <div className="md:w-full md:flex md:flex-row md:pt-12">
          <h3 className="md:mx-20 md:w-[60vw] md:pt-6 md:text-[#404040] md:font-dmsans md:text-lg">Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
          consequat:<br />
          <Link href="/gallery" target="_blank"><button className="md:w-[25svw] md:font-semibold md:text-[#404040] md:bg-[#FCFAFF] md:text-base md:my-4 md:px-5 md:py-3 md:rounded-md md:border md:border-[#5AC9F4]">GALLERY</button></Link><br />
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
          mollit anim id est laborum:<br />
          <Link href="/lumresearch" target="_blank"><button className="md:w-[25svw] md:font-semibold md:text-[#404040] md:bg-[#FCFAFF] md:text-base md:mt-4 md:px-5 md:py-3 md:rounded-md md:border md:border-[#5AC9F4]">LUM RESEARCH</button></Link>
          </h3>
          <div className="md:w-full md:items-center md:justify-center md:pt-24 md:border-l md:border-l-[#FCFAFF]">
            <Image src="/liluzi.png" className="md:w-[50vw] md:ml-auto" width="400" height="400" alt="Lil Uzi Vert by SomeHoodlum" />
          </div>
        </div>
      </div>
    </>
  );
}