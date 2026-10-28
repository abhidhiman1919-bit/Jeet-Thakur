/* fast.js — shared speed helpers for the Control Panel AND the store.
   Idea: product list only carries a tiny thumbnail; big photos live in /pimgs and load when needed.
   Products are cached in the browser so the next visit opens instantly. */
(function(){
const FB='https://thakur-premium-collection-default-rtdb.asia-southeast1.firebasedatabase.app';
const url=p=>FB+'/'+String(p).split('/').filter(Boolean).join('/')+'.json';
async function rest(m,p,b){const r=await fetch(url(p),{method:m,headers:b===undefined?undefined:{'Content-Type':'application/json'},body:b===undefined?undefined:JSON.stringify(b)});if(!r.ok)throw new Error('Database error '+r.status);return r.json()}
const idb=()=>new Promise((res,rej)=>{const r=indexedDB.open('fastcache',1);r.onupgradeneeded=()=>r.result.createObjectStore('k');r.onsuccess=()=>res(r.result);r.onerror=()=>rej(r.error)});
const cget=async k=>{try{const d=await idb();return await new Promise(res=>{const q=d.transaction('k').objectStore('k').get(k);q.onsuccess=()=>res(q.result);q.onerror=()=>res(null)})}catch(e){return null}};
const cset=async(k,v)=>{try{const d=await idb();d.transaction('k','readwrite').objectStore('k').put(v,k)}catch(e){}};
function shrink(src,max,q){return new Promise((res,rej)=>{const im=new Image();im.onload=()=>{const s=Math.min(1,max/Math.max(im.width,im.height)),c=document.createElement('canvas');c.width=Math.max(1,Math.round(im.width*s));c.height=Math.max(1,Math.round(im.height*s));c.getContext('2d').drawImage(im,0,0,c.width,c.height);res(c.toDataURL('image/jpeg',q))};im.onerror=()=>rej(new Error('Image failed'));im.src=src})}
const memo={};
window.FAST={
  rest,cget,cset,
  thumb:src=>shrink(src,320,.62),
  full:src=>shrink(src,800,.7),
  /* Opens instantly from cache (cb is called at once with cached products), then refreshes only if the admin changed something. */
  async loadProducts(cb){
    const c=await cget('products');
    if(c&&c.p&&cb)cb(c.p,true);
    let v=null;try{v=await rest('GET','ver')}catch(e){if(c&&c.p)return c.p;throw e}
    if(c&&c.p&&c.v===v)return c.p;
    const p=(await rest('GET','products'))||{};cset('products',{v,p});if(cb)cb(p,false);return p;
  },
  /* Big photos of one product (fetched only when the product is opened). */
  async fullImgs(p){
    if(p&&p.imgRef){const k=p.imgRef;if(!memo[k])memo[k]=rest('GET','pimgs/p'+k).catch(()=>null);const a=await memo[k];if(a&&(a.length||Object.keys(a).length))return Array.isArray(a)?a:Object.values(a)}
    return p&&p.imgs&&p.imgs.length?p.imgs:(p&&p.img?[p.img]:[]);
  }
};
})();
