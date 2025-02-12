import {Low} from "lowdb";
import { JSONFile } from "lowdb/node";
import lodash from "lodash";

const defaultData = {
    users: [], //for user info
    tasks: [], //for all the tasks
    lists: [], //for the lists that a task would be categorised into
    tags: [], //for tags that would be assigned to a task
    taskTags: [] //junction table for the many to many relationships between tags and tasks
}

const adapter = new JSONFile('db.json');
const db = new Low(adapter, defaultData);

function openModal() {
    document.getElementById('modal').style.display = 'flex';
    document.getElementById('modalOverlay').style.display = 'block';
  }

function closeModal() {
  document.getElementById('modal').style.display = 'none';
  document.getElementById('modalOverlay').style.display = 'none';
}

  const taskForm = document.getElementById('taskForm');

taskForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = {
    taskName: document.getElementById('taskName').value,
    description: document.getElementById('description').value,
    dueDate: document.getElementById('dueDate').value,
  };
  console.log('Form submitted:', formData);
  try {
    const newTask = await handleTaskForm(formData);
    console.log('Task saved:', newTask);
  } catch (error) {
      console.error('Error saving task:', error);
  }
  closeModal();
});

// Read data from the database
await db.read();

// Example function to handle form submission
async function handleTaskForm(formData) {
    // Create a new task object from form data
    const newTask = {
        id: Date.now(), // Simple way to generate unique ID
        taskName: formData.taskName,
        description: formData.description,
        dueDate: formData.dueDate,
        // Add other task properties as needed
        createdAt: new Date().toISOString()
    };

    // Add the new task to the tasks array
    db.data.tasks.push(newTask);

    // Write the updated data back to the database
    await db.write();

    return newTask;
}