# MediMeet - Doctor Appointment Web App

MediMeet is a full-stack doctor appointment platform built with the MERN stack. It allows patients to discover doctors, book appointments, make online payments, and manage their appointments. Doctors can manage appointments and profiles, while administrators can manage doctors and appointments.

## 🚀 Live Demo

- **Patient Portal:** https://medimeet-frontend-fp2w.onrender.com
- **Doctor / Admin Panel:** https://medimeet-admin-bh7d.onrender.com
- **Backend API:** https://medimeet-syo2.onrender.com

## ✨ Features

### 👤 Patient

- User registration and login
- Browse doctors
- Filter doctors by speciality
- View detailed doctor profiles
- Select appointment date and time
- Book appointments
- Online payment using Razorpay
- View appointment history
- Cancel appointments
- Update personal profile
- Upload profile picture

### 👨‍⚕️ Doctor

- Secure doctor login
- Doctor dashboard
- View appointments
- View patient information
- Manage appointment status
- Complete appointments
- Cancel appointments
- Track earnings from completed paid appointments
- Update doctor profile
- Manage availability

### 🛠️ Admin

- Secure admin login
- Dashboard with platform statistics
- Add doctors
- Edit doctor profiles
- Delete doctors
- View all appointments
- Cancel appointments
- Mark appointments as completed
- View doctor and patient information

## 💳 Payment Integration

MediMeet uses **Razorpay** for online appointment payments.

### Payment Flow

1. Patient selects an appointment.
2. Backend creates a Razorpay order.
3. Patient completes the payment.
4. Backend verifies the Razorpay order.
5. Appointment is marked as paid.
6. Doctor can manage the appointment.

> Razorpay is currently configured in test mode for the deployed application.

## 🛠️ Tech Stack

### Frontend

- React.js
- Tailwind CSS
- Vite
- React Router
- Axios

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt
- Cloudinary

### Payments

- Razorpay

### Deployment

- Render
- MongoDB Atlas
- Cloudinary

## 🔐 Authentication

MediMeet uses **JSON Web Tokens (JWT)** for authentication.

Separate authentication flows are provided for:

- Patients
- Doctors
- Administrators

Passwords are securely hashed using **bcrypt**.

## 📁 Project Structure

```text
MediMeet/
├── frontend/       # Patient-facing React application
├── admin/          # Admin and Doctor dashboard
├── backend/        # Express API and MongoDB integration
└── README.md


⚙️ Local Setup
1. Clone the repository
git clone https://github.com/Pankaj835/MediMeet.git
cd MediMeet
2. Install Backend Dependencies
cd backend
npm install

Create a .env file inside the backend directory:

MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

ADMIN_EMAIL=your_admin_email
ADMIN_PASSWORD=your_admin_password

CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret

RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_secret

CURRENCY=₹

Start the backend:

npm start

Backend:

http://localhost:4000
3. Install Frontend Dependencies

Open a new terminal:

cd frontend
npm install

Create:

frontend/.env

Add:

VITE_BACKEND_URL=http://localhost:4000
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id

Start the frontend:

npm run dev

Frontend:

http://localhost:5173
4. Install Admin / Doctor Panel Dependencies

Open another terminal:

cd admin
npm install

Create:

admin/.env

Add:

VITE_BACKEND_URL=http://localhost:4000

Start the admin/doctor panel:

npm run dev

Admin / Doctor Panel:

http://localhost:5174
🌐 Deployment Architecture

The application is deployed as three services on Render:

                    ┌──────────────────────┐
                    │   Patient Frontend   │
                    │       React/Vite      │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │     Backend API      │
                    │   Node.js/Express    │
                    └──────┬───────┬───────┘
                           │       │
                ┌──────────┘       └──────────┐
                ▼                             ▼
        ┌───────────────┐              ┌──────────────┐
        │ MongoDB Atlas │              │  Cloudinary   │
        │    Database   │              │ Image Storage │
        └───────────────┘              └──────────────┘
                           │
                           ▼
                    ┌──────────────┐
                    │   Razorpay   │
                    │   Payments   │
                    └──────────────┘

                    ┌──────────────────────┐
                    │ Admin / Doctor Panel │
                    │       React/Vite     │
                    └──────────┬───────────┘
                               │
                               ▼
                         Backend API
  
🔒 Environment Variables

Environment files contain sensitive credentials and should never be committed to GitHub.

Backend
MONGODB_URI
JWT_SECRET
ADMIN_EMAIL
ADMIN_PASSWORD
CLOUDINARY_NAME
CLOUDINARY_API_KEY
CLOUDINARY_SECRET_KEY
RAZORPAY_KEY_ID
RAZORPAY_KEY_SECRET
CURRENCY
Frontend
VITE_BACKEND_URL
VITE_RAZORPAY_KEY_ID
Admin / Doctor Panel
VITE_BACKEND_URL
📌 Project Highlights
Full-stack MERN architecture
Role-based authentication for patients, doctors, and administrators
REST API communication between frontend and backend
Appointment scheduling and management
Razorpay payment integration
Cloudinary image management
JWT-based authentication
Responsive React interfaces
Production deployment using Render
MongoDB-based persistent data storage
👨‍💻 Author

Pankaj
