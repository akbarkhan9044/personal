import React from "react";
import css from "./Hero.module.scss";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn, slideIn } from "../../utils/motion";
export default function Hero() {
  return (
    <section className={`padding ${css.wrapper}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        <div className={css.upperElements}>
          <motion.span
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="primaryText"
          >
            Hey There, <br /> I'm Akbar
          </motion.span>
          <motion.span
            variants={fadeIn("left", "tween", 0.2, 1)}
            className="secondaryText"
          >
            I design beautiful simple
            <br />
            things, And I love what i do
          </motion.span>
        </div>

        {/* person image   */}
        <motion.div
          variants={fadeIn("up", "tween", 0.2, 1)}
          className={css.person}
        >
          <motion.img
            variants={slideIn("up", "tween", 0.5, 1.3)}
            src="./person.png"
            alt="person"
          />
        </motion.div>

        {/* email */}
        <a className={css.email} href="mailto:akbarkhan904412.gamil.com">
          akbarkhan904412.gamil.com
        </a>

        {/* lower Elements */}
        <div className={css.lowerElements}>
          <motion.div
            variants={fadeIn("right", "tween", 0.2, 1)}
            className={css.experience}
          >
            <div className="primaryText">10</div>
            <div className="secondaryText">
              <div>Years</div>
              <div>Experiences</div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", "tween", 0.2, 1)}
            className={css.certificate}
          >
            <img src="./certificate.png" alt="cert" />
            <span>CERTIFIED PROFATIONAL</span>
            <span>UI/UX DESIGNER</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
