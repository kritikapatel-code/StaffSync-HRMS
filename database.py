"""
StaffSync - Modern Human Resource Management System
Database initialization and helper functions for SQLite
"""

import os
import sqlite3
from datetime import datetime, date

# Absolute path to the database file in the project folder
DB_PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), "staffsync.db")


def get_db_connection():
    """Establish and return a connection to the SQLite database with Row factory."""
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn


def init_db():
    """Create database tables and seed initial realistic data if empty."""
    conn = get_db_connection()
    cursor = conn.cursor()

    # 1. Departments Table
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS departments (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT UNIQUE NOT NULL,
            manager TEXT,
            budget INTEGER
        )
    """)

    # 2. Employees Table
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS employees (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT UNIQUE NOT NULL,
            role TEXT NOT NULL,
            department TEXT NOT NULL,
            status TEXT NOT NULL DEFAULT 'Active',
            join_date TEXT NOT NULL,
            phone TEXT,
            salary INTEGER NOT NULL,
            avatar_initials TEXT
        )
    """)

    # 3. Attendance Table
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS attendance (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            employee_id INTEGER NOT NULL,
            employee_name TEXT NOT NULL,
            date TEXT NOT NULL,
            status TEXT NOT NULL,
            check_in TEXT,
            check_out TEXT,
            FOREIGN KEY (employee_id) REFERENCES employees(id)
        )
    """)

    # 4. Leave Requests Table
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS leave_requests (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            employee_name TEXT NOT NULL,
            department TEXT NOT NULL,
            leave_type TEXT NOT NULL,
            start_date TEXT NOT NULL,
            end_date TEXT NOT NULL,
            days INTEGER NOT NULL,
            reason TEXT,
            status TEXT NOT NULL DEFAULT 'Pending',
            applied_date TEXT NOT NULL
        )
    """)

    # 5. Activity Logs Table
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS activity_logs (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            description TEXT NOT NULL,
            activity_type TEXT NOT NULL,
            time_ago TEXT NOT NULL,
            icon TEXT NOT NULL,
            badge_color TEXT NOT NULL
        )
    """)

    # Check each table independently and seed if empty
    cursor.execute("SELECT COUNT(*) FROM departments")
    if cursor.fetchone()[0] == 0:
        seed_departments(cursor)

    cursor.execute("SELECT COUNT(*) FROM employees")
    if cursor.fetchone()[0] == 0:
        seed_employees(cursor)

    cursor.execute("SELECT COUNT(*) FROM attendance")
    if cursor.fetchone()[0] == 0:
        seed_attendance(cursor)

    cursor.execute("SELECT COUNT(*) FROM leave_requests")
    if cursor.fetchone()[0] == 0:
        seed_leaves(cursor)

    cursor.execute("SELECT COUNT(*) FROM activity_logs")
    if cursor.fetchone()[0] == 0:
        seed_activities(cursor)

    conn.commit()
    conn.close()


def seed_departments(cursor):
    departments = [
        ("Engineering", "Elena Rostova", 1850000),
        ("Human Resources", "David Vance", 420000),
        ("Marketing", "Priya Nair", 680000),
        ("Sales", "Marcus Sterling", 950000),
        ("Product Design", "Aria Takahashi", 540000),
        ("Finance", "James Wilson", 620000),
    ]
    cursor.executemany(
        "INSERT OR IGNORE INTO departments (name, manager, budget) VALUES (?, ?, ?)",
        departments
    )


def seed_employees(cursor):
    employees = [
        ("Elena Rostova", "elena.r@staffsync.io", "VP of Engineering", "Engineering", "Active", "2022-03-15", "+1 (555) 234-5678", 145000, "ER"),
        ("David Vance", "david.v@staffsync.io", "HR Director", "Human Resources", "Active", "2021-08-01", "+1 (555) 345-6789", 115000, "DV"),
        ("Priya Nair", "priya.n@staffsync.io", "Marketing Head", "Marketing", "Active", "2022-01-10", "+1 (555) 456-7890", 110000, "PN"),
        ("Marcus Sterling", "marcus.s@staffsync.io", "Sales Director", "Sales", "Active", "2020-11-20", "+1 (555) 567-8901", 125000, "MS"),
        ("Aria Takahashi", "aria.t@staffsync.io", "Lead UX Designer", "Product Design", "Active", "2023-02-14", "+1 (555) 678-9012", 108000, "AT"),
        ("James Wilson", "james.w@staffsync.io", "Chief Financial Officer", "Finance", "Active", "2021-05-12", "+1 (555) 789-0123", 140000, "JW"),
        ("Liam O'Connor", "liam.o@staffsync.io", "Full Stack Developer", "Engineering", "Active", "2023-06-01", "+1 (555) 890-1234", 95000, "LO"),
        ("Sophia Chen", "sophia.c@staffsync.io", "Frontend Engineer", "Engineering", "Active", "2023-09-15", "+1 (555) 901-2345", 92000, "SC"),
        ("Noah Miller", "noah.m@staffsync.io", "DevOps Engineer", "Engineering", "Active", "2022-10-05", "+1 (555) 012-3456", 102000, "NM"),
        ("Amara Okafor", "amara.o@staffsync.io", "HR Specialist", "Human Resources", "Active", "2024-01-08", "+1 (555) 123-4567", 68000, "AO"),
        ("Lucas Silva", "lucas.s@staffsync.io", "SEO & Growth Strategist", "Marketing", "Active", "2023-11-01", "+1 (555) 234-9876", 74000, "LS"),
        ("Hannah Abbott", "hannah.a@staffsync.io", "Account Executive", "Sales", "Active", "2024-02-15", "+1 (555) 345-8765", 72000, "HA"),
        ("Carlos Gomez", "carlos.g@staffsync.io", "UI Designer", "Product Design", "Active", "2023-07-22", "+1 (555) 456-7654", 82000, "CG"),
        ("Zoe Martin", "zoe.m@staffsync.io", "Financial Analyst", "Finance", "Active", "2023-04-18", "+1 (555) 567-6543", 85000, "ZM"),
        ("Kavita Rao", "kavita.r@staffsync.io", "QA Automation Engineer", "Engineering", "Active", "2024-03-01", "+1 (555) 678-5432", 88000, "KR"),
        ("Benjamin Wright", "benjamin.w@staffsync.io", "Sales Associate", "Sales", "Active", "2024-04-10", "+1 (555) 789-4321", 60000, "BW"),
    ]
    cursor.executemany(
        """INSERT OR IGNORE INTO employees 
        (name, email, role, department, status, join_date, phone, salary, avatar_initials) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)""",
        employees
    )


def seed_attendance(cursor):
    today_str = date.today().isoformat()
    attendance_records = [
        (1, "Elena Rostova", today_str, "Present", "08:45 AM", "05:15 PM"),
        (2, "David Vance", today_str, "Present", "08:55 AM", "05:00 PM"),
        (3, "Priya Nair", today_str, "Present", "09:02 AM", "05:30 PM"),
        (4, "Marcus Sterling", today_str, "Present", "09:10 AM", "06:00 PM"),
        (5, "Aria Takahashi", today_str, "Present", "08:50 AM", "05:20 PM"),
        (6, "James Wilson", today_str, "Present", "08:30 AM", "05:00 PM"),
        (7, "Liam O'Connor", today_str, "Present", "09:15 AM", "05:45 PM"),
        (8, "Sophia Chen", today_str, "Present", "09:00 AM", "05:30 PM"),
        (9, "Noah Miller", today_str, "Absent", "-", "-"),
        (10, "Amara Okafor", today_str, "Present", "08:58 AM", "05:05 PM"),
        (11, "Lucas Silva", today_str, "Present", "09:20 AM", "05:50 PM"),
        (12, "Hannah Abbott", today_str, "Present", "09:05 AM", "05:15 PM"),
        (13, "Carlos Gomez", today_str, "Absent", "-", "-"),
        (14, "Zoe Martin", today_str, "Present", "08:40 AM", "05:10 PM"),
        (15, "Kavita Rao", today_str, "Present", "09:12 AM", "05:40 PM"),
        (16, "Benjamin Wright", today_str, "On Leave", "-", "-"),
    ]
    cursor.executemany(
        """INSERT INTO attendance 
        (employee_id, employee_name, date, status, check_in, check_out) 
        VALUES (?, ?, ?, ?, ?, ?)""",
        attendance_records
    )


def seed_leaves(cursor):
    leave_requests = [
        ("Sophia Chen", "Engineering", "Sick Leave", "2026-10-30", "2026-10-31", 2, "Seasonal flu recovery", "Pending", "2026-10-28"),
        ("Carlos Gomez", "Product Design", "Annual Leave", "2026-11-04", "2026-11-08", 5, "Family vacation travel", "Pending", "2026-10-27"),
        ("Hannah Abbott", "Sales", "Personal Leave", "2026-11-02", "2026-11-03", 2, "Relocation & personal matters", "Pending", "2026-10-28"),
        ("Benjamin Wright", "Sales", "Casual Leave", "2026-10-28", "2026-10-28", 1, "Doctor appointment", "Approved", "2026-10-26"),
    ]
    cursor.executemany(
        """INSERT INTO leave_requests 
        (employee_name, department, leave_type, start_date, end_date, days, reason, status, applied_date) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)""",
        leave_requests
    )


def seed_activities(cursor):
    activity_logs = [
        ("Leave Request Submitted", "Sophia Chen applied for 2 days Sick Leave", "leave", "15 minutes ago", "calendar", "purple"),
        ("Attendance Marked", "Kavita Rao clocked in at 09:12 AM", "attendance", "42 minutes ago", "check-circle", "navy"),
        ("New Staff Onboarded", "Benjamin Wright joined as Sales Associate", "employee", "2 hours ago", "user-plus", "purple"),
        ("Leave Approved", "Benjamin Wright's Casual Leave request was approved", "leave", "Yesterday", "check", "navy"),
        ("Department Review", "Q4 performance milestone updated for Engineering", "department", "2 days ago", "briefcase", "navy"),
    ]
    cursor.executemany(
        """INSERT INTO activity_logs 
        (title, description, activity_type, time_ago, icon, badge_color) 
        VALUES (?, ?, ?, ?, ?, ?)""",
        activity_logs
    )


def get_dashboard_data():
    """Retrieve all consolidated metrics and records required by the dashboard."""
    conn = get_db_connection()
    cursor = conn.cursor()

    # 1. Total Employees
    cursor.execute("SELECT COUNT(*) FROM employees WHERE status = 'Active'")
    total_employees = cursor.fetchone()[0]

    # 2. Today's Attendance Counts
    today_str = date.today().isoformat()
    cursor.execute("SELECT COUNT(*) FROM attendance WHERE date = ? AND status = 'Present'", (today_str,))
    present_today = cursor.fetchone()[0]

    cursor.execute("SELECT COUNT(*) FROM attendance WHERE date = ? AND status = 'Absent'", (today_str,))
    absent_today = cursor.fetchone()[0]

    # If no attendance record for today yet (e.g. fresh date), provide fallback from latest attendance date
    if present_today == 0 and absent_today == 0:
        cursor.execute("SELECT MAX(date) FROM attendance")
        latest_date = cursor.fetchone()[0]
        if latest_date:
            cursor.execute("SELECT COUNT(*) FROM attendance WHERE date = ? AND status = 'Present'", (latest_date,))
            present_today = cursor.fetchone()[0]
            cursor.execute("SELECT COUNT(*) FROM attendance WHERE date = ? AND status = 'Absent'", (latest_date,))
            absent_today = cursor.fetchone()[0]

    # 3. Pending Leave Requests
    cursor.execute("SELECT COUNT(*) FROM leave_requests WHERE status = 'Pending'")
    pending_leaves = cursor.fetchone()[0]

    # 4. Department breakdown (for the Chart)
    cursor.execute("""
        SELECT department, COUNT(*) as count 
        FROM employees 
        WHERE status = 'Active' 
        GROUP BY department 
        ORDER BY count DESC
    """)
    dept_rows = cursor.fetchall()
    departments_chart = {
        "labels": [row["department"] for row in dept_rows],
        "data": [row["count"] for row in dept_rows]
    }

    # 5. Recent Activity Logs
    cursor.execute("SELECT * FROM activity_logs ORDER BY id DESC LIMIT 5")
    activities = [dict(row) for row in cursor.fetchall()]

    # 6. Recent Pending Leaves for Quick Glance
    cursor.execute("SELECT * FROM leave_requests WHERE status = 'Pending' ORDER BY id DESC LIMIT 3")
    recent_leaves = [dict(row) for row in cursor.fetchall()]

    conn.close()

    return {
        "total_employees": total_employees,
        "present_today": present_today,
        "absent_today": absent_today,
        "pending_leaves": pending_leaves,
        "department_chart": departments_chart,
        "recent_activities": activities,
        "recent_leaves": recent_leaves,
    }
