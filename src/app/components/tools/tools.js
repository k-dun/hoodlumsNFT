import Image from "next/image";
import Link from "next/link";

export default function Tools() {
  return (
    <>
      <div className="tools-section lg:hidden w-full flex flex-col bg-[#F08B8E] pt-14">
        <div className="md:w-[70vw] md:mx-auto">
          <h2 className="mx-auto text-center text-[#FCFAFF] font-marker text-4xl md:text-6xl">Tools</h2>
          <h3 className="mx-6 pt-8 md:pt-12 text-[#303030] font-dmsans text-lg md:text-2xl">Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
            consequat:<br />
          <Link href="/gallery" target="_blank"><button className="w-[50svw] md:w-[25vw] font-semibold text-[#404040] bg-[#FCFAFF] text-base md:text-lg my-6 px-5 py-3 rounded-md border border-[#5AC9F4]">Gallery</button></Link><br />
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
            mollit anim id est laborum:<br />
          <Link href="/lumresearch" target="_blank"><button className="w-[50svw] md:w-[25vw] font-semibold text-[#404040] bg-[#FCFAFF] text-base md:text-lg mt-6 px-5 py-3 rounded-md border border-[#5AC9F4]">Lum Research</button></Link>
          </h3>
        </div>
        <div className="w-full md:w-[60vw] md:self-end pt-6">
          <Image src="/liluzi.png" className="w-full" width="400" height="400" alt="Lil Uzi Vert by SomeHoodlum" />
        </div>
      </div>

      <div className="tools-section hidden md:hidden lg:w-full lg:flex lg:flex-col lg:bg-[#F08B8E] lg:pt-14 lg:pb-14">
        <h2 className="lg:mx-auto lg:text-[#FCFAFF] lg:font-marker lg:text-6xl">Tools</h2>
        <div className="lg:w-full lg:flex lg:flex-row lg:pt-12">
          <h3 className="lg:mx-16 lg:w-[55vw] lg:pt-6 lg:text-[#303030] lg:font-dmsans lg:text-3xl">Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
            consequat:<br />
          <Link href="/gallery" target="_blank"><button className="lg:w-[20vw] lg:font-semibold lg:text-[#404040] lg:bg-[#FCFAFF] hover:lg:bg-[#5AC9F4] hover:lg:border-[#FCFAFF] lg:text-xl lg:mt-6 lg:mb-8 lg:px-5 lg:py-3 lg:rounded-md lg:border-2 lg:border-[#5AC9F4]">View Gallery</button></Link><br />
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
            mollit anim id est laborum:<br />
          <Link href="/lumresearch" target="_blank"><button className="lg:w-[20vw] lg:font-semibold lg:text-[#404040] lg:bg-[#FCFAFF] hover:lg:bg-[#5AC9F4] hover:lg:border-[#FCFAFF] lg:text-xl lg:mt-6 lg:px-5 lg:py-3 lg:rounded-md lg:border-2 lg:border-[#5AC9F4]">Lum Research</button></Link>
          </h3>
          <div className="lg:w-full lg:items-center lg:justify-center lg:pt-24 lg:border-l lg:border-l-[#FCFAFF]">
            <Image src="/liluzi.png" className="lg:w-[45vw] lg:ml-auto" width="400" height="400" alt="Lil Uzi Vert by SomeHoodlum" />
          </div>
        </div>
      </div>
    </>
  );
}