"""
StaffSync - Modern Human Resource Management System
Flask Backend Application
"""

import os
from datetime import datetime
from flask import Flask, render_template, jsonify, request, redirect, url_for
import database

# Initialize the Flask application
app = Flask(__name__, template_folder="templates", static_folder="static")
app.config["SECRET_KEY"] = "staffsync-secret-key-2026"

# Ensure SQLite database and initial seed data are initialized
database.init_db()


@app.route("/")
@app.route("/dashboard")
def dashboard():
    """
    Main HR Dashboard route.
    Gathers employee stats, attendance, department distribution,
    and recent activity feed from SQLite database.
    """
    dashboard_data = database.get_dashboard_data()

    # Determine dynamic greeting based on current time
    hour = datetime.now().hour
    if hour < 12:
        greeting = "Good morning"
    elif hour < 17:
        greeting = "Good afternoon"
    else:
        greeting = "Good evening"

    today_formatted = datetime.now().strftime("%A, %B %d, %Y")

    return render_template(
        "dashboard.html",
        active_page="dashboard",
        greeting=greeting,
        today_formatted=today_formatted,
        total_employees=dashboard_data["total_employees"],
        present_today=dashboard_data["present_today"],
        absent_today=dashboard_data["absent_today"],
        pending_leaves=dashboard_data["pending_leaves"],
        department_chart=dashboard_data["department_chart"],
        recent_activities=dashboard_data["recent_activities"],
        recent_leaves=dashboard_data["recent_leaves"],
    )


@app.route("/api/dashboard-data")
def api_dashboard_data():
    """
    REST API endpoint that returns current dashboard metrics as JSON.
    This enables dynamic frontend refreshes and Chart.js integration.
    """
    data = database.get_dashboard_data()
    return jsonify(data)


# Placeholder routes for upcoming modules (Employees, Attendance, Leaves, Departments)
@app.route("/employees")
def employees():
    return render_template(
        "placeholder.html",
        page_title="Employees Directory",
        active_page="employees",
        module_name="Employee Directory & Profiles",
        description="Here you will be able to search, filter, view employee profiles, and onboard new team members."
    )


@app.route("/attendance")
def attendance():
    return render_template(
        "placeholder.html",
        page_title="Attendance Tracking",
        active_page="attendance",
        module_name="Smart Attendance & Time Tracker",
        description="Track daily check-ins, check-outs, shift logs, and attendance percentages across departments."
    )


@app.route("/leaves")
def leaves():
    return render_template(
        "placeholder.html",
        page_title="Leave Management",
        active_page="leaves",
        module_name="Leave & PTO Management",
        description="Review time-off balances, approve or decline pending leave requests, and see absence calendars."
    )


@app.route("/departments")
def departments():
    return render_template(
        "placeholder.html",
        page_title="Departments",
        active_page="departments",
        module_name="Department Structure & Budgets",
        description="Manage organizational departments, assign team leads, and monitor departmental headcount allocations."
    )


if __name__ == "__main__":
    # In development mode, auto-reloading is enabled
    print("==================================================")
    print("🚀 StaffSync HRMS Server is starting...")
    print("👉 Access the HR Dashboard at: http://127.0.0.1:5000")
    print("==================================================")
    app.run(host="127.0.0.1", port=5000, debug=True)
