const todos = [];
let index = 0;
while(true){
    let choice = prompt("Enter the action to be performed");
    if(choice == "new"){
            todos[index] = prompt("Enter a todo");
            console.log(`The item "${todos[index]}" has been added`);
            index++;
            console.log('**********');
    }else if(choice == "list"){
        for(let i = 0; i < todos.length; i++){
            console.log(` ${i} : ${todos[i]}`);
        }
        console.log("******")
    }else if(choice == "delete"){
        let indexToBeRemoved = prompt("Enter index to be deleted");
        let deletedItem = todos[indexToBeRemoved];
        todos.splice(indexToBeRemoved,1);
        console.log(`Item "${deletedItem}" deleted`);
        console.log("**********");
    }else if(choice == "quit"){
        console.log("Ok, You are ready to go now \n");
        console.log("have a nice day \n");
        console.log("**********")
        break;
    }else{
        alert("No match to choice!! 'choose again'")
    }
}