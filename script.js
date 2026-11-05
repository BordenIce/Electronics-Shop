const $ = (id) => document.getElementById(id);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const store = {
  get: (k, d) => { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch (e) { return d; } },
  set: (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
};
let cat = 'laptops', favs = store.get('favs', []), cart = store.get('cart', []);
const IMG = (f) => 'images/' + f;
const state = {};           // selected options / colour / qty per product id
const all = Object.values(CATALOG).flatMap((c) => c.products);
const find = (id) => all.find((p) => p.id === id);
const st = (p) => (state[p.id] ??= { opts: p.options.map((o) => o.values[0]), color: 0, qty: 1 });

function card(p) {
  const s = st(p), col = p.colors[s.color];
  const img = (col && col.img) || p.img;
  return `<article class="card" data-id="${p.id}">
    <button class="fav" aria-label="Add to favourites" aria-pressed="${favs.includes(p.id)}">♥</button>
    <img class="cover" src="${esc(IMG(img))}" alt="${esc(p.name)}" loading="lazy">
    <h3>${esc(p.name)}</h3><p class="price">£${p.price}</p>
    ${p.options.map((o, oi) => `<div class="opt"><p>${esc(o.label)}</p><div class="row">${o.values.map((v) =>
      `<button data-opt="${oi}" class="${s.opts[oi] === v ? 'active' : ''}">${esc(v)}</button>`).join('')}</div></div>`).join('')}
    ${p.colors.length ? `<div class="colors"><p>Colour: ${esc(col.name)}</p><div class="swatches">${p.colors.map((c, ci) =>
      `<button class="swatch ${ci === s.color ? 'active' : ''}" data-col="${ci}" style="background:${esc(c.hex)}" aria-label="${esc(c.name)}"></button>`).join('')}</div></div>` : ''}
    <div class="counter_Price"><button data-q="-1" aria-label="Less">−</button><strong>${s.qty}</strong><button data-q="1" aria-label="More">+</button><span class="sum">£${p.price * s.qty}</span></div>
    <button class="buy" data-buy>Add to basket</button></article>`;
}

function render() {
  const showFavs = cat === 'favourites';
  let list = showFavs ? all.filter((p) => favs.includes(p.id)) : CATALOG[cat].products;
  $('title').textContent = showFavs ? 'Favourites' : CATALOG[cat].title;
  document.title = $('title').textContent + ' – Internet Shop';
  document.querySelectorAll('[data-cat]').forEach((a) => a.classList.toggle('active', a.dataset.cat === cat));
  const brands = [...new Set(list.map((p) => p.brand))].sort();
  const checked = [...document.querySelectorAll('#brands input:checked')].map((i) => i.value).filter((b) => brands.includes(b));
  $('brands').innerHTML = brands.map((b) => `<label><input type="checkbox" value="${esc(b)}" ${checked.includes(b) ? 'checked' : ''}> ${esc(b)}</label>`).join('');
  const q = $('q').value.trim().toLowerCase(), min = +$('minP').value || 0, max = +$('maxP').value || Infinity;
  list = list.filter((p) => p.name.toLowerCase().includes(q) && p.price >= min && p.price <= max && (!checked.length || checked.includes(p.brand)));
  const s = $('sort').value;
  if (s === 'asc') list = [...list].sort((a, b) => a.price - b.price);
  if (s === 'desc') list = [...list].sort((a, b) => b.price - a.price);
  if (s === 'az') list = [...list].sort((a, b) => a.name.localeCompare(b.name));
  $('grid').innerHTML = list.map(card).join('');
  $('empty').hidden = list.length > 0;
  badges();
}
function badges() {
  const n = cart.reduce((t, l) => t + l.qty, 0);
  $('cartCount').textContent = n; $('cartCount').hidden = !n;
  $('favCount').textContent = favs.length; $('favCount').hidden = !favs.length;
}
function renderCart() {
  $('cartList').innerHTML = cart.length ? cart.map((l, i) => { const p = find(l.id); return `<div class="line">
    <img src="${esc(IMG(l.img))}" alt=""><div class="info">${esc(p.name)}<small>${esc(l.desc)}</small>£${p.price} × ${l.qty}</div>
    <button data-d="${i}" aria-label="Decrease">−</button><button data-i="${i}" aria-label="Increase">+</button></div>`; }).join('') : '<p>Your basket is empty.</p>';
  $('cartTotal').textContent = '£' + cart.reduce((t, l) => t + find(l.id).price * l.qty, 0);
  $('checkout').disabled = !cart.length; $('note').textContent = '';
}

$('grid').addEventListener('click', (e) => {
  const el = e.target.closest('.card'); if (!el) return;
  const p = find(el.dataset.id), s = st(p), b = e.target.closest('button'); if (!b) return;
  if (b.classList.contains('fav')) { favs = favs.includes(p.id) ? favs.filter((x) => x !== p.id) : [...favs, p.id]; store.set('favs', favs); return render(); }
  if (b.dataset.opt) s.opts[b.dataset.opt] = b.textContent;
  if (b.dataset.col) s.color = +b.dataset.col;
  if (b.dataset.q) s.qty = Math.min(10, Math.max(1, s.qty + +b.dataset.q));
  if (b.dataset.buy !== undefined) {
    const col = p.colors[s.color], desc = [...s.opts, col?.name].filter(Boolean).join(' · ');
    const line = cart.find((l) => l.id === p.id && l.desc === desc);
    line ? (line.qty += s.qty) : cart.push({ id: p.id, desc, qty: s.qty, img: (col && col.img) || p.img });
    store.set('cart', cart); badges(); b.textContent = 'Added ✓'; setTimeout(() => (b.textContent = 'Add to basket'), 1200); return;
  }
  el.outerHTML = card(p);
});
$('cartList').addEventListener('click', (e) => {
  const b = e.target.closest('button'); if (!b) return;
  if (b.dataset.i) cart[b.dataset.i].qty++;
  if (b.dataset.d && --cart[b.dataset.d].qty <= 0) cart.splice(b.dataset.d, 1);
  store.set('cart', cart); renderCart(); badges();
});
$('cartBtn').addEventListener('click', () => { renderCart(); $('cartDialog').showModal(); });
$('checkout').addEventListener('click', () => { $('note').textContent = 'This is a demo: payments are not connected yet.'; });
$('favBtn').addEventListener('click', () => { location.hash = '#favourites'; });
$('cartDialog').addEventListener('click', (e) => { if (e.target === $('cartDialog')) $('cartDialog').close(); });
['q', 'minP', 'maxP', 'sort'].forEach((id) => $(id).addEventListener('input', render));
$('brands').addEventListener('change', render);
$('reset').addEventListener('click', () => { ['q', 'minP', 'maxP', 'sort'].forEach((id) => ($(id).value = '')); document.querySelectorAll('#brands input').forEach((i) => (i.checked = false)); render(); });
$('burger').addEventListener('click', () => { const o = $('links').classList.toggle('open'); $('burger').setAttribute('aria-expanded', o); });
function route() { const h = location.hash.slice(1); cat = CATALOG[h] || h === 'favourites' ? h : 'laptops'; render(); }
window.addEventListener('hashchange', () => { $('reset').click(); route(); });
$('year').textContent = new Date().getFullYear();
route();
