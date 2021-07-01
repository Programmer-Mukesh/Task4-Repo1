let dd= document.getElementsByClassName("dropDown")[0];
let hover= document.getElementsByClassName("senior")[0];

hover.addEventListener('mouseover', ()=>{
    dd.style.display="block";

})

hover.addEventListener('mouseout', ()=>{
    dd.style.display="none";

})
