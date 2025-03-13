import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Cookies from "universal-cookie";

import Boot from './Components/Landing Comp/BootUp';
import ImgSld from './Components/Landing Comp/ImgSld';
import Abt from './Components/Landing Comp/About';
import Announce from './Components/Landing Comp/announcements';
import Event from './Components/Landing Comp/Events';
import Tracker from './Components/Landing Comp/Tracker';
import Samplereact from './Components/Landing Comp/Courses';
import Contact from './Components/Landing Comp/ContactIcon'
import Chat from './Components/Landing Comp/ChatPopup'
import Footer from './Components/Landing Comp/Footer';

const courses = [
    {
        name: "Artificial Intelligence & Data Science",
        image: "/images/CYBER.mp4", // CDN-hosted image
        link: "https://example.com/aids",
        clr: "#be3531"
    },
    {
        name: "Automobile Engineering",
        image: "/images/CYBER.mp4", // CDN-hosted image
        link: "https://example.com/auto",
        clr: "#f6a664",
    },
    {
        name: "Civil Engineering",
        image: "/images/CYBER.mp4", // CDN-hosted image
        link: "https://example.com/civil",
        clr: "#5e84a0",
    },
    {
        name: "Computer Science Engineering",
        image: "/images/CYBER.mp4", // CDN-hosted image
        link: "https://example.com/cse",
        clr: "#01a302",
    },
    {
        name: "CSE(CyberSecurity)",
        image: "/images/CYBER.mp4", // CDN-hosted image
        link: "https://example.com/cyber",
        clr: "#114738"
    },
    {
        name: "Electrical & Electronics Engineering",
        image: "/images/CYBER.mp4", // CDN-hosted image
        link: "https://example.com/eee",
        clr: "#ce8143"
    },
    {
        name: "Electronics & Communication Engineering",
        image: "/images/CYBER.mp4", // CDN-hosted image
        link: "https://example.com/ece",
        clr: "#0226c4",
    },
    {
        name: "Electronics & Instrumentation Engineering",
        image: "/images/CYBER.mp4", // CDN-hosted image
        link: "https://example.com/eie",
        clr: "#ca4121"
    },
    {
        name: "Information Technology",
        image: "/images/CYBER.mp4", // CDN-hosted image
        link: "https://example.com/it",
        clr: "#a982b4",
    },
    {
        name: "Mechanical Engineering",
        image: "/images/CYBER.mp4", // CDN-hosted image
        link: "https://example.com/mech",
        clr: "#896a21",
    },
    {
        name: "Master of Business Administration",
        image: "/images/CYBER.mp4", // CDN-hosted image
        link: "https://example.com/mba",
        clr: "#14254f"
    },

];


const LandingPage = ({theme, load, toggle}) => {

    return (
        <div className="landing-page -mt-[5vmax]">
            <ImgSld load={load} toggle={toggle} theme={theme}/>
            <div className='w-max max-w-[100vw] h-fit absolute z-50'>
                <div className='pt-2 pb-[2vmax] bg-prim dark:bg-drkp'>
                    <Abt/>
                    <Announce/>
                    <Event/>
                </div>
                <Tracker/>
                <div className='bg-prim dark:bg-drkp'>
                    <Samplereact courses={courses}/>
                    <Contact/>
                    <Chat/>
                    <Footer theme={theme}/>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
