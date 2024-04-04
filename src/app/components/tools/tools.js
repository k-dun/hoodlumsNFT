import Image from "next/image";
import Link from "next/link";

export default function Tools() {
  return (
    <>
      <div className="w-full min-h-[100svh] flex flex-col bg-[#F08B8E] pt-14">
        <h2 className="mx-auto text-[#202020] font-marker text-4xl" id="about">Tools</h2>
        <h3 className="mx-6 pt-8 text-[#404040] font-dmsans text-lg">Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
          consequat. <br /><br />
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
          mollit anim id est laborum.
        </h3>
          <div className="w-full pt-6">
            <Image src="/liluzi.png" className="w-full" width="1000" height="1000" alt="Lil Uzi Vert by SomeHoodlum" />
          </div>
      </div>
    </>
  );
}