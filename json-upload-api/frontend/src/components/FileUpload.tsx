import React, { useState } from 'react';

const FileUpload: React.FC = () => {
    const [file, setFile] = useState<File | null>(null);
    const [message, setMessage] = useState<string>('');

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0];
        if (selectedFile && selectedFile.type === 'application/json') {
            setFile(selectedFile);
            setMessage('');
        } else {
            setMessage('Please upload a valid JSON file.');
        }
    };

    const handleUpload = async () => {
        if (!file) {
            setMessage('No file selected.');
            return;
        }

        const reader = new FileReader();
        reader.onload = async (e) => {
            const jsonData = e.target?.result;
            if (typeof jsonData === 'string') {
                try {
                    const response = await fetch('/api/upload', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: jsonData,
                    });

                    if (response.ok) {
                        setMessage('File uploaded successfully!');
                    } else {
                        setMessage('Failed to upload file.');
                    }
                } catch (error) {
                    setMessage('Error uploading file: ' + error.message);
                }
            }
        };
        reader.readAsText(file);
    };

    return (
        <div>
            <input type="file" accept=".json" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default FileUpload;