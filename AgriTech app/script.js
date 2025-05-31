function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  if (username === "kiyash" && password === "MiloBlue123@Kiyash") {
    document.getElementById("loginScreen").style.display = "none";
    document.getElementById("mainContent").style.display = "flex";
    showSection("dashboard");
    renderGrowthChart();
    renderWeeklyChart();
  } else {
    alert("Invalid credentials. Please try again.");
  }
}

document.getElementById("dashboardLink").addEventListener("click", function() {
  showSection("dashboard");
  renderGrowthChart();
});

document.getElementById("sensorsLink").addEventListener("click", function() {
  showSection("sensors");
});

document.getElementById("reportsLink").addEventListener("click", function() {
  showSection("reports");
  renderWeeklyChart();
});

document.getElementById("settingsLink").addEventListener("click", function() {
  showSection("settings");
});

function showSection(sectionId) {
  const sections = document.querySelectorAll(".section");
  sections.forEach(section => {
    section.style.display = section.id === sectionId ? "block" : "none";
  });
}

function renderGrowthChart() {
  const ctx = document.getElementById('growthChart').getContext('2d');
  if (window.growthChartInstance) window.growthChartInstance.destroy();
  window.growthChartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'],
      datasets: [{
        label: 'Plant Growth',
        data: [0, 2, 5, 7, 10],
        backgroundColor: 'rgba(58, 166, 85, 0.2)',
        borderColor: '#3aa655',
        borderWidth: 2,
        tension: 0.3
      }]
    }
  });
}

function renderWeeklyChart() {
  const ctx = document.getElementById('weeklyChart').getContext('2d');
  if (window.weeklyChartInstance) window.weeklyChartInstance.destroy();
  window.weeklyChartInstance = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [{
        label: 'Avg Temp °C',
        data: [23, 24, 22, 25, 24, 23, 24],
        backgroundColor: '#3aa655'
      }]
    }
  });
}