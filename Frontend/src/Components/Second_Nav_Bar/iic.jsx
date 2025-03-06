import { TfiControlBackward, TfiControlForward, TfiControlPause, TfiControlPlay } from "react-icons/tfi";
import { useEffect, useState, useRef } from "react"
import axios from "axios"
import "./iic.css"
import Banner from "../Banner"
import facilityImage1 from "../Assets/iic-facility-1.png"
import facilityImage2 from "../Assets/iic-facility-2.png"
import facilityImage3 from "../Assets/iic-facility-3.png"
import facilityImage4 from "../Assets/iic-facility-4.png"
import facilityImage5 from "../Assets/iic-facility-5.png"
import facilityImage6 from "../Assets/iic-facility-6.png"

const Iic = ({toggle, theme}) => {
  const leftCardsRef = useRef([])
  const rightCardsRef = useRef([])
  const [isPlaying, setIsPlaying] = useState(true)
  const intervalRef = useRef(null)

  const leftPerspectives = [
    { x: -6, z: -4 },
    { x: -12, z: -8 },
    { x: -18, z: -12 },
    { x: -24, z: -16 },
    { x: -30, z: -20 },
    { x: 6, z: -4 },
  ]

  const rightPerspectives = [
    { x: 6, z: -4 },
    { x: 12, z: -8 },
    { x: 18, z: -12 },
    { x: 24, z: -16 },
    { x: 30, z: -20 },
    { x: -6, z: -4 },
  ]

  const translateImage = (target, p) => {
    if (target) {
      target.style.transform = `translate3d(${p.x}rem, 0, ${p.z}rem)`
    }
  }

  const animateCards = (element, perspectives) => {
    if (element) {
      const count = Number.parseInt(element.dataset.counter, 10)
      const newCount = count === 6 ? 1 : count + 1
  
      // Ensure newCount is within valid index range
      if (newCount - 1 < 0 || newCount - 1 >= perspectives.length) {
        console.error("Index out of bounds:", newCount - 1)
        return
      }
  
      translateImage(element, perspectives[newCount - 1])
      element.dataset.counter = newCount.toString()
    }
  }  

  const loop = () => {
    return setInterval(() => {
      leftCardsRef.current.forEach((card) => {
        animateCards(card, leftPerspectives)
      })
      rightCardsRef.current.forEach((card) => {
        animateCards(card, rightPerspectives)
      })
    }, 2000)
  }

  const initializeCards = () => {
    leftCardsRef.current.forEach((card, index) => {
      translateImage(card, leftPerspectives[index])
      card.dataset.counter = (index + 1).toString()
    })
    rightCardsRef.current.forEach((card, index) => {
      translateImage(card, rightPerspectives[index])
      card.dataset.counter = (index + 1).toString()
    })
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
    if (isPlaying) {
      clearInterval(intervalRef.current)
    } else {
      intervalRef.current = loop()
    }
  }

  const [isAnimating, setIsAnimating] = useState(false);

const moveNext = () => {
  if (isAnimating) return; // Prevent multiple clicks during animation
  setIsAnimating(true); 

  clearInterval(intervalRef.current);

  leftCardsRef.current.forEach((card) => {
    animateCards(card, leftPerspectives);
  });

  rightCardsRef.current.forEach((card) => {
    animateCards(card, rightPerspectives);
  });

  setTimeout(() => {
    intervalRef.current = loop();
    setIsAnimating(false);
  }, 500); // Delay must match the CSS transition time
};

const movePrev = () => {
  if (isAnimating) return;
  setIsAnimating(true);

  clearInterval(intervalRef.current);

  leftCardsRef.current.forEach((card) => {
    if (!card) return;

    const count = Number.parseInt(card.dataset.counter, 10);
    let newCount = count === 1 ? 6 : count - 1;

    translateImage(card, leftPerspectives[newCount - 1]);
    card.dataset.counter = newCount.toString();
  });

  rightCardsRef.current.forEach((card) => {
    if (!card) return;

    const count = Number.parseInt(card.dataset.counter, 10);
    let newCount = count === 1 ? 6 : count - 1;

    translateImage(card, rightPerspectives[newCount - 1]);
    card.dataset.counter = newCount.toString();
  });

  setTimeout(() => {
    intervalRef.current = loop();
    setIsAnimating(false);
  }, 500);
};
  
  useEffect(() => {
    initializeCards()
    intervalRef.current = loop()
    return () => clearInterval(intervalRef.current)
  }, []) // Removed dependencies as they're not needed

  const [selectedYear, setSelectedYear] = useState("Certificate")
  const [selectedAction, setSelectedAction] = useState(null)
  const [iicData, setIicData] = useState(null)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/iic`)
        setIicData(response.data)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching data:", error.message)
        setLoading(true)
      }
    }
    fetchData()
  }, []);

  // Update the image gallery
  const imageLeft = iicData?.imagepath?.slice(0, 6) || []
  const imageRight = iicData?.imagepath?.slice(6, 12) || []

  // Update certificate, events, and policy arrays
  const certificateArray =
    iicData?.certificate?.year?.map((year, index) => ({
      year,
      path: iicData.certificate.pdfpath[index],
    })) || []

  const eventsOrganizedArray =
    iicData?.events?.year?.map((year, index) => ({
      year,
      path: iicData.events.pdfpath[index],
    })) || []

  const policyArray =
    iicData?.policy?.name?.map((name, index) => ({
      year: name,
      path: iicData.policy.pdfpath[index],
    })) || []

  // Update members array
  const membersArray =
    iicData?.members?.faculty?.map((member) => ({
      name: member.name,
      image: member.imagepath,
      designation: member.designation,
      keyRole: member.role,
    })) || []

  // Update NIR sections
  const nirSectionsArray = [
    {
      heading: "Registration Statistics",
      buttons:
        iicData?.NIR?.["Registration Statistics"]?.name?.map((name, index) => ({
          text: `${name}: ${iicData.NIR["Registration Statistics"].count[index]}`,
          path: `/pdfs/${name.replace(/\s+/g, "-")}.pdf`,
        })) || [],
    },
    {
      heading: "Innovation Metrics",
      buttons:
        iicData?.NIR?.["Innovation Metrics"]?.name?.map((name, index) => ({
          text: `${name}: ${iicData.NIR["Innovation Metrics"].count[index]}`,
          path: `/pdfs/${name.replace(/\s+/g, "-")}.pdf`,
        })) || [],
    },
    {
      heading: "Impact Assessment",
      buttons:
        iicData?.NIR?.["Impact Assessment"]?.name?.map((name, index) => ({
          text: `${name}: ${iicData.NIR["Impact Assessment"].count[index]}`,
          path: `/pdfs/${name.replace(/\s+/g, "-")}.pdf`,
        })) || [],
    },
  ]

  // Update other stuffs array
  const otherStuffsArray =
    iicData?.otherstuffs?.name?.map((name, index) => ({
      year: name,
      path: iicData.otherstuffs.path[index],
    })) || []

  const openPdf = (category, year) => {
    setSelectedAction({ category, year })
  }

  const handleYearClick = (year) => {
    setSelectedYear(year)
    setSelectedAction(null)
  }

  const renderNIRContent = () => {
    return (
      <div className="nir-container">
        <h2>National Innovation Repository (NIR)</h2>
        {nirSectionsArray.map((section, index) => (
          <div key={index} className="nir-section">
            <h3 className="nir-heading">{section.heading}</h3>
            <div className="nir-buttons">
              {section.buttons.map((button, btnIndex) => (
                <div key={btnIndex} className="iic-action-button bg-secd dark:bg-drks hover:bg-accn hover:text-prim
                  dark:hover:bg-drka rounded-xl border-2 border-accn dark:border-drka">
                  {button.text}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="nirf-page">
      <Banner toggle={toggle} theme={theme}
        backgroundImage="https://png.pngtree.com/thumb_back/fh260/background/20220620/pngtree-mountainous-road-with-the-word-mission-inscribed-vision-visionary-way-photo-image_31857844.jpg"
        headerText="IIC"
        subHeaderText="Instituition's Innovation Council"
      />

        {isLoading && (
          <div className="loading-screen">
            <div className="spinner"></div>
            Loading...
          </div>
        )}

      <div className="about-section">
        <div className="naac-info-panel border-l-4 border-secd dark:border-drks">
          <h2 className="text-[30px]">About IIC</h2>
          <p>
            The Ministry of Education (MoE), Govt. of India has established 'MoE's Innovation Cell (MIC)' to
            systematically foster the culture of Innovation amongst all Higher Education Institutions (HEIs). The
            primary mandate of MIC is to encourage, inspire and nurture young students by supporting them to work with
            new ideas and transform them into prototypes while they are in their formative years.
            <br />
            MIC has envisioned encouraging creation of 'Institution's Innovation Council (IICs)' across selected HEIs. A
            network of these IICs will be established to promote innovation in the Institutions through multitudinous
            modes leading to an innovation promotion eco-system in the campuses.
          </p>
        </div>

        <div className="naac-info-panel border-l-4 border-secd dark:border-drks">
          <h2 className="text-[30px]">Major Focus of IIC</h2>
          <p>
            <br />• To create a vibrant local innovation ecosystem, Start-up supporting Mechanism in HEIs, IIC should
            prepare the institution for ATAL Ranking of Institutions on Innovation Achievements Framework.
            <br />• To establish a Function Ecosystem for Scouting Ideas and Pre-incubation of Ideas.
            <br />• To develop better Cognitive Ability for Technology Students.
            <br />
          </p>
        </div>

        <div className="iqac-info-panel border-l-4 border-secd dark:border-drks">
          <h2 className="text-[30px]">Vision</h2>
          <p>
            To facilitate a conducive environment with the intention of making an innovation to reach the society or
            industries for the betterment of our country and its citizen through entrepreneurial assets.
          </p>
        </div>

        <div className="iqac-info-panel border-l-4 border-secd dark:border-drks">
          <h2 className="text-[30px]">Mission</h2>
          <p>
            To enable student and faculty to establish a start-up to market their innovative products; an enhanced
            coordination and priority setting across the start-up eco-system; an improved customizable strategy and
            planning for pursuing productivity growth and better operational efficiencies and value for the start-up
            companies.
          </p>
        </div>
      </div>

      <div className="mb-10">
        <div className="card-plc functions-info-panel border-l-4 border-secd dark:border-drks">
          <h2 className="text-[30px]">Functions of IIC</h2>
          <p>
            <br />• To conduct various innovation and entrepreneurship-related activities prescribed by Central MIC in a
            time-bound manner.
            <br />• To identify and reward innovations and share success stories.
            <br />• To organize periodic workshops/ seminars/ interactions with entrepreneurs, investors, professionals
            and create a mentor pool for student innovators.
            <br />• Networking with peers and national entrepreneurship development organizations.
            <br />• To create an Institution's Innovation portal to highlight innovative projects carried out by
            institution's faculty and students.
            <br />• To organize Hackathons, idea competitions, mini-challenges etc. with the involvement of industries.
            <br />
          </p>
        </div>
      </div>

      <div
        className="fuck md:card"
        onMouseEnter={() => clearInterval(intervalRef.current)} // Stop auto-scroll on hover
        onMouseLeave={() => { 
          if (isPlaying) intervalRef.current = loop(); // Resume auto-scroll only if playing
        }}
      >
        <h3 className="iic-faici">Facilities And Infrastructure</h3>
        <div className="gallery">
          <div className="left iic-left">
            <div className="inner">
              {imageLeft?.map((src, index) => (
                <img
                  key={src}
                  ref={(el) => (leftCardsRef.current[index] = el)}
                  className="item"
                  src={src || "/placeholder.svg"}
                  data-counter={(index + 1).toString()}
                  alt={`Left card ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="right iic-right">
            <div className="inner">
              {imageRight?.map((src, index) => (
                <img
                  key={src}
                  ref={(el) => (rightCardsRef.current[index] = el)}
                  className="item"
                  src={src || "/placeholder.svg"}
                  data-counter={(index + 1).toString()}
                  alt={`Right card ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
        
        <div className="carousel-controls">
          <button 
            className={`carousel-button bg-secd dark:bg-drks hover:bg-accn hover:text-prim dark:hover:bg-drka`}
            onClick={movePrev}
          >
            <TfiControlBackward />
          </button>
          {/* <button 
            className={`carousel-button bg-secd dark:bg-drks hover:bg-accn hover:text-prim dark:hover:bg-drka ${isPlaying ? 'active' : ''}`}
            onClick={togglePlayPause}
          >
            {isPlaying ? <TfiControlPause /> : <TfiControlPlay />}
          </button> */}
          <button 
            className={`carousel-button bg-secd dark:bg-drks hover:bg-accn hover:text-prim dark:hover:bg-drka`}
            onClick={moveNext}
          >
            <TfiControlForward />
          </button>
        </div>
      </div>


      <div className="nirf-content">
        <div className="nirf-years">
          {["Certificate", "Events Organized", "Policy", "Members", "NIR", "Other Stuffs"].map((category) => (
            <button
              key={category}
              className={`nirf-year-button ${selectedYear === category ? "active bg-accn dark:bg-drka text-prim" 
                  : "bg-secd dark:bg-drks text-[2px]"}`}
              onClick={() => handleYearClick(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className={`nirf-details dark:bg-[color-mix(in_srgb,theme(colors.drkp)_95%,white)] 
          height ${selectedYear === "Members" ? "members-section" : ""}`}>
          {selectedYear === "NIR" ? (
            renderNIRContent()
          ) : (
            <div className="nirf-year-actions faculty-icc">
              {selectedYear === "Certificate" &&
                certificateArray.map((action, index) => (
                  <div key={index} className=" text-[10px] nirf-action-button bg-secd dark:bg-drks hover:bg-accn hover:text-prim
                    dark:hover:bg-drka" onClick={() => openPdf("Certificate", action.year)}>
                    {action.year}
                  </div>
                ))}
              {selectedYear === "Events Organized" &&
                eventsOrganizedArray.map((action, index) => (
                  <div
                    key={index}
                    className="nirf-action-button bg-secd dark:bg-drks hover:bg-accn hover:text-prim dark:hover:bg-drka"
                    onClick={() => openPdf("Events Organized", action.year)}
                  >
                    {action.year}
                  </div>
                ))}
              {selectedYear === "Policy" &&
                policyArray.map((action, index) => (
                  <div key={index} className="nirf-action-button bg-secd dark:bg-drks hover:bg-accn hover:text-prim dark:hover:bg-drka" onClick={() => openPdf("Policy", action.year)}>
                    {action.year}
                  </div>
                ))}
              {selectedYear === "Members" && (
                <div className="members-grid">
                  {membersArray.map((member, index) => (
                    <div key={index} className="members dark:bg-drkp">
                      <img src={member.image || "/placeholder.svg"} alt={member.name} className="member-image" />
                      <p className="text-secd dark:text-drks">{member.name}</p>
                      <h6>{member.designation}</h6>
                      <p>{member.keyRole}</p>
                    </div>
                  ))}
                </div>
              )}
              {selectedYear === "Other Stuffs" &&
                otherStuffsArray.map((action, index) => (
                  <div key={index} className="nirf-action-button bg-secd dark:bg-drks hover:bg-accn hover:text-prim dark:hover:bg-drka" onClick={() => openPdf("Other Stuffs", action.year)}>
                    {action.year}
                  </div>
                ))}
            </div>
          )}

          {selectedAction && (
            <div className="nirf-pdf-container">
              <h3>{`Viewing: ${selectedAction.year}`}</h3>
              <embed
                className="embed"
                src={
                  selectedAction.category === "Certificate"
                    ? certificateArray.find((item) => item.year === selectedAction.year)?.path
                    : selectedAction.category === "Events Organized"
                      ? eventsOrganizedArray.find((item) => item.year === selectedAction.year)?.path
                      : selectedAction.category === "Policy"
                        ? policyArray.find((item) => item.year === selectedAction.year)?.path
                        : otherStuffsArray.find((item) => item.year === selectedAction.year)?.path
                }
                type="application/pdf"
                width="100%"
                height="600px"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Iic