import React, { useState } from "react";
import "./Sidebar.css";
import { motion, AnimatePresence } from "framer-motion"; // Import motion
import { BiHomeAlt2, BiUserCircle } from "react-icons/bi";
import { BsCreditCard2Back } from "react-icons/bs";
import { CgLoadbarSound } from "react-icons/cg";
import { FaBars } from "react-icons/fa";
import { FiLogOut, FiSettings } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Logout, getAuthToken } from "../Custom/LoginDetails";

const Sidebar = () => {
  const [isMiddleIconsVisible, setMiddleIconsVisible] = useState(false);
  const token = getAuthToken();
  const toggleMiddleIcons = () => {
    setMiddleIconsVisible(!isMiddleIconsVisible);
  };

  const middleIconsVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.3 } },
  };

  return (
    <div className="sidebar">
      <div className="top" onClick={toggleMiddleIcons}>
        <motion.div>
          <FaBars className="icons" />
        </motion.div>
      </div>
      {token ? (
        <>
          <AnimatePresence>
            {isMiddleIconsVisible && (
              <motion.div
                className="middle"
                variants={middleIconsVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <Link to="/">
                  <motion.div>
                    <BiHomeAlt2 className="icons" />
                  </motion.div>
                </Link>
                <Link to="/payment">
                  <motion.div>
                    <BsCreditCard2Back className="icons" />
                  </motion.div>
                </Link>
                {/* <motion.div>
                  <CgLoadbarSound className="icons" />
                </motion.div> */}
                <Link to="/profile">
                  <motion.div>
                    <BiUserCircle className="icons" />
                  </motion.div>
                </Link>
                <a href="/login" onClick={() => Logout()}>
                  <motion.div className="mb-4">
                    <FiLogOut className="icons" />
                  </motion.div>
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      ) : (
        <>
          <div className="text-center">
            <Link to="/login" className="login-text">
              <BiUserCircle className="icons" />
              Login
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
