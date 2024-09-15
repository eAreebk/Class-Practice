
var restItem = [
    `biryani`,
    `qorma`,
    `burger`,
    `kheer`,
    `rabri`,
]

var order = prompt(`May i know what you wanna eat today`);

var item = false;
for(let i=0; i<restItem.length; i++){
    if(restItem[i] === order){
        document.write('Yes we have  ' + order );
        
        item = true;
        break
    }
}

 if(!item){
    document.write('<br> Sorry we dont have ' + order) ;
 }
 else{
    document.write('<br> Enjoy your ' + order );
 }