function tellTime(){
    var now = new Date();
    alert(now);
}

tellTime();

function greetUser(name,status){
        alert(`Welcome ${name} and you are great ${status}`)
      }

      greetUser('Areeb','student');

 function generateID() {
        var name = prompt('Enter your name');
        var ID = name + '123'; // Corrected the quotes here
    
        return ID;
    }
    
var userID = generateID();

