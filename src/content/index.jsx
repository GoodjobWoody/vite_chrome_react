import './content.scss';
import { createRoot } from 'react-dom/client';
import ResumeComponent from './components/resume';

// Create a div for the modal
const app = document.createElement('div');
app.id = 'CRX-container';
document.body.appendChild(app);

// Render the ResumeComponent inside the div
// ReactDOM.render(<ResumeComponent />, app);
createRoot(<ResumeComponent />, app);
