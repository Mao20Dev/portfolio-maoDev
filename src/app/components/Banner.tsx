import React from 'react'
import Image from 'next/image'
import profile from './newprofie.png'
import { Typewriter } from './typewriter'

export default function Banner() {
    return (
        <div className='w-full h-screen flex justify-center bg-black sticky top-0 z-40' >
            <div className="w-full absolute inset-0 bg-black opacity-80 z-30 "></div>
                <div className="w-full absolute inset-0 flex justify-center z-20 items-center ">
                    <div style={{ maxWidth: '90%', maxHeight: '90%', borderRadius:'80%' }}>
                        <Image
                            src={profile}
                            width={1000}
                            height={600}
                            alt="Picture of the author MaoDev"
                           
                            style={{ borderRadius: '50%',objectFit: "contain" }}
                        />
                    </div>
                </div>

            <div className="absolute z-40 inset-0 flex justify-center items-center">
                <Typewriter />
            </div>
        </div>
    )
}
