// MAXDAY 3D 교육: 매장 실습 (청결 점검 · 오픈/마감 루틴 · 주문·서빙 퀴즈 · 모델하우스 정보)
// 결과는 계정 진도(account.prog)의 p-clean / p-open / p-quiz 에 저장 → 관리자 화면에서 확인
export const PRACTICE_IDS = { 'p-steps': '매장 실습 4단계', 'p-clean': '청결 점검 실습', 'p-open': '오픈·마감 루틴', 'p-quiz': '주문·서빙 퀴즈' };

export const CLEAN = {
  kitchen: { name: '주방', items: ['조리대·도마는 용도별(육류·채소·완제품)로 구분해 쓰고 있다', '냉장 0~5℃ · 냉동 -18℃ 이하 온도를 기록했다', '식재료에 입고일·유통기한 라벨이 붙어 있다', '바닥 배수구·그리스트랩에 찌꺼기가 없다', '손 세정대에 비누·종이타월이 채워져 있다'] },
  counter: { name: '카운터·포스', items: ['포스·카드단말기 화면과 버튼을 소독했다', '카운터 위에 개인 물건·서류가 없다', '영수증 용지·포장 봉투 재고가 충분하다', '메뉴판·가격표가 실제 가격과 같다'] },
  restroom: { name: '화장실', items: ['변기·세면대 물때와 냄새가 없다', '휴지·핸드타월·비누가 채워져 있다', '청소 점검표에 시간·담당자를 적었다', '바닥에 물기가 없다(미끄럼 주의)'] },
  selfbar: { name: '셀프바', items: ['반찬·소스 통이 덮개로 덮여 있다', '집게·국자가 품목별로 따로 있다', '반찬 보충 시 새 통으로 교체한다(덧붓기 금지)', '물·컵 디스펜서 주변에 물기가 없다'] },
  hall: { name: '홀·테이블', items: ['손님이 나가면 바로 테이블을 소독 행주로 닦는다', '의자 위·아래 부스러기를 치웠다', '수저통·냅킨·양념통이 채워져 있다', '테이블 번호가 잘 보인다'] },
  entrance: { name: '입구·대기', items: ['출입문 손잡이·유리를 닦았다', '대기 명단·예약 안내가 보이는 곳에 있다', '입구 매트와 우산꽂이가 정리돼 있다', '영업시간·휴무 안내가 최신이다'] },
};

export const ROUTINE = {
  open: ['출근 · 위생복·모자·앞치마 착용, 손 씻기', '냉장·냉동고 온도 확인 후 기록', '식재료 입고 검수(온도·유통기한·포장 상태)', '육수·소스 등 기본 준비(프렙) 체크리스트 진행', '홀 조명·음악·냉난방 켜기, 테이블 세팅', '포스 켜고 시재(거스름돈) 확인', '오픈 10분 전 매장 한 바퀴 최종 점검'],
  close: ['라스트 오더 안내(마감 30분 전)', '남은 식재료 라벨링 후 냉장 보관, 폐기분 기록', '조리기구·화구·후드 필터 세척', '바닥 청소·배수구 정리, 음식물 쓰레기 배출', '포스 마감 정산, 시재 확인', '가스 밸브·전기·냉난방 끄기, 냉장고 문 닫힘 확인', '출입문 잠금, 보안 설정'],
};

