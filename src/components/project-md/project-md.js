import React, {useState} from 'react';
import Md from 'react-markdown/with-html';

function ProjectMd({ fileName }) {
  const mdSource = process.env.REACT_APP_MD_SOURCE;
  const [md, setMd] = useState(null);

  fetch(`${mdSource}/${fileName}.md`).then(async (response) => {
    setMd(await response.text());
  });

  return (
    <Md source={md} />
  );
}

export default ProjectMd;