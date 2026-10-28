/* Game menu shell: a single persistent document keeps music playing between screens. */
(()=>{
 const scenes=[...document.querySelectorAll('main>section[id]')];
 const names={home:'Sảnh lữ khách',story:'Câu chuyện của thế giới',atlas:'Atlas Veyra',people:'Gương mặt Liora',adventure:'Hành trang phiêu lưu',handbook:'Cẩm nang Tân thủ',commands:'Kho lệnh',profile:'Hồ sơ lữ khách'};
 const icons={home:'◇',atlas:'✥',people:'♙',adventure:'⚔',handbook:'▤',commands:'⌘',profile:'✧'};
 const nav=document.querySelector('#navigation');
 nav.querySelectorAll('a').forEach((a,i)=>{const id=a.hash.slice(1);a.innerHTML='<span class="nav-icon" aria-hidden="true">'+icons[id]+'</span><span>'+a.textContent.replace(' ↗','')+'</span><small>'+String(i+1).padStart(2,'0')+'</small>';});
 const header=document.querySelector('header');
 const stamp=document.createElement('div');stamp.className='menu-stamp';stamp.innerHTML='<span>THE THRONE FALL</span><b>CỔNG HÀNH TRÌNH</b><i>Veyra đang chờ bước chân bạn.</i>';header.insertBefore(stamp,nav);
 const top=document.createElement('div');top.className='screen-top';top.innerHTML='<button id="screen-back" aria-label="Trở về sảnh">←</button><span>THE THRONE FALL <b>/</b> <strong id="screen-name">Sảnh lữ khách</strong></span><span class="screen-mark">✦</span>';document.body.insertBefore(top,document.querySelector('main'));
 let active='';
 function show(id){if(!names[id])id='home';active=id;scenes.forEach(s=>{s.hidden=s.id!==id;s.classList.toggle('scene-active',s.id===id);s.setAttribute('aria-hidden',s.id!==id)});document.body.dataset.scene=id;document.querySelector('#screen-name').textContent=names[id];nav.querySelectorAll('a').forEach(a=>{const selected=a.hash==='#'+id;a.classList.toggle('selected',selected);if(selected)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current')});nav.classList.remove('open');document.querySelector('.menu-toggle').setAttribute('aria-expanded','false');document.title=names[id]+' — THE THRONE FALL';document.querySelector('#screen-back').disabled=id==='home';}
 document.querySelector('#screen-back').onclick=()=>{location.hash='home'};
 document.addEventListener('click',e=>{const a=e.target.closest('a[href^="#"]');if(!a)return;let id=a.getAttribute('href').slice(1);if(id==='main')id=active;if(!names[id])return;e.preventDefault();if(location.hash==='#'+id)show(id);else location.hash=id;});
 window.addEventListener('hashchange',()=>show(location.hash.slice(1)));
 show(location.hash.slice(1)||'home');
 // The profile is a five-step character sheet, with the original validated export flow retained.
 const form=document.querySelector('#profile-form');
 const children=[...form.children];
 const locked=children[0],identity=children[1],appearance=children[2],past=children[3],goals=children[4],stats=children[5],prefs=children[6],boundaries=children[7],budget=children[8],submit=children[9];
 const groups=[[locked,identity],[appearance,past,goals],[stats],[prefs,boundaries],[budget,submit]];
 const titles=['Danh tính','Dấu ấn cá nhân','Thuộc tính','Hành trình','Xác nhận'];
 const tabs=document.createElement('div');tabs.className='profile-steps';tabs.setAttribute('aria-label','Các bước tạo hồ sơ');tabs.innerHTML=titles.map((t,i)=>'<button type="button" data-step="'+i+'"><b>'+String(i+1).padStart(2,'0')+'</b><span>'+t+'</span></button>').join('');form.prepend(tabs);
 groups.forEach((nodes,i)=>{const page=document.createElement('div');page.className='profile-page';page.dataset.page=i;const title=document.createElement('h3');title.textContent=titles[i];page.append(title);nodes.filter(Boolean).forEach(n=>page.append(n));form.append(page)});
 const overview=document.createElement('div');overview.id='profile-overview';groups[4][0].before(overview);
 const controls=document.createElement('div');controls.className='step-controls';controls.innerHTML='<button type="button" id="step-prev">← Quay lại</button><span id="step-count"></span><button type="button" id="step-next">Tiếp tục →</button>';form.append(controls);
 let step=0;
 function summary(){const f=new FormData(form);const list=[['Tên hiện dùng',f.get('name')||'Chưa điền'],['Nhóm cư dân',f.get('race')],['Tuổi',f.get('age')],['Giới tính',f.get('gender')||'Để sau'],['Thân phận','Kẻ Bị Gạch Tên · cố định'],['Cấp khởi đầu',f.get('experience')],['Romance',f.get('romance')],['Điểm thuộc tính',document.querySelector('#points-left').textContent]];overview.replaceChildren();for(const [k,v]of list){const row=document.createElement('div'),key=document.createElement('span'),val=document.createElement('b');key.textContent=k;val.textContent=v;row.append(key,val);overview.append(row)}}
 function go(n){step=Math.max(0,Math.min(4,n));form.querySelectorAll('.profile-page').forEach((p,i)=>p.hidden=i!==step);tabs.querySelectorAll('button').forEach((b,i)=>{b.classList.toggle('current',i===step);b.setAttribute('aria-current',i===step?'step':'false')});document.querySelector('#step-prev').disabled=step===0;document.querySelector('#step-next').hidden=step===4;document.querySelector('#step-count').textContent=(step+1)+' / 5';summary();}
 function validCurrent(){const page=form.querySelector('.profile-page:not([hidden])');for(const input of page.querySelectorAll('input,select,textarea'))if(!input.checkValidity()){input.reportValidity();return false}return true}
 tabs.onclick=e=>{const b=e.target.closest('[data-step]');if(!b)return;const next=+b.dataset.step;if(next>step&&!validCurrent())return;go(next)};
 document.querySelector('#step-prev').onclick=()=>go(step-1);document.querySelector('#step-next').onclick=()=>{if(validCurrent())go(step+1)};
 form.addEventListener('invalid',e=>{const p=e.target.closest('.profile-page');if(p)go(+p.dataset.page)},true);
 // Jump to allocation when the final review encounters points still unassigned.
 submit.addEventListener('click',()=>{if(!document.querySelector('#points-left').textContent.startsWith('Còn 0 điểm'))go(2)});
 go(0);
})();
// Atmosphere and exploration, inspired by map-led immersive game websites.
(()=>{
 const hero=document.querySelector('#home');
 const dust=document.createElement('div');dust.className='hero-dust';dust.setAttribute('aria-hidden','true');
 for(let i=0;i<18;i++){const dot=document.createElement('i');dot.style.cssText='--x:'+((i*37+11)%100)+'%;--y:'+((i*23+7)%100)+'%;--delay:'+(-i*1.3)+'s;--duration:'+(9+i%7)+'s;';dust.append(dot)}hero.append(dust);
 const ring=document.createElement('div');ring.className='celestial-ring';ring.setAttribute('aria-hidden','true');ring.innerHTML='<span>✦</span>';hero.append(ring);
 const media=matchMedia('(prefers-reduced-motion: reduce)');
 let reduced=media.matches;try{reduced=reduced||localStorage.getItem('ttf-effects')==='off'}catch{}
 const effects=document.createElement('button');effects.type='button';effects.className='effects-toggle';document.body.append(effects);
 function apply(){document.body.classList.toggle('effects-off',reduced);effects.textContent=reduced?'✧ Hiệu ứng: tắt':'✧ Hiệu ứng: bật';effects.setAttribute('aria-pressed',!reduced);if(reduced){hero.style.setProperty('--mx','0px');hero.style.setProperty('--my','0px')}}
 effects.onclick=()=>{reduced=!reduced;apply();try{localStorage.setItem('ttf-effects',reduced?'off':'on')}catch{}};apply();media.addEventListener('change',e=>{reduced=e.matches;apply()});
 let frame=0,px=0,py=0;
 hero.addEventListener('pointermove',e=>{if(reduced||e.pointerType!=='mouse')return;const r=hero.getBoundingClientRect();px=((e.clientX-r.left)/r.width-.5)*12;py=((e.clientY-r.top)/r.height-.5)*10;if(!frame)frame=requestAnimationFrame(()=>{hero.style.setProperty('--mx',px+'px');hero.style.setProperty('--my',py+'px');frame=0})});
 hero.addEventListener('pointerleave',()=>{hero.style.setProperty('--mx','0px');hero.style.setProperty('--my','0px')});
 // Pin positions follow visible region landmarks on the illustrated Atlas.
 const button=document.querySelector('#map-image-button');const stage=document.createElement('div');stage.className='map-stage';button.before(stage);stage.append(button);
 const pins=document.createElement('div');pins.className='atlas-pins';stage.append(pins);
 const positions=[[16,28],[26,50],[50,20],[80,42],[78,65],[50,76]];
 positions.forEach(([x,y],i)=>{const pin=document.createElement('button');pin.className='atlas-pin';pin.style.left=x+'%';pin.style.top=y+'%';pin.setAttribute('aria-label','Khám phá '+regions[i][0]);pin.innerHTML='<b>✦</b><span>'+regions[i][0]+'</span>';pin.onclick=()=>document.querySelector('[data-region="'+i+'"]').click();pins.append(pin)});
 const img=document.querySelector('#map-image');
 function layoutPins(){const main=img.getAttribute('src')==='assets/art/4.webp';pins.hidden=!main;if(!main||!img.naturalWidth)return;const w=button.clientWidth,h=button.clientHeight,ratio=img.naturalWidth/img.naturalHeight;const iw=Math.min(w,h*ratio),ih=iw/ratio;pins.style.cssText='width:'+iw+'px;height:'+ih+'px;left:'+((w-iw)/2)+'px;top:'+((h-ih)/2)+'px;'}
 new ResizeObserver(layoutPins).observe(button);new MutationObserver(layoutPins).observe(img,{attributes:true,attributeFilter:['src']});img.addEventListener('load',layoutPins);layoutPins();
 const hint=document.createElement('p');hint.className='atlas-hint';hint.textContent='✦ Chạm dấu sáng để khám phá miền đất · ⤢ mở bản đồ lớn';stage.append(hint);
 // Character selection screen, keeping all eight original introductions.
 const grid=document.querySelector('#npc-grid');const panel=document.createElement('div');panel.className='character-stage';grid.before(panel);grid.classList.add('character-roster');
 function selectNPC(i){const n=npcs[i];panel.innerHTML='<div class="character-portrait"><img src="'+art(n[2])+'" alt="'+n[0]+'"><span>LIORA / '+String(i+1).padStart(2,'0')+'</span></div><div class="character-story"><p class="eyebrow">HỒ SƠ CƯ DÂN · '+String(i+1).padStart(2,'0')+' / 08</p><h2>'+n[0]+'</h2><p class="character-role">'+n[1]+'</p><p>'+n[3]+'</p><div class="character-quote"><span>MỘT CÂU MỞ LỜI</span><p>“'+n[4]+'”</p></div><div class="actions"><button class="button primary" id="character-copy">Sao chép câu hỏi</button><button class="button" data-zoom="'+art(n[2])+'">Xem chân dung ⤢</button></div></div>';
 panel.querySelector('#character-copy').onclick=()=>copy(n[4]);grid.querySelectorAll('[data-npc]').forEach(b=>{const selected=+b.dataset.npc===i;b.classList.toggle('chosen',selected);b.setAttribute('aria-pressed',selected)})}
 grid.querySelectorAll('[data-npc]').forEach(b=>b.onclick=()=>selectNPC(+b.dataset.npc));selectNPC(0);
})();
