// import React from 'react'
// import './Skill.css'
// import { FaReact } from "react-icons/fa";
// import { GrJs } from "react-icons/gr";

// const Skill = () => {
//   return (
//     <>
//       <h1 style={{ textAlign: "center", fontSize: "40px", color: "gray", marginTop: "20px" }}>SKILL</h1>
//       <div className="main1">
//         <div className="skill">
//           <div className='skillAll'>
//             <div className="html"></div>
//             <div className="react">
//               <div className='react1'>

//                 <FaReact className='react1'/>
//               </div>
//             </div>
//             <div className="con">
//               <div className="con1">
//                 <h1>React</h1>
//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* <div className="skill">
//           <div className='skillAll'>
//             <div className="html"></div>
//             <div className="react">
//               <div className='react2'>
//                 <GrJs className='react2'/>
//               </div>
//             </div>

//           </div>

//         </div>
//         <div className="skill">
//           <div className='skillAll'>
//             <div className="html"></div>
//             <div className="react">
//               <div className='react3'>
//                 <FaReact className='react4' />
//               </div>
//             </div>

//           </div>

//         </div>
//         <div className="skill">
//           <div className='skillAll'>
//             <div className="html"></div>
//             <div className="react">
//               <div className='react1'>
//                 <FaReact className='react2' />
//               </div>
//             </div>
//           </div>
//         </div> */}

//       </div>
//     </>
//   )
// }

// export default Skill



import React from 'react';
import './Skill.css';
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';
import { RiTailwindCssFill } from "react-icons/ri";
import { SiRedux } from 'react-icons/si';
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const skills = [


  {
    name: 'HTML5',
    description: 'The standard markup language for creating web pages.',
    icon: <FaHtml5 className="skill-icon html-icon" />,
  },
  {
    name: 'CSS3',
    description: 'A style sheet language used for describing the presentation of a document.',
    icon: <FaCss3Alt className="skill-icon css-icon" />,
  },
  {
    name: "Tailwind",
    description: "A utility-first CSS framework for rapidly building custom designs.",
    icon: <RiTailwindCssFill className="skill-icon react-icon" />
  },
  {
    name: 'JavaScript +(ES6)',
    description: 'A versatile programming language for web development.',
    icon: <FaJsSquare className="skill-icon js-icon" />,
  },
  {
    name: 'React',
    description: 'A JavaScript library for building user interfaces.',
    icon: <FaReact className="skill-icon react-icon" />,
  },
  {
    name: "Redux",
    description: "Redux is a predictable state Management for JavaScript apps.",
    icon: <SiRedux style={{ color: "purple" }} className="skill-icon react-icon" />

  }
];


const Skill = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/');
  };

  return (

    <>
      <IoArrowBack onClick={handleBack} className='absolute top-10 left-10 text-2xl text-white cursor-pointer' />

      <div className="skills-container">

        <h1 className="skills-title">My Skills</h1>
        <p>"Summarize your frontend development expertise, highlighting proficiency in HTML, CSS, JavaScript (ES6+), modern frameworks like React or Vue, responsive design, cross-browser compatibility, version control (Git), and UI/UX principles. Mention any experience with Tailwind, Bootstrap, REST APIs, or frontend testing tools like Jest or Cypress."

        </p>
        <div className="skills-grid mt-6">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon-wrapper">{skill.icon}</div>
              <h2 className="skill-name">{skill.name}</h2>
              <p className="skill-description">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skill;