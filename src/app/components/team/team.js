import Image from "next/image";
import Link from "next/link";

export default function Team() {
  return (
    <>
      <div className="team-section lg:hidden w-full min-h-[100svh] flex flex-col bg-[#67CBC3] pt-14 pb-4">
        <h2 className="mx-auto text-[#FCFAFF] font-marker text-4xl md:text-6xl">TEAM</h2>
        <div className="w-[80svw] md:w-[50vw] mt-8 md:mt-12 mx-auto flex flex-col border-2 rounded-lg border-[#FCFAFF] mb-4">
          <div className="w-full bg-[#FCFAFF]">
            <Image src="https://www.duodot.com/lums/someHoodlum_4148.png" className="w-full border rounded-lg border-[#FCFAFF]" width="2000" height="520" alt="Lum #4148 aka Thirdcoaster" />
          </div>
          <div className="w-full bg-[#FCFAFF] py-6 px-5 md:py-8 md:px-8">
            <p className="text-lg md:text-xl font-semibold text-center text-[#202020]">Thirdcoaster</p>
            <hr className="my-2" />
            <p className="text-base md:text-lg text-[#404040] mt-3">Head Lum. Big Cheese. Main man. Lum resurrector. Man of many nicknames and only singular eye.</p>
            <hr className="my-2" />
            <div className="w-full h-8 pt-6 flex flex-row items-center pl-2">
              <Link href="https://twitter.com/thirdcoastr" target="_blank"><Image src="/team-twitter-icon.svg" width="20" height="20" alt="Thirdcoaster Twitter" /></Link>
            </div>
          </div>
        </div>
        <div className="w-[80svw] md:w-[50vw] mx-auto flex flex-col border-2 rounded-lg border-[#FCFAFF] mb-4">
          <div className="w-full bg-[#FCFAFF]">
            <Image src="/sh.png" className="w-full border rounded-lg border-[#FCFAFF]" width="2000" height="520" alt="SomeHoodlum Avatar" />
          </div>
          <div className="w-full bg-[#FCFAFF] py-6 px-5 md:py-8 md:px-8">
            <p className="text-lg md:text-xl font-semibold text-center text-[#202020]">SomeHoodlum</p>
            <hr className="my-2" />
            <p className="text-base md:text-lg text-[#404040] mt-3">Artist behind the Hoodlums project. Culture obsessed. Capturing the Zeitgeist since day 1.</p>
            <hr className="my-2" />
            <div className="w-full h-6 pt-6 flex flex-row items-center pl-2">
              <Link href="https://twitter.com/somehoodlum" target="_blank"><Image src="/team-twitter-icon.svg" width="20" height="20" alt="SomeHoodlum Twitter" /></Link>
              <Link href="https://www.instagram.com/somehoodlum/" target="_blank"><Image src="/team-ig-icon.svg" width="23" height="23" alt="SomeHoodlum Instagram" className="ml-2" /></Link>
            </div>
          </div>
        </div>
        <div className="w-[80svw] md:w-[50vw] mx-auto flex flex-col border-2 rounded-lg border-[#FCFAFF] mb-4">
          <div className="w-full bg-[#FCFAFF]">
            <Image src="/drmawz.jpg" className="w-full border rounded-lg border-[#FCFAFF]" width="2000" height="520" alt="Dr Mawz Avatar" />
          </div>
          <div className="w-full bg-[#FCFAFF] py-6 px-5 md:py-8 md:px-8">
            <p className="text-lg md:text-xl font-semibold text-center text-[#202020]">Dr Mawz</p>
            <hr className="my-2" />
            <p className="text-base md:text-lg text-[#404040] mt-3">Web3 Huberman. Mined $BTC in &apos;09 and $GAME in &apos;24.</p>
            <hr className="my-2" />
            <div className="w-full h-8 pt-6 flex flex-row items-center pl-2">
              <Link href="https://twitter.com/TheDrMAWZ" target="_blank"><Image src="/team-twitter-icon.svg" width="20" height="20" alt="Dr Mawz Twitter" /></Link>
            </div>
          </div>
        </div>
      </div>

      <div className="team-section hidden md:hidden lg:w-full lg:flex lg:flex-col lg:bg-[#67CBC3] lg:pt-14 lg:pb-16">
        <h2 className="lg:mx-auto lg:text-[#FCFAFF] lg:mb-10 lg:font-marker lg:text-4xl">TEAM</h2>
        <div className="lg:w-full lg:flex lg:flex-row">
          <div className="lg:w-[25vw] lg:mx-auto lg:flex lg:flex-col lg:bg-[#FCFAFF] lg:border-2 lg:rounded-lg lg:border-[#FCFAFF] lg:mb-4">
            <div className="lg:w-full lg:bg-[#FCFAFF]">
              <Image src="https://www.duodot.com/lums/someHoodlum_4148.png" className="lg:w-full lg:border lg:rounded-lg lg:border-[#FCFAFF]" width="2000" height="520" alt="Thirdcoaster Avatar" />
            </div>
            <div className="lg:w-full lg:bg-[#FCFAFF] lg:py-12 lg:px-6 lg:flex-grow">
              <p className="lg:text-2xl lg:font-semibold lg:text-center lg:text-[#202020]">Thirdcoaster</p>
              <p className="lg:text-xl lg:text-[#404040] lg:mt-6">Head Lum. Main man. The resurrector. Man of many nicknames and only singular eye.</p>
            </div>  
            <div className="lg:w-full lg:pt-10 lg:pb-6 lg:flex lg:flex-row lg:pl-6 lg:self-end">
              <Link href="https://twitter.com/thirdcoastr" target="_blank"><Image src="/team-twitter-icon.svg" width="30" height="30" alt="Thirdcoaster Twitter" /></Link>
            </div>
          </div>
          <div className="lg:w-[25vw] lg:mx-auto lg:flex lg:flex-col lg:bg-[#FCFAFF] lg:border-2 lg:rounded-lg lg:border-[#FCFAFF] lg:mb-4">
            <div className="lg:w-full lg:bg-[#FCFAFF]">
              <Image src="/sh.png" className="lg:w-full lg:border lg:rounded-lg lg:border-[#FCFAFF]" width="2000" height="520" alt="SomeHoodlum Avatar" />
            </div>
            <div className="lg:w-full lg:bg-[#FCFAFF] lg:py-12 lg:px-6 lg:flex-grow">
              <p className="lg:text-2xl lg:font-semibold lg:text-center lg:text-[#202020]">SomeHoodlum</p>
              <p className="lg:text-xl lg:text-[#404040] lg:mt-6">Artist behind the Hoodlums. Culture obsessed. Capturing the Zeitgeist since day 1.</p>
            </div>  
            <div className="lg:w-full lg:pt-10 lg:pb-6 lg:flex lg:flex-row lg:items-center lg:pl-6">
              <Link href="https://twitter.com/somehoodlum" target="_blank"><Image src="/team-twitter-icon.svg" width="30" height="30" alt="SomeHoodlum Twitter" /></Link>
              <Link href="https://www.instagram.com/somehoodlum/" target="_blank"><Image src="/team-ig-icon.svg" width="36" height="36" alt="SomeHoodlum Instagram" className="lg:ml-2" /></Link>
            </div>
          </div>
          <div className="lg:w-[25vw] lg:mx-auto lg:flex lg:flex-col lg:bg-[#FCFAFF] lg:border-2 lg:rounded-lg lg:border-[#FCFAFF] lg:mb-4">
            <div className="lg:w-full lg:bg-[#FCFAFF]">
              <Image src="/drmawz.jpg" className="lg:w-full lg:border lg:rounded-lg lg:border-[#FCFAFF]" width="2000" height="520" alt="Dr Mawz Avatar" />
            </div>
            <div className="lg:w-full lg:bg-[#FCFAFF] lg:py-12 lg:px-6 lg:flex-grow">
              <p className="lg:text-2xl lg:font-semibold lg:text-center lg:text-[#202020]">Dr Mawz</p>
              <p className="lg:text-xl lg:text-[#404040] lg:mt-6">Web3 Huberman. Mined $BTC in &apos;09 and $GAME in &apos;24.</p>
            </div>  
            <div className="lg:w-full lg:pt-10 lg:pb-6 lg:flex lg:flex-row lg:pl-6">
              <Link href="https://twitter.com/TheDrMAWZ" target="_blank"><Image src="/team-twitter-icon.svg" width="30" height="30" alt="Dr Mawz Twitter" /></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}