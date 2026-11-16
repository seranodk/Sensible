const {chromium}=require('playwright');(async()=>{const b=await chromium.launch();const f=process.argv[2]||'/mnt/user-data/outputs/sensible-fodbold.html';const p=await b.newPage();const e=[];p.on('pageerror',x=>e.push(x.message));await p.goto('file://'+f);await p.waitForTimeout(250);
const r=await p.evaluate(()=>{const out=[];
 const SC={'ingen stik':[],'hoejre hele tiden':[[0,99,1,0]],'op+hoejre (diag)':[[0,99,.71,-.71]],'op (lige)':[[0,99,0,-1]],'flick hoejre->venstre':[[0,6,1,0],[6,20,-1,0]],'flick venstre-hoejre-venstre':[[0,4,-1,0],[4,8,1,0],[8,14,-1,0]],'tryk op + let hoejre sidst':[[0,10,0,-1],[10,30,1,0]]};
 for(const kind of['skud','pasning'])for(const [name,sched] of Object.entries(SC)){const R={hook10:[],maxRate:[],rev:[],dev:[],n:0};
  for(let k=0;k<30;k++){newMatch(0,1);S.intro=0;S.mode='play';S.freeze=0;S.gkx=null;S.fk=null;S.cor=null;S.ob=null;WX=0;const c=P.find(q=>q.t==0&&!q.gk&&q.i==9);const mate=P.find(q=>q.t==0&&!q.gk&&q!==c);for(const q of P)if(q!==c&&!q.gk){q.x=q.t?950:60;q.y=(T+B)/2+(q.t?40:-40);q.vx=q.vy=0}
   c.x=W/2;c.y=T+330;c.vx=c.vy=0;c.dx=0;c.dy=-1;ball.owner=c;ball.x=c.x;ball.y=c.y-9;ctl=c;c.sw=999;
   if(kind=='pasning'){mate.x=W/2;mate.y=T+130}
   const th=[];let fired=false,t0=-1,gk=P.find(q=>q.gk&&q.t==1);gk.x=60;gk.y=B-30;
   for(let i=0;i<80;i++){gk.x=60;gk.y=B-30;gk.vx=gk.vy=0;ctl=c;inp.press=inp.release=0;let kx=0,ky=0;if(t0>=0){for(const [a,bb,x,y] of sched)if(i-t0>=a&&i-t0<bb){kx=x;ky=y}}else{kx=0;ky=-1}
    inp.kx=kx;inp.ky=ky;inp.fire=0;inp.passP=0;
    if(!fired&&i==3){if(kind=='skud'){inp.fire=1;inp.press=1}else{inp.pass=1;inp.passP=1}}
    if(!fired&&i==4){inp.release=1;inp.fire=0;inp.pass=0}
    update();
    if(!fired&&ball.owner!==c&&ball.kicker===c){fired=true;t0=i}
    if(fired&&!ball.owner){th.push(Math.atan2(ball.vy,ball.vx))}else if(fired)break}
   if(th.length<14)continue;R.n++;const th2=th.slice(1,19);const d=[];for(let i=1;i<th2.length;i++){let x=th2[i]-th2[i-1];x=Math.atan2(Math.sin(x),Math.cos(x));d.push(x)}
   const net=Math.abs(Math.atan2(Math.sin(th2[th2.length-1]-th2[0]),Math.cos(th2[th2.length-1]-th2[0])));let path=0;for(const x of d)path+=Math.abs(x);
   R.hook10.push(Math.abs(Math.atan2(Math.sin(th2[9]-th2[0]),Math.cos(th2[9]-th2[0])))*57.3);R.maxRate.push(Math.max(...d.map(Math.abs).filter(v=>v<.35))*57.3);R.rev.push((path-net)*57.3);R.dev.push(net*57.3)}
  const m=a=>a.length?+(a.reduce((x,y)=>x+y,0)/a.length).toFixed(1):0;out.push([kind,name,'n='+R.n,'drej_f10(°)='+m(R.hook10),'maxDrej/frame(°)='+m(R.maxRate),'uro(°)='+m(R.rev),'netto_f23(°)='+m(R.dev)].join('  '))}
 return out});
r.forEach(x=>console.log(x));console.log('fejl',e.length);await b.close()})()
