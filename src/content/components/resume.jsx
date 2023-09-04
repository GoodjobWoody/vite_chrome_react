import { useState } from 'react';
import EditableResume from './editable_resume';
import TailoredResume from './tailored_resume';
import { Modal } from '@mui/material';
import './resume.scss'

function ResumeComponent() {
    const [open, setOpen] = useState(true);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Modal open={open} onClose={handleClose} className="modal_container">
            <div className="modal_content">
                <EditableResume className="editable-resume" />
                <TailoredResume className="tailored-resume" />
            </div>
        </Modal>
    );
}

export default ResumeComponent;