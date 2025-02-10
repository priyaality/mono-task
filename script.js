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

// This is to process/store form data in an object, presumably every field input from the form can be accessed by saying formData.name, formData.dueDate, etc..
//ref link: https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Sending_forms_through_JavaScript
/*
async function sendData(data) {
  // Construct a FormData instance
  const formData = new FormData();

  // Add a text field
  formData.append("name", "Pomegranate");

  // Add a file
  const selection = await window.showOpenFilePicker();
  if (selection.length > 0) {
    const file = await selection[0].getFile();
    formData.append("file", file);
  }

  try {
    const response = await fetch("https://example.org/post", {
      method: "POST",
      // Set the FormData instance as the request body
      body: formData,
    });
    console.log(await response.json());
  } catch (e) {
    console.error(e);
  }
}

const send = document.querySelector("#send");
send.addEventListener("click", sendData);

*/