


# Audio Fetching Dashboard for English-Gyaani Project

[Website Link](https://englsihgyaani-audio-fetching.web.app/)

This repository contains the source code for the Audio Fetching Dashboard developed for the English-Gyaani Project at IISC Bangalore. The dashboard is built using React.js for the frontend and Firebase for backend services. It allows users to fetch audio files based on specific queries such as state, gender, and word, helping users improve their English language proficiency.



## Features
Fetch audio based on user queries (state, gender, word)

Real-time audio resource retrieval using Firebase'

Responsive and interactive UI with Material-UI components

Geographical audio data visualization using React Vector Map

Authentication and user management with Firebase Auth

## Tech Stack
Frontend: React.js, Redux, Material-UI

Backend: Firebase (Realtime Database, Storage, Authentication)

Other Tools: React Vector Map, Local Storage

## Installation

Follow the steps below to get the project running locally.

Prerequisites
Node.js (v14.x or higher)
Firebase account (for backend services)
1. Clone the Repository

git clone https://github.com/your-username/audio-fetching-dashboard.git
cd audio-fetching-dashboard


2. Install Dependencies
Run the following command to install the required packages:

npm install

3. Firebase Setup
Create a project in Firebase Console.
Enable Firebase Authentication, Realtime Database, and Storage.
Generate Firebase config and add it to your React app in a .env file or directly in firebaseConfig.js:
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-app.firebaseapp.com",
  databaseURL: "https://your-app.firebaseio.com",
  projectId: "your-app-id",
  storageBucket: "your-app.appspot.com",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id"
};


4. Start the Development Server
npm start


This will start the app on http://localhost:3000.

Key Packages and Installation Commands
React.js: npm install react
Redux (State Management): npm install redux react-redux
Firebase (Backend): npm install firebase
Material-UI (UI Components): npm install @mui/material @emotion/react @emotion/styled
React Vector Map (Map Integration): npm install react-jvectormap
    
## Contributing


Feel free to fork this repository, make your changes, and submit a pull request. Contributions are welcome!
## License

This project is licensed under the MIT License.







