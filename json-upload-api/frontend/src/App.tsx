import React, { useState } from 'react';
import FileUpload from './components/FileUpload';

const App: React.FC = () => {
    return (
        <div>
            <h1>JSON Upload API</h1>
            <FileUpload />
        </div>
    );
};

export default App;