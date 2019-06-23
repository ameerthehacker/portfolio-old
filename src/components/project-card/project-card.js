import React, { Fragment } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  cardContent: {
    color: "white",
    minHeight: "250px",
  },
  projectHeading: {
    textAlign: "center",
    fontWeight: "250"
  },
  projectDescription: {
    paddingTop: "15px",
    textAlign: "center",
    fontWeight: "300"
  },
  projectLinks: {
    paddingTop: "20px",
    fontSize: "1.5em",
    textAlign: "center"    
  },
  projectLink: {
    color: "white",
    textDecoration: "none"
  },
  projectLinkText: {
    fontSize: "0.7em",
    marginLeft: "3px"
  },
  readMoreContainer: {
    paddingTop: "30px"
  }
});

function ProjectCard (
    { 
      projectHeading, 
      projectDescription, 
      bgColors,
      githubLink,
      downloads,
      downloadsLink,
      npmLink,
      onReadMoreClick,
      icon
    }
  ) {
  const classes = useStyles();

  return (
    <Fragment>
      <Card>
        <CardContent style={{background: `linear-gradient(45deg, #${bgColors[0]} 30%, #${bgColors[1]} 90%)`}} className={classes.cardContent}>
          <Grid 
            container
            justify="center"
            alignItems="center"
            style={{height: "100%"}}
            >
            <Grid item className="text-center">
              <h1 className={classes.projectHeading}>{projectHeading}</h1>
              <p className={classes.projectDescription}>{`{${projectDescription}}`}</p>
              <div className={classes.projectLinks}>
                {
                  npmLink? 
                  <a className={classes.projectLink} target="_blank" rel="noopener noreferrer" href={npmLink}>
                    <i style={{color: "white"}} className="fab fa-npm"></i>
                  </a>: ""
                }
                {
                  githubLink? 
                  <a className={classes.projectLink} target="_blank" rel="noopener noreferrer" href={githubLink}>
                    <i style={{color: "white"}} className="fab fa-github"></i>
                  </a>: ""
                }
                {
                  downloads? 
                  <a className={classes.projectLink} target="_blank" rel="noopener noreferrer" href={downloadsLink}>
                    <i style={{color: "white"}} className="fas fa-cloud-download-alt"></i>
                    <span className={classes.projectLinkText}>{downloads}</span>
                  </a>: ""
                }
              </div>
              <div className={classes.readMoreContainer}>
                <Fab
                  onClick={() => onReadMoreClick({
                    projectHeading,
                    icon,
                    bgColors
                  })}
                  style={{background: `linear-gradient(45deg, #${bgColors[0]} 30%, #${bgColors[1]} 90%)`}}
                  className={classes.readMoreFab}
                  variant="extended"
                  size="medium"
                >
                  <span style={{color: "white"}}><i style={{color: "white"}} className="fab fa-readme"></i> Read More</span>
                </Fab>     
              </div>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Fragment>
  );
}

export default ProjectCard;