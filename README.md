# Dua App

A fully functional Islamic Dua application that allows users to browse and read Duas based on categories and subcategories. Built with React, Node.js, and SQLite3.

---

## Tech Stack

- **Frontend:** React, Tailwind CSS, Next.js (optional upgrade)
- **Backend:** Node.js, Express.js
- **Database:** SQLite3
- **API:** RESTful API with category & dua data fetching
- **Icons:** Lucide React

---

##  Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/dua-app.git
cd dua-app
```

### 2. Backend Setup

```bash
cd backend
npm install
```

- Ensure `dua_main.sqlite3` is inside the `db/` folder.
- Start the backend server:

```bash
npm run dev
```

> Backend runs on: `http://localhost:5000`

### 3. Frontend Setup

```bash
cd frontend
npm install
```

- Run the React development server:

```bash
npm run dev
```

> Frontend runs on: `http://localhost:3000`

---

## API Endpoints

| Method | Endpoint                    | Description                        |
|--------|-----------------------------|------------------------------------|
| GET    | `/api/categories`          | Get all categories                 |
| GET    | `/api/subcategories/:id`   | Get subcategories by category ID   |
| GET    | `/api/duas/:subcategoryId` | Get Duas by subcategory ID         |

---

## Features

- Browse Duas by categories and subcategories
- Clean, modern UI with Tailwind CSS
- Light & Night Mode toggle
- Responsive design
- SQLite3-based fast local database
- Modular code structure
- Optional plan to use React Query (not implemented due to time constraints)

---
