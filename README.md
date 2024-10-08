 J_tracks: IoT System for Car Tracking/Fleet Management

 Overview

J_tracks is an innovative IoT system designed to enhance fleet management by providing real-time tracking, vehicle diagnostics, and data analytics. This project is intended for fleet managers and logistics companies who need to monitor and manage their fleet of vehicles efficiently.

Features

- User Authentication: Secure user registration and login system.
- Real-Time Vehicle Tracking: Monitor the location of vehicles in real-time.
- Vehicle Diagnostics: Collect and analyze vehicle performance data.
- Data Analytics: Generate insights from the collected data to improve fleet efficiency.

 Technologies

- Frontend: React.js
- Backend: Flask (Python)
- Database: SQLite (development), PostgreSQL (production)
- Cloud Services: AWS IoT Core for device management, AWS EC2 for hosting
- Containerization: Docker

Project Structure

 Backend (Flask)
 - app/: Contains the Flask application.
  - `__init__.py`: Initializes the Flask app and registers blueprints.
  - `routes.py`: Defines API routes for user registration, login, and other features.
  - `models.py`: Defines database models (e.g., User).
  - `config.py`: Configuration settings for the application.
  - `run.py`: Entry point for running the Flask server.

 Frontend (React)
  - src/: Contains the React application.
  - `App.js`: The main component that handles routing between different pages.
  - `components/`: Contains the React components like HomePage, Register, and Login.
![unnamed](https://github.com/user-attachments/assets/41d76e79-06b9-4f84-b449-22773b73eed7)



Usage

Register a New User: Go to /register, enter a username and password, and click Register.
Login: After registration, log in with your credentials at /login.
Dashboard: Access the real-time tracking dashboard (to be developed) after logging in.

Page
https://starrygal222.wixsite.com/j_tracks 

Contributing
Contributions are welcome! Please fork the repository and submit a pull request with your improvements.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Contact
For any inquiries or support, please contact Chioma Ezeuduji at ezeudujichioma@yahoo.com.

