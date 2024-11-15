

function appendToDisplay(input)
{
    document.getElementById("display").value = document.getElementById("display").value + input;
}
function resetDisplay()
{
    document.getElementById("display").value="";
}
function calculate()
{
    try{
        var text = document.getElementById("display").value;
        var result = eval(text);
        if(result % 1!==0)
        {
            var rounded = result.toFixed(3)
            document.getElementById("display").value = rounded;
            
        }
        else
        {
            document.getElementById("display").value = result;
        }
    }
    catch(error){
        document.getElementById("display").value = "ERROR";
    }
    
}
function clearitem()
{
    document.getElementById("display").value = document.getElementById("display").value.slice(0,-1);
    
}
