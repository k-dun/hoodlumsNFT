import Image from "next/image";

export default function Lumdao() {
  return (
    <>
      <div className="w-full min-h-[100svh] flex flex-col bg-[#9C99CB] pt-14">
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
    </>
  );
}