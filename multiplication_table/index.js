    
function multiplicationTable(){
    for(var r=1;r<=9;r++){
        var chart="";
        for(var c=1;c<=r;c++){
            chart+=(`${c}*${r}=${c*r}\t`)
        }
        console.log(chart);
    }
}