const fs=require('fs');
module.exports=function load(file){
 const h=fs.readFileSync(file,'utf8').split('<!-- spillehal-knap')[0];
 let code=h.match(/<script>([\s\S]*)<\/script>/)[1];
 code=code.replace(/requestAnimationFrame\(loop\);\s*$/,"");
 code+="\nreturn {update,draw,S,get P(){return P},ball,newMatch,pick,inp,inp2,setFire,setPass,setFire2,setPass2,kickoff,restart,setupCorner,get ctl(){return ctl},get ctl2(){return ctl2},setTWO(v){TWO=v},T,B,W,LEN,GX0,GX1,setSPD(v){SPD=v},setD(v){DIFF=v},setN(v){NIGHT=v},setI(v){INST=v},aimS,kick,gkKick,pickKit,PLT,CLT,kitD,get ctl(){return ctl},get REF(){return REF},setPHYS(v){PHYS=v},setGP(v){GP=v},get TM(){return TM},gpLoft,aimS_:aimS,lobPass,foul,fkShoot,bestPass,blockedL};";
 const noop=()=>{};
 const gp=new Proxy({},{get:(t,k)=>k=='createPattern'?()=>({}):(k=='createLinearGradient'||k=='createRadialGradient')?()=>({addColorStop:noop}):noop,set:()=>true});
 const el=()=>new Proxy({style:{},dataset:{},children:[],classList:{toggle(){},add(){},remove(){}},querySelectorAll:()=>[],appendChild(){},value:0,firstChild:{style:{}},getContext:()=>gp,getBoundingClientRect:()=>({left:0,top:0,width:480,height:640})},{set:(t,k,v)=>{t[k]=v;return true}});
 const els={};
 global.document={getElementById:id=>els[id]||(els[id]=el()),createElement:()=>el()};
 global.window=global;global.addEventListener=noop;global.innerWidth=400;global.innerHeight=800;global.devicePixelRatio=2;global.navigator={maxTouchPoints:0};
 return new Function(code)();
}
