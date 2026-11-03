// MAXDAY 3D 교육: 시안과 같은 화면 틀 — 상단 바, 왼쪽 캠퍼스 패널, 미니맵, 하단 안내, 매장 실습 패널·번호 말풍선
const PIN = { lecture: '교육장', restaurant: '실습 음식점', cafe: '실습 카페', store1: 'A 소형점', store2: 'B 표준점', store3: 'C 대형점', store4: 'D 단독점', store4b: 'D 단독점 2층' };
export const eduPinName = k => PIN[k] || k;
export const STEPS = [
  { n: '01', t: '인사·좌석 안내', at: 'entrance' },
  { n: '02', t: '주문·POS', at: 'counter' },
  { n: '03', t: '테이블 세팅', at: 'table' },
  { n: '04', t: '위생·마감', at: 'kitchen' },
];
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const ICON = {
  lec: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 21h18M5 21V9l7-5 7 5v12M9 21v-6h6v6M9 11h.01M15 11h.01"/></svg>',
  shop: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M7 3v8M5 3v5a2 2 0 0 0 4 0V3M7 11v10M17 3c-2 0-3 2-3 5s1 4 3 4v9"/></svg>',
  mh: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 10l2-6h14l2 6M4 10h16v10H4zM9 20v-5h6v5M3 10c0 1.5 1.2 2.5 3 2.5S9 11.5 9 10c0 1.5 1.2 2.5 3 2.5s3-1 3-2.5c0 1.5 1.2 2.5 3 2.5s3-1 3-2.5"/></svg>',
  out: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14 4h5v16h-5M10 8l-4 4 4 4M6 12h10"/></svg>',
  mouse: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="6" y="3" width="12" height="18" rx="6"/><path d="M12 7v4"/></svg>',
};

