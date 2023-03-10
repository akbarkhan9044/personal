import React from "react";
import css from "./People.module.scss";
import { motion } from "framer-motion";
import { staggerChildren, footerVariants } from "../../utils/motion";
import Slider from "react-slick";
import { sliderSettings, comments } from "../../utils/data";
export default function People() {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <a className="anchor" id="people"></a>
      <motion.div
        variants={footerVariants}
        className={`yPaddings innerWidth ${css.container}`}
      >
        <div className={`flexCenter ${css.heading}`}>
          <span className="primaryText">People Talk about us</span>
          <p style={{ marginTop: "2rem" }}>
            I got a job that was in accordance with the salary and field of work
            The process of submitting an appilication was quite cosy
          </p>
        </div>

        {/* Carousal Integration */}

        <div className={`yPaddings ${css.comments}`}>
          <Slider {...sliderSettings} className={css.slider}>
            {comments.map((comment) => {
              return (
                <div className={`flexCenter ${css.comment}`}>
                  <img src={comment.img} alt={comment.img} />
                  <p>{comment.comment}</p>
                  <div className={css.line}></div>
                  <div className={css.bio}>
                    <span>{comment.name}</span>
                    <span>{comment.post}</span>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </motion.div>
    </motion.section>
  );
}