export const QUIZ = [
  { q: '손님이 들어왔어요. 가장 먼저 할 일은?', a: ['바로 메뉴판을 건넨다', '눈을 맞추고 인사한 뒤 인원·예약을 여쭌다', '빈자리에 알아서 앉으시라고 한다'], c: 1, e: '인사와 인원·예약 확인이 먼저예요. 예약 손님이면 예약 자리로 안내합니다.' },
  { q: '주문을 받은 뒤 꼭 해야 하는 것은?', a: ['주문 내용을 다시 읽어 확인한다', '조용히 주방에 전달한다', '계산부터 받는다'], c: 0, e: '복창 확인으로 주문 실수를 크게 줄일 수 있어요. 맵기·알레르기 요청도 함께 확인합니다.' },
  { q: '손님이 "이거 덜 맵게 되나요?"라고 물어요.', a: ['안 된다고 한다', '가능한 단계와 차이를 설명하고 주문서에 표시한다', '주방에 물어보라고 한다'], c: 1, e: '가능한 맵기 단계를 안내하고 주문서·포스에 표시해 주방에 정확히 전달해요.' },
  { q: '음식을 서빙할 때 올바른 방법은?', a: ['손님 앞을 가로질러 놓는다', '메뉴 이름을 말하며 손님 기준 오른쪽에서 놓는다', '테이블 가운데에 모두 놓고 간다'], c: 1, e: '메뉴 이름을 말하며 놓으면 잘못 나간 음식을 바로 알 수 있어요.' },
  { q: '조리 중 바닥에 떨어진 재료는?', a: ['씻어서 쓴다', '바로 폐기하고 폐기 기록에 적는다', '3초 안이면 괜찮다'], c: 1, e: '떨어진 재료는 무조건 폐기. 폐기량 기록은 원가 관리에도 쓰여요.' },
  { q: '예약 손님이 15분째 오지 않아요.', a: ['바로 자리를 다른 손님에게 준다', '예약 연락처로 확인 전화를 하고, 매장 기준(예: 20분)에 따라 처리한다', '계속 비워 둔다'], c: 1, e: '노쇼 기준을 정해 두고, 먼저 연락으로 확인하는 것이 원칙이에요.' },
  { q: '손님이 음식에서 이물질을 발견했어요.', a: ['그럴 리 없다고 설명한다', '즉시 사과하고 음식을 새로 내드리거나 환불, 이물질은 보관 후 원인 확인', '서비스 음료로 넘어간다'], c: 1, e: '사과 → 교체/환불 → 이물 보관·원인 확인 → 본사 보고 순서예요.' },
  { q: '계산을 마친 손님이 나갈 때는?', a: ['다음 손님을 바로 받는다', '"감사합니다, 또 오세요" 인사 후 테이블을 바로 정리한다', '인사는 생략한다'], c: 1, e: '배웅 인사 후 즉시 테이블 정리·소독해야 회전이 빨라요.' },
];

const clip = (k, cap) => `<figure class="pr-clip"><video src="assets/edu/${k}.mp4" poster="assets/edu/${k}.jpg" controls playsinline preload="none"></video><figcaption>${cap}</figcaption></figure>`;
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

export class Practice {
  constructor({ account, toast, onChange }) {
    this.account = account; this.toast = toast; this.onChange = onChange || (() => {});
    const m = document.createElement('div'); m.id = 'modal-prac'; m.className = 'modal'; m.hidden = true; m.setAttribute('role', 'dialog'); m.setAttribute('aria-modal', 'true'); m.setAttribute('aria-labelledby', 'pr-title');
    m.innerHTML = `<div class="sheet scroll prac-sheet"><div class="bb-head"><h2 id="pr-title">실습</h2><button class="x" data-close aria-label="닫기">✕</button></div><div id="pr-body"></div></div>`;
    document.body.appendChild(m); this.m = m; this.body = m.querySelector('#pr-body');
  }
  rec(id) { return this.account.user ? this.account.rec(id) : (this._g ||= {})[id] || ((this._g[id] = {})); }
  save() { if (this.account.user) this.account.save(true); this.onChange(); }
  title(t) { this.m.querySelector('#pr-title').textContent = t; }
  loginNote() { return this.account.user ? '' : '<p class="tiny muted pr-note">로그인하지 않으면 실습 기록이 저장되지 않아요.</p>'; }

