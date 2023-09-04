import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import EditableResume from './components/editable_resume';
import TailoredResume from './components/tailored_resume';
import { Modal } from '@mui/material';
import './content.scss';

function ResumeComponent() {
    const [open, setOpen] = useState(true);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Modal open={open} onClose={handleClose} className="container">
            <div className="resume-container">
                <div className="editable-resume">
                    <EditableResume />
                </div>
                <div className="tailored-resume">
                    <TailoredResume />
                </div>
            </div>
        </Modal>
    );
}

// Create a div for the modal
const app = document.createElement('div');
app.id = 'CRX-container';
document.body.appendChild(app);

// Render the ResumeComponent inside the div
ReactDOM.render(<ResumeComponent />, app);
