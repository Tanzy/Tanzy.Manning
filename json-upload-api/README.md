# JSON Upload API

This project is a full-stack application that allows users to upload JSON files through a frontend interface, which then sends the data to a backend API for processing.

## Project Structure

The project is divided into two main parts: the backend and the frontend.

### Backend

- **`backend/src/app.ts`**: Entry point of the backend application. Sets up the Express server, middleware, and routes for handling JSON uploads.
- **`backend/src/controllers/uploadController.ts`**: Contains the `UploadController` class with a method `handleUpload` that processes incoming JSON data.
- **`backend/src/routes/uploadRoutes.ts`**: Defines the routes for the upload functionality, linking POST requests to the `handleUpload` method.
- **`backend/src/types/index.ts`**: Exports interfaces that define the structure of the expected JSON data.
- **`backend/package.json`**: Configuration file for npm, listing dependencies and scripts.
- **`backend/tsconfig.json`**: TypeScript configuration file specifying compiler options.

### Frontend

- **`frontend/public/index.html`**: Main HTML file for the frontend application.
- **`frontend/src/App.tsx`**: Main component of the React application.
- **`frontend/src/components/FileUpload.tsx`**: Functional component providing a user interface for uploading JSON files.
- **`frontend/src/index.tsx`**: Entry point of the React application.
- **`frontend/src/types/index.ts`**: Exports interfaces defining the structure of expected JSON data for the frontend.
- **`frontend/package.json`**: Configuration file for npm in the frontend.
- **`frontend/tsconfig.json`**: TypeScript configuration file for the frontend.

## Setup Instructions

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd json-upload-api
   ```

2. **Backend Setup**:
   - Navigate to the backend directory:
     ```
     cd backend
     ```
   - Install dependencies:
     ```
     npm install
     ```
   - Start the backend server:
     ```
     npm start
     ```

3. **Frontend Setup**:
   - Navigate to the frontend directory:
     ```
     cd frontend
     ```
   - Install dependencies:
     ```
     npm install
     ```
   - Start the frontend application:
     ```
     npm start
     ```

## Usage

- Open your browser and navigate to `http://localhost:3000` (or the port specified for the frontend).
- Use the file upload interface to select and upload a JSON file.
- The uploaded JSON data will be sent to the backend for processing.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.