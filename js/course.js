// course.js - handles course data and rendering

document.addEventListener("DOMContentLoaded", function () {
  const courseContainer = document.getElementById("courseContainer");
  const creditSpan = document.getElementById("totalCredits");

  const courses = [
    { code: "WDD130", name: "Web Fundamentals", subject: "WDD", credits: 3, completed: true },
    { code: "WDD131", name: "Responsive Design", subject: "WDD", credits: 3, completed: false },
    { code: "WDD132", name: "JavaScript Basics", subject: "WDD", credits: 3, completed: true },
    { code: "CSE121b", name: "JavaScript Language", subject: "CSE", credits: 3, completed: false },
    { code: "CSE110", name: "Intro to Programming", subject: "CSE", credits: 2, completed: true }
  ];

  function renderCourses(filter = "all") {
    courseContainer.innerHTML = "";
    const filtered = filter === "all" ? courses : courses.filter(c => c.subject === filter);

    filtered.forEach(course => {
      const card = document.createElement("div");
      card.classList.add("course-card");
      if (course.completed) card.classList.add("completed");
      card.innerHTML = `<h3>${course.code}</h3><p>${course.name}</p><p>Credits: ${course.credits}</p>`;
      courseContainer.appendChild(card);
    });

    const totalCredits = filtered.reduce((sum, course) => sum + course.credits, 0);
    creditSpan.textContent = totalCredits;
  }

  // Filter button handlers
  document.querySelectorAll(".filter-buttons button").forEach(button => {
    button.addEventListener("click", () => {
      renderCourses(button.dataset.subject);
    });
  });

  renderCourses(); // Initial load
});
