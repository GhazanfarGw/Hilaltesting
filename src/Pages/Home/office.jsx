import React, { useState } from 'react';

const Office = () => {
    const [showText, setShowText] = useState(false);

    return (
        <div id='office' className='py-2 justify-center mx-auto max-w-screen-xl md:px-10 px-5'>
            <div className='mx-auto justify-center'>
                <div className='first items-center py-10 md:pt-20'>
                    <p className='text-[#444444] md:text-4xl text-3xl md:pt-5 pt-3 font-light'>
                        Our Office
                    </p>
                    <p className='text-sm md:text-xl md:pt-8 pt-5 text-[#444]'>
                        Hilal ESG Holdings Ltd operates in multiple countries.
                    </p>
                </div>
                <div className='lg:grid lg:grid-cols-4 mx-auto justify-center md:gap-5 md:pt-10'>
                    <div className='second py-6 px-3 border border-[#00713B] md:mt-0 mt-5'
                    >
                        <img className={`transition-transform transform hover:scale-105 duration-300 cursor-pointer hidden md:block lg:block`} src='./Development BUrj.jpeg' alt='logo'/>
                        <img className={`transition-transform transform hover:scale-105 duration-300 cursor-pointer block md:hidden lg:hidden`} src='./dubai-uae.webp' alt='logo'/>
                        <div 
                            className='duration-300 text-center mx-auto'
                        >
                            <h1 className='text-lg lg:text-xl font-light justify-center md:py-5 py-3 text-[#444444]'>
                                United Arab Emirates
                            </h1>
                            <p
                             className='md:text-base text-sm tracking-wide text-[#777] duration-500'>
                                2472, Al Sila Tower, ADGM, Al Maryah Island, Abu Dhabi, UAE
                            </p>
                        </div>
                    </div>
                    <div className='third py-6 px-3 border border-[#00713B] md:mt-0 mt-5'
                    >
                        <img className={`transition-transform transform hover:scale-105 duration-300 cursor-pointer hidden md:block lg:block`} src='.//ksa.jpg' alt='logo'/>
                        <img className={`transition-transform transform hover:scale-105 duration-300 cursor-pointer block md:hidden lg:hidden`} src='./7N3oyVLb-Everything-you-need-to-know-about-visiting-KSA-1-1200x800.jpg' alt='logo'/>
                        <div 
                            className='duration-300 text-center mx-auto'
                        >
                            <h1 className='text-lg lg:text-xl font-light justify-center md:py-5 py-3 text-[#444444]'>
                                Kingdom of Saudi Arabia
                            </h1>
                            <p
                             className='md:text-base text-sm tracking-wide text-[#777] duration-500'>
                                Khurais Road, Al Rayaan PO Box 101551 Riyadh
                            </p>
                        </div>
                    </div>
                    <div className='fourth py-6 px-3 border border-[#00713B] md:mt-0 mt-5'
                    >
                        <img className={`transition-transform transform hover:scale-105 duration-300 cursor-pointer hidden md:block lg:block`} src='./london.jpg' alt='logo'/>
                        <img className={`transition-transform transform hover:scale-105 duration-300 cursor-pointer block md:hidden lg:hidden`} src='./London-1-1024x684.jpeg' alt='logo'/>
                        <div 
                            className='duration-300 text-center mx-auto'
                        >
                            <h1 className='text-lg lg:text-xl font-light justify-center md:py-5 py-3 text-[#444444]'>
                                United Kingdom London
                            </h1>
                            <p
                             className='md:text-base text-sm tracking-wide text-[#777] duration-500'>
                                7 Bell Yard, London, WC2A 2JR
                            </p>
                        </div>
                    </div>
                    <div className='five py-6 px-3 border border-[#00713B] md:mt-0 mt-5'
                    >
                      <img className={`transition-transform transform hover:scale-105 duration-300 cursor-pointer hidden md:block lg:block`} src='./singapore.jpg' alt='logo'/>
                      <img className={`transition-transform transform hover:scale-105 duration-300 cursor-pointer block md:hidden lg:hidden`} src='./Singapore-1170x630.jpg.optimal.jpg' alt='logo'/>
                        <div 
                            className='duration-300 text-center mx-auto'
                        >
                            <h1 className='text-lg lg:text-xl font-light justify-center md:py-5 py-3 text-[#444444]'>
                                Singapore
                            </h1>
                            <p
                             className='md:text-base text-sm tracking-wide text-[#777] duration-500'>
                                101 Upper Cross Street #05-40A People’s Park Centre, Singapore 058357
                            </p>
                        </div>
                    </div>
                    <div className='five py-6 px-3 border border-[#00713B] md:mt-0 mt-5 block md:hidden  lg:hidden'
                    >
                      <img className={`transition-transform transform hover:scale-105 duration-300 cursor-pointer hidden md:block lg:block`} src='./singapore.jpg' alt='logo'/>
                      <img className={`transition-transform transform hover:scale-105 duration-300 cursor-pointer block md:hidden lg:hidden`} src='./mumbai.jpg' alt='logo'/>
                        <div 
                            className='duration-300 text-center mx-auto'
                        >
                            <h1 className='text-lg lg:text-xl font-light justify-center md:py-5 py-3 text-[#444444]'>
                                India
                            </h1>
                            <p
                             className='md:text-base text-sm tracking-wide text-[#777] duration-500'>
                                402 B Block, Shalimar Complex, Paldi Ahmedabad
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-b md:pb-10 pb-5"/>
        </div>
    );
}

export default Office;
