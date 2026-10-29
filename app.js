/**
 * StaffSync - Modern Human Resources Management System
 * Core Frontend Logic & State Management
 */

// Fallback initial state if API is offline
const INITIAL_DATA = {
  stats: {
    totalEmployees: 9,
    activeEmployees: 8,
    attendanceRate: 96.8,
    pendingLeaves: 2,
    monthlyPayroll: 89333,
    totalAnnualPayroll: 1072000,
    totalShifts: 12,
    departments: {
      "Engineering": 3,
      "Product": 1,
      "Human Resources": 2,
      "Operations": 1,
      "Marketing": 1,
      "Sales": 1
    }
  },
  employees: [
    {
      id: 1,
      name: "Elena Rostova",
      email: "elena.rostova@staffsync.io",
      role: "VP of Engineering",
      department: "Engineering",
      type: "Full-Time",
      status: "Active",
      salary: 145000,
      startDate: "2022-03-15",
      location: "San Francisco, CA",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
      phone: "+1 (555) 019-2831"
    },
    {
      id: 2,
      name: "Marcus Vance",
      email: "marcus.v@staffsync.io",
      role: "Lead Product Designer",
      department: "Product",
      type: "Full-Time",
      status: "Active",
      salary: 120000,
      startDate: "2023-01-10",
      location: "New York, NY",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      phone: "+1 (555) 014-9923"
    },
    {
      id: 3,
      name: "Sarah Chen",
      email: "sarah.chen@staffsync.io",
      role: "Senior Full Stack Engineer",
      department: "Engineering",
      type: "Full-Time",
      status: "Active",
      salary: 130000,
      startDate: "2023-05-18",
      location: "Austin, TX",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
      phone: "+1 (555) 012-4411"
    },
    {
      id: 4,
      name: "David Kim",
      email: "david.k@staffsync.io",
      role: "HR Operations Specialist",
      department: "Human Resources",
      type: "Full-Time",
      status: "Active",
      salary: 82000,
      startDate: "2021-11-01",
      location: "Chicago, IL",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
      phone: "+1 (555) 017-8832"
    },
    {
      id: 5,
      name: "Amina Al-Mansoor",
      email: "amina.m@staffsync.io",
      role: "Talent Acquisition Lead",
      department: "Human Resources",
      type: "Full-Time",
      status: "Active",
      salary: 95000,
      startDate: "2022-07-22",
      location: "Seattle, WA",
      avatar: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=150&auto=format&fit=crop&q=80",
      phone: "+1 (555) 019-6612"
    },
    {
      id: 6,
      name: "Liam O'Connor",
      email: "liam.oc@staffsync.io",
      role: "DevOps & Security Lead",
      department: "Operations",
      type: "Full-Time",
      status: "Active",
      salary: 135000,
      startDate: "2022-09-01",
      location: "Boston, MA",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
      phone: "+1 (555) 018-3291"
    },
    {
      id: 7,
      name: "Sofia Rodriguez",
      email: "sofia.r@staffsync.io",
      role: "Marketing Director",
      department: "Marketing",
      type: "Full-Time",
      status: "On Leave",
      salary: 115000,
      startDate: "2023-02-14",
      location: "Miami, FL",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      phone: "+1 (555) 016-5544"
    },
    {
      id: 8,
      name: "Alexander Wright",
      email: "alex.wright@staffsync.io",
      role: "Customer Success Manager",
      department: "Sales",
      type: "Full-Time",
      status: "Active",
      salary: 78000,
      startDate: "2024-04-01",
      location: "Denver, CO",
      avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&auto=format&fit=crop&q=80",
      phone: "+1 (555) 015-7722"
    },
    {
      id: 9,
      name: "Chloe Bennett",
      email: "chloe.b@staffsync.io",
      role: "Frontend Engineer (Contract)",
      department: "Engineering",
      type: "Contractor",
      status: "Active",
      salary: 92000,
      startDate: "2024-08-15",
      location: "Remote",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
      phone: "+1 (555) 011-3940"
    }
  ],
  leaves: [
    {
      id: 1,
      employeeName: "Sofia Rodriguez",
      role: "Marketing Director",
      type: "Maternity Leave",
      startDate: "2026-10-15",
      endDate: "2026-12-15",
      days: 60,
      reason: "Parental bonding time",
      status: "Approved",
      appliedOn: "2026-09-30"
    },
    {
      id: 2,
      employeeName: "Sarah Chen",
      role: "Senior Full Stack Engineer",
      type: "Annual Vacation",
      startDate: "2026-11-05",
      endDate: "2026-11-12",
      days: 5,
      reason: "Family vacation travel",
      status: "Pending",
      appliedOn: "2026-10-24"
    },
    {
      id: 3,
      employeeName: "Alexander Wright",
      role: "Customer Success Manager",
      type: "Sick Leave",
      startDate: "2026-10-29",
      endDate: "2026-10-30",
      days: 2,
      reason: "Doctor appointment & recovery",
      status: "Pending",
      appliedOn: "2026-10-28"
    },
    {
      id: 4,
      employeeName: "David Kim",
      role: "HR Operations Specialist",
      type: "Personal Leave",
      startDate: "2026-10-12",
      endDate: "2026-10-13",
      days: 2,
      reason: "Personal family errands",
      status: "Approved",
      appliedOn: "2026-10-05"
    }
  ],
  shifts: [
    { id: 1, employeeName: "Sarah Chen", role: "Senior Engineer", department: "Engineering", day: "Monday", shiftTime: "09:00 - 17:00", status: "Scheduled" },
    { id: 2, employeeName: "Sarah Chen", role: "Senior Engineer", department: "Engineering", day: "Tuesday", shiftTime: "09:00 - 17:00", status: "Scheduled" },
    { id: 3, employeeName: "Sarah Chen", role: "Senior Engineer", department: "Engineering", day: "Wednesday", shiftTime: "09:00 - 17:00", status: "Scheduled" },
    { id: 4, employeeName: "Liam O'Connor", role: "DevOps Lead", department: "Operations", day: "Monday", shiftTime: "08:00 - 16:00", status: "Scheduled" },
    { id: 5, employeeName: "Liam O'Connor", role: "DevOps Lead", department: "Operations", day: "Wednesday", shiftTime: "08:00 - 16:00", status: "Scheduled" },
    { id: 6, employeeName: "Liam O'Connor", role: "DevOps Lead", department: "Operations", day: "Friday", shiftTime: "08:00 - 16:00", status: "Scheduled" },
    { id: 7, employeeName: "David Kim", role: "HR Operations", department: "Human Resources", day: "Monday", shiftTime: "09:30 - 18:00", status: "Scheduled" },
    { id: 8, employeeName: "David Kim", role: "HR Operations", department: "Human Resources", day: "Thursday", shiftTime: "09:30 - 18:00", status: "Scheduled" },
    { id: 9, employeeName: "Alexander Wright", role: "Customer Success", department: "Sales", day: "Tuesday", shiftTime: "10:00 - 18:30", status: "Scheduled" },
    { id: 10, employeeName: "Alexander Wright", role: "Customer Success", department: "Sales", day: "Thursday", shiftTime: "10:00 - 18:30", status: "Scheduled" },
    { id: 11, employeeName: "Elena Rostova", role: "VP of Engineering", department: "Engineering", day: "Monday", shiftTime: "08:30 - 17:30", status: "Scheduled" },
    { id: 12, employeeName: "Elena Rostova", role: "VP of Engineering", department: "Engineering", day: "Thursday", shiftTime: "08:30 - 17:30", status: "Scheduled" }
  ],
  attendance: [
    { id: 1, employeeName: "Sarah Connor", department: "Human Resources", date: "2026-10-29", checkIn: "08:55:00", checkOut: "17:15:00", workHours: 8.3, status: "Present", notes: "Arrived on time" },
    { id: 2, employeeName: "Marcus Vance", department: "Engineering", date: "2026-10-29", checkIn: "09:05:00", checkOut: "17:30:00", workHours: 8.4, status: "Present", notes: "Team standup" },
    { id: 3, employeeName: "Elena Rostova", department: "Engineering", date: "2026-10-29", checkIn: "09:12:00", checkOut: null, workHours: 0, status: "Present", notes: "Remote clock-in" },
    { id: 4, employeeName: "David Kim", department: "Engineering", date: "2026-10-29", checkIn: "09:48:00", checkOut: null, workHours: 0, status: "Late", notes: "Traffic delay" },
    { id: 5, employeeName: "Sofia Rodriguez", department: "Marketing", date: "2026-10-29", checkIn: null, checkOut: null, workHours: 0, status: "On Leave", notes: "Maternity Leave" }
  ],
  announcements: [
    { id: 1, title: "Q4 Annual Strategic Review & Town Hall", description: "All team members are invited to our quarterly virtual town hall this Friday at 3:00 PM EST. Topics include 2027 product roadmaps and peer recognition awards.", category: "Event", priority: "High", author: "Sarah Connor", date: "2026-10-28", isPinned: true },
    { id: 2, title: "Updated Hybrid Work & Remote Wellness Policy", description: "StaffSync HR is excited to announce enhanced wellness benefits, including home ergonomic stipends and flexible Friday focus hours.", category: "Policy", priority: "Medium", author: "Sarah Connor", date: "2026-10-26", isPinned: false },
    { id: 3, title: "Upcoming Public Holiday Notice: Thanksgiving Recess", description: "Offices will be closed on Thursday and Friday. Critical cloud monitoring rosters will be managed separately by operations leads.", category: "Holiday", priority: "Medium", author: "Sarah Connor", date: "2026-10-24", isPinned: false }
  ],
  trainings: [
    { id: 1, title: "Advanced React 19 & Full Stack MERN Architecture", description: "Deep dive into React server components, state sync with Redux Toolkit, and scalable backend optimizations.", trainer: "Alex Rivers, Principal Architect", department: "Engineering", startDate: "2026-11-12", endDate: "2026-11-14", durationHours: 12, capacity: 30, enrolled: ["Elena Rostova", "David Kim"], status: "Upcoming", modality: "Online (Virtual)" },
    { id: 2, title: "Agile People Leadership & Effective Mentorship", description: "Comprehensive leadership accelerator program for team leads, directors, and aspiring engineering managers.", trainer: "Dr. Rebecca Vance", department: "All", startDate: "2026-11-18", endDate: "2026-11-20", durationHours: 16, capacity: 20, enrolled: ["Marcus Vance"], status: "Upcoming", modality: "Hybrid" },
    { id: 3, title: "Cloud Security, Zero-Trust & SOC-2 Compliance", description: "Hands-on training covering IAM policies, encrypted key vaults, and automated compliance pipelines.", trainer: "DevSecOps Team", department: "Operations", startDate: "2026-12-02", endDate: "2026-12-03", durationHours: 8, capacity: 25, enrolled: [], status: "Upcoming", modality: "Online (Virtual)" }
  ],
  payroll: [
    { id: 1, cycle: "October 2026", payDate: "2026-10-31", employeesCount: 9, totalAmount: 89333, status: "Processed" },
    { id: 2, cycle: "September 2026", payDate: "2026-09-30", employeesCount: 9, totalAmount: 89333, status: "Paid" },
    { id: 3, cycle: "August 2026", payDate: "2026-08-31", employeesCount: 8, totalAmount: 79700, status: "Paid" }
  ]
};

