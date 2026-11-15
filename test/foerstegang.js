const {chromium}=require('playwright');(async()=>{const b=await chromium.launch();const f=process.argv[2]||'/mnt/user-data/outputs/sensible-fodbold.html';const N=+(process.argv[3]||60);const p=await b.newPage();const e=[];p.on('pageerror',x=>e.push(x.message));await p.goto('file://'+f);await p.waitForTimeout(250);
const r=await p.evaluate((N)=>{const out={};
 for(const [lab,d] of [['tidligt buffer (d=19)',19],['perfekt (d=13)',13],['perfekt (d=3)',3],['sent (d=-5)',-5],['for sent (d=-9)',-9]]){for(const side of['fra siden','forfra']){const R={n:0,kick:0,sp:[],on:0,goal:0,perf:0,ids:[]};
  for(let k=0;k<N;k++){newMatch(0,1);S.intro=0;S.mode='play';S.freeze=0;S.gkx=null;S.fk=null;S.cor=null;S.ob=null;const c=P.find(q=>q.t==0&&!q.gk&&q.i==9);for(const q of P)if(q!==c&&!q.gk){q.x=q.t?900:100;q.y=(T+B)/2;q.vx=q.vy=0}
   c.x=W/2+(Math.random()-.5)*160;c.y=T+170+Math.random()*130;c.vx=c.vy=0;c.dx=0;c.dy=-1;ball.owner=null;ball.last=0;ball.vz=0;ball.z=0;
   if(side=='fra siden'){ball.x=c.x-190;ball.y=c.y+40;ball.vx=8;ball.vy=-1.5}else{ball.x=c.x;ball.y=c.y+200;ball.vx=0;ball.vy=-8}
   ctl=c;c.sw=999;let pressed=false,got=false,kicked=false,sc0=S.score[0],cnt=0;inp.kx=0;inp.ky=0;
   for(let i=0;i<120;i++){for(const q of P)if(q!==c&&!q.gk){q.x=q.t?900:100;q.vx=q.vy=0}ctl=c;inp.press=inp.release=0;
    const dist2=Math.hypot(c.x-ball.x,c.y-ball.y),v=Math.hypot(ball.vx,ball.vy)||1;
    if(!pressed&&((d>0&&!ball.owner&&dist2/v<=d)||(d<=0&&ball.owner===c&&S.cf-c.ft>=-d))){inp.fire=1;inp.press=1;pressed=true}if(ball.owner===c)got=true;
    if(pressed&&i>0&&inp.fire&&++cnt>3){inp.fire=0;inp.release=1}
    update();if(!kicked&&got&&ball.owner!==c&&ball.last==0&&Math.hypot(ball.vx,ball.vy)>7){kicked=true;R.kick++;R.sp.push(Math.hypot(ball.vx,ball.vy));const s=fkSim(ball.x,ball.y,ball.vx,ball.vy,ball.vz,0,0,200);if(s.x>GX0&&s.x<GX1)R.on++;R.perf+=(c.pfT!=null&&S.cf-c.pfT<5)?1:0;R.ids.push(s.z/30.25*100)}
    if(S.score[0]>sc0){R.goal++;break}if(kicked&&i>90)break}
   R.n++}
  const sp=R.sp.sort((a,b)=>a-b);out[lab+' '+side]={skud:R.kick+'/'+R.n,fart:sp.length?+(sp.reduce((a,b)=>a+b,0)/sp.length).toFixed(1):0,paaMaal:R.kick?Math.round(100*R.on/R.kick)+'%':'-',maal:R.goal,perfekt:R.perf}}}
 return out},N);
for(const k in r)console.log(k.padEnd(34),JSON.stringify(r[k]));console.log('fejl:',e.length,e.slice(0,3));await b.close()})()
