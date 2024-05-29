# VehicleHub

<p align="center">
  <img src="public/page_intro.jpeg">
</p>

<img src="https://img.shields.io/badge/Frontend-React-blue?logo=react" alt="React">
  <img src="https://img.shields.io/badge/Router-React_Router-blue?logo=react-router" alt="React Router">
  <img src="https://img.shields.io/badge/HTTP_Client-Axios-blue?logo=axios" alt="Axios">
  <img src="https://img.shields.io/badge/Backend-Firebase-yellow?logo=firebase" alt="Firebase">
  <img src="https://img.shields.io/badge/License-MIT-green?logo=license" alt="License">
</p>

## Introduction

VehicleHub is a web application designed to facilitate the buying, selling, and renting of vehicles. It offers a user-friendly interface for users to list their vehicles, search for available cars, and manage rental bookings.

## Table of Contents

- [Introduction](#introduction)
- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Dependencies](#dependencies)
- [Configuration](#configuration)
- [Documentation](#documentation)
- [Examples](#examples)
- [Troubleshooting](#troubleshooting)
- [Contributors](#contributors)
- [License](#license)

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/VehicleHub.git
   cd VehicleHub
   ```
2. **Install dependencies:**

   ```bash
   npm install
   ```
3. **Start the development server:**

   ```bash
   npm start
   ```

## Usage

After starting the development server, open your browser and navigate to `http://localhost:3000` to access the application. From here, you can browse available vehicles, post new listings, and manage rentals.

## Features

- **User Authentication:** Secure login and registration for users.
- **Vehicle Listings:** Create, view, and manage vehicle listings.
- **Search and Filter:** Search for vehicles based on various criteria.
- **Booking System:** Rent vehicles and manage bookings.
- **Responsive Design:** Optimized for both desktop and mobile devices.

## Dependencies

- **Frontend:**

  - React
  - React Router
  - Axios
- **Backend:**

  - Firebase
- **Others:**

  - Various CSS and image assets

## Configuration

### Firebase Setup

1. Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).
2. Replace the Firebase configuration in `src/API/firebase.js` with your own Firebase project credentials.
3. Update the Firebase Admin SDK JSON file (`vehiculehub-firebase-adminsdk-mziy5-5eaed68c9e.json`) with the credentials obtained from your Firebase project.

## Documentation

- **Frontend Components:** Refer to the components in the `src` directory for detailed information on how each part of the application works.
- **API Integration:** See `src/API` for details on how the application interacts with Firebase and performs web scraping.

## Troubleshooting

### Common Issues

- **Issue:** Firebase authentication not working.

  - **Solution:** Ensure that the Firebase configuration in `src/API/firebase.js` is correct and that you have enabled the appropriate authentication methods in the Firebase console.
- **Issue:** Images not loading.

  - **Solution:** Check that the image paths in the `public` and `src/assets` directories are correct and that the images are properly imported.

## Contributors

- Luis Marin
- Jeison Acosta
- Kevin Ruiz

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
