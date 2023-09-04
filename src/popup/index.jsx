import React, {useRef} from 'react';
import { Button, Container, Typography, Input, InputLabel } from '@mui/material';
import parseResume from '../utils/resume_parser';
import { msgContentScript } from '../utils/msg_bus';
import './popup.scss'; // Assuming you have a CSS file named popup.css

function Popup() {
  const fileInputRef = useRef(null);

  const handleFileUpload = async () => {
    const files = fileInputRef.current.files;
    const file = files && files[0];
    const parsedResume = await parseResume(file);
    msgContentScript({type: "resume", payload: parsedResume});
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
          inputRef={fileInputRef}
        />

        <Button className="upload-button" variant="contained" id="uploadButton" onClick={handleFileUpload}>
          Upload
        </Button>
      </div>
    </Container>
  );
}

export default Popup;
