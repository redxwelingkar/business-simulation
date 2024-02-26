
const img1 = document.getElementById("imgBack1")
img1.addEventListener("click", function(){
    document.getElementById('totalAddresable').click();
})

const table_TAM = document.getElementById("tableDiv_TAM").querySelector("table");
const addButton_TAM = document.getElementById("add-button_TAM")
const minusButton_TAM = document.getElementById("minus-button_TAM")


// Function to add a new row
function addRow_TAM() {
    const newRow = table_TAM.insertRow();
    const newCell1 = newRow.insertCell();
    const newCell2 = newRow.insertCell();
    newCell1.innerHTML = '<input class="inputs" placeholder="Enter Name of Customer Segment" required  value="" >';
    newCell2.innerHTML = '<input class="inputs" type="number" onchange="populate_total_tam()" placeholder="Enter Numerical Value" required value="0"  >';
}



// Function to remove a row
function removeRow_TAM() {
    const rows = table_TAM.getElementsByTagName('tr');
    if (rows.length > 1) { // Check if there's more than one row to prevent removing the header
        table_TAM.deleteRow(rows.length - 1);
        populate_total_tam()
    }
    
}

// Fetching data from table and inserting into localstorage
function retrieveTableDataTAM() {
    
    // Get the table element
    const table_TAM = document.getElementById("tableDiv_TAM").querySelector("table");
    
    // Initialize an array to store the data
    const tableData = [];
    
    // Iterate through each row of the table
    for (let i = 1; i < table_TAM.rows.length; i++) {
        const row = table_TAM.rows[i];
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
    localStorage.setItem('data',jsonString);
    
    swal("TAM data has been saved");
    console.log(document.getElementById('total_tam').innerText+"total tam");
    // Return the tableData array containing all the table data

    localStorage.setItem('total_tam', document.getElementById('total_tam').innerText);
    return tableData;
   

}




function populate_TAM(){
    const table_TAM = document.getElementById("tableDiv_TAM").querySelector("table");
    //deleting all rows'
    var rows = table_TAM.getElementsByTagName("tr");
    for (var i = rows.length-1; i > 0; i--) {
        table_TAM.deleteRow(i);
    }

    var data=JSON.parse(localStorage.getItem('data'));
    // Iterate through each row of the table
   
    if(data==null){
        addRow_TAM()
        addRow_TAM()
    }  else {
  
    
    for (let i = 0; i < data.length; i++) {

        const newRow = table_TAM.insertRow();
        for (let key in data[i]) {
            // Insert a new cell for each property
            const newCell = newRow.insertCell();
            // Set the innerText of the cell to the value of the current property
            
            if(key=='column2'){
                newCell.innerHTML = '<input class="inputs" onchange="populate_total_tam()" placeholder="Enter Name of Customer Segment" value='+ data[i][key]+'   >';
            }else{
                newCell.innerHTML = '<input class="inputs" placeholder="Enter Name of Customer Segment" value='+ data[i][key]+'  >';
            }
        }
    }
    if(localStorage.getItem('total_tam')==="undefined"){
        document.getElementById('total_tam').innerText=0;
    }else{
        document.getElementById('total_tam').innerText=localStorage.getItem('total_tam');    
    }
    }
}


function get_business_name(){
    b_name=document.getElementById("BusinessName");
    localStorage.setItem("b_name",b_name.value);
    swal("Business name is saved");
}

function populate_business_name(){
    document.getElementById("BusinessName").value=localStorage.getItem("b_name");
    if(localStorage.getItem("ebt")==null){
        document.getElementById("ebt").value=0
    }else{ 
       
    document.getElementById("ebt").innerText=localStorage.getItem("ebt");
    
    }

if(localStorage.getItem("runway")==null){
   
    document.getElementById("runway").innerText=0
}else{ 
   
document.getElementById("runway").innerText=localStorage.getItem("runway");

}


}



function populate_total_tam(){
    var total_tam=0
    const table_TAM = document.getElementById("tableDiv_TAM").querySelector("table");
    // Iterate through each row of the table
    for (let i = 1; i < table_TAM.rows.length; i++) {
        const row = table_TAM.rows[i];
        console.log(row);
        total_tam=total_tam+parseInt(row.cells[1].querySelector("input").value);

} 
document.getElementById('total_tam').innerText=total_tam;

}



window.onload=populate_business_name();

// Add event listeners
addButton_TAM.addEventListener("click", addRow_TAM);
minusButton_TAM.addEventListener("click", removeRow_TAM);



