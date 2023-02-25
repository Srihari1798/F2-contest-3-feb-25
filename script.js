
let tableData = [];


const addRowButton = document.getElementById("Add-table-btn");
const tableBody = document.getElementById("table-body");// Get elements


let rowCount = 0;  

addRowButton.addEventListener("click", () => {
  
  rowCount++;

 
  const newRow = document.createElement("tr");

  
  const idCell = document.createElement("td");
  idCell.innerText = rowCount;
  newRow.appendChild(idCell);


  const nameCell = createInputCell();
  newRow.appendChild(nameCell);

  const rollCell = createInputCell();
  newRow.appendChild(rollCell);

  const subjectCell = createInputCell();
  newRow.appendChild(subjectCell);

  const marksCell = createInputCell("number");
  newRow.appendChild(marksCell);

  const markedByCell = createInputCell("email");
  newRow.appendChild(markedByCell);

 
  const saveCell = document.createElement("td");
  const saveButton = document.createElement("button");
  saveButton.innerText = "Save";
  saveButton.style.backgroundColor ="black";
  saveButton.style.color= "white"
  saveButton.addEventListener("click", () => {
    saveRowData(newRow);
  });
  saveCell.appendChild(saveButton);
  newRow.appendChild(saveCell);


  tableBody.appendChild(newRow);
});


function createInputCell(type = "text") {
  const cell = document.createElement("td");
  const input = document.createElement("input");
  input.type = type;
  input.style.backgroundColor = "white";
  input.style.color = "black";
  input.style.border = "none";
  input.style.width = "100%";
  input.style.padding = "10px";
  cell.appendChild(input);
  return cell;
}


function saveRowData(row) {
  const id = parseInt(row.cells[0].innerText);
  const name = row.cells[1].querySelector("input").value;
  const roll = row.cells[2].querySelector("input").value;
  const subject = row.cells[3].querySelector("input").value;
  const marks = parseFloat(row.cells[4].querySelector("input").value);
  const markedBy = row.cells[5].querySelector("input").value;
  

//   validation
  if (name === "" || roll === "" || subject === "" || isNaN(marks) || markedBy === "") {
    alert("Please fill in all fields correctly.");
    return;
  }

  tableData.push({ id, student_name: name, student_roll: roll, subject, marks, markedBy });

//   new row to table data 
  console.log("New Row:", tableData[tableData.length - 1]);
  console.log("Table Data:", tableData);
}
