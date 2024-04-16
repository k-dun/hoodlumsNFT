import Image from "next/image";
import Link from "next/link";

export default function Lumdao() {
  return (
    <>
      <div className="lg:hidden w-full flex flex-col bg-[#9C99CB] pt-14">
        <h2 className="mx-auto text-[#FCFAFF] font-marker text-4xl md:text-6xl" id="lumdao">LumDAO</h2>
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
          <Link href="/lumresearch" target="_blank"><button className="w-[45svw] md:w-[25vw] font-semibold text-[#404040] bg-[#FCFAFF] text-base md:text-lg mt-6 ml-6 px-5 py-3 rounded-md border border-[#5AC9F4]">Find LumDAO</button></Link>
          <div className="w-full pt-12">
            <Image src="/letsbuildfam.png" className="w-full md:w-[70vw] md:border-l md:border-[#FCFAFF]" width="2000" height="520" alt="Let's build fam by SomeHoodlum" />
          </div>
        </div>
      </div>

      <div className="hidden md:hidden lg:w-full lg:flex lg:flex-col lg:bg-[#9C99CB] lg:pt-16">
        <h2 className="lg:mx-auto lg:text-[#FCFAFF] lg:font-marker lg:text-6xl" id="lumdao">LumDAO</h2>
        <div className="lg:w-full lg:flex lg:flex-row lg:mt-16">
          <div className="lg:w-[50vw] lg:border-r lg:border-[#FCFAFF]">
            <Image src="/letsbuildfam.png" className="lg:w-full lg:rounded-4xl lg:self-end" width="2000" height="520" alt="Let's build fam by SomeHoodlum" />
          </div>
          <div className="lg:w-[50vw] lg:flex lg:flex-col lg:mx-16 lg:pb-24">
            <h3 className="lg:text-[#303030] lg:font-dmsans lg:text-3xl">Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
              consequat. <br /><br />
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
              mollit anim id est laborum. <br /><br />
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
              mollit anim id est laborum.
            </h3>
            <Link href="/lumresearch" target="_blank"><button className="lg:w-[20vw] lg:font-semibold lg:text-[#303030] lg:bg-[#FCFAFF] hover:lg:bg-[#5AC9F4] hover:lg:border-[#FCFAFF] lg:text-xl lg:mt-6 lg:px-5 lg:py-3 lg:rounded-md lg:border-2 lg:border-[#5AC9F4]">Find LumDAO</button></Link>
          </div>
        </div>
      </div>
    </>
  );
}