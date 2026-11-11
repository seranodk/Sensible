const {chromium}=require('playwright');(async()=>{const b=await chromium.launch();const f=process.argv[2]||'/mnt/user-data/outputs/sensible-fodbold.html';const N=+(process.argv[3]||4);
const agg={};const add=(k,v=1)=>agg[k]=(agg[k]||0)+v;const lists={};const push=(k,v)=>{(lists[k]=lists[k]||[]).push(v)};const ex={};
for(let run=0;run<N;run++){const p=await b.newPage();const e=[];p.on('pageerror',x=>e.push(x.message));await p.goto('file://'+f);await p.waitForTimeout(250);
const r=await p.evaluate((touch)=>{const A={},L={},EX={};const add=(k,v=1)=>A[k]=(A[k]||0)+v,push=(k,v)=>{(L[k]=L[k]||[]).push(v)},exa=(k,v)=>{(EX[k]=EX[k]||[]);if(EX[k].length<4)EX[k].push(v)};
 const rnd=(a,b)=>a+Math.random()*(b-a);
 newMatch(0,1);S.intro=0;
 let dec=0,dir=[0,0],fireT=0,passT=0,want=null,wantT=0,lastCtl=null,lastOwn=null,pend=[],fr=0,ownFr=[0,0,0],modeFr={},obStart=-1,defSw=0,defFr=0,stuck=0,lastBall=[0,0],idle=0;
 function setDir(x,y){const m=Math.hypot(x,y);if(m<.01){inp.kx=inp.ky=0;inp.tx=inp.ty=0;return}if(touch){const a=Math.atan2(y,x)+rnd(-.25,.25);inp.kx=inp.ky=0;inp.tx=Math.cos(a);inp.ty=Math.sin(a)}else{const a=Math.round(Math.atan2(y,x)/(Math.PI/4))*(Math.PI/4);inp.tx=inp.ty=0;inp.kx=Math.round(Math.cos(a));inp.ky=Math.round(Math.sin(a))}}
 const gy=T; // human attacks top
 for(;S.mode!='end'&&fr<300000;fr++){
  const c=ctl,o=ball.owner;modeFr[S.mode]=(modeFr[S.mode]||0)+1;
  if(S.mode=='play'){ownFr[o?(o.t==0?0:1):2]++;
   // out-of-play / restart tracking
   const dead=S.freeze>0||!!S.ob||!!S.fk||!!S.cor||!!S.gkx;if(dead){if(obStart<0)obStart=fr}else if(obStart>=0){push('restartFrames',fr-obStart);obStart=-1}
   if(S.freeze>0)add('freezeFrames');
   // control switching while opponent has ball
   if(o&&o.t==1){defFr++;if(lastCtl&&c!==lastCtl&&lastOwn===o)defSw++}
   // is controlled player a sensible choice? (not far from nearest own outfield to ball when defending)
   if(c&&(!o||o.t==1)&&!dead){let bd=1e9;for(const q of P)if(q.t==0&&!q.gk){const d=Math.hypot(q.x-ball.x,q.y-ball.y);if(d<bd)bd=d}const cd=Math.hypot(c.x-ball.x,c.y-ball.y);add('defFramesTot');if(cd>bd+160){add('ctlFarFrames');}}
   // ball standing still with nobody near for long
   if(!o&&Math.hypot(ball.vx,ball.vy)<.2&&!dead){idle++;if(idle==150){add('looseBallIdle150');exa('looseBallIdle',{x:ball.x|0,y:ball.y|0,min:S.clock|0})}}else idle=0;
  }
  // resolve pending observations
  for(const q of pend.slice()){if(fr-q.t>=q.w){pend.splice(pend.indexOf(q),1);q.done()}}
  // ---- bot decisions
  if(S.mode!='play'){if(fr%20==0){setFire(1)}else if(fr%20==3)setFire(0);setDir(0,0)}
  else{
   if(fireT>0){fireT--;if(fireT==0)setFire(0)}
   if(passT>0){passT--;if(passT==0)setPass(0)}
   if(--dec<=0&&c){dec=Math.round(rnd(5,13));
    if(o===c){ // attacking with ball
     const dg=Math.hypot(W/2-c.x,gy-c.y);let tx=W/2+(c.x<W/2?-40:40)-c.x,ty=gy+90-c.y;
     // avoid nearest opponent ahead
     let near=null,nd=1e9;for(const q of P)if(q.t==1&&!q.gk){const d=Math.hypot(q.x-c.x,q.y-c.y);if(d<nd&&q.y<c.y+20){nd=d;near=q}}
     if(near&&nd<70){tx+=(c.x>near.x?1:-1)*120}
     setDir(tx,ty);
     if(c.gk){if(fireT==0&&passT==0){if(Math.random()<.5){setFire(1);fireT=3;add('gkKickPress')}else{setPass(1);passT=3;add('gkThrowPress')}}}
     else if(S.fk&&S.fk.p===c||S.cor&&S.cor.taker===c){if(fireT==0){setFire(1);fireT=Math.round(rnd(2,8))}}
     else if(dg<330&&Math.abs(c.x-W/2)<260&&fireT==0&&passT==0){ // shoot with short tap, direction as held (often diagonal)
      setFire(1);fireT=Math.round(rnd(1,9));add('shotPress');const t0=fr,x0=c.x,y0=c.y,cc=c,dg0=dg;let seen=false;
      const chk={t:fr,w:14,done(){ // did the ball leave?
        if(ball.owner===cc){add('shotPress_noKick');exa('shotNoKick',{hold:cc.hold,stun:cc.stun,th:cc.th,mode:S.mode,fz:S.freeze,min:S.clock|0})}}};pend.push(chk);
      const st={sp:0};const iv={t:fr,w:1,done(){}};
      // measure kick speed when it leaves
      let watch=0;const w={t:fr,w:1,done(){if(ball.owner!==cc&&!seen&&ball.last==0){seen=true;const sp=Math.hypot(ball.vx,ball.vy),ang=Math.abs(Math.atan2(ball.vx,-ball.vy)-Math.atan2(W/2-x0,-(gy-y0)))*57.3;push('shotSpeed',sp);push('shotAngOff',ang);if(sp<8){add('shot_weak');exa('shotWeak',{sp:+sp.toFixed(1),vz:+ball.vz.toFixed(1),pass:!!ball.isPass,blind:!!ball.blind,dg:dg0|0})}if(ang>35){add('shot_wayOff');exa('shotWayOff',{ang:ang|0,dg:dg0|0,dx:(W/2-x0)|0})}if(ball.vz>3)add('shot_balloon');const m0=S.score[0];pend.push({t:fr,w:90,done(){if(S.score[0]>m0)add('shot_goal');else if(S.mode=='play'&&ball.owner&&ball.owner.gk&&ball.owner.t==1)add('shot_saved');else if(ball.y<T+5)add('shot_out_or_post');else add('shot_blocked_other')}})}else if(!seen&&++watch<14)pend.push({t:fr,w:1,done:w.done})}};pend.push(w);
     }
     else if(near&&nd<60&&passT==0&&fireT==0&&Math.random()<.55||(!near&&Math.random()<.04)){ // pass under pressure
      setPass(1);passT=Math.round(rnd(2,6));add('passPress');const cc=c,x0=c.x,y0=c.y;let watch=0;
      const w={t:fr,w:1,done(){if(ball.owner!==cc&&ball.last==0){const sp=Math.hypot(ball.vx,ball.vy),tg=ball.tgt;push('passSpeed',sp);if(!tg){add('pass_noTarget');}else{const d0=Math.hypot(tg.x-x0,tg.y-y0);push('passDist',d0);if(tg.y>y0+60)add('pass_backward')}if(ball.blind)add('pass_blind');pend.push({t:fr,w:110,done(){const ow=ball.owner;if(ow&&ow.t==0&&ow!==cc)add('pass_completed');else if(ow&&ow.t==0)add('pass_backToSelf');else if(ow&&ow.t==1)add('pass_intercepted');else if(S.ob||S.cor||S.gkx||S.fk)add('pass_outOfPlay');else{add('pass_loose');if(tg)exa('passLoose',{dToTgt:Math.hypot(tg.x-ball.x,tg.y-ball.y)|0,sp:+Math.hypot(ball.vx,ball.vy).toFixed(1)})}}})}else if(++watch<10)pend.push({t:fr,w:1,done:w.done})}};pend.push(w)}
    }else if(o&&o.t==0){ // teammate has ball: support run
     setDir(W/2-c.x+(c.x<W/2?-150:150),-1*200)
    }else{ // defend / loose ball
     const tx=(o?o.x+o.vx*8:ball.x+ball.vx*6)-c.x,ty=(o?o.y+o.vy*8:ball.y+ball.vy*6)-c.y;setDir(tx,ty);
     if(o&&o.t==1&&!o.gk){const d=Math.hypot(o.x-c.x,o.y-c.y);if(d<34&&passT==0&&Math.random()<.6){setPass(1);passT=3;add('tacklePress');const cc=c,oo=o;pend.push({t:fr,w:8,done(){if(ball.owner&&ball.owner.t==0)add('tackle_won');else if(cc.stun>0)add('tackle_lost_stunned');else add('tackle_nothing')}})}
      else if(d>=34&&d<200&&passT==0&&Math.random()<.25){setPass(1);passT=2;add('boostPress')}
      else if(d<60&&fireT==0&&Math.random()<.12){setFire(1);fireT=2;add('slidePress');const cc=c;pend.push({t:fr,w:30,done(){if(ball.owner&&ball.owner.t==0)add('slide_won');else if(S.fk)add('slide_foul');else add('slide_missed')}})}}
    }
   }
  }
  lastCtl=c;lastOwn=o;
  const sc0=S.score[0],sc1=S.score[1];
  update();
  if(S.score[0]>sc0)add('goalsFor');if(S.score[1]>sc1)add('goalsAgainst');
 }
 A.frames=fr;A.defSw=defSw;A.defFr=defFr;A.own0=ownFr[0];A.own1=ownFr[1];A.ownLoose=ownFr[2];for(const k in modeFr)A['mode_'+k]=modeFr[k];
 return{A,L,EX,score:S.score.join('-'),clock:S.clock}},run%2==1);
console.log('kamp',run+1,run%2?'(touch)':'(tastatur)',r.score,e.length?e:'');for(const k in r.A)add(k,r.A[k]);for(const k in r.L)for(const v of r.L[k])push(k,v);for(const k in r.EX)(ex[k]=ex[k]||[]).push(...r.EX[k]);await p.close()}
const st=a=>{if(!a||!a.length)return'-';const s=a.slice().sort((x,y)=>x-y),q=p=>s[Math.min(s.length-1,Math.floor(p*s.length))];return 'n='+s.length+' min '+s[0].toFixed(1)+' p10 '+q(.1).toFixed(1)+' median '+q(.5).toFixed(1)+' p90 '+q(.9).toFixed(1)+' max '+s[s.length-1].toFixed(1)};
console.log(JSON.stringify(agg,null,0).replace(/,/g,'\n'));for(const k in lists)console.log(k,st(lists[k]));console.log(JSON.stringify(ex).slice(0,3000));await b.close()})()