// Application State
const AppState = {
  currentTab: 'dashboard',
  currentRole: 'hr', // 'hr' | 'manager' | 'employee'
  personas: {
    hr: { name: 'Sarah Connor', title: 'VP of Human Resources', department: 'Human Resources', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80' },
    manager: { name: 'Marcus Vance', title: 'Engineering Director', department: 'Engineering', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80' },
    employee: { name: 'Elena Rostova', title: 'Senior Full Stack Engineer', department: 'Engineering', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80' }
  },
  isDarkMode: false,
  directoryView: 'grid', // 'grid' | 'table'
  searchQuery: '',
  departmentFilter: 'All',
  typeFilter: 'All',
  shiftDayFilter: 'All',
  announcementCategoryFilter: 'All',
  attendanceDateFilter: new Date().toISOString().split('T')[0],
  data: JSON.parse(JSON.stringify(INITIAL_DATA)),
  clockState: {
    status: 'Clocked Out', // 'Clocked In' | 'On Break' | 'Clocked Out'
    clockInTime: null,
    totalSeconds: 0,
    timerInterval: null
  }
};

// API Base URL (auto-detects if running via server.py or direct file)
const API_BASE = window.location.protocol.startsWith('http') ? '' : null;

// Initialize App
document.addEventListener('DOMContentLoaded', async () => {
  initTheme();
  setupEventListeners();
  startLiveClock();
  await loadData();
  renderApp();
});

// Theme Management
function initTheme() {
  const saved = localStorage.getItem('staffsync_theme');
  if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    AppState.isDarkMode = true;
    document.documentElement.classList.add('dark');
  } else {
    AppState.isDarkMode = false;
    document.documentElement.classList.remove('dark');
  }
  updateThemeIcon();
}

function toggleTheme() {
  AppState.isDarkMode = !AppState.isDarkMode;
  if (AppState.isDarkMode) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('staffsync_theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('staffsync_theme', 'light');
  }
  updateThemeIcon();
  showToast(AppState.isDarkMode ? 'Dark theme enabled' : 'Light theme enabled', 'info');
}

function updateThemeIcon() {
  const btn = document.getElementById('theme-toggle-btn');
  if (btn) {
    btn.innerHTML = AppState.isDarkMode 
      ? `<svg class="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 9h-1m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>`
      : `<svg class="w-5 h-5 text-slate-600 dark:text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>`;
  }
}

// Data Loading (REST API with LocalStorage Fallback)
async function loadData() {
  if (API_BASE !== null) {
    try {
      const [statsRes, empRes, leavesRes, shiftsRes, payrollRes] = await Promise.all([
        fetch(`${API_BASE}/api/stats`),
        fetch(`${API_BASE}/api/employees`),
        fetch(`${API_BASE}/api/leaves`),
        fetch(`${API_BASE}/api/shifts`),
        fetch(`${API_BASE}/api/payroll`)
      ]);
      if (statsRes.ok && empRes.ok && leavesRes.ok && shiftsRes.ok && payrollRes.ok) {
        AppState.data.stats = await statsRes.json();
        AppState.data.employees = await empRes.json();
        AppState.data.leaves = await leavesRes.json();
        AppState.data.shifts = await shiftsRes.json();
        AppState.data.payroll = await payrollRes.json();
        return;
      }
    } catch (e) {
      console.warn("API server not detected, using local persistent storage fallback.", e);
    }
  }

  // LocalStorage fallback
  const cached = localStorage.getItem('staffsync_local_db');
  if (cached) {
    try {
      AppState.data = JSON.parse(cached);
    } catch(e) {
      AppState.data = JSON.parse(JSON.stringify(INITIAL_DATA));
    }
  } else {
    AppState.data = JSON.parse(JSON.stringify(INITIAL_DATA));
    saveLocalData();
  }
}

function saveLocalData() {
  localStorage.setItem('staffsync_local_db', JSON.stringify(AppState.data));
  recalculateStats();
}

function recalculateStats() {
  const emps = AppState.data.employees;
  const activeCount = emps.filter(e => e.status === 'Active').length;
  const pendingLeaves = AppState.data.leaves.filter(l => l.status === 'Pending').length;
  const totalSal = emps.reduce((acc, e) => acc + (parseInt(e.salary) || 0), 0);
  
  const depts = {};
  emps.forEach(e => {
    depts[e.department] = (depts[e.department] || 0) + 1;
  });

  AppState.data.stats = {
    totalEmployees: emps.length,
    activeEmployees: activeCount,
    attendanceRate: 96.8,
    pendingLeaves: pendingLeaves,
    monthlyPayroll: Math.round(totalSal / 12),
    totalAnnualPayroll: totalSal,
    totalShifts: AppState.data.shifts.length,
    departments: depts
  };
}

// Event Listeners Setup
function setupEventListeners() {
  // Navigation tabs
  document.querySelectorAll('[data-tab]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const tab = e.currentTarget.getAttribute('data-tab');
      switchTab(tab);
    });
  });

  // Mobile sidebar toggle
  const mobileToggle = document.getElementById('mobile-menu-btn');
  const sidebar = document.getElementById('sidebar');
  if (mobileToggle && sidebar) {
    mobileToggle.addEventListener('click', () => {
      sidebar.classList.toggle('-translate-x-full');
    });
  }

  // Theme toggle
  const themeBtn = document.getElementById('theme-toggle-btn');
  if (themeBtn) themeBtn.addEventListener('click', toggleTheme);

  // Global Quick Actions
  document.getElementById('quick-add-employee-btn')?.addEventListener('click', () => openModal('add-employee-modal'));
  document.getElementById('quick-request-leave-btn')?.addEventListener('click', () => openModal('request-leave-modal'));
  document.getElementById('quick-post-shift-btn')?.addEventListener('click', () => openModal('add-shift-modal'));
  document.getElementById('quick-run-payroll-btn')?.addEventListener('click', handleRunPayroll);
}

