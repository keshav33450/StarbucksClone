const toggle=document.querySelector(".nav-toggle");
const navLinks=document.querySelector(".nav-links");
if(toggle&&navLinks){
toggle.addEventListener("click",()=>{navLinks.classList.toggle("open")});
navLinks.addEventListener("click",e=>{if(e.target.tagName.toLowerCase()==="a"){navLinks.classList.remove("open")}});
}
const storeInput=document.getElementById("store-input");
const storeBtn=document.getElementById("store-search-btn");
const storeResults=document.getElementById("store-results");
if(storeBtn&&storeInput&&storeResults){
storeBtn.addEventListener("click",()=>{
const q=storeInput.value.trim();
storeResults.innerHTML="";
if(!q){
storeResults.innerHTML="<p>Please enter a city or pincode.</p>";
return;
}
const fake=[
{name:"Starbucks City Center",address:"Main Road, "+q,time:"8:00 AM – 10:00 PM"},
{name:"Starbucks Mall Outlet",address:"Mall, 2nd Floor, "+q,time:"10:00 AM – 11:00 PM"}
];
fake.forEach(s=>{
const div=document.createElement("div");
div.className="store-card";
div.innerHTML=`<h3>${s.name}</h3><p>${s.address}</p><p><strong>Hours:</strong> ${s.time}</p>`;
storeResults.appendChild(div);
});
});
}