  // 청결 점검: 구역별 체크리스트 (zone 없으면 전체 현황)
  clean(zone, present) {
    const r = this.rec('p-clean'); r.z = r.z || {};
    const zones = Object.keys(CLEAN).filter(k => !present || present.includes(k));
    if (!zone) {
      const done = zones.filter(k => r.z[k]).length;
      this.title('청결 점검 실습');
      this.body.innerHTML = `${clip('clean', '도입 영상 · 오픈 전 위생 점검')}<p class="small muted">매장 안 초록색 점검 지점을 눌러 구역별로 점검하세요. 모든 구역을 마치면 실습이 완료돼요.</p>
        <div class="pr-meter"><i style="width:${Math.round(done / zones.length * 100)}%"></i></div><p class="tiny muted">${done} / ${zones.length} 구역 완료</p>
        <ul class="pr-zones">${zones.map((k, i) => `<li><button data-z="${k}" class="${r.z[k] ? 'ok' : ''}"><b>${i + 1}</b>${esc(CLEAN[k].name)}<span>${r.z[k] ? '완료' : '점검하기'}</span></button></li>`).join('')}</ul>${this.loginNote()}`;
      this.body.querySelectorAll('[data-z]').forEach(b => b.onclick = () => this.clean(b.dataset.z, present));
      return;
    }
    const Z = CLEAN[zone]; this.title(`${Z.name} 청결 점검`);
    const ck = (r.ck ||= {})[zone] ||= [];
    this.body.innerHTML = `<p class="small muted">실제 매장이라고 생각하고 하나씩 확인해 체크하세요.</p>
      <ul class="pr-list">${Z.items.map((t, i) => `<li><label><input type="checkbox" data-i="${i}" ${ck[i] ? 'checked' : ''}><span>${esc(t)}</span></label></li>`).join('')}</ul>
      <div class="row pr-row"><button class="btn" data-back>구역 목록</button><button class="btn primary" data-ok>점검 완료</button></div>${this.loginNote()}`;
    this.body.querySelectorAll('input').forEach(cb => cb.onchange = () => { ck[cb.dataset.i] = cb.checked; });
    this.body.querySelector('[data-back]').onclick = () => this.clean(null, present);
    this.body.querySelector('[data-ok]').onclick = () => {
      if (Z.items.some((_, i) => !ck[i])) { this.toast('체크하지 않은 항목이 있어요.'); return; }
      r.z[zone] = Date.now(); if (zones.every(k => r.z[k]) && !r.done) { r.done = Date.now(); this.toast('청결 점검 실습을 모두 마쳤어요!'); } else this.toast(`${Z.name} 점검 완료`);
      this.save(); this.clean(null, present);
    };
  }

  // 오픈·마감 루틴: 순서 맞추기
  routine(kind = 'open') {
    const r = this.rec('p-open'); const steps = ROUTINE[kind];
    this.title(kind === 'open' ? '오픈 루틴 실습' : '마감 루틴 실습');
    const order = steps.map((_, i) => i).sort(() => Math.random() - 0.5); let picked = [];
    const draw = () => {
      this.body.innerHTML = `<div class="rv-tabs"><button class="rv-tab ${kind === 'open' ? 'on' : ''}" data-k="open">오픈 ${r.open ? '✓' : ''}</button><button class="rv-tab ${kind === 'close' ? 'on' : ''}" data-k="close">마감 ${r.close ? '✓' : ''}</button></div>
        <p class="small muted">해야 할 순서대로 눌러 주세요. 틀리면 다시 시작해요.</p>
        <ol class="pr-done">${picked.map(i => `<li>${esc(steps[i])}</li>`).join('')}</ol>
        <div class="pr-pool">${order.filter(i => !picked.includes(i)).map(i => `<button data-i="${i}">${esc(steps[i])}</button>`).join('')}</div>${this.loginNote()}`;
      this.body.querySelectorAll('[data-k]').forEach(b => b.onclick = () => this.routine(b.dataset.k));
      this.body.querySelectorAll('[data-i]').forEach(b => b.onclick = () => {
        const i = +b.dataset.i;
        if (i !== picked.length) { b.classList.add('bad'); this.toast(`순서가 달라요. "${steps[picked.length]}" 차례예요.`); setTimeout(() => { picked = []; draw(); }, 900); return; }
        picked.push(i);
        if (picked.length === steps.length) { r[kind] = Date.now(); if (r.open && r.close && !r.done) r.done = Date.now(); this.save(); this.toast(kind === 'open' ? '오픈 루틴 완료!' : '마감 루틴 완료!'); }
        draw();
      });
    };
    draw();
  }

