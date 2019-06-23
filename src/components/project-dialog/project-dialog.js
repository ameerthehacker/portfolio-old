import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import { makeStyles } from '@material-ui/core/styles';
import './project-dialog.scss';
import Zoom from '@material-ui/core/Zoom';
import ProjectMd from '../../components/project-md/project-md';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Zoom ref={ref} {...props} />;
});

const useStyles = makeStyles({
  dialogContent: {
    background: "#ecf0f1"
  },
  dialogTitle: { 
    color: "white"
  }
})

function ProjectDialog({ 
  isOpen, 
  onCloseDialog, 
  project
}) {
  const classes = useStyles();
 
  return (
    <Dialog
      open={isOpen}
      fullScreen={true}
      maxWidth="xl"
      TransitionComponent={Transition}
      
    >
      <DialogTitle style={{background: `linear-gradient(45deg, #${project.bgColors? project.bgColors[1]: ""} 30%, #${project.bgColors? project.bgColors[0]: ""} 90%)`}} className={classes.dialogTitle}>
        <span className="pull-right title-size" onClick={onCloseDialog} style={{fontWeight: "200", cursor: "pointer"}}><i style={{color: "ghostwhite"}} className="far fa-times-circle"></i></span> 
        <span className="pull-left title-size"><i style={{color: "white"}} className={project.icon}></i> {project.projectHeading}</span>
      </DialogTitle>
      <DialogContent className={classes.dialogContent}>
        <ProjectMd fileName={project.md}/>
      </DialogContent>
    </Dialog>
  );
}

export default ProjectDialog;