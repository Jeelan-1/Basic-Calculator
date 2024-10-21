let disp = document.querySelector(".screen");
let click =  document.querySelectorAll(".val");
click.forEach((ele)=>{
    ele.addEventListener("click",()=>{
        ele.style.border="4px solid red";
        write(ele);
        ele.style.transitionDelay="0.2s";
        ele.style.border= "2px solid rgb(176, 164, 101)";
    });
});
var sym=0;
var prev="a";
var cur ="a";
let write=(ele)=>{
let len=disp.innerText.length;
let x=ele.getAttribute("id");
if(x==1 || x==2 || x==3 || x==4 || x==5 || x==6 || x==7 || x==8 || x==9 || x==0)
{
   if(disp.innerText===0)
    disp.innerText="";
    disp.innerText=disp.innerText+x;
    sym=0;
}
else if(x=="c")
{
   disp.innerText="";
   sym=0;
}
else if(x=="*")
{
    if(len!=0 && sym===0){
    disp.innerText= disp.innerText +"*";
    }
    sym=1;    
}
else if(x=="neg")
{
    if(disp.innerText=="-"){
        disp.innerText="";
    sym=0;
    }
    else if(sym==0){
    disp.innerText= disp.innerText + "-";
    sym=1;
    }
}
else if(x=="/")
{
    if(len!=0 && sym==0)
    disp.innerText=disp.innerText+"/";
    sym=1;
}
else if(x=="+")
{
    if(len!=0 && sym==0)
    disp.innerText+="+";
sym=1;
}
else if(x=="-")
    {
        if(len!=0 && sym==0)
        disp.innerText+="-";
    sym=1;
    }
else if(x=="bsc")
{
    let a=disp.innerText.charAt(disp.innerText.length-1);
    if(a=='-' || a=='+' || a=='*' || x=='/' || x=='neg')
        sym=0;

    const n=disp.innerText.slice(0,-1);
    disp.innerText=n;
}
else if(x==".")
    {
        if(len!=0 && sym==0)
        disp.innerText+=".";
    sym=1;
    }
else if(x=="prev")
{
if(prev!=="a")
{
    cur=disp.innerText;
    disp.innerText=prev;
    ele.setAttribute("id","cur");
    ele.innerText="cur";
}
}
else if(x=="cur")
    {
    if(cur!=="a")
    {
        disp.innerText=cur;
        ele.setAttribute("id","prev");
        ele.innerText="prev";
    }
    }
    else{
        if(len!=0){
     cur = disp.innerText;
     prev = cur;
     cur = eval(cur);
     disp.innerText=cur;
        }
    }
};

function filterInput() {
    const div = document.querySelector('.screen');
    div.innerText= div.innerText.replace(/[a-zA-Z]/g, '');
    placeCaretAtEnd(div);
}
function placeCaretAtEnd(el) {
    el.focus();
    const range = document.createRange();
    range.selectNodeContents(el);
    range.collapse(false);
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
}
// let enter=document.querySelector("#=");
// handleEnter=(event)=>{
//     disp.style.color="red";
// if(event.key==='Enter' || event.keyCode===13)
// {
//     event.preventDefault();
//     disp.style.color="red";
//     write(enter);
// }
// };