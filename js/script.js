const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const total = document.getElementById("total");
const done = document.getElementById("done");

function addTask() {
  const text = taskInput.value.trim();
  if (text === "") {
    alert("Tugas tidak boleh kosong!");
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `
    <span>📚 ${text}</span>
    <div class="actions">
      <button onclick="toggleDone(this)">✔</button>
      <button onclick="deleteTask(this)">🗑</button>
    </div>
  `;

  taskList.appendChild(li);
  taskInput.value = "";
  updateCount();
}

function toggleDone(btn) {
  btn.closest("li").classList.toggle("done");
  updateCount();
}

function deleteTask(btn) {
  btn.closest("li").remove();
  updateCount();
}

function updateCount() {
  total.textContent = taskList.children.length;
  done.textContent = document.querySelectorAll(".done").length;
}
