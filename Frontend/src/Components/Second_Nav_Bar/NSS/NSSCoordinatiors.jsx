import React from "react";
import "./NSSCoordinators.css"; // Import the CSS file

// Dummy data for development
const dummyCoordinators = {
  staffCoordinator: {
    name:" Dr. R.Karthik ",
    role: "Program Officer",
    photo: "https://nssvec.vercel.app/img/KarthikSir.jpg",
    facebook: "#",
    instagram: "#",
    linkedin: "#",
  },
  studentCoordinators: [
    {
      name: "Kaviya Shree",
      role: "GCO& MECH & AUTO coordinator",
      photo: "https://nssvec.vercel.app/img/kaviya.jpg",
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
    {
      name: " Laith Kannan",
      role: "VCO & CSE coordinator",
      photo: "https://nssvec.vercel.app/img/lalith.jpg",
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
    {
      name: "Vinoth Kumar",
      role: "ECE coordinator",
      photo: "https://nssvec.vercel.app/img/vinoth.jpg",
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
    {
      name: "Dayanitha",
      role: "IT coordinator",
      photo: "https://nssvec.vercel.app/img/daya.jpg",
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
    {
      name: "Sanjay Kumar",
      role: "Civil,Cyber,EIE department coordinator",
      photo: "https://nssvec.vercel.app/img/sanjai.jpg",
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
    {
      name: "Subhashini",
      role: "EEE coordinator",
      photo: "https://nssvec.vercel.app/img/subashini.jpg",
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
    {
      name: "Rahul Kumaran",
      role: "AI& DS coordinator",
      photo: "https://nssvec.vercel.app/img/rahul.jpg",
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
    {
      name: "Sharavanth Kumar",
      role: "Poster Team Head",
      photo: "https://nssvec.vercel.app/img/shravanth.jpg",
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
    {
      name: "SWEDHA",
      role: "Newsletter Team Head",
      photo: "https://nssvec.vercel.app/img/swetha.jpg",
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
    {
      name: "Mukesh",
      role: "Technical Team Head",
      photo: "https://nssvec.vercel.app/img/mukeshnss.jpg",
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
    {
      name: "Monova Daniel",
      role: "Website & Camera Handling Team Head",
      photo: "https://nssvec.vercel.app/img/mano.jpg",
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  ],
};

const Coordinators = ({faculty, students}) => {
  return (
    <div className="NSS-coordinators-section">
      <h2 className="NSS-section-heading">COORDINATORS</h2>

      {/* Staff Coordinator (Centered) */}
      <h3 className="NSS-subheading">Staff Coordinator</h3>
      <div className="NSS-staff-container">
        <div className="NSS-id-card">
          <img
            src={faculty?.image_path}
            alt="Staff Coordinator"
            className="NSS-profile-pic"
          />
          <h4 className="NSS-name">{faculty?.name}</h4>
          <p className="NSS-role">{faculty?.designation}</p>
          
        </div>
      </div>

      {/* Student Coordinators */}
      <h3 className="NSS-subheading">Student Coordinators</h3>
      <div className="NSS-student-coordinators">
        {students?.name?.map((name, index) => (
          <div key={index} className="NSS-id-card">
            <img src={students?.image_path[index]} alt={name} className="NSS-profile-pic" />
            <h4 className="NSS-name">{name}</h4>
            <p className="NSS-role">{students?.designation[index]}</p>
            <div className="NSS-social-icons">
              <a href={"#"} className="NSS-social-link">
                <i className="fab fa-facebook"></i>
              </a>
              <a href={"#"} className="NSS-social-link">
                <i className="fab fa-instagram"></i>
              </a>
              <a href={"#"} className="NSS-social-link">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Coordinators;
