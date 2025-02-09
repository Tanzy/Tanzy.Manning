const uploadForm = document.getElementById('uploadForm');
const fileInput = document.getElementById('fileInput');
const messageDiv = document.getElementById('message');

uploadForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const file = fileInput.files[0];
    if (!file) {
        messageDiv.textContent = 'Please select a JSON file to upload.';
        return;
    }

    const reader = new FileReader();
    reader.onload = async (e) => {
        try {
            const jsonData = JSON.parse(e.target.result);
            const response = await fetch('http://localhost:5000/upload', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(jsonData),
            });

            if (response.ok) {
                messageDiv.textContent = 'File uploaded successfully!';
            } else {
                messageDiv.textContent = 'Error uploading file.';
            }
        } catch (error) {
            messageDiv.textContent = 'Invalid JSON file.';
        }
    };

    reader.readAsText(file);
});