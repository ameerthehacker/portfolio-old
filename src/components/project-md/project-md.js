import React, {useState} from 'react';
import Md from 'react-markdown/with-html';

function ProjectMd({ fileName: projectName }) {
  const mdSource = process.env.REACT_APP_MD_SOURCE;
  const [md, setMd] = useState(null);
  const transformImageUri = (uri) => `${mdSource}/${projectName}/images/${uri}`;

  fetch(`${mdSource}/${projectName}/index.md`).then(async (response) => {
    setMd(await response.text());
  });

  return (
    <Md transformImageUri={transformImageUri} source={md} />
  );
}

export default ProjectMd;