import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faDownload, faTimes } from "@fortawesome/free-solid-svg-icons";
import './CurriculumPage.css';

const CurriculumPage = ({ data }) => {
  const [activePO, setActivePO] = useState(null); // Track which PO is active (open)
  const [activePOS, setActivePOS] = useState(null);
  const [selectedRegulation, setSelectedRegulation] = useState(null);
  

  const togglePO = (id) => {
    setActivePO((prev) => (prev === id ? null : id)); // Toggle the active PO
  };
  const togglePOS = (id) => {
    setActivePOS((prev) => (prev === id ? null : id)); // Toggle the active PO
  };

  const handleViewClick = (regulation,year) => {
    setSelectedRegulation([regulation,year]);
  };

  const closeModal = () => {
    setSelectedRegulation(null);
  };


  return (
    <div className="containers mt-5">
      <div className="row">
        {/* Left Column: Curriculum and PSOs */}
        <div className="col-md-6">
          <div className="content-section bg-prim dark:bg-[color-mix(in_srgb,theme(colors.drkp)_95%,white)]">
            <h2 className="text-start">Curriculum & Syllabus</h2>

            {/* Regulation Rows */}
            {data?.regulation?.year?.map((year, index) => (
              <div className="row-item rounded-lg dark:bg-drkp border-0 dark:hover:bg-drks" key={year}>
                <p>
                  Regulation {year}
                  <div className="options-container">
                    <button 
                    className="options-btn text-text bg-secd dark:text-drkt dark:bg-drks hover:bg-accn hover:text-prim
                      dark:hover:bg-drka"
                    onClick={() => handleViewClick(data.regulation.pdf_path[index],year)}
                    >
                      <FontAwesomeIcon icon={faEye} style={{ marginRight: "5px" }} />

                      View
                    
                    </button>
                  </div>
                </p>
              </div>
            ))}
          </div>

          {/* Program Specific Outcomes (PSOs) */}
          <div className="psos-section mt-5">
            <h2>Program Specific Outcomes</h2>
            <div className="accordion" id="psosAccordion">
              {data?.program_specific_outcomes?.headings?.map((heading, index) => (
                <div className="accordion-item-cir bg-prim dark:bg-[color-mix(in_srgb,theme(colors.drkp)_95%,white)]" key={index}>
                  <h2 className="accordion-header" id={`psosHeading${index}`}>
                    <button className="accordion-buttons" onClick={() => togglePOS(index)}>
                      {heading}
                    </button>
                  </h2>
                  <div className={`accordion-body ${activePOS === index ? 'show' : ''}`}>
                    {data.program_specific_outcomes.content[index]}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Program Outcomes */}
        <div className="col-md-6">
          <div className="pos-section">
            <h2>Program Outcomes</h2>
            <div className="accordion">
              {data?.program_outcomes?.headings?.map((heading, index) => (
                <div className="accordion-item-cir bg-prim dark:bg-[color-mix(in_srgb,theme(colors.drkp)_95%,white)]" key={index}>
                  <h2 className="accordion-header">
                    <button className="accordion-buttons" onClick={() => togglePO(index)}>
                      {heading}
                    </button>
                  </h2>
                  <div className={`accordion-body ${activePO === index ? 'show' : ''}`}>
                    {data.program_outcomes.content[index]}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {selectedRegulation && (
        <div className="REG-modal">
          <div className="REG-modal-content bg-prim dark:bg-drkp">
            <button className="REG-close-button bg-secd text-text dark:bg-drks dark:text-drkt hover:bg-accn hover:dark:bg-drka"
                    onClick={closeModal}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <h2 className="mb-4">Curriculum & Syllabus {selectedRegulation[1]}</h2>
            <iframe
              src={selectedRegulation[0]}
              title={selectedRegulation[1]}
              className="REG-iframe"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default CurriculumPage;
