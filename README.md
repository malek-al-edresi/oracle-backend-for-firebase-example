# Oracle Fusabase Web App Example

This is a complete, minimal, production-quality example project demonstrating how to use the **Oracle Backend for Firebase (Fusabase SDK)** in a modern web application. It connects to an Oracle Database via ORDS and provides standard Authentication, Database CRUD operations, and Object Storage.

## Features

- **User Authentication:** Register, login, and logout functionalities using `fusabase/auth`.
- **Database (ORDS):** Insert and retrieve medical notes using `fusabase/oracledb`.
- **Storage:** Upload and retrieve files to Oracle DBFS Object Store using `fusabase/storage`.
- **Clean UI:** Built with HTML, Vanilla JavaScript, and an elegant Glassmorphism CSS aesthetic.

## Tech Stack

- **Fusabase SDK** (`fusabase` npm package)
- **Vite** (for fast local development and bundling)
- **Vanilla JavaScript** (ES Modules)
- **HTML5 & CSS3**

## Project Structure

```bash
.
├── auth.js          # Authentication logic (login/register)
├── db.js            # Database operations (insert/fetch via ORDS)
├── index.html       # Main HTML layout and UI
├── main.js          # Entry point, UI interaction, and Fusabase SDK initialization
├── package.json     # Project dependencies
├── storage.js       # File upload/retrieval logic
├── style.css        # Premium glassmorphism UI styles
└── vite.config.js   # Vite development server configuration
```

## Setup & Installation

1. **Clone or download the project** to your local machine.

2. **Install Dependencies** (Vite + Fusabase SDK):
   ```bash
   npm install
   ```
   *(If you are installing manually in a new project, you can use: `npm install fusabase`)*

3. **Configure the SDK**:
   The configuration is already embedded inside `main.js` using the provided keys:
   ```javascript
   const fusabaseConfig = {
     "schema": "medical_baas",
     "app_name": "myapp",
     "app_type": "WEB",
     // ...
   };
   ```

## How to Run Locally

Run the development server using Vite:
```bash
npm run dev
```

Visit the local URL provided in your terminal (usually `http://localhost:3000` or `http://localhost:5173`) to view and interact with the application.

## Screenshots

*(Replace these placeholders with actual screenshots of your running application before submitting to GitHub/Oracle ACE).*

- **Login / Register Screen**
  ![Login Screen](screenshot/Screenshot_login.png)

- **Dashboard & CRUD Operations**
  ![Dashboard](screenshot/Screenshot_20260808_045716.png)

- **Storage Upload**
  ![Storage Upload](screenshot/Screenshot_20260808_045845.png)

## Contribution & Maintenance

This repository acts as a foundation for Oracle ACEs, developers, and engineers seeking to bridge modern frontend tools with robust Oracle Backend architectures.

**Happy Coding!**
