# Habit Tracker Application

## Overview

The Habit Tracker Application allows users to manage, track, and complete daily habits in a responsive and user-friendly interface. Users can add new habits, monitor their progress, receive notifications, and set personal goals or motivational messages. Admin users have additional controls for managing users and habit templates.

## Features

### Frontend
1. **Dashboard**: Displays daily habits, progress, streak counts, and motivational messages.
2. **Habit Management**: Users can add new habits with details like habit name, goal, start date, and frequency (daily, weekly, etc.).
3. **Habit Tracking**: Users can mark habits as complete, view streaks, and track weekly or monthly progress.
4. **Profile Management**: Users can edit their profiles, set personal goals, and manage motivational messages.
5. **Notification Panel**: Displays reminders for habits that are pending or due.
6. **Motivational Messages**: Users can set motivational messages that appear upon habit completion.
7. **Responsive Design**: The application is built mobile-first using TailwindCSS, ensuring usability across all devices.

### Backend
1. **User Authentication**: Secure login and registration using JWT-based authentication.
2. **Habit Management**: CRUD API endpoints for managing user habits (create, update, delete, view).
3. **Habit Tracking**: Track streaks, daily progress, and frequency settings for each habit.
4. **Reminders & Notifications**: A daily notification scheduler sends reminders for pending habits using cron jobs.
5. **Admin Controls**:
    - Admins can view all users and their habit completion stats.
    - Admins can create and manage habit templates for users to adopt.

## Technologies

### Frontend:
- **React.js**
- **TailwindCSS** for responsive design
- **Axios** for API requests

### Backend:
- **Node.js** with **Express.js**
- **MongoDB** for database
- **JWT** for user authentication
- **Mongoose** for schema definition
- **Cron jobs** for reminders/notifications

## Getting Started

### Prerequisites
- Node.js (v14.x or later)
- MongoDB
- Git

### Some API testing image 
![Screenshot 2024-10-17 224323](https://github.com/user-attachments/assets/9ed6da0e-fbd8-4224-88fb-5d983ef470e8)
![Screenshot 2024-10-17 225007](https://github.com/user-attachments/assets/4e385b81-664e-4c54-abd9-273589668ac8)
![Screenshot 2024-10-17 225338](https://github.com/user-attachments/assets/6e64a700-2460-41e0-94f7-46c23ea4ebd5)
![Screenshot 2024-10-17 232424](https://github.com/user-attachments/assets/dcb2b5d2-ae3a-4f39-a5b6-ca610fa24aae)
![Screenshot 2024-10-17 232553](https://github.com/user-attachments/assets/51d6601b-9c95-4856-8f83-46d2a1db6655)
![Screenshot 2024-10-17 232701](https://github.com/user-attachments/assets/0ae36f5f-d654-4eae-861e-b0072a76e0be)
![Screenshot 2024-10-18 001911](https://github.com/user-attachments/assets/aa2d63d4-41a3-4b38-9ebc-1a4115eb565c)
![Screenshot 2024-10-18 001954](https://github.com/user-attachments/assets/acaa2df7-41cf-4e6b-9d51-1ce4548fc356)
![Screenshot 2024-10-18 002136](https://github.com/user-attachments/assets/4347cf81-dae6-44fe-b484-7ffa64ac49b7)
![Screenshot 2024-10-18 003355](https://github.com/user-attachments/assets/d87d7154-684c-49bc-bc60-1ac98807ba04)


1. Clone the repository:
   
   git clone https://github.com/Priyanshu727/habit-tracker.git
   cd habit-tracker/frontend
   
## API Endpoints
POST /api/auth/register: User registration
POST /api/auth/login: User login
GET /api/habits: Get all habits for the authenticated user
POST /api/habits: Create a new habit
PUT /api/habits/
## Update an existing habit
DELETE /api/habits/
## Delete a habit
GET /api/admin/users: (Admin) View all users
POST /api/admin/habit-templates: (Admin) Create a habit template
