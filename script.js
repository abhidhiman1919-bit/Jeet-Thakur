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
  let BRAND = 'Your Store Name';
  let TAGLINE = 'Premium fashion for every occasion.';
  let LOGO = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAQDAwMDAgQDAwMEBAQFBgoGBgUFBgwICQcKDgwPDg4MDQ0PERYTDxAVEQ0NExoTFRcYGRkZDxIbHRsYHRYYGRj/2wBDAQQEBAYFBgsGBgsYEA0QGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBj/wAARCAH0AfQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD7xtLW1+wQf6ND/q1/gHpU/wBktf8An2h/79ii0/48IP8Armv8qmoAh+yWv/PtD/37FH2S1/59of8Av2KmooAh+yWv/PtD/wB+xR9ktf8An2h/79ipqKAIfslr/wA+0P8A37FH2S1/59of+/YqaigCH7Ja/wDPtD/37FH2S1/59of+/YqaigCH7Ja/8+0P/fsUfZLX/n2h/wC/YqaigCH7Ja/8+0P/AH7FH2S1/wCfaH/v2KmooAh+yWv/AD7Q/wDfsUfZLX/n2h/79ipqKAIfslr/AM+0P/fsUfZLX/n2h/79ipqKAIfslr/z7Q/9+xR9ktf+faH/AL9ipqKAIfslr/z7Q/8AfsUfZLX/AJ9of+/YqaigCH7Ja/8APtD/AN+xR9ktf+faH/v2KmooAh+yWv8Az7Q/9+xR9ktf+faH/v2KmooAh+yWv/PtD/37FH2S1/59of8Av2KmooAh+yWv/PtD/wB+xR9ktf8An2h/79ipqKAIfslr/wA+0P8A37FH2S1/59of+/YqaigCH7Ja/wDPtD/37FH2S1/59of+/YqaigCH7Ja/8+0P/fsUfZLX/n2h/wC/YqaigCH7Ja/8+0P/AH7FH2S1/wCfaH/v2KmooAh+yWv/AD7Q/wDfsUfZLX/n2h/79ipqKAIfslr/AM+0P/fsUfZLX/n2h/79ipqKAIfslr/z7Q/9+xR9ktf+faH/AL9ipqKAIfslr/z7Q/8AfsUfZLX/AJ9of+/YqaigCH7Ja/8APtD/AN+xR9ktf+faH/v2KmooAh+yWv8Az7Q/9+xR9ktf+faH/v2KmooAh+yWv/PtD/37FH2S1/59of8Av2KmooAh+yWv/PtD/wB+xR9ktf8An2h/79ipqKAIfslr/wA+0P8A37FH2S1/59of+/YqaigCH7Ja/wDPtD/37FH2S1/59of+/YqaigCH7Ja/8+0P/fsUfZLX/n2h/wC/YqaigCH7Ja/8+0P/AH7FH2S1/wCfaH/v2KmooAwdVtrUXq/6ND9wfwD1NFS6t/x+r/uD+ZooA07T/jwg/wCua/yqaobT/jwg/wCua/yqagAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigDG1b/j9X/cH8zRRq3/AB+r/uD+ZooA07T/AI8IP+ua/wAqmqG0/wCPCD/rmv8AKpqACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAMbVv+P1f9wfzNFGrf8fq/wC4P5migDTtP+PCD/rmv8qmqG0/48IP+ua/yqagAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAoor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MAON7cn8gBXg/wASfGNv4M8NMySK2qXW6K0iP05cj0H8+K7bx14t0/w9pd74m12YKGdnCZw0znkIue/T6DmuG+FHwH8TfG/xiPiL8SIp9M8Mv80Fnykl4gPCIDykfq3BbtX0WHnTwWHTquyS+bZ+WYHAVs+zGeMkvc5vy2Xoct+zv+z9qPxa8Sf8JV4oSePwnBMXllbhtSlDZaJfVc5DMOOoFfopZ2ltY2ENpZQRW8EKCKOGIYWNQMBQOwFR6Tpen6LpNvpOlWcFpZW0Yjht4F2pGo6AAdqvbVznFfJ5hmE8bU55aJbLsfreFwscPDlieDfGDwnqnjbxpD4P0mUwPq8KRXdwBk21oGPnP9SCEX1LjtmvadE0fT9C8P2WjaVbLbWNnCtvBAgACIoAA/SrP2K0W8a6WBBO6hGkA5KjOAT6cmp1AAwKxrYiVWMYPaJjgcvhhJVJR3nJyfzFHAooornPQCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigDG1b/j9X/cH8zRRq3/AB+r/uD+ZooA07T/AI8IP+ua/wAqmqG0/wCPCD/rmv8AKpqACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAEIyMVR/sXSWuGnfS7NpWO4u0KlifXOKv0U02thOKe41Io412xxqg9FGKdgDoKKKQwwPSgADpRRQAV578UtZay8Ox6ZbW1zeXd7JtS0tkMksoHOAB74GSQOa9CqMwRmXzTGhcDAfHIHpmtKU/ZzU7XscmOw31qhKheylo2u3X79j568Hfs+y634og8a/F1oL+6gYNp/huI+ZZ2AzkGQ/8tpOASfujtnrX0LHHGiBURVVRgADAAqTA9KKrEYipXlzVHcrCYSlhKapUY2igAA6CiiisTpCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAMbVv8Aj9X/AHB/M0Uat/x+r/uD+ZooA07T/jwg/wCua/yqaobT/jwg/wCua/yqagAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigDG1b/j9X/cH8zRRq3/AB+r/uD+ZooA07T/AI8IP+ua/wAqmqG0/wCPCD/rmv8AKpqACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAMbVv+P1f9wfzNFGrf8fq/wC4P5migDTtP+PCD/rmv8qmqG0/48IP+ua/yqagAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigDG1b/j9X/cH8zRRq3/H6v+4P5migCC11e5FhB+7i/wBWvY+g96l/tm6/55w/kf8AGiigA/tm6/55w/kf8aP7Zuv+ecP5H/GiigA/tm6/55w/kf8AGj+2br/nnD+R/wAaKKAD+2br/nnD+R/xo/tm6/55w/kf8aKKAD+2br/nnD+R/wAaP7Zuv+ecP5H/ABoooAP7Zuv+ecP5H/Gj+2br/nnD+R/xoooAP7Zuv+ecP5H/ABo/tm6/55w/kf8AGiigA/tm6/55w/kf8aP7Zuv+ecP5H/GiigA/tm6/55w/kf8AGj+2br/nnD+R/wAaKKAD+2br/nnD+R/xo/tm6/55w/kf8aKKAD+2br/nnD+R/wAaP7Zuv+ecP5H/ABoooAP7Zuv+ecP5H/Gj+2br/nnD+R/xoooAP7Zuv+ecP5H/ABo/tm6/55w/kf8AGiigA/tm6/55w/kf8aP7Zuv+ecP5H/GiigA/tm6/55w/kf8AGj+2br/nnD+R/wAaKKAD+2br/nnD+R/xo/tm6/55w/kf8aKKAD+2br/nnD+R/wAaP7Zuv+ecP5H/ABoooAP7Zuv+ecP5H/Gj+2br/nnD+R/xoooAP7Zuv+ecP5H/ABo/tm6/55w/kf8AGiigA/tm6/55w/kf8aP7Zuv+ecP5H/GiigA/tm6/55w/kf8AGj+2br/nnD+R/wAaKKAD+2br/nnD+R/xo/tm6/55w/kf8aKKAD+2br/nnD+R/wAaP7Zuv+ecP5H/ABoooAP7Zuv+ecP5H/Gj+2br/nnD+R/xoooAP7Zuv+ecP5H/ABo/tm6/55w/kf8AGiigA/tm6/55w/kf8aP7Zuv+ecP5H/GiigA/tm6/55w/kf8AGj+2br/nnD+R/wAaKKAD+2br/nnD+R/xo/tm6/55w/kf8aKKAD+2br/nnD+R/wAaP7Zuv+ecP5H/ABoooAP7Zuv+ecP5H/Gj+2br/nnD+R/xoooAP7Zuv+ecP5H/ABo/tm6/55w/kf8AGiigDH1XWLn7Yv7uH7g7H1PvRRRQB//Z';
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
  /* Bestseller banner is big, so it shows the full-quality photo (loaded in the background, swapped in when ready). */
  const BIG = {};
  function upgradeBest() {
    if (!window.FAST) return;
    bestList().forEach(p => {
      if (BIG[p.id]) return;
      FAST.fullImgs(p).then(a => {
        const u = a && a[0]; if (!u || u === p.img) return;
        BIG[p.id] = u;
        const el = document.querySelector('.bs[data-id="' + p.id + '"] .shot'); if (el) el.src = u;
      }).catch(() => {});
    });
  }
  const bslide = p => `<button class="bs" style="--h:${p.h}" data-act="open" data-id="${p.id}" aria-label="${esc(p.name)}, ${INR(p.price)}">
      <span class="bt"><span class="bl">Bestseller</span><span class="bh">${esc(shortName(p.name))}</span><span class="bp"><b>${INR(p.price)}</b><s>${INR(p.mrp)}</s><em>${off(p)}% off</em></span><span class="bcta">Shop now</span></span>
      <span class="bi"><span class="ph">${art(BIG[p.id] ? Object.assign({}, p, { img: BIG[p.id] }) : p, false, true)}</span></span>
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
    const key = S.cat + '|' + q; if (key !== S.lk) { S.lk = key; S.lim = 24; }
    const lim = S.lim || 24, hero = !S.q.trim() ? heroHTML() : '';
    const title = S.q.trim() ? `Results for “${esc(S.q.trim())}”` : (S.cat === 'All' ? 'All products' : S.cat);
    main.innerHTML = `
      ${hero}<div class="wrap" id="collection">
        <nav class="chips" aria-label="Categories">${CATS.map(c => `<button class="chip" data-act="cat" data-cat="${c}" aria-pressed="${c === S.cat}">${c}</button>`).join('')}</nav>
        <div class="head"><h2>${title}</h2><span>${list.length} ${list.length === 1 ? 'product' : 'products'}</span></div>
        ${list.length ? `<div class="grid" id="hgrid">${list.slice(0, lim).map(card).join('')}</div>${list.length > lim ? '<div id="sent" style="height:1px"></div>' : ''}` : `
          <div class="empty"><h3>Nothing matched your search</h3><p>Try a shorter word like “shirt” or “kurti”, or browse all products.</p><button class="btn" data-act="home">Show all products</button></div>`}
      </div>`;
    initBest(); upgradeBest();
    const g = document.getElementById('hgrid'), se = document.getElementById('sent');
    if (g && se && 'IntersectionObserver' in window) {
      let shown = lim;
      const io = new IntersectionObserver(es => {
        if (!es[0].isIntersecting) return;
        g.insertAdjacentHTML('beforeend', list.slice(shown, shown + 24).map(card).join('')); shown += 24; S.lim = shown;
        if (shown >= list.length) { io.disconnect(); se.remove(); } else { io.unobserve(se); io.observe(se); }
      }, { rootMargin: '900px' });
      io.observe(se);
    } else if (g) g.innerHTML = list.map(card).join('');
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
  const FULL = {};
  const galleryHTML = p => {
    const ref = p.imgRef;
    if (ref && FULL[ref] === undefined && window.FAST) {
      FULL[ref] = 0;
      FAST.fullImgs(p).then(a => { FULL[ref] = a; if (S.view === 'detail' && S.id === p.id && !(modal && !modal.hidden)) renderDetail(); }).catch(() => { FULL[ref] = undefined; });
    }
    const fl = ref && Array.isArray(FULL[ref]) && FULL[ref].length ? FULL[ref] : null;
    const list = fl || (ref ? [p.img] : p.imgs && p.imgs.length ? p.imgs : [p.img, ...[2, 3, 4, 5].map(n => p.img.replace(/(\.\w+)$/, `-${n}$1`))]);
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
    const ctl = new AbortController(), to = setTimeout(() => ctl.abort(), 30000);
    try {
      const r = await fetch(FB_URL + '/' + p + '.json', { method: m, signal: ctl.signal, headers: body === undefined ? undefined : { 'Content-Type': 'application/json' }, body: body === undefined ? undefined : JSON.stringify(body) });
      if (!r.ok) throw new Error('DB ' + r.status);
      return await r.json();
    } finally { clearTimeout(to); }
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
    await Promise.all(jobs.slice(0, 20).map(async o => {
      let r = null; try { r = await fbSend('GET', 'orders/' + o.id); } catch (e) {}
      if (!r || !r.st) return;
      if (r.st !== o.st || r.reason !== o.reason || r.payStatus !== o.payStatus) { o.st = r.st; o.t = Object.assign({}, o.t, r.t || {}); o.reason = r.reason; o.payStatus = r.payStatus; ch = true; }
      if (r.st === 'delivered' || r.st === 'rejected') o.synced = true;
    }));
    if (ch) { save(); if (PAGES.includes(S.view) && S.view !== 'chk') render(); }
  }
  let pulling = false, lastOrd = 0;
  let again = false;
  async function pull() {
    if (pulling) { again = true; return; } pulling = true;   /* never run two pulls at once (old code piled up big downloads) */
    try {
      await flush();
      const [settings, soldN, ver] = await Promise.all([fbSend('GET', 'settings'), fbSend('GET', 'sold'), fbSend('GET', 'ver')]);
      let products = cache.products, brand = cache.brand, pv = cache.pv;
      if (!products || ver !== pv) {
        [products, brand] = await Promise.all([fbSend('GET', 'products'), fbSend('GET', 'brand')]);
        pv = ver; if (window.FAST) FAST.cset('products', { v: ver, p: products });
      }
      cache = { products, brand, settings, sold: soldN, ver, pv };
      try { localStorage.setItem(CK, JSON.stringify({ brand, settings, sold: soldN, ver, pv })); } catch (e) {}
      if (applyCloud(cache)) repaint();
      if (Date.now() - lastOrd > 30000) { lastOrd = Date.now(); pullOrders(); }
    } catch (e) {} finally { pulling = false; if (again) { again = false; setTimeout(pull, 0); } }
  }
  const boot = () => { applyCloud(cache); renderAcct(); renderCart(); renderHome(); document.documentElement.lang = S.lang; applyLang(); setTimeout(pull, 50); };
  setInterval(() => { if (!document.hidden) pull(); }, 15000);
  /* instant: admin changes ver/settings/sold -> store refreshes right away (polling stays as backup) */
  if (window.FAST && FAST.listen) { ['ver', 'settings', 'sold'].forEach(k => FAST.listen(k, () => pull())); }
  document.addEventListener('visibilitychange', () => { if (!document.hidden) pull(); });
  (window.FAST ? FAST.cget('products') : Promise.resolve(null)).then(c => { if (c && c.p) { cache.products = c.p; cache.pv = c.v; } }).catch(() => {}).then(boot);

})();