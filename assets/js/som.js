


function retrieve_som(){

        const per=parseFloat(document.getElementById('som_percentage_new').value);
        localStorage.setItem('percentage_of_sam',per);
        swal('Your data is saved!')
        console.log(document.getElementById('som_percentage_new').value,per)

}


function populate_som(){
    const total_som=parseInt(localStorage.getItem('total_som'));
    const per_sam=parseFloat(localStorage.getItem('percentage_of_sam'));
    const sp=parseInt(localStorage.getItem('spending power'))


        if(isNaN(total_som)===false || isNaN(per_sam)===false || isNaN(sp)===false || (per_sam!='' && total_som!='')){
            document.getElementById('TE_SOM_day').innerText=per_sam*total_som*sp
            document.getElementById('TE_SOM_month').innerText=per_sam*total_som*sp*30
            document.getElementById('TE_SOM_year').innerText=per_sam*total_som*sp*365
            document.getElementById("som_percentage_new").value=per_sam
            document.getElementById("som_market").value=per_sam*total_som;
        } else{
            document.getElementById('TE_SOM_day').innerText=0
            document.getElementById('TE_SOM_month').innerText=0
            document.getElementById('TE_SOM_year').innerText=0
        }

    }





function calculate_som(){
    const som_percentage=document.getElementById('som_percentage_new').value
    const total_som=parseInt(localStorage.getItem('total_som'));
    const sp=parseInt(localStorage.getItem('spending power'))
    if(isNaN(total_som)===false || isNaN(som_percentage)===false || isNaN(som_percentage)===false || (sp!='' && total_som!='')){
        document.getElementById('TE_SOM_day').innerText=som_percentage*total_som*sp
        document.getElementById('TE_SOM_month').innerText=som_percentage*total_som*sp*30
        document.getElementById('TE_SOM_year').innerText=som_percentage*total_som*sp*365
        document.getElementById("som_market").value=som_percentage*total_som;
    } else{
        document.getElementById('TE_SOM_day').innerText=0
        document.getElementById('TE_SOM_month').innerText=0
        document.getElementById('TE_SOM_year').innerText=0
    }
}