// Role Switcher
function setAppRole(role) {
  AppState.currentRole = role;

  // Update header buttons
  ['hr', 'manager', 'employee'].forEach(r => {
    const btn = document.getElementById(`role-btn-${r}`);
    if (btn) {
      if (r === role) {
        btn.className = "px-2.5 py-1 rounded-lg font-bold bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm transition-all";
      } else {
        btn.className = "px-2.5 py-1 rounded-lg font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all";
      }
    }
  });

  // Update persona details in sidebar bottom
  const persona = AppState.personas[role];
  if (persona) {
    const userImg = document.querySelector('aside img[alt="Admin Avatar"]');
    const userName = document.querySelector('aside .truncate.text-slate-900, aside .truncate.dark\\:text-white');
    const userRole = document.querySelector('aside .text-\\[10px\\].text-blue-600, aside .text-\\[10px\\].dark\\:text-blue-400');
    if (userImg) userImg.src = persona.avatar;
    if (userName) userName.textContent = persona.name;
    if (userRole) userRole.textContent = persona.title;
  }

  showToast(`Switched role perspective to ${role.toUpperCase()} (${AppState.personas[role].name})`, 'info');
  renderApp();
}

// Tab Switching
function switchTab(tabName) {
  AppState.currentTab = tabName;
  document.querySelectorAll('[data-tab]').forEach(btn => {
    const isTarget = btn.getAttribute('data-tab') === tabName;
    if (isTarget) {
      btn.className = "flex items-center gap-3 px-4 py-3 text-sm font-semibold rounded-xl bg-blue-600 text-white shadow-md shadow-blue-500/20 transition-all";
    } else {
      btn.className = "flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all";
    }
  });

  // Update mobile title
  const currentTabTitle = document.getElementById('current-tab-title');
  if (currentTabTitle) {
    const titleMap = {
      dashboard: "Executive Dashboard",
      directory: "Employee Directory",
      attendance: "Smart Attendance Tracking",
      shifts: "Workforce & Shifts",
      leaves: "Time Off & Leave Requests",
      announcements: "Company Announcements",
      trainings: "Training & Development",
      payroll: "Payroll & Compensation"
    };
    currentTabTitle.textContent = titleMap[tabName] || "StaffSync HRMS";
  }

  // Close mobile sidebar if open
  const sidebar = document.getElementById('sidebar');
  if (sidebar && window.innerWidth < 1024) {
    sidebar.classList.add('-translate-x-full');
  }

  renderApp();
}

// Live Time & Digital Clock In/Out Tracker
function startLiveClock() {
  const clockDisplay = document.getElementById('live-clock-time');
  const dateDisplay = document.getElementById('live-clock-date');

  function update() {
    const now = new Date();
    if (clockDisplay) {
      clockDisplay.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    }
    if (dateDisplay) {
      dateDisplay.textContent = now.toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });
    }
  }
  update();
  setInterval(update, 1000);
}

function handleClockAction(action) {
  if (action === 'clock-in') {
    AppState.clockState.status = 'Clocked In';
    AppState.clockState.clockInTime = new Date();
    showToast('You are clocked in. Shift timer started!', 'success');
  } else if (action === 'break') {
    if (AppState.clockState.status === 'On Break') {
      AppState.clockState.status = 'Clocked In';
      showToast('Break ended. Resumed shift!', 'info');
    } else {
      AppState.clockState.status = 'On Break';
      showToast('You are now on break.', 'warning');
    }
  } else if (action === 'clock-out') {
    AppState.clockState.status = 'Clocked Out';
    AppState.clockState.clockInTime = null;
    showToast('Clocked out successfully. Great work today!', 'info');
  }
  renderClockWidget();
}

function renderClockWidget() {
  const container = document.getElementById('clock-widget-container');
  if (!container) return;

  const { status } = AppState.clockState;
  let statusBadge = '';
  let actionButtons = '';

  if (status === 'Clocked In') {
    statusBadge = `<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700 animate-pulse">
      <span class="w-2 h-2 rounded-full bg-emerald-500"></span> Active Shift
    </span>`;
    actionButtons = `
      <button onclick="handleClockAction('break')" class="px-4 py-2 text-xs font-semibold rounded-lg bg-amber-500 hover:bg-amber-600 text-white transition-all shadow-sm">
        Take Break
      </button>
      <button onclick="handleClockAction('clock-out')" class="px-4 py-2 text-xs font-semibold rounded-lg bg-rose-600 hover:bg-rose-700 text-white transition-all shadow-sm">
        Clock Out
      </button>
    `;
  } else if (status === 'On Break') {
    statusBadge = `<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 border border-amber-300 dark:border-amber-700">
      <span class="w-2 h-2 rounded-full bg-amber-500"></span> On Break
    </span>`;
    actionButtons = `
      <button onclick="handleClockAction('break')" class="px-4 py-2 text-xs font-semibold rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white transition-all shadow-sm">
        Resume Work
      </button>
      <button onclick="handleClockAction('clock-out')" class="px-4 py-2 text-xs font-semibold rounded-lg bg-rose-600 hover:bg-rose-700 text-white transition-all shadow-sm">
        Clock Out
      </button>
    `;
  } else {
    statusBadge = `<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border border-slate-300 dark:border-slate-700">
      <span class="w-2 h-2 rounded-full bg-slate-400"></span> Off Duty
    </span>`;
    actionButtons = `
      <button onclick="handleClockAction('clock-in')" class="px-5 py-2 text-xs font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-all shadow-md shadow-blue-500/20 flex items-center gap-1.5">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        Clock In Now
      </button>
    `;
  }

  container.innerHTML = `
    <div class="flex items-center justify-between p-4 bg-white/70 dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700/80 rounded-2xl shadow-sm backdrop-blur">
      <div class="flex items-center gap-4">
        <div class="p-3 bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 rounded-xl">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        </div>
        <div>
          <div class="flex items-center gap-2">
            <span class="text-xs font-medium text-slate-500 dark:text-slate-400">Attendance Tracker</span>
            ${statusBadge}
          </div>
          <div class="text-sm font-semibold text-slate-800 dark:text-slate-100 mt-0.5">
            ${status === 'Clocked Out' ? 'Ready to begin shift?' : 'Shift active since ' + (AppState.clockState.clockInTime ? AppState.clockState.clockInTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) : '09:00 AM')}
          </div>
        </div>
      </div>
      <div class="flex items-center gap-2">
        ${actionButtons}
      </div>
    </div>
  `;
}

// Master Render Function
function renderApp() {
  const container = document.getElementById('main-content');
  if (!container) return;

  renderClockWidget();

  switch (AppState.currentTab) {
    case 'dashboard':
      container.innerHTML = renderDashboardView();
      if (AppState.currentRole === 'hr') initDepartmentChart();
      break;
    case 'directory':
      container.innerHTML = renderDirectoryView();
      attachDirectoryEvents();
      break;
    case 'attendance':
      container.innerHTML = renderAttendanceView();
      attachAttendanceEvents();
      break;
    case 'shifts':
      container.innerHTML = renderShiftsView();
      attachShiftsEvents();
      break;
    case 'leaves':
      container.innerHTML = renderLeavesView();
      attachLeavesEvents();
      break;
    case 'announcements':
      container.innerHTML = renderAnnouncementsView();
      attachAnnouncementsEvents();
      break;
    case 'trainings':
      container.innerHTML = renderTrainingsView();
      attachTrainingsEvents();
      break;
    case 'payroll':
      container.innerHTML = renderPayrollView();
      attachPayrollEvents();
      break;
    default:
      container.innerHTML = renderDashboardView();
  }
}

