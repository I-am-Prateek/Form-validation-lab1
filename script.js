function addactivity() {
    var table = document.getElementById("table-data");
    const activity = document.getElementById('activity').value;
    const weight = document.getElementById('weight').value;

    if (!activity || !weight || weight < 1 || weight > 100) {
        alert('Please enter the data correctly.');
    }
        else{
            const table = document.getElementById('table-data').getElementsByTagName('tbody')[0];
            const newRow = table.insertRow(table.rows.length);
    
            const myactivityno = newRow.insertCell(0);
            myactivityno.innerText = table.rows.length - 1;
    
            const myactivity = newRow.insertCell(1);
            myactivity.innerText = activity;
    
            const mypercentage = newRow.insertCell(2);
            mypercentage.innerText = `${weight}`;
    
            const mygrade = newRow.insertCell(3);
            
            document.getElementById('activity').value = '';
            document.getElementById('weight').value = '';

        }
    }

    function addGrade() {
        const grade = document.getElementById('grade').value;
        const activityNo = document.getElementById('activityNo').value;
        const table = document.getElementById('table-data').getElementsByTagName('tbody')[0];
        
        if (!activityNo) {
            alert('Please add Activity No.');
        } 
        else if (!grade || isNaN(grade) || grade < 1 || grade > 100 || activityNo < 1 || activityNo > table.rows.length - 1) {
            alert('Please fill the data correctly.');
        } 
        else {
            table.rows[activityNo].cells[3].innerText = `${grade}`;
            
            document.getElementById('grade').value = '';
            document.getElementById('activityNo').value = '';
        }
    }

    function deleteActivity() {
        const table = document.getElementById('table-data').getElementsByTagName('tbody')[0];
        if (table.rows.length > 1) {
            table.deleteRow(table.rows.length - 1);
        }
        else{
            document.getElementById("my-msg").innerHTML = "Message: No more data to delete";
        }
    }