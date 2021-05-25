import React, { useState } from 'react';
import styled from 'styled-components';
import Dropzone from 'react-dropzone';

const Wrapper = styled.div`
  ul {
    margin: 0;
  }

  strong {
    display: inline-block;
    margin-top: 20px;
  }

  .dropzone {
    text-align: center;
    padding: 20px;
    border: 3px dashed #eeeeee;
    background-color: #fafafa;
    color: #bdbdbd;
  }
`;

export default function App({ handleDrop }) {
  //   const [fileName, setFileName] = useState();
  //   //  const handleDrop = (acceptedFiles) => setFileName(acceptedFiles[0].name);

  return (
    <Wrapper>
      <Dropzone onDrop={handleDrop} accept="image/*" minSize={1024} maxSize={3072000}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps({ className: 'dropzone' })}>
            <input {...getInputProps()} />
            <p>Drag'n'drop images, or click to select files</p>
          </div>
        )}
      </Dropzone>
    </Wrapper>
  );
}
