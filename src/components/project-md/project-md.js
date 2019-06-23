import React, {useState} from 'react';
import Md from 'react-markdown/with-html';
import Grid from '@material-ui/core/Grid';
import './project-md.scss';

function ProjectMd({ fileName: projectName }) {
  const backendUrl = process.env.REACT_APP_MD_SOURCE;
  const [md, setMd] = useState(null);
  const transformImageUri = (uri) => {
    if(uri.startsWith('~')) {
      return `${backendUrl}/projects/${projectName}/images/${uri.substring(1, uri.length)}`;      
    }
    else {
      return uri;
    }
  }

  fetch(`${backendUrl}/projects/${projectName}/index.md`).then(async (response) => {
    setMd(await response.text());
  });

  return (
    <Grid
      container
      alignItems="center"
      justify="center"
    >
      <Grid item>
        <Md 
          escapeHtml={false}
          className="md-container" 
          transformImageUri={transformImageUri} 
          source={md} 
        />
      </Grid>
    </Grid>
  );
}

export default ProjectMd;