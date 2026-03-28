# YouTube Clone Project

This is a full stack YouTube Clone project built using MERN Stack.

Project Overview

The project allows users to view videos, search videos, like and dislike videos, and manage comments.
Users can sign up and log in using JWT authentication.

Tech Stack

Frontend
React
React Router DOM
Axios
CSS
React Icons

Backend
Node.js
Express.js
MongoDB
Mongoose
JWT
Bcrypt

Features

User authentication with signup and login
JWT token based authorization
Responsive navbar and sidebar
Home page video listing
Video player page
Search functionality
Like and dislike buttons
Add comment
Edit comment
Delete comment
Username display after login

Folder Structure

Frontend

src/
  API/
    axios.js
    comment.api.js
    user.api.js
    video.api.js
  Components/
    Navbar.jsx
    Sidebar.jsx
  Pages/
    Home.jsx
    Login.jsx
    VideoPage.jsx
  App.jsx

Backend

controllers/
  user.controller.js
  comment.controller.js
  video.controller.js
  channel.controller.js

models/
  User.model.js
  Comment.model.js
  Video.model.js

routes/
  comment.route.js
  user.route.js
  video.route.js
  channel.route.js

middleware/
  auth.middleware.js

Installation

Frontend

npm install
npm run dev

Backend

npm install
npm start

API Endpoints

POST /api/user/signup
POST /api/user/login
GET /api/comment/:videoId
POST /api/comment
PUT /api/comment/:commentId
DELETE /api/comment/:commentId

GitHub Repository

Paste your GitHub repository link here

Author: Namita Kumari