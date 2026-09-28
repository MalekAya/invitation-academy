const particles = document.getElementById("particles");

for(let i=0;i<36;i++){
  const p=document.createElement("span");
  p.className="particle";
  const size=2+Math.random()*4;
  p.style.width=`${size}px`;
  p.style.height=`${size}px`;
  p.style.left=`${Math.random()*100}%`;
  p.style.animationDuration=`${6+Math.random()*10}s`;
  p.style.animationDelay=`${Math.random()*9}s`;
  particles.appendChild(p);
}

async function shareInvitation(){
  const data={
    title:"حفل افتتاح أكاديمية نور إيلاف للتدريب",
    text:"يشرفنا دعوتكم لحضور حفل الافتتاح الرسمي لأكاديمية نور إيلاف للتدريب.",
    url:window.location.href
  };

  if(navigator.share){
    try{
      await navigator.share(data);
      return;
    }catch(e){}
  }

  try{
    await navigator.clipboard.writeText(window.location.href);
    showToast("تم نسخ رابط الدعوة بنجاح");
  }catch(e){
    prompt("انسخي رابط الدعوة:",window.location.href);
  }
}

function showToast(message){
  const toast=document.getElementById("toast");
  toast.textContent=message;
  toast.classList.add("show");
  setTimeout(()=>toast.classList.remove("show"),3000);
}

const poster=document.querySelector(".poster");

if(poster && window.innerWidth>700){
  document.addEventListener("mousemove",(e)=>{
    const x=(window.innerWidth/2-e.clientX)/120;
    const y=(window.innerHeight/2-e.clientY)/160;
    poster.style.transform=
      `rotateY(${x}deg) rotateX(${y}deg) translateY(-3px)`;
  });

  document.addEventListener("mouseleave",()=>{
    poster.style.transform="rotateY(0) rotateX(0) translateY(0)";
  });
}
