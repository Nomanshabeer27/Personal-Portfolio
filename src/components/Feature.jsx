import Dev from './Dev';
import { motion } from "motion/react";
const Feature = () => {
  
  return (
    <>
      <div className="featured">
        <div className="fheading">
          <h1>featured</h1>
          <h1>projects</h1>
        </div>
        <div className="fcontent">
          <div className="fleft">
            <div className="fleftlem">
              <h3>Mohtashim</h3>
              <h1>Official website of Mohtashim, Islamabad capital</h1>
              <h4>Design, Backend Developer, App</h4>
            </div>
          </div>
          <div className="fright">
            <div className="images">
              <img
                src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdlYiUyMGRldmVsb3BlciUyMHdlYnNpdGUlMjAlMjBwcm9qZWN0JTIwcGljfGVufDB8fDB8fHww"
                alt=""
              />
            </div>
          </div>
        </div>
        <div
          className="fbutton"
          
        >
          <motion.button
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.3 },
          }}
           className="px-6 py-24 rounded-md transition-all">
            View All Projects
          </motion.button>
        </div>
      </div>
      <Dev />
    </>
  );
};

export default Feature;