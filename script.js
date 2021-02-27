var addBtn = document.querySelector(".todo-list-add-btn");

addBtn.addEventListener("click", function (e) {
  var newToDo = document.querySelector(".todo-list-input").value; // grab the new data from the input field
  var localToDoData = localStorage.getItem("localToDoData"); //store the localStorage data named localToDoData into variable localToDoData
  //if localToDoData variable dont have data inside
  if (!localToDoData) {
    localStorage.setItem("localToDoData", JSON.stringify(new Array(newToDo))); //set the data inside localToData variable and enter the data into newToDo array
    localToDoData = JSON.parse(localStorage.getItem("localToDoData")); // get the data entered in localStorage and store it in localToDoData var
  } else {
    localToDoData = JSON.parse(localToDoData); // dont know
    localToDoData.push(newToDo); // dont know
    //console.log(localToDoData);
    localStorage.setItem("localToDoData", JSON.stringify(localToDoData)); //set the value of localToDoData in localStorage
  }

  var completed = "completed";
  var checked = "CHECKED=''";
  let newListItem = ``;
  for (let i = 0; i < localToDoData.length; i++) {
    newListItem = `
      <li class="">
      <div class="form-check">
        <label class="form-check-label">
          <input class="checkbox" type="checkbox" } />
          ${localToDoData[i]} <i class="input-helper"></i
        ></label>
      </div>
      <i class="remove mdi mdi-close-circle-outline"></i>
    </li>
      `; //bootstrapp
  }
  var toDoListData = document.createElement("ul"); // create new element unordered list and store it in toDoListData
  toDoListData.className = "d-flex flex-column-reverse todo-list"; //add bootstrapp class to the toDoListData
  toDoListData.innerHTML = newListItem; //runs the above html code that was stored in newListenItem variable

  var toDoList = document.querySelector(".list-wrapper"); //select the very first item of list-wrapper class

  toDoList.append(toDoListData); //appends newly entered data into the todo list
});
``
var localToDoData = JSON.parse(localStorage.getItem("localToDoData")); // dont know
if (null !== localToDoData) {
  let newListItem = ``;
  for (let i = 0; i < localToDoData.length; i++) {
    newListItem += `
      <li class="">
      <div class="form-check">
        <label class="form-check-label">
          <input class="checkbox" type="checkbox" } />
          ${localToDoData[i]} <i class="input-helper"></i
        ></label>
      </div>
      <i class="remove mdi mdi-close-circle-outline"></i>
    </li>
      `;
  }
  var toDoListData = document.createElement("ul");
  toDoListData.className = "d-flex flex-column-reverse todo-list";
  toDoListData.innerHTML = newListItem;

  var toDoList = document.querySelector(".list-wrapper");

  toDoList.append(toDoListData);
}
