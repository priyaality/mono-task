// import {Low} from "lowdb";
// import { JSONFile } from "lowdb/node";
// import lodash from "lodash";

// const defaultData = {
//     users: [], //for user info
//     tasks: [], //for all the tasks
//     lists: [], //for the lists that a task would be categorised into
//     tags: [], //for tags that would be assigned to a task
//     taskTags: [] //junction table for the many to many relationships between tags and tasks
// }

// const adapter = new JSONFile('db.json');
// const db = new Low(adapter, defaultData);

function openModal() {
    document.getElementById('modal').style.display = 'flex';
    document.getElementById('modalOverlay').style.display = 'block';
  }

function closeModal() {
  document.getElementById('modal').style.display = 'none';
  document.getElementById('modalOverlay').style.display = 'none';
}

function completeTask(){
  // change the icon to a filled radio button
  // move the task to 'completed'
}

function createTask(){
  // collect the info in the input and assign them to variables
  var taskName = document.getElementById('taskName').innerText;
  var taskDescription = document.getElementById('taskDescription').innerText;
  var dueDate = document.getElementById('dueDate').innerText;
  console.log(taskName);
  console.log(taskDescription);
  console.log(dueDate);
  //push the content in the variables to the db
  //show the contents in the db on the main screen -> showList()?
}