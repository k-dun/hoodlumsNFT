"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { parse } from 'csv-parse';

export default function Home() {
  const [searchId, setSearchId] = useState('');
  const [tokenInfo, setTokenInfo] = useState(null);
  const [csvData, setCsvData] = useState([]);

  useEffect(() => {
    const fetchCsvData = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/k-dun/SomeFiles/main/Hoodlums.csv');
        const csvText = await response.text();
        const rows = await new Promise((resolve, reject) => {
          const records = [];
          parse(csvText, { delimiter: ',', from: 1 }, (error, row) => {
            if (error) {
              reject(error);
            } else {
              records.push(row);
            }
          }).on('end', () => {
            resolve(records);
          });
        });
        setCsvData(rows);
      } catch (error) {
        console.error('Error fetching CSV file:', error);
      }
    };

    fetchCsvData();
  }, []);

  const handleFormSubmit = (event) => {
      event.preventDefault();

      const foundToken = csvData.find((token) => {
      const tokenId = token[searchId][0];
      return tokenId === searchId;
    });

    if (foundToken) {
      setTokenInfo(foundToken);
    } else {
      setTokenInfo(null);
    }
  };

  const handleInputChange = (event) => {
    setSearchId(event.target.value);
    setTokenInfo(null);
  };

  return (
    <>
      <main className="w-full min-h-[100vh] flex flex-col bg-[#F299A5]">
        <div className="w-full px-6 py-4">
          <Image src="/hoodlums-header.jpg" priority={true} className="w-full md:w-[80%] lg:w-[50%] md:mx-auto border-b-solid border-b-2 border-b-[#FCFAFF] rounded-sm" width="2000" height="520" alt="Hoodlums NFT Project Header by SomeHoodlum" />
        </div>
        <div className="w-full flex justify-center px-6 pt-5">
          <form id="nftForm" className="" onSubmit={handleFormSubmit}>
            <input className="rounded-md pl-2 py-2 mr-2" type="text" id="nftId" value={searchId} onChange={handleInputChange} placeholder="420" />
            <button className="rounded-md bg-[#202020] text-[#FCFAFF] px-4 py-2" type="submit">Find My Lum!</button>
          </form>
        </div>
        {tokenInfo && (
          <div className="w-[70vw] md:w-[45vw] lg:w-[70vw] xl:w-[60vw] mt-9 mx-auto mb-4 border-2 border-[#FCFAFF] bg-[#FCFAFF] rounded-md md:flex md:flex-col lg:flex lg:flex-row">
            <div className="w-full md:items-center">
              <Image src={`https://duodot.com/lums/someHoodlum_${searchId}.png`} className="w-full rounded-md border-2 border-[#FCFAFF] lg:w-[40vw]" width={500} height={500} alt={`Hoodlum #${searchId}`} />
            </div>
            { searchId == 229 || searchId == 735 || searchId == 774 || searchId == 858 || searchId == 1001 ||
              searchId == 1009 || searchId == 1154 || searchId == 1879 || searchId == 3136 || searchId == 4901 
            ? (
                <div className="lg:flex lg:flex-col lg:ml-6 py-4 lg:w-[60vw]">
                  <h2 className="mt-3 text-lg md:text-xl text-center lg:text-left lg:ml-3 font-semibold">HOODLUM {tokenInfo[searchId][2]}</h2>
                  <hr className="my-2" />
                  {tokenInfo[searchId] && <p><span className="font-semibold">Rarity:</span> Unique!</p>}
                </div>
              ) : (
                <div className="lg:flex lg:flex-col lg:ml-6 py-4 lg:w-[60vw]">
                  <h2 className="mt-3 text-lg text-center lg:text-left lg:ml-3 md:text-xl font-semibold">HOODLUM #{searchId}</h2>
                  <hr className="my-2" />
                  {tokenInfo[searchId] && <p className="md:text-xl"><span className="ml-3 font-semibold">Rarity:</span> {tokenInfo[searchId][1]}</p>}
                  {tokenInfo[searchId] && <p className="md:text-xl"><span className="ml-3 font-semibold">Background:</span> {tokenInfo[searchId][2]}</p>}
                  {tokenInfo[searchId] && <p className="md:text-xl"><span className="ml-3 font-semibold">Gender:</span> {tokenInfo[searchId][3]}</p>}
                  {tokenInfo[searchId] && <p className="md:text-xl"><span className="ml-3 font-semibold">Skin:</span> {tokenInfo[searchId][4]}</p>}
                  {tokenInfo[searchId] && <p className="md:text-xl"><span className="ml-3 font-semibold">Tattoo:</span> {tokenInfo[searchId][5]}</p>}
                  {tokenInfo[searchId] && <p className="md:text-xl"><span className="ml-3 font-semibold">Hat:</span> {tokenInfo[searchId][6]}</p>}
                  {tokenInfo[searchId] && <p className="md:text-xl"><span className="ml-3 font-semibold">Hair:</span> {tokenInfo[searchId][7]}</p>}
                  {tokenInfo[searchId] && <p className="md:text-xl"><span className="ml-3 font-semibold">Hair Colour:</span> {tokenInfo[searchId][8]}</p>}
                  {tokenInfo[searchId] && <p className="md:text-xl"><span className="ml-3 font-semibold">Clothes:</span> {tokenInfo[searchId][9]}</p>}
                  {tokenInfo[searchId] && <p className="md:text-xl"><span className="ml-3 font-semibold">Bling:</span> {tokenInfo[searchId][10]}</p>}
                  {tokenInfo[searchId] && <p className="md:text-xl"><span className="ml-3 font-semibold">Mouth:</span> {tokenInfo[searchId][11]}</p>}
                  {tokenInfo[searchId] && <p className="md:text-xl"><span className="ml-3 font-semibold">Glasses:</span> {tokenInfo[searchId][12]}</p>}
                  {tokenInfo[searchId] && <p className="md:text-xl"><span className="ml-3 font-semibold">Facial:</span> {tokenInfo[searchId][13]}</p>}
                </div>
              )
            }
          </div>
        )}
      </main>
    </>
  );
}
