import './content.scss';
import ReactDOM from 'react-dom/client';
import ResumeComponent from './components/resume';

// Create a div for the modal
const app = document.createElement('div')
app.id = 'CRX-container'
// 将刚创建的div插入body最后
document.body.appendChild(app)
// 将ReactDOM插入刚创建的div
const crxContainer = ReactDOM.createRoot(
    document.getElementById('CRX-container')
)
crxContainer.render(<ResumeComponent />)
