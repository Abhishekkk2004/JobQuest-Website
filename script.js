restricted=document.querySelectorAll(".restricted");

restricted.forEach(
    (button) => 
    {
        button.addEventListener("click",() => {
            alert("This functionality is not active yet.Try Login as Admin")
        })
    }
)
//   *********
hambmain=document.querySelector(".hambmain");
right2=document.querySelector(".right2");
crossmain=document.querySelector(".crossmain");


hambmain.addEventListener("click",()=>{
    right2.style.display="flex";
})
crossmain.addEventListener("click",()=>{
    right2.style.display="none";
})