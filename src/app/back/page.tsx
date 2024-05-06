import React from 'react'
import Image from "next/image";
import dash1 from '../components/assets/meter1.png'
import dash2 from '../components/assets/meter2.png'
import dash3 from '../components/assets/meter3.png'
import dash4 from '../components/assets/meter4.png'

import scada1 from '../components/assets/scada1.png'
import scada2 from '../components/assets/scada2.png'
import scada3 from '../components/assets/scada3.png'
import scada4 from '../components/assets/scada4.png'

import adam1 from '../components/assets/adam1.jpg'
import adam2 from '../components/assets/adam2.jpg'

export default function page() {
    return (
    <div className=" w-full bg-stone-950  flex flex-col relative z-40 p-0 py-5 md:p-11">
        <div className="w-full border-t-2 flex-col sm:flex-col md:flex md:flex-col lg:flex lg:flex-row border-t-orange-300">
        <div className="w-[100%] sm:w-[100%] md:w-full lg:w-1/2 flex flex-col  p-0 md:p-10 "> 
        <div className="text-xl md:text-xl lg:text-2xl  xl:text-3xl text-white font-bold mb-2 px-3 md:px-11 py-4">Reading Data from Electrical Meters</div>

          <div className="text-2md md:text-2md lg:text-lg  xl:text-xl text-white mb-2 px-3 md:px-11 py-4">Freelance Backend Developer </div>
          <div className='text-neutral-400 leading-6 text-md mb-2 w-full md:w-[100%] px-3 md:px-11'>
          In this project, I performed the reading and integration of various electrical sensors using Python, leveraging knowledge
in Linux and AWS. Some of the sensors utilized MODBUS for communication, while others were read through MQTT,
creating an MQTT broker on an EC2 instance and sending the data to a URL. Additionally, certain sensors
communicated with a gateway via LORAWAN, and one sensor transmitted information via MQTT with credentials,
leading to the decision to implement AWS IoT Core. Alongside this, a Lambda function was employed to trigger the
transmission of information to the Front-End.

          </div>
        </div>
        <div className="w-full sm:w-full md:w-full lg:w-1/2  sm:p-10 text-white p-6 md:p-12 grid gap-5  grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-1 place-items-center">
          <Image
            src={dash1}
            width={750}
            height={350}
            alt="Picture of the author MaoDev"
            style={{objectFit: "contain"}}
            
            className="w-[98%] sm:w-[90%]" 
          />
          <Image
            src={dash2}
            width={750}
            height={350}
            alt="Picture of the author MaoDev"
            style={{objectFit: "contain"}}
            className="w-[98%] sm:w-[90%]"
          />
          <Image
            src={dash3}
            width={750}
            height={350}
            alt="Picture of the author MaoDev"
            style={{objectFit: "contain"}}
            
            className="w-[98%] sm:w-[90%]" 
          />
          <Image
            src={dash4}
            width={750}
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
        <div className="text-xl md:text-xl lg:text-2xl  xl:text-3xl text-white font-bold mb-2 px-3 md:px-11 py-4">Reading Data from SCADA System</div>

          <div className="text-2md md:text-2md lg:text-lg  xl:text-xl text-white mb-2 px-3 md:px-11 py-4">Freelance Backend Developer </div>
          <div className='text-neutral-400 leading-6 text-md mb-2 w-full md:w-[100%] px-3 md:px-11'>
          During my professional tenure, I spearheaded the task of overseeing the reading and transmission of data from electrical
meters to the frontend system. Leveraging Python, I crafted a sophisticated script adept at dynamically recognizing a
multitude of meters linked via the Modbus RS485 protocol. This script adeptly harvested pertinent data from the meters
and effortlessly relayed it to a specified URL endpoint through the HTTP POST method. Harnessing Python’s robust
capabilities, I optimized the workflow for data acquisition and transfer, thereby guaranteeing precision and dependability
in furnishing vital metering insights to the frontend system.

          </div>
        </div> 
        <div className="w-full sm:w-full md:w-full lg:w-1/2  sm:p-10 text-white p-6 md:p-12 grid gap-5  grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-1 place-items-center">
          <Image
            src={scada1}
            width={750}
            height={350}
            alt="Picture of the author MaoDev"
            style={{objectFit: "contain"}}
            
            className="w-[98%] sm:w-[90%]" 
          />
          <Image
            src={scada2}
            width={750}
            height={350}
            alt="Picture of the author MaoDev"
            style={{objectFit: "contain"}}
            className="w-[98%] sm:w-[90%]"
          />
          <Image
            src={scada3}
            width={750}
            height={350}
            alt="Picture of the author MaoDev"
            style={{objectFit: "contain"}}
            
            className="w-[98%] sm:w-[90%]" 
          />
          <Image
            src={scada4}
            width={750}
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
        <div className="text-xl md:text-xl lg:text-2xl  xl:text-3xl text-white font-bold mb-2 px-3 md:px-11 py-4">Analog to RS485 Converter Integration</div>

          <div className="text-2md md:text-2md lg:text-lg  xl:text-xl text-white mb-2 px-3 md:px-11 py-4">Backend Developer </div>
          <div className='text-neutral-400 leading-6 text-md mb-2 w-full md:w-[100%] px-3 md:px-11'>
          I conducted the integration of an analog-to-RS485 converter using Python and devised the connection diagram for various types of current or voltage sensors.

          </div>
        </div>
        <div className="w-full sm:w-full md:w-full lg:w-1/2  sm:p-10 text-white p-6 md:p-12 grid gap-5  grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-1 place-items-center">
          <Image
            src={adam1}
            width={750}
            height={350}
            alt="Picture of the author MaoDev"
            style={{objectFit: "contain"}}
            
            className="w-[98%] sm:w-[90%]" 
          />
          <Image
            src={adam2}
            width={750}
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
