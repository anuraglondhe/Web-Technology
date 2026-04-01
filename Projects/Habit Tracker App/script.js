const habitInput = document.getElementById("habitInput");
const addHabitBtn = document.getElementById("addHabit");
const habitList = document.getElementById("habitList");

let habits = JSON.parse(localStorage.getItem("habits")) || [];

function saveHabits() {
    localStorage.setItem("habits", JSON.stringify(habits));
}

function renderHabits() {
    habitList.innerHTML = "";

    habits.forEach(function(habit, index) {
        const li = document.createElement("li");
        li.textContent = habit.name;

        if (habit.completed) {
            li.classList.add("completed");
        }

        const completeBtn = document.createElement("button");
        completeBtn.textContent = "Complete";

        completeBtn.addEventListener("click", function() {
            habits[index].completed = !habits[index].completed;
            saveHabits();
            renderHabits();
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";

        deleteBtn.addEventListener("click", function() {
            habits.splice(index, 1);
            saveHabits();
            renderHabits();
        });

        li.appendChild(completeBtn);
        li.appendChild(deleteBtn);
        habitList.appendChild(li);
    });
}

addHabitBtn.addEventListener("click", function() {
    const habitText = habitInput.value.trim();

    if (habitText === "") return;

    habits.push({ name: habitText, completed: false });

    saveHabits();
    renderHabits();
    habitInput.value = "";
});

renderHabits();