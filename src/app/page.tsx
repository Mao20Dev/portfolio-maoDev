import Image from "next/image";
import { ImageGrid } from "./components/ImageGrid";
import dash1 from './components/assets/dashboard1.png'
import dash2 from './components/assets/dashboard2.png'
import dash3 from './components/assets/dashboard3.png'
import dash4 from './components/assets/dashboard4.png'
import dash5 from './components/assets/dashboard5.png'
import dash6 from './components/assets/dashboard6.png'
import dash7 from './components/assets/dashboard7.png'

import gas1 from './components/assets/gas1.jpg'
import gas2 from './components/assets/gas2.jpg'
import gas3 from './components/assets/gas3.jpg'
import gas4 from './components/assets/gas4.jpg'

export default function Home() {
  return (
    <div className=" w-full bg-stone-950  flex flex-col relative z-40 p-0 py-5 md:p-11">
      <div className="w-full border-t-2 flex-col sm:flex-col md:flex md:flex-col lg:flex lg:flex-row border-t-orange-300">
        <div className="w-[100%] sm:w-[100%] md:w-full lg:w-1/2 flex flex-col  p-2 md:p-10 ">
        <div className="text-xl md:text-xl lg:text-2xl  xl:text-3xl text-white font-bold mb-2 px-11 py-4">Dashboard for Data Visualization</div>
          <div className="text-2md md:text-2md lg:text-lg  xl:text-xl text-white mb-2 px-11 py-4">Freelance FullStack Developer [React / Python]</div>
          <div className='text-neutral-400 leading-6 text-md mb-2 w-full md:w-[100%] px-11'>
          I developed a web application for a prominent company in Colombia to manage and visualize client information,
          incorporating user creation and permission management features. The data originates from an API of mechanical
          vibration meters or sensors.
          I implemented a CRUD functionality using a Lambda function with API Gateway to interact with the data stored in
          DynamoDB. User authentication is facilitated through Auth0. The web application is constructed with React and utilizes
          the widely-used Material-UI component library (MUI). This project afforded me the opportunity to leverage my
          programming skills in both Backend and Frontend development.
          </div>
        </div>
        <div className="w-full sm:w-full md:w-full lg:w-1/2  sm:p-10 text-white p-12 grid gap-5  grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 place-items-center">
          <Image
            src={dash1}
            width={350}
            height={350}
            alt="Picture of the author MaoDev"
            style={{objectFit: "contain"}}
            className="w-[98%] sm:w-[90%]" 
          />
          <Image
            src={dash2}
            width={350}
            height={350}
            alt="Picture of the author MaoDev"
            style={{objectFit: "contain"}}
          
            className="w-[98%] sm:w-[90%]"
          />
          <Image
            src={dash3}
            width={350}
            height={350}
            alt="Picture of the author MaoDev"
            style={{objectFit: "contain"}}
            className="w-[98%] sm:w-[90%]" 
          />
          <Image
            src={dash4}
            width={350}
            height={350}
            alt="Picture of the author MaoDev"
            style={{objectFit: "contain"}}
            className="w-[98%] sm:w-[90%]" 
          />
          <Image
            src={dash5}
            width={350}
            height={350}
            alt="Picture of the author MaoDev"
            style={{objectFit: "contain"}}
            className="w-[98%] sm:w-[90%]" 
          />
          <Image
            src={dash6}
            width={350}
            height={350}
            alt="Picture of the author MaoDev"
            style={{objectFit: "contain"}}
            className="w-[98%] sm:w-[90%]" 
          />
          <Image
            src={dash7}
            width={350}
            height={350}
            alt="Picture of the author MaoDev"
            style={{objectFit: "contain"}}
            className="w-[98%] sm:w-[90%]" 
          />


          {/* <ImageGrid /> */}
        </div>
      </div> 
      
      <div className="w-full border-t-2 flex-col sm:flex-col md:flex md:flex-col lg:flex lg:flex-row border-t-orange-300">
        <div className="w-[100%] sm:w-[100%] md:w-full lg:w-1/2 flex flex-col  p-2 md:p-10 "> 
        <div className="text-xl md:text-xl lg:text-2xl  xl:text-3xl text-white font-bold mb-2 px-11 py-4">Data visualization for Gasifier System</div>

          <div className="text-2md md:text-2md lg:text-lg  xl:text-xl text-white mb-2 px-11 py-4">Freelance FullStack Developer [React / Python] </div>
          <div className='text-neutral-400 leading-6 text-md mb-2 w-full md:w-[100%] px-11'>
          The project involved the integration of 5 high-temperature thermocouples into a gasification system's five stages. Using an analog-to-RS485 converter, temperature data was extracted from each stage. Subsequently, I developed a local API hosted on a Debian-based Raspberry Pi to serve an internal web page. This web page allowed users to monitor real-time temperature fluctuations across the five stages and provided the capability to download historical data in CSV format for future analysis.

          </div>
        </div>
        <div className="w-full sm:w-full md:w-full lg:w-1/2  sm:p-10 text-white p-12 grid gap-5  grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 place-items-center">
          <Image
            src={gas1}
            width={450}
            height={350}
            alt="Picture of the author MaoDev"
            style={{objectFit: "contain"}}
            
            className="w-[98%] sm:w-[90%]" 
          />
          <Image
            src={gas2}
            width={450}
            height={350}
            alt="Picture of the author MaoDev"
            style={{objectFit: "contain"}}
            className="w-[98%] sm:w-[90%]"
          />
          {/* <Image
            src={gas3}
            width={450}
            height={350}
            alt="Picture of the author MaoDev"
            style={{objectFit: "contain"}}
            
            className="w-[98%] sm:w-[90%]" 
          /> */}
          <Image
            src={gas4}
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
  );
}
