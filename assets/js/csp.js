


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
    

}

