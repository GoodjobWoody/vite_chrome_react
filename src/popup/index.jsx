import React from 'react';
import { Button, Container, Typography, Input, InputLabel } from '@mui/material';
import './popup.scss'; // Assuming you have a CSS file named popup.css

function Popup() {
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("File selected:", file.name);
    }
  };

  return (
    <Container className="popup-container">

      <div className="upload-section">

        <Input
          className='upload-input'
          type="file"
          id="resumeUpload"
          inputProps={{ accept: ".pdf, .doc, .docx" }}
          style={{ display: 'block' }}
        />

        <Button className="upload-button" variant="contained" id="uploadButton" onClick={handleFileUpload}>
          Upload
        </Button>
      </div>
    </Container>
  );
}

export default Popup;
