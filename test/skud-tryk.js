const {chromium}=require('playwright');(async()=>{const b=await chromium.launch();const f=process.argv[2]||'/mnt/user-data/outputs/sensible-fodbold.html';const p=await b.newPage();const e=[];p.on('pageerror',x=>e.push(x.message));await p.goto('file://'+f);await p.waitForTimeout(300);
const r=await p.evaluate(()=>{const rows=[];
 function run(D,side,pre,dist0,mates){ // D frames holding fire; side: kx during shot (-1,0,1) with ky; pre: frames before press that side key goes down
  newMatch(0,1);S.intro=0;S.mode='play';S.freeze=0;S.clock=10;
  for(const q of P){if(q.t==1&&!q.gk){q.x=80;q.y=1250}if(q.t==0&&!q.gk){q.x=mates?q.x:920;q.y=mates?q.y:1250}}
  const c=P.find(q=>q.t==0&&q.i==9);c.x=W/2+30;c.y=T+dist0;c.vx=0;c.vy=0;setOwner(c);c.ft=-99;ctl=c;c.sw=999;
  let t=0,shot=null;inp.kx=0;inp.ky=-1;const t0=30;
  for(;t<160;t++){ // run up 30 frames, then press
   for(const q of P){if(q.t==1&&!q.gk){q.x=80;q.y=1250;q.vx=q.vy=0}if(!mates&&q.t==0&&!q.gk&&q!==c){q.x=920;q.y=1250}}
   ctl=c;inp.press=0;inp.release=0;
   if(t>=t0-pre&&t<t0+D+3){inp.kx=side[0];inp.ky=side[1]}else{inp.kx=0;inp.ky=-1}
   if(t==t0){inp.fire=1;inp.press=1}
   if(t==t0+D){inp.fire=0;inp.release=1}
   update();
   if(!shot&&ball.owner!==c&&t>=t0){shot={t:t-t0,sp:Math.hypot(ball.vx,ball.vy),vz:ball.vz,ang:Math.atan2(ball.vx,-ball.vy)*57.3,pass:!!ball.isPass,blind:!!ball.blind,x0:ball.x,y0:ball.y};}
   if(shot&&t-t0-shot.t==60){shot.d60=Math.hypot(ball.x-shot.x0,ball.y-shot.y0);break}
   if(shot&&S.mode!='play'){shot.d60='('+S.mode+')';break}}
  return shot}
 for(const dist0 of[260]){for(const [nm,side,pre] of[['lige frem',[0,-1],0],['skråt',[1,-1],3],['ren side, trykket 3 frames før',[1,0],3],['ren side, trykket samtidig',[1,0],0],['bagud',[0,1],2],['ingen retning',[0,0],2]]){for(const D of[1,2,3,4,5,6,8,12,25]){const s=run(D,side,pre,dist0,false);rows.push([nm,'hold '+D,s?('efter '+s.t+'f fart '+s.sp.toFixed(1)+' vz '+s.vz.toFixed(1)+' vinkel '+s.ang.toFixed(0)+(s.pass?' PASS':'')+(s.blind?' BLIND':'')+' → '+(typeof s.d60=='number'?s.d60.toFixed(0)+'px/60f':s.d60)):'INTET SKUD'].join(' | '))}}}
 return rows});console.log(r.join('\n'),e);await b.close()})()
