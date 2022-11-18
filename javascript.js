function display(num) 
{
 result.value+=num
}
function empty()
{
    result.value=" "
}
function output()
{
   result.value=eval(result.value)
}    
function oneclear()
{
    result.value=result.value.slice(0,-1)
}