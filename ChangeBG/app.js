
const colors = [  "red", "green", "blue", 'white', "yellow", "purple", "orange", "cyan"];
var num = 0;


function changeBG (){
    document.querySelector('h3').innerHTML = colors[num];
    document.body.style.backgroundColor = colors[num];
    num++;
    
    if(num>=colors.length){
        num=0;
    }

   

}