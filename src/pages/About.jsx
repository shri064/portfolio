import React from "react";
import about_me_img from "../Image/about_me_img.png";
import personal_info_data from "./assets/AboutIn";
import "./About.css";
function About() {
  return (
    <div>
      <div className="about_me" id="about_myself">
        <div className="container_01">
          <div className="my_img">
            <img id="img" src={about_me_img} alt="profile_image" />
          </div>
          <div className="my_info">
            <h2>
              About <span>Me</span>
            </h2>
            <p className = "intro-text">
              👋 I am Shrihari Waykule, a Computer Engineering graduate from
              Sinhgad Academy of Engineering, Pune, with a strong background in
              web development. 🎓 I have always been fascinated by Knowledge 🧠
              and learning new things. 💡 I have developed several successful
              projects, including a garbage collection app, a YouTube-like media
              website, and a movie exploration platform using the MERN stack. 🌟
              With hands-on experience from a Web Development Internship at
              CodeClause and a solid foundation in Java, JavaScript, ReactJS,
              and MySQL, I am eager to contribute to innovative projects in a
              dynamic tech environment. 🚀
            </p>
            <div className="personal_info">
              {personal_info_data.map((data, index) => {
                return (
                  <>
                    <div className="abc" key={index}>
                      {data.section_one.map((e, index) => {
                        return (
                          <h4 key={index}>
                            <span>{e.data_type} :</span> {e.data_value}
                          </h4>
                        );
                      })}
                    </div>
                    <div className="xyz">
                      {data.section_two.map((e, index) => {
                        return (
                          <h4>
                            <span>{e.data_type} :</span> {e.data_value}
                          </h4>
                        );
                      })}
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