  // 주문·서빙 퀴즈
  quiz() {
    const r = this.rec('p-quiz'); let i = 0, score = 0; this.title('주문·서빙 퀴즈');
    const q = () => {
      if (i >= QUIZ.length) {
        const pass = score >= 6; r.best = Math.max(r.best || 0, score); if (pass && !r.done) r.done = Date.now(); this.save();
        this.body.innerHTML = `<div class="pr-result ${pass ? 'ok' : ''}"><b>${score} / ${QUIZ.length}</b><p>${pass ? '합격이에요! 실습 기록에 저장했어요.' : '6문제 이상 맞히면 합격이에요. 다시 도전해 보세요.'}</p></div><div class="row pr-row"><button class="btn primary" data-re>다시 풀기</button></div>${this.loginNote()}`;
        this.body.querySelector('[data-re]').onclick = () => this.quiz(); return;
      }
      const Q = QUIZ[i];
      this.body.innerHTML = `${i === 0 ? clip('serve', '도입 영상 · 손님 맞이와 서빙') : ''}<p class="tiny muted">${i + 1} / ${QUIZ.length}</p><h3 class="pr-q">${esc(Q.q)}</h3><div class="pr-ans">${Q.a.map((a, k) => `<button data-k="${k}">${esc(a)}</button>`).join('')}</div><p class="small pr-exp" hidden></p><div class="row pr-row" hidden><button class="btn primary" data-next>다음</button></div>`;
      this.body.querySelectorAll('[data-k]').forEach(b => b.onclick = () => {
        const k = +b.dataset.k; if (k === Q.c) score++;
        this.body.querySelectorAll('[data-k]').forEach(x => { x.disabled = true; if (+x.dataset.k === Q.c) x.classList.add('ok'); else if (x === b) x.classList.add('bad'); });
        const e = this.body.querySelector('.pr-exp'); e.textContent = (k === Q.c ? '정답! ' : '오답. ') + Q.e; e.hidden = false;
        const row = this.body.querySelector('.pr-row'); row.hidden = false; row.querySelector('[data-next]').onclick = () => { i++; q(); };
      });
    };
    q();
  }

