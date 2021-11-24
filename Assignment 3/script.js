// Function for div expansion on dropdown click
function dropDownText(ele) {
  if (ele.parentNode.parentNode.nextElementSibling.style.display !== "block") {
    ele.parentNode.parentNode.nextElementSibling.style.display = "block";
  } else {
    ele.parentNode.parentNode.nextElementSibling.style.display = "none";
  }
}

// Function to check if all Checkboxes are checked or not
function checkCheckBoxes() {
  var isChecked =
    document.querySelectorAll("input:checked").length === 0 ? false : true;
  return isChecked;
}

// Function for clickbox
function checkBoxClick(ele) {
  var submitButton = document.getElementById("button");
  checkBoxStatus = checkCheckBoxes();

  if (ele.checked) {
    // Changing highlight color of table row
    ele.parentNode.parentNode.style.background = "#FFB100";
    submitButton.style.background = "#FFB100";
    submitButton.style.border = "2px solid #FFB100";
    document.getElementById("deleteColumn").style.display = "table-cell";
    ele.parentNode.parentNode.lastElementChild.style.display = "table-cell";
  } else {
    ele.parentNode.parentNode.style.background = "#FFFFFF";
    submitButton.style.background = "#C4C4C4";
    submitButton.style.border = "2px solid #AAAAAA";
    document.getElementById("deleteColumn").style.display = "none";
    ele.parentNode.parentNode.lastElementChild.style.display = "none";
  }
  if (checkCheckBoxes()) {
    submitButton.style.background = "#FFB100";
    submitButton.style.border = "2px solid #FFB100";
    document.getElementById("deleteColumn").style.display = "table-cell";
  }
}

// Function to delete a Row
function deleteStudentRow(ele) {
  var submitbutton = document.getElementById("button");
  var deleteHeader = document.getElementById("deleteColumn");
  var deleteRowSelected = ele.parentNode.parentNode;
  var nextDeleteRowSelected = ele.parentNode.parentNode.nextElementSibling;

  deleteRowSelected.parentNode.removeChild(deleteRowSelected);
  nextDeleteRowSelected.parentNode.removeChild(nextDeleteRowSelected);

  if (document.querySelectorAll("input:checked").length === 0) {
    deleteHeader.style.display = "none";
    submitbutton.style.border = "2px solid #AAAAAA";
    submitbutton.style.background = "#C4C4C4";
  } else {
    deleteHeader.style.display = "table-cell";
  }
}

// Function for adding a New Student
function addNewStudent() {
  var table = document.getElementById("myTable");
  var tableRef = document
    .getElementById("myTable")
    .getElementsByTagName("tbody")[0];
  var newRow = tableRef.insertRow(tableRef.rows.length);
  var colCount = tableRef.rows[0].cells.length;

  var cell0 = newRow.insertCell(0);
  var cell1 = newRow.insertCell(1);
  var cell2 = newRow.insertCell(2);
  var cell3 = newRow.insertCell(3);
  var cell4 = newRow.insertCell(4);
  var cell5 = newRow.insertCell(5);
  var cell6 = newRow.insertCell(6);
  var cell7 = newRow.insertCell(7);
  var cell8 = newRow.insertCell(8);

  var clickHTML = `<td>
  <input
    id="checkbox"
    type="checkbox"
    onclick="checkBoxClick(this)"
  /><br /><br /><img
    onclick="dropDownText(this)"
    src="down.png"
    width="25px"
  />
</td>`;

  // console.log(table.rows[table.rows.length - 2]);

  cell0.innerHTML = clickHTML;
  cell1.innerHTML = "<td>Student </td>" + Math.floor(table.rows.length / 2 + 1);
  cell2.innerHTML = "<td>Teacher </td>" + Math.floor(table.rows.length / 2 + 1);
  cell3.innerHTML = "<td>Approved</td>";
  cell4.innerHTML = "<td>Fall</td>";
  cell5.innerHTML = "<td>TA</td>";
  cell6.innerHTML = "<td>1500</td>";
  cell7.innerHTML = "<td>100%</td>";
  cell8.innerHTML =
    "<td id='deleteButton'><button onclick='deleteStudentRow(this)'>Delete</button></td>";
  cell8.style.display = "none";

  var newTextArea = tableRef.insertRow(tableRef.rows.length);
  // var textAreaCount = tableRef.rows[0].cells.length;

  var textArea = newTextArea.insertCell(0);
  var dropDownText = `<td colspan="8" style="border: none">
  Advisor:
  <br />
  <br />
  Award Details
  <br />
  Summer 1-2014(TA)
  <br />
  Budget Number: <br />
  Tuition Number: <br />
  Comments:
  <br />
  <br />
  <br />
  Award Status:
  <br />
  <br />
  <br />
</td>`;
  textArea.innerHTML = dropDownText;
  textArea.parentNode.style.display = "none";
}
