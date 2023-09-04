import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client'
import EditableResume from './components/editable_resume';
import TailoredResume from './components/tailored_resume';
import './content.scss';

function ResumeComponent() {
    // You can add shared state or methods here if needed

    return (
        <div className="container">
            <EditableResume />
            <div>This is resume</div>
            <TailoredResume />
            {/* ... any other shared components or elements ... */}
        </div>
    );
}


// 创建id为CRX-container的div
const app = document.createElement('div')
app.id = 'CRX-container'
// 将刚创建的div插入body最后
document.body.appendChild(app)
// 将ReactDOM插入刚创建的div
const crxContainer = ReactDOM.createRoot(
    document.getElementById('CRX-container')
)
crxContainer.render(<ResumeComponent />)
