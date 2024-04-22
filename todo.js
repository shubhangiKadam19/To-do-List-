let inp=document.querySelector('input');
let btn=document.querySelector('button');
let ul=document.querySelector('ul');
btn.addEventListener('click',function(){
    if(inp.value===""){
        alert("You must write something!");
    }else{
        let li=document.createElement('li');
        let del=document.createElement('span');
        del.innerHTML='\u00d7';
        li.innerText=inp.value;
        ul.appendChild(li);
        li.appendChild(del);
    }
    inp.value="";
})
ul.addEventListener('click',function(event){
    console.log(event);
    if(event.target.tagName==='SPAN'){
       event.target.parentElement.remove();
    }
    else if(event.target.tagName==='LI'){
        event.target.classList.toggle("checked");
    }
}, false);

