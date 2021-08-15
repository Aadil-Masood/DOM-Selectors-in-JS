console.log(document.title);

// Selectors in DOM
   // 1. getElementById
   // 2. getElementsByClassName
   // 3. getElementsByTagName
   // 4. querySelector
   // 5. querySelectorAll


   //getElementbyId
let heading = document.getElementById("id1");
console.log(heading);

//getElementsByTagName
let tagname = document.getElementsByTagName("p");
for ( i=0; i<tagname.length; i++){
    console.log(tagname[i]);
}

//getElementsByClassName
let classname = document.getElementsByClassName("para");
for ( i=0; i<classname.length; i++){
    console.log(classname[i]);
}

//getElementByQuerySelector

let queryselector = document.querySelector("h1");
console.log(queryselector);

//getElementsByQuerySelectorall

let queryselectorall = document.querySelectorAll("h1");
for(i=0; i<queryselectorall.length; i++){
    console.log(queryselectorall[i]);
}