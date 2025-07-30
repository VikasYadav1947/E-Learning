 🎓 E-Learning Platform

A full-stack e-learning platform where educators can publish courses and students can purchase and learn online.

## 🚀 Tech Stack

### Frontend
- **React** (with Hooks and React Router)
- **Axios** for API requests
- **Tailwind CSS** for styling

### Backend
- **Node.js** with **Express.js**
- **MongoDB** with **Mongoose**
- **Clerk** for authentication (OAuth & JWT)
- **Stripe** for payment gateway

## 📁 Folder Structure:

```bash
📦 e-learning-platform:
├── client/              # React frontend
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/       # Route pages (Home, Course, Dashboard etc.)
│   │   ├── api/         # Axios instances & services
│   │   └── App.jsx
│   └── public/
├── server/              # Express backend
│   ├── controllers/     # Route handlers
│   ├── models/          # Mongoose schemas (User, Course, Purchase)
│   ├── routes/          # API routes (auth, courses, payment)
│   ├── middlewares/
│   └── app.js
├── .env
├── README.md
└── package.json


🔑 Features-->
👨‍🏫 Educators::
Create & manage courses
Add course content, pricing, and publish status

👨‍🎓 Students::
Sign up / Log in using Clerk
Browse and purchase courses via Stripe
Track enrolled courses

💳 Payments::
Secure checkout via Stripe Checkout Session
Webhooks update course access post payment

