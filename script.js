function openModal() {
    document.getElementById('modal').style.display = 'flex';
    document.getElementById('modalOverlay').style.display = 'block';
  }

function closeModal() {
  document.getElementById('modal').style.display = 'none';
  document.getElementById('modalOverlay').style.display = 'none';
}

const taskForm = document.getElementById('taskForm');

  taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = {
      taskName: document.getElementById('taskName').value,
      description: document.getElementById('description').value,
      dueDate: document.getElementById('dueDate').value,
    };
    console.log('Form submitted:', formData);
    closeModal();
  });

function completeTask(){
  // change the icon to a filled radio button
  // move the task to 'completed'
}