const img2 = document.getElementById("imgBack2")
img2.addEventListener("click", function(){
    document.getElementById('operExpen').click();
})



const table_op = document.getElementById("tableDiv_op").querySelector("table");
const addButton_op = document.getElementById("add-button_op")
const minusButton_op = document.getElementById("minus-button_op")



// Function to add a new row
function addRow_op() {
    const newRow = table_op.insertRow();
    const newCell1 = newRow.insertCell();
    const newCell2 = newRow.insertCell();
    const newCell3 = newRow.insertCell();
    newCell1.innerHTML = '<input class="inputs" placeholder="Enter name of Expenditure" value="0" />';
    newCell2.innerHTML = '<input class="inputs" onchange="populate_total_op()" placeholder="Enter Numerical Value" value="0" />';
    newCell3.innerHTML ='<select id="unit" onchange="populate_total_op()" class="inputs"><option value="1" selected>Thousands</option><option value="2">Lakhs</option><option value="3">Crores</option></select>'
}



// Function to remove a row
function removeRow_op() {
    const rows = table_op.getElementsByTagName('tr');
    if (rows.length > 1) { // Check if there's more than one row to prevent removing the header
        table_op.deleteRow(rows.length - 1);
        populate_total_cap()
    }
    
}




// Fetching data from table and inserting into localstorage
function retrieveTableDataOP() {
    
    // Get the table element
    const table_op = document.getElementById("tableDiv_op").querySelector("table");
    
    // Initialize an array to store the data
    const tableData = [];
    
    // Iterate through each row of the table
    for (let i = 1; i < table_op.rows.length; i++) {
        const row = table_op.rows[i];
        
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
    localStorage.setItem('data_op',jsonString);
    
    swal("Operational Expenditure data has been saved");
    console.log(document.getElementById('total_op').innerText+"total cap");
    // Return the tableData array containing all the table data

    localStorage.setItem('total_op', document.getElementById('total_op').innerText);
    return tableData;
   

}


function populate_op(){
    const table_op = document.getElementById("tableDiv_op").querySelector("table");
    //deleting all rows'
    var rows = table_op.getElementsByTagName("tr");
    for (var i = rows.length-1; i > 0; i--) {
        table_op.deleteRow(i);
    }

    var data=JSON.parse(localStorage.getItem('data_op'));
    // Iterate through each row of the table
   console.log(data)
    if(data==null){
        addRow_op()
        addRow_op()
    }  else {
  
    
    for (let i = 0; i < data.length; i++) {

        const newRow = table_op.insertRow();
        var track=0;
        for (let key in data[i]) {
            // Insert a new cell for each property
            const newCell = newRow.insertCell();
            // Set the innerText of the cell to the value of the current property
            

            if(track==2){
                if(parseInt(data[i][key])==1){
                    newCell.innerHTML ='<select id="unit" onchange="populate_total_cap()" class="inputs"><option value="1" selected>Thousands</option><option value="2">Lakhs</option><option value="3">Crores</option></select>'
                } else if (parseInt(data[i][key])==2){
                    newCell.innerHTML ='<select id="unit" onchange="populate_total_cap()" class="inputs"><option value="1">Thousands</option><option value="2" selected>Lakhs</option><option value="3">Crores</option></select>'
                } else{
                    newCell.innerHTML ='<select id="unit" onchange="populate_total_cap()" class="inputs"><option value="1" >Thousands</option><option value="2">Lakhs</option><option value="3" selected>Crores</option></select>'
                }
                
            }else{
                newCell.innerHTML = '<input class="inputs"  onchange="populate_total_cap()" value='+data[i][key]+' >';
            }
            track=track+1
        
        }
    }
    if(localStorage.getItem('total_op')==="undefined"){
        document.getElementById('total_op').innerText=0;
    }else{
        document.getElementById('total_op').innerText=localStorage.getItem('total_op');    
    }
    }
}


function populate_total_op(){
    var total_op=0
    
    const table_op = document.getElementById("tableDiv_op").querySelector("table");
    // Iterate through each row of the table
    for (let i = 1; i < table_op.rows.length; i++) {
        const row = table_op.rows[i];
        amount=parseInt(row.cells[1].querySelector("input").value)
        unit=parseInt(row.cells[2].querySelector("select").value)
        var actual_amount=0
        if(unit==1){
            actual_amount=amount*1000
        }else if(unit==2){
            actual_amount=amount*100000
        }else {
            actual_amount=amount*10000000
        }
        total_op=total_op+actual_amount;

} 
document.getElementById('total_op').innerText=total_op;

}



// Add event listeners
addButton_op.addEventListener("click", addRow_op);
minusButton_op.addEventListener("click", removeRow_op);
