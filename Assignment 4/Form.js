// Function for data input validation
function formValidation(object, type, nameType) {
  var regExName = /^[a-zA-Z]+$/;
  var regExEmail = /([\w\.]+)@([\w\.]+)\.(\w+)/;
  var regExPhone = /\d{3}-?\d{3}-\d{4}$/;
  var regExZipcode = /(^\d{5}$)|(^\d{5}-\d{4}$)/;

  var name = "errorMsg" + nameType;
  //errorMsgFName;
  switch (type) {
    case 1:
      if (!object.value.trim().match(regExName)) {
        object.style.border = "2px solid red";
        document.getElementById(name).style.display = "block";
        object.value = "";
      } else {
        object.style.border = "";
        document.getElementById(name).style.display = "none";
      }
      break;
    case 2:
      if (!object.value.match(regExEmail)) {
        object.style.border = "2px solid red";
        document.getElementById("errorMsgEmailId").style.display = "block";
        object.value = "";
      } else {
        object.style.border = "";
        document.getElementById("errorMsgEmailId").style.display = "none";
      }
      break;
    case 3:
      if (!object.value.match(regExPhone)) {
        object.style.border = "2px solid red";
        document.getElementById("errorMsgPhone").style.display = "block";
        object.value = "";
      } else {
        object.style.border = "";
        document.getElementById("errorMsgPhone").style.display = "none";
      }
      break;
    case 4:
      if (!object.value.match(regExZipcode)) {
        object.style.border = "2px solid red";
        document.getElementById("errorMsgZipcode").style.display = "block";
        object.value = "";
      } else {
        object.style.border = "";
        document.getElementById("errorMsgZipcode").style.display = "none";
      }
      break;
  }
}

// List of checkbox
var drinks_extra = [
  "Cream ($2)",
  "Large($3)",
  "Chocolate ($2)",
  "Large($3)",
  "Large($2)",
];

// Function for displaying checkbox after Drink Selection
function drinkSelection() {
  var selected_drink = document.getElementById("drinks");
  document.getElementById("drinks_extra").style.display = "block";
}

var selected_drink = document.getElementById("drinks");
let select = document.querySelector("#drinks");
let result = document.querySelector("#drinkextra");
select.addEventListener("change", function () {
  result.textContent = drinks_extra[selected_drink.selectedIndex - 1];
});

// Function for displaying textarea after checking checkbox
function isInputChecked(ele) {
  var selected_drinks = document.getElementById("drinks");

  if (ele.checked) {
    document.getElementById("checked-message").style.display = "block";
  } else {
    document.getElementById("checked-message").style.display = "none";
  }
}

// Function for saving form data and display
function formSubmit() {
  //   document.getElementById("myTable").style.display = "none";
  var inputs = document.getElementById("myForm").elements;

  var title = document.querySelector('input[name="title"]:checked').value;

  var name = inputs["firstName"].value;
  var lastName = inputs["lastName"].value;
  var email = inputs["emailId"].value;
  var phoneNumber = inputs["phoneNumber"].value;
  var zipcode = inputs["zipcode"].value;
  var source = document.querySelector(".source:checked").value;
  var drinks = inputs["drinks"].value;
  var extra = document.getElementById("drinkextra").textContent;
  var customise = document.getElementById("checked-message").value;
  var comments = document.getElementById("comments").value;

  //add row in table

  var table = document.getElementById("myTable");
  var tableRef = document
    .getElementById("myTable")
    .getElementsByTagName("tbody")[0];
  var newRow = tableRef.insertRow(tableRef.rows.length);

  var cell0 = newRow.insertCell(0);
  var cell1 = newRow.insertCell(1);
  var cell2 = newRow.insertCell(2);
  var cell3 = newRow.insertCell(3);
  var cell4 = newRow.insertCell(4);
  var cell5 = newRow.insertCell(5);
  var cell6 = newRow.insertCell(6);
  var cell7 = newRow.insertCell(7);
  var cell8 = newRow.insertCell(8);
  var cell9 = newRow.insertCell(9);
  var cell10 = newRow.insertCell(10);

  cell0.innerHTML = "<td>" + title + "</td>";
  cell1.innerHTML = "<td>" + name + "</td>";
  cell2.innerHTML = "<td>" + lastName + "</td>";
  cell3.innerHTML = "<td>" + email + "</td>";
  cell4.innerHTML = "<td>" + phoneNumber + "</td>";
  cell5.innerHTML = "<td>" + zipcode + "</td>";
  cell6.innerHTML = "<td>" + source + "</td>";
  cell7.innerHTML = "<td>" + drinks + "</td>";
  cell8.innerHTML = "<td>" + extra + "</td>";
  cell9.innerHTML = "<td>" + customise + "</td>";
  cell10.innerHTML = "<td>" + comments + "</td>";

  return false;
}
