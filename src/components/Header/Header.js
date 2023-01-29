import React from "react";
import css from "./Header.module.scss";
import { BiMenuAltRight, BiPhoneCall } from "react-icons/bi";
import { motion } from "framer-motion";
import { getMenuStyles, headerVariants } from "../../utils/motion";
import { useState } from "react";
import useHeaderShadow from "../../hooks/useHeaderShadow";
export default function Header() {
  const [menuOpened, setMenuOpened] = useState(false);
  const headerShadow = useHeaderShadow();
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={headerVariants}
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
      style={{ boxShadow: headerShadow }}
    >
      <div className={` flexCenter ${css.container}`}>
        <div className={css.name}>Binjan</div>
        <ul
          style={getMenuStyles(menuOpened)}
          className={`flexCenter ${css.menu}`}
        >
          <li>
            <a href="#expertise">Services</a>
          </li>
          <li>
            <a href="#work">Experience</a>
          </li>
          <li>
            <a href="#portifilio">Portfolio</a>
          </li>
          <li>
            <a href="#people">Testimonials</a>
          </li>
          <li>
            <a href="" className={`flexCenter ${css.phone}`}>
              <p>+91 8924886611</p>
              <BiPhoneCall size={40} />
            </a>
          </li>
        </ul>
        {/* Only for Medium and Small devices */}
        <div
          className={css.menuIcon}
          onClick={() => {
            setMenuOpened(!menuOpened);
          }}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </motion.div>
  );
}
