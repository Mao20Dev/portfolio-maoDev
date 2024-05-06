import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Banner from "./components/Banner";
import About from "./components/About";
import { ViewTransitions } from 'next-view-transitions'
import WorkNav from "./components/WorkNav";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Contact from "./components/Contact";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MaoDev",
  description: "MaoDev Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  
  return (
    <ViewTransitions>
    <html lang="en" style={{scrollBehavior:'smooth'}}>
      <body className={`${inter.className} bg-black `} id="home">
        <NavBar />
        <Banner />
        <About />
        <div className=" w-full bg-stone-950   relative z-40 p-11" id='work'>
          <div className="text-neutral-800 font-bold tracking-normal w-full flex justify-center  text-4xl sm:text-4xl md:text-6xl lg:text-8xl">
            Work
          </div>
        </div>
        <WorkNav />
        
       
        {children}

        <div className=" w-full bg-neutral-800   relative z-40 p-[55px]" id='stack'>
          <div className="text-zinc-400 font-bold tracking-normal w-full flex justify-center  text-4xl sm:text-4xl md:text-6xl lg:text-8xl">
            Skills
          </div>
        </div>

        <Skills />

        {/* <div className=" w-full bg-stone-950  relative z-40 p-[55px]" id='stack'>
          <div className="text-zinc-500 font-bold tracking-normal w-full flex justify-center  text-4xl sm:text-4xl md:text-6xl lg:text-8xl">
            Contact
          </div>
        </div> */}

        <Contact />

      </body>
    </html>
    </ViewTransitions>
  );
}