// -----------------------------------------------------------------------
// 1. DASHBOARD VIEW (Role-Aware)
// -----------------------------------------------------------------------
function renderDashboardView() {
  if (AppState.currentRole === 'manager') {
    return renderManagerDashboardView();
  }
  if (AppState.currentRole === 'employee') {
    return renderEmployeeDashboardView();
  }
  const { stats, employees, leaves, shifts } = AppState.data;
  const pendingLeavesList = leaves.filter(l => l.status === 'Pending');
  const onLeaveList = employees.filter(e => e.status === 'On Leave');

  return `
    <div class="space-y-6">
      <!-- Metric Cards Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <!-- Metric 1: Headcount -->
        <div class="p-5 bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 rounded-2xl shadow-sm card-hover-glow">
          <div class="flex items-center justify-between">
            <span class="text-xs font-bold tracking-wider uppercase text-slate-500 dark:text-slate-400">Total Headcount</span>
            <span class="p-2.5 bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 rounded-xl">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            </span>
          </div>
          <div class="mt-4 flex items-baseline gap-2">
            <span class="text-3xl font-extrabold text-slate-900 dark:text-white">${stats.totalEmployees}</span>
            <span class="text-xs font-medium text-emerald-600 dark:text-emerald-400 flex items-center">
              <svg class="w-3.5 h-3.5 mr-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd"/></svg>
              +12% this qtr
            </span>
          </div>
          <div class="mt-2 text-xs text-slate-500 dark:text-slate-400">
            ${stats.activeEmployees} active on duty · ${stats.totalEmployees - stats.activeEmployees} on leave
          </div>
        </div>

        <!-- Metric 2: Attendance Rate -->
        <div class="p-5 bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 rounded-2xl shadow-sm card-hover-glow">
          <div class="flex items-center justify-between">
            <span class="text-xs font-bold tracking-wider uppercase text-slate-500 dark:text-slate-400">Attendance Rate</span>
            <span class="p-2.5 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 rounded-xl">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </span>
          </div>
          <div class="mt-4 flex items-baseline gap-2">
            <span class="text-3xl font-extrabold text-slate-900 dark:text-white">${stats.attendanceRate}%</span>
            <span class="text-xs font-medium text-emerald-600 dark:text-emerald-400 flex items-center">
              <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse mr-1"></span> Live sync
            </span>
          </div>
          <div class="mt-2 text-xs text-slate-500 dark:text-slate-400">
            Average check-in 08:58 AM
          </div>
        </div>

        <!-- Metric 3: Pending Approvals -->
        <div class="p-5 bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 rounded-2xl shadow-sm card-hover-glow">
          <div class="flex items-center justify-between">
            <span class="text-xs font-bold tracking-wider uppercase text-slate-500 dark:text-slate-400">Pending Leaves</span>
            <span class="p-2.5 bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 rounded-xl">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </span>
          </div>
          <div class="mt-4 flex items-baseline gap-2">
            <span class="text-3xl font-extrabold text-slate-900 dark:text-white">${stats.pendingLeaves}</span>
            <button onclick="switchTab('leaves')" class="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline">
              Review queue &rarr;
            </button>
          </div>
          <div class="mt-2 text-xs text-slate-500 dark:text-slate-400">
            Requires manager approval
          </div>
        </div>

        <!-- Metric 4: Monthly Payroll Run -->
        <div class="p-5 bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 rounded-2xl shadow-sm card-hover-glow">
          <div class="flex items-center justify-between">
            <span class="text-xs font-bold tracking-wider uppercase text-slate-500 dark:text-slate-400">Monthly Payroll</span>
            <span class="p-2.5 bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 rounded-xl">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </span>
          </div>
          <div class="mt-4 flex items-baseline gap-2">
            <span class="text-3xl font-extrabold text-slate-900 dark:text-white">$${(stats.monthlyPayroll).toLocaleString()}</span>
            <span class="text-xs font-medium text-slate-500">/ mo</span>
          </div>
          <div class="mt-2 text-xs text-slate-500 dark:text-slate-400">
            Next payout: Nov 30, 2026
          </div>
        </div>
      </div>

      <!-- Quick Action Shortcuts -->
      <div class="flex flex-wrap items-center gap-3 p-4 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl text-white shadow-lg shadow-blue-500/10">
        <div class="flex-1 min-w-[200px]">
          <h3 class="text-base font-bold">Workforce Sync Hub</h3>
          <p class="text-xs text-blue-100">Quickly trigger core HR actions across departments</p>
        </div>
        <div class="flex flex-wrap items-center gap-2">
          <button onclick="openModal('add-employee-modal')" class="px-4 py-2 bg-white text-blue-700 hover:bg-blue-50 text-xs font-bold rounded-xl transition-all shadow-sm flex items-center gap-1.5">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" /></svg>
            Add Employee
          </button>
          <button onclick="openModal('request-leave-modal')" class="px-4 py-2 bg-blue-500/40 hover:bg-blue-500/60 text-white text-xs font-bold rounded-xl backdrop-blur transition-all border border-blue-400/30 flex items-center gap-1.5">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            Request Time Off
          </button>
          <button onclick="openModal('add-shift-modal')" class="px-4 py-2 bg-blue-500/40 hover:bg-blue-500/60 text-white text-xs font-bold rounded-xl backdrop-blur transition-all border border-blue-400/30 flex items-center gap-1.5">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            Schedule Shift
          </button>
          <button onclick="handleRunPayroll()" class="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold rounded-xl transition-all shadow-sm flex items-center gap-1.5">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            Run Payroll Cycle
          </button>
        </div>
      </div>

      <!-- Main Two Column Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- Left: Pending Leave Approvals & Who is Out -->
        <div class="lg:col-span-2 space-y-6">
          <!-- Pending Approvals Banner/List -->
          <div class="bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 rounded-2xl p-5 shadow-sm">
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                <h3 class="font-bold text-slate-800 dark:text-slate-100 text-base">Pending Leave Approvals</h3>
                <span class="px-2 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300">
                  ${pendingLeavesList.length}
                </span>
              </div>
              <button onclick="switchTab('leaves')" class="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline">
                View all requests &rarr;
              </button>
            </div>

            ${pendingLeavesList.length === 0 ? `
              <div class="text-center py-8 text-slate-400 text-sm">
                No leave requests pending approval right now.
              </div>
            ` : `
              <div class="divide-y divide-slate-100 dark:divide-slate-700/60">
                ${pendingLeavesList.map(leave => `
                  <div class="py-3.5 flex items-center justify-between flex-wrap gap-3">
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-400 to-orange-500 text-white font-bold flex items-center justify-center text-sm shadow-sm">
                        ${leave.employeeName.charAt(0)}
                      </div>
                      <div>
                        <div class="text-sm font-bold text-slate-800 dark:text-slate-100">${leave.employeeName}</div>
                        <div class="text-xs text-slate-500 dark:text-slate-400">${leave.role} · <span class="font-medium text-amber-600 dark:text-amber-400">${leave.type} (${leave.days} days)</span></div>
                        <div class="text-[11px] text-slate-400 mt-0.5">${leave.startDate} to ${leave.endDate} · "${leave.reason}"</div>
                      </div>
                    </div>
                    <div class="flex items-center gap-2">
                      <button onclick="updateLeaveStatus(${leave.id}, 'Approved')" class="px-3 py-1.5 text-xs font-semibold rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white transition-all shadow-sm">
                        Approve
                      </button>
                      <button onclick="updateLeaveStatus(${leave.id}, 'Rejected')" class="px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 hover:bg-rose-50 text-slate-600 hover:text-rose-600 dark:bg-slate-700 dark:hover:bg-rose-950 dark:text-slate-300 transition-all">
                        Decline
                      </button>
                    </div>
                  </div>
                `).join('')}
              </div>
            `}
          </div>

          <!-- Shifts Scheduled for This Week -->
          <div class="bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 rounded-2xl p-5 shadow-sm">
            <div class="flex items-center justify-between mb-4">
              <h3 class="font-bold text-slate-800 dark:text-slate-100 text-base">Weekly Rota & Shift Roster</h3>
              <button onclick="switchTab('shifts')" class="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline">
                Open Schedule Grid &rarr;
              </button>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              ${shifts.slice(0, 6).map(shift => `
                <div class="p-3.5 rounded-xl border border-slate-100 dark:border-slate-700/60 bg-slate-50/50 dark:bg-slate-850/50">
                  <div class="flex items-center justify-between text-xs">
                    <span class="font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">${shift.day}</span>
                    <span class="text-slate-500 font-medium">${shift.shiftTime}</span>
                  </div>
                  <div class="mt-2 font-bold text-sm text-slate-800 dark:text-slate-200">${shift.employeeName}</div>
                  <div class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">${shift.department}</div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- Right: Department Distribution & Out of Office -->
        <div class="space-y-6">
          <!-- Department Distribution -->
          <div class="bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 rounded-2xl p-5 shadow-sm">
            <h3 class="font-bold text-slate-800 dark:text-slate-100 text-base mb-4">Department Distribution</h3>
            <div class="space-y-3">
              ${Object.entries(stats.departments || {}).map(([dept, count]) => {
                const pct = Math.round((count / stats.totalEmployees) * 100);
                return `
                  <div>
                    <div class="flex justify-between text-xs font-medium text-slate-600 dark:text-slate-300 mb-1">
                      <span>${dept}</span>
                      <span class="font-bold">${count} (${pct}%)</span>
                    </div>
                    <div class="w-full bg-slate-100 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                      <div class="bg-blue-600 h-full rounded-full" style="width: ${pct}%"></div>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>

          <!-- Out of Office Today -->
          <div class="bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 rounded-2xl p-5 shadow-sm">
            <div class="flex items-center justify-between mb-3">
              <h3 class="font-bold text-slate-800 dark:text-slate-100 text-base">Out of Office</h3>
              <span class="text-xs text-slate-500 font-medium">Today</span>
            </div>
            ${onLeaveList.length === 0 ? `
              <div class="text-xs text-slate-400 py-4 text-center">Everyone is present today!</div>
            ` : `
              <div class="space-y-3">
                ${onLeaveList.map(emp => `
                  <div class="flex items-center gap-3 p-2.5 rounded-xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200/50 dark:border-amber-800/30">
                    <img src="${emp.avatar}" alt="${emp.name}" class="w-9 h-9 rounded-full object-cover">
                    <div class="flex-1 min-w-0">
                      <div class="text-xs font-bold text-slate-800 dark:text-slate-200 truncate">${emp.name}</div>
                      <div class="text-[11px] text-amber-700 dark:text-amber-400 truncate">${emp.role} · On Leave</div>
                    </div>
                  </div>
                `).join('')}
              </div>
            `}
          </div>
        </div>
      </div>
    </div>
  `;
}

function initDepartmentChart() {
  // Chart rendering placeholder if needed
}

// -----------------------------------------------------------------------
// 2. EMPLOYEE DIRECTORY VIEW
// -----------------------------------------------------------------------
function renderDirectoryView() {
  const { employees } = AppState.data;
  
  // Apply Search & Filters
  const filtered = employees.filter(emp => {
    const matchesSearch = 
      emp.name.toLowerCase().includes(AppState.searchQuery.toLowerCase()) ||
      emp.role.toLowerCase().includes(AppState.searchQuery.toLowerCase()) ||
      emp.email.toLowerCase().includes(AppState.searchQuery.toLowerCase()) ||
      emp.location.toLowerCase().includes(AppState.searchQuery.toLowerCase());
    
    const matchesDept = AppState.departmentFilter === 'All' || emp.department === AppState.departmentFilter;
    const matchesType = AppState.typeFilter === 'All' || emp.type === AppState.typeFilter;

    return matchesSearch && matchesDept && matchesType;
  });

  return `
    <div class="space-y-6">
      <!-- Search & Filter Bar -->
      <div class="p-4 bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 rounded-2xl shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <div class="w-full md:w-80 relative">
          <span class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </span>
          <input 
            type="text" 
            id="employee-search-input" 
            placeholder="Search by name, role, email..." 
            value="${AppState.searchQuery}"
            class="w-full pl-10 pr-4 py-2.5 text-xs font-medium bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800 dark:text-slate-100"
          />
        </div>

        <div class="flex flex-wrap items-center gap-3 w-full md:w-auto">
          <!-- Department Filter -->
          <select id="department-filter-select" class="px-3 py-2 text-xs font-medium bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-700 dark:text-slate-300">
            <option value="All" ${AppState.departmentFilter === 'All' ? 'selected' : ''}>All Departments</option>
            <option value="Engineering" ${AppState.departmentFilter === 'Engineering' ? 'selected' : ''}>Engineering</option>
            <option value="Product" ${AppState.departmentFilter === 'Product' ? 'selected' : ''}>Product</option>
            <option value="Human Resources" ${AppState.departmentFilter === 'Human Resources' ? 'selected' : ''}>Human Resources</option>
            <option value="Operations" ${AppState.departmentFilter === 'Operations' ? 'selected' : ''}>Operations</option>
            <option value="Marketing" ${AppState.departmentFilter === 'Marketing' ? 'selected' : ''}>Marketing</option>
            <option value="Sales" ${AppState.departmentFilter === 'Sales' ? 'selected' : ''}>Sales</option>
          </select>

          <!-- Type Filter -->
          <select id="type-filter-select" class="px-3 py-2 text-xs font-medium bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-700 dark:text-slate-300">
            <option value="All" ${AppState.typeFilter === 'All' ? 'selected' : ''}>All Types</option>
            <option value="Full-Time" ${AppState.typeFilter === 'Full-Time' ? 'selected' : ''}>Full-Time</option>
            <option value="Contractor" ${AppState.typeFilter === 'Contractor' ? 'selected' : ''}>Contractor</option>
          </select>

          <!-- View Toggle (Grid / Table) -->
          <div class="flex items-center bg-slate-100 dark:bg-slate-700/60 p-1 rounded-xl">
            <button id="view-grid-btn" class="p-1.5 rounded-lg ${AppState.directoryView === 'grid' ? 'bg-white dark:bg-slate-800 text-blue-600 shadow-sm' : 'text-slate-500'}">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
            </button>
            <button id="view-table-btn" class="p-1.5 rounded-lg ${AppState.directoryView === 'table' ? 'bg-white dark:bg-slate-800 text-blue-600 shadow-sm' : 'text-slate-500'}">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg>
            </button>
          </div>

          <!-- Add Button -->
          <button onclick="openModal('add-employee-modal')" class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition-all shadow-md shadow-blue-500/20 flex items-center gap-1.5">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" /></svg>
            Add Member
          </button>
        </div>
      </div>

      <!-- Result Counter -->
      <div class="text-xs font-medium text-slate-500 dark:text-slate-400">
        Showing <span class="font-bold text-slate-800 dark:text-slate-200">${filtered.length}</span> staff members
      </div>

      <!-- Grid View -->
      ${AppState.directoryView === 'grid' ? `
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          ${filtered.map(emp => `
            <div class="bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 rounded-2xl p-5 shadow-sm card-hover-glow relative group">
              <div class="flex items-start justify-between">
                <div class="flex items-center gap-3.5">
                  <img src="${emp.avatar}" alt="${emp.name}" class="w-13 h-13 rounded-2xl object-cover border-2 border-white dark:border-slate-700 shadow-sm" />
                  <div>
                    <h4 class="font-bold text-slate-900 dark:text-white text-sm">${emp.name}</h4>
                    <p class="text-xs text-blue-600 dark:text-blue-400 font-medium">${emp.role}</p>
                    <span class="inline-block mt-1 text-[11px] font-semibold text-slate-500 dark:text-slate-400">${emp.department}</span>
                  </div>
                </div>
                <span class="px-2.5 py-1 rounded-full text-[11px] font-bold ${emp.status === 'Active' ? 'badge-active' : 'badge-leave'}">
                  ${emp.status}
                </span>
              </div>

              <div class="mt-4 pt-4 border-t border-slate-100 dark:border-slate-700/60 space-y-2 text-xs">
                <div class="flex items-center justify-between text-slate-500 dark:text-slate-400">
                  <span class="flex items-center gap-1.5">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    Email
                  </span>
                  <a href="mailto:${emp.email}" class="font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 truncate max-w-[160px]">${emp.email}</a>
                </div>
                <div class="flex items-center justify-between text-slate-500 dark:text-slate-400">
                  <span class="flex items-center gap-1.5">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    Location
                  </span>
                  <span class="font-medium text-slate-700 dark:text-slate-300">${emp.location}</span>
                </div>
                <div class="flex items-center justify-between text-slate-500 dark:text-slate-400">
                  <span class="flex items-center gap-1.5">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    Annual Comp
                  </span>
                  <span class="font-bold text-slate-900 dark:text-white">$${(parseInt(emp.salary)).toLocaleString()}/yr</span>
                </div>
              </div>

              <div class="mt-4 pt-3 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between">
                <span class="text-[11px] font-medium text-slate-400">Since ${emp.startDate}</span>
                <div class="flex items-center gap-2">
                  <button onclick="deleteEmployee(${emp.id})" title="Remove employee" class="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg transition-colors">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                  </button>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      ` : `
        <!-- Table View -->
        <div class="bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 rounded-2xl shadow-sm overflow-hidden">
          <div class="overflow-x-auto">
            <table class="w-full text-left text-xs">
              <thead class="bg-slate-50 dark:bg-slate-850 text-slate-500 uppercase tracking-wider font-semibold border-b border-slate-200 dark:border-slate-700">
                <tr>
                  <th class="py-3.5 px-4">Employee</th>
                  <th class="py-3.5 px-4">Department</th>
                  <th class="py-3.5 px-4">Type</th>
                  <th class="py-3.5 px-4">Location</th>
                  <th class="py-3.5 px-4">Compensation</th>
                  <th class="py-3.5 px-4">Status</th>
                  <th class="py-3.5 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 dark:divide-slate-700/60 text-slate-700 dark:text-slate-300">
                ${filtered.map(emp => `
                  <tr class="hover:bg-slate-50/70 dark:hover:bg-slate-750/50 transition-colors">
                    <td class="py-3.5 px-4">
                      <div class="flex items-center gap-3">
                        <img src="${emp.avatar}" alt="${emp.name}" class="w-9 h-9 rounded-full object-cover">
                        <div>
                          <div class="font-bold text-slate-900 dark:text-white">${emp.name}</div>
                          <div class="text-[11px] text-slate-400">${emp.email}</div>
                        </div>
                      </div>
                    </td>
                    <td class="py-3.5 px-4 font-medium">${emp.department}</td>
                    <td class="py-3.5 px-4">${emp.type}</td>
                    <td class="py-3.5 px-4">${emp.location}</td>
                    <td class="py-3.5 px-4 font-bold text-slate-900 dark:text-white">$${(parseInt(emp.salary)).toLocaleString()}</td>
                    <td class="py-3.5 px-4">
                      <span class="px-2.5 py-1 rounded-full text-[10px] font-bold ${emp.status === 'Active' ? 'badge-active' : 'badge-leave'}">
                        ${emp.status}
                      </span>
                    </td>
                    <td class="py-3.5 px-4 text-right">
                      <button onclick="deleteEmployee(${emp.id})" class="text-rose-500 hover:text-rose-700 p-1">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                      </button>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      `}
    </div>
  `;
}

function attachDirectoryEvents() {
  const searchInput = document.getElementById('employee-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      AppState.searchQuery = e.target.value;
      renderApp();
    });
  }

  const deptSelect = document.getElementById('department-filter-select');
  if (deptSelect) {
    deptSelect.addEventListener('change', (e) => {
      AppState.departmentFilter = e.target.value;
      renderApp();
    });
  }

  const typeSelect = document.getElementById('type-filter-select');
  if (typeSelect) {
    typeSelect.addEventListener('change', (e) => {
      AppState.typeFilter = e.target.value;
      renderApp();
    });
  }

  document.getElementById('view-grid-btn')?.addEventListener('click', () => {
    AppState.directoryView = 'grid';
    renderApp();
  });

  document.getElementById('view-table-btn')?.addEventListener('click', () => {
    AppState.directoryView = 'table';
    renderApp();
  });
}

// -----------------------------------------------------------------------
// 3. SHIFT SCHEDULING VIEW
// -----------------------------------------------------------------------
function renderShiftsView() {
  const { shifts, employees } = AppState.data;
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  return `
    <div class="space-y-6">
      <!-- Roster Header Banner -->
      <div class="p-5 bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 rounded-2xl shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h3 class="text-base font-bold text-slate-800 dark:text-slate-100">Workforce & Smart Shift Rota</h3>
          <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">Week of Oct 26 - Nov 01, 2026 · ${shifts.length} active shifts scheduled</p>
        </div>
        <div class="flex items-center gap-3">
          <button onclick="openModal('add-shift-modal')" class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition-all shadow-md shadow-blue-500/20 flex items-center gap-1.5">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" /></svg>
            Assign New Shift
          </button>
        </div>
      </div>

      <!-- Weekly Calendar / Column Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4">
        ${days.map(day => {
          const dayShifts = shifts.filter(s => s.day.toLowerCase() === day.toLowerCase());
          const isToday = day === 'Wednesday'; // matching local mock date

          return `
            <div class="flex flex-col bg-white dark:bg-slate-800 border ${isToday ? 'border-blue-500 dark:border-blue-500 ring-2 ring-blue-500/20' : 'border-slate-200/80 dark:border-slate-700/80'} rounded-2xl p-3.5 shadow-sm min-h-[340px]">
              <div class="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-700/60">
                <span class="text-xs font-bold ${isToday ? 'text-blue-600 dark:text-blue-400' : 'text-slate-700 dark:text-slate-300'}">${day}</span>
                <span class="text-[10px] font-bold px-1.5 py-0.5 rounded-full ${isToday ? 'bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300' : 'bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300'}">
                  ${dayShifts.length}
                </span>
              </div>

              <div class="mt-3 flex-1 space-y-2.5 overflow-y-auto">
                ${dayShifts.length === 0 ? `
                  <div class="h-32 flex flex-col items-center justify-center text-slate-300 dark:text-slate-600 text-[11px]">
                    No shifts
                  </div>
                ` : `
                  ${dayShifts.map(shift => `
                    <div class="p-2.5 bg-slate-50 dark:bg-slate-850 border border-slate-200/60 dark:border-slate-700/50 rounded-xl relative group">
                      <div class="text-[10px] font-semibold text-blue-600 dark:text-blue-400 flex items-center justify-between">
                        <span>${shift.shiftTime}</span>
                        <button onclick="deleteShift(${shift.id})" title="Remove shift" class="opacity-0 group-hover:opacity-100 text-rose-500 hover:text-rose-700 transition-opacity">
                          &times;
                        </button>
                      </div>
                      <div class="text-xs font-bold text-slate-800 dark:text-slate-200 mt-1">${shift.employeeName}</div>
                      <div class="text-[10px] text-slate-400 truncate">${shift.role}</div>
                    </div>
                  `).join('')}
                `}
              </div>

              <button onclick="openModal('add-shift-modal')" class="mt-2 w-full py-1.5 text-[11px] font-medium text-slate-500 hover:text-blue-600 border border-dashed border-slate-200 dark:border-slate-700 hover:border-blue-400 rounded-lg transition-colors flex items-center justify-center gap-1">
                + Add
              </button>
            </div>
          `;
        }).join('')}
      </div>

      <!-- Relief Staffing & Open Shifts (StaffSync Hallmark Feature) -->
      <div class="p-5 bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-2xl shadow-md">
        <div class="flex items-center justify-between">
          <div>
            <h4 class="font-bold text-sm flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Relief Staffing & Standby Pool
            </h4>
            <p class="text-xs text-slate-400 mt-0.5">Instant coverage dispatch for sick calls or unexpected absence spikes</p>
          </div>
          <button onclick="showToast('Relief pool notified! Automated backup standby broadcast sent.', 'success')" class="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold rounded-xl transition-all shadow-sm">
            Broadcast Relief Call
          </button>
        </div>
      </div>
    </div>
  `;
}

function attachShiftsEvents() {}

// -----------------------------------------------------------------------
// 4. LEAVE & ATTENDANCE VIEW
// -----------------------------------------------------------------------
function renderLeavesView() {
  const { leaves } = AppState.data;

  return `
    <div class="space-y-6">
      <!-- Balance Highlights -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div class="p-5 bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 rounded-2xl shadow-sm">
          <div class="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Annual Paid Leave</div>
          <div class="mt-2 text-2xl font-extrabold text-slate-900 dark:text-white">18 / 25 <span class="text-xs font-normal text-slate-400">days left</span></div>
          <div class="w-full bg-slate-100 dark:bg-slate-700 h-2 rounded-full mt-3 overflow-hidden">
            <div class="bg-blue-600 h-full rounded-full" style="width: 72%"></div>
          </div>
        </div>

        <div class="p-5 bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 rounded-2xl shadow-sm">
          <div class="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Medical / Sick Leave</div>
          <div class="mt-2 text-2xl font-extrabold text-slate-900 dark:text-white">8 / 10 <span class="text-xs font-normal text-slate-400">days left</span></div>
          <div class="w-full bg-slate-100 dark:bg-slate-700 h-2 rounded-full mt-3 overflow-hidden">
            <div class="bg-emerald-500 h-full rounded-full" style="width: 80%"></div>
          </div>
        </div>

        <div class="p-5 bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 rounded-2xl shadow-sm">
          <div class="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Personal / Casual</div>
          <div class="mt-2 text-2xl font-extrabold text-slate-900 dark:text-white">3 / 5 <span class="text-xs font-normal text-slate-400">days left</span></div>
          <div class="w-full bg-slate-100 dark:bg-slate-700 h-2 rounded-full mt-3 overflow-hidden">
            <div class="bg-amber-500 h-full rounded-full" style="width: 60%"></div>
          </div>
        </div>
      </div>

      <!-- Header & Request CTA -->
      <div class="flex items-center justify-between p-4 bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 rounded-2xl shadow-sm">
        <div>
          <h3 class="font-bold text-slate-900 dark:text-white text-sm">Time-Off Requests & History</h3>
          <p class="text-xs text-slate-500 dark:text-slate-400">Manage vacation, medical, parental, and emergency leaves</p>
        </div>
        <button onclick="openModal('request-leave-modal')" class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition-all shadow-md shadow-blue-500/20 flex items-center gap-1.5">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" /></svg>
          New Leave Request
        </button>
      </div>

      <!-- Requests Table -->
      <div class="bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 rounded-2xl shadow-sm overflow-hidden">
        <div class="overflow-x-auto">
          <table class="w-full text-left text-xs">
            <thead class="bg-slate-50 dark:bg-slate-850 text-slate-500 uppercase tracking-wider font-semibold border-b border-slate-200 dark:border-slate-700">
              <tr>
                <th class="py-3.5 px-4">Employee</th>
                <th class="py-3.5 px-4">Leave Type</th>
                <th class="py-3.5 px-4">Dates</th>
                <th class="py-3.5 px-4">Duration</th>
                <th class="py-3.5 px-4">Reason</th>
                <th class="py-3.5 px-4">Status</th>
                <th class="py-3.5 px-4 text-right">Review</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100 dark:divide-slate-700/60 text-slate-700 dark:text-slate-300">
              ${leaves.map(req => {
                let badgeClass = 'badge-pending';
                if (req.status === 'Approved') badgeClass = 'badge-approved';
                if (req.status === 'Rejected') badgeClass = 'badge-rejected';

                return `
                  <tr class="hover:bg-slate-50/70 dark:hover:bg-slate-750/50 transition-colors">
                    <td class="py-3.5 px-4">
                      <div class="font-bold text-slate-900 dark:text-white">${req.employeeName}</div>
                      <div class="text-[11px] text-slate-400">${req.role}</div>
                    </td>
                    <td class="py-3.5 px-4 font-semibold text-blue-600 dark:text-blue-400">${req.type}</td>
                    <td class="py-3.5 px-4">${req.startDate} to ${req.endDate}</td>
                    <td class="py-3.5 px-4 font-bold">${req.days} day(s)</td>
                    <td class="py-3.5 px-4 text-slate-500 dark:text-slate-400 max-w-xs truncate">${req.reason || '—'}</td>
                    <td class="py-3.5 px-4">
                      <span class="px-2.5 py-1 rounded-full text-[10px] font-bold ${badgeClass}">
                        ${req.status}
                      </span>
                    </td>
                    <td class="py-3.5 px-4 text-right">
                      ${req.status === 'Pending' ? `
                        <div class="flex items-center justify-end gap-1.5">
                          <button onclick="updateLeaveStatus(${req.id}, 'Approved')" class="px-2.5 py-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg transition-colors">
                            Approve
                          </button>
                          <button onclick="updateLeaveStatus(${req.id}, 'Rejected')" class="px-2.5 py-1 bg-slate-200 hover:bg-rose-100 dark:bg-slate-700 dark:hover:bg-rose-950 text-slate-700 hover:text-rose-600 dark:text-slate-300 rounded-lg transition-colors">
                            Reject
                          </button>
                        </div>
                      ` : `
                        <span class="text-slate-400 text-[11px]">Finalized</span>
                      `}
                    </td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

function attachLeavesEvents() {}

// -----------------------------------------------------------------------
// 5. PAYROLL & COMPENSATION VIEW
// -----------------------------------------------------------------------
function renderPayrollView() {
  const { payroll, employees, stats } = AppState.data;

  return `
    <div class="space-y-6">
      <!-- Payroll Overview Card -->
      <div class="p-6 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white rounded-3xl shadow-xl relative overflow-hidden">
        <div class="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <span class="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              Current Cycle: October 2026
            </span>
            <div class="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight">
              $${(stats.monthlyPayroll).toLocaleString()}
              <span class="text-sm font-normal text-slate-300">gross expenditure</span>
            </div>
            <p class="text-xs text-slate-400 mt-1">Disbursement Date: Oct 31, 2026 · Automated direct deposit enabled</p>
          </div>
          <div class="flex flex-col sm:flex-row items-center gap-3">
            <button onclick="handleRunPayroll()" class="w-full sm:w-auto px-5 py-3 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl transition-all shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              Execute Payroll Batch
            </button>
            <button onclick="exportPayrollCSV()" class="w-full sm:w-auto px-4 py-3 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold rounded-xl backdrop-blur transition-all border border-white/15 flex items-center justify-center gap-1.5">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
              Export CSV
            </button>
          </div>
        </div>
      </div>

      <!-- Compensation Breakdown by Employee -->
      <div class="bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 rounded-2xl shadow-sm overflow-hidden">
        <div class="p-4 border-b border-slate-100 dark:border-slate-700 flex items-center justify-between">
          <h3 class="font-bold text-slate-900 dark:text-white text-sm">Individual Compensation Ledger</h3>
          <span class="text-xs text-slate-500 font-medium">${employees.length} salaried employees</span>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-left text-xs">
            <thead class="bg-slate-50 dark:bg-slate-850 text-slate-500 uppercase tracking-wider font-semibold border-b border-slate-200 dark:border-slate-700">
              <tr>
                <th class="py-3.5 px-4">Employee</th>
                <th class="py-3.5 px-4">Role</th>
                <th class="py-3.5 px-4">Annual Base</th>
                <th class="py-3.5 px-4">Monthly Gross</th>
                <th class="py-3.5 px-4">Est. Withholding (22%)</th>
                <th class="py-3.5 px-4">Net Monthly Payout</th>
                <th class="py-3.5 px-4 text-right">Status</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100 dark:divide-slate-700/60 text-slate-700 dark:text-slate-300">
              ${employees.map(emp => {
                const annual = parseInt(emp.salary) || 0;
                const monthly = Math.round(annual / 12);
                const tax = Math.round(monthly * 0.22);
                const net = monthly - tax;

                return `
                  <tr class="hover:bg-slate-50/70 dark:hover:bg-slate-750/50 transition-colors">
                    <td class="py-3.5 px-4 font-bold text-slate-900 dark:text-white">
                      ${emp.name}
                    </td>
                    <td class="py-3.5 px-4 text-slate-500 dark:text-slate-400">${emp.role}</td>
                    <td class="py-3.5 px-4 font-semibold text-slate-700 dark:text-slate-300">$${annual.toLocaleString()}</td>
                    <td class="py-3.5 px-4 font-bold text-slate-900 dark:text-white">$${monthly.toLocaleString()}</td>
                    <td class="py-3.5 px-4 text-rose-500">-$${tax.toLocaleString()}</td>
                    <td class="py-3.5 px-4 font-extrabold text-emerald-600 dark:text-emerald-400">$${net.toLocaleString()}</td>
                    <td class="py-3.5 px-4 text-right">
                      <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                        Ready
                      </span>
                    </td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>

      <!-- Past Payroll History -->
      <div class="bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 rounded-2xl shadow-sm p-5">
        <h3 class="font-bold text-slate-900 dark:text-white text-sm mb-4">Past Payroll Runs & Historical Cycles</h3>
        <div class="space-y-3">
          ${payroll.map(cycle => `
            <div class="flex items-center justify-between p-3.5 rounded-xl border border-slate-100 dark:border-slate-700/60 bg-slate-50/50 dark:bg-slate-850/50">
              <div>
                <div class="font-bold text-sm text-slate-800 dark:text-slate-200">${cycle.cycle}</div>
                <div class="text-xs text-slate-500 mt-0.5">Pay Date: ${cycle.payDate} · ${cycle.employeesCount} employees</div>
              </div>
              <div class="text-right">
                <div class="font-bold text-sm text-slate-900 dark:text-white">$${cycle.totalAmount.toLocaleString()}</div>
                <span class="inline-block mt-0.5 px-2 py-0.5 rounded-full text-[10px] font-bold ${cycle.status === 'Paid' ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300' : 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300'}">
                  ${cycle.status}
                </span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

function attachPayrollEvents() {}

// -----------------------------------------------------------------------
// ACTIONS & API MUTATIONS
// -----------------------------------------------------------------------

// Add Employee Form Submit
async function handleAddEmployee(e) {
  e.preventDefault();
  const form = e.target;
  const newEmp = {
    name: form.name.value.trim(),
    email: form.email.value.trim(),
    role: form.role.value.trim(),
    department: form.department.value,
    type: form.type.value,
    salary: parseInt(form.salary.value) || 75000,
    startDate: form.startDate.value || new Date().toISOString().split('T')[0],
    location: form.location.value.trim() || 'Remote',
    phone: form.phone.value.trim() || '+1 (555) 000-0000',
    status: 'Active',
    avatar: `https://images.unsplash.com/photo-${1530000000000 + Math.floor(Math.random()*100000000)}?w=150&auto=format&fit=crop&q=80`
  };

  if (API_BASE !== null) {
    try {
      const res = await fetch(`${API_BASE}/api/employees`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newEmp)
      });
      if (res.ok) {
        await loadData();
        closeModal('add-employee-modal');
        showToast(`Employee ${newEmp.name} added successfully!`, 'success');
        renderApp();
        return;
      }
    } catch(err) {
      console.warn("Backend unavailable, saving locally.", err);
    }
  }

  // Local fallback
  newEmp.id = Date.now();
  AppState.data.employees.unshift(newEmp);
  saveLocalData();
  closeModal('add-employee-modal');
  showToast(`Employee ${newEmp.name} added!`, 'success');
  renderApp();
}

// Delete Employee
async function deleteEmployee(id) {
  if (!confirm("Are you sure you want to offboard this employee?")) return;

  if (API_BASE !== null) {
    try {
      const res = await fetch(`${API_BASE}/api/employees/${id}`, { method: 'DELETE' });
      if (res.ok) {
        await loadData();
        showToast('Employee offboarded.', 'info');
        renderApp();
        return;
      }
    } catch (e) {
      console.warn("Backend unavailable, deleting locally.", e);
    }
  }

  AppState.data.employees = AppState.data.employees.filter(e => e.id !== id);
  saveLocalData();
  showToast('Employee offboarded.', 'info');
  renderApp();
}

// Add Shift
async function handleAddShift(e) {
  e.preventDefault();
  const form = e.target;
  const newShift = {
    employeeName: form.employeeName.value,
    role: form.role.value.trim(),
    department: form.department.value,
    day: form.day.value,
    shiftTime: form.shiftTime.value,
    status: 'Scheduled'
  };

  if (API_BASE !== null) {
    try {
      const res = await fetch(`${API_BASE}/api/shifts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newShift)
      });
      if (res.ok) {
        await loadData();
        closeModal('add-shift-modal');
        showToast('Shift scheduled successfully!', 'success');
        renderApp();
        return;
      }
    } catch (err) {
      console.warn("Backend unavailable, saving shift locally", err);
    }
  }

  newShift.id = Date.now();
  AppState.data.shifts.push(newShift);
  saveLocalData();
  closeModal('add-shift-modal');
  showToast('Shift scheduled successfully!', 'success');
  renderApp();
}

// Delete Shift
async function deleteShift(id) {
  if (API_BASE !== null) {
    try {
      const res = await fetch(`${API_BASE}/api/shifts/${id}`, { method: 'DELETE' });
      if (res.ok) {
        await loadData();
        showToast('Shift removed', 'info');
        renderApp();
        return;
      }
    } catch(e) {}
  }

  AppState.data.shifts = AppState.data.shifts.filter(s => s.id !== id);
  saveLocalData();
  showToast('Shift removed', 'info');
  renderApp();
}

// Request Leave Submit
async function handleRequestLeave(e) {
  e.preventDefault();
  const form = e.target;
  const newLeave = {
    employeeName: form.employeeName.value,
    role: form.role.value.trim(),
    type: form.type.value,
    startDate: form.startDate.value,
    endDate: form.endDate.value,
    days: parseInt(form.days.value) || 1,
    reason: form.reason.value.trim(),
    status: 'Pending',
    appliedOn: new Date().toISOString().split('T')[0]
  };

  if (API_BASE !== null) {
    try {
      const res = await fetch(`${API_BASE}/api/leaves`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newLeave)
      });
      if (res.ok) {
        await loadData();
        closeModal('request-leave-modal');
        showToast('Leave request submitted to manager queue!', 'success');
        renderApp();
        return;
      }
    } catch (err) {}
  }

  newLeave.id = Date.now();
  AppState.data.leaves.unshift(newLeave);
  saveLocalData();
  closeModal('request-leave-modal');
  showToast('Leave request submitted!', 'success');
  renderApp();
}

// Approve / Reject Leave
async function updateLeaveStatus(id, newStatus) {
  if (API_BASE !== null) {
    try {
      const res = await fetch(`${API_BASE}/api/leaves/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      });
      if (res.ok) {
        await loadData();
        showToast(`Leave request ${newStatus.toLowerCase()}!`, newStatus === 'Approved' ? 'success' : 'info');
        renderApp();
        return;
      }
    } catch (e) {}
  }

  const item = AppState.data.leaves.find(l => l.id === id);
  if (item) {
    item.status = newStatus;
    saveLocalData();
    showToast(`Leave request ${newStatus.toLowerCase()}!`, newStatus === 'Approved' ? 'success' : 'info');
    renderApp();
  }
}

// Run Payroll
async function handleRunPayroll() {
  const cycle = "November 2026";
  if (!confirm(`Execute automated payroll run for cycle ${cycle}?`)) return;

  if (API_BASE !== null) {
    try {
      const res = await fetch(`${API_BASE}/api/payroll/run`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cycle: cycle, payDate: '2026-11-30' })
      });
      if (res.ok) {
        await loadData();
        showToast(`Payroll for ${cycle} processed successfully! Direct deposits queued.`, 'success');
        switchTab('payroll');
        return;
      }
    } catch (e) {}
  }

  // Local fallback
  AppState.data.payroll.unshift({
    id: Date.now(),
    cycle: cycle,
    payDate: '2026-11-30',
    employeesCount: AppState.data.employees.length,
    totalAmount: AppState.data.stats.monthlyPayroll,
    status: 'Processed'
  });
  saveLocalData();
  showToast(`Payroll for ${cycle} processed! Direct deposits queued.`, 'success');
  switchTab('payroll');
}