  // 매장 실습 4단계 (시안: 01 인사·좌석 안내 → 02 주문·POS → 03 테이블 세팅 → 04 위생·마감)
  stepsDone() { return this.rec('p-steps').s || {}; }
  markStep(n) { const r = this.rec('p-steps'); r.s = r.s || {}; if (!r.s[n]) r.s[n] = Date.now(); if ([1, 2, 3, 4].every(k => r.s[k]) && !r.done) { r.done = Date.now(); this.toast('매장 실습 4단계를 모두 마쳤어요!'); } this.save(); }
  step(i, next) {
    const S = [
      { t: '01 인사·좌석 안내', qs: [0, 5], intro: 'serve', cap: '도입 영상 · 손님 맞이와 서빙', list: ['손님과 눈을 맞추고 밝게 인사한다', '인원·예약 여부를 여쭌다', '예약 손님은 예약석, 일반 손님은 빈 테이블로 안내한다', '대기가 있으면 대기 명단에 이름·연락처·인원을 적는다'] },
      { t: '02 주문·POS', qs: [1, 2], list: ['메뉴판을 드리고 대표 메뉴를 한 줄로 소개한다', '메뉴·수량·맵기·옵션을 받아 적는다', '주문을 복창해 확인한다', 'POS에 테이블 번호와 함께 입력하고 주방 주문표를 확인한다'], resv: true },
      { t: '03 테이블 세팅', qs: [3], list: ['테이블을 소독 행주로 닦고 물기를 제거했다', '수저·젓가락·앞접시를 인원수만큼 놓았다', '물컵·물병, 냅킨을 채웠다', '불판·집게·가위가 깨끗한지 확인했다', '양념통·소스가 채워져 있고 뚜껑이 닫혀 있다', '의자를 가지런히 넣고 테이블 번호가 보이게 했다'] },
      { t: '04 위생·마감', qs: [4, 6], intro: 'clean', cap: '도입 영상 · 오픈 전 위생 점검', list: ['손 씻기 후 위생 장갑·모자를 착용했다', '조리대·도마를 용도별로 구분해 세척·소독했다', '남은 식재료에 날짜 라벨을 붙여 냉장 보관했다', '바닥·배수구를 청소하고 음식물 쓰레기를 배출했다', '가스 밸브·전기·냉난방을 끄고 문단속을 했다'] },
    ][i];
    this.title(S.t); const n = i + 1; const ck = {}; let qi = 0, wrong = 0;
    const checklist = () => {
      this.body.innerHTML = `${S.intro ? clip(S.intro, S.cap) : ''}<p class="small muted">실제 매장이라고 생각하고 하나씩 해 본 뒤 체크하세요.</p>
        <ul class="pr-list">${S.list.map((t, k) => `<li><label><input type="checkbox" data-k="${k}"><span>${esc(t)}</span></label></li>`).join('')}</ul>
        ${S.resv ? '<div class="row pr-row"><button class="btn" data-resv>메뉴판·주문 체험 열기</button></div>' : ''}
        <div class="row pr-row"><button class="btn primary" data-ok>다음 · 상황 문제</button></div>${this.loginNote()}`;
      this.body.querySelectorAll('input').forEach(c => c.onchange = () => { ck[c.dataset.k] = c.checked; });
      const rv = this.body.querySelector('[data-resv]'); if (rv) rv.onclick = () => this.onResv && this.onResv();
      this.body.querySelector('[data-ok]').onclick = () => { if (S.list.some((_, k) => !ck[k])) { this.toast('체크하지 않은 항목이 있어요.'); return; } quiz(); };
    };
    const quiz = () => {
      if (qi >= S.qs.length) {
        this.markStep(n);
        this.body.innerHTML = `<div class="pr-result ok"><b>${S.t.slice(0, 2)}</b><p>${esc(S.t.slice(3))} 실습을 마쳤어요.${wrong ? ` (틀린 문제 ${wrong}개는 해설을 다시 확인하세요)` : ''}</p></div>
          <div class="row pr-row">${i < 3 ? '<button class="btn primary" data-nx>다음 단계</button>' : '<button class="btn primary" data-cl>닫기</button>'}</div>`;
        const nx = this.body.querySelector('[data-nx]'); if (nx) nx.onclick = () => next ? next(i + 1) : this.step(i + 1);
        const cl = this.body.querySelector('[data-cl]'); if (cl) cl.onclick = () => this.m.querySelector('.x').click();
        return;
      }
      const Q = QUIZ[S.qs[qi]];
      this.body.innerHTML = `<p class="tiny muted">상황 문제 ${qi + 1} / ${S.qs.length}</p><h3 class="pr-q">${esc(Q.q)}</h3><div class="pr-ans">${Q.a.map((a, k) => `<button data-k="${k}">${esc(a)}</button>`).join('')}</div><p class="small pr-exp" hidden></p><div class="row pr-row" hidden><button class="btn primary" data-n>다음</button></div>`;
      this.body.querySelectorAll('[data-k]').forEach(b => b.onclick = () => {
        const k = +b.dataset.k; if (k !== Q.c) wrong++;
        this.body.querySelectorAll('[data-k]').forEach(x => { x.disabled = true; if (+x.dataset.k === Q.c) x.classList.add('ok'); else if (x === b) x.classList.add('bad'); });
        const e = this.body.querySelector('.pr-exp'); e.textContent = (k === Q.c ? '정답! ' : '오답. ') + Q.e; e.hidden = false;
        const row = this.body.querySelector('.pr-row'); row.hidden = false; row.querySelector('[data-n]').onclick = () => { qi++; quiz(); };
      });
    };
    checklist();
  }
  // 모델하우스 정보
  model(info, brandName) {
    this.title(info.name.includes(info.no + "호") && info.name.length > 8 ? info.name : `모델하우스 ${info.no}호 · ${info.type}`);
    const rows = [['형태', info.type], ['면적', info.area], ['좌석', info.seats], ['주방', info.kitchen], ['구성', info.layout], ['층', info.floor], ['인원', info.staff], ['예상 비용', info.cost], ['추천 입지', info.fit], ['기타', info.other]].filter(x => x[1]);
    this.body.innerHTML = `<p class="small muted">${esc(brandName)} 매장을 실제 크기로 만든 3D 모델하우스예요. 걸어 다니며 동선·좌석·주방 크기를 확인해 보세요.</p>
      <table class="pr-tbl">${rows.map(([k, v]) => `<tr><th>${k}</th><td>${esc(v)}</td></tr>`).join('')}</table>
      <p class="tiny muted">비용은 예시이며 상권·평수·인테리어 범위에 따라 달라요. 정확한 금액은 가맹 상담에서 안내해 드려요.</p>
      <div class="row pr-row"><button class="btn primary" data-close>둘러보기</button></div>`;
    this.body.querySelector('[data-close]').onclick = () => this.m.querySelector('.x').click();
  }
}

// 관리자/수료증용 요약
export function practiceSummary(prog) {
  return Object.entries(PRACTICE_IDS).map(([id, name]) => ({ id, name, done: !!prog?.[id]?.done, at: prog?.[id]?.done || 0 }));
}
