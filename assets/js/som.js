
function addCommas(number) {
    return new Intl.NumberFormat('en-IN').format(number);
}

function retrieve_som(){
        var per=parseFloat(document.getElementById('som_percentage_new').value);
        per=per/100
        localStorage.setItem('percentage_of_sam',per);
        
        swal({text:"SOM data has been saved",showConfirmButton:false});
        console.log(document.getElementById('som_percentage_new').value,per)

}


function populate_som(){
    const total_som=parseInt(localStorage.getItem('total_som'));
    const per_sam=parseFloat(localStorage.getItem('percentage_of_sam'));
    const sp=parseInt(localStorage.getItem('spending power'))
    const op=parseInt(localStorage.getItem('operational days'));
    // console.log(total_som,per_sam,sp,op);

        if(isNaN(total_som) || isNaN(per_sam) || isNaN(sp)){
            document.getElementById('TE_SOM_day').innerText=0
            document.getElementById('TE_SOM_month').innerText=0
            document.getElementById('TE_SOM_year').innerText=0
            document.getElementById("som_percentage_new").value=0
            document.getElementById("som_market").value=0
            

        } else{

            console.log(total_som,per_sam,sp,op);
            document.getElementById('TE_SOM_day').innerText=addCommas(per_sam*total_som*sp)
            document.getElementById('TE_SOM_month').innerText=addCommas(per_sam*total_som*sp*op)
            document.getElementById('TE_SOM_year').innerText=addCommas(per_sam*total_som*sp*op*12)
            document.getElementById("som_percentage_new").value=addCommas(per_sam)
            document.getElementById("som_market").value=addCommas(per_sam*total_som)
        }

    }

/// lets remove commas
function removeCommas(str) {
    return str.replace(/,/g, ''); // Replace all commas with an empty string
}



function calculate_som(){
    const op=parseInt(removeCommas(localStorage.getItem('operational days')));
    var som_percentage=document.getElementById('som_percentage_new').value
    som_percentage=som_percentage/100
    const total_som=parseInt(removeCommas(localStorage.getItem('total_som')));
    const sp=parseInt(removeCommas(localStorage.getItem('spending power')))
    if(isNaN(total_som)===false || isNaN(som_percentage)===false || isNaN(som_percentage)===false || (sp!='' && total_som!='')){
        document.getElementById('TE_SOM_day').innerText=addCommas(som_percentage*total_som*sp)
        document.getElementById('TE_SOM_month').innerText=addCommas(som_percentage*total_som*sp*op)
        document.getElementById('TE_SOM_year').innerText=addCommas(som_percentage*total_som*sp*op*12)
        document.getElementById("som_market").value=addCommas(som_percentage*total_som)
    } else{
        document.getElementById('TE_SOM_day').innerText=0
        document.getElementById('TE_SOM_month').innerText=0
        document.getElementById('TE_SOM_year').innerText=0
    }
}
