const toast = document.getElementById('toast');
const modal = document.getElementById('modalBackdrop');
const modalTitle = document.getElementById('modalTitle');
const modalContent = document.getElementById('modalContent');
function notify(message) {
  toast.textContent = message; toast.classList.add('show');
  clearTimeout(window.toastTimer); window.toastTimer = setTimeout(()=>toast.classList.remove('show'),2600);
}
function openModal(title, body) {
  modalTitle.textContent = title; modalContent.innerHTML = body; modal.hidden = false;
}
document.getElementById('modalClose').addEventListener('click',()=>modal.hidden=true);
modal.addEventListener('click',e=>{if(e.target===modal)modal.hidden=true;});
document.addEventListener('keydown',e=>{if(e.key==='Escape')modal.hidden=true;});
document.getElementById('menuToggle').addEventListener('click',()=>document.getElementById('mainNav').classList.toggle('menu-open'));
document.querySelectorAll('#mainNav a').forEach(a=>a.addEventListener('click',()=>document.getElementById('mainNav').classList.remove('menu-open')));
document.getElementById('accountBtn').addEventListener('click',()=>openModal('Welcome back',`<form class="modal-form" id="accountForm"><label>Email address<input type="email" placeholder="you@example.com" required></label><label>Password<input type="password" placeholder="Enter password" required></label><button class="primary-btn" type="submit">Continue</button><small class="muted">Demo interface only — no account is created.</small></form>`));
document.getElementById('primaryAction').addEventListener('click',()=>openModal('Book an appointment',`<form class="modal-form" id="actionForm"><label>Your name<input required placeholder="Full name"></label><label>Email or phone<input required placeholder="Contact details"></label><label>Preferred date<input type="date" required></label><button class="primary-btn" type="submit">Submit request</button><small class="muted">This is a front-end demonstration. No real booking or payment is processed.</small></form>`));
document.addEventListener('submit',e=>{if(e.target.matches('.modal-form')){e.preventDefault();modal.hidden=true;notify('Thank you! Your demo request has been recorded on this page.');}});
const searchInput=document.getElementById('searchInput');
function filterCards() {
 const term=searchInput.value.toLowerCase().trim(); let count=0;
 document.querySelectorAll('.product-card').forEach(card=>{const match=card.textContent.toLowerCase().includes(term);card.style.display=match?'':'none';if(match)count++;});
 document.getElementById('emptyState').hidden=count!==0;
}
document.getElementById('searchBtn').addEventListener('click',filterCards);
searchInput.addEventListener('input',filterCards);
document.querySelectorAll('.filter-btn').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));btn.classList.add('active');if(btn.dataset.filter==='All'){searchInput.value='';filterCards();}else{searchInput.value=btn.dataset.filter==='Featured'?'':btn.dataset.filter;filterCards();}}));
document.querySelectorAll('.add-btn').forEach(btn=>btn.addEventListener('click',()=>{
 const name=btn.dataset.name;
 openModal('Appointment request',`<p class="muted">You selected <strong>${name}</strong>.</p><form class="modal-form" id="selectionForm"><label>Your name<input required placeholder="Full name"></label><label>Contact details<input required placeholder="Email or phone"></label><button class="primary-btn" type="submit">Confirm demo request</button><small class="muted">No real transaction will take place.</small></form>`);
}));

