console.log("Hello World");

function submitForm(event) {
  console.log(submitForm);

  event.preventDefault();


  let fNameVal = document.querySelector('#fName-input').value;;
  let lNameVal = document.querySelector('#lName-input').value;
  let iDVal = document.querySelector('#iD-input').value;
  let titleVal = document.querySelector('#title-input').value;
  let aSalVal = document.querySelector('#aSalary-input').value;


  let salaryTable = document.querySelector('#salaryData');

  salaryTable.innerHTML += `
  <tr>

  <td>${fNameVal}</td>
  <td>${lNameVal}</td>
  <td>${iDVal}</td>
  <td>${titleVal}</td>
  <td>${aSalVal}</td>
  <td><button onclick="removeRow(

    )">Delete</button></td>
</tr>`

  console.log(salaryTable);
  

}


function removeRow(event) {

  event.target.closest('tr').remove();

}
