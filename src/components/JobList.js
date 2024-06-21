import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import FadeInSection from "./FadeInSection";

const isHorizontal = window.innerWidth < 600;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  if (isHorizontal) {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  } else {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  if (isHorizontal) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`
    };
  } else {
    return {
      id: `vertical-tab-${index}`
    };
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "theme.palette.background.paper",
    display: "flex",
    height: 300
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}));

const JobList = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const experienceItems = {
    "NextEra Energy": {
      jobTitle: "IT Data Science Analyst Intern @",
      duration: "MAY 2024 - PRESENT",
      desc: [
        "Developed evaulations of machine learning models across the team.  This enabled the improvement of analyzed models, significantly increasing nuclear plant activity in the time-frame of a month.",
        "Built an interactive dashboard for the team to use with future data received through the models from the nuclear plants to provide a better, future-proof user experience to hundreds of Nuclear engineers."
      ]
    },
    "Purdue University": {
      jobTitle: "Undergraduate Research Assistant @",
      duration: "MAY 2023 - June 2024",
      desc: [
        "Developed a responsive script to reconstruct videos in low visibility using COLMAP and NeRFStudio.",
        "Iteratively built a low-visibility dataset to be used alongside code development to remove haze from generated media.",
        "Led and collaborated with three rotations of the Computer Vision in Low Visibility team, following best practices for the full software development life cycle, including coding standards, code reviews, source control management, build processes, testing, and operations."
      ]
    },
    "Next Generation Technologies": {
      jobTitle: "Graphic Design Intern @",
      duration: "SEPT 2020 - AUG 2021",
      desc: [
        "Developed and researched the best branding kit for the COVID-19 era healthcare startup, leveraging Adobe Suite and Canva to generate alluring designs.",
        "Aided the company in impacting 250+ families through selling 1000+ face masks backed with technology developed by leading public health scientists on the founding team."
      ]
    },
    "University of Montana": {
      jobTitle: "Research Assistant @",
      duration: "NOV 2019 - MAY 2020",
      desc: [
        "Developed silicasome nanoparticles as next-generation vaccine delivery platforms to enhance passage of medicinal drugs through the cells in the body and thus improve absorption of key proteins into the immune system.",
        "Leveraged laboratory equipment and techniques such as analysis of in vitro and in vivo interactions between the hybrid silica and liposome particles to further optimize the design of these particles as a novel biomedical technology."
      ]
    }
    // TDSB: {
    //   jobTitle: "Software Engineer @",
    //   duration: "SEPT 2019 - DEC 2020",
    //   desc: [
    //     "Co-developed homework management software integrable with Google Classroom by utilizing the Python’s Flask micro-framework for the back-end API and Vue.js for the front-end UI, in order to translate business requirements into a functional full-stack application."
    //   ]
    // },
    // "Orange Gate": {
    //   jobTitle: "Software Developer Intern @",
    //   duration: "MAY 2019 - AUG 2019",
    //   desc: [
    //     "Developed a Node.js smart home system through Facebook’s Messenger integrated with Bocco sensors and other smart devices (Nest camera, TPLink smart plugs) to derive conclusions about the current state of the home",
    //     "Identified continuous improvements in data quality, design reports and coding activities, presenting results and findings to internal business stakeholders.",
    //     "Relevant technologies/tools used: DialogFlow, Vision, AutoML, Messenger Bot API, MongoDB."
    //   ]
    // }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation={!isHorizontal ? "vertical" : null}
        variant={isHorizontal ? "fullWidth" : "scrollable"}
        value={value}
        onChange={handleChange}
        className={classes.tabs}
      >
        {Object.keys(experienceItems).map((key, i) => (
          <Tab label={isHorizontal ? `0${i}.` : key} {...a11yProps(i)} />
        ))}
      </Tabs>
      {Object.keys(experienceItems).map((key, i) => (
        <TabPanel value={value} index={i}>
          <span className="joblist-job-title">
            {experienceItems[key]["jobTitle"] + " "}
          </span>
          <span className="joblist-job-company">{key}</span>
          <div className="joblist-duration">
            {experienceItems[key]["duration"]}
          </div>
          <ul className="job-description">
            {experienceItems[key]["desc"].map(function (descItem, i) {
              return (
                <FadeInSection delay={`${i + 1}00ms`}>
                  <li key={i}>{descItem}</li>
                </FadeInSection>
              );
            })}
          </ul>
        </TabPanel>
      ))}
    </div>
  );
};

export default JobList;
