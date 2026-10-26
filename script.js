// ---- Store settings (Firebase nahi hai, yahin se badlo) ----
// UPI payment chalu karne ke liye apni UPI ID daalo, jaise 'name@upi'. Khaali chhodoge to Prepaid band rahega.
const SETTINGS = { cod: true, prepaid: true, open: true, upi: '', upiName: '', maintMsg: '' };

const PRODUCTS = [
    { id: 1, best: true, ship: 0, returns: 7, exch: 7, name: 'Floral Anarkali Kurti Set', cat: 'Women', art: 'kurti', img: 'images/kurti-1.jpg', h: 335, price: 1299, mrp: 2499, rating: 4.5, count: 1842,
      desc: 'A flowy cotton Anarkali kurti with a soft floral print, paired with matching palazzo pants. Easy to wear from morning to evening.',
      pts: ['Pure cotton, soft and breathable', 'Set of kurti and palazzo pants', 'Available in S to XXL', 'Machine washable, colours stay fast'] },
    { id: 2, best: true, ship: 0, returns: 7, exch: 7, name: 'Banarasi Silk Saree', cat: 'Women', art: 'saree', img: 'images/saree-2.jpg', h: 348, price: 2999, mrp: 5499, rating: 4.6, count: 964,
      desc: 'A rich Banarasi-style silk saree with a woven zari border and a matching blouse piece. Made for weddings and festive evenings.',
      pts: ['Soft silk blend with zari border', 'Blouse piece included', 'Saree length 5.5 m plus 0.8 m blouse', 'Dry clean recommended'] },
    { id: 3, ship: 0, returns: 7, exch: 7, name: 'Wrap Midi Dress', cat: 'Women', art: 'dress', img: 'images/dress-3.jpg', h: 300, price: 1599, mrp: 2799, rating: 4.3, count: 1220,
      desc: 'A graceful wrap-style midi dress with a flattering waist tie and a flowing skirt. Works for brunch, parties and everything in between.',
      pts: ['Light georgette with soft lining', 'Adjustable waist tie', 'Available in XS to XL', 'Gentle hand wash'] },
    { id: 4, ship: 0, returns: 7, exch: 7, name: 'High-Waist Wide Leg Jeans', cat: 'Women', art: 'jeans', img: 'images/jeans-4.jpg', h: 215, price: 1499, mrp: 2599, rating: 4.4, count: 2105,
      desc: 'Comfortable high-waist jeans with a relaxed wide leg. A stretch fabric that holds its shape all day.',
      pts: ['Stretch denim, high waist', 'Relaxed wide leg fit', 'Waist sizes 26 to 36', 'Machine wash cold'] },
    { id: 5, best: true, ship: 0, returns: 7, exch: 7, name: 'Slim Fit Oxford Shirt', cat: 'Men', art: 'shirt', img: 'images/shirt-5.jpg', h: 205, price: 999, mrp: 1999, rating: 4.4, count: 2310,
      desc: 'A crisp cotton Oxford shirt in a slim fit. Looks sharp at work and just as good with jeans on the weekend.',
      pts: ['100% cotton Oxford weave', 'Slim fit with button-down collar', 'Sizes S to XXL', 'Easy iron finish'] },
    { id: 6, best: true, ship: 0, returns: 7, exch: 7, name: 'Classic Straight Fit Jeans', cat: 'Men', art: 'jeans', img: 'images/jeans-6.jpg', h: 222, price: 1399, mrp: 2499, rating: 4.3, count: 3105,
      desc: 'Everyday straight fit jeans in a durable mid-wash denim, with a little stretch for all-day comfort.',
      pts: ['Durable stretch denim', 'Straight fit, mid rise', 'Waist sizes 28 to 40', 'Machine wash cold'] },
    { id: 7, ship: 0, returns: 7, exch: 7, name: 'Cotton Polo T-Shirt', cat: 'Men', art: 'tshirt', img: 'images/tshirt-7.jpg', h: 160, price: 599, mrp: 1099, rating: 4.2, count: 4120,
      desc: 'A soft pique cotton polo with a neat collar and ribbed sleeves. Smart enough for the office, easy enough for the weekend.',
      pts: ['Soft pique cotton', 'Ribbed collar and cuffs', 'Regular fit, sizes S to XXL', 'Colours stay fast after washing'] },
    { id: 8, ship: 0, returns: 7, exch: 7, name: 'Bomber Jacket', cat: 'Men', art: 'jacket', img: 'images/jacket-8.jpg', h: 140, price: 1999, mrp: 3499, rating: 4.5, count: 1088,
      desc: 'A lightweight bomber jacket with ribbed cuffs and a zip front. Layer it over a tee on cool evenings.',
      pts: ['Smooth polyester shell with soft lining', 'Ribbed collar, cuffs and hem', 'Two side pockets', 'Sizes M to XXL'] },
    { id: 9, ship: 0, returns: 7, exch: 7, name: 'Cotton Kurta Pyjama Set', cat: 'Men', art: 'kurta', img: 'images/kurta-9.jpg', h: 30, price: 1299, mrp: 2299, rating: 4.4, count: 870,
      desc: 'A classic cotton kurta with matching pyjama in a soft, breathable weave. Ready for festivals, family functions and Fridays.',
      pts: ['Breathable cotton fabric', 'Mandarin collar, straight hem', 'Set of kurta and pyjama', 'Sizes S to XXL'] },
    { id: 10, best: true, ship: 0, returns: 7, exch: 7, name: 'Girls Party Frock', cat: 'Kids', art: 'frock', img: 'images/frock-10.jpg', h: 322, price: 899, mrp: 1699, rating: 4.5, count: 640,
      desc: 'A twirly party frock with a satin bow and layered net skirt. Soft inner lining keeps little ones comfortable.',
      pts: ['Layered net skirt with soft lining', 'Satin bow at the waist', 'Ages 2 to 10 years', 'Gentle hand wash'] },
    { id: 11, ship: 0, returns: 7, exch: 7, name: 'Boys Cotton Hoodie', cat: 'Kids', art: 'hoodie', img: 'images/hoodie-11.jpg', h: 28, price: 699, mrp: 1299, rating: 4.3, count: 512,
      desc: 'A cosy cotton-blend hoodie with a kangaroo pocket and a soft fleece inside. Made for school mornings and playtime.',
      pts: ['Soft fleece-lined cotton blend', 'Front kangaroo pocket', 'Ages 3 to 12 years', 'Machine wash cold'] },
    { id: 12, ship: 0, returns: 7, exch: 7, name: 'Kids Printed T-Shirt, Pack of 2', cat: 'Kids', art: 'tshirt', img: 'images/tshirt-12.jpg', h: 190, price: 499, mrp: 899, rating: 4.2, count: 733,
      desc: 'Two fun printed tees in soft combed cotton. Tagless neck so they stay comfortable all day.',
      pts: ['Pack of 2 printed T-shirts', 'Soft combed cotton', 'Ages 2 to 12 years', 'Colours stay fast'] }
  ];

const ART = {
    shirt: `<path class="a" d="M70 34L28 58l14 36 20-10v86h76V84l20 10 14-36-42-24q-30 20-60 0z"/><path class="b" d="M70 34l20 8 10 20-22 6zM130 34l-20 8-10 20 22 6z"/><path class="sk" stroke-width="2" d="M100 62v106"/><circle class="k" cx="100" cy="82" r="2.6"/><circle class="k" cx="100" cy="106" r="2.6"/><circle class="k" cx="100" cy="130" r="2.6"/><circle class="k" cx="100" cy="154" r="2.6"/><rect class="c" x="110" y="96" width="18" height="20" rx="3"/>`,
    tshirt: `<path class="a" d="M72 36L30 60l14 34 18-8v86h76V86l18 8 14-34-42-24q-28 16-56 0z"/><path class="sb" stroke-width="7" stroke-linecap="round" d="M72 36q28 18 56 0"/><circle class="w" opacity=".85" cx="100" cy="110" r="14"/><path class="c" d="M94 110l6-8 6 8-6 8z"/>`,
    jeans: `<path class="a" d="M62 28h76l10 150h-36l-12-92-12 92H52z"/><rect class="b" x="62" y="28" width="76" height="14" rx="3"/><path class="sk" stroke-width="2.5" stroke-linecap="round" d="M100 42v44M70 52q10 14 22 2M130 52q-10 14-22 2"/><circle class="k" cx="100" cy="35" r="3"/>`,
    kurti: `<path class="a" d="M70 26L40 48l8 30 16-6-12 106h96L136 72l16 6 8-30-30-22q-30 26-60 0z"/><path class="sb" stroke-width="6" stroke-linecap="round" d="M70 26q30 26 60 0"/><path class="b" d="M52 164h96l2 14H50z"/><path class="sw" stroke-width="2.5" stroke-linecap="round" d="M100 54v50"/><circle class="w" cx="100" cy="112" r="4"/>`,
    kurta: `<path class="a" d="M72 28L38 48l8 36 18-8-4 96h80l-4-96 18 8 8-36-34-20q-28 18-56 0z"/><path class="b" d="M72 28q28 18 56 0l-4 10q-24 12-48 0z"/><path class="sk" stroke-width="2" d="M100 44v70"/><circle class="k" cx="100" cy="60" r="2.6"/><circle class="k" cx="100" cy="82" r="2.6"/><circle class="k" cx="100" cy="104" r="2.6"/><rect class="b" x="60" y="160" width="80" height="12"/>`,
    saree: `<path class="a" d="M58 26c20 8 56 8 84 0l16 152H42z"/><path class="b" d="M58 26c20 8 56 8 84 0l2 14c-28 8-64 8-88 0z"/><path class="sb" opacity=".5" stroke-width="3" d="M70 58l-8 120M90 62l-4 116M110 62l4 116M130 58l8 120"/><rect class="b" x="42" y="164" width="116" height="14"/>`,
    dress: `<path class="a" d="M80 22L72 76 36 178h128l-36-102-8-54-20 18z"/><path class="b" d="M72 76h56l3 9H69z"/><path class="sw" stroke-width="3" stroke-linecap="round" d="M80 22q20 22 40 0"/><path class="sk" opacity=".25" stroke-width="3" d="M90 90l-14 88M110 90l14 88M100 92v86"/>`,
    frock: `<path class="a" d="M84 28l-4 36-46 114h132l-46-114-4-36-16 12z"/><path class="b" opacity=".7" d="M34 150q33 22 66 8t66-8v28H34z"/><circle class="b" cx="76" cy="36" r="13"/><circle class="b" cx="124" cy="36" r="13"/><rect class="c" x="76" y="62" width="48" height="8" rx="3"/><path class="w" d="M100 64l-14-9v18zM100 64l14-9v18z"/>`,
    hoodie: `<path class="a" d="M64 46L24 68l10 82 24-4v24h84v-24l24 4 10-82-40-22z"/><path class="b" d="M68 46q32 40 64 0-6-26-32-30-26 4-32 30z"/><path class="sw" stroke-width="3" stroke-linecap="round" d="M92 74v28M108 74v28"/><rect class="c" x="72" y="126" width="56" height="30" rx="10"/><rect class="b" x="58" y="164" width="84" height="8" rx="3"/>`,
    jacket: `<path class="a" d="M70 34L28 56l-6 96 22 4 8-60v76h96v-76l8 60 22-4-6-96-42-22q-30 12-60 0z"/><path class="b" d="M70 34q30 12 60 0l-3 14q-27 10-54 0z"/><rect class="b" x="52" y="158" width="96" height="12" rx="3"/><path class="sk" stroke-width="2.5" d="M100 48v110"/><rect class="c" x="64" y="104" width="22" height="3" rx="1.5"/><rect class="c" x="114" y="104" width="22" height="3" rx="1.5"/>`
  };

