rowCount=5;                 // This is to define I have 5 rows initially
secCount=5;

function myinsertfunction() {
    var table = document.getElementById("table-data");
    const activity = document.getElementById('activity').value;
    const weight = document.getElementById('weight').value;

    if (!activity,!weight, weight < 1, weight > 100) {
        alert('Please enter the data correctly.');
    
    var row = table.insertRow(-1);  // It inserts the row from the last most row
    var Col1 = row.insertCell(0);
    var Col2 = row.insertCell(1);
    
    rowCount++;
    secCount++;
    Col1.innerHTML = "Row" +rowCount+ " Col1";
    Col2.innerHTML = "Row" +rowCount+ " Col2";
    document.getElementById("my-msg").innerHTML = "";
}