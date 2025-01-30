const table_fun = document.getElementById("tableDiv_fun").querySelector("table");
const addButton_fun = document.getElementById("add-button_fun")
const minusButton_fun = document.getElementById("minus-button_fun")


function addCommas(number) {
    return new Intl.NumberFormat('en-IN').format(number);
}

// Function to add a new row
function addRow_fun() {
    const newRow = table_fun.insertRow();
    const newCell1 = newRow.insertCell();
    const newCell2 = newRow.insertCell();
    const newCell3 = newRow.insertCell();
    const newCell4 = newRow.insertCell();
    const newCell5 = newRow.insertCell();
    const newCell6 = newRow.insertCell();
    newCell1.innerHTML = '<input class="inputs"  value="" >';
    newCell2.innerHTML = '<input class="inputs" type="number"  value="0"  required>';
    newCell3.innerHTML = '<input class="inputs"  value="0" >';
    newCell4.innerHTML = '<input class="inputs" type="number" onchange="populate_total_fun()" required value="0"  >';
    newCell5.innerHTML = '<input class="inputs" placeholder="Enter Name of Customer Segment" required  value="0" disabled>';
    newCell6.innerHTML = '<input class="inputs" type="number" required onchange="populate_total_fun()" value="0"  disabled>';
}



// Function to remove a row
function removeRow_fun() {
    const rows = table_fun.getElementsByTagName('tr');
    if (rows.length > 1) { // Check if there's more than one row to prevent removing the header
        table_fun.deleteRow(rows.length - 1);
        populate_total_fun()
    }
    
}


// Fetching data from table and inserting into localstorage
function retrieveTableDataFUN() {
    
    // Get the table element
    const table_fun = document.getElementById("tableDiv_fun").querySelector("table");
    
    // Initialize an array to store the data
    const tableData = [];
    
    // Iterate through each row of the table
    for (let i = 1; i < table_fun.rows.length; i++) {
        const row = table_fun.rows[i];
        // Initialize an object to store the data for the current row
        const rowData = {};
        // Iterate through each cell of the row
        for (let j = 0; j < row.cells.length; j++) {
            const cell = row.cells[j];
           
            // Retrieve the input value from the cell and store it in the rowData object
            rowData["column" + j] = cell.querySelector("input").value;
        }
        // Push the rowData object to the tableData array
        tableData.push(rowData);

    }
    
    const jsonString = JSON.stringify(tableData)
    localStorage.setItem('data_fun',jsonString);
    

    swal({text:"Funding  data is saved",showConfirmButton:false});
    //console.log(document.getElementById('total_fun').innerText+"total fun");
    // Return the tableData array containing all the table data

    localStorage.setItem('total_interest', document.getElementById('total_interest').innerText);
    localStorage.setItem('total_repay', document.getElementById('total_repay').innerText);
    // alert(parseInt((document.getElementById('total_repay').innerText)-83333)+"  "+parseInt(document.getElementById('total_interest').innerText)/12)
    var emi=parseInt((document.getElementById('total_repay').innerText)) + parseInt((document.getElementById('total_interest').innerText)/12)
    // alert(emi)
    localStorage.setItem('emi',emi);
    return tableData;
   

}


function populate_FUN(){
    const table_fun = document.getElementById("tableDiv_fun").querySelector("table");
    //deleting all rows'
    var rows = table_fun.getElementsByTagName("tr");
    for (var i = rows.length-1; i > 0; i--) {
        table_fun.deleteRow(i);
    }

    var data=JSON.parse(localStorage.getItem('data_fun'));
    // Iterate through each row of the table
   
    if(data==null){
        addRow_fun()
        addRow_fun()
    }  else {
  
    
    for (let i = 0; i < data.length; i++) {

        const newRow = table_fun.insertRow();
        for (let key in data[i]) {
            // Insert a new cell for each property
            const newCell = newRow.insertCell();
            // Set the innerText of the cell to the value of the current property
            
            if(key=='column3' || key=='column5'){
                newCell.innerHTML = '<input class="inputs" onchange="populate_total_fun()" value='+ data[i][key]+'   >';
            }else{
                newCell.innerHTML = '<input class="inputs"  value='+ data[i][key]+'  >';
            }
        }
    }

    if(localStorage.getItem('total_interest')==="undefined"){
        document.getElementById('total_interest').innerText=0;
    }else{
        document.getElementById('total_interest').innerText=localStorage.getItem('total_interest');    
    }
    if(localStorage.getItem('total_repay')==="undefined"){
        document.getElementById('total_repay').innerText=0;
    }else{
        document.getElementById('total_repay').innerText=localStorage.getItem('total_repay');    
    }




    }
}



function populate_total_fun(){
    var total_interest=0
    var total_repay=0
    const table_fun = document.getElementById("tableDiv_fun").querySelector("table");
    // Iterate through each row of the table

    for (let i = 1; i < table_fun.rows.length; i++) {
        const row = table_fun.rows[i];
        const amount=parseInt(row.cells[2].querySelector("input").value)
        var interest=parseFloat(row.cells[3].querySelector("input").value)
        interest=interest/100
        const term=parseInt(row.cells[1].querySelector("input").value)
        row.cells[4].querySelector("input").value=addCommas(Math.round(amount*interest))
        row.cells[5].querySelector("input").value=addCommas(Math.round(amount/term/12))
        total_interest=total_interest+(amount*interest)
        total_repay=total_repay+(amount/term/12)
    }



document.getElementById('total_interest').innerText=addCommas(Math.round(total_interest));
document.getElementById('total_repay').innerText=addCommas(Math.round(total_repay));

}




// Add event listeners
addButton_fun.addEventListener("click", addRow_fun);
minusButton_fun.addEventListener("click", removeRow_fun);