// Export CSV
function exportPayrollCSV() {
  const { employees } = AppState.data;
  let csv = 'ID,Name,Email,Department,Role,Salary,MonthlyGross,EstTax,NetMonthly\n';
  employees.forEach(emp => {
    const annual = parseInt(emp.salary) || 0;
    const monthly = Math.round(annual / 12);
    const tax = Math.round(monthly * 0.22);
    const net = monthly - tax;
    csv += `"${emp.id}","${emp.name}","${emp.email}","${emp.department}","${emp.role}",${annual},${monthly},${tax},${net}\n`;
  });

  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `StaffSync_Payroll_${new Date().toISOString().split('T')[0]}.csv`;
  link.click();
  showToast('Payroll ledger downloaded as CSV', 'info');
}

// -----------------------------------------------------------------------
// MODAL CONTROLS & TOAST
// -----------------------------------------------------------------------
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');

    // Populate employee dropdown in shift modal if applicable
    if (id === 'add-shift-modal' || id === 'request-leave-modal') {
      const select = modal.querySelector('select[name="employeeName"]');
      if (select) {
        select.innerHTML = AppState.data.employees.map(e => `
          <option value="${e.name}">${e.name} (${e.role})</option>
        `).join('');
      }
    }
  }
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  const bgColors = {
    success: 'bg-emerald-600 text-white',
    warning: 'bg-amber-600 text-white',
    error: 'bg-rose-600 text-white',
    info: 'bg-slate-900 dark:bg-slate-700 text-white'
  };

  toast.className = `px-4 py-3 rounded-xl shadow-lg text-xs font-semibold flex items-center gap-2 transform transition-all duration-300 translate-y-2 opacity-0 ${bgColors[type] || bgColors.info}`;
  toast.innerHTML = `
    <span>${message}</span>
  `;

  container.appendChild(toast);
  setTimeout(() => {
    toast.classList.remove('translate-y-2', 'opacity-0');
  }, 10);

  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-2');
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}
