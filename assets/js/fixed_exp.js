

const table_fix = document.getElementById("tableDiv_fix").querySelector("table");
const addButton_fix = document.getElementById("add-button_fix")
const minusButton_fix = document.getElementById("minus-button_fix")

function addCommas(number) {
    return new Intl.NumberFormat('en-IN').format(number);
}


// Function to add a new row
function addRow_fix() {
    const newRow = table_fix.insertRow();
    const newCell1 = newRow.insertCell();
    const newCell2 = newRow.insertCell();
    const newCell3 = newRow.insertCell();
    newCell1.innerHTML = '<input class="inputs" placeholder="Enter name of Expenditure" value="" />';
    newCell3.innerHTML = '<input class="inputs" onchange="populate_total_fix()" placeholder="Enter Numerical Value" value="0" />';
    newCell2.innerHTML ='<select id="unit" onchange="populate_total_fix()" class="inputs"><option value="1">Tens</option><option value="2">Hundreds</option><option value="3" selected>Thousands</option><option value="4">Lakhs</option><option value="5">Crores</option></select>'
}



// Function to remove a row
function removeRow_fix() {
    const rows = table_fix.getElementsByTagName('tr');
    if (rows.length > 1) { // Check if there's more than one row to prevent removing the header
        table_fix.deleteRow(rows.length - 1);
        populate_total_fix()
    }
    
}




// Fetching data from table and inserting into localstorage
function retrieveTableDatafix() {
    
    // Get the table element
    const table_fix = document.getElementById("tableDiv_fix").querySelector("table");
    
    // Initialize an array to store the data
    const tableData = [];
    
    // Iterate through each row of the table
    for (let i = 1; i < table_fix.rows.length; i++) {
        const row = table_fix.rows[i];
        
        // Initialize an object to store the data for the current row
        const rowData = {};
        // Iterate through each cell of the row
        for (let j = 0; j < row.cells.length; j++) {
            const cell = row.cells[j];
           
            if(j==1){
                rowData["column" + j] = cell.querySelector("select").value;
            }else{
                rowData["column" + j] = cell.querySelector("input").value;

            }
            // Retrieve the input value from the cell and store it in the rowData object
        }
        // Push the rowData object to the tableData array
        tableData.push(rowData);
    }
    
    
    const jsonString = JSON.stringify(tableData)
    console.log(jsonString)
    localStorage.setItem('data_fix',jsonString);
    
    swal({text:"Fixed Expenditure data has been saved",showConfirmButton:false});
    console.log(document.getElementById('total_fix').innerText+"total fix");
    // Return the tableData array containing all the table data

    localStorage.setItem('total_fix', document.getElementById('total_fix').innerText);
    return tableData;
   

}


function populate_fix(){
    const table_fix = document.getElementById("tableDiv_fix").querySelector("table");
    //deleting all rows'
    var rows = table_fix.getElementsByTagName("tr");
    for (var i = rows.length-1; i > 0; i--) {
        table_fix.deleteRow(i);
    }

    var data=JSON.parse(localStorage.getItem('data_fix'));
    // Iterate through each row of the table
   console.log(data)
    if(data==null){
        addRow_fix()
        addRow_fix()
    }  else {
  
    
    for (let i = 0; i < data.length; i++) {

        const newRow = table_fix.insertRow();
        var track=0;
        for (let key in data[i]) {
            // Insert a new cell for each property
            const newCell = newRow.insertCell();
            // Set the innerText of the cell to the value of the current property
            

            if(track==2){
                if(parseInt(data[i][key])==1){
                    newCell.innerHTML ='<select id="unit" onchange="populate_total_fix()" class="inputs"><option value="1">Tens</option><option value="2">Hundreds</option><option value="3" selected>Thousands</option><option value="4">Lakhs</option><option value="5">Crores</option></select>'
                } else if (parseInt(data[i][key])==2){
                    newCell.innerHTML ='<select id="unit" onchange="populate_total_fix()" class="inputs"><option value="1">Tens</option><option value="2">Hundreds</option><option value="3" selected>Thousands</option><option value="4">Lakhs</option><option value="5">Crores</option></select>'
                } else{
                    newCell.innerHTML ='<select id="unit" onchange="populate_total_fix()" class="inputs"><option value="1">Tens</option><option value="2">Hundreds</option><option value="3" selected>Thousands</option><option value="4">Lakhs</option><option value="5">Crores</option></select>'
                }
                
            }else{
                newCell.innerHTML = '<input class="inputs"  onchange="populate_total_fix()" value='+data[i][key]+' >';
            }
            track=track+1
        
        }
    }
    if(localStorage.getItem('total_fix')==="undefined"){
        document.getElementById('total_fix').innerText=0;
    }else{
        document.getElementById('total_fix').innerText=alocalStorage.getItem('total_fix');    
    }
    }
}


function populate_total_fix(){
    var total_fix=0
    
    const table_fix = document.getElementById("tableDiv_fix").querySelector("table");
    // Iterate through each row of the table
    for (let i = 1; i < table_fix.rows.length; i++) {
        const row = table_fix.rows[i];
        amount=parseInt(row.cells[2].querySelector("input").value)
        unit=parseInt(row.cells[1].querySelector("select").value)
        var actual_amount=0
        if(unit==1){
            actual_amount=amount*10
        }else if(unit==2){
            actual_amount=amount*100
        }else if(unit==3){
            actual_amount=amount*1000
        }else if(unit==4){
            actual_amount=amount*100000
        }else if(unit==5){
            actual_amount=amount*10000000
        }
        total_fix=total_fix+actual_amount;

} 
document.getElementById('total_fix').innerText=addCommas(total_fix);
}



// Add event listeners
addButton_fix.addEventListener("click", addRow_fix);
minusButton_fix.addEventListener("click", removeRow_fix);

