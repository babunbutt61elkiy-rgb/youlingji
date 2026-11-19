function countText(value) {
  const han=(value.match(/\p{Script=Han}/gu)||[]).length;
  const external=value.replace(/\p{Script=Han}/gu,' ');
  const words=(external.match(/[\p{L}\p{N}]+(?:['’\-][\p{L}\p{N}]+)*/gu)||[]).length;
  const paras=value.trim()?value.trim().split(/\r?\n\s*\r?\n/).length:0;
  return {han,words,paras};
}
if(typeof document!=='undefined') {
  const input=document.querySelector('#input');
  const update=()=>{
    for(const [key,value] of Object.entries(countText(input.value))) {
      document.querySelector('#'+key).textContent=value.toLocaleString('zh-CN');
    }
  };
  input.addEventListener('input',update);
  update();
}

if(typeof module!=='undefined') module.exports={countText};
