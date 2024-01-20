
clickevent=document.querySelectorAll(".clickevent");
clickevent.forEach(
    (ev)=>{
      
    ev.addEventListener("click",()=>{
        alert("Not Yet Functional! Try Others")
    })  
    }


)

myWork = document.querySelector("#myWork");
myCompany = document.querySelector("#myCompany");
myRole = document.querySelector("#myRole");
myTime = document.querySelector("#myTime");
myNature = document.querySelector("#myNature");
myExperience = document.querySelector("#myExperience");
myMoney = document.querySelector("#myMoney");
myWorking = document.querySelector("#myWorking");
myLocation = document.querySelector("#myLocation");

// role=document.querySelector("#role");
// company=document.querySelector("#company");
// // location=document.querySelector("#location1");
// // nature=document.querySelector("#nature1");
// time=document.querySelector("#time");
// duration=document.querySelector("#duration");
// money=document.querySelector("#money");
// type=document.querySelector("#type");
// details=document.querySelector("#details");

click = document.querySelector(".updatebtn"); // button
upload = document.querySelector(".upload");
click2 = document.querySelector(".addupdate");
add = document.querySelector(".addup");
fetchbox = document.querySelector(".fetch");
flag = 0;
click2.addEventListener("click", () => {
    if (flag == 0) {
        upload.classList.remove("hide");
        flag = 1;
        add.classList.remove("hide");

    }
    else {
        alert("Already the update box is open")
    }

})
add.addEventListener("click", () => {
    upload.classList.add("hide");
    add.classList.add("hide");
    flag = 0;
})

click.addEventListener("click", () => {

    work1 = myWork.value;
    company1 = myCompany.value;
    role1 = myRole.value;
    time1 = myTime.value;
    locate1 = myLocation.value;
    nature1 = myNature.value;
    experience1 = myExperience.value;
    money1 = myMoney.value;
    working1 = myWorking.value;


    if(work1!=="" && company1!=="" && role1!=="" && time1!=="" && locate1!=="" && nature1!=="" && experience1!=="" && money1!=="" && working1!=="")
    {
    // console.log(work);
    // console.log(company);
    // console.log(role);
    // console.log(time);
    // console.log(locate);
    // console.log(nature);
    // console.log(experience);
    // console.log(money);
    // console.log(working);
    let newBox = document.createElement("div");
    newBox.setAttribute("class", "box11");
    newBox.innerHTML=`<div id="role"></div>
    <div id="company"></div>
    <div id="location"><i class="fa-solid fa-location-dot margin"></i> <span id="location1">Bangalore</span></div>
    <div id="nature"><i class="fa-solid fa-house-laptop margin"></i> <span id="nature1">Remote</span></div>
    
    <div class="innerbox">
        <div class="innerbox2">
            <div class="upheadings"><i class="fa-regular fa-circle-play margin"></i> START DATE</div>
            <div id="time"></div>
        </div>
        <div class="innerbox2">
            <div class="upheadings"><i class="fa-regular fa-calendar margin"></i> DURATION</div>
            <div id="duration"></div>
        </div>
        <div class="innerbox2">
            <div class="upheadings"><i class="fa-solid fa-money-check-dollar margin"></i> STIPEND</div>
            <div id="money"></div>
        </div>
        <div class="innerbox2">
            <div class="upheadings"><i class="fa-solid fa-user-check margin"></i> TYPE</div>
            <div id="type"></div>
        </div>
       
     </div>
    <div id="details"></div>
`
    fetchbox.prepend(newBox);


    role=newBox.querySelector("#role");
    company=newBox.querySelector("#company");
    // location=newBox.querySelector("#location1");
    nature=newBox.querySelector("#nature1");
    time=newBox.querySelector("#time");
    duration=newBox.querySelector("#duration");
    money=newBox.querySelector("#money");
    type=newBox.querySelector("#type");
    details=newBox.querySelector("#details");

role.innerText=role1;
company.innerText=company1;
// location.innerText=locate1
nature.innerText=nature1;
time.innerText=time1;
duration.innerText=experience1;
money.innerText=money1;
type.innerText=work1;
details.innerText=working1;


myWork.value="";
myCompany.value="";
myRole.value="";
myTime.value="";
myLocation.value="";
myNature.value="";
myExperience.value="";
myMoney.value="";
myWorking.value="";
    }
    else{
        alert("Please Enter All the  Data");
    }

})



// **********


hamb=document.querySelector(".hamb");
right1=document.querySelector(".right1");
cross=document.querySelector(".cross");


hamb.addEventListener("click",()=>{
    right1.style.display="flex";
})
cross.addEventListener("click",()=>{
    right1.style.display="none";
})