(() => {
  'use strict';
  const P = PRODUCTS;
  let BRAND = 'Thakur Premium Collection';
  let TAGLINE = 'Premium fashion for every occasion.';
  let LOGO = 'data:image/jpeg;base64,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';
  const logoHTML = () => `<span class="lg" aria-hidden="true">${esc(BRAND[0])}<img src="${LOGO}" alt="" onload="this.parentNode.classList.add('has')" onerror="this.remove()"></span>`;

  const FBS = SETTINGS;
  const prepaidOn = () => validUpi(FBS.upi) && FBS.prepaid !== false;
  const SOLD = {};
  const STATES = ['Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Andaman and Nicobar Islands', 'Chandigarh', 'Dadra and Nagar Haveli and Daman and Diu', 'Delhi', 'Jammu and Kashmir', 'Ladakh', 'Lakshadweep', 'Puducherry'];
  const sizesOf = p => { const z = p && p.sizes; const a = Array.isArray(z) ? z : (z && typeof z === 'object' ? Object.values(z) : []); return a.filter(x => x && x.n); };
  const hasSizes = p => sizesOf(p).length > 0;
  const leftSize = (p, sz) => { const z = sizesOf(p).find(x => x.n === sz); if (!z) return 0; return z.q == null ? Infinity : Math.max(0, z.q - (SOLD[p.id + '_' + sz] || 0)); };
  const leftOf = p => hasSizes(p) ? sizesOf(p).reduce((a, z) => a + leftSize(p, z.n), 0) : (p.qty == null ? Infinity : Math.max(0, p.qty - (SOLD[p.id] || 0)));
  const maxQ = p => Math.min(10, leftOf(p));
  const limLeft = (p, sz) => sz ? leftSize(p, sz) : leftOf(p);
  const limOf = (p, sz) => Math.min(10, limLeft(p, sz));
  const lkey = (id, sz) => sz ? id + ':' + sz : String(id);
  const lparse = k => { k = String(k); const i = k.indexOf(':'); return i < 0 ? { id: Number(k), size: '' } : { id: Number(k.slice(0, i)), size: k.slice(i + 1) }; };
  const maxQK = k => { const x = lparse(k), p = byId(x.id); return p ? limOf(p, x.size) : 10; };

  const art = (p, label, eager) => `<svg viewBox="0 0 200 200" ${label ? `role="img" aria-label="${esc(p.name)}"` : 'aria-hidden="true"'}><circle class="c" cx="100" cy="106" r="82" opacity=".5"/>${ART[p.art] || ''}</svg><img class="shot" src="${esc(p.img || '')}" alt="${label ? esc(p.name) : ''}" loading="${eager ? 'eager' : 'lazy'}" onerror="this.remove()">`;

  const CATS = ['All'];
  const setCats = () => { CATS.length = 0; CATS.push('All'); [...P].sort((a, b) => a.id - b.id).forEach(x => { if (x.cat && !CATS.includes(x.cat)) CATS.push(x.cat); }); };
  setCats();

  const $ = s => document.querySelector(s);
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const INR = n => '₹' + n.toLocaleString('en-IN');
  const num = n => n.toLocaleString('en-IN');
  const byId = id => P.find(p => p.id === parseInt(id, 10));
  const off = p => Math.round((p.mrp - p.price) / p.mrp * 100);
  const mask = ph => `+91 ${ph.slice(0, 2)}••••••${ph.slice(-2)}`;
  const main = $('#main'), drawer = $('#cart'), scrim = $('#scrim'), modal = $('#modal'), sheet = $('#sheet'), toastEl = $('#toast');

  const S = { view: 'home', sec: null, stack: [], pend: null, users: {}, lang: 'en', gi: 0, id: null, q: '', cat: 'All', dq: 1, cart: {}, user: null };
  const KEY = 'Smart Products Zone.v1';
  try {
    const d = JSON.parse(localStorage.getItem(KEY) || '{}');
    if (d.cart) for (const [k, v] of Object.entries(d.cart)) if (byId(k) && v > 0) S.cart[k] = Math.min(10, v | 0);
    if (typeof d.user === 'string' && /^\d{10}$/.test(d.user)) S.user = d.user;
    if (d.lang === 'hi') S.lang = 'hi';
    if (d.users && typeof d.users === 'object') for (const [ph, u] of Object.entries(d.users)) if (/^\d{10}$/.test(ph) && u && typeof u === 'object') {
      const pr = u.profile, ok = pr && ['name', 'phone', 'addr', 'pin'].every(k => typeof pr[k] === 'string');
      S.users[ph] = { profile: ok ? { name: pr.name, phone: pr.phone, addr: pr.addr, pin: pr.pin, lm: typeof pr.lm === 'string' ? pr.lm : '', state: typeof pr.state === 'string' ? pr.state : '' } : null,
        addrs: (Array.isArray(u.addrs) ? u.addrs : []).filter(a => a && typeof a.id === 'string' && ['name', 'phone', 'addr', 'pin'].every(k => typeof a[k] === 'string')).map(a => ({ id: a.id, name: a.name, phone: a.phone, addr: a.addr, pin: a.pin, lm: typeof a.lm === 'string' ? a.lm : '', state: typeof a.state === 'string' ? a.state : '', area: typeof a.area === 'string' ? a.area : '', city: typeof a.city === 'string' ? a.city : '' })),
        fav: (Array.isArray(u.fav) ? u.fav : []).filter(i => byId(i)).map(Number),
        orders: (Array.isArray(u.orders) ? u.orders : []).filter(o => o && typeof o.id === 'string' && Array.isArray(o.lines)).slice(0, 50) };
    }
  } catch (e) {}
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify({ cart: S.cart, user: S.user, users: S.users, lang: S.lang })); } catch (e) {} };

  const qtyOf = id => S.cart[id] || 0;
  const cartCount = () => Object.values(S.cart).reduce((a, b) => a + b, 0);
  const subtotal = () => Object.entries(S.cart).reduce((a, [id, q]) => a + byId(id).price * q, 0);
  const savings = () => Object.entries(S.cart).reduce((a, [id, q]) => a + (byId(id).mrp - byId(id).price) * q, 0);
  const SHIP_PER_QTY = false;
  const hasShip = p => typeof p.ship === 'number' && p.ship >= 0;
  const shipOf = (p, q) => hasShip(p) ? p.ship * (SHIP_PER_QTY ? q : 1) : 0;
  const shipFor = lines => { const m = {}; lines.forEach(l => { m[l.id] = (m[l.id] || 0) + l.qty; }); return Object.entries(m).reduce((a, [id, q]) => a + shipOf(byId(id), q), 0); };
  const cartShip = () => shipFor(Object.entries(S.cart).map(([k, q]) => ({ id: lparse(k).id, qty: q })));
  const cartHasShip = () => Object.keys(S.cart).some(id => hasShip(byId(id)));
  const jumpTop = () => {
    const r = document.documentElement, prev = r.style.scrollBehavior;
    r.style.scrollBehavior = 'auto';
    try { window.scrollTo({ top: 0, left: 0, behavior: 'instant' }); } catch (e) { window.scrollTo(0, 0); }
    document.body.scrollTop = 0; r.scrollTop = 0;
    r.style.scrollBehavior = prev;
  };
  let toastT;
  const toast = msg => { toastEl.textContent = msg; toastEl.classList.add('on'); clearTimeout(toastT); toastT = setTimeout(() => toastEl.classList.remove('on'), 2200); };

  const B0 = { n: BRAND, t: TAGLINE, l: LOGO };
  (function splash() {
    $('#splashWm').innerHTML = BRAND.split(' ').map((w, i) => `<span class="w"><span style="--i:${i}">${esc(w)}</span></span>`).join('');
    $('#splashWm').setAttribute('aria-label', BRAND);
    const sl = document.querySelector('.sp-logo img'); if (sl) sl.src = LOGO;
    $('#splashTag').textContent = TAGLINE;
    const el = $('#splash');
    el.addEventListener('click', () => el.remove());
    setTimeout(() => el.remove(), 4100);
  })();
  document.title = BRAND;
  $('#brandBtn').innerHTML = `${logoHTML()}<span class="bn">${esc(BRAND)}</span>`;
  $('#footBrand').innerHTML = `${logoHTML()}<span class="bn">${esc(BRAND)}</span>`;
  $('#footTag').textContent = TAGLINE;

  const card = p => `
    <div class="card" role="button" tabindex="0" data-act="open" data-id="${p.id}" aria-label="${esc(p.name)}, ${INR(p.price)}">
      <div class="ph" style="--h:${p.h}">${art(p)}<span class="off">${off(p)}% off</span>${heart(p.id)}<span class="rtg"><b>${p.rating.toFixed(1)}</b> ★<i>${num(p.count)}</i></span>${leftOf(p) === 0 ? '<span class="oos">Out of stock</span>' : ''}</div>
      <div class="cb"><div class="pr"><b>${INR(p.price)}</b><s>${INR(p.mrp)}</s></div></div>
    </div>`;

  const ICO = d => `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
  const shortName = (s, n = 26) => { s = String(s).trim(); if (s.length <= n) return s; const cut = s.slice(0, n), sp = cut.lastIndexOf(' '); return (sp > 10 ? cut.slice(0, sp) : cut).trimEnd() + '…'; };
  const bestList = () => P.filter(p => p.best);
  const bslide = p => `<button class="bs" style="--h:${p.h}" data-act="open" data-id="${p.id}" aria-label="${esc(p.name)}, ${INR(p.price)}">
      <span class="bt"><span class="bl">Bestseller</span><span class="bh">${esc(shortName(p.name))}</span><span class="bp"><b>${INR(p.price)}</b><s>${INR(p.mrp)}</s><em>${off(p)}% off</em></span><span class="bcta">Shop now</span></span>
      <span class="bi"><span class="ph">${art(p, false, true)}</span></span>
    </button>`;
  let best = null, bestTimer;
  function initBest() {
    clearInterval(bestTimer); best = null;
    const b = document.querySelector('.best'); if (!b) return;
    const trk = b.querySelector('.btrk'), dd = b.querySelector('.bdots');
    const n = trk.children.length; if (!n) return;
    let idx = 0, hold = 0, down = false;
    const mark = () => {
      idx = Math.min(n - 1, Math.max(0, Math.round(trk.scrollLeft / (trk.clientWidth || 1))));
      if (!dd) return;
      dd.querySelectorAll('button').forEach((x, k) => x.setAttribute('aria-current', String(k === idx)));
      const c = dd.querySelector('.bcnt'); if (c) c.textContent = (idx + 1) + ' / ' + n;
    };
    const to = (i, smooth) => { i = ((i % n) + n) % n; trk.scrollTo({ left: i * trk.clientWidth, behavior: smooth ? 'smooth' : 'auto' }); };
    const poke = () => { hold = Date.now() + 4000; };
    best = { go: i => { poke(); to(i, true); }, step: d => { poke(); const j = idx + d; to(j, j >= 0 && j < n); } };
    trk.addEventListener('scroll', mark, { passive: true });
    b.addEventListener('pointerdown', () => { down = true; });
    ['pointerup', 'pointercancel', 'pointerleave'].forEach(ev => b.addEventListener(ev, () => { if (down) { down = false; poke(); } }));
    b.addEventListener('wheel', poke, { passive: true });
    b.addEventListener('keydown', poke);
    let sx = null, dragged = false;
    trk.addEventListener('pointerdown', e => { if (e.pointerType === 'mouse') { sx = e.clientX; dragged = false; } });
    trk.addEventListener('pointerup', e => { if (sx === null) return; const dx = e.clientX - sx; sx = null; if (Math.abs(dx) > 40) { dragged = true; best.step(dx < 0 ? 1 : -1); } });
    trk.addEventListener('click', e => { if (dragged) { e.preventDefault(); e.stopPropagation(); dragged = false; } }, true);
    mark();
    bestTimer = setInterval(() => {
      if (!document.body.contains(trk)) { clearInterval(bestTimer); return; }
      if (n < 2 || document.hidden || down || Date.now() < hold) return;
      to(idx + 1, idx + 1 < n);
    }, 4000);
  }

  function heroHTML() {
    const L = bestList();
    const banner = L.length ? `
      <section class="hb" aria-label="Bestsellers">
        <div class="best" role="region" aria-roledescription="carousel" aria-label="Bestsellers">
          <div class="btrk" tabindex="0">${L.map(bslide).join('')}</div>
          ${L.length > 1 ? `<div class="bdots">${L.length <= 8 ? L.map((_, k) => `<button data-act="best-go" data-i="${k}" aria-label="Product ${k + 1}"></button>`).join('') : '<span class="bcnt"></span>'}</div>` : ''}
        </div>
      </section>` : '';
    return `<div class="trust-row">
        <div>${ICO('<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>')}<span><b>Secure checkout</b>Safe and private</span></div>
        <div>${ICO('<circle cx="12" cy="8" r="6"/><path d="M15.5 13.5 17 22l-5-3-5 3 1.5-8.5"/>')}<span><b>Genuine products</b>Quality checked</span></div>
      </div>${banner}`;
  }

  function renderHome() {
    const q = S.q.trim().toLowerCase();
    const list = P.filter(p => (S.cat === 'All' || p.cat === S.cat) && (!q || (p.name + ' ' + p.cat + ' ' + p.desc).toLowerCase().includes(q)));
    const hero = !S.q.trim() ? heroHTML() : '';
    const title = S.q.trim() ? `Results for “${esc(S.q.trim())}”` : (S.cat === 'All' ? 'All products' : S.cat);
    main.innerHTML = `
      ${hero}<div class="wrap" id="collection">
        <nav class="chips" aria-label="Categories">${CATS.map(c => `<button class="chip" data-act="cat" data-cat="${c}" aria-pressed="${c === S.cat}">${c}</button>`).join('')}</nav>
        <div class="head"><h2>${title}</h2><span>${list.length} ${list.length === 1 ? 'product' : 'products'}</span></div>
        ${list.length ? `<div class="grid">${list.map(card).join('')}</div>` : `
          <div class="empty"><h3>Nothing matched your search</h3><p>Try a shorter word like “shirt” or “kurti”, or browse all products.</p><button class="btn" data-act="home">Show all products</button></div>`}
      </div>`;
    initBest();
  }

  const polHTML = p => {
    const c = [];
    if (hasShip(p)) c.push([p.ship > 0 ? 'Delivery ' + INR(p.ship) + (SHIP_PER_QTY ? ' per item' : '') : 'Free delivery', 0]);
    if (p.replace > 0) c.push([p.replace + '-day replacement', 0]);
    else if (p.exch > 0 && !(p.returns > 0)) c.push([p.exch + '-day exchange', 0]);
    else if (typeof p.returns === 'number') c.push([p.returns > 0 ? p.returns + '-day returns' : 'No returns', p.returns > 0 ? 0 : 1]);
    return c.length ? `<div class="pol">${c.map(([t, no]) => `<span${no ? ' class="no"' : ''}>${esc(t)}</span>`).join('')}</div>` : '';
  };

  const curKey = () => { const p = byId(S.id); return p && hasSizes(p) ? (S.sz ? lkey(p.id, S.sz) : '') : String(S.id); };
  const curLim = () => { const p = byId(S.id); if (!p) return 1; return hasSizes(p) ? (S.sz ? Math.min(10, leftSize(p, S.sz)) : 10) : maxQ(p); };
  const sizeHTML = p => {
    if (!hasSizes(p)) return '';
    const warn = S.szWarn && !S.sz, l = S.sz ? leftSize(p, S.sz) : null;
    return `<div class="szb${warn ? ' warn' : ''}"><div class="szh"><b>Select size</b>${warn ? '<em>Please choose a size</em>' : ''}</div>
      <div class="szs" role="group" aria-label="Size">${sizesOf(p).map(z => { const out = leftSize(p, z.n) === 0, on = S.sz === z.n;
        return `<button class="sz${on ? ' on' : ''}${out ? ' out' : ''}" data-act="size" data-s="${esc(z.n)}" aria-pressed="${on}"${out ? ` disabled aria-label="Size ${esc(z.n)}, out of stock"` : ''}><span>${esc(z.n)}</span>${out ? '<small>Out of stock</small>' : ''}</button>`; }).join('')}</div>
      ${l !== null && l !== Infinity && l > 0 && l <= 5 ? `<p class="szn">Only ${l} left in size ${esc(S.sz)}</p>` : ''}</div>`;
  };
  function renderDetail() {
    const p = byId(S.id); if (!p) return renderHome();
    const sz = hasSizes(p), inCart = (sz && !S.sz) ? 0 : qtyOf(curKey()), q = inCart || S.dq, lim = curLim();
    main.innerHTML = `
      <div class="wrap">
        <div class="dback"><button class="pg-back" data-act="back" aria-label="Back">${ARROW}</button></div>
        <div class="dt">
          ${galleryHTML(p)}
          <div class="info">
            <div class="crow"><p class="crumb">${esc(p.cat)}</p><button class="fv" data-act="fav" data-id="${p.id}" aria-pressed="${isFav(p.id)}">${HEART}<span>${isFav(p.id) ? 'Saved' : 'Save'}</span></button></div>
            <h1>${esc(p.name)}</h1>
            <div class="rt big"><span class="pill">${p.rating.toFixed(1)} ★</span><span>${num(p.count)} ratings</span></div>
            <div class="price"><b>${INR(p.price)}</b><s>${INR(p.mrp)}</s><em>${off(p)}% off</em></div>
            ${polHTML(p)}
            ${sizeHTML(p)}
            ${leftOf(p) === 0 ? '' : `<div class="qrow"><span>Quantity</span><div class="step" role="group" aria-label="Quantity">
              <button data-act="dq-" aria-label="Decrease quantity" ${q <= 1 && !inCart ? 'disabled' : ''}>−</button>
              <output aria-live="polite">${q}</output>
              <button data-act="dq+" aria-label="Increase quantity" ${q >= Math.max(1, lim) ? 'disabled' : ''}>+</button>
            </div></div>`}
            <p class="desc${S.dx ? '' : ' clamp'}" id="descTx">${esc(p.desc)}</p>
            <button class="lnk dmore" id="descBtn" data-act="desc-more" hidden>${S.dx ? 'See less' : 'See more'}</button>
            <ul class="pts">${p.pts.map(t => `<li>${esc(t)}</li>`).join('')}</ul>
            <div class="buy">
              ${leftOf(p) === 0 ? '<button class="btn" disabled>Out of stock</button>' : `<button class="btn${inCart ? ' added' : ''}" data-act="add">${inCart ? 'Added ✓' : 'Add to cart'}</button>
              <button class="btn buy" data-act="buy-now">Buy now · ${INR(p.price * q)}</button>`}
            </div>
          </div>
        </div>
        ${relatedHTML(p)}
      </div>`;
    initGallery(); initDesc();
  }

  function initDesc() {
    const t = document.getElementById('descTx'), b = document.getElementById('descBtn'); if (!t || !b) return;
    const chk = () => { b.hidden = !S.dx && t.scrollHeight <= t.clientHeight + 1 ? true : false; };
    chk(); if (document.fonts && document.fonts.ready) document.fonts.ready.then(chk);
    addEventListener('resize', chk, { once: true });
  }

  const artSvg = p => `<svg viewBox="0 0 200 200" role="img" aria-label="${esc(p.name)}"><circle class="c" cx="100" cy="106" r="82" opacity=".5"/>${ART[p.art] || ''}</svg>`;
  const galleryHTML = p => {
    const list = p.imgs && p.imgs.length ? p.imgs : [p.img, ...[2, 3, 4, 5].map(n => p.img.replace(/(\.\w+)$/, `-${n}$1`))];
    return `<div class="gal ph" style="--h:${p.h}">
      <div class="trk" tabindex="0" role="group" aria-label="${esc(p.name)} photos">
        <div class="sl artsl" hidden>${artSvg(p)}</div>
        ${list.map((s, i) => `<div class="sl im"><img class="gi" src="${esc(s)}" alt="${esc(p.name)}${i ? ', photo ' + (i + 1) : ''}" draggable="false"></div>`).join('')}
      </div>
      <span class="cnt" hidden></span>
      <span class="rtg"><b>${p.rating.toFixed(1)}</b> ★<i>${num(p.count)}</i></span>
      <button class="gn l" data-act="gal-prev" aria-label="Previous photo">‹</button>
      <button class="gn r" data-act="gal-next" aria-label="Next photo">›</button>
      <div class="dd"></div>
    </div>`;
  };
  function initGallery() {
    const g = document.querySelector('.gal'); if (!g) return;
    const trk = g.querySelector('.trk'), dd = g.querySelector('.dd'), cnt = g.querySelector('.cnt'), artsl = g.querySelector('.artsl');
    const ims = () => [...trk.querySelectorAll('.sl.im')];
    const mark = () => {
      const n = ims().length, i = Math.min(n - 1, Math.max(0, Math.round(trk.scrollLeft / (trk.clientWidth || 1))));
      S.gi = i < 0 ? 0 : i;
      dd.querySelectorAll('button').forEach((b, k) => b.setAttribute('aria-current', String(k === S.gi)));
      cnt.textContent = `${S.gi + 1} / ${n}`;
    };
    const build = () => {
      const n = ims().length;
      artsl.hidden = n > 0;
      g.classList.toggle('multi', n > 1);
      cnt.hidden = n < 2;
      dd.innerHTML = n > 1 ? ims().map((_, k) => `<button data-act="gal-go" data-i="${k}" aria-label="Photo ${k + 1}"></button>`).join('') : '';
      mark();
    };
    const drop = img => { const s = img.closest('.sl'); if (s) { s.remove(); build(); } };
    trk.addEventListener('error', e => { if (e.target.tagName === 'IMG') drop(e.target); }, true);
    trk.querySelectorAll('img').forEach(im => { if (im.complete && im.naturalWidth === 0) im.closest('.sl').remove(); });
    trk.addEventListener('scroll', mark, { passive: true });
    build();
    if (S.gi) trk.scrollTo({ left: S.gi * trk.clientWidth, behavior: 'auto' });
  }
  const galGo = i => { const t = document.querySelector('.trk'); if (t) t.scrollTo({ left: i * t.clientWidth, behavior: 'smooth' }); };

  function relatedHTML(p) {
    const same = P.filter(x => x.id !== p.id && x.cat === p.cat);
    const rest = P.filter(x => x.id !== p.id && x.cat !== p.cat);
    const sec = (title, list) => list.length ? `<section class="more"><div class="head"><h2>${title}</h2></div><div class="grid">${list.map(card).join('')}</div></section>` : '';
    return sec(`More in ${esc(p.cat)}`, same) + sec('You may also like', rest.slice(0, 8));
  }

  function showHome(reset) {
    S.view = 'home'; S.stack.length = 0; S.pend = null; S.ck = null; hidePage();
    if (reset) { S.q = ''; S.cat = 'All'; $('#q').value = ''; }
    renderHome();
  }
  function openProduct(id) { if (PAGES.includes(S.view)) pushHist(); hidePage(); S.gi = 0; S.view = 'detail'; S.id = Number(id); S.dq = 1; S.dx = false; S.sz = ''; S.szWarn = false; jumpTop(); renderDetail(); jumpTop(); }

  function setQty(id, n) {
    const pp = byId(id); n = Math.max(0, Math.min(pp ? maxQK(id) : 10, n));
    if (n === 0) delete S.cart[id]; else S.cart[id] = n;
    save(); renderCart();
    if (S.view === 'detail') renderDetail();
  }
  function renderCart() {
    const n = cartCount();
    const badge = $('#badge');
    badge.hidden = n === 0; badge.textContent = n;
    $('#cartBtn').setAttribute('aria-label', `Open cart, ${n} ${n === 1 ? 'item' : 'items'}`);
    $('#cartCount').textContent = n ? `(${n})` : '';
    const ids = Object.keys(S.cart);
    if (!ids.length) {
      $('#cartBody').innerHTML = `<div class="empty" style="margin-top:18px"><h3>Your cart is empty</h3><p>Add something you like and it will show up here.</p><button class="btn" data-act="shop">Start shopping</button></div>`;
      $('#cartFoot').innerHTML = '';
      return;
    }
    $('#cartBody').innerHTML = ids.map(id => {
      const p = byId(id), q = S.cart[id], szl = lparse(id).size;
      return `
        <div class="ci">
          <button class="cth" data-act="open-cart" data-id="${p.id}" aria-label="View ${esc(p.name)}"><span class="ph" style="--h:${p.h}">${art(p)}</span></button>
          <div class="cm">
            <button class="cn" data-act="open-cart" data-id="${p.id}">${esc(p.name)}</button>
            <div class="cp"><span>${INR(p.price)} each</span><b>${INR(p.price * q)}</b></div>
            ${szl ? `<p class="dl">Size: <b>${esc(szl)}</b></p>` : ''}
            ${hasShip(p) ? `<p class="dl">${p.ship > 0 ? 'Delivery ' + INR(shipOf(p, q)) : 'Free delivery'}</p>` : ''}
            <div class="cr">
              <div class="step sm" role="group" aria-label="Quantity of ${esc(p.name)}">
                <button data-act="dec" data-k="${esc(id)}" aria-label="Decrease quantity">−</button>
                <output>${q}</output>
                <button data-act="inc" data-k="${esc(id)}" aria-label="Increase quantity" ${q >= maxQK(id) ? 'disabled' : ''}>+</button>
              </div>
              <button class="lnk red" data-act="rm" data-k="${esc(id)}">Remove</button>
            </div>
          </div>
        </div>`;
    }).join('');
    const sh = cartShip();
    $('#cartFoot').innerHTML = `
      <div class="srow"><span>Subtotal</span><span>${INR(subtotal())}</span></div>
      ${cartHasShip() ? `<div class="srow"><span>Delivery</span><span>${sh ? INR(sh) : 'Free'}</span></div>` : ''}
      ${savings() ? `<p class="save">You save ${INR(savings())} on this order</p>` : ''}
      <div class="cbar2"><div class="cbt"><small>Total</small><b>${INR(subtotal() + sh)}</b></div><button class="btn" data-act="checkout">Checkout</button></div>
      <p class="dsec">Secure checkout &middot; Genuine products</p>`;
  }
  let lastFocus = null;
  function openCart() {
    closeMenu();
    lastFocus = document.activeElement;
    drawer.inert = false; drawer.classList.add('open'); scrim.classList.add('open');
    setTimeout(() => drawer.querySelector('.x').focus(), 50);
  }
  function closeCart() {
    drawer.classList.remove('open'); scrim.classList.remove('open'); drawer.inert = true;
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  let lg = { step: 'phone', phone: '', otp: '', err: '', after: null, order: null };
  function renderAcct() {
    const pr = S.user && S.users[S.user] && S.users[S.user].profile;
    $('#acctLbl').textContent = S.user ? (pr ? (pr.name.trim().split(/\s+/)[0] || mask(S.user)) : mask(S.user)) : 'Login';
    $('#acctBtn').classList.toggle('named', !!S.user);
    $('#acctCh').hidden = !S.user;
    $('#menuPhone').textContent = S.user ? mask(S.user) : '';
  }
  function closeMenu() { $('#menu').hidden = true; $('#acctBtn').setAttribute('aria-expanded', 'false'); }
  function openLogin(after, only) { closeCart(); lg = { step: 'phone', phone: '', otp: '', err: '', after: after || null, only: only || null, order: null }; renderModal(); modal.hidden = false; }
  function closeModal() { modal.hidden = true; modal.classList.remove('full'); }
  const IC = {
    trash: '<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6M14 11v6"/></svg>',
    out: '<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="M16 17l5-5-5-5"/><path d="M21 12H9"/></svg>',
    x: '<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M15 9l-6 6M9 9l6 6"/></svg>'
  };
  // premium confirm popup (browser ka confirm() ki jagah). Kahin bhi: askConfirm({icon,title,text,extra,yes,no,danger}, onYes)
  const cfmHTML = (o, act) => `<div class="cfm"><div class="cfm-ic${o.danger ? ' red' : ''}" aria-hidden="true">${o.icon}</div>
      <h2 id="mTitle">${o.title}</h2><p class="sub">${o.text}</p>${o.extra || ''}
      <div class="cfm-b"><button class="btn block${o.danger ? ' dng' : ''}" data-act="${act}">${o.yes}</button><button class="btn alt block" data-act="modal-close">${o.no}</button></div></div>`;
  const askConfirm = (o, fn) => { lg = { step: 'confirm', cfm: o, fn }; renderModal(); modal.hidden = false; };

  function renderModal() {
    modal.classList.toggle('full', lg.step === 'done');
    if (lg.step === 'phone') {
      sheet.innerHTML = `
        <h2 id="mTitle">Login or sign up</h2>
        <p class="sub">Enter your mobile number and we will send a 6-digit OTP.</p>
        <form id="fPhone" novalidate>
          <div><label for="phone">Mobile number</label></div>
          <div class="phone"><span>+91</span><input id="phone" type="tel" inputmode="numeric" maxlength="10" autocomplete="tel-national" placeholder="9876543210" value="${esc(lg.phone)}"></div>
          <p class="err" id="err" role="alert">${esc(lg.err)}</p>
          <button class="btn block" type="submit">Get OTP</button>
        </form>
        <button class="lnk" data-act="modal-close" style="justify-self:start">Cancel</button>`;
      setTimeout(() => $('#phone') && $('#phone').focus(), 30);
    } else if (lg.step === 'otp') {
      sheet.innerHTML = `
        <h2 id="mTitle">Enter the OTP</h2>
        <p class="sub">Sent to ${mask(lg.phone)}</p>
        <div class="demo">Demo mode: your OTP is <b>${lg.sent}</b>. A live store sends this by SMS.</div>
        <form id="fOtp" novalidate>
          <div><label for="otp">6-digit OTP</label></div>
          <div class="otpf"><input id="otp" type="text" inputmode="numeric" maxlength="6" autocomplete="one-time-code" placeholder="••••••"></div>
          <p class="err" id="err" role="alert">${esc(lg.err)}</p>
          <button class="btn block" type="submit">Verify and login</button>
        </form>
        <div class="row"><button class="lnk" data-act="change-num">Change number</button><button class="lnk" data-act="resend">Resend OTP</button></div>`;
      setTimeout(() => $('#otp') && $('#otp').focus(), 30);
    } else if (lg.step === 'confirm') {
      sheet.innerHTML = cfmHTML(lg.cfm, 'cfm-yes');
    } else if (lg.step === 'cancel') {
      sheet.innerHTML = cfmHTML({ icon: IC.x, danger: true, title: 'Cancel this order?', text: 'This cannot be undone. If you paid online, the seller will arrange your refund.', yes: 'Yes, cancel order', no: 'Keep order' }, 'cancel-yes');
    } else if (lg.step === 'logout') {
      sheet.innerHTML = cfmHTML({ icon: IC.out, title: 'Log out?', text: 'You will need to login again with an OTP.', yes: 'Yes, log out', no: 'Stay logged in' }, 'logout-yes');
    } else {
      const o = lg.order, a = o.addr || {}, ls = o.lines || [];
      const adl = [a.addr, a.area, a.city, a.state].filter(Boolean).map(esc).join(', ') + (a.pin ? ' - ' + esc(a.pin) : '');
      const money = o.pay === 'cod' ? 'Please keep ' + INR(o.total) + ' ready to pay when your order arrives.' : 'We have your payment details. The seller will confirm your payment shortly.';
      sheet.innerHTML = `
        <div class="op">
          <div class="op-hero">
            <div class="op-conf" aria-hidden="true">${'<i></i>'.repeat(16)}</div>
            <div class="ok" aria-hidden="true"><svg viewBox="0 0 52 52"><circle class="ring" cx="26" cy="26" r="24"/><path class="chk" d="M15 27l8 8 15-16"/></svg></div>
            <h2 id="mTitle">Order placed!</h2>
            <p class="sub">Thank you for shopping with ${esc(BRAND)}. ${money}</p>
            <button class="op-id" data-act="op-copy" data-id="${esc(o.id)}" aria-label="Copy order number"><span><small>Order number</small><b>${esc(o.id)}</b></span><em>Copy</em></button>
          </div>
          <ol class="op-trk" aria-label="Order progress"><li class="on"><i></i>Placed</li><li><i></i>Shipped</li><li><i></i>Delivered</li></ol>
          <section class="op-c"><h3>Your items <span>${o.items}</span></h3>
            ${ls.map(l => `<div class="op-l">${thumb(l)}<div><b>${esc(l.name)}</b><small>${l.size ? 'Size ' + esc(l.size) + ' · ' : ''}${INR(l.price)} × ${l.qty}</small></div><b>${INR(l.price * l.qty)}</b></div>`).join('')}</section>
          <section class="op-c"><h3>Delivery</h3>
            ${o.dAt ? `<div class="op-r"><span>Delivery by</span><b class="gd">${dwk(o.dAt)}</b></div>` : ''}
            <div class="op-ad"><b>${esc(a.name || '')}</b><span>${adl}</span>${a.phone ? `<span>+91 ${esc(a.phone)}</span>` : ''}</div></section>
          <section class="op-c"><h3>Payment summary</h3>
            ${o.sub != null ? `<div class="op-r"><span>Items total</span><b>${INR(o.sub)}</b></div>` : ''}
            ${o.dl ? `<div class="op-r"><span>Delivery</span><b>${o.ship ? INR(o.ship) : 'Free'}</b></div>` : ''}
            <div class="op-r op-t"><span>Total</span><b>${INR(o.total)}</b></div>
            <div class="op-r"><span>Payment</span><b>${payName(o.pay)}</b></div></section>
        </div>
        <div class="op-bar"><button class="btn block" data-act="order-view" data-id="${esc(o.id)}">View order</button><button class="btn alt block" data-act="modal-close">Continue shopping</button></div>`;
    }
  }
  function sendOtp() { lg.sent = String(100000 + Math.floor(Math.random() * 900000)); lg.step = 'otp'; lg.err = ''; renderModal(); }

  function calc(only) {
    const lines = only ? [{ id: only.id, size: only.size || '', qty: only.qty }] : Object.entries(S.cart).map(([k, q]) => { const x = lparse(k); return { id: x.id, size: x.size, qty: q }; });
    const items = lines.reduce((a, l) => a + l.qty, 0);
    const sub = lines.reduce((a, l) => a + byId(l.id).price * l.qty, 0);
    const ship = shipFor(lines), dl = lines.some(l => hasShip(byId(l.id)));
    return { lines, items, sub, ship, dl, total: sub + ship };
  }
  const ckAddr = () => (S.ck && S.user) ? (U().addrs.find(a => a.id === S.ck.sel) || null) : null;
  const rd = n => String(Math.floor(Math.random() * Math.pow(10, n))).padStart(n, '0');
  const genOid = () => 'TZ' + rd(4) + 'X' + rd(4) + 'C' + rd(6);
  const validUpi = s => /^[a-zA-Z0-9._-]{2,256}@[a-zA-Z0-9]{2,64}$/.test(s || '');
  const rndDays = () => 5 + (Math.random() < 0.5 ? 0 : 1);
  const addrLine = a => `${esc(a.addr)}${a.lm ? ', ' + esc(a.lm) : ''}${a.area ? ', ' + esc(a.area) : ''}${a.city && a.city !== a.area ? ', ' + esc(a.city) : ''}${a.state ? ', ' + esc(a.state) : ''} - ${esc(a.pin)}`;

  function checkout(only) {
    if (!calc(only).lines.length) return;
    if (!S.user) { openLogin('checkout', only); return; }
    const l = U().addrs;
    S.ck = { only: only || null, step: l.length ? 'addr' : 'form', sel: l[0] ? l[0].id : null, pay: null, oid: null, dAt: null, busy: false };
    S.af = { id: null };
    closeCart(); closeModal(); go('chk');
  }

  function pageBack() {
    const ck = S.ck;
    if (S.view === 'chk' && ck && !ck.busy) {
      const prev = { sum: 'addr', pay: 'sum' }[ck.step];
      if (prev || (ck.step === 'form' && U().addrs.length)) { ck.step = prev || 'addr'; render(); page.scrollTop = 0; return; }
    }
    backStep();
  }

  const STEP_LBL = [['addr', 'Address'], ['sum', 'Summary'], ['pay', 'Payment']];
  const stepper = () => '';

  function addrListHTML(pick) {
    const l = U().addrs;
    const cards = l.map(a => {
      const on = pick && S.ck && S.ck.sel === a.id;
      const inner = `${pick ? '<span class="rad" aria-hidden="true">✓</span>' : ''}<span class="at"><b>${esc(a.name)}</b><span>${addrLine(a)}</span><span>+91 ${esc(a.phone)}</span></span>`;
      return `<div class="acard${pick ? ' pick' : ''}${on ? ' on' : ''}">${pick ? `<button class="abody" data-act="ck-sel" data-id="${esc(a.id)}" aria-pressed="${on}">${inner}</button>` : `<div class="abody">${inner}</div>`}<div class="aact"><button class="lnk" data-act="aedit" data-id="${esc(a.id)}">Edit</button><button class="lnk red" data-act="adel" data-id="${esc(a.id)}">Delete</button></div></div>`;
    }).join('');
    return `${l.length ? `<div class="alist">${cards}</div>` : '<div class="empty"><h3>No saved addresses</h3><p>Add an address and we will deliver your orders there.</p></div>'}
      <button class="btn alt block" data-act="anew" style="margin-top:.9rem">+ Add new address</button>`;
  }

  let PL = { pin: '', status: null, offices: [], district: '', state: '' }, plSeq = 0;
  const normState = s => { s = String(s || '').replace(/&/g, 'and').trim().toLowerCase(); return STATES.find(x => x.toLowerCase() === s) || null; };
  const pinStatusHTML = () => PL.status === 'wait' ? 'Checking pincode…' : PL.status === 'ok' ? `<span class="gd">✓ ${esc(PL.district)}${PL.district && PL.state ? ', ' : ''}${esc(PL.state)}</span>` : PL.status === 'bad' ? '<span class="rd">Pincode not found. Please enter a valid pincode.</span>' : PL.status === 'net' ? 'Could not check the pincode right now. Please select your state.' : '';
  const areaOpts = sel => PL.offices.map(n => `<option value="${esc(n)}"${n === sel ? ' selected' : ''}>${esc(n)}</option>`).join('');
  function paintPin() {
    const st = $('#pinst'); if (!st) return;
    st.innerHTML = pinStatusHTML();
    const ok = PL.status === 'ok', has = ok && PL.offices.length;
    const af = $('#areaF'), cf = $('#cityF'), sel = $('#pstate');
    if (af) { af.hidden = !has; const pa = $('#parea'); if (pa) { const cur = pa.value; pa.innerHTML = areaOpts(PL.offices.includes(cur) ? cur : PL.offices[0]); } }
    if (cf) { cf.hidden = !(ok && PL.district); const pc = $('#pcity'); if (pc) pc.value = PL.district; }
    if (ok && PL.state && sel) { if (![...sel.options].some(o => o.value === PL.state)) sel.add(new Option(PL.state, PL.state)); sel.value = PL.state; }
  }
  async function lookupPin(pin) {
    const my = ++plSeq; PL = { pin, status: 'wait', offices: [], district: '', state: '' }; paintPin();
    let res = { pin, status: 'net', offices: [], district: '', state: '' };
    try {
      const ctl = new AbortController(), to = setTimeout(() => ctl.abort(), 7000);
      const r = await fetch('https://api.postalpincode.in/pincode/' + pin, { signal: ctl.signal }); clearTimeout(to);
      const j = await r.json(), d = Array.isArray(j) ? j[0] : null;
      if (d && d.Status === 'Success' && Array.isArray(d.PostOffice) && d.PostOffice.length) { const po = d.PostOffice; res = { pin, status: 'ok', offices: po.map(x => x.Name).filter(Boolean), district: po[0].District || po[0].Block || '', state: normState(po[0].State) || po[0].State || '' }; }
      else if (d && /no records/i.test(String(d.Message || ''))) res = { pin, status: 'bad', offices: [], district: '', state: '' };
    } catch (e) {}
    if (my !== plSeq) return;
    PL = res; paintPin();
  }
  const AV = {
    pname: v => v.trim().length < 2 ? 'Please enter your full name' : '',
    pphone: v => /^[6-9]\d{9}$/.test(v) ? '' : v.length < 10 ? 'Please enter a valid 10-digit mobile number' : 'Mobile number must start with 6, 7, 8 or 9',
    paddr: v => v.trim().length < 8 ? 'Please enter your full address with house number, street and city' : '',
    ppin: v => /^\d{6}$/.test(v) ? '' : 'Please enter a valid 6-digit pincode'
  };
  function showFE(k) {
    const el = $('#' + k), er = $('#e_' + k); if (!el || !er) return '';
    const m = AV[k](el.value); er.textContent = m; el.classList.toggle('bad', !!m); return m;
  }

  function addrFormHTML(id) {
    const a = id ? U().addrs.find(x => x.id === id) : null;
    PL = a && a.pin ? { pin: a.pin, status: a.state ? 'ok' : null, offices: a.area ? [a.area] : [], district: a.city || '', state: a.state || '' } : { pin: '', status: null, offices: [], district: '', state: '' };
    const okA = PL.status === 'ok';
    return `<form id="fAddr" class="cf" novalidate>
      <div class="fld"><label for="pname">Full name</label><input id="pname" autocomplete="name" maxlength="60" value="${esc(a ? a.name : '')}"><p class="ferr" id="e_pname" role="alert"></p></div>
      <div class="fld"><label for="pphone">Mobile number</label><div class="phone"><span>+91</span><input id="pphone" type="tel" inputmode="numeric" maxlength="10" autocomplete="tel-national" value="${esc(a ? a.phone : S.user || '')}"></div><p class="ferr" id="e_pphone" role="alert"></p></div>
      <div class="fld"><label for="paddr">Address</label><textarea id="paddr" rows="3" maxlength="200" autocomplete="street-address" placeholder="House no., building, street, area">${esc(a ? a.addr : '')}</textarea><p class="ferr" id="e_paddr" role="alert"></p></div>
      <div class="fld"><label for="plm">Landmark (optional)</label><input id="plm" maxlength="80" placeholder="Near school, temple, shop…" value="${esc(a ? a.lm : '')}"></div>
      <div class="two"><div class="fld"><label for="ppin">Pincode</label><input id="ppin" inputmode="numeric" maxlength="6" autocomplete="postal-code" value="${esc(a ? a.pin : '')}"></div>
        <div class="fld"><label for="pstate">State</label><select id="pstate"><option value="">Select state</option>${STATES.map(x => `<option value="${esc(x)}"${a && a.state === x ? ' selected' : ''}>${esc(x)}</option>`).join('')}</select></div></div>
      <p class="ferr" id="e_ppin" role="alert"></p><p class="pinst" id="pinst">${pinStatusHTML()}</p>
      <div class="fld" id="areaF"${okA && PL.offices.length ? '' : ' hidden'}><label for="parea">Area</label><select id="parea">${areaOpts(a ? a.area : '')}</select></div>
      <div class="fld" id="cityF"${okA && PL.district ? '' : ' hidden'}><label for="pcity">City / District</label><input id="pcity" readonly value="${esc(PL.district)}"></div>
      <p class="err" id="err" role="alert"></p>
      <button class="btn block" type="submit">Save address</button>
    </form>`;
  }

  const priceCard = c => {
    const mrp = c.lines.reduce((a, l) => a + byId(l.id).mrp * l.qty, 0), disc = Math.max(0, mrp - c.sub), pct = mrp ? Math.round(disc / mrp * 100) : 0;
    return `<section class="dcard"><h3>Price details</h3>
      <div class="prow"><span>Price (${c.items} ${c.items === 1 ? 'item' : 'items'})</span><s>${INR(mrp)}</s></div>
      ${disc ? `<div class="prow"><span>Discount (${pct}% off)</span><span class="gd">− ${INR(disc)}</span></div>` : ''}
      <div class="prow"><span>Selling price</span><b>${INR(c.sub)}</b></div>
      <div class="prow"><span>Delivery charges</span>${c.ship ? `<span>${INR(c.ship)}</span>` : '<span class="gd">Free</span>'}</div>
      <div class="prow t"><span>Total amount</span><span>${INR(c.total)}</span></div>
      ${disc ? `<p class="sbn">You will save ${INR(disc)} (${pct}% off) on this order</p>` : ''}</section>`;
  };
  const itemRow = (l, edit, many) => {
    const p = byId(l.id);
    return `<div class="ci2">${thumb({ id: l.id })}<div class="oi-b"><b>${esc(p.name)}</b>${l.size ? `<span class="sub">Size: ${esc(l.size)}</span>` : ''}
      <div class="pr"><b>${INR(p.price)}</b><s>${INR(p.mrp)}</s><em class="gd">${off(p)}% off</em></div>
      ${edit ? `<div class="cr"><div class="step sm" role="group" aria-label="Quantity of ${esc(p.name)}"><button data-act="ck-q" data-k="${esc(lkey(l.id, l.size))}" data-d="-1" aria-label="Decrease quantity"${l.qty <= 1 ? ' disabled' : ''}>−</button><output>${l.qty}</output><button data-act="ck-q" data-k="${esc(lkey(l.id, l.size))}" data-d="1" aria-label="Increase quantity"${l.qty >= limOf(p, l.size) ? ' disabled' : ''}>+</button></div>${many ? `<button class="lnk red" data-act="ck-rm" data-k="${esc(lkey(l.id, l.size))}">Remove</button>` : ''}</div>` : `<span class="sub">Qty ${l.qty}</span>`}
    </div><b class="lt">${INR(p.price * l.qty)}</b></div>`;
  };
  const cbar = (c, btn) => `<div class="cbar"><div class="cbt"><small>Total</small><b>${INR(c.total)}</b></div>${btn}</div>`;
  const trustStrip = () => `<div class="tstrip"><span>${ICO('<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>')}Secure checkout</span><span>${ICO('<circle cx="12" cy="8" r="6"/><path d="M15.5 13.5 17 22l-5-3-5 3 1.5-8.5"/>')}Genuine products</span><span>${ICO('<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>')}Track your order</span></div>`;

  function chkHTML() {
    const ck = S.ck; if (!ck) return pgBar('Checkout');
    const c = calc(ck.only), a = ckAddr();
    const sl = ck.shown !== ck.step ? ' slide' : ''; ck.shown = ck.step;
    if (ck.step === 'form') return pgBar(S.af && S.af.id ? 'Edit address' : 'Add address') + `<div class="pg-in${sl}">${stepper('addr')}${addrFormHTML(S.af && S.af.id)}</div>`;
    if (ck.step === 'addr' || !a) {
      const many = !ck.only && c.lines.length > 1;
      return pgBar('Select address') + `<div class="pg-in${sl}">${stepper('addr')}${addrListHTML(true)}
        <section class="dcard" style="margin-top:1.1rem"><h3>Your order</h3>${c.lines.map(l => itemRow(l, true, many)).join('')}
          <div class="prow t"><span>Total (${c.items} ${c.items === 1 ? 'item' : 'items'})</span><span>${INR(c.sub)}</span></div></section>
        ${cbar({ total: c.sub + c.ship }, `<button class="btn" data-act="ck-confirm"${a ? '' : ' disabled'}>Confirm</button>`)}</div>`;
    }
    if (ck.step === 'sum') {
      return pgBar('Order summary') + `<div class="pg-in${sl}">${stepper('sum')}
        <section class="dcard"><h3>Deliver to</h3><b>${esc(a.name)}</b><p class="sub">${addrLine(a)}</p><p class="sub">+91 ${esc(a.phone)}</p><button class="lnk" data-act="ck-change" style="justify-self:start">Change address</button></section>
        <section class="dcard"><h3>Items (${c.items})</h3>${c.lines.map(l => itemRow(l, false)).join('')}</section>
        <section class="dcard"><h3>Delivery</h3><div class="prow"><span>Order date</span><b>${dwk(Date.now())}</b></div><div class="prow"><span>Expected delivery</span><b class="gd">${dwk(ck.dAt)}</b></div><div class="prow"><span>Delivery charges</span>${c.ship ? `<b>${INR(c.ship)}</b>` : '<b class="gd">Free</b>'}</div></section>
        ${priceCard(c)}${trustStrip()}
        ${cbar(c, '<button class="btn" data-act="ck-next">Continue to payment</button>')}</div>`;
    }
    const codOff = FBS.cod === false, upi = prepaidOn() ? FBS.upi : '';
    const pm = (act, ico, t, d, on, dis) => `<button class="pm${on ? ' on' : ''}" data-act="${act}" aria-pressed="${on}"${dis ? ' disabled aria-disabled="true"' : ''}><span class="pmi">${ico}</span><span class="pmt"><b>${t}</b><span>${d}</span></span><span class="rad" aria-hidden="true">✓</span></button>`;
    const cashIco = ICO('<rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2.5"/><path d="M6 10v.01M18 14v.01"/>');
    const upiIco = ICO('<rect x="6" y="2" width="12" height="20" rx="2.5"/><path d="M10.5 18h3"/><path d="m9.5 10 2 2 3.5-4"/>');
    let panel = '';
    if (ck.pay === 'online' && upi) {
      const link = 'upi://pay?pa=' + encodeURIComponent(upi) + '&pn=' + encodeURIComponent(FBS.upiName || BRAND) + '&am=' + c.total.toFixed(2) + '&cu=INR&tn=' + encodeURIComponent('Order ' + ck.oid);
      panel = `<section class="dcard upi"><h3>Pay with UPI</h3>
        <div class="prow"><span>UPI ID</span><b>${esc(upi)}</b></div>
        <div class="prow"><span>Amount</span><b>${INR(c.total)}</b></div>
        <button class="lnk" data-act="upi-copy" style="justify-self:start">Copy UPI ID</button>
        <a class="btn block" href="${esc(link)}">Pay ${INR(c.total)} with UPI app</a>
        <p class="sub small">This opens GPay, PhonePe, Paytm or any UPI app on your phone with the amount filled in. After paying, come back here and tap Place order. On a computer, pay to the UPI ID above from your phone.</p>
        <div class="fld"><label for="utr">UPI transaction ID (optional)</label><input id="utr" inputmode="numeric" maxlength="12" placeholder="12 digits, shown after payment"></div></section>`;
    } else if (ck.pay === 'cod') {
      panel = `<section class="dcard"><h3>Cash on Delivery</h3><p class="sub">Please keep ${INR(c.total)} ready. You pay the delivery person when your order arrives at your door.</p></section>`;
    }
    const mrp = c.lines.reduce((x, l) => x + byId(l.id).mrp * l.qty, 0), disc = Math.max(0, mrp - c.sub);
    const label = ck.busy ? 'Placing order…' : ck.pay === 'online' ? 'I have paid, place order' : ck.pay === 'cod' ? 'Place order' : 'Select payment method';
    return pgBar('Payment') + `<div class="pg-in${sl}">${stepper('pay')}
      <section class="amt"><div><small>Amount payable</small><b>${INR(c.total)}</b></div>${disc ? `<span class="sv">You save ${INR(disc)}</span>` : ''}</section>
      <p class="sec-t">Choose payment method</p>
      <div class="pms">${pm('pay-cod', cashIco, 'Cash on Delivery', codOff ? 'Currently unavailable' : 'Pay when your order arrives', ck.pay === 'cod', codOff || ck.busy)}${pm('pay-online', upiIco, 'Prepaid (UPI)', upi ? 'GPay, PhonePe, Paytm or any UPI app' : 'Currently unavailable', ck.pay === 'online', !upi || ck.busy)}</div>
      ${panel}${priceCard(c)}${trustStrip()}
      ${cbar(c, `<button class="btn" data-act="pay-place"${ck.pay && !ck.busy ? '' : ' disabled'}>${label}</button>`)}</div>`;
  }

  async function placeOrder(pay, utr) {
    const ck = S.ck; if (!ck || ck.busy) return;
    const only = ck.only, a = ckAddr(); let c = calc(only);
    pay = pay === 'online' ? 'online' : 'cod';
    if (!c.lines.length || !a) return;
    ck.busy = true; render();
    await pull();
    ck.busy = false;
    if (S.ck !== ck) return;
    if (FBS.open === false) { render(); return; }
    if (only && !byId(only.id)) { toast('This item is no longer available'); S.ck = null; showHome(false); renderCart(); return; }
    c = calc(only);
    if (!c.lines.length) { toast('Your items are no longer available'); S.ck = null; showHome(false); renderCart(); return; }
    if (pay === 'cod' && FBS.cod === false) { toast('Cash on Delivery is not available right now'); ck.pay = null; render(); return; }
    if (pay === 'online' && !prepaidOn()) { toast('Online payment is currently unavailable'); ck.pay = null; render(); return; }
    const bad = c.lines.find(l => { const p = byId(l.id); return !p || limLeft(p, l.size) < l.qty; });
    if (bad) { const p = byId(bad.id); toast(p ? `Only ${limLeft(p, bad.size)} left of ${p.name}${bad.size ? ' (size ' + bad.size + ')' : ''}` : 'An item is no longer available'); S.ck = null; showHome(false); renderCart(); return; }
    const now = Date.now(), dAt = ck.dAt || now + rndDays() * DAY;
    const order = { id: ck.oid || genOid(), ts: now, st: 'placed', t: { placed: now }, sAt: now + SHIP_AFTER, dAt, pay,
      items: c.items, sub: c.sub, ship: c.ship, dl: true, total: c.total, to: `${a.name}, ${a.pin}`, addr: { name: a.name, phone: a.phone, addr: a.addr, pin: a.pin, lm: a.lm || '', state: a.state || '', area: a.area || '', city: a.city || '' },
      lines: c.lines.map(l => { const p = byId(l.id); return { id: l.id, size: l.size || '', name: p.name, qty: l.qty, price: p.price, ret: typeof p.returns === 'number' ? p.returns : undefined, rep: typeof p.replace === 'number' ? p.replace : undefined, exc: typeof p.exch === 'number' ? p.exch : undefined }; }) };
    if (utr) order.utr = utr;
    ck.busy = true; render();
    const u = U(); u.addrs = [a, ...u.addrs.filter(x => x.id !== a.id)]; syncProf();
    u.orders = [order, ...u.orders].slice(0, 50); save(); sendOrder(order);
    if (!only) { S.cart = {}; save(); renderCart(); }
    S.ck = null; showHome(false);
    lg = { step: 'done', phone: '', otp: '', err: '', after: null, only: null, order };
    renderModal(); modal.hidden = false;
  }

  const U = () => {
    const u = (S.users[S.user] = S.users[S.user] || { profile: null, fav: [], orders: [], addrs: [] });
    if (!Array.isArray(u.addrs)) u.addrs = [];
    if (!u.addrs.length && u.profile) u.addrs.push(Object.assign({ id: 'a' + Date.now().toString(36) }, u.profile));
    return u;
  };
  const syncProf = () => { const u = U(), a = u.addrs[0]; u.profile = a ? { name: a.name, phone: a.phone, addr: a.addr, pin: a.pin, lm: a.lm || '', state: a.state || '' } : null; };
  const isFav = id => !!S.user && U().fav.includes(Number(id));
  const HEART = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z"/></svg>';
  const heart = id => `<button class="hrt" data-act="fav" data-id="${id}" aria-pressed="${isFav(id)}" aria-label="Save to favorites">${HEART}</button>`;
  const rerender = () => S.view === 'detail' ? renderDetail() : PAGES.includes(S.view) ? render() : renderHome();
  function toggleFav(id) {
    if (!S.user) { openLogin(); toast('Login to save favorites'); return; }
    const f = U().fav, i = f.indexOf(Number(id));
    if (i < 0) f.unshift(Number(id)); else f.splice(i, 1);
    save(); rerender(); toast(i < 0 ? 'Saved to favorites' : 'Removed from favorites');
  }
  const dstr = ts => new Date(ts).toLocaleDateString(S.lang === 'hi' ? 'hi-IN' : 'en-IN', { day: 'numeric', month: 'short', year: 'numeric' });

  const PAGES = ['account', 'orders', 'order', 'fav', 'lang', 'addrs', 'aform', 'chk'];
  const page = $('#page');
  let histOK = false;
  const hidePage = () => { page.hidden = true; delete page.dataset.v; page.classList.remove('enter'); document.body.classList.remove('lock'); };
  function pushHist() { S.stack.push({ view: S.view, id: S.id }); try { history.pushState({ n: S.stack.length }, ''); histOK = true; } catch (e) {} }
  function go(view) { closeCart(); closeMenu(); pushHist(); S.view = view; render(); page.scrollTop = 0; jumpTop(); }
  function goBack() {
    const s = S.stack.pop(); if (!s) return showHome(false);
    S.view = s.view; S.id = s.id;
    if (s.view === 'detail') { hidePage(); renderDetail(); } else if (PAGES.includes(s.view)) render(); else { hidePage(); renderHome(); }
  }
  let skipPop = 0;
  const backStep = () => { if (!S.stack.length) return showHome(false); if (histOK) { skipPop++; try { history.back(); } catch (e) { skipPop--; } } goBack(); };
  window.addEventListener('popstate', () => { if (skipPop) { skipPop--; return; } if (S.stack.length) goBack(); else if (S.view !== 'home') showHome(false); });
  function render() {
    if (!PAGES.includes(S.view)) { hidePage(); return S.view === 'detail' ? renderDetail() : renderHome(); }
    const st = page.scrollTop;
    const opening = page.dataset.v !== S.view; page.dataset.v = S.view; page.classList.remove('enter');
    page.hidden = false; document.body.classList.add('lock'); page.innerHTML = pageHTML(); page.scrollTop = st;
    if (opening) { void page.offsetWidth; page.classList.add('enter'); }
  }

  const ARROW = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 12H5"/><path d="m12 19-7-7 7-7"/></svg>';
  const pgBar = t => `<div class="pg-bar"><button class="pg-back" data-act="pback" aria-label="Back">${ARROW}</button><h1>${t}</h1></div>`;
  const emptyBox = (h, p) => `<div class="empty"><h3>${h}</h3><p>${p}</p><button class="btn" data-act="shop">Start shopping</button></div>`;
  const DAY = 864e5, SHIP_AFTER = DAY, DELIVER_AFTER = 4 * DAY;
  const RANK = { placed: 0, accepted: 1, ready: 2, shipped: 3, delivered: 4 };
  const STL = { placed: 'Order placed', accepted: 'Accepted', ready: 'Ready to ship', shipped: 'In transit', delivered: 'Delivered', cancelled: 'Cancelled', rejected: 'Rejected' };
  const dead = o => o.st === 'cancelled' || o.st === 'rejected';
  const loc = () => S.lang === 'hi' ? 'hi-IN' : 'en-IN';
  const dwk = ts => new Date(ts).toLocaleDateString(loc(), { weekday: 'short', day: 'numeric', month: 'short' });
  const dmon = ts => new Date(ts).toLocaleDateString(loc(), { day: 'numeric', month: 'short' });
  const dfull = ts => { const d = new Date(ts); return d.toLocaleDateString(loc(), { weekday: 'short', day: 'numeric', month: 'short' }) + " '" + String(d.getFullYear()).slice(2) + ' · ' + d.toLocaleTimeString(loc(), { hour: 'numeric', minute: '2-digit' }); };
  const payName = p => p === 'cod' ? 'Cash on Delivery' : p === 'online' ? 'Prepaid' : '';
  function syncOrder(o) {
    let ch = false; const now = Date.now();
    if (!o.st) { o.st = 'placed'; ch = true; }
    if (!o.t) { o.t = { placed: o.ts }; ch = true; }
    if (!o.sAt) { o.sAt = o.ts + SHIP_AFTER; ch = true; }
    if (!o.dAt) { o.dAt = o.ts + DELIVER_AFTER; ch = true; }
    return ch;
  }
  const syncAll = () => { let ch = false; U().orders.forEach(o => { if (syncOrder(o)) ch = true; }); if (ch) save(); };
  window.setOrderStatus = (id, st) => {
    const o = S.user && U().orders.find(x => x.id === id);
    if (!o) return 'Order nahi mila. Login karke sahi order ID likho.';
    const now = Date.now(); syncOrder(o);
    if (st === 'placed') { o.st = 'placed'; delete o.t.shipped; delete o.t.delivered; delete o.t.cancelled; o.sAt = now + SHIP_AFTER; o.dAt = now + DELIVER_AFTER; }
    else if (st === 'shipped') { o.st = 'shipped'; o.t.shipped = now; delete o.t.delivered; delete o.t.cancelled; o.sAt = now; o.dAt = Math.max(o.dAt, now + DAY); }
    else if (st === 'delivered') { o.st = 'delivered'; o.t.shipped = o.t.shipped || now; o.t.delivered = now; delete o.t.cancelled; o.sAt = Math.min(o.sAt, now); o.dAt = now; }
    else if (st === 'cancelled') { o.st = 'cancelled'; o.t.cancelled = now; }
    else return "st 'placed', 'shipped', 'delivered' ya 'cancelled' likho.";
    save(); if (PAGES.includes(S.view)) render();
    return o.id + ' -> ' + o.st;
  };
  const stSub = o => o.st === 'delivered' ? 'on ' + dwk(o.t.delivered) : dead(o) ? 'on ' + dwk(o.t.cancelled || o.t.rejected || o.ts) : 'Expected by ' + dwk(o.dAt);
  function lineChips(l, o) {
    const out = [], d = o.t && o.t.delivered;
    if (dead(o)) return out;
    const one = (v, word, noText, closed) => {
      if (typeof v !== 'number') return;
      if (v <= 0) out.push([noText, 1]);
      else if (d) { const u = d + v * DAY; out.push(Date.now() <= u ? [word + ' till ' + dmon(u), 0] : [closed, 1]); }
      else out.push([v + '-day ' + (word === 'Return' ? 'returns' : word === 'Exchange' ? 'exchange' : 'replacement'), 0]);
    };
    if (l.rep > 0) one(l.rep, 'Replacement', 'No replacement', 'Replacement window closed');
    else if (l.exc > 0 && !(l.ret > 0)) one(l.exc, 'Exchange', 'No exchange', 'Exchange window closed');
    else one(l.ret, 'Return', 'No returns', 'Return window closed');
    return out;
  }
  const chipsHTML = arr => arr.map(([t, bad]) => `<span class="ochip${bad ? ' no' : ''}">${esc(t)}</span>`).join('');
  const thumb = l => { const p = byId(l.id); return `<span class="ph oth"${p ? ` style="--h:${p.h}"` : ''}>${p ? art(p) : ''}</span>`; };
  const orderRow = o => {
    const f = o.lines[0], n = o.lines.length;
    const ch = (o.pay ? `<span class="ochip pay">${o.pay === 'cod' ? 'COD' : 'Prepaid'}</span>` : '') + (n === 1 ? chipsHTML(lineChips(f, o)) : '');
    return `<button class="oc" data-act="order-open" data-id="${esc(o.id)}" aria-label="Order ${esc(o.id)}">
      <span class="oc-img">${thumb(f)}</span>
      <span class="oc-body">
        <span class="oc-n">${esc(f.name)}${f.size ? ' (' + esc(f.size) + ')' : ''}${n > 1 ? ` <small>+ ${n - 1} more</small>` : ''}</span>
        <span class="oc-s"><span class="st ${o.st}">${STL[o.st]}</span><span class="sd">${esc(stSub(o))}</span></span>
        <span class="oc-m">Ordered ${dstr(o.ts)} · ${esc(o.id)}</span>
        ${ch ? `<span class="oc-c">${ch}</span>` : ''}
      </span>
      <span class="oc-r"><b>${INR(o.total)}</b><span class="chev" aria-hidden="true">›</span></span>
    </button>`;
  };
  function stepsHTML(o) {
    const t = o.t, r = RANK[o.st] || 0, st = [{ n: 'Order placed', at: t.placed, done: true }];
    if (dead(o)) st.push({ n: o.st === 'rejected' ? 'Rejected' : 'Cancelled', at: t.cancelled || t.rejected, done: true, bad: true });
    else {
      st.push({ n: 'Accepted', at: t.accepted, done: r >= 1 });
      st.push({ n: 'Ready to ship', at: t.ready, done: r >= 2 });
      st.push({ n: 'In transit', at: t.shipped, done: r >= 3 });
      st.push(r >= 4 ? { n: 'Delivered', at: t.delivered, done: true } : { n: 'Delivery expected by ' + dwk(o.dAt), done: false });
    }
    return `<div class="tl">${st.map((x, i) => {
      const nx = st[i + 1];
      const cls = ['tl-s', x.done ? 'done' : '', x.bad ? 'bad' : '', nx && nx.done ? (nx.bad ? 'lnb' : 'ln') : '', x.done && !(nx && nx.done) ? 'cur' : ''].filter(Boolean).join(' ');
      return `<div class="${cls}"><div class="tl-t">${x.n}</div>${x.done && x.at ? `<div class="tl-d">${dfull(x.at)}</div>` : ''}</div>`;
    }).join('')}</div>`;
  }
  function orderPage(o) {
    const a = o.addr, sub = o.sub != null ? o.sub : o.total - (o.ship || 0);
    const items = o.lines.map(l => { const c = lineChips(l, o); return `<div class="oi">${thumb(l)}<div class="oi-b"><b>${esc(l.name)}</b><span>${l.size ? 'Size ' + esc(l.size) + ' · ' : ''}${l.qty | 0} × ${INR(l.price)} = ${INR(l.price * l.qty)}</span>${c.length ? `<div class="oc-c">${chipsHTML(c)}</div>` : ''}</div></div>`; }).join('');
    return `
      <section class="dcard"><div class="oh"><b>${esc(o.id)}</b><span>Ordered ${dstr(o.ts)}</span></div><div class="oc-s"><span class="st ${o.st}">${STL[o.st]}</span><span class="sd">${esc(stSub(o))}</span></div>${o.st === 'rejected' && o.reason ? `<p class="sub" style="margin-top:.5rem">Reason: ${esc(o.reason)}</p>` : ''}</section>
      <section class="dcard"><h3>Order status</h3>${stepsHTML(o)}${o.st === 'placed' ? '<button class="btn alt block" data-act="cancel-ask" style="margin-top:.5rem">Cancel order</button>' : ''}</section>
      <section class="dcard"><h3>Items</h3>${items}</section>
      ${o.pay ? `<section class="dcard"><h3>Payment</h3><b>${o.pay === 'cod' ? 'Cash on Delivery' : 'Online payment (Prepaid)'}</b><p class="sub">${o.pay === 'cod' ? (o.payStatus === 'paid' ? 'Paid ' + INR(o.total) + ' on delivery.' : 'Pay ' + INR(o.total) + ' when your order arrives.') : (o.payStatus === 'paid' ? 'Payment of ' + INR(o.total) + ' received.' : 'Payment of ' + INR(o.total) + ' submitted. The seller will confirm it shortly.')}</p></section>` : ''}
      <section class="dcard"><h3>Delivery address</h3>${a ? `<b>${esc(a.name)}</b><p class="sub">${addrLine(a)}</p><p class="sub">+91 ${esc(a.phone)}</p>` : `<p class="sub">${esc(o.to || '')}</p>`}</section>
      <section class="dcard"><h3>Price details</h3>
        <div class="prow"><span>Subtotal</span><span>${INR(sub)}</span></div>
        ${o.dl ? `<div class="prow"><span>Delivery</span><span>${o.ship ? INR(o.ship) : 'Free'}</span></div>` : ''}
        <div class="prow t"><span>Total</span><span>${INR(o.total)}</span></div>
      </section>`;
  }

  function pageHTML() {
    const u = U(), pr = u.profile;
    if (S.view === 'chk') return chkHTML();
    if (S.view === 'addrs') return pgBar('Addresses') + `<div class="pg-in">${addrListHTML(false)}</div>`;
    if (S.view === 'aform') return pgBar(S.af && S.af.id ? 'Edit address' : 'Add address') + `<div class="pg-in">${addrFormHTML(S.af && S.af.id)}</div>`;
    if (S.view === 'order') { syncAll(); const o = u.orders.find(x => x.id === S.oid); if (o) return pgBar('Order details') + `<div class="pg-in">${orderPage(o)}</div>`; S.view = 'orders'; }
    if (S.view === 'orders') { syncAll(); return pgBar('Orders') + `<div class="pg-in ol">${u.orders.length ? u.orders.map(orderRow).join('') : emptyBox('No orders yet', 'Your placed orders will show up here.')}</div>`; }
    if (S.view === 'fav') { const l = u.fav.map(byId).filter(Boolean); return pgBar('Favorites') + `<div class="pg-in wide">${l.length ? `<div class="grid">${l.map(card).join('')}</div>` : emptyBox('No favorites yet', 'Tap the heart on a product to save it here.')}</div>`; }
    if (S.view === 'lang') return pgBar('Language') + `<div class="pg-in"><p class="sub" style="margin-bottom:1rem">Choose your language</p><div class="alist">${[['en', 'English'], ['hi', 'हिन्दी']].map(([c, n]) => `<button class="rh lopt" data-act="lang" data-l="${c}" aria-pressed="${S.lang === c}"><span class="rl">${n}</span><span class="ck" aria-hidden="true">✓</span></button>`).join('')}</div></div>`;
    const name = pr ? pr.name.trim() : '';
    const ico = (d, c) => `<span class="ri">${ICO(d)}</span>`;
    const rows = [
      ['orders', 'Orders', '<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>', u.orders.length],
      ['fav', 'Favorites', '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z"/>', u.fav.length],
      ['lang', 'Language', '<circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z"/>', S.lang === 'hi' ? 'हिन्दी' : 'English'],
      ['addrs', 'Addresses', '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>', u.addrs.length || null]];
    return pgBar('My account') + `
      <div class="pg-in acct">
        <section class="ac-card">
          <div class="ac-top"><div class="av" aria-hidden="true">${esc((name || '+')[0].toUpperCase())}</div><div class="ac-id"><h1>${name ? esc(name) : '+91 ' + esc(S.user)}</h1><p>${mask(S.user)}</p></div></div>
          <div class="ac-stats"><div><b>${u.orders.length}</b><span>Orders</span></div><div><b>${u.fav.length}</b><span>Favorites</span></div><div><b>${u.addrs.length}</b><span>Addresses</span></div></div>
        </section>
        <div class="ac-tiles">
          ${rows.map(r => `<button class="ac-tile" data-act="goto" data-to="${r[0]}"><span class="ac-ic">${ICO(r[2])}</span><span class="ac-go" aria-hidden="true">›</span><span class="ac-t"><span class="ac-l">${r[1]}</span><span class="ac-n">${r[3] === null ? 'Add' : r[3]}</span></span></button>`).join('')}
        </div>
        <button class="ac-out" data-act="logout">${ICO('<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="m16 17 5-5-5-5"/><path d="M21 12H9"/>')}<span>Log out</span></button>
      </div>`;
  }

  const HI = {
    'Free delivery on orders above ₹999': '₹999 से ऊपर के ऑर्डर पर फ्री डिलीवरी', '7-day easy returns': '7 दिन में आसान रिटर्न', '100% genuine products': '100% असली प्रोडक्ट',
    'Login': 'लॉगिन', 'Cart': 'कार्ट', 'Your cart': 'आपका कार्ट', 'Secure checkout': 'सुरक्षित चेकआउट', 'Easy returns': 'आसान रिटर्न', 'Genuine products': 'असली प्रोडक्ट',
    'Everyday things,': 'रोज़ की चीज़ें,', 'chosen with care.': 'पूरी परख के साथ चुनी हुई।',
    'Headphones, bags, lamps and more. Hand-picked, fairly priced and delivered to your door.': 'हेडफ़ोन, बैग, लैंप और बहुत कुछ। चुने हुए प्रोडक्ट, सही दाम, सीधे आपके दरवाज़े तक।',
    'Shop the collection': 'कलेक्शन देखें', 'Shop now': 'अभी खरीदें', 'In transit': 'रास्ते में', 'Delivered': 'डिलीवर हो गया', 'Cancelled': 'रद्द', 'Order Confirmed': 'ऑर्डर कन्फ़र्म', 'Shipped': 'शिप हो गया', 'Order status': 'ऑर्डर स्टेटस', 'Order details': 'ऑर्डर विवरण', 'Payment': 'पेमेंट', 'Payment method': 'पेमेंट का तरीका', 'Delivery address': 'डिलीवरी पता', 'Price details': 'कीमत विवरण', 'Cancel order': 'ऑर्डर रद्द करें', 'Cancel this order?': 'ऑर्डर रद्द करें?', 'Yes, cancel order': 'हाँ, रद्द करें', 'Keep order': 'ऑर्डर रखें', 'Cash on Delivery': 'कैश ऑन डिलीवरी', 'Online payment (Prepaid)': 'ऑनलाइन पेमेंट (प्रीपेड)', 'Prepaid': 'प्रीपेड', 'Place order': 'ऑर्डर करें', 'View order': 'ऑर्डर देखें', 'Delivery': 'डिलीवरी', 'Free': 'फ्री', 'No returns': 'रिटर्न नहीं', 'No replacement': 'रिप्लेसमेंट नहीं', 'Curated products': 'चुने हुए प्रोडक्ट', 'Average rating': 'औसत रेटिंग', '7 days': '7 दिन', 'Bestseller': 'बेस्टसेलर',
    'Free delivery': 'फ्री डिलीवरी', 'Above ₹999': '₹999 से ऊपर', '7-day returns': '7 दिन रिटर्न', 'No questions asked': 'कोई सवाल नहीं', 'Safe and private': 'सुरक्षित और प्राइवेट', 'Quality checked': 'क्वालिटी जाँची हुई',
    'All': 'सभी', 'Women': 'महिलाएँ', 'Men': 'पुरुष', 'Kids': 'बच्चे', 'All products': 'सभी प्रोडक्ट', 'Nothing matched your search': 'आपकी खोज से कुछ नहीं मिला', 'Show all products': 'सभी प्रोडक्ट दिखाएँ',
    '← Back to products': '← प्रोडक्ट पर वापस', 'Add to cart': 'कार्ट में डालें', 'You may also like': 'आपको ये भी पसंद आ सकते हैं', 'Free delivery above ₹999': '₹999 से ऊपर फ्री डिलीवरी',
    'Your cart is empty': 'आपका कार्ट खाली है', 'Add something you like and it will show up here.': 'अपनी पसंद की चीज़ जोड़ें, वो यहाँ दिखेगी।', 'Start shopping': 'खरीदारी शुरू करें', 'Subtotal': 'कुल', 'Checkout': 'चेकआउट', 'Remove': 'हटाएँ',
    'Login or sign up': 'लॉगिन या साइन अप', 'Enter your mobile number and we will send a 6-digit OTP.': 'अपना मोबाइल नंबर डालें, हम 6 अंकों का OTP भेजेंगे।', 'Mobile number': 'मोबाइल नंबर', 'Get OTP': 'OTP पाएँ', 'Cancel': 'रद्द करें',
    'Enter the OTP': 'OTP डालें', '6-digit OTP': '6 अंकों का OTP', 'Verify and login': 'जाँचें और लॉगिन करें', 'Change number': 'नंबर बदलें', 'Resend OTP': 'OTP दोबारा भेजें',
    'Order placed': 'ऑर्डर हो गया', 'Continue shopping': 'खरीदारी जारी रखें', 'Order number': 'ऑर्डर नंबर', 'Items': 'आइटम', 'Total': 'कुल योग', 'Deliver to': 'डिलीवरी पता',
    'My account': 'मेरा खाता', 'Orders': 'ऑर्डर', 'Favorites': 'पसंदीदा', 'Language': 'भाषा', 'Address': 'पता', 'Log out': 'लॉग आउट', 'Add': 'जोड़ें',
    'No orders yet': 'अभी कोई ऑर्डर नहीं', 'Your placed orders will show up here.': 'आपके ऑर्डर यहाँ दिखेंगे।', 'No favorites yet': 'अभी कोई पसंदीदा नहीं', 'Tap the heart on a product to save it here.': 'किसी प्रोडक्ट पर दिल दबाएँ, वो यहाँ सेव हो जाएगा।',
    'Choose your language': 'अपनी भाषा चुनें', 'Name': 'नाम', 'Pincode': 'पिनकोड', 'Landmark': 'लैंडमार्क', 'Landmark (optional)': 'लैंडमार्क (ज़रूरी नहीं)', 'No address added yet.': 'अभी कोई पता नहीं जोड़ा गया।',
    'Add address': 'पता जोड़ें', 'Change details': 'विवरण बदलें', 'Your delivery details': 'आपके डिलीवरी विवरण', 'We will use these to deliver your orders.': 'हम इनका उपयोग आपके ऑर्डर पहुँचाने में करेंगे।',
    'Save details': 'विवरण सेव करें', 'Fill later': 'बाद में भरें', 'Log out?': 'लॉग आउट करें?', 'You will need to login again with an OTP.': 'दोबारा OTP से लॉगिन करना होगा।', 'Yes, log out': 'हाँ, लॉग आउट करें', 'Stay logged in': 'लॉगिन रहने दें',
    'Save': 'सेव करें', 'Saved': 'सेव हो गया', 'item': 'आइटम', 'items': 'आइटम', 'Search kurti, shirts, jeans…': 'कुर्ती, शर्ट, जींस खोजें…',
    'Enter your full name.': 'अपना पूरा नाम डालें।', 'Enter a valid 10-digit mobile number.': 'सही 10 अंकों का मोबाइल नंबर डालें।', 'Enter your full address with house number, street and city.': 'मकान नंबर, गली और शहर के साथ पूरा पता डालें।', 'Enter a valid 6-digit pincode.': 'सही 6 अंकों का पिनकोड डालें।',
    'Optional. Helps the delivery person find you.': 'ज़रूरी नहीं। डिलीवरी वाले को आपको ढूँढने में मदद मिलती है।', 'Add your delivery address to place your order.': 'ऑर्डर करने के लिए अपना डिलीवरी पता जोड़ें।',
    'Currently unavailable': 'अभी उपलब्ध नहीं', 'Select address': 'पता चुनें', 'Add address': 'पता जोड़ें', 'Edit address': 'पता बदलें', 'Addresses': 'पते', 'Order summary': 'ऑर्डर समरी', 'Confirm': 'कन्फ़र्म करें', 'Confirm address': 'पता कन्फ़र्म करें', '+ Add new address': '+ नया पता जोड़ें', 'Shipping': 'शिपिंग', 'Edit': 'बदलें', 'Delete': 'हटाएँ', 'Save address': 'पता सेव करें', 'Change address': 'पता बदलें', 'Order date': 'ऑर्डर की तारीख', 'Expected delivery': 'डिलीवरी की तारीख', 'Delivery by': 'डिलीवरी तक', 'Out of stock': 'स्टॉक खत्म', 'Select size': 'साइज़ चुनें', 'Please choose a size': 'कृपया साइज़ चुनें', 'Confirmed': 'कन्फ़र्म', 'Rejected': 'अस्वीकृत', 'State': 'राज्य', 'Select state': 'राज्य चुनें', 'Select your state.': 'अपना राज्य चुनें।', 'Login successful': 'लॉगिन हो गया', 'Details saved': 'विवरण सेव हो गए', 'Saved to favorites': 'पसंदीदा में सेव किया', 'Removed from favorites': 'पसंदीदा से हटाया', 'Login to save favorites': 'पसंदीदा सेव करने के लिए लॉगिन करें', 'You have been logged out': 'आप लॉग आउट हो गए'
  };
  const ORIG = new WeakMap();
  let langObs, langPend = false;
  function applyLang() {
    if (langObs) langObs.disconnect();
    const hi = S.lang === 'hi';
    const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, { acceptNode: n => /^(SCRIPT|STYLE)$/.test(n.parentNode.nodeName) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT });
    let n;
    while ((n = w.nextNode())) {
      let o = ORIG.get(n); if (o === undefined) { o = n.nodeValue; ORIG.set(n, o); }
      const k = o.trim(), nv = hi && HI[k] ? o.replace(k, HI[k]) : o;
      if (n.nodeValue !== nv) n.nodeValue = nv;
    }
    const q = $('#q'); if (!q.dataset.en) q.dataset.en = q.placeholder;
    q.placeholder = hi ? (HI[q.dataset.en] || q.dataset.en) : q.dataset.en;
    if (langObs) langObs.observe(document.body, { childList: true, subtree: true, characterData: true });
  }
  langObs = new MutationObserver(() => { if (S.lang === 'hi' && !langPend) { langPend = true; requestAnimationFrame(() => { langPend = false; applyLang(); }); } });
  function setLang(l) {
    S.lang = l === 'hi' ? 'hi' : 'en'; save();
    document.documentElement.lang = S.lang;
    if (PAGES.includes(S.view)) render();
    applyLang();
  }

  const actions = {
    home: () => { showHome(true); jumpTop(); },
    'desc-more': () => { S.dx = !S.dx; renderDetail(); },
    'gal-prev': () => galGo(Math.max(0, S.gi - 1)),
    'gal-next': () => galGo(S.gi + 1),
    'gal-go': t => galGo(Number(t.dataset.i)),
    'best-go': t => best && best.go(Number(t.dataset.i)),
    'hero-go': () => { const c = document.getElementById('collection'); if (c) c.scrollIntoView(); },
    shop: () => { closeCart(); showHome(false); jumpTop(); },
    back: () => backStep(),
    pback: () => pageBack(),
    goto: t => { S.pend = null; go(t.dataset.to); },
    open: t => openProduct(t.dataset.id),
    'open-cart': t => { closeCart(); openProduct(t.dataset.id); },
    cat: t => { S.cat = t.dataset.cat; renderHome(); },
    'dq+': () => { const k = curKey(), c = k ? qtyOf(k) : 0; if (c) return setQty(k, c + 1); S.dq = Math.min(Math.max(1, curLim()), S.dq + 1); renderDetail(); },
    'dq-': () => { const k = curKey(), c = k ? qtyOf(k) : 0; if (c) return setQty(k, c - 1); S.dq = Math.max(1, S.dq - 1); renderDetail(); },
    add: () => {
      const p = byId(S.id); if (hasSizes(p) && !S.sz) { S.szWarn = true; renderDetail(); toast('Please select a size'); return; } const k = curKey(), before = qtyOf(k);
      if (before) return openCart();
      const n = Math.min(curLim(), S.dq); if (n < 1) { toast('Out of stock'); return; }
      setQty(k, n);
      toast(n === S.dq ? `Added ${S.dq} × ${p.name}${S.sz ? ' (' + S.sz + ')' : ''}` : `Only ${curLim()} available`);
    },
    inc: t => setQty(t.dataset.k, qtyOf(t.dataset.k) + 1),
    dec: t => setQty(t.dataset.k, qtyOf(t.dataset.k) - 1),
    rm: t => { const p = byId(t.dataset.k); setQty(t.dataset.k, 0); toast(`Removed ${p.name}`); },
    size: t => { const pp = byId(S.id); if (pp && leftSize(pp, t.dataset.s) === 0) return; S.sz = t.dataset.s; S.szWarn = false; S.dq = Math.max(1, Math.min(S.dq, curLim())); renderDetail(); },
    'cart-open': openCart,
    'cart-close': closeCart,
    checkout: () => checkout(),
    'buy-now': () => { const p = byId(S.id); if (hasSizes(p) && !S.sz) { S.szWarn = true; renderDetail(); toast('Please select a size'); return; } checkout({ id: S.id, size: S.sz || '', qty: qtyOf(curKey()) || S.dq }); },
    account: () => { if (!S.user) return openLogin(); go('account'); },
    lang: t => setLang(t.dataset.l),
    fav: t => toggleFav(t.dataset.id),
    logout: () => { lg = { step: 'logout' }; renderModal(); modal.hidden = false; },
    'order-open': t => { S.oid = t.dataset.id; go('order'); },
    'order-view': t => { closeModal(); S.oid = t.dataset.id; go('order'); },
    anew: () => { S.af = { id: null }; if (S.view === 'chk' && S.ck) { S.ck.step = 'form'; render(); page.scrollTop = 0; } else go('aform'); },
    aedit: t => { S.af = { id: t.dataset.id }; if (S.view === 'chk' && S.ck) { S.ck.step = 'form'; render(); page.scrollTop = 0; } else go('aform'); },
    adel: t => {
      const u = U(), id = t.dataset.id, ad = u.addrs.find(x => x.id === id); if (!ad) return;
      const line = [ad.addr, ad.area, ad.city, ad.state].filter(Boolean).join(', ') + (ad.pin ? ' - ' + ad.pin : '');
      askConfirm({ icon: IC.trash, danger: true, title: 'Delete this address?', text: 'It will be removed from your saved addresses. This cannot be undone.',
        extra: `<div class="cfm-card"><b>${esc(ad.name || '')}</b><span>${esc(line)}</span>${ad.phone ? `<span>+91 ${esc(ad.phone)}</span>` : ''}</div>`, yes: 'Yes, delete', no: 'Keep address' }, () => {
        u.addrs = u.addrs.filter(x => x.id !== id);
        if (u.addrs.length) syncProf(); else u.profile = null; // aakhri address hatao to wapas na aaye
        if (S.ck && S.ck.sel === id) S.ck.sel = u.addrs[0] ? u.addrs[0].id : null;
        save(); renderAcct(); render(); toast('Address deleted');
      });
    },
    'ck-sel': t => { if (S.ck) { S.ck.sel = t.dataset.id; render(); } },
    'ck-confirm': () => { const ck = S.ck; if (!ck || !ckAddr()) return; ck.dAt = ck.dAt || Date.now() + rndDays() * DAY; ck.step = 'sum'; render(); page.scrollTop = 0; },
    'ck-change': () => { if (S.ck) { S.ck.step = 'addr'; render(); page.scrollTop = 0; } },
    'ck-next': () => { const ck = S.ck; if (!ck) return; ck.oid = ck.oid || genOid(); ck.step = 'pay'; ck.pay = 'cod'; render(); page.scrollTop = 0; },
    'ck-q': t => { const ck = S.ck, k = t.dataset.k, d = Number(t.dataset.d), x = lparse(k), p = byId(x.id); if (!ck || !p) return; if (ck.only) ck.only.qty = Math.max(1, Math.min(limOf(p, x.size), ck.only.qty + d)); else { const n = qtyOf(k) + d; if (n < 1) return; setQty(k, n); } render(); },
    'ck-rm': t => { const ck = S.ck; if (!ck || ck.only || Object.keys(S.cart).length < 2) return; setQty(t.dataset.k, 0); render(); },
    'pay-cod': () => { const ck = S.ck; if (!ck || ck.busy || FBS.cod === false) return; ck.pay = 'cod'; render(); },
    'pay-online': () => { const ck = S.ck; if (!ck || ck.busy || !prepaidOn()) return; ck.pay = 'online'; render(); },
    'pay-place': () => { const ck = S.ck; if (!ck || ck.busy || !ck.pay) return; const el = $('#utr'); placeOrder(ck.pay, ck.pay === 'online' && el ? el.value.replace(/\D/g, '') : ''); },
    'upi-copy': () => { const done = () => toast('UPI ID copied'); try { navigator.clipboard.writeText(FBS.upi).then(done, () => toast(FBS.upi)); } catch (e) { toast(FBS.upi); } },
    'cancel-ask': () => { lg = { step: 'cancel' }; renderModal(); modal.hidden = false; },
    'cancel-yes': async () => {
      const o = S.user && U().orders.find(x => x.id === S.oid);
      if (o) syncOrder(o);
      if (o && o.st === 'placed') {
        o.st = 'cancelled'; o.t.cancelled = Date.now(); save(); toast('Order cancelled');
        fbSend('PATCH', 'orders/' + o.id, { cancelReq: Date.now() }).catch(() => {});
      }
      closeModal(); if (PAGES.includes(S.view)) render();
    },
    'logout-yes': () => { S.user = null; S.sec = null; save(); renderAcct(); closeMenu(); closeModal(); showHome(true); jumpTop(); toast('You have been logged out'); },
    'modal-close': closeModal,
    'cfm-yes': () => { const fn = lg && lg.fn; closeModal(); if (fn) fn(); },
    'op-copy': t => { const id = t.dataset.id, ok = () => toast('Order number copied'); try { navigator.clipboard.writeText(id).then(ok, () => toast(id)); } catch (e) { toast(id); } },
    'change-num': () => { lg.step = 'phone'; lg.err = ''; renderModal(); },
    resend: () => { sendOtp(); toast('A new OTP has been generated'); }
  };
  document.addEventListener('click', e => {
    const t = e.target.closest('[data-act]');
    if (t && actions[t.dataset.act]) { actions[t.dataset.act](t, e); return; }
    if (!e.target.closest('.rel')) closeMenu();
    if (e.target === modal) closeModal();
  });
  document.addEventListener('keydown', e => {
    if ((e.key === 'Enter' || e.key === ' ') && e.target.matches && e.target.matches('.card')) { e.preventDefault(); openProduct(e.target.dataset.id); }
    if (e.key === 'Escape') { if (!modal.hidden) closeModal(); else if (drawer.classList.contains('open')) closeCart(); else if (!page.hidden) pageBack(); else closeMenu(); }
  });
  document.addEventListener('input', e => {
    const t = e.target;
    if (['phone', 'otp', 'pphone', 'ppin', 'utr'].includes(t.id)) t.value = t.value.replace(/\D/g, '');
    if (AV[t.id] && t.dataset.t) showFE(t.id);
    if (t.id === 'ppin') {
      if (t.value.length === 6) { if (PL.pin !== t.value) lookupPin(t.value); }
      else { plSeq++; PL = { pin: '', status: null, offices: [], district: '', state: '' }; paintPin(); }
    }
  });
  document.addEventListener('focusout', e => { const t = e.target; if (t && AV[t.id]) { t.dataset.t = '1'; showFE(t.id); } });
  document.addEventListener('submit', e => {
    e.preventDefault();
    const id = e.target.id;
    if (id === 'searchForm') { return; }
    if (id === 'fPhone') {
      const v = $('#phone').value.replace(/\D/g, '');
      lg.phone = v;
      if (!/^[6-9]\d{9}$/.test(v)) { lg.err = 'Enter a valid 10-digit mobile number starting with 6, 7, 8 or 9.'; $('#err').textContent = lg.err; $('#phone').focus(); return; }
      sendOtp();
    }
    if (id === 'fAddr') {
      const v = k => $('#' + k).value.trim();
      let first = null;
      ['pname', 'pphone', 'paddr', 'ppin'].forEach(k => { const m = showFE(k); if (m && !first) first = k; });
      const name = v('pname'), ph = v('pphone').replace(/\D/g, ''), addr = v('paddr'), pin = v('ppin').replace(/\D/g, ''), lm = v('plm'), state = v('pstate'), err = $('#err');
      err.textContent = '';
      if (!first) {
        if (PL.pin !== pin) { lookupPin(pin); err.textContent = 'Checking pincode… please tap Save address again.'; return; }
        if (PL.status === 'wait') { err.textContent = 'Checking pincode… please wait a moment.'; return; }
        if (PL.status === 'bad') { $('#e_ppin').textContent = 'Pincode not found. Please enter a valid pincode'; $('#ppin').classList.add('bad'); first = 'ppin'; }
        else if (!state) { err.textContent = 'Select your state.'; $('#pstate').focus(); return; }
      }
      if (first) { $('#' + first).focus(); return; }
      const area = PL.status === 'ok' ? ($('#parea') ? $('#parea').value : '') : '', city = PL.status === 'ok' ? PL.district : '';
      const u = U(), eid = S.af && S.af.id;
      let a = eid ? u.addrs.find(x => x.id === eid) : null;
      if (a) Object.assign(a, { name, phone: ph, addr, pin, lm, state, area, city });
      else { a = { id: 'a' + Date.now().toString(36) + Math.random().toString(36).slice(2, 5), name, phone: ph, addr, pin, lm, state, area, city }; u.addrs.unshift(a); }
      syncProf(); save(); renderAcct(); S.af = null;
      toast('Details saved');
      if (S.view === 'chk' && S.ck) { S.ck.sel = a.id; S.ck.step = 'addr'; render(); page.scrollTop = 0; } else backStep();
    }
    if (id === 'fOtp') {
      const v = $('#otp').value;
      if (v !== lg.sent) { lg.err = 'That OTP does not match. Check the code and try again.'; $('#err').textContent = lg.err; $('#otp').focus(); return; }
      S.user = lg.phone; U(); save(); renderAcct();
      const after = lg.after, only = lg.only;
      toast('Login successful');
      closeModal();
      if (after === 'checkout') checkout(only);
    }
  });
  $('#searchForm').addEventListener('input', e => {
    if (e.target.id !== 'q') return;
    S.q = e.target.value; S.view = 'home'; renderHome();
  });


  /* ---- Firebase link: admin.html controls products, stock, settings and order status ---- */
  const FB_URL = 'https://thakur-premium-collection-default-rtdb.asia-southeast1.firebasedatabase.app';
  const fbSend = async (m, p, body) => {
    const r = await fetch(FB_URL + '/' + p + '.json', { method: m, headers: body === undefined ? undefined : { 'Content-Type': 'application/json' }, body: body === undefined ? undefined : JSON.stringify(body) });
    if (!r.ok) throw new Error('DB ' + r.status);
    return r.json();
  };
  const CK = 'tpc.cache', OB = 'tpc.outbox';
  let cache = {}; try { cache = JSON.parse(localStorage.getItem(CK) || '{}') || {}; } catch (e) {}
  let sig = '';
  function maint() {
    let m = document.getElementById('maint');
    if (FBS.open !== false) { if (m) m.remove(); return; }
    if (!m) { m = document.createElement('div'); m.id = 'maint'; m.style.cssText = 'position:fixed;inset:0;z-index:500;background:#fff;display:grid;place-items:center;text-align:center;padding:2rem'; document.body.appendChild(m); }
    m.innerHTML = '<div style="max-width:22rem"><div style="font-size:3rem">🛠️</div><h2 style="font-family:var(--serif);font-size:1.9rem;margin:.6rem 0">We will be back soon</h2><p style="color:#6B7280">' + esc(FBS.maintMsg || 'The store is under maintenance right now. Please visit again in a little while.') + '</p></div>';
  }
  function applyCloud(d) {
    const s = String(d.ver || '') + JSON.stringify(d.settings || {}) + JSON.stringify(d.sold || {});
    if (s === sig) return false; sig = s;
    if (d.products && typeof d.products === 'object') {
      const arr = Object.values(d.products).filter(p => p && p.name && p.price > 0)
        .map(p => Object.assign({ h: 220, ship: 0, rating: 4.5, count: 0, pts: [], desc: '' }, p, { id: Number(p.id), mrp: p.mrp || p.price }))
        .sort((a, b) => b.id - a.id);
      if (arr.length) { PRODUCTS.length = 0; PRODUCTS.push(...arr); }
    }
    if (d.settings && typeof d.settings === 'object') Object.assign(FBS, d.settings);
    { const b = d.brand && typeof d.brand === 'object' ? d.brand : {}; BRAND = b.name || B0.n; TAGLINE = b.tagline || B0.t; LOGO = b.logo || B0.l; document.title = BRAND;
      $('#brandBtn').innerHTML = `${logoHTML()}<span class="bn">${esc(BRAND)}</span>`; $('#footBrand').innerHTML = `${logoHTML()}<span class="bn">${esc(BRAND)}</span>`; $('#footTag').textContent = TAGLINE; }
    Object.keys(SOLD).forEach(k => delete SOLD[k]);
    if (d.sold && typeof d.sold === 'object') Object.keys(d.sold).forEach(k => { if (d.sold[k]) SOLD[k] = Number(d.sold[k]) || 0; });
    for (const k of Object.keys(S.cart)) { const x = lparse(k), p = byId(x.id); if (!p || (x.size ? !sizesOf(p).some(z => z.n === x.size) : hasSizes(p))) delete S.cart[k]; }
    setCats(); if (S.cat !== 'All' && !CATS.includes(S.cat)) S.cat = 'All';
    maint(); return true;
  }
  function repaint() {
    if (modal && !modal.hidden) return;
    if (S.view === 'detail') { if (byId(S.id)) renderDetail(); else showHome(false); }
    else if (S.view === 'home') renderHome();
    renderCart();
  }
  const outbox = () => { try { return JSON.parse(localStorage.getItem(OB) || '[]'); } catch (e) { return []; } };
  async function pushOrder(o) {
    if (await fbSend('GET', 'orders/' + o.id)) return;
    await fbSend('PUT', 'orders/' + o.id, o);
    for (const l of o.lines || []) { try { await fbSend('PUT', 'sold/' + (l.size ? l.id + '_' + l.size : l.id), { '.sv': { increment: l.qty | 0 } }); } catch (e) {} }
  }
  async function flush() {
    const q = outbox(); if (!q.length) return;
    const left = [];
    for (const o of q) { try { await pushOrder(o); } catch (e) { left.push(o); } }
    try { localStorage.setItem(OB, JSON.stringify(left)); } catch (e) {}
  }
  function sendOrder(o) { try { localStorage.setItem(OB, JSON.stringify([...outbox(), o])); } catch (e) {} flush(); }
  async function pullOrders() {
    let ch = false;
    const jobs = [];
    Object.values(S.users).forEach(u => (u.orders || []).forEach(o => { if (!o.synced && o.st !== 'cancelled') jobs.push(o); }));
    for (const o of jobs.slice(0, 20)) {
      let r = null; try { r = await fbSend('GET', 'orders/' + o.id); } catch (e) {}
      if (!r || !r.st) continue;
      if (r.st !== o.st || r.reason !== o.reason || r.payStatus !== o.payStatus) { o.st = r.st; o.t = Object.assign({}, o.t, r.t || {}); o.reason = r.reason; o.payStatus = r.payStatus; ch = true; }
      if (r.st === 'delivered' || r.st === 'rejected') o.synced = true;
    }
    if (ch) { save(); if (PAGES.includes(S.view) && S.view !== 'chk') render(); }
  }
  async function pull() {
    try {
      await flush();
      const [settings, soldN, ver] = await Promise.all([fbSend('GET', 'settings'), fbSend('GET', 'sold'), fbSend('GET', 'ver')]);
      let products = cache.products, brand = cache.brand;
      if (!products || ver !== cache.ver) { products = await fbSend('GET', 'products'); brand = await fbSend('GET', 'brand'); }
      cache = { products, brand, settings, sold: soldN, ver };
      try { localStorage.setItem(CK, JSON.stringify(cache)); } catch (e) {}
      if (applyCloud(cache)) repaint();
      await pullOrders();
    } catch (e) {}
  }
  applyCloud(cache);
  setInterval(pull, 8000);
  document.addEventListener('visibilitychange', () => { if (!document.hidden) pull(); });
  setTimeout(pull, 50);

  renderAcct(); renderCart(); renderHome();
  document.documentElement.lang = S.lang; applyLang();

})();