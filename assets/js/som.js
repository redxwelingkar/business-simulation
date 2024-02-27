


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
            document.getElementById('TE_SOM_day').innerText=per_sam*total_som*sp
            document.getElementById('TE_SOM_month').innerText=per_sam*total_som*sp*op
            document.getElementById('TE_SOM_year').innerText=per_sam*total_som*sp*op*12
            document.getElementById("som_percentage_new").value=per_sam
            document.getElementById("som_market").value=per_sam*total_som;
        }

    }





function calculate_som(){
    const op=parseInt(localStorage.getItem('operational days'));
    var som_percentage=document.getElementById('som_percentage_new').value
    som_percentage=som_percentage/100
    const total_som=parseInt(localStorage.getItem('total_som'));
    const sp=parseInt(localStorage.getItem('spending power'))
    if(isNaN(total_som)===false || isNaN(som_percentage)===false || isNaN(som_percentage)===false || (sp!='' && total_som!='')){
        document.getElementById('TE_SOM_day').innerText=som_percentage*total_som*sp
        document.getElementById('TE_SOM_month').innerText=som_percentage*total_som*sp*op
        document.getElementById('TE_SOM_year').innerText=som_percentage*total_som*sp*op*12
        document.getElementById("som_market").value=som_percentage*total_som;
    } else{
        document.getElementById('TE_SOM_day').innerText=0
        document.getElementById('TE_SOM_month').innerText=0
        document.getElementById('TE_SOM_year').innerText=0
    }
}
