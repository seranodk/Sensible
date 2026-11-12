const {chromium}=require('playwright');(async()=>{const b=await chromium.launch();const p=await b.newPage();const e=[];p.on('pageerror',x=>e.push(x.message));await p.goto('file:///mnt/user-data/outputs/sensible-fodbold.html');await p.waitForTimeout(250);
const N=+(process.argv[2]||12);
const r=await p.evaluate((N)=>{const out=[];
 function setup(x,y){newMatch(0,1);S.intro=0;S.mode='play';S.freeze=0;const o=P.find(q=>q.t==0&&!q.gk&&q.i==9)||P.find(q=>q.t==0&&!q.gk);const q=P.find(z=>z.t==1&&!z.gk);o.x=x;o.y=y;ball.owner=o;foul(q,o);for(let i=0;i<200&&(S.freeze>0||!S.fk||!S.fk.aim);i++)update();for(let i=0;i<110;i++)update();return S.fk}
 function shoot(tx,h,cs,hold){const f=S.fk;if(!f)return"nofk";f.tx=tx;f.h=h;f.cs=cs;const wall=f.wall.map(w=>w.p);inp.fire=1;inp.press=1;update();inp.press=0;for(let i=0;i<hold;i++)update();inp.fire=0;inp.release=1;update();inp.release=0;
  let goal=0,ev=null,sc0=S.score[0],cross=null;for(let fr=0;fr<300;fr++){const by=ball.y;update();if(S.score[0]>sc0)goal=1;if(!cross&&by>T&&ball.y<=T)cross={x:ball.x,z:ball.z};if(!ev&&ball.owner&&ball.owner.t==1)ev=wall.includes(ball.owner)?'mur':ball.owner.gk?'gk':'def';if(S.mode!='play'&&S.mode!='goal'){break}if(goal&&fr>10)break;if(S.fk==null&&ball.owner&&fr>60)break}
  if(goal)return'maal';if(ev)return ev;if(cross){return (cross.x>GX0&&cross.x<GX1&&cross.z<30)?'?':'forbi'}return'ud/andet'}
 const CFG=[['lige midt, middel',500,T+300,W/2,.5,0],['over mur, hoej, venstre',500,T+300,W/2-60,.85,0],['over mur, hoej, hoejre',500,T+300,W/2+65,.85,0],['lavt hjoerne+skru venstre',620,T+300,W/2-70,.25,-2],['lavt hjoerne+skru hoejre',380,T+300,W/2+70,.25,2],['svag skru hoejre mid',420,T+280,W/2+55,.5,1],['jord, hjoerne',500,T+300,W/2-75,0,0]];
 for(const [n,x,y,tx,h,cs] of CFG){const c={};for(let i=0;i<N;i++){setup(x,y);const rr=shoot(tx,h,cs,19);c[rr]=(c[rr]||0)+1}out.push(n+': '+JSON.stringify(c))}
 return out},N);
r.forEach(x=>console.log(x));console.log('fejl:',e.length,e.slice(0,3));await b.close()})()
