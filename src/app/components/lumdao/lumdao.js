import Image from "next/image";
import Link from "next/link";

export default function Lumdao() {
  return (
    <>
      <div className="md:hidden w-full flex flex-col bg-[#9C99CB] pt-14">
        <h2 className="mx-auto text-[#FCFAFF] font-marker text-4xl" id="lumdao">LumDAO</h2>
        <h3 className="mx-6 pt-8 text-[#404040] font-dmsans text-lg">Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
          consequat. <br /><br />
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
          mollit anim id est laborum. <br /><br />
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
          mollit anim id est laborum.</h3>
        <Link href="/lumresearch" target="_blank"><button className="w-[45svw] font-semibold text-[#404040] bg-[#FCFAFF] text-base mt-6 ml-6 px-5 py-3 rounded-md border border-[#5AC9F4]">Find LumDAO</button></Link>
        <div className="w-full pt-12">
          <Image src="/letsbuildfam.png" className="w-full rounded-4xl" width="2000" height="520" alt="Let's build fam by SomeHoodlum" />
        </div>
      </div>

      <div className="hidden md:w-full md:flex md:flex-col md:bg-[#9C99CB] md:pt-16">
        <h2 className="md:mx-auto md:text-[#FCFAFF] md:font-marker md:text-6xl" id="lumdao">LumDAO</h2>
        <div className="md:w-full md:flex md:flex-row md:mt-16">
          <div className="md:w-[60vw]">
            <Image src="/letsbuildfam.png" className="md:w-full md:rounded-4xl md:self-end" width="2000" height="520" alt="Let's build fam by SomeHoodlum" />
          </div>
          <div className="md:w-[40vw] md:flex md:flex-col md:mx-16 md:pb-24">
            <h3 className="md:text-[#404040] md:font-dmsans md:text-3xl">Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
              consequat. <br /><br />
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
              mollit anim id est laborum. <br /><br />
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
              mollit anim id est laborum.
            </h3>
            <Link href="/lumresearch" target="_blank"><button className="md:w-[20vw] md:font-semibold md:text-[#404040] md:bg-[#FCFAFF] md:text-xl md:mt-6 md:px-5 md:py-3 md:rounded-md md:border md:border-[#5AC9F4]">LumDAO</button></Link>
          </div>
        </div>
      </div>

    </>
  );
}