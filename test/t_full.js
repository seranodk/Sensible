const api=require('./harness.js')(process.argv[2]);let errs=0;
for(const two of[false,true]){api.setTWO(two);for(const comp of['pl','cl']){api.pick(comp);for(const spd of[.75,1]){api.setSPD(spd);
 for(let m=0;m<2;m++){api.newMatch(m,m+4);const seen={};let cor=0,fc=false;
  for(let f=0;f<60*250&&api.S.mode!='end';f++){
   api.inp.kx=Math.random()<.5?1:-1;api.inp.ky=Math.random()<.5?-1:1;api.inp2.kx=Math.random()<.5?1:-1;api.inp2.ky=Math.random()<.5?-1:1;
   if(f%37==0){api.setFire(1);api.setFire2(1)}if(f%37==9){api.setFire(0);api.setFire2(0)}if(f%53==0){api.setPass(1);api.setPass2(1)}if(f%53==3){api.setPass(0);api.setPass2(0)}
   try{api.update();if(f%7==0)api.draw();if(api.S.cor&&!fc){cor++;fc=true}if(!api.S.cor)fc=false}catch(e){errs++;console.log('ERR',e.stack.split('\n').slice(0,3).join(' | '));break}
   seen[api.S.mode]=(seen[api.S.mode]||0)+1}
  console.log(two?'2sp':'1sp',comp,'spd',spd,'score',api.S.score.join('-'),'hjørnespark',cor,'ender',api.S.mode)}}}}
console.log('fejl:',errs);
