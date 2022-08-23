let outputScreen = document.getElementById("output-screen");

function display(num){
    outputScreen.value += num;
    if(outputScreen.value.length > 8){
        alert("Display contain only 8 characters.");
        outputScreen.value = "";
       return;
    }
}

function Calculate(){
    try{
        outputScreen.value = eval(outputScreen.value);
    }
    catch(err){
        alert("Invalid")
    }
}

function Clear(){
    outputScreen.value = "";
}

function del(){
    outputScreen.value = outputScreen.value.slice(0, -1);
}