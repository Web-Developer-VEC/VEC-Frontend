import React, { useEffect, useState } from "react";
import "./NCC_ARMY.css"; 
import NCCACarousel from "./NCC_ARMY comps/NCCACarousel";
import NCCAtable from "./NCC_ARMY comps/NCCAtable";
import axios from "axios";

const NCC_ARMY = () => { 
  const [tabel,setTabelValue] = useState({});
  const [curosel, setCarosel] = useState({});
  const  [ Coordinator, setCoordinator] = useState({});

  useEffect(()=>{
    const fetchData = async ()=>{
      try {
        const responce = await axios.get('/api/ncc_army');
        const data = responce.data[0];

        setTabelValue(data.Table);
        setCarosel(data.image);
        setCoordinator(data.Coordinator)

      } catch (error) {
        console.error("Error fetching data",error);  
      }
    }
    fetchData()
  },[]);
  
  return (
    <>
      <NCCACarousel data={curosel}/>
      {/* Main NCC_ARMY Container */}
      <div className="NCC_ARMY-container">
        <div className="NCC_ARMY-content-wrapper">
          {/* About NCC_ARMY Section */}
          <section
            className="NCC_ARMY-section bg-[color-mix(in_srgb,theme(colors.prim)_90%,black)]
                dark:bg-[color-mix(in_srgb,theme(colors.drkp)_95%,white)]
                border-l-8 border-r-8 border-[#FDB515] px-6"
          >
            <h2
              className="NCC_ARMY-section-title text-accn dark:text-drka
            border-b-2 border-secd dark:border-drks"
            >
              About NCC
            </h2>
            <ul className="NCC_ARMY-list">
              <li>
                National Cadet Corps is a Tri-Services Organization, comprising
                the Army, Navy, and Air Force, engaged in grooming the youth of
                the country into disciplined and patriotic citizens.
              </li>
              <li>
                The National Cadet Corps (NCC) is a youth development movement.
                It has enormous potential for nation-building.
              </li>
              <li>
                The NCC provides opportunities to the youth of the country for
                their all-round development with a sense of Duty, Commitment,
                Dedication, Discipline, and Moral Values so that they become
                able leaders and useful citizens.
              </li>
              <li>
                The NCC provides exposure to the cadets in a wide range of
                activities, with a distinct emphasis on Social Services,
                Discipline, and Adventure Training.
              </li>
              <li>
                The NCC is open to all regular students of schools and colleges
                on a voluntary basis all over India.
              </li>
              <li>
                The cadets have no liability for active military service once
                they complete their course but are given preference over normal
                candidates during selections based on the achievements in the
                corps.
              </li>
            </ul>
          </section>

          {/* Vision and Mission Section */}
          <div className="NCC_ARMY-row mt-4">
            <section
              className="NCC_ARMY-section bg-[color-mix(in_srgb,theme(colors.prim)_90%,black)]
                dark:bg-[color-mix(in_srgb,theme(colors.drkp)_95%,white)] border-l-8 border-[#FDB515] px-6"
            >
              <h2
                className="NCC_ARMY-section-title text-accn dark:text-drka
              border-b-2 border-secd dark:border-drks"
              >
                Vision
              </h2>
              <p className="NCC_ARMY-content">
                Empower volunteer youth to become potential leaders and
                responsible citizens of the country.
              </p>
            </section>

            <section
              className="NCC_ARMY-section bg-[color-mix(in_srgb,theme(colors.prim)_90%,black)]
                dark:bg-[color-mix(in_srgb,theme(colors.drkp)_95%,white)] border-l-8 border-[#FDB515] px-6"
            >
              <h2
                className="NCC_ARMY-section-title text-accn dark:text-drka
              border-b-2 border-secd dark:border-drks"
              >
                Mission
              </h2>
              <p className="NCC_ARMY-content">
                To develop leadership and character qualities, mold discipline
                and nurture social integration and cohesion through
                multi-faceted programs conducted in a military environment.
              </p>
            </section>
          </div>

          {/* Aim Section */}
          <div
            className="NCC_ARMY-aim-container bg-[color-mix(in_srgb,theme(colors.prim)_90%,black)]
                dark:bg-[color-mix(in_srgb,theme(colors.drkp)_95%,white)] border-l-8 border-[#FDB515] px-6"
          >
            <div className="NCC_ARMY-aim">
              <h2 className="NCC_ARMY-heading text-accn dark:text-drka border-b-2 border-secd dark:border-drks">
                <img
                  src="./ncc_logo.png"
                  alt="NCC Logo"
                  className="NCC_ARMY-icon"
                />
                AIM of NCC
              </h2>
              <p className="NCC_ARMY-aimcontent">
                * TO DEVELOP CHARACTER, COMRADESHIP, DISCIPLINE, LEADERSHIP,
                SECULAR OUTLOOK, SPIRIT OF ADVENTURE, AND THE IDEALS OF SELFLESS
                SERVICES AMONGST YOUTH OF THE COUNTRY.
                <br />
                * TO CREATE A HUMAN RESOURCE OF ORGANISED, TRAINED AND MOTIVATED
                YOUTH, TO PROVIDE LEADERSHIP IN ALL WALKS OF LIFE AND BE ALWAYS
                AVAILABLE FOR THE SERVICE OF THE NATION.
                <br />
                * TO PROVIDE A SUITABLE ENVIRONMENT TO MOTIVATE THE YOUTH TO
                TAKE UP CAREER IN THE ARMED FORCES.
                <br />
              </p>
            </div>
          </div>

          {/* Motto & Pledge Section */}
          <div className="NCC_ARMY-motto-pledge-container">
            <div
              className="NCC_ARMY-motto bg-[color-mix(in_srgb,theme(colors.prim)_90%,black)]
                dark:bg-[color-mix(in_srgb,theme(colors.drkp)_95%,white)] border-l-8 border-[#FDB515] px-6"
            >
              <h2 className="NCC_ARMY-heading text-accn dark:text-drka border-b-2 border-secd dark:border-drks">
                MOTTO OF NCC
              </h2>
              <p className="NCC_ARMY-content">
                The motto of NCC is “Unity and Discipline,” adopted on 23rd Dec
                1957. It brings together the youth from different parts of the
                country, molding them into united, secular, and disciplined
                citizens.
              </p>
            </div>

            <div
              className="NCC_ARMY-pledge bg-[color-mix(in_srgb,theme(colors.prim)_90%,black)]
                dark:bg-[color-mix(in_srgb,theme(colors.drkp)_95%,white)] border-l-8 border-[#FDB515] px-6"
            >
              <h2 className="NCC_ARMY-heading text-accn dark:text-drka border-b-2 border-secd dark:border-drks">
                CARDINALS OF NCC
              </h2>
              <p className="NCC_ARMY-content">
                * Obey with a smile
                <br />
                * BE punctual
                <br />
                * Work hard and without fuss
                <br />* Make no excuses and tell no lies
              </p>
            </div>
          </div>

          {/* Profile Section */}
          <div
            className="NCC_ARMY-profile-container bg-[color-mix(in_srgb,theme(colors.prim)_90%,black)]
                dark:bg-[color-mix(in_srgb,theme(colors.drkp)_95%,white)] border-l-8 border-r-8 border-[#FDB515] px-6"
          >
            <div className="NCC_ARMY-profile-photo">
              <img src={Coordinator?.coordinator_image} alt={Coordinator?.coordinator_name} />
            </div>
            <div className="NCC_ARMY-profile-content">
              <h2 className="NCC_ARMY-profile-name ">{Coordinator?.coordinator_name}</h2>
              <h4 className="NCC_ARMY-profile-position text-accn dark:text-drka">
                {Coordinator?.coordinator_designation}
              </h4>
              <p className="NCC_ARMY-profile-bio">
                {Coordinator?.coordinator_description}
              </p>
            </div>
          </div>
        </div>
        <NCCAtable data={tabel}/>
      </div>
    </>
  );
};

export default NCC_ARMY;
