# 🎵 Spotify Clone (Full Stack Music Streaming App)

A full-featured **Spotify Clone** built with the **MERN stack** and modern frontend tools.  
This application allows users to stream music, browse albums, chat with friends in real time, and manage songs/albums through an admin dashboard.

## 🚀 Live Demo

🔗 **Live App:** https://spotify-clone-cqkf.onrender.com

---

## 🚀 Features

### 👤 Authentication
- Secure user authentication using **Clerk**
- Login / Signup
- Protected routes
- User session management

### 🎶 Music Player
- Play / Pause songs
- Next / Previous track
- Progress bar seeking
- Dynamic song metadata
- Album-based song browsing

### 💬 Real-Time Chat
- Live messaging with users
- Instant updates using **Socket.IO**
- Friends activity panel

### 🛠️ Admin Dashboard
- Add new songs
- Add new albums
- Upload cover images
- Upload audio files
- View app statistics

### ☁️ Cloud Storage
- Song and image upload using **Cloudinary**

### 📱 Responsive UI
- Desktop-friendly Spotify-style layout
- Smooth transitions and animations

---

# 🧰 Tech Stack

## Frontend
- React 19
- TypeScript
- Vite
- Tailwind CSS
- Zustand
- React Router DOM
- Axios
- Radix UI
- Lucide Icons

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Socket.IO
- Clerk Express
- Cloudinary
- Express File Upload

---

# 📂 Project Structure

```bash
Spotify-Clone/
│
├── backend/
│   ├── src/
│   │   ├── controller/
│   │   ├── lib/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── seeds/
│   │   └── index.js
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── layout/
│   │   ├── pages/
│   │   ├── providers/
│   │   ├── stores/
│   │   └── App.tsx
│
├── package.json
└── vercel.json
```

---

# ⚙️ Installation & Setup

## 1. Clone repository

```bash
git clone https://github.com/ayushwaghmare415/Spotify-Clone.git
```

## 2. Go into project folder

```bash
cd Spotify-Clone
```

## 3. Install dependencies

### Root

```bash
npm install
```

### Backend

```bash
cd backend
npm install
```

### Frontend

```bash
cd ../frontend
npm install
```

---

# 🔐 Environment Variables

Create a `.env` file inside backend:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
CLERK_PUBLISHABLE_KEY=your_clerk_key
CLERK_SECRET_KEY=your_clerk_secret
```

---

# ▶️ Run Project

## Start backend

```bash
cd backend
npm run dev
```

## Start frontend

```bash
cd frontend
npm run dev
```

---

# 🌱 Seed Demo Data

```bash
npm run seed:songs
npm run seed:album
```

---

# 📸 Screenshots

Add project screenshots here:

```md
![Home](./frontend/public/screenshot-for-readme.png)
```

---

# 🎯 Key Learnings

This project helped me improve skills in:

- Full Stack Development
- React + TypeScript
- REST API development
- MongoDB database design
- Authentication with Clerk
- Real-time communication with Socket.IO
- File uploads with Cloudinary
- State management using Zustand
- Admin dashboard creation
- Deployment workflows

---

# 👨‍💻 Author

## Ayush Waghmare

GitHub: https://github.com/ayushwaghmare415

---

# ⭐ Support

If you like this project, please **star this repository** ⭐
