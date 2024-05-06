import React from 'react'
import Image from "next/image";
import dash1 from '../components/assets/movies1.png'
import dash2 from '../components/assets/movies2.png'
import dash3 from '../components/assets/movies3.png'
import dash4 from '../components/assets/movies4.png'
import dash5 from '../components/assets/movies5.png'
import dash6 from '../components/assets/movies6.png'

import dat1 from '../components/assets/dat1.jpg'
import dat2 from '../components/assets/dat2.jpg'
import dat3 from '../components/assets/dat3.jpg'
import dat4 from '../components/assets/dat4.jpg'

import kun1 from '../components/assets/kun1.jpg'
import kun2 from '../components/assets/kun2.jpg'
import kun3 from '../components/assets/kun3.jpg'



export default function page() {
    return (
    <div className=" w-full bg-stone-950  flex flex-col relative z-40 p-0 py-5 md:p-11">
        <div className="w-full border-t-2 flex-col sm:flex-col md:flex md:flex-col lg:flex lg:flex-row border-t-orange-300">
        <div className="w-[100%] sm:w-[100%] md:w-full lg:w-1/2 flex flex-col  p-0 md:p-10 "> 
        <div className="text-xl md:text-xl lg:text-2xl  xl:text-3xl text-white font-bold mb-2 px-3 md:px-11 py-4">Movies / Series / Anime site</div>

          <div className="text-2md md:text-2md lg:text-lg  xl:text-xl text-white mb-2 px-3 md:px-11 py-4">React / Python Freelance Developer </div>
          <div className='text-neutral-400 leading-6 text-md mb-2 w-full md:w-[100%] px-3 md:px-11'>
          I developed a movie website following a design created by a UI/UX developer. In this project, I leveraged my React
        expertise, my proficiency in native CSS, and incorporated components from React Bootstrap. Additionally, I designed
        and implemented the API to fetch and deliver data to the frontend. To populate this API, I employed web scraping
        techniques with Python, extracting resources from other movie websites and storing the data locally on my PC.

          </div>
        </div>
        <div className="w-full sm:w-full md:w-full lg:w-1/2  sm:p-10 text-white  p-6 md:p-12 grid gap-5  grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-1 place-items-center">
          <Image
            src={dash1}
            width={450}
            height={350}
            alt="Picture of the author MaoDev"
            style={{objectFit: "contain"}}
            
            className="w-[98%] sm:w-[90%]" 
          />
          <Image
            src={dash2}
            width={450}
            height={350}
            alt="Picture of the author MaoDev"
            style={{objectFit: "contain"}}
            className="w-[98%] sm:w-[90%]"
          />
          <Image
            src={dash3}
            width={450}
            height={350}
            alt="Picture of the author MaoDev"
            style={{objectFit: "contain"}}
            
            className="w-[98%] sm:w-[90%]" 
          />
          <Image
            src={dash4}
            width={450}
            height={350}
            alt="Picture of the author MaoDev"
            style={{objectFit: "contain"}}
            
            className="w-[98%] sm:w-[90%]" 
          />
          <Image
            src={dash5}
            width={450}
            height={350}
            alt="Picture of the author MaoDev"
            style={{objectFit: "contain"}}
            
            className="w-[98%] sm:w-[90%]" 
          />
          <Image
            src={dash6}
            width={450}
            height={350}
            alt="Picture of the author MaoDev"
            style={{objectFit: "contain"}}
            
            className="w-[98%] sm:w-[90%]" 
          />
          


          {/* <ImageGrid /> */}
        </div>
        </div>

        <div className="w-full border-t-2 flex-col sm:flex-col md:flex md:flex-col lg:flex lg:flex-row border-t-orange-300">
        <div className="w-[100%] sm:w-[100%] md:w-full lg:w-1/2 flex flex-col  p-0 md:p-10 "> 
        <div className="text-xl md:text-xl lg:text-2xl  xl:text-3xl text-white font-bold mb-2 px-3 md:px-11 py-4">Local Platform for Datalogger</div>

          <div className="text-2md md:text-2md lg:text-lg  xl:text-xl text-white mb-2 px-3 md:px-11 py-4">React Developer </div>
          <div className='text-neutral-400 leading-6 text-md mb-2 w-full md:w-[100%] px-3 md:px-11'>
          I independently manage the frontend development of a web page tailored for configuring and visualizing data from a datalogger, catering to a variety of sensor types. Utilizing React and the MUI MATERIAL component library, I ensure an intuitive user interface and seamless handling of sensor data.
          </div>
        </div>
        <div className="w-full sm:w-full md:w-full lg:w-1/2  sm:p-10 text-white p-6 md:p-12 grid gap-5  grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-1 place-items-center">
          <Image
            src={dat1}
            width={450}
            height={350}
            alt="Picture of the author MaoDev"
            style={{objectFit: "contain"}}
            
            className="w-[98%] sm:w-[90%]" 
          />
          <Image
            src={dat2}
            width={450}
            height={350}
            alt="Picture of the author MaoDev"
            style={{objectFit: "contain"}}
            className="w-[98%] sm:w-[90%]"
          />
          <Image
            src={dat3}
            width={450}
            height={350}
            alt="Picture of the author MaoDev"
            style={{objectFit: "contain"}}
            
            className="w-[98%] sm:w-[90%]" 
          />
          <Image
            src={dat4}
            width={450}
            height={350}
            alt="Picture of the author MaoDev"
            style={{objectFit: "contain"}}
            
            className="w-[98%] sm:w-[90%]" 
          />
          
          


          {/* <ImageGrid /> */}
        </div>
        </div>

        <div className="w-full border-t-2 flex-col sm:flex-col md:flex md:flex-col lg:flex lg:flex-row border-t-orange-300">
        <div className="w-[100%] sm:w-[100%] md:w-full lg:w-1/2 flex flex-col  p-0 md:p-10 "> 
        <div className="text-xl md:text-xl lg:text-2xl  xl:text-3xl text-white font-bold mb-2 px-3 md:px-11 py-4">Website for download Data from Kunak Device</div>

          <div className="text-2md md:text-2md lg:text-lg  xl:text-xl text-white mb-2 px-3 md:px-11 py-4">React  Developer </div>
          <div className='text-neutral-400 leading-6 text-md mb-2 w-full md:w-[100%] px-3 md:px-11'>
          I developed a web page deployed on a Debian-based Raspberry Pi, designed specifically to extract data directly from Kunak devices, a leading Spanish company in the environmental sector. The webpage enables seamless downloading of information, enhancing accessibility and data management efficiency.

          </div>
        </div>
        <div className="w-full sm:w-full md:w-full lg:w-1/2  sm:p-10 text-white p-6 md:p-12 grid gap-5  grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-1 place-items-center">
          <Image
            src={kun1}
            width={450}
            height={350}
            alt="Picture of the author MaoDev"
            style={{objectFit: "contain"}}
            
            className="w-[98%] sm:w-[90%]" 
          />
          <Image
            src={kun2}
            width={450}
            height={350}
            alt="Picture of the author MaoDev"
            style={{objectFit: "contain"}}
            className="w-[98%] sm:w-[90%]"
          />
          <Image
            src={kun3}
            width={450}
            height={350}
            alt="Picture of the author MaoDev"
            style={{objectFit: "contain"}}
            
            className="w-[98%] sm:w-[90%]" 
          />
          
          


          {/* <ImageGrid /> */}
        </div>
        </div>
        
      </div>
    )
}
