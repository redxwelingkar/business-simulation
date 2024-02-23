


function save_op(){
localStorage.setItem("operational days",document.getElementById('op').value);
swal("Your data has been saved");
}

function save_spending(){
    localStorage.setItem("spending power",document.getElementById("spending power").value);
    swal("Your data has been saved");
}


function populate_csp(){
    const op=localStorage.getItem('operational days');
    const sp=localStorage.getItem('spending power');
    if(op!=null){
        document.getElementById("op").value=op
    }else{
        document.getElementById("op").value="";
    }

    if(sp!=null){
        document.getElementById("spending power").value=sp;
    }else{
        document.getElementById("spending power").value="";
    }
    //calculate expenditure if op and sp present
    calculate_total_expenditure()

}

function calculate_total_expenditure(){
    const op=parseInt(localStorage.getItem('operational days'));
    const sp=parseInt(localStorage.getItem('spending power'));
    const total_som=parseInt(localStorage.getItem('total_som'));

    if(isNaN(op)===false && isNaN(sp)===false && isNaN(total_som)===false){
        
        document.getElementById('TE_SAM_day').innerText=sp*total_som
        document.getElementById('TE_SAM_month').innerText=op*sp*total_som
        document.getElementById('TE_SAM_year').innerText=op*sp*12*total_som
        console.log(op*sp*total_som+"   "+total_som)
    }else{
        document.getElementById('TE_SAM_day').innerText=0
        document.getElementById('TE_SAM_month').innerText=0
        document.getElementById('TE_SAM_year').innerText=0
    }



}


function fill_total_expenditure(){
   
    const sp=parseInt(document.getElementById('spending power').value);
    const op=parseInt(document.getElementById("op").value);
    const total_som=parseInt(localStorage.getItem('total_som'));
    if(isNaN(op)===false && isNaN(sp)===false && isNaN(total_som)===false && (op!='' && sp!='')){
        document.getElementById('TE_SAM_day').innerText=sp*total_som
        document.getElementById('TE_SAM_month').innerText=op*sp*total_som
        document.getElementById('TE_SAM_year').innerText=op*sp*12*total_som
        console.log(op*sp*total_som+"   "+total_som)
    } else{
        document.getElementById('TE_SAM_day').innerText=0
        document.getElementById('TE_SAM_month').innerText=0
        document.getElementById('TE_SAM_year').innerText=0
    }


}


