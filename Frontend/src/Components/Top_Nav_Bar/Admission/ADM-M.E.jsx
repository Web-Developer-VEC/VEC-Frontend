import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ADM-M.E.css";
import Banner from "../../Banner";

const ME = ({theme, toggle}) => {

  const [pgData, setpgData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const pg = pgData?.PG || [];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/pg`);
        setpgData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error.message);
        setLoading(true); // Ensure loading ends even on error
      }
    };
    fetchData();
  }, []);

  return (
    <>
<Banner toggle={toggle} theme={theme}
  backgroundImage="https://png.pngtree.com/thumb_back/fh260/background/20220620/pngtree-mountainous-road-with-the-word-mission-inscribed-vision-visionary-way-photo-image_31857844.jpg"
  headerText="ME Admission"
  subHeaderText="Shaping future engineers through advanced learning, research, and transformative opportunities."
/>


    <div className="me-page">
    {isLoading && (
          <div className="loading-screen">
            <div className="spinner"></div>
            Loading...
          </div>
        )}
      <div className="ME">
        <h3 className="text-accn dark:text-drka font-bold">M.E. Degree Programme</h3>

      </div>
      <div className="me-contents bg-[color-mix(in_srgb,theme(colors.prim)_90%,black)]
                dark:bg-[color-mix(in_srgb,theme(colors.drkp)_95%,white)]">
        <h3 className="text-accn dark:text-drka Eligibility text-center">
          Candidates seeking admission to the first semester of the four-semester M.E. Degree Programme:
        </h3>
        <p className="description-text">
          Candidates for admission to the first semester of the Post-Graduate Degree Programme shall be
          required to have passed an appropriate Under-Graduate Degree Examination of Anna University or
          equivalent as specified under qualification for admission as per the Tamil Nadu Common Admission
          (TANCA) criteria.
        </p>
        <br></br>
        <p className="description-text">
          <strong>Note:</strong> TANCA releases the updated criteria during the admissions every academic
          year. Admission shall be offered only to the candidates who possess the qualification prescribed
          against each programme.
        </p>
        <br></br>
        <p className="description-text">
          Any other relevant qualification which is not prescribed against each programme shall be considered
          for equivalence by the committee constituted for the purpose. Admission to such degrees shall be
          offered only after obtaining equivalence to such degrees.
        </p>
        <div className="me-container">
          <center><h4 className="text-accn dark:text-drka Eligibility mt-5 font-thin">M.E - Total Intake {pgData.Year}</h4></center>
          <table className="intake-table">
            <thead>
              <tr>
                <th className="ugHeader">PG Courses</th>
                <th className="ugHeader">Government Quota Intake</th>
                <th className="ugHeader">Management Quota Intake</th>
                <th className="ugHeader">Total Intake</th>
              </tr>
            </thead>
            <tbody>
            {pg.map((item, rowIndex) => {
              const [courseName, courseDetails] = Object.entries(item)[0];
              return (
                <tr key={rowIndex} className="bg-prim dark:bg-drkp">
                  <td className="text-start">{courseName}</td>
                  <td className="font-light">{courseDetails["Government Quota Intakes"]}</td>
                  <td className="font-light">{courseDetails["Management Quota Intakes"]}</td>
                  <td className="font-light">{courseDetails["Total Intakes"]}</td>
                </tr>
              );
            })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>
  );
};

export default ME;
