import React from "react";
import {motion} from "framer-motion";
import {Tilt} from "react-tilt";
import {FaChevronDown, FaChevronUp} from "react-icons/fa";
import {useState, useEffect} from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import LIBMemb from "./LIBMemb"; // Adjust path if needed
import LIBFacl from "./LIBFacl";
import LIBHod from "./LIBHod";
import LoadComp from "../../LoadComp";
import axios from "axios";

const LibrarySections = ({faculty, membership, lib}) => {

    const BASE_URL = process.env.REACT_APP_BASE_URL;

    const UrlParser = (path) => {
        return path?.startsWith("http") ? path : `${BASE_URL}${path}`;
    };

    const [libdata, setLibData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responce = await axios.get('/api/library');

                const data = responce.data[0];

                setLibData(data);
                
            } catch (error) {
                console.error("Error fetching library data",error);
            }
        }
        fetchData();
    }, []);
    function LIBFea() {
return (
  <div className="overflow-x-auto mt-10 px-4 sm:px-8 py-10">
    <h2 className="text-2xl sm:text-3xl font-bold text-[#800000] dark:text-drkt text-center mb-8">
      Some of E-books Download Websites
    </h2>

    <table className="w-full table-auto border-collapse border border-gray-300 shadow-md text-left">
      <thead>
        <tr className="bg-[#808080] text-white text-base sm:text-lg">
          <th className="py-3 px-4 border border-gray-300">E-Book Source</th>
          <th className="py-3 px-4 border border-gray-300">Link</th>
        </tr>
      </thead>
      <tbody className="text-sm sm:text-base">
        {libdata?.EbookSources?.map((row, index) => (
          <tr key={index} className="">
            <td className="py-3 px-4 border border-gray-300 font-medium text-text dark:text-drkt">
              {row.name}
            </td>
            <td className="py-3 px-4 border border-gray-300">
                <a
                    href={row.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dark:text-drka hover:underline"
                >
                    {row.url}
                </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

    }

    function LIBInstr() {
        return (
        <>
        <div className="flex flex-wrap gap-4 justify-center lg:px-0 mt-8">
                    <p className="basis-full text-2xl font-poppins text-accn dark:text-drkt font-semibold">LIBRARY ADVISORY COMMITTEE
                        MEMBERS</p>
                    {libdata?.advisors?.map((adv, i) => (
                        <div className={`basis-2/5 grow py-2 px-4 rounded-xl hover:border-l-4 border-secd dark:border-drks
                            bg-[color-mix(in_srgb,theme(colors.prim)_95%,black)]
                            dark:bg-[color-mix(in_srgb,theme(colors.drkp)_95%,white)] 
                            transition-colors duration-300 ease-in`} key={i}>
                            {/* Fixed typo: cmt.nme to cmt.pos since data only has pos */}
                            <p className="text-xl font-poppins">{adv[0]}</p>
                            {/* Removed cmt.nme reference as it doesn't exist in data */}
                            <p className="text-sm text-accn dark:text-drka">{adv[1]}</p>
                        </div>
                    ))}
                </div>
        </>
        )
    }
    function LIBHigh() {
        return (
            <>
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
                    {libdata?.additionalSections?.map((section, index) => (
                        <motion.div
                            key={index}
                            className="p-4 sm:p-6 md:p-8 rounded-2xl shadow-md sm:shadow-lg text-center dark:bg-[color-mix(in_srgb,theme(colors.drkp)_95%,white)]
        transition duration-500 hover:scale-105 hover:shadow-2xl hover:bg-[color-mix(in_srgb,theme(colors.secd),transparent_85%)]
            dark:hover:bg-[color-mix(in_srgb,theme(colors.drks),transparent_85%)]"
                            initial={{opacity: 0, y: 50}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 0.8}}
                            viewport={{once: true}}
                        >
                            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-accn dark:text-drkt mb-4 sm:mb-6">
                                {section.category}
                            </h2>
                            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base md:text-lg">
                                {section.items.map((item, i) => (
                                    <motion.li
                                        key={i}
                                        className="flex items-center space-x-2 sm:space-x-3 hover:text-accn dark:hover:text-drkt transition-colors duration-300"
                                        initial={{opacity: 0, x: -20}}
                                        whileInView={{opacity: 1, x: 0}}
                                        transition={{delay: i * 0.1}}
                                        viewport={{once: true}}
                                    >
                                        <span className="w-2 h-2 sm:w-3 sm:h-3 bg-secd dark:bg-drks rounded-full"></span>
                                        <span className="text-start">{item}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
                <div className="min-h-screen py-12 sm:py-16 px-4 sm:px-6">
                    <h2 className="text-3xl sm:text-5xl font-extrabold text-center text-accn dark:text-drkt uppercase tracking-wide mb-8 sm:mb-12">
                        Library Highlights
                    </h2>

                    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
                        {libdata?.ImageGallery?.map((section, index) => (
                            <motion.div
                                key={index}
                                className="relative group"
                                initial={{opacity: 0, y: 50}}
                                whileInView={{opacity: 1, y: 0}}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.15,
                                    ease: "easeOut",
                                }}
                                viewport={{once: true}}
                            >
                                <Tilt
                                    options={{
                                        max: 15,
                                        scale: 1.05,
                                        speed: 400,
                                        glare: true,
                                        "max-glare": 0.2,
                                    }}
                                    className="relative rounded-2xl shadow-lg overflow-hidden transition-all transform
            dark:bg-[color-mix(in_srgb,theme(colors.drkp)_95%,white)] group-hover:shadow-2xl"
                                >
                                    <div className="relative overflow-hidden">
                                        <img
                                            src={UrlParser(section.image)}
                                            alt={section.title}
                                            className="w-full h-56 sm:h-60 object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div
                                            className="absolute inset-0 bg-black opacity-30 group-hover:opacity-10 transition-opacity"></div>
                                    </div>

                                    <div className="p-5 sm:p-6">
                                        <h3
                                            className="text-xl sm:text-2xl font-bold text-accn dark:text-drkt
                                            group-hover:text-secd dark:group-hover:text-drks transition-colors"
                                        >
                                            {section.title}
                                        </h3>
                                        <p className="mt-2 sm:mt-3 leading-relaxed">
                                            {section.description}
                                        </p>
                                    </div>
                                </Tilt>
                            </motion.div>
                        ))}
                    </div>
                </div>          
            </>
        )
    }

    function LIBMult() {
        return (
            <div className=" pt-16 pb-16 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Images */}
                    <div className="relative group">
                        <motion.img
                            src={UrlParser("/static/images/library/library_images/Multimedia+Library+1.webp")}
                            alt="Multimedia Library"
                            className="w-full rounded-xl shadow-lg transition-transform duration-500 group-hover:scale-105"
                            initial={{opacity: 0, x: -50}}
                            animate={{opacity: 1, x: 0}}
                            transition={{duration: 0.8}}
                        />
                        <motion.img
                            src={UrlParser("/static/images/library/library_images/Multimedia+Library+2.webp")}
                            alt="Library Resources"
                            className="absolute bottom-[-30px] right-[-20px] w-2/3 rounded-xl shadow-xl border-4 border-white transition-transform duration-500 group-hover:rotate-3"
                            initial={{opacity: 0, x: 50}}
                            animate={{opacity: 1, x: 0}}
                            transition={{duration: 0.8, delay: 0.2}}
                        />
                    </div>

                    {/* Right Side - Text Content */}
                    <motion.div
                        className=""
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8, delay: 0.3}}
                    >
                        <h2 className="text-4xl font-bold text-accn dark:text-drkt mb-6">
                            MULTIMEDIA LIBRARY
                        </h2>
                        <p className="text-lg leading-relaxed">
                            A separate Multimedia Library is provided to utilize CD-ROMs,
                            Online Journals, and NPTEL courses. It offers internet browsing,
                            enabling students and faculty to access multidisciplinary video
                            learning materials.
                        </p>
                        <p className="mt-4 text-lg leading-relaxed">
                            Our college is a proud member of <strong>DELNET</strong>,
                            promoting resource sharing among libraries. We provide access to
                            online journals like IEEE Transactions, ASME Proceedings, and more
                            for research activities.
                        </p>
                        <p className="mt-4 text-lg leading-relaxed">
                            The <strong>National Digital Library of India</strong> integrates
                            global digital libraries under a single portal. It supports
                            academic disciplines in multiple languages, making knowledge
                            accessible for all.
                        </p>
                    </motion.div>
                </div>
            </div>
        )
    }

    function LIBArvl() {
        return (
            <div className="py-16 px-6">
                <h2 className="text-4xl font-bold text-accn dark:text-drkt mb-12 text-center">
                    NEW ARRIVALS
                </h2>

                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
                    {libdata?.NewArrivals?.map((section, index) => (
                        <motion.div
                            key={index}
                            className="relative rounded-2xl shadow-lg overflow-hidden transform transition-transform
              dark:bg-[color-mix(in_srgb,theme(colors.drkp)_95%,white)] hover:scale-105"
                            initial={{opacity: 0, y: 30}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 0.5, delay: index * 0.1}}
                            viewport={{once: true}}
                        >
                            <div className="group relative">
                                <img
                                    src={UrlParser(section.image)}
                                    alt={section.title}
                                    className="w-full h-60 object-cover filter brightness-90 group-hover:brightness-100 transition-all"
                                />
                                <div
                                    className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0
                group-hover:opacity-100 transition-all"
                                >
                                    <h3 className="text-2xl text-black font-bold text-center px-4">
                                        {section.title}
                                    </h3>
                                </div>
                            </div>

                            <div className="p-6">
                                <p className="leading-relaxed">{section.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        )
    }
    
    function LIBResc() {
        return (
            <div className="py-16 px-6">
                <h2 className="text-4xl font-bold text-accn dark:text-drkt mb-12 text-center">
                    Library Resources
                </h2>

                <div className="max-w-4xl mx-auto space-y-6">
                    {libdata?.Links?.map((section, index) => (
                        <div
                            key={index}
                            className="dark:bg-[color-mix(in_srgb,theme(colors.drkp)_95%,white)] rounded-2xl shadow-lg"
                        >
                            <button
                                onClick={() => toggleSection(index)}
                                className={`w-full flex justify-between items-center px-6 py-4 text-xl font-semibold
                transition-all rounded-2xl text-white dark:text-drkp mb-4
                ${
                                    openSection === index
                                        ? "bg-[#FDCC03] text-black dark:bg-drks"
                                        : "bg-accn dark:bg-drks"
                                }`}
                            >


                              <h2 className={`${openSection === index ? "text-black" : "text-white"}`} >    { section.title} </h2> 
                                {openSection === index ? <FaChevronUp className="color-black text-black"/> : <FaChevronDown/>}
                            </button>

                            {openSection === index && (
                                <motion.div
                                    initial={{opacity: 0, height: 0}}
                                    animate={{opacity: 1, height: "auto"}}
                                    exit={{opacity: 0, height: 0}}
                                    className="px-6 py-4"
                                >
                                    {Array.isArray(section.content) ? (
                                            <ul className="list-disc marker:text-accn dark:marker:text-drka pl-6 space-y-2">
                                                {section.content.map((item, idx) =>
                                                    typeof item === "string" ? (
                                                        <li key={idx}>{item}</li>
                                                    ) : (
                                                        <li key={idx}>
                                                            <a
                                                                href={item.link}
                                                                className="text-text dark:text-drka hover:underline"
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                            >
                                                                {item.name}
                                                            </a>
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        ) : (
                                            <p>{section.content}</p>
                                        )}
                                </motion.div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    const Counter = ({ value }) => {
        const [count, setCount] = useState(0);
      
        useEffect(() => {
          let start = 0;
          const duration = 2000; // 2 seconds
          const increment = Math.ceil(value / (duration / 50));
      
          const counter = setInterval(() => {
            start += increment;
            if (start >= value) {
              setCount(value);
              clearInterval(counter);
            } else {
              setCount(start);
            }
          }, 50);
      
          return () => clearInterval(counter);
        }, [value]);
      
        return <span className="text-3xl font-semibold">{count.toLocaleString()}</span>;
      };
      
    
    const LIBbookdetails = () => {
        const stats = [
            { label: "Number of Books", value: 111494, icon: "📘" },
            { label: "Text Books", value: 98896, icon: "📖" },
            { label: "Reference Books", value: 12598, icon: "🔍" },
            { label: "World Bank Repository Book", value: 253, icon: "🌍" },
            { label: "Current Periodicals", value: 124, icon: "👥" },
            { label: "Book Bank", value: 1571, icon: "🏛" }
          ];
        
          return (

            <>
                {stats ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-6 bg-prim dark:bg-drkp rounded-lg shadow-lg">
                    {stats?.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center bg-prim dark:bg-text p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
                        <span className="text-5xl">{stat.icon}</span>
                        <Counter value={stat.value} />
                        <p className="text-text dark:text-drkt text-lg mt-2">{stat.label}</p>
                        </div>
                    ))}
                    </div>
                ) : (
                    <div className={"h-screen flex items-center justify-center md:mt-[15%] md:block"}>
                        <LoadComp />
                    </div>
                )}
            </>
          );
    }

    const LIBjournalsdetails = () => {
        const stats = [
          { label: "Total Journals", value: 5423, icon: "📚" },
          { label: "National Journals", value: 2145, icon: "🇮🇳" },
          { label: "International Journals", value: 3278, icon: "🌎" },
          { label: "E-Journals", value: 456, icon: "💻" },
          { label: "Subscribed Journals", value: 789, icon: "📜" },
          { label: "Archived Journals", value: 1123, icon: "📂" }
        ];
      
        return (

            <>
                {stats ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-6 bg-prim dark:bg-drkp rounded-lg shadow-lg">
                        {stats?.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center bg-prim dark:bg-text p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
                            <span className="text-5xl">{stat.icon}</span>
                            <Counter value={stat.value} />
                            <p className="text-text dark:text-prim text-lg mt-2">{stat.label}</p>
                        </div>
                        ))}
                    </div>
                ) : (
                    <div className={"h-screen flex items-center justify-center md:mt-[15%] md:block"}>
                        <LoadComp />
                    </div>
                )}
            </>
        );
      };

      const LIBnewspaperdetails = () => {
        const stats = [
          { label: "Total Newspapers", value: 325, icon: "📰" },
          { label: "Daily Newspapers", value: 120, icon: "📆" },
          { label: "Weekly Newspapers", value: 85, icon: "📅" },
          { label: "Monthly Newspapers", value: 60, icon: "🗞" },
          { label: "Archived Newspapers", value: 45, icon: "📂" },
          { label: "Digital Newspapers", value: 15, icon: "💻" }
        ];
      
        return (
            <>
                {stats ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-6 bg-prim dark:bg-drkp rounded-lg shadow-lg">
                        {stats?.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center bg-prim dark:bg-text p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
                            <span className="text-5xl">{stat.icon}</span>
                            <Counter value={stat.value} />
                            <p className="text-text dark:text-prim text-lg mt-2">{stat.label}</p>
                        </div>
                        ))}
                    </div>
                ) : (
                    <div className={"h-screen flex items-center justify-center md:mt-[15%] md:block"}>
                        <LoadComp />
                    </div>
                )}
            </>
        );
      };

    const [openSection, setOpenSection] = useState(null);
    const navData = {
        "Collection": {
            "Books": <LIBbookdetails />,
            "Journals": <LIBjournalsdetails />,
            "Newspapers": <LIBnewspaperdetails />
        },
        "HOD's message": <LIBHod/>,
        "Staff": <LIBFacl/>,
        "Services": <LIBHigh/>,
        "Advisory committee members": <LIBInstr/>,
        "Membership Details": <LIBMemb/>,
        "Downloads": <LIBFea/>,
        "Library Resources": <LIBResc/>,
        "OPAC": <LIBMult/>,
        "Digital Library & E-Resources": <LIBArvl/>
    }

    const toggleSection = (index) => {
        setOpenSection(openSection === index ? null : index);
    };

    return (
        <>
            <div className="min-h-screen p-3 md:p-6 lg:p-10 space-y-8 md:space-y-12 lg:space-y-16">
                {(Array.isArray(lib)) ? navData[lib[0]][lib[1]] : navData[lib]}
            </div>
        </>
    );
};

export default LibrarySections;
