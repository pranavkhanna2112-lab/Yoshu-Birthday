
const app=document.getElementById("app");
loading();
function loading(){
app.innerHTML=`<div class="screen">
<div class="logo">Not Creepy at All</div>
<div class="subtitle" id="txt">Loading memories...</div>
<div class="loader"><div id="bar" class="progress"></div></div>
<div id="percent">0%</div></div>`;
let v=0,p=false;
let bar=barEl(),txt=id("txt"),pct=id("percent");
const t=setInterval(()=>{
 if(p)return;
 v++;bar.style.width=v+"%";pct.textContent=v+"%";
 if(v==20)txt.innerHTML="Finding Honey Singh Concert Memories...";
 if(v==45)txt.innerHTML="not creepy a all 😖😖";
 if(v==69){txt.innerHTML="😏 Nice...<br>Loading Vietnam memories 🇻🇳";p=true;setTimeout(()=>p=false,1500);}
 if(v>=100){clearInterval(t);setTimeout(lockScreen,500);}
},40);
}
function barEl(){return id("bar")}
function id(x){return document.getElementById(x)}
function lockScreen(){
const d=new Date();
app.innerHTML=`<div class="screen">
<div class="logo" style="font-size:62px">${String(d.getHours()).padStart(2,"0")}:${String(d.getMinutes()).padStart(2,"0")}</div>
<div class="subtitle">Friday • 24 July</div>
<div class="notification" id="n">
<div style="display:flex;justify-content:space-between;color:#bbb;font-size:13px"><span>❤️ Messages</span><span>Now</span></div>
<div style="margin-top:8px;font-weight:600">Pranav</div>
<div style="margin-top:5px;color:#ddd">Happy Birthday Yoshu ❤️</div>
</div></div>`;
setTimeout(()=>id("n").classList.add("show"),500);
id("n").onclick=chat;
}
function chat(){
app.innerHTML=`<div class="screen"><div id="chat" class="chat"></div><button id="c" class="btn hidden">Continue ❤️</button></div>`;
const msgs=[
"Happy Birthday Yoshu ❤️",
"I wanted this to feel different.",
"So I am GENERELLY creating this invite instead of sending a boring text 😊",
"Eventhough you are a control freak, I have some surprises for you",
"Tomorrow, after HYROX, I have something planned for you and i am sure it will make you happy.",
"Press Continuea and the date countdown begins ❤️"
];
let i=0,c=id("chat");
function next(){
 if(i>=msgs.length){id("c").classList.remove("hidden");id("c").onclick=countdown;return;}
 const typ=document.createElement("div");
 typ.className="typing";
 typ.innerHTML='<div class="dot"></div><div class="dot"></div><div class="dot"></div>';
 c.appendChild(typ);c.scrollTop=c.scrollHeight;
 setTimeout(()=>{
  typ.remove();
  const m=document.createElement("div");
  m.className="msg left";
  m.textContent=msgs[i++];
  c.appendChild(m);
  c.scrollTop=c.scrollHeight;
  next();
 },1200);
}
next();
}
function countdown(){
const target=new Date("2026-07-24T18:00:00");
app.innerHTML=`<div class="screen">
<div class="logo" style="font-size:54px">STILL US</div>
<div class="subtitle">Our Date Begins In</div>
<div id="t" class="time"></div>
<div class="subtitle">Venu - Lemon Tree ✓<br>Party - Planned ✓<br>Gifts - Ready  ✓<br><br>The only thing missing... You and you cute little ass ❤️</div>
<button id="b" class="btn hidden">Check your whatsapp.. ❤️</button></div>`;
function tick(){
 let d=target-new Date();
 if(d<=0){id("t").textContent="00:00:00";id("b").classList.remove("hidden");return;}
 let h=Math.floor(d/3600000);d%=3600000;
 let m=Math.floor(d/60000);d%=60000;
 let s=Math.floor(d/1000);
 id("t").textContent=[h,m,s].map(x=>String(x).padStart(2,"0")).join(":");
}
tick();setInterval(tick,1000);
}
