import React, {useEffect, useState, useRef} from 'react';
import Bannerimg from '../../Assets/UnivAbt-5-1.jpg';
import Banner from '../../Banner';

const AbtUs = ({theme, toggle}) => {
    const banTtl = "About VEC"
    const motto = "A Journey of Thousand Miles Begins with a Single Step"
    const secTtl = `Velammal Engineering College`
   
    const secSub = "An Autonomous Institution"
    const secCnt = "We stand for innovation, with our diverse community of scholars and engineers dedicated " +
        "to making a positive impact at local, national, and global levels."
    const sec2Cnt = "Velammal Engineering College (Autonomous) is affiliated to Anna University and is approved by the All India Council for Technical Education (AICTE). The institution was certified ISO 9001:2015 by M/s. TUV NORD, Germany, in just 5 years of its inception. The college is accredited by NAAC and all the UG programmes are accredited by NBA. Based in Chennai city, VEC, the safe campus, offers a truly unrivalled study experience with various courses, outstanding facilities, comprehensive support and highly disciplined life. "
    const sec3Cnt = "Velammal Engineering College achieved its autonomous status in the year 2019. Autonomy can be found in the choice of curriculum, pedagogy and evaluation systems. It helps students to carve a niche for themselves as they have greater flexibility towards academic development for improvement of academic standards and excellence."
    const lis = [sec2Cnt, sec3Cnt]

    return (
        <>
            <Banner toggle={toggle} theme={theme}
                backgroundImage="https://png.pngtree.com/thumb_back/fh260/background/20220620/pngtree-mountainous-road-with-the-word-mission-inscribed-vision-visionary-way-photo-image_31857844.jpg"
                headerText="About VEC"
                subHeaderText="A center for academic excellence and innovation, nurturing minds to create a brighter future through education and empowerment."
            />


            <div className='flex m-8'>
                <div className='flex relative w-full max-h-[100vh]'>
                    <div className="relative grow p-4 font-popp mt-14 basis-3/4 z-10
                        bg-[#ffffffa] backdrop-blur-[16px] lg:bg-none lg:backdrop-blur-0 rounded-xl">
                       
                        <p className='text-3xl text-center font-rome'>{secTtl}</p>
                        <p className='text-lg font-bold text-accn dark:text-drka text-center'>{secSub}</p>
                        <p className="text-2xl text-center mt-4">{secCnt}</p>
                    </div>
                    <div className='absolute lg:relative w-[120vw] h-[40vh] left-[-20vw] top-[20%] lg:left-0 lg:top-10
                        opacity-30 lg:opacity-100'>
                        <img className='absolute w-[40%] h-[65%] right-[15%] rounded-tl-[3rem] rounded-br-[3rem]'
                             src={Bannerimg} alt="Banner Image0"/>
                        <img className='absolute w-[40%] h-[90%] rounded-tr-[3rem] rounded-bl-[3rem]
                            left-[15%] top-[10%] border-[2vmin] border-prim dark:border-drkp' src={Bannerimg} alt="Banner Image1"/>
                        <img className='absolute w-[25%] h-[40%] left-[40%] top-[45%] rounded-tl-[3rem] rounded-br-[3rem]
                            border-[2vmin] border-prim dark:border-drkp' src={Bannerimg} alt="Banner Image2"/>
                        {/*<img className='absolute w-[35%] h-[50%] left-[25%] top-[50%] rounded-tr-[3rem] rounded-bl-[3rem]*/}
                        {/*    border-[16px] border-white' src={Bannerimg} alt="Banner Image3"/>*/}
                        {/*<img className='absolute' src={Banner} alt="Banner Image3"/>*/}
                    </div>
                </div>
            </div>
            {lis.map((itm) => (
                <div className="flex gap-8 my-14 border-y-4 border-secd dark:border-drks
                    bg-[color-mix(in_srgb,theme(colors.secd)_15%,white)]
                    dark:bg-[color-mix(in_srgb,theme(colors.drks)_30%,black)]
                    p-10 shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out">
                    <div className="flex flex-col justify-center px-2 lg:px-12">
                        <p className="text-lg lg:text-2xl text-center font-popp
                        leading-relaxed tracking-wide">
                            {itm}
                        </p>
                    </div>
                </div>
            ))}
        </>
    );
};

export default AbtUs;