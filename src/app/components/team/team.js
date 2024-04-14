import Image from "next/image";
import Link from "next/link";

export default function Team() {
  return (
    <>
      <div className="md:hidden w-full min-h-[100svh] flex flex-col bg-[#67CBC3] pt-14 pb-4">
        <h2 className="mx-auto text-[#FCFAFF] mb-6 font-marker text-4xl" id="team">TEAM</h2>
        <div className="w-[80svw] mx-auto flex flex-col border-2 rounded-lg border-[#FCFAFF] mb-4">
          <div className="w-full bg-[#FCFAFF]">
            <Image src="https://www.duodot.com/lums/someHoodlum_4148.png" className="w-full border rounded-lg border-[#FCFAFF]" width="2000" height="520" alt="Lum #4148 aka Thirdcoaster" />
          </div>
          <div className="w-full bg-[#FCFAFF] py-6 px-5">
            <p className="text-lg font-semibold text-center text-[#202020]">Thirdcoaster</p>
            <hr className="my-2" />
            <p className="text-md text-[#404040] mt-3">Head Lum. Big Cheese. Main man. Lum resurrector. Man of many nicknames and only singular eye.</p>
            <hr className="my-2" />
            <div className="w-full h-8 pt-6 flex flex-row items-center pl-2">
              <Image src="/team-twitter-icon.svg" width="20" height="20" alt="Thirdcoaster Twitter" />
            </div>
          </div>
        </div>
        <div className="w-[80svw] mx-auto flex flex-col border-2 rounded-lg border-[#FCFAFF] mb-4">
          <div className="w-full bg-[#FCFAFF]">
            <Image src="/sh.png" className="w-full border rounded-lg border-[#FCFAFF]" width="2000" height="520" alt="SomeHoodlum Avatar" />
          </div>
          <div className="w-full bg-[#FCFAFF] py-6 px-5">
            <p className="text-lg font-semibold text-center text-[#202020]">SomeHoodlum</p>
            <hr className="my-2" />
            <p className="text-md text-[#404040] mt-3">Artist behind the Hoodlums project. Culture obsessed. Capturing the Zeitgeist since day 1.</p>
            <hr className="my-2" />
            <div className="w-full h-6 pt-6 flex flex-row items-center pl-2">
              <Image src="/team-twitter-icon.svg" width="20" height="20" alt="SomeHoodlum Twitter" />
              <Image src="/team-ig-icon.svg" width="23" height="23" alt="SomeHoodlum Instagram" className="ml-2" />
            </div>
          </div>
        </div>
        <div className="w-[80svw] mx-auto flex flex-col border-2 rounded-lg border-[#FCFAFF] mb-4">
          <div className="w-full bg-[#FCFAFF]">
            <Image src="/drmawz.jpg" className="w-full border rounded-lg border-[#FCFAFF]" width="2000" height="520" alt="Dr Mawz Avatar" />
          </div>
          <div className="w-full bg-[#FCFAFF] py-6 px-5">
            <p className="text-lg font-semibold text-center text-[#202020]">Dr Mawz</p>
            <hr className="my-2" />
            <p className="text-md text-[#404040] mt-3">Web3 Huberman. Mined $BTC in '09 and $GAME in '24.</p>
            <hr className="my-2" />
            <div className="w-full h-8 pt-6 flex flex-row items-center pl-2">
              <Image src="/team-twitter-icon.svg" width="20" height="20" alt="Dr Mawz Twitter" />
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:w-full md:flex md:flex-col md:bg-[#67CBC3] md:pt-14 md:pb-8">
        <h2 className="md:mx-auto md:text-[#FCFAFF] md:mb-10 md:font-marker md:text-6xl" id="team">TEAM</h2>
        <div className="md:w-full md:flex md:flex-row">
          <div className="md:w-[30vw] md:mx-auto md:flex md:flex-col md:bg-[#FCFAFF] md:border-2 md:rounded-lg md:border-[#FCFAFF] md:mb-4">
            <div className="md:w-full md:bg-[#FCFAFF]">
              <Image src="https://www.duodot.com/lums/someHoodlum_4148.png" className="md:w-full md:border md:rounded-lg md:border-[#FCFAFF]" width="2000" height="520" alt="Thirdcoaster Avatar" />
            </div>
            <div className="md:w-full md:h-[10vh] md:bg-[#FCFAFF] md:py-6 md:px-5">
              <p className="md:text-lg md:font-semibold md:text-center md:text-[#202020]">Thirdcoaster</p>
              <p className="md:text-md md:text-[#404040] md:mt-3">Head Lum. Main man. The resurrector. Man of many nicknames and only singular eye.</p>
            </div>  
            <div className="md:w-full md:h-[5vh] md:pt-6 md:flex md:flex-row md:items-center md:pl-6">
              <Image src="/team-twitter-icon.svg" width="20" height="20" alt="Thirdcoaster Twitter" />
            </div>
          </div>
          <div className="md:w-[30vw] md:mx-auto md:flex md:flex-col md:bg-[#FCFAFF] md:border-2 md:rounded-lg md:border-[#FCFAFF] md:mb-4">
            <div className="md:w-full md:bg-[#FCFAFF]">
              <Image src="/sh.png" className="md:w-full md:border md:rounded-lg md:border-[#FCFAFF]" width="2000" height="520" alt="SomeHoodlum Avatar" />
            </div>
            <div className="md:w-full md:h-[10vh] md:bg-[#FCFAFF] md:py-6 md:px-5">
              <p className="md:text-lg md:font-semibold md:text-center md:text-[#202020]">SomeHoodlum</p>
              <p className="md:text-md md:text-[#404040] md:mt-3">Artist behind the Hoodlums. Culture obsessed. Capturing the Zeitgeist since day 1.</p>
            </div>  
            <div className="md:w-full md:h-[5vh] md:pt-6 md:flex md:flex-row md:items-center md:pl-6">
              <Image src="/team-twitter-icon.svg" width="20" height="20" alt="SomeHoodlum Twitter" />
              <Image src="/team-ig-icon.svg" width="23" height="23" alt="SomeHoodlum Instagram" className="md:ml-2" />
            </div>
          </div>
          <div className="md:w-[30vw] md:mx-auto md:flex md:flex-col md:bg-[#FCFAFF] md:border-2 md:rounded-lg md:border-[#FCFAFF] md:mb-4">
            <div className="md:w-full md:bg-[#FCFAFF]">
              <Image src="/drmawz.jpg" className="md:w-full md:border md:rounded-lg md:border-[#FCFAFF]" width="2000" height="520" alt="Dr Mawz Avatar" />
            </div>
            <div className="md:w-full md:h-[10vh] md:bg-[#FCFAFF] md:py-6 md:px-5">
              <p className="md:text-lg md:font-semibold md:text-center md:text-[#202020]">Dr Mawz</p>
              <p className="md:text-md md:text-[#404040] md:mt-3">Web3 Huberman. Mined $BTC in '09 and $GAME in '24.</p>
            </div>  
            <div className="md:w-full md:h-[5vh] md:pt-6 md:flex md:flex-row md:items-center md:pl-6">
              <Image src="/team-twitter-icon.svg" width="20" height="20" alt="Dr Mawz Twitter" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}