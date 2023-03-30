
let inputEl= document.getElementById('input');
let list = document.getElementById('listcontent');
let addBtn= document.getElementById('addBtn');
let error= document.getElementById('error');


addBtn.addEventListener('click',() =>{
if (inputEl.value === ""){
error.style.display="block";
}
else{
let li = document.createElement("li");
li.innerHTML= inputEl.value;
list.appendChild(li);
let span = document.createElement("span");
span.innerHTML= "\u00d7";
li.appendChild(span);
}
inputEl.value=" ";
 saveInput();
});


list.addEventListener("click", function(e){
 if (e.target.tagName ==="LI"){
e.target.classList.toggle("check");
 saveInput();
 }  
 else if(e.target.tagName === "SPAN")  {
e.target.parentElement.remove();
saveInput();
 } 
}, false);

function saveInput(){
localStorage .setItem('data', list.innerHTML)

}

function showInput(){
    list.innerHTML = localStorage.getItem('data')
}
showInput();