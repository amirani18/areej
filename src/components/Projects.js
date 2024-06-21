import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import FadeInSection from "./FadeInSection";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-bootstrap/Carousel";
import ExternalLinks from "./ExternalLinks";

class Projects extends React.Component {
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
    const spotlightProjects = {
      "Instagram Hype Bot": {
        title: "instagram hype bot",
        desc:
          "A fun little tool that automates user interactions with their account.",
        techStack: "PYTHON",
        link: "https://github.com/amirani18/insta_hype_bot",
        open: "https://github.com/amirani18/insta_hype_bot",
        image: "/assets/insta_hype_bot.png"
      },
      Acumentor: {
        title: "acumentor",
        desc:
          "A streamline quiz creation tool that utilizes AI to automate learning enhancement with efficiency and effortless adaptability.",
        techStack: "JAVASCRIPT, REACT, NEXTJS",
        link: "https://github.com/ts549/Catapult",
        open: "https://github.com/ts549/Catapult",
        image: "/assets/acumentor.png"
      },
      "Grad Move": {
        title: "gradmove",
        desc:
          "Your go-to app for finding housing near your dream job, curated based on tastes in housing, price, transport, and access to healthcare.",
        techStack: "JUPYTER NOTEBOOK, PYTHON, STREAMLIT",
        link: "https://github.com/amirani18/GradMove",
        open: "https://github.com/amirani18/GradMove",
        image: "/assets/gradmove.png"
      }
      // Portfolio: {
      //   title: "portfolio.js",
      //   desc:
      //     "A small JS library that helps with clear and succinct data presentation.",
      //   techStack: "NODE.JS (EXPRESS.JS)",
      //   link: "https://github.com/gazijarin/Portfolio.js",
      //   open: "https://afternoon-ocean-92382.herokuapp.com/",
      //   image: "/assets/portfolio.png"
      // }
    };
    const projects = {
      "Purdue Muslim Student Association": {
        desc:
          "Developed social media content for the school year utilizing technologies such as Canva, Instagram, and GroupMe",
        techStack: "Featured Posts Aug 2023 - May 2024",
        // link: "https://github.com/gazijarin/TDSBHomeworkManagement",
        open: "https://purduemsa.com/"
      },
      "Purdue South West Asian North African Student Union": {
        desc:
          "Developed social media content for the Fall 2024 semester leveraging technologies such as Canva, Instagram, FinalCut Pro, and Whatsapp.",
        techStack: "Featured Posts Aug 2024 - Dec 2024",
        // link: "https://github.com/gazijarin/adamai",
        open: "https://www.instagram.com/purdueswana/"
      },
      "Purdue Nasha": {
        desc:
          "Acted as liaison to 2nd place winner of the 2024 Nasha Raas/Garba/Bollywood Fusion Dance Competion.",
        techStack: "Cross-Cultural Collaboration, Leadership",
        open:
          "https://www.youtube.com/watch?v=uUXod3Q74Sg"
      }
      // "Odin Bot": {
      //   desc:
      //     "A Telegram bot that helps you excel on your daily tasks through Node NLP.",
      //   techStack: "Javascript, Node.js, Natural NLP, Telegram API",
      //   link: "https://github.com/gazijarin/OdinBot",
      //   open: ""
      // },
      // "Game Centre": {
      //   desc:
      //     "An Android app consisting of three board games, including multiplayer, autosave, user authentication, etc.",
      //   techStack: "Java, Android Studio",
      //   link: "https://github.com/gazijarin/gamecentre",
      //   open: ""
      // },
      // "Minimax Stonehenge": {
      //   desc:
      //     "Two-player, zero-sum game with a strategic Minimax artificial intelligence.",
      //   techStack: "Python",
      //   link: "https://github.com/gazijarin/stonehenge",
      //   open: ""
      // }
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ pet projects</span>
        </div>
        <Carousel>
          {Object.keys(spotlightProjects).map((key, i) => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={spotlightProjects[key]["image"]}
                alt={key}
              />
              <div className="caption-bg">
                <Carousel.Caption>
                  <h3>{spotlightProjects[key]["title"]}</h3>
                  <p>
                    {spotlightProjects[key]["desc"]}
                    <p className="techStack">
                      {spotlightProjects[key]["techStack"]}
                    </p>
                  </p>
                  <ExternalLinks
                    githubLink={spotlightProjects[key]["link"]}
                    openLink={spotlightProjects[key]["open"]}
                  ></ExternalLinks>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon
                        style={{ fontSize: 35 }}
                      ></FolderOpenRoundedIcon>
                    </div>
                    <ExternalLinks
                      githubLink={projects[key]["link"]}
                      openLink={projects[key]["open"]}
                    ></ExternalLinks>
                  </div>

                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;
