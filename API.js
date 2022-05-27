var div=document.createElement("div")
div.innerHTML=`<input type="text" id="txt">
<button type="button" onclick="foo()">search</button>
<div id="active"></div>
<div id="recover"></div>
<div id="deaths"></div>`;
div.style.textAlign="center";
document.body.append(div);
var h=document.querySelector("h1")
h.style.textAlign="center"
async function foo(){
let cc=document.getElementById("txt").value
let res=await fetch(`https://api.covid19api.com/total/dayone/country/${cc}`);
let res1=await res.json();
console.log(res1)

let index=res1.length-1;
var active=res1[index].Active
var recover=res1[index].Recovered
var deaths=res1[index].Deaths
console.log(active)
console.log(recover) 
console.log(deaths)   

document.getElementById("active").innerText=`Total Active cases:${active}`
document.getElementById("recover").innerText=`Total Active cases:${recover}`
document.getElementById("deaths").innerText=`Total Active cases:${deaths}`

}
