const {chromium}=require('playwright');(async()=>{const b=await chromium.launch();const p=await b.newPage();const e=[];p.on('pageerror',x=>e.push(x.message));await p.goto('file://'+(process.argv[2]||'/mnt/user-data/outputs/sensible-fodbold.html'));await p.waitForTimeout(250);
const r=await p.evaluate(()=>{const out={n:0,res:{},rows:[]};newMatch(0,1);S.intro=0;let fr=0,cool=0,cur=null;
 for(;S.mode!='end'&&fr<200000;fr++){const c=ctl,o=ball.owner;
  if(S.mode!='play'){if(fr%20==0)setFire(1);else if(fr%20==3)setFire(0);inp.kx=inp.ky=0}
  else{if(inp.pass)setPass(0);
   if(cur){cur.n++;const tg=cur.tg;const d=Math.hypot(tg.x-ball.x,tg.y-ball.y);if(d<cur.md){cur.md=d;cur.spAt=Math.hypot(ball.vx,ball.vy);cur.zAt=ball.z}
    let end=null;if(o&&o===tg)end='modtager fik den';else if(o&&o.t==0)end='anden medspiller';else if(o&&o.t==1)end='modstander ('+(Math.hypot(o.x-cur.x0,o.y-cur.y0)<cur.d0*.6?'tidligt':'ved modtager')+')';else if(S.ob||S.cor||S.gkx||S.fk||S.freeze>0)end='ude af spil';else if(cur.n>150)end='ingen fik den';
    if(end){out.res[end]=(out.res[end]||0)+1;if((end=='ingen fik den'||end=='ude af spil')&&out.rows.length<14)out.rows.push(end+': afstand '+(cur.d0|0)+' fart '+cur.sp0.toFixed(1)+' tættest '+(cur.md|0)+'px (boldfart der '+cur.spAt.toFixed(1)+', højde '+cur.zAt.toFixed(0)+') modtager løb '+(Math.hypot(tg.x-cur.tx0,tg.y-cur.ty0)|0)+'px, modtagerfart ved aflevering '+cur.tv.toFixed(1)+' vinkel-fejl '+cur.aerr.toFixed(0)+'°, ctl=modtager:'+(ctl===tg)+' sigte foran '+cur.lead.toFixed(0)+'px');cur=null;cool=40}}
   else if(o===c&&c&&!c.gk&&!S.fk&&!S.cor&&--cool<0){ // pass: face a random upfield-ish direction like a human would roughly towards a teammate
     const mates=P.filter(q=>q.t==0&&!q.gk&&q!==c&&Math.hypot(q.x-c.x,q.y-c.y)>70&&Math.hypot(q.x-c.x,q.y-c.y)<420);if(mates.length){const m=mates[Math.floor(Math.random()*mates.length)];const a=Math.round(Math.atan2(m.y-c.y,m.x-c.x)/(Math.PI/4))*(Math.PI/4);inp.kx=Math.round(Math.cos(a));inp.ky=Math.round(Math.sin(a));update();fr++;update();fr++;setPass(1);const x0=c.x,y0=c.y;update();fr++;update();fr++;setPass(0);update();fr++;update();fr++;if(ball.owner!==c&&ball.tgt){const tg=ball.tgt,d0=Math.hypot(tg.x-x0,tg.y-y0),sp0=Math.hypot(ball.vx,ball.vy);const ta=Math.atan2(tg.y-y0,tg.x-x0),ba=Math.atan2(ball.vy,ball.vx);let ae=Math.abs(ta-ba)*57.3;if(ae>180)ae=360-ae;const ux=ball.vx/sp0,uy=ball.vy/sp0,lead=(tg.x-x0)*ux+(tg.y-y0)*uy;out.n++;cur={tg,x0,y0,d0,sp0,md:1e9,spAt:0,zAt:0,n:0,tx0:tg.x,ty0:tg.y,tv:Math.hypot(tg.vx,tg.vy),aerr:ae,lead:0};inp.kx=inp.ky=0}else{out.res['ingen modtager valgt']=(out.res['ingen modtager valgt']||0)+1;cool=40}continue}}
   if(!cur&&c){ // simple play: run with ball upfield, else chase
     if(o===c){inp.kx=0;inp.ky=-1}else{const tx=ball.x-c.x,ty=ball.y-c.y,a=Math.round(Math.atan2(ty,tx)/(Math.PI/4))*(Math.PI/4);inp.kx=Math.round(Math.cos(a));inp.ky=Math.round(Math.sin(a))}}
   else if(cur){inp.kx=inp.ky=0} // hands off: let receiver come by itself
  }
  update()}
 return out});console.log(r.n,JSON.stringify(r.res,null,1));console.log(r.rows.join('\n'),e);await b.close()})()
