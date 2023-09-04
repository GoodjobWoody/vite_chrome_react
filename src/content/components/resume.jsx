import { useState } from 'react';
import EditableResume from './components/editable_resume';
import TailoredResume from './components/tailored_resume';
import { Modal } from '@mui/material';

function ResumeComponent() {
    const [open, setOpen] = useState(true);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Modal open={open} onClose={handleClose} className="container">
            <div className="resume-container">
                <EditableResume className="editable-resume" />
                <TailoredResume className="tailored-resume" />
            </div>
        </Modal>
    );
}

export default ResumeComponent;