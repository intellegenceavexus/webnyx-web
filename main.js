const PILLARS_VISIBLE=13;
const PILLAR_WIDTH_PERCENT=3;
const viewportWidth=window.innerWidth;
const pillarWidth=(viewportWidth*PILLAR_WIDTH_PERCENT)/100;
const totalSpacePerPillar=viewportWidth/PILLARS_VISIBLE;
const gapWidth=totalSpacePerPillar-pillarWidth;
const totalPillarsNeeded=Math.ceil((viewportWidth*2)/totalSpacePerPillar)+1;

const backTrack=document.getElementById('backTrack');
const frontTrack=document.getElementById('frontTrack');

for(let i=0;i<totalPillarsNeeded;i++){
let p=document.createElement('div');
p.className='back-pillar';
p.style.width=pillarWidth+'px';
p.style.marginRight=gapWidth+'px';
backTrack.appendChild(p);
}

for(let i=0;i<totalPillarsNeeded;i++){
let p=document.createElement('div');
p.className='front-pillar';
p.style.width=pillarWidth+'px';
p.style.marginRight=gapWidth+'px';
frontTrack.appendChild(p);
}

window.addEventListener('load',()=>{
setTimeout(()=>{document.querySelector('.brand-web').classList.add('reveal');},750);
});

const web=document.querySelector('.brand-web');
const nyx=document.querySelector('.brand-nyx');
const micro=document.querySelector('.brand-micro');
const words=document.querySelectorAll('.headline-word');

const obs1=new MutationObserver(()=>{
if(web.classList.contains('reveal')){
setTimeout(()=>nyx.classList.add('reveal'),250);
obs1.disconnect();
}});
obs1.observe(web,{attributes:true});

const obs2=new MutationObserver(()=>{
if(nyx.classList.contains('reveal')){
setTimeout(()=>micro.classList.add('reveal'),400);
obs2.disconnect();
}});
obs2.observe(nyx,{attributes:true});

const obs3=new MutationObserver(()=>{
if(micro.classList.contains('reveal')){
setTimeout(()=>{
words.forEach((word,index)=>{
setTimeout(()=>word.classList.add('visible'),index*220);
});
},1100);
obs3.disconnect();
}});
obs3.observe(micro,{attributes:true});

const lowerBoxes=document.getElementById('lowerBoxes');
const boxes=document.querySelectorAll('.rect-box');

const observer=new IntersectionObserver((entries)=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
boxes.forEach(box=>box.classList.add('animate'));
observer.disconnect();
}
});
},{threshold:0.4,rootMargin:"0px 0px -10% 0px"});

observer.observe(lowerBoxes);

/* ========================= GOLDEN STRING ========================= */

const waveDivider=document.querySelector('.wave-divider');
const goldenString=document.querySelector('.golden-string');

const goldenObserver=new IntersectionObserver((entries)=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
goldenString.classList.add('draw');
setTimeout(()=>{
goldenString.classList.remove('draw');
goldenString.classList.add('done');
},3000);
goldenObserver.disconnect();
}
});
},{threshold:0.3});

goldenObserver.observe(waveDivider);