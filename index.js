

const searchicon1=$("#searchicon1");
const srchicon1=$("#srchicon1");
const search1=$("#searchinput1");

searchicon1.addEventListener("click",function(){
    search1.style.display="flex";
    searchicon1.style.display="none"
})

const searchicon2=document.$("#searchicon2");
const srchicon2=document.$("#srchicon2");
const search2=document.$("#searchinput2");

searchicon2.addEventListener("click",function(){
    search2.style.display="flex";
    searchicon2.style.display="none"
})

const bar =$(".fa-bars");
const cross =$("#hdcross");
const headerbar=$(".headerbar");

bar.addEventListener('click',function(){
    setTimeout(()=>{
        cross.style.display="block";
    },200);
    headerbar.style.right="0%";
})

cross.addEventListener('click',function(){
    cross.style.display="none";
    headerbar.style.right="-100%";
})