

const jobContainer = document.getElementById("job-container");

const totalNumber = document.getElementById("total-number");
const interviewNumber = document.getElementById("interview-number");
const rejectedNumber = document.getElementById("rejected-number");
const jobCount = document.getElementById("job-count");
const emptyMessage = document.getElementById("empty-message");

let interviewCount = 0;
let rejectedCount = 0;
let totalJobs = document.querySelectorAll(".job-card").length;
     updateDashboard();


jobContainer.addEventListener("click", function (e) {
  const card = e.target.closest(".job-card");
  if (!card) return;

  const badge = card.querySelector(".status-badge");

  if (e.target.classList.contains("interview-btn")) {

    if (card.dataset.status === "interview") return;

    if (card.dataset.status === "rejected") {
      rejectedCount--;
    }

    card.dataset.status = "interview";
    interviewCount++;
    badge.innerText = "INTERVIEW";
    badge.className =
      "status-badge px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold";
    updateDashboard();
}
  if (e.target.classList.contains("rejected-btn")) {
    if (card.dataset.status === "rejected") return;

    if (card.dataset.status === "interview") {
          interviewCount--;}

    card.dataset.status = "rejected";
    rejectedCount++;
    badge.innerText = "REJECTED";
    badge.className ="status-badge px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-semibold";
    updateDashboard();}

  if (e.target.closest(".delete-btn")) {
    if (card.dataset.status === "interview") interviewCount--;
    if (card.dataset.status === "rejected") rejectedCount--;
    card.remove();
    totalJobs--;
    updateDashboard();
    filterJobs(currentFilter);  }
});
let currentFilter = "all";

document.getElementById("all-tab").addEventListener("click", () => {
  currentFilter = "all";
  filterJobs("all");
});
document.getElementById("interview-tab").addEventListener("click", () => {
  currentFilter = "interview";
  filterJobs("interview");
});
document.getElementById("rejected-tab").addEventListener("click", () => {
  currentFilter = "rejected";
  filterJobs("rejected");
});
function filterJobs(type) {
  const cards = document.querySelectorAll(".job-card");
  let visible = 0;

  cards.forEach(card => {

  if (type === "all") {
     card.style.display = "block";
         visible++;
    }
    else if (card.dataset.status === type) {
          card.style.display = "block";
      visible++;
    }
    else {
      card.style.display = "none";
  }
  });

jobCount.innerText = visible + " Jobs";

if (visible === 0) {
    emptyMessage.classList.remove("hidden");
 } else {
    emptyMessage.classList.add("hidden");
  }
}

function updateDashboard() {
  totalNumber.innerText = totalJobs;
  interviewNumber.innerText = interviewCount;
  rejectedNumber.innerText = rejectedCount;
}