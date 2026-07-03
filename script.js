emailjs.init({publicKey:'Vms70f7-nOevWD4uE'});
const qs=[
['Main purpose',['Sell Paintings','Show My Artwork','Get Commissions','All of the Above']],
['Style',['Modern','Luxury','Minimal','Colorful','Dark']],
['Colours',['Black & Gold','White','Blue','Beige','Surprise Me']],
['Pages',['Home','Gallery','Shop','About','Contact','FAQ','Blog']],
['Customers can',['Buy Paintings','Contact Me','Request Commission','Newsletter']],
['Sell Where?',['Sri Lanka','Worldwide','Both']],
['Payments',['Visa/Mastercard','PayPal','Bank Transfer','Decide Later']],
['Animations',['Smooth Scroll','Fade In','Floating Images','Hover Effects']]
];
let i=0,ans={};
const q=document.getElementById('q');
function render(){document.getElementById('done').style.display=i>=qs.length?'block':'none';document.querySelector('.nav').style.display=i>=qs.length?'none':'block';if(i>=qs.length)return;let [t,opts]=qs[i];q.innerHTML='<h2>'+(i+1)+'. '+t+'</h2>'+opts.map(o=>`<div class="card ${ans[t]==o?'sel':''}" onclick="pick('${o.replace(/'/g,"")}')">${o}</div>`).join('')}
window.pick=(o)=>{ans[qs[i][0]]=o;render();}
next.onclick=()=>{if(i<qs.length)i++;render();}
prev.onclick=()=>{if(i>0)i--;render();}
send.onclick=()=>{emailjs.send('service_6gcxl6q','template_zku2w46',{answers:JSON.stringify(ans,null,2)}).then(()=>msg.textContent='Sent!',e=>msg.textContent='Error '+e.text)}
render();