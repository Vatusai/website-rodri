// import content
import { createElement, useState } from "react";
import { content } from "../Content";
// import modal package
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "28rem",
    width: "90%",
    background: "linear-gradient(135deg, #1A1A2E 0%, #16213E 100%)",
    border: "1px solid rgba(139, 92, 246, 0.3)",
    borderRadius: "20px",
    padding: "2rem",
    color: "#FFFFFF",
  },
  overlay: {
    padding: "2rem",
    backgroundColor: "rgba(15, 15, 35, 0.8)",
    backdropFilter: "blur(10px)",
  },
};
Modal.setAppElement("#root");

const Skills = () => {
  const { skills } = content;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectSkill, setSelectSkill] = useState(null);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <section className="section-pop-artist" id="skills">
      {/* Modal - Updated with pop artist styling */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
            <img 
              className="w-6 h-6 object-contain brightness-0 invert" 
              src={selectSkill?.logo} 
              alt={selectSkill?.name} 
            />
          </div>
          <h3 className="text-xl font-600 text-text_primary">{selectSkill?.name}</h3>
        </div>
        
        <div className="space-y-4 mb-8">
          <h4 className="text-lg font-500 text-accent mb-3">Professional Excellence Includes:</h4>
          <ul className="space-y-3 text-text_secondary">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
              <span>Volume control perfectly adapted to each moment and situation</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
              <span>Collaboration with high-level musicians for enhanced elegance</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-tertiary rounded-full mt-2 flex-shrink-0"></span>
              <span>Premium BOSE sound systems with wireless microphones included</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
              <span>Custom musical arrangements prepared for your special moments</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-pink rounded-full mt-2 flex-shrink-0"></span>
              <span>Written agreements ensuring every detail is perfectly planned</span>
            </li>
          </ul>
        </div>
        
        <div className="flex justify-end">
          <button onClick={closeModal} className="btn-pop-secondary">
            Close
          </button>
        </div>
      </Modal>

      {/* Main Content */}
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="glow-effect glow-effect-purple glass-text p-6 mb-4 inline-block">
            <div className="glow-mask"></div>
            <div className="glow-effect-content">
              <h2 className="section-title-pop text-white" data-aos="fade-down">
                {skills.title}
              </h2>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skills.skills_content.map((skill, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={200 + (i * 150)}
              className="card-pop-artist glass-card glow-effect glow-effect-orange group cursor-pointer"
              onClick={() => {
                setSelectSkill(skill);
                openModal();
              }}
            >
              <div className="glow-mask"></div>
              <div className="glow-effect-content">
                {/* Skill Icon */}
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-8 h-8 object-contain brightness-0 invert opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                  />
                </div>

                {/* Skill Info */}
                <div className="flex-1">
                  <h3 className="text-xl font-600 text-text_primary mb-2 group-hover:text-accent transition-colors duration-300">
                    {skill.name}
                  </h3>
                  <p className="text-text_secondary leading-relaxed mb-4">
                    {skill.para}
                  </p>

                  {/* More Info Indicator */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-accent font-500">Learn More</span>
                    <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-300">
                      {createElement(skills.icon, { className: "w-4 h-4" })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
