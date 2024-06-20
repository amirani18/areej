import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const one = (
      <p>
       I am currently a <b>Data Scientist Intern</b> at
       <a href="https://www.nexteraenergy.com/"> Nextera Energy</a>, working in the IT
       sector under the Nuclear Data Science Team. At the same time, I am undertaking a
       full-time <b> Bachelor's of Science</b> in <b>Computer Engineering </b> at 
       <a href="https://www.purdue.edu"> Purdue University</a>.
      </p>
    );
    const two = (
      <p>
       Outside of work, I'm interested in following the developments of
       science and engineering. I also love working out, being outdoors, and competing
       for steps with my friends in StepUp. And make TikToks.
      </p>
    );

    const tech_stack = [
      "Typescript",
      "Python",
      "React.js",
      "Java",
      "Nestjs",
      "C"
    ];

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {"Here are some technologies I have been working with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              {[two]}
            </div>
            <div className="about-image">
              <img alt="Areej Mirani" src={"/assets/areej.jpg"} />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
