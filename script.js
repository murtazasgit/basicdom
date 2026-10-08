var id=0
function addtodo(){
    const newdiv=document.createElement("div")
    newdiv.id=id
     const todoId = id;
    var delete1=document.createElement("button")
    delete1.textContent="delete"
   delete1.addEventListener("click", function () {
    deletetodo(todoId);
});

      var edit=document.createElement("button")
      edit.textContent="edit"
      edit.addEventListener("click",function(){
        edittodo(todoId);
      })
   id= id+1
    const val=document.querySelector("input").value
    const text = document.createElement("span");
    text.textContent = val;
   
     newdiv.appendChild(text)
      newdiv.appendChild(delete1)
    newdiv.appendChild(edit)
    document.getElementById("todos").appendChild(newdiv)
    document.querySelector("input").value=""
}

function deletetodo(id){
    var ele=document.getElementById(id)
    ele.parentNode.removeChild(ele)
}

function edittodo(id){
    var ele=document.getElementById(id)
   var val=document.querySelector("input").value
    var firstele=ele.firstElementChild
    firstele.textContent=val
}