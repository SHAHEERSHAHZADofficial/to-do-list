function add(){
    var username = document.getElementById("username")
    var list = document.getElementById("list")

    if (username.value ==""){
        alert("Empty Field !");
        return false;
    }

    var li=document.createElement("li")
    var liText = document.createTextNode(username.value)
    li.appendChild(liText)
    username.value=""
  
    var x = document.createElement("IMG");
    x.setAttribute("src", "dltim.png");
    x.setAttribute("width", "25px");
    x.setAttribute("height", "25px");
    x.setAttribute("onclick","deleteItem(this)")
    li.appendChild(x);

    // var dlt = document.createElement("button")
    // var btnText = document.createTextNode("DELETE")
    // dlt.setAttribute("onclick","deleteItem(this)")
    // dlt.setAttribute("class","add-item")
    // dlt.appendChild(btnText)
    // li.appendChild(dlt)
    
    var j = document.createElement("IMG");
    j.setAttribute("src", "editim.png");
    j.setAttribute("width", "25px");
    j.setAttribute("height", "25px");
    j.setAttribute("onclick","edit(this)")
    li.appendChild(j);

    // var edit = document.createElement("button")
    // var editText = document.createTextNode("EDIT")
    // edit.appendChild(editText)
    // li.appendChild(edit)
    // edit.setAttribute("onclick","edit(this)")
    // edit.setAttribute("class","add-item")

    list.appendChild(li)
   
}
function deleteItem(e){
    e.parentNode.remove()
}
function deleteAll(){
   var ul =  document.getElementById("list")
   ul.innerHTML=""
}
function edit(e){
    var editValue = prompt("Enter edit value : " ,e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue=editValue; 
   
}