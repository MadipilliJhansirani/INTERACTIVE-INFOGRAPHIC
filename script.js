document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById("dataChart").getContext("2d");
  const darkModeToggle = document.getElementById("darkModeToggle");
  const dataCategory = document.getElementById("dataCategory");
  const dataRange = document.getElementById("dataRange");

  let chartData = [20, 35, 45, 60, 25, 50];

  const myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["A", "B", "C", "D", "E", "F"],
      datasets: [
        {
          label: "Data Points",
          data: chartData,
          backgroundColor: "rgba(75, 192, 192, 0.6)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      animation: {
        duration: 1500,
        easing: "easeOutBounce",
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  // Dark Mode Toggle
  darkModeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
  });

  // Update Data on Dropdown Change
  dataCategory.addEventListener("change", function () {
    let newData = [];
    if (dataCategory.value === "sales") {
      newData = [15, 30, 40, 55, 20, 35];
    } else {
      newData = [50, 70, 90, 120, 80, 100];
    }
    myChart.data.datasets[0].data = newData;
    myChart.update();
  });

  // Range Slider Interaction
  dataRange.addEventListener("input", function () {
    let value = parseInt(dataRange.value);
    chartData = chartData.map(() => Math.floor(Math.random() * value));
    myChart.data.datasets[0].data = chartData;
    myChart.update();
  });
});
