"""
StaffSync - Modern Human Resources Management System
Lightweight Python Backend with SQLite Persistence & REST API
"""

import json
import os
import sqlite3
import sys
from http.server import HTTPServer, SimpleHTTPRequestHandler
from urllib.parse import parse_qs, urlparse

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8000
DB_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)), "staffsync.db")


def init_db():
    conn = sqlite3.connect(DB_FILE)
    c = conn.cursor()

    # Employees Table
    c.execute(
        """
    CREATE TABLE IF NOT EXISTS employees (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        role TEXT NOT NULL,
        department TEXT NOT NULL,
        type TEXT NOT NULL,
        status TEXT NOT NULL,
        salary INTEGER NOT NULL,
        startDate TEXT NOT NULL,
        location TEXT NOT NULL,
        avatar TEXT,
        phone TEXT
    )
    """
    )

    # Leave Requests Table
    c.execute(
        """
    CREATE TABLE IF NOT EXISTS leaves (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        employeeName TEXT NOT NULL,
        role TEXT NOT NULL,
        type TEXT NOT NULL,
        startDate TEXT NOT NULL,
        endDate TEXT NOT NULL,
        days INTEGER NOT NULL,
        reason TEXT,
        status TEXT NOT NULL,
        appliedOn TEXT NOT NULL
    )
    """
    )

    # Shifts Table
    c.execute(
        """
    CREATE TABLE IF NOT EXISTS shifts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        employeeName TEXT NOT NULL,
        role TEXT NOT NULL,
        department TEXT NOT NULL,
        day TEXT NOT NULL,
        shiftTime TEXT NOT NULL,
        status TEXT NOT NULL
    )
    """
    )

    # Payroll History Table
    c.execute(
        """
    CREATE TABLE IF NOT EXISTS payroll (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        cycle TEXT NOT NULL,
        payDate TEXT NOT NULL,
        employeesCount INTEGER NOT NULL,
        totalAmount INTEGER NOT NULL,
        status TEXT NOT NULL
    )
    """
    )

    # Seed initial data if employees table is empty
    c.execute("SELECT COUNT(*) FROM employees")
    if c.fetchone()[0] == 0:
        seed_employees = [
            (
                "Elena Rostova",
                "elena.rostova@staffsync.io",
                "VP of Engineering",
                "Engineering",
                "Full-Time",
                "Active",
                145000,
                "2022-03-15",
                "San Francisco, CA",
                "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
                "+1 (555) 019-2831",
            ),
            (
                "Marcus Vance",
                "marcus.v@staffsync.io",
                "Lead Product Designer",
                "Product",
                "Full-Time",
                "Active",
                120000,
                "2023-01-10",
                "New York, NY",
                "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
                "+1 (555) 014-9923",
            ),
            (
                "Sarah Chen",
                "sarah.chen@staffsync.io",
                "Senior Full Stack Engineer",
                "Engineering",
                "Full-Time",
                "Active",
                130000,
                "2023-05-18",
                "Austin, TX",
                "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
                "+1 (555) 012-4411",
            ),
            (
                "David Kim",
                "david.k@staffsync.io",
                "HR Operations Specialist",
                "Human Resources",
                "Full-Time",
                "Active",
                82000,
                "2021-11-01",
                "Chicago, IL",
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
                "+1 (555) 017-8832",
            ),
            (
                "Amina Al-Mansoor",
                "amina.m@staffsync.io",
                "Talent Acquisition Lead",
                "Human Resources",
                "Full-Time",
                "Active",
                95000,
                "2022-07-22",
                "Seattle, WA",
                "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=150&auto=format&fit=crop&q=80",
                "+1 (555) 019-6612",
            ),
            (
                "Liam O'Connor",
                "liam.oc@staffsync.io",
                "DevOps & Security Lead",
                "Operations",
                "Full-Time",
                "Active",
                135000,
                "2022-09-01",
                "Boston, MA",
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
                "+1 (555) 018-3291",
            ),
            (
                "Sofia Rodriguez",
                "sofia.r@staffsync.io",
                "Marketing Director",
                "Marketing",
                "Full-Time",
                "On Leave",
                115000,
                "2023-02-14",
                "Miami, FL",
                "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
                "+1 (555) 016-5544",
            ),
            (
                "Alexander Wright",
                "alex.wright@staffsync.io",
                "Customer Success Manager",
                "Sales",
                "Full-Time",
                "Active",
                78000,
                "2024-04-01",
                "Denver, CO",
                "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&auto=format&fit=crop&q=80",
                "+1 (555) 015-7722",
            ),
            (
                "Chloe Bennett",
                "chloe.b@staffsync.io",
                "Frontend Engineer (Contract)",
                "Engineering",
                "Contractor",
                "Active",
                92000,
                "2024-08-15",
                "Remote",
                "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
                "+1 (555) 011-3940",
            ),
        ]
        c.executemany(
            """
        INSERT INTO employees (name, email, role, department, type, status, salary, startDate, location, avatar, phone)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        """,
            seed_employees,
        )

        seed_leaves = [
            (
                "Sofia Rodriguez",
                "Marketing Director",
                "Maternity Leave",
                "2026-10-15",
                "2026-12-15",
                60,
                "Parental bonding time",
                "Approved",
                "2026-09-30",
            ),
            (
                "Sarah Chen",
                "Senior Full Stack Engineer",
                "Annual Vacation",
                "2026-11-05",
                "2026-11-12",
                5,
                "Family vacation travel",
                "Pending",
                "2026-10-24",
            ),
            (
                "Alexander Wright",
                "Customer Success Manager",
                "Sick Leave",
                "2026-10-29",
                "2026-10-30",
                2,
                "Doctor appointment & recovery",
                "Pending",
                "2026-10-28",
            ),
            (
                "David Kim",
                "HR Operations Specialist",
                "Personal Leave",
                "2026-10-12",
                "2026-10-13",
                2,
                "Personal errands",
                "Approved",
                "2026-10-05",
            ),
        ]
        c.executemany(
            """
        INSERT INTO leaves (employeeName, role, type, startDate, endDate, days, reason, status, appliedOn)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        """,
            seed_leaves,
        )

        seed_shifts = [
            ("Sarah Chen", "Senior Engineer", "Engineering", "Monday", "09:00 - 17:00", "Scheduled"),
            ("Sarah Chen", "Senior Engineer", "Engineering", "Tuesday", "09:00 - 17:00", "Scheduled"),
            ("Sarah Chen", "Senior Engineer", "Engineering", "Wednesday", "09:00 - 17:00", "Scheduled"),
            ("Liam O'Connor", "DevOps Lead", "Operations", "Monday", "08:00 - 16:00", "Scheduled"),
            ("Liam O'Connor", "DevOps Lead", "Operations", "Wednesday", "08:00 - 16:00", "Scheduled"),
            ("Liam O'Connor", "DevOps Lead", "Operations", "Friday", "08:00 - 16:00", "Scheduled"),
            ("David Kim", "HR Operations", "Human Resources", "Monday", "09:30 - 18:00", "Scheduled"),
            ("David Kim", "HR Operations", "Human Resources", "Thursday", "09:30 - 18:00", "Scheduled"),
            ("Alexander Wright", "Customer Success", "Sales", "Tuesday", "10:00 - 18:30", "Scheduled"),
            ("Alexander Wright", "Customer Success", "Sales", "Thursday", "10:00 - 18:30", "Scheduled"),
            ("Elena Rostova", "VP of Engineering", "Engineering", "Monday", "08:30 - 17:30", "Scheduled"),
            ("Elena Rostova", "VP of Engineering", "Engineering", "Thursday", "08:30 - 17:30", "Scheduled"),
        ]
        c.executemany(
            """
        INSERT INTO shifts (employeeName, role, department, day, shiftTime, status)
        VALUES (?, ?, ?, ?, ?, ?)
        """,
            seed_shifts,
        )

        seed_payroll = [
            ("October 2026", "2026-10-31", 9, 892000, "Processed"),
            ("September 2026", "2026-09-30", 9, 892000, "Paid"),
            ("August 2026", "2026-08-31", 8, 797000, "Paid"),
        ]
        c.executemany(
            """
        INSERT INTO payroll (cycle, payDate, employeesCount, totalAmount, status)
        VALUES (?, ?, ?, ?, ?)
        """,
            seed_payroll,
        )

        conn.commit()

    conn.close()


class StaffSyncHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

    def send_json(self, data, status_code=200):
        self.send_response(status_code)
        self.send_header("Content-Type", "application/json")
        self.end_headers()
        self.wfile.write(json.dumps(data).encode("utf-8"))

    def get_db(self):
        conn = sqlite3.connect(DB_FILE)
        conn.row_factory = sqlite3.Row
        return conn

    def do_GET(self):
        parsed = urlparse(self.path)
        path = parsed.path

        if path.startswith("/api/"):
            conn = self.get_db()
            c = conn.cursor()

            if path == "/api/stats":
                c.execute("SELECT COUNT(*) FROM employees")
                total_emp = c.fetchone()[0]

                c.execute("SELECT COUNT(*) FROM employees WHERE status = 'Active'")
                active_emp = c.fetchone()[0]

                c.execute("SELECT COUNT(*) FROM leaves WHERE status = 'Pending'")
                pending_leaves = c.fetchone()[0]

                c.execute("SELECT SUM(salary) FROM employees")
                total_payroll = c.fetchone()[0] or 0

                c.execute("SELECT COUNT(*) FROM shifts")
                total_shifts = c.fetchone()[0]

                c.execute(
                    "SELECT department, COUNT(*) as count FROM employees GROUP BY department"
                )
                dept_counts = {row["department"]: row["count"] for row in c.fetchall()}

                conn.close()
                return self.send_json(
                    {
                        "totalEmployees": total_emp,
                        "activeEmployees": active_emp,
                        "attendanceRate": 96.8,
                        "pendingLeaves": pending_leaves,
                        "monthlyPayroll": round(total_payroll / 12),
                        "totalAnnualPayroll": total_payroll,
                        "totalShifts": total_shifts,
                        "departments": dept_counts,
                    }
                )

            elif path == "/api/employees":
                c.execute("SELECT * FROM employees ORDER BY id DESC")
                rows = [dict(r) for r in c.fetchall()]
                conn.close()
                return self.send_json(rows)

            elif path == "/api/leaves":
                c.execute("SELECT * FROM leaves ORDER BY id DESC")
                rows = [dict(r) for r in c.fetchall()]
                conn.close()
                return self.send_json(rows)

            elif path == "/api/shifts":
                c.execute("SELECT * FROM shifts ORDER BY id ASC")
                rows = [dict(r) for r in c.fetchall()]
                conn.close()
                return self.send_json(rows)

            elif path == "/api/payroll":
                c.execute("SELECT * FROM payroll ORDER BY id DESC")
                rows = [dict(r) for r in c.fetchall()]
                conn.close()
                return self.send_json(rows)

            conn.close()
            return self.send_json({"error": "Endpoint not found"}, 404)

        # Default static file serving
        return super().do_GET()

    def do_POST(self):
        parsed = urlparse(self.path)
        path = parsed.path
        length = int(self.headers.get("Content-Length", 0))
        post_data = json.loads(self.rfile.read(length).decode("utf-8")) if length > 0 else {}

        conn = self.get_db()
        c = conn.cursor()

        if path == "/api/employees":
            c.execute(
                """
            INSERT INTO employees (name, email, role, department, type, status, salary, startDate, location, avatar, phone)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            """,
                (
                    post_data.get("name", "New Employee"),
                    post_data.get("email", ""),
                    post_data.get("role", "Staff Member"),
                    post_data.get("department", "Operations"),
                    post_data.get("type", "Full-Time"),
                    post_data.get("status", "Active"),
                    int(post_data.get("salary", 70000)),
                    post_data.get("startDate", "2026-10-28"),
                    post_data.get("location", "Remote"),
                    post_data.get(
                        "avatar",
                        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80",
                    ),
                    post_data.get("phone", "+1 (555) 000-0000"),
                ),
            )
            new_id = c.lastrowid
            conn.commit()
            conn.close()
            return self.send_json({"success": True, "id": new_id, "message": "Employee created"}, 201)

        elif path == "/api/leaves":
            c.execute(
                """
            INSERT INTO leaves (employeeName, role, type, startDate, endDate, days, reason, status, appliedOn)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
            """,
                (
                    post_data.get("employeeName", ""),
                    post_data.get("role", ""),
                    post_data.get("type", "Annual Leave"),
                    post_data.get("startDate", ""),
                    post_data.get("endDate", ""),
                    int(post_data.get("days", 1)),
                    post_data.get("reason", ""),
                    "Pending",
                    post_data.get("appliedOn", "2026-10-28"),
                ),
            )
            new_id = c.lastrowid
            conn.commit()
            conn.close()
            return self.send_json({"success": True, "id": new_id, "message": "Leave request submitted"}, 201)

        elif path == "/api/shifts":
            c.execute(
                """
            INSERT INTO shifts (employeeName, role, department, day, shiftTime, status)
            VALUES (?, ?, ?, ?, ?, ?)
            """,
                (
                    post_data.get("employeeName", ""),
                    post_data.get("role", ""),
                    post_data.get("department", "General"),
                    post_data.get("day", "Monday"),
                    post_data.get("shiftTime", "09:00 - 17:00"),
                    post_data.get("status", "Scheduled"),
                ),
            )
            new_id = c.lastrowid
            conn.commit()
            conn.close()
            return self.send_json({"success": True, "id": new_id, "message": "Shift scheduled"}, 201)

        elif path == "/api/payroll/run":
            c.execute("SELECT COUNT(*), SUM(salary) FROM employees WHERE status = 'Active'")
            row = c.fetchone()
            emp_count = row[0]
            monthly_sum = round((row[1] or 0) / 12)
            cycle = post_data.get("cycle", "November 2026")
            pay_date = post_data.get("payDate", "2026-11-30")

            c.execute(
                """
            INSERT INTO payroll (cycle, payDate, employeesCount, totalAmount, status)
            VALUES (?, ?, ?, ?, 'Processed')
            """,
                (cycle, pay_date, emp_count, monthly_sum),
            )
            new_id = c.lastrowid
            conn.commit()
            conn.close()
            return self.send_json({"success": True, "id": new_id, "message": f"Payroll for {cycle} processed successfully!"}, 201)

        conn.close()
        return self.send_json({"error": "Endpoint not found"}, 404)

    def do_PUT(self):
        parsed = urlparse(self.path)
        path = parsed.path
        length = int(self.headers.get("Content-Length", 0))
        put_data = json.loads(self.rfile.read(length).decode("utf-8")) if length > 0 else {}

        conn = self.get_db()
        c = conn.cursor()

        if path.startswith("/api/leaves/"):
            leave_id = path.split("/")[-1]
            status = put_data.get("status", "Approved")
            c.execute("UPDATE leaves SET status = ? WHERE id = ?", (status, leave_id))
            conn.commit()
            conn.close()
            return self.send_json({"success": True, "message": f"Leave status updated to {status}"})

        elif path.startswith("/api/employees/"):
            emp_id = path.split("/")[-1]
            fields = []
            values = []
            for k in ["name", "email", "role", "department", "type", "status", "salary", "location", "phone"]:
                if k in put_data:
                    fields.append(f"{k} = ?")
                    values.append(put_data[k])
            if fields:
                values.append(emp_id)
                c.execute(f"UPDATE employees SET {', '.join(fields)} WHERE id = ?", values)
                conn.commit()
            conn.close()
            return self.send_json({"success": True, "message": "Employee updated successfully"})

        conn.close()
        return self.send_json({"error": "Endpoint not found"}, 404)

    def do_DELETE(self):
        parsed = urlparse(self.path)
        path = parsed.path
        conn = self.get_db()
        c = conn.cursor()

        if path.startswith("/api/employees/"):
            emp_id = path.split("/")[-1]
            c.execute("DELETE FROM employees WHERE id = ?", (emp_id,))
            conn.commit()
            conn.close()
            return self.send_json({"success": True, "message": "Employee removed"})

        elif path.startswith("/api/shifts/"):
            shift_id = path.split("/")[-1]
            c.execute("DELETE FROM shifts WHERE id = ?", (shift_id,))
            conn.commit()
            conn.close()
            return self.send_json({"success": True, "message": "Shift removed"})

        conn.close()
        return self.send_json({"error": "Endpoint not found"}, 404)


if __name__ == "__main__":
    init_db()
    server_address = ("", PORT)
    httpd = HTTPServer(server_address, StaffSyncHandler)
    print(f"==================================================")
    print(f" StaffSync HRMS Server running at http://localhost:{PORT}")
    print(f" SQLite Database: {DB_FILE}")
    print(f" Press Ctrl+C to stop.")
    print(f"==================================================")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nShutting down server...")