export class EduUI {
  constructor(h) { // h: { brand, spots, focus, enter, leave, lectures, mylec, cert, login, user, practice, isStore }
    this.h = h; document.documentElement.classList.add('edu');
    const top = document.createElement('header'); top.id = 'edu-top'; top.innerHTML = `
      <a class="et-logo" href="#" aria-label="캠퍼스 처음으로">MAXDAY 3D 교육</a><span class="et-sep"></span>
      <nav class="et-nav" id="et-nav"><button data-n="campus" class="on">캠퍼스</button><button data-n="mylec">내 학습</button><button data-n="cert">수료증</button></nav>
      <div class="et-crumb" id="et-crumb" hidden></div>
      <button class="et-login" id="et-login">로그인</button><button class="et-out" id="et-out" hidden>${ICON.out}<span>나가기</span></button>`;
    document.body.appendChild(top);
    top.querySelector('.et-logo').onclick = e => { e.preventDefault(); h.leave(); };
    top.querySelector('[data-n="campus"]').onclick = () => h.leave();
    top.querySelector('[data-n="mylec"]').onclick = () => h.mylec();
    top.querySelector('[data-n="cert"]').onclick = () => h.cert();
    top.querySelector('#et-login').onclick = () => h.login();
    top.querySelector('#et-out').onclick = () => h.leave();

    const side = document.createElement('aside'); side.id = 'edu-side'; side.innerHTML = `
      <p class="es-k">배우고, 실습하고, 내 매장으로</p><h1 class="es-t">점주 교육 캠퍼스</h1>
      <button class="es-b on" data-go="lecture"><i>${ICON.lec}</i><span>교육장 입장</span><b>›</b></button>
      <button class="es-b" data-go="shops"><i>${ICON.shop}</i><span>실습 매장</span><b>›</b></button>
      <div class="es-sub" id="es-shops" hidden><button data-go="restaurant">실습 음식점</button><button data-go="cafe">실습 카페</button></div>
      <button class="es-b" data-go="models"><i>${ICON.mh}</i><span>모델하우스 둘러보기</span><b>›</b></button>
      <div class="es-sub" id="es-models" hidden><button data-go="store1">A 소형점 · 10평</button><button data-go="store2">B 표준점 · 20평</button><button data-go="store3">C 대형점 · 35평</button><button data-go="store4">D 단독점 · 2층</button></div>`;
    document.body.appendChild(side);
    side.querySelectorAll('[data-go]').forEach(b => b.onclick = () => {
      const g = b.dataset.go;
      if (g === 'shops' || g === 'models') { const el = side.querySelector('#es-' + g); const open = el.hidden; side.querySelectorAll('.es-sub').forEach(x => x.hidden = true); el.hidden = !open; return; }
      side.querySelectorAll('.es-b').forEach(x => x.classList.toggle('on', x === b || (x.dataset.go === 'shops' && /restaurant|cafe/.test(g)) || (x.dataset.go === 'models' && /store/.test(g))));
      h.focus(g);
    });

    const badge = document.createElement('div'); badge.id = 'edu-badge'; badge.textContent = h.badge || '공개 데모 · 공간 구성 제안'; document.body.appendChild(badge);
    const hint = document.createElement('div'); hint.id = 'edu-hint'; hint.innerHTML = `${ICON.mouse}<span id="edu-hint-t">클릭하여 이동 · 문을 눌러 입장</span>`; document.body.appendChild(hint);
    // 미니맵
    const mm = document.createElement('div'); mm.id = 'edu-mini'; mm.setAttribute('aria-hidden', 'true');
    const P = h.spots, sx = x => 50 + x * 1.15, sz = z => 52 + z * 1.15;
    mm.innerHTML = `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="48" fill="#cfe1c0" stroke="#fff" stroke-width="2.5"/>
      <path d="M50 98 L51 58 L50 46 M49 54 L28 54 M49 58 L70 64 M50 52 L76 48" stroke="#e9d9c8" stroke-width="5" fill="none" stroke-linecap="round"/>
      ${Object.entries(P).filter(([k]) => PIN[k] && k !== 'store4b').map(([k, s]) => `<rect x="${sx(s.pos[0]) - (k === 'lecture' ? 9 : 6)}" y="${sz(s.pos[2]) - 4}" width="${k === 'lecture' ? 18 : 12}" height="8" rx="1.5" fill="#f2e3c6" stroke="#b9a07a" stroke-width=".8"/>`).join('')}
      <text x="50" y="11" text-anchor="middle" font-size="9" font-weight="800" fill="#1c2d45">N</text><path d="M50 62 l-3.5 7 3.5-2 3.5 2z" fill="#2457D6"/></svg>`;
    document.body.appendChild(mm);
    // 매장 실습 패널
    const pp = document.createElement('aside'); pp.id = 'edu-prac'; pp.hidden = true; pp.innerHTML = `
      <p class="ep-k">오늘의 실습</p><h2 class="ep-t">손님맞이부터 주문까지</h2><p class="ep-d">순서대로 매장 운영을 익혀보세요</p>
      <div class="ep-steps">${STEPS.map((s, i) => `<button data-i="${i}"><em>${s.n}</em><span>${s.t}</span><i class="ok">✓</i></button>`).join('')}</div>
      <button class="ep-go" id="ep-go">실습 시작</button>
      <div class="ep-more"><button data-x="clean">청결 점검</button><button data-x="routine">오픈·마감</button><button data-x="resv">메뉴판·예약</button><button data-x="model" hidden>매장 정보</button><button data-x="floor" hidden>2층으로</button></div>
      <p class="ep-n">실습 항목은 제안 구성입니다</p>`;
    document.body.appendChild(pp); this.pp = pp; this.cur = 0;
    pp.querySelectorAll('.ep-steps button').forEach(b => b.onclick = () => this.select(+b.dataset.i, true));
    pp.querySelector('#ep-go').onclick = () => this.select(this.cur, true);
    pp.querySelectorAll('.ep-more [data-x]').forEach(b => b.onclick = () => h.action(b.dataset.x));
  }
  syncUser(u) { const b = document.getElementById('et-login'); b.textContent = u ? `${u.name}님` : '로그인'; }
  done(stepsDone) { this.pp.querySelectorAll('.ep-steps button').forEach((b, i) => b.classList.toggle('done', !!stepsDone[i + 1])); const n = STEPS.findIndex((_, i) => !stepsDone[i + 1]); if (n >= 0 && !this.pp.contains(document.activeElement)) this.select(n, false); }
  select(i, run) { this.cur = i; this.pp.querySelectorAll('.ep-steps button').forEach((b, k) => b.classList.toggle('on', k === i)); document.querySelectorAll('.edu-call').forEach(c => c.classList.toggle('on', +c.dataset.i === i)); if (run) this.h.practice(i); }
  map() {
    document.documentElement.classList.add('edu-map'); document.documentElement.classList.remove('edu-room');
    document.getElementById('et-nav').hidden = false; document.getElementById('et-crumb').hidden = true; document.getElementById('et-out').hidden = true; document.getElementById('et-login').hidden = false;
    document.getElementById('edu-hint-t').textContent = '클릭하여 이동 · 문을 눌러 입장'; this.pp.hidden = true;
  }
  room(key, opts = {}) {
    document.documentElement.classList.remove('edu-map'); document.documentElement.classList.add('edu-room');
    document.getElementById('et-nav').hidden = true; const cr = document.getElementById('et-crumb'); cr.hidden = false; cr.innerHTML = `<button data-c>캠퍼스</button><span>›</span><b>${esc(eduPinName(key))}</b>`; cr.querySelector('[data-c]').onclick = () => this.h.leave();
    document.getElementById('et-out').hidden = false; document.getElementById('et-login').hidden = true;
    const store = this.h.isStore(key); this.pp.hidden = !store; document.documentElement.classList.toggle('edu-store', store);
    document.getElementById('edu-hint-t').textContent = store ? '클릭하여 이동 · 표시를 눌러 살펴보기' : '빈 의자를 눌러 앉고 강의 목록에서 강의를 고르세요';
    this.pp.querySelector('[data-x="model"]').hidden = !opts.model; const fl = this.pp.querySelector('[data-x="floor"]'); fl.hidden = !opts.stairs; if (opts.stairs) fl.textContent = opts.up ? '2층으로' : '1층으로';
    this.pp.querySelector('.ep-t').textContent = opts.model ? `${eduPinName(key)} 둘러보기` : '손님맞이부터 주문까지';
    this.pp.querySelector('.ep-d').textContent = opts.model ? '동선·좌석·주방을 직접 걸어서 확인하고 실습해 보세요' : '순서대로 매장 운영을 익혀보세요';
  }
}
