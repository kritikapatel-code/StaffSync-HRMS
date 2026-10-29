# StaffSync - Modern Human Resource Management Solution (HRMS)

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Online%20Preview-brightgreen?style=for-the-badge&logo=vercel)](https://your-username.github.io/StaffSync-HRMS/)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github)](https://github.com/your-username/StaffSync-HRMS)
[![MERN Stack](https://img.shields.io/badge/Stack-MERN%20(MongoDB%20%7C%20Express%20%7C%20React%20%7C%20Node)-blue.svg)]()
[![Frontend Framework](https://img.shields.io/badge/Frontend-Bootstrap%205%20%2B%20Bootstrap%20Icons-7952b3.svg)]()
[![Authentication](https://img.shields.io/badge/Auth-JSON%20Web%20Tokens%20(JWT)%20%2B%20Bcrypt-orange.svg)]()
[![License](https://img.shields.io/badge/License-MIT-green.svg)]()

> 📌 **Project Submission & Mentor Review Links**
> - 🌐 **Live Demo URL**: [https://your-username.github.io/StaffSync-HRMS/](https://your-username.github.io/StaffSync-HRMS/)
> - 💻 **GitHub Repository**: [https://github.com/your-username/StaffSync-HRMS](https://github.com/your-username/StaffSync-HRMS)
> - 🔑 **Evaluation Demo Credentials**:
>   - **HR Personnel**: `hr@staffsync.io` / `Password123!`
>   - **Manager**: `manager@staffsync.io` / `Password123!`
>   - **Employee**: `employee@staffsync.io` / `Password123!`

---

**StaffSync** is a modern, enterprise-grade Human Resource Management Solution (HRMS) engineered with the **MERN Stack** (MongoDB, Express.js, React.js, and Node.js) and styled with **Bootstrap 5**. The system digitizes, streamlines, and automates core organizational HR functions through distinct access levels for **HR Personnel**, **Managers**, and **Employees**.

---

## 📑 Table of Contents
1. [Core Features & Role Matrix](#-core-features--role-matrix)
2. [Technology Stack & Skills Demonstrated](#-technology-stack--skills-demonstrated)
3. [System Architecture](#-system-architecture)
4. [Project Directory Layout](#-project-directory-layout)
5. [Getting Started & Installation](#-getting-started--installation)
6. [Demo Accounts & Seed Credentials](#-demo-accounts--seed-credentials)
7. [REST API Endpoints Specification](#-rest-api-endpoints-specification)
8. [Security & Authentication Flow](#-security--authentication-flow)

---

## 👥 Core Features & Role Matrix

The platform implements robust **Role-Based Access Control (RBAC)** ensuring granular permissions across three distinct operational personas:

| Capability / Module | 👑 HR Personnel | 👔 Managers | 💻 Employees |
| :--- | :---: | :---: | :---: |
| **Executive Intelligence Dashboard** | Full Org Analytics | Team & Dept KPIs | Personal Workstation |
| **Employee Directory Management** | Full CRUD & Status | View Team Roster | View Directory |
| **Attendance & Work Hours Tracking** | Company-wide Audit | Department Audit | Daily Clock-in / Out |
| **Leave & Time-Off Approvals** | Universal Review | Dept / Team Review | Submit & Check Balance |
| **Notice Board & Announcements** | Author & Broadcast | Dept Broadcast | Read Official News |
| **Learning & Development (L&D)** | Schedule Programs | Assign & Track Team | Enroll & Progress |
| **Personal Profile & Dossier** | Full Management | Personal Account | Maintain Details |

### 1. 👑 HR Personnel (Human Resources Admin)
- **Employee Directory Management**: Complete CRUD operations for staff members (Add, Edit, View dossier, adjust compensation, department assignment, and status updates).
- **Universal Leave Approvals**: Oversee organizational leave applications with real-time quota deduction and manager commentary.
- **Attendance Oversight**: Monitor daily check-in / check-out logs, punctuality metrics (Present vs Late vs Absent), and work hours.
- **Notice Board Broadcasts**: Publish company-wide announcements, high-priority alerts, policy revisions, and holiday schedules.
- **Executive Analytics**: Live metrics on organizational headcount, department distribution, attendance percentages, and monthly payroll forecasting.

### 2. 👔 Managers
- **Team Roster & Department Metrics**: Real-time snapshot of direct reports, department punctuality rate, and staff availability.
- **Leave Decisioning**: Review, approve, or reject time-off requests submitted by department team members with customized notes.
- **Learning & Development (L&D)**: Schedule targeted skill-enhancement workshops, assign team members, and monitor capacity and completion rates.

### 3. 💻 Employees
- **Self-Service Leave Application**: Apply for Casual, Sick, or Earned leaves with automatic duration calculation, balance checks, and status tracking.
- **Smart Attendance**: Quick 1-click digital clock-in and clock-out with automatic punctuality tagging (`Present` on-time vs `Late` after 09:30 AM).
- **Personal Account Dossier**: Maintain personal contact information, emergency phone, work designation, and password security.
- **Company Announcements**: Access an up-to-date company feed with prioritized news cards and pinned company updates.
- **Training Enrollment**: Browse available technical and leadership courses and register with one click.

---

## 🛠 Technology Stack & Skills Demonstrated

- **Front-End**:
  - **HTML5 & CSS3**: Semantic page structures, custom CSS variables, and fluid responsive design.
  - **Bootstrap 5**: Modern grid system, responsive navigation, cards, modals, and UI utilities.
  - **Bootstrap Icons**: Lightweight SVG icons for intuitive dashboard visual cues.
  - **React.js 18**: Modular components, custom React Hooks (`useState`, `useEffect`, `useContext`), and client-side routing.
  - **React Router DOM v6**: Protected route guards (`ProtectedRoute.jsx`) with RBAC enforcement.
  - **Axios & Asynchronous JavaScript**: Asynchronous HTTP client with automatic request/response JWT interceptors.

- **Back-End**:
  - **Node.js**: Asynchronous event-driven runtime environment.
  - **Express.js**: RESTful API design, controller-service pattern, and middleware architecture.
  - **JSON Web Token (JWT)**: Stateless authentication via cryptographically signed bearer tokens.
  - **Bcrypt.js**: High-entropy password hashing and salted credential security.

- **Database**:
  - **MongoDB & Mongoose ODM**: Strongly typed data schemas for Users, Employees, Attendance, Leaves, Announcements, and Trainings.

---

## 🏗 System Architecture

```
                       +-----------------------------+
                       |    React.js 18 Frontend     |
                       | (Bootstrap 5 + React Router)|
                       +--------------+--------------+
                                      |
                     [Axios HTTP / Bearer JWT Token]
                                      |
                                      v
                       +-----------------------------+
                       |     Node.js / Express API   |
                       |    - authMiddleware (JWT)   |
                       |    - Role-Based Guard (RBAC)|
                       +--------------+--------------+
                                      |
                         [Mongoose ODM Data Access]
                                      |
                                      v
                       +-----------------------------+
                       |       MongoDB Database      |
                       | - Users       - Employees   |
                       | - Attendance  - Leaves      |
                       | - Trainings   - Announce    |
                       +-----------------------------+
```

---

## 📁 Project Directory Layout

```
staffsync/
├── backend/
│   ├── config/
│   │   └── db.js                 # MongoDB connection & diagnostics
│   ├── controllers/
│   │   ├── authController.js         # JWT registration, login, user info
│   │   ├── employeeController.js     # Employee CRUD & directory search
│   │   ├── leaveController.js        # Leave application & approval workflow
│   │   ├── attendanceController.js   # Clock-in/out & attendance reporting
│   │   ├── announcementController.js # Company announcement publishing
│   │   ├── trainingController.js     # L&D program scheduling & enrollments
│   │   ├── managerController.js      # Team overview & manager actions
│   │   └── dashboardController.js    # HR, Manager, and Employee KPI analytics
│   ├── middleware/
│   │   ├── auth.js                   # JWT verification & RBAC authorize guard
│   │   └── errorHandler.js           # Centralized HTTP error handler
│   ├── models/
│   │   ├── User.js                   # User account schema with bcrypt
│   │   ├── Employee.js               # Detailed employee profile schema
│   │   ├── Leave.js                  # Time-off request schema
│   │   ├── Attendance.js             # Daily clock log schema
│   │   ├── Announcement.js           # Notice board news schema
│   │   ├── Training.js               # Training & development course schema
│   │   └── Notification.js           # Real-time alert schema
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── employeeRoutes.js
│   │   ├── leaveRoutes.js
│   │   ├── attendanceRoutes.js
│   │   ├── announcementRoutes.js
│   │   ├── trainingRoutes.js
│   │   └── dashboardRoutes.js
│   ├── seeder/
│   │   └── seed.js                   # Database initialization with seed data
│   ├── .env.example
│   ├── package.json
│   └── server.js                     # Main Express server entry point
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx            # Top bar with user profile & logout
│   │   │   ├── Sidebar.jsx           # Role-filtered navigation sidebar
│   │   │   ├── StatCard.jsx          # Reusable analytics card
│   │   │   └── ProtectedRoute.jsx    # Role-based route authorization guard
│   │   ├── context/
│   │   │   └── AuthContext.jsx       # Global JWT authentication & user state
│   │   ├── pages/
│   │   │   ├── Home.jsx              # Landing page
│   │   │   ├── Login.jsx             # Sign in with 1-click demo credential pills
│   │   │   ├── Register.jsx          # Staff registration page
│   │   │   ├── HRDashboard.jsx       # Executive HR overview & metrics
│   │   │   ├── ManagerDashboard.jsx  # Team KPI & leave decisioning workstation
│   │   │   ├── EmployeeDashboard.jsx # Self-service clock-in & quick leave portal
│   │   │   ├── EmployeesPage.jsx     # Directory with live search & filters
│   │   │   ├── AttendancePage.jsx    # Attendance tracking & log table
│   │   │   ├── LeavePage.jsx         # Leave submission & approval review
│   │   │   ├── AnnouncementsPage.jsx # Company broadcast board
│   │   │   ├── TrainingsPage.jsx     # Learning & Development catalog
│   │   │   └── ProfilePage.jsx       # Personal dossier & password reset
│   │   ├── services/
│   │   │   └── api.js                # Axios instance with JWT interceptor
│   │   ├── App.jsx                   # React Router routing hierarchy
│   │   ├── index.css                 # Custom styling & utility classes
│   │   └── main.jsx                  # React 18 DOM mount point
│   ├── index.html                    # Bootstrap 5 CDN & root template
│   ├── package.json
│   └── vite.config.js
│
├── index.html                        # Standalone portable quick-launch web app
├── app.js                            # Standalone interactive client logic
└── README.md                         # Comprehensive documentation
```

---

## 🚀 Getting Started & Installation

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher)
- [MongoDB](https://www.mongodb.com/) (Local server or MongoDB Atlas URI)

---

### Step 1: Backend Setup
1. Open terminal and navigate to the `backend` folder:
   ```bash
   cd backend
   ```
2. Install npm dependencies:
   ```bash
   npm install
   ```
3. Configure environment variables in `.env`:
   ```ini
   PORT=5000
   NODE_ENV=development
   MONGO_URI=mongodb://localhost:27017/staffsync
   JWT_SECRET=staffsync_super_secure_jwt_secret_token_2026_xyz
   JWT_EXPIRES_IN=7d
   ```
4. Seed demo users, employees, leaves, attendance, and trainings:
   ```bash
   npm run seed
   ```
5. Start the backend REST API:
   ```bash
   npm run dev
   # Server runs at http://localhost:5000
   ```

---

### Step 2: Frontend Setup
1. In a new terminal window, navigate to the `frontend` folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   # Access application at http://localhost:5173
   ```

---

## 🔑 Demo Accounts & Seed Credentials

The application provides pre-configured role accounts. On the Login page, you can either click the **1-Click Demo Buttons** or enter credentials manually:

| Role | Email Address | Password | Name | Department |
| :--- | :--- | :--- | :--- | :--- |
| **👑 HR Admin** | `hr@staffsync.io` | `Password123!` | Sarah Connor | Human Resources |
| **👔 Manager** | `manager@staffsync.io` | `Password123!` | Marcus Vance | Engineering |
| **💻 Employee** | `employee@staffsync.io` | `Password123!` | Elena Rostova | Engineering |

---

## 📡 REST API Endpoints Specification

### Authentication & Users (`/api/auth`)
| Method | Endpoint | Access | Description |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/auth/register` | Public | Register new user account |
| `POST` | `/api/auth/login` | Public | Authenticate user & return JWT |
| `GET` | `/api/auth/me` | Authenticated | Retrieve current user profile |
| `PUT` | `/api/auth/updatepassword` | Authenticated | Update user password |

### Employees Directory (`/api/employees`)
| Method | Endpoint | Access | Description |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/employees` | Authenticated | List employees with search, filter & pagination |
| `GET` | `/api/employees/:id` | Authenticated | Retrieve single employee record |
| `POST` | `/api/employees` | HR Only | Create a new employee profile |
| `PUT` | `/api/employees/:id` | HR Only | Update employee record |
| `DELETE` | `/api/employees/:id` | HR Only | Deactivate/remove employee |

### Attendance (`/api/attendance`)
| Method | Endpoint | Access | Description |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/attendance/clock-in` | Authenticated | Clock in for current day (records timestamp & status) |
| `POST` | `/api/attendance/clock-out` | Authenticated | Clock out & calculate total work hours |
| `GET` | `/api/attendance/my` | Authenticated | Retrieve personal attendance history |
| `GET` | `/api/attendance` | Manager / HR | Company-wide attendance logs by date & dept |
| `GET` | `/api/attendance/today-summary` | Manager / HR | Aggregated attendance breakdown for today |

### Leave Management (`/api/leaves`)
| Method | Endpoint | Access | Description |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/leaves` | Authenticated | Submit a new leave application |
| `GET` | `/api/leaves/my` | Authenticated | Retrieve current employee's leaves & balances |
| `GET` | `/api/leaves` | Manager / HR | Retrieve pending and reviewed leaves |
| `PUT` | `/api/leaves/:id/review` | Manager / HR | Approve or reject a leave request |

### Announcements (`/api/announcements`)
| Method | Endpoint | Access | Description |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/announcements` | Authenticated | Retrieve all broadcast announcements |
| `POST` | `/api/announcements` | Manager / HR | Post new announcement with priority & category |
| `DELETE` | `/api/announcements/:id` | HR Only | Remove an announcement |

### Training & Development (`/api/trainings`)
| Method | Endpoint | Access | Description |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/trainings` | Authenticated | List upcoming and ongoing training programs |
| `POST` | `/api/trainings` | Manager / HR | Create a new training program |
| `POST` | `/api/trainings/:id/enroll` | Authenticated | Enroll current employee into training |
| `POST` | `/api/trainings/:id/withdraw` | Authenticated | Withdraw from enrolled training |

### Dashboards (`/api/dashboard`)
| Method | Endpoint | Access | Description |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/dashboard/hr` | HR Only | Executive metrics (headcount, payroll, attendance) |
| `GET` | `/api/dashboard/manager` | Manager Only | Team attendance, pending team leaves, courses |
| `GET` | `/api/dashboard/employee` | Employee Only | Personal balances, clock status, enrolled trainings |

---

## 🔒 Security & Authentication Flow

1. **Password Encryption**: User passwords are encrypted with `bcryptjs` using a salt work factor of 10 prior to persistence.
2. **JWT Issuance**: Upon successful credential verification, a JSON Web Token is signed using `jsonwebtoken` with configurable expiration.
3. **Bearer Token Transmission**: The client stores the token in `localStorage` and automatically injects it into every request using Axios interceptors (`Authorization: Bearer <token>`).
4. **RBAC Enforcement**: The backend middleware validates both the token integrity and checks the user's role against allowed endpoints using `authorize('hr', 'manager')`. Frontend routes are likewise guarded by `ProtectedRoute.jsx`.

---

## 💡 Portability Note
StaffSync includes an interactive standalone launcher (`index.html`) in the project root that runs directly in any modern web browser with pre-loaded demo states and zero external server dependencies, making it ideal for immediate evaluation.
