import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="md:hidden w-full flex flex-col bg-[#83AF95] py-6 px-6">
        <div className="w-full flex flex-row justify-center">
          <Image src="./copyright.svg" width="20" height="20" alt="Copyright sign" />
          <h4 className="text-sm text-[#FCFAFF]"> 2024 Hoodlums NFT. All Rights Reserved.</h4>
        </div>
        <h4 className="text-xs text-center pt-2 text-[#FCFAFF]">Design by: <Link href="https://twitter.com/kdun_xyz" target="_blank"><span className="text-[#404040]">Lum#2865</span></Link></h4>
      </div>

      <div className="hidden md:w-full md:flex md:flex-row md:items-center md:bg-[#83AF95] md:py-6 md:px-6">
        <Image src="./copyright.svg" width="20" height="20" alt="Copyright sign" />
        <h4 className="md:text-base md:text-[#FCFAFF] md:flex-grow"> 2024 Hoodlums NFT. All Rights Reserved.</h4>
        <h4 className="md:text-base md:text-[#FCFAFF]">Design by: <Link href="https://twitter.com/kdun_xyz" target="_blank"><span className="md:text-[#404040]">Lum#2865</span></Link></h4>
      </div>
    </>
  );
}