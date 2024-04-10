import Image from "next/image";

export default function Lumdao() {
  return (
    <>
      <div className="md:hidden w-full min-h-[100svh] flex flex-col bg-[#9C99CB] pt-14">
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
        <div className="w-full pt-12">
          <Image src="/letsbuildfam.png" className="w-full rounded-4xl" width="2000" height="520" alt="Let's build fam by SomeHoodlum" />
        </div>
      </div>

      <div className="md:w-full md:min-h-[90vh] md:flex md:flex-col md:bg-[#9C99CB] md:pt-14">
        <h2 className="md:mx-auto md:text-[#FCFAFF] md:font-marker md:text-6xl" id="lumdao">LumDAO</h2>
        <div className="md:w-full md:flex md:flex-row">
          <div className="md:w-[50vw] md:mt-12 md:border-r md:border-r-[#FCFAFF]">
            <Image src="/letsbuildfam.png" className="md:w-full md:rounded-4xl" width="2000" height="520" alt="Let's build fam by SomeHoodlum" />
          </div>
          <h3 className="md:w-[50vw] md:mx-16 pt-12 md:text-[#404040] md:font-dmsans md:text-lg">Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
          consequat. <br /><br />
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
          mollit anim id est laborum. <br /><br />
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
          mollit anim id est laborum.</h3>
          
        </div>
      </div>
    </>
  );
}