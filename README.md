# Task Management Web Application

This project is a full-stack web application for managing tasks. It allows users to create, view, update, and delete tasks. The application is built using React for the front-end and Node.js (Express) for the back-end.

## Features

- View a list of tasks.

- Add new tasks with a title and optional description.

- Edit task details such as title, description, and status (completed or pending).

- Delete tasks.

- Responsive UI for both desktop and mobile devices.

## Technologies Used

- Front-End: React, CSS (with optional Material-UI or Bootstrap for styling).

- Back-End: Node.js, Express.js.

- Database: In-memory array for simplicity (replaceable with MongoDB for production).

## Getting Started

### Prerequisites

- Node.js and npm installed on your system.

### Installation

- mkdir task-manager
- cd task-manager

### Backend (Node.js)
1. Install Dependencies:
 
- Navigate to the backend/ folder:
  - **cd backend**
- Initialize a Node.js project:
  - **npm init -y**
- Install required packages:
  - **npm install express cors body-parser**

### Frontend (React)
1. Set Up React App:

- Navigate to the frontend/ folder:

  - **cd ../frontend**

- Create a new React app:

   - **npx create-react-app** 

- Install Axios:

   - **npm install axios**


## Running the Application

- The backend server runs on http://localhost:5000.

- The frontend React application runs on http://localhost:3000.

## API Endpoints

### Task Routes

1. GET /tasks

   - Fetch all tasks.

2. POST /tasks

   - Add a new task.

3. Request Body:

   - {"title": "Task Title","description": "Optional description"}

4. PUT /tasks/:id

   - Update an existing task.

5. Request Body:

   - {"title": "Updated Title", "description": "Updated description","status": true}

6. DELETE /tasks/:id

   - Delete a task.

## Front-End Components

### TaskList.js

 - Displays all tasks with options to edit or delete.

### AddTaskForm.js

- A form for adding new tasks.

- Validates that the title is required.

### EditTaskForm.js

- A form for editing existing tasks.

### App.js

- Manages state and renders components like **TaskList**, **AddTaskForm**, and **EditTaskForm.**

## Responsive Design

The application uses responsive CSS to ensure a user-friendly experience on both desktop and mobile devices. Consider using frameworks like Material-UI or Bootstrap for better styling.



## Learn More

To learn more about React, Node.js, or Express, check out the following resources:

[React Documentation](https://react.dev/learn)

[Node.js Documentation](https://nodejs.org/docs/latest/api/)

[Express Documentation](https://expressjs.com/)
