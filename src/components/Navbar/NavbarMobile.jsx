import React, { useState } from "react";
import { FaAlignRight, FaRegTimesCircle } from "react-icons/fa";
import "../Navbar/NavbarMobile.css";
import { motion } from "framer-motion";

function NavbarMobile() {
  const [open, setOpen] = useState(false);

  const hamburgerIcon = (
    <FaAlignRight className='hamburger' onClick={() => setOpen(!open)} />
  );
  const closeIcon = (
    <FaRegTimesCircle className='hamburger' onClick={() => setOpen(!open)} />
  );

  const closeMobileMenu = () => setOpen(false);

  const animatedForm = { opacity: 0, y: -40 };
  const animatedTo = { opacity: 1, y: 0 };

  return (
    <div className='mobile-navigation'>
      {open ? closeIcon : hamburgerIcon}
      {open && (
        <div className='navlink-mobile'>
          <motion.div
            initial={animatedForm}
            animate={animatedTo}
            onClick={() => closeMobileMenu()}
            transition={{ delay: 0.1 }}
          >
            Home
          </motion.div>
          <motion.div
            initial={animatedForm}
            animate={animatedTo}
            onClick={() => closeMobileMenu()}
            transition={{ delay: 0.1 }}
          >
            Shop
          </motion.div>
          <motion.div
            initial={animatedForm}
            animate={animatedTo}
            onClick={() => closeMobileMenu()}
            transition={{ delay: 0.2 }}
          >
            About Us
          </motion.div>
          <motion.div
            initial={animatedForm}
            animate={animatedTo}
            onClick={() => closeMobileMenu()}
            transition={{ delay: 0.3 }}
          >
            Contact Us
          </motion.div>
          <motion.div
            initial={animatedForm}
            animate={animatedTo}
            onClick={() => closeMobileMenu()}
            transition={{ delay: 0.4 }}
          >
            Terms and Conditions
          </motion.div>
          <motion.div
            initial={animatedForm}
            animate={animatedTo}
            onClick={() => closeMobileMenu()}
            transition={{ delay: 0.5 }}
          >
            Refund and Return
          </motion.div>
          <motion.div
            initial={animatedForm}
            animate={animatedTo}
            onClick={() => closeMobileMenu()}
            transition={{ delay: 0.6 }}
          >
            Privacy Policy
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default NavbarMobile;
