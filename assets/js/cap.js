

const table_CAP = document.getElementById("tableDiv_CAP").querySelector("table");
const addButton_CAP = document.getElementById("add-button_CAP")
const minusButton_CAP = document.getElementById("minus-button_CAP")



// Function to add a new row
function addRow_CAP() {
    const newRow = table_CAP.insertRow();
    const newCell1 = newRow.insertCell();
    const newCell2 = newRow.insertCell();
    const newCell3 = newRow.insertCell();
    newCell1.innerHTML = '<input class="inputs" placeholder="Enter name of Expenditure" value="" />';
    newCell3.innerHTML = '<input class="inputs" onchange="populate_total_cap()" placeholder="Enter Numerical Value" value="0" />';
    newCell2.innerHTML ='<select id="unit" onchange="populate_total_cap()" class="inputs"><option value="1">Tens</option><option value="2">Hundreds</option><option value="3" selected>Thousands</option><option value="4">Lakhs</option><option value="5">Crores</option></select>'
}



// Function to remove a row
function removeRow_CAP() {
    const rows = table_CAP.getElementsByTagName('tr');
    if (rows.length > 1) { // Check if there's more than one row to prevent removing the header
        table_CAP.deleteRow(rows.length - 1);
        populate_total_cap()
    }
    
}




// Fetching data from table and inserting into localstorage
function retrieveTableDataCAP() {
    
    // Get the table element
    const table_CAP = document.getElementById("tableDiv_CAP").querySelector("table");
    
    // Initialize an array to store the data
    const tableData = [];
    
    // Iterate through each row of the table
    for (let i = 1; i < table_CAP.rows.length; i++) {
        const row = table_CAP.rows[i];
        
        // Initialize an object to store the data for the current row
        const rowData = {};
        // Iterate through each cell of the row
        for (let j = 0; j < row.cells.length; j++) {
            const cell = row.cells[j];

            if(j==2){
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
    localStorage.setItem('data_cap',jsonString);
    
    swal("Capital Expenditure data has been saved");
    console.log(document.getElementById('total_cap').innerText+"total cap");
    // Return the tableData array containing all the table data

    localStorage.setItem('total_cap', document.getElementById('total_cap').innerText);
    return tableData;
   

}


function populate_CAP(){
    const table_CAP = document.getElementById("tableDiv_CAP").querySelector("table");
    //deleting all rows'
    var rows = table_CAP.getElementsByTagName("tr");
    for (var i = rows.length-1; i > 0; i--) {
        table_CAP.deleteRow(i);
    }

    var data=JSON.parse(localStorage.getItem('data_cap'));
    // Iterate through each row of the table
   console.log(data)
    if(data==null){
        addRow_CAP()
        addRow_CAP()
    }  else {
  
    
    for (let i = 0; i < data.length; i++) {

        const newRow = table_CAP.insertRow();
        var track=0;
        for (let key in data[i]) {
            // Insert a new cell for each property
            const newCell = newRow.insertCell();
            // Set the innerText of the cell to the value of the current property
            

            if(track==2){
                if(parseInt(data[i][key])==1){
                    newCell.innerHTML ='<select id="unit" onchange="populate_total_cap()" class="inputs"><option value="1">Tens</option><option value="2">Hundreds</option><option value="3" selected>Thousands</option><option value="4">Lakhs</option><option value="5">Crores</option></select>'
                } else if (parseInt(data[i][key])==2){
                    newCell.innerHTML ='<select id="unit" onchange="populate_total_cap()" class="inputs"><option value="1">Tens</option><option value="2">Hundreds</option><option value="3" selected>Thousands</option><option value="4">Lakhs</option><option value="5">Crores</option></select>'
                } else{
                    newCell.innerHTML ='<select id="unit" onchange="populate_total_cap()" class="inputs"><option value="1">Tens</option><option value="2">Hundreds</option><option value="3" selected>Thousands</option><option value="4">Lakhs</option><option value="5">Crores</option></select>'
                }
                
            }else{
                newCell.innerHTML = '<input class="inputs"  onchange="populate_total_cap()" value='+data[i][key]+' >';
            }
            track=track+1
        }
    }
    if(localStorage.getItem('total_cap')==="undefined"){
        document.getElementById('total_cap').innerText=0;
    }else{
        document.getElementById('total_cap').innerText=localStorage.getItem('total_tam');    
    }
}
}


function populate_total_cap(){
    var total_cap=0
    
    const table_CAP = document.getElementById("tableDiv_CAP").querySelector("table");
    // Iterate through each row of the table
    for (let i = 1; i < table_CAP.rows.length; i++) {
        const row = table_CAP.rows[i];
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
        total_cap=total_cap+actual_amount;

} 
document.getElementById('total_cap').innerText=total_cap;

}





















// Add event listeners
addButton_CAP.addEventListener("click", addRow_CAP);
minusButton_CAP.addEventListener("click", removeRow_CAP);

