import React, { Fragment, useState } from 'react';
import './works.scss';
import ProjectCard from '../../components/project-card/project-card';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { useSpring, animated } from 'react-spring';
import ProjectDialog from '../../components/project-dialog/project-dialog';

const useStyles = makeStyles(theme => ({
  worksContainer: {
    padding: theme.spacing(2),
  }
}));
const BG_COLORS = [
  ["FE6B8B", "FF8E53"],
  ["FF512F", "DD2476"],
  ["43CEA2", "185A9D"],
  ["56Ab2F", "A8E063"]
]

function Works({ history }) {
  const [works, setWorks] = useState([]);
  const classes = useStyles();
  const [isOpen, setOpen] = useState(false);
  let colorIndex = 0;
  const [project, setProject] = useState({});
  const backendUrl = process.env.REACT_APP_MD_SOURCE;
  const scaleAnimation = useSpring({
    transform: "scale(1)",
    from: {
      transform: "scale(0)"
    }
  });

  // load the projects only if has not loaded
  if(works.length === 0) {
    fetch(`${backendUrl}/projects.json`).then(async (response) => {
      setWorks(JSON.parse(await response.text()));
    });
  }

  return (
    <Fragment>
      <Grid container spacing={2} className={classes.worksContainer}>
        <Grid item xs={12}>
          <h1 onClick={() => history.push("/")} style={{fontWeight: "200", cursor: "pointer"}}><i style={{color: "hotpink"}} className="far fa-hand-point-left"></i> Back</h1> 
        </Grid>
          {works.map((work) => 
            {
              return work.projects.map((project) => 
              <Fragment key={project.projectHeading}>
                <Grid item md={4} xs={12}> 
                  <animated.div style={scaleAnimation}>
                    <h1 className="text-center" style={{fontWeight: "300"}}>
                      {work.icon? 
                        <i style={{color: `#${work.iconColor}`}} className={work.icon}></i>: ""
                      } {work.title}
                    </h1>
                    <ProjectCard onReadMoreClick={(project) => {
                      setOpen(true);
                      setProject(project)
                    }} {...project} icon={work.icon} bgColors={BG_COLORS[(colorIndex++) % BG_COLORS.length]}/>
                  </animated.div>
                </Grid>
              </Fragment>
            )}
          )}
      </Grid>
      <ProjectDialog project={project} isOpen={isOpen} onCloseDialog={() => setOpen(false)}/>      
    </Fragment>
  );
}

export default Works;
