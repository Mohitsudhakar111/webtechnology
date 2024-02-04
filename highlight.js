let p=document.getElementById('p')

let searchbtn=document.getElementById('searchbtn');

searchbtn.addEventListener('click',( )=>{
    let input=document.getElementById('input');
   
    if(input!=="")
    {
        let reg=new RegExp(input.value,"gi");
        p.innerHTML=p.textContent.replace(reg,"<mark>$&</mark>");
    }
    
})