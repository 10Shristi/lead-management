# Lead Management Dashboard

A mini CRM-style Lead Management Dashboard built using a full-stack approach.  
The application allows users to manage leads, view analytics, and access detailed lead information with a clean, responsive UI.

---

## Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- React Router

### Backend
- Node.js
- Express.js
- MongoDB (MongoDB Atlas – Free Tier)

---

## Features

- User authentication (basic signup & login)
- Lead listing with:
  - Server-side search
  - Filtering by stage
  - Pagination
- Lead details view
- Analytics dashboard:
  - Total leads
  - Converted leads
  - Leads grouped by stage
- Mobile-responsive UI
- Secure password storage using bcrypt

---

## Authentication

The application uses a **basic email and password authentication system**, which satisfies the requirement of a simple login screen.

### How authentication works:
- Users can sign up using an email and password
- Credentials are stored in MongoDB
- Passwords are securely hashed using bcrypt
- On successful login, users can access the dashboard and leads

> No external authentication providers (OAuth, Google login, etc.) are used.

---

## API Endpoints

### Leads
- `GET /api/leads`
  - Supports search, filter, sort, and pagination
- `GET /api/leads/:id`
  - Fetch lead details
- `GET /api/leads/analytics`
  - Fetch analytics metrics

### Authentication
- `POST /api/auth/signup`
- `POST /api/auth/login`

---

## Database & Seeding

- MongoDB Atlas (Free Tier) is used as the database
- A seed script is included to populate the database with dummy leads

### Seeding Command
```bash
node seed.js

## Deployed Application

- **Frontend:** https://lead-management-rosy.vercel.app
- **Backend:** https://lead-backend-mnjs.onrender.com
