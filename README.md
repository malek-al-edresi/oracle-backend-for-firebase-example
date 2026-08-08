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
     "schema": "your_schema",
     "app_name": "your_app_name",
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

## Screenshots & Analysis

### Application UI

- **Login / Register Screen**
  ![Login Screen](screenshots/Screenshot_login.png)
  *The authentication entry point, ensuring users must verify their identity before accessing the application.*

- **Dashboard & CRUD Operations**
  ![Dashboard](screenshots/Screenshot_20260808_045716.png)
  *The main application interface displaying a green success banner after writing a new document to the Oracle database collection using `fusabase/oracledb`.*

- **Storage Upload**
  ![Storage Upload](screenshots/Screenshot_20260808_045845.png)
  *The lower section of the dashboard highlighting the DBFS object storage feature, allowing secure file uploads.*

### Oracle Backend Console (Fusabase)

- **Project Creation & Management**
  ![Project Setup](screenshots/Screenshot_20260729_015913.png)
  *The BaaS console where the initial Oracle Backend for Firebase project is configured.*

- **Database Collection**
  ![Database Console](screenshots/Screenshot_20260808_045727.png)
  *View of the database collection inside the Fusabase console, verifying the data was successfully persisted by the application.*

- **Storage Console (DBFS)**
  ![Storage Console](screenshots/Screenshot_20260808_045854.png)
  *View of the Storage console confirming that the file has been successfully uploaded and stored in the Oracle Database File System (DBFS).*

- **Authentication Records**
  ![Authentication Console](screenshots/Screenshot_20260808_045939.png)
  *The Authentication console displaying the list of registered users and their sign-in providers, demonstrating successful integration with `fusabase/auth`.*

## Contribution & Maintenance

This repository acts as a foundation for Oracle ACEs, developers, and engineers seeking to bridge modern frontend tools with robust Oracle Backend architectures.

**Happy Coding!**
