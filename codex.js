(()=>{
 const labels={professions:'Nghề nghiệp',monsters:'Sinh vật',mounts:'Thú cưỡi',statuses:'Độc và bệnh',regions:'Sáu miền'};
 const root=document.querySelector('#codex');let category='professions',selected='',query='';
 const tabs=root.querySelector('.codex-tabs'),list=root.querySelector('.codex-list'),detail=root.querySelector('.codex-detail');
 function normalized(s){return s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/đ/g,'d').toLowerCase()}
 function render(){
  tabs.replaceChildren();Object.entries(labels).forEach(([id,label])=>{const b=document.createElement('button');b.type='button';b.textContent=label;b.setAttribute('aria-pressed',id===category);b.onclick=()=>{category=id;selected='';query='';root.querySelector('input').value='';render();tabs.querySelector('[aria-pressed=true]').focus()};tabs.append(b)});
  const items=window.CODEX[category].filter(x=>normalized(x.id+' '+x.title+' '+x.region).includes(normalized(query)));
  if(!items.some(x=>x.id===selected))selected=items[0]?.id||'';
  list.replaceChildren();root.querySelector('.codex-count').textContent=items.length+' mục phù hợp';
  items.forEach(x=>{const b=document.createElement('button');b.type='button';b.textContent=x.id+' · '+x.title+' — '+x.region;b.setAttribute('aria-pressed',selected===x.id);b.onclick=()=>{selected=x.id;render();detail.focus({preventScroll:true})};list.append(b)});
  const item=items.find(x=>x.id===selected);detail.replaceChildren();const title=document.createElement('h2');title.textContent=item?.title||'Không tìm thấy mục phù hợp';detail.append(title);
  if(item){const body=document.createElement('div');body.innerHTML=item.html;detail.append(body)}else{const t=document.createElement('p');t.textContent='Thử tên nghề, loài, mã hoặc tên miền khác.';detail.append(t)}detail.scrollTop=0;
 }
 root.querySelector('input').addEventListener('input',e=>{query=e.target.value;render()});render();
})();
