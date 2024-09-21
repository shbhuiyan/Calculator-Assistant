// function valueCollector(id){
//     const inputValue = parseFloat(document.getElementById(id).value);
//     return inputValue;
// }
function valueCollector(id){
    const inputValue = parseFloat(document.getElementById(id).value);
    return inputValue;
}


function classRemove(id){
    const classes = document.getElementById(id).classList.remove('hidden')
    return classes;
}

function classAdd(id){
    const classes = document.getElementById(id).classList.add('hidden')
    return classes;
}