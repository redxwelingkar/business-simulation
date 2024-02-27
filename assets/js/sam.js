
const table_SAM = document.getElementById("tableDiv_SAM").querySelector("table");


// Function to add a new row
function addRow_SAM() {
    const newRow = table_SAM.insertRow();
    const newCell1 = newRow.insertCell();
    const newCell2 = newRow.insertCell();
    const newCell3 = newRow.insertCell();
    const newCell4 = newRow.insertCell();
    newCell1.innerHTML = '<input class="inputs" placeholder="Enter Name of Customer Segment" value="" disabled>';
    newCell2.innerHTML = '<input class="inputs" placeholder="Enter Numerical Value" value="" disabled>';
    newCell3.innerHTML = '<input class="inputs" placeholder="Enter Numerical Value" value="0" onchange="update_serviceable_market()" >';
    newCell4.innerHTML = '<input class="inputs" placeholder="Enter Numerical Value" value="0" disabled>';
}


// Function to remove a row
function removeRow_SAM() {
    const rows = table_SAM.getElementsByTagName('tr');
    if (rows.length > 1) { // Check if there's more than one row to prevent removing the header
        table_SAM.deleteRow(rows.length);
        populate_total_som1()
    }
}


// Fetching data from table and inserting into localstorage
function retrieveTableDataSAM() {

    // Get the table element
    const table_SAM = document.getElementById("tableDiv_SAM").querySelector("table");

    // Initialize an array to store the data
    const tableDataSAM = [];
    const tableDataTAM = [];

    // Iterate through each row of the table
    for (let i = 1; i < table_SAM.rows.length; i++) {

        const row = table_SAM.rows[i];
        console.log(row);
        // Initialize an object to store the data for the current row
        const rowDataTAM = {}
        const rowDataSAM = {};
        // Iterate through each cell of the row
        for (let j = 0; j < row.cells.length; j++) {
            const cell = row.cells[j];
            // Retrieve the input value from the cell and store it in the rowData object
            rowDataSAM["column" + j] = cell.querySelector("input").value;
            if (j == 0) {
                rowDataTAM["column" + j] = cell.querySelector("input").value
            } else if (j == 1) [
                rowDataTAM["column" + j] = cell.querySelector("input").value
            ]
        }
        // Push the rowData object to the tableData array
        tableDataSAM.push(rowDataSAM);
        tableDataTAM.push(rowDataTAM);

    }

    const jsonStringTAM = JSON.stringify(tableDataTAM)
    localStorage.setItem('data', jsonStringTAM);

    const jsonStringSAM = JSON.stringify(tableDataSAM)
    localStorage.setItem('data_sam', jsonStringSAM);
    localStorage.setItem('total_som', document.getElementById('total_som').innerText);
  
    swal({text:"SAM data has been saved",showConfirmButton:false});
    // Return the tableData array containing all the table data

    return tableDataSAM;


}



function populate_SAM() {
    const table_SAM = document.getElementById("tableDiv_SAM").querySelector("table");

    var rows = table_SAM.getElementsByTagName("tr");
    for (var i = rows.length - 1; i > 0; i--) {
        table_SAM.deleteRow(i);
    }

    var data = JSON.parse(localStorage.getItem('data'));
    var data_sam = JSON.parse(localStorage.getItem('data_sam'));
    // Iterate through each row of the table

    if (data == null) {
        addRow_SAM();
        addRow_SAM();
    } else {


        for (let i = 0; i < data.length; i++) {
            const newRow = table_SAM.insertRow();

            const newCell1 = newRow.insertCell();
            newCell1.innerHTML = '<input class="inputs"  value=' + data[i]['column0'] + ' disabled>';
            const newCell2 = newRow.insertCell();
            newCell2.innerHTML = '<input class="inputs"  value=' + data[i]['column1'] + ' disabled>';
            const newCell3 = newRow.insertCell();
            const newCell4 = newRow.insertCell();
            if (data_sam != null) {
                try {
                    newCell3.innerHTML = '<input class="inputs" onchange="update_serviceable_market()" value=' + data_sam[i]['column2'] + ' >';
                } catch (err) {
                    newCell3.innerHTML = '<input placeholder="Enter Numerical Value" class="inputs" onchange="update_serviceable_market()" value="0" >';
                }
            }
            else {
                newCell3.innerHTML = '<input placeholder="Enter Numerical Value" class="inputs" onchange="update_serviceable_market()" value="0" >';
            }

            if (data_sam != null) {
                try {
                    newCell4.innerHTML = '<input class="inputs" value=' + data_sam[i]['column3'] + ' disabled>';
                } catch (error) {
                    newCell4.innerHTML = '<input placeholder="Enter Numerical Value" class="inputs" value="0" disabled>';
                }

            } else {
                newCell4.innerHTML = '<input placeholder="Enter Numerical Value" class="inputs" value="0" disabled>';
            }

        }

        if (localStorage.getItem('total_som') === "undefined") {
            document.getElementById('total_som').innerText = 0;
        } else {
            document.getElementById('total_som').innerText = localStorage.getItem('total_som');
        }


    }
}

function populate_total_som1() {

    var total_som = 0;
    const table_SAM = document.getElementById("tableDiv_SAM").querySelector("table");
    // Iterate through each row of the table
    for (let i = 1; i < table_SAM.rows.length; i++) {
        const row = table_SAM.rows[i];
        total_som = total_som + parseInt(row.cells[3].querySelector("input").value);

    }

    console.log(total_som);
    document.getElementById('total_som').innerText = total_som;

}


//ratio calculation
function update_serviceable_market() {

    for (let i = 1; i < table_SAM.rows.length; i++) {
        const row = table_SAM.rows[i];
        const cell2 = row.cells[2];
        var ratio = cell2.querySelector("input").value;
        ratio = ratio / 100
        const cell1 = row.cells[1];
        const population = cell1.querySelector("input").value;
        const cell3 = row.cells[3];
        cell3.querySelector("input").value = parseInt(population) * parseFloat(ratio);
    }
    populate_total_som1()

}





