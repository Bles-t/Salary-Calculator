console.log("Hello jWorld");
let maxSalary = 20000;
let monthCounter = 0
function submitForm(event) {
  console.log(submitForm);

  event.preventDefault();


  let fNameVal = document.querySelector('#fName-input').value;;
  let lNameVal = document.querySelector('#lName-input').value;
  let iDVal = document.querySelector('#iD-input').value;
  let titleVal = document.querySelector('#title-input').value;
  let aSalVal = document.querySelector('#aSalary-input').value;


  let salaryTable = document.querySelector('#salaryData');
  let monthlyTotal = document.querySelector('#totalSum');

  salaryTable.innerHTML += `
  <tr>

  <td>${fNameVal}</td>
  <td>${lNameVal}</td>
  <td>${iDVal}</td>
  <td>${titleVal}</td>
  <td>${aSalVal}</td>
  <td><button onclick="removeRow(event)">Delete</button></td>
</tr>`



  monthCounter += Number(aSalVal);

  monthlyTotal.innerHTML = `
  <div>
  <p id="totalSum" class="total ${monthCounter > 20000 ? 'highLight' : ''}">Total Monthly:${monthCounter}</p>
</div>
  `;

  console.log(salaryTable);

  if (Number(monthCounter) > maxSalary) {
    console.log("To highjt")
  }

}


function removeRow(event) {
  const deltaRow = event.target.closest('tr');

  const deletedSalary = Number(deltaRow.querySelector('td:nth-child(5)').textContent);
  deltaRow.remove();

  monthCounter -= deletedSalary;

  updateTotalMonthly()

}
function updateTotalMonthly() {
  let monthlyTotal = document.querySelector('#totalSum');
  monthlyTotal.textContent = `Total Monthly: ${monthCounter}`;
}
