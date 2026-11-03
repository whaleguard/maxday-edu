// 카페·식당 매장 데이터 — 3D 실내, 2D 배치도(예약), 메뉴, 영업시간을 한 곳에서 관리
// 실제 거래처 매장으로 바꿀 때는 이 파일의 테이블 좌표·메뉴·시간만 고치면 3D와 예약 화면이 함께 바뀝니다.

// 테이블: id, zone(구역), x,z(중심, m), w,d(크기), round, cap(최대 인원), chairs: 'z2'(앞뒤 1명씩) 'z4'(앞뒤 2명씩) 'x4' 'sofa' 'bar' 'ring'
export const STORES = {
  cafe: {
    title: '카페', open: '10:00', close: '21:00', step: 30, dur: 90,
    fixtures: [
      { kind: 'counter', label: '주문 카운터', x: -4.6, z: -5.7, w: 4.2, d: 0.9 },
      { kind: 'case', label: '디저트 쇼케이스', x: -1.7, z: -5.7, w: 1.6, d: 0.8 },
      { kind: 'selfbar', label: '셀프바 (물·빨대·냅킨)', x: 1.4, z: -6.5, w: 2.0, d: 0.6 },
      { kind: 'restroom', label: '화장실', x: 6.0, z: -5.8, w: 4.0, d: 2.4 },
      { kind: 'plant', x: -7.3, z: 6.3, w: 0.6, d: 0.6 }, { kind: 'plant', x: 7.3, z: 6.3, w: 0.6, d: 0.6 },
    ],
    windows: 'right',
    tables: [
      { id: '창1', zone: '창가 바', x: 7.35, z: -2.9, w: 0.45, d: 1.5, cap: 2, chairs: 'bar' },
      { id: '창2', zone: '창가 바', x: 7.35, z: -0.9, w: 0.45, d: 1.5, cap: 2, chairs: 'bar' },
      { id: '창3', zone: '창가 바', x: 7.35, z: 1.1, w: 0.45, d: 1.5, cap: 2, chairs: 'bar' },
      { id: '소1', zone: '소파석', x: -6.0, z: -2.2, w: 0.8, d: 1.2, cap: 4, chairs: 'sofa' },
      { id: '소2', zone: '소파석', x: -6.0, z: 1.2, w: 0.8, d: 1.2, cap: 4, chairs: 'sofa' },
      { id: '홀1', zone: '홀', x: -2.6, z: -1.9, w: 0.7, d: 0.7, cap: 2, chairs: 'z2', round: true },
      { id: '홀2', zone: '홀', x: 0.4, z: -1.9, w: 0.7, d: 0.7, cap: 2, chairs: 'z2', round: true },
      { id: '홀3', zone: '홀', x: -2.6, z: 1.0, w: 0.7, d: 0.7, cap: 2, chairs: 'z2', round: true },
      { id: '홀4', zone: '홀', x: 0.4, z: 1.0, w: 0.7, d: 0.7, cap: 2, chairs: 'z2', round: true },
      { id: '홀5', zone: '홀', x: 3.9, z: -1.9, w: 1.2, d: 0.8, cap: 4, chairs: 'z4' },
      { id: '홀6', zone: '홀', x: 3.9, z: 1.4, w: 1.2, d: 0.8, cap: 4, chairs: 'z4' },
      { id: '단1', zone: '단체석', x: -3.4, z: 4.3, w: 2.6, d: 0.9, cap: 6, chairs: 'z6' },
    ],
    menu: [
      { cat: '커피', items: [['아메리카노', 4500], ['카페라떼', 5000], ['바닐라라떼', 5500], ['콜드브루', 5000], ['플랫화이트', 5500]] },
      { cat: '음료', items: [['말차라떼', 5500], ['자몽에이드', 6000], ['캐모마일 티', 4800], ['딸기 스무디', 6500]] },
      { cat: '디저트', items: [['버터 크루아상', 4000], ['바스크 치즈케이크', 6500], ['티라미수', 7000], ['초코칩 쿠키', 3000]] },
    ],
  },
  restaurant: {
    title: '식당', open: '11:30', close: '21:00', step: 30, dur: 90,
    fixtures: [
      { kind: 'kitchen', label: '오픈 주방', x: 6.0, z: -6.6, w: 6.0, d: 2.8 },
      { kind: 'counter', label: '계산대·포스', x: 6.6, z: 6.5, w: 2.4, d: 0.7 },
      { kind: 'selfbar', label: '셀프바 (반찬·물)', x: 0.6, z: -7.3, w: 2.8, d: 0.6 },
      { kind: 'restroom', label: '화장실', x: -7.5, z: -6.8, w: 3.0, d: 2.4 },
      { kind: 'room', label: '룸', x: -6.75, z: -2.9, w: 4.5, d: 4.4, door: 'right' },
      { kind: 'bench', label: '대기석', x: -7.6, z: 6.9, w: 2.2, d: 0.5 },
      { kind: 'plant', x: 8.4, z: 7.4, w: 0.6, d: 0.6 }, { kind: 'plant', x: -4.2, z: 7.4, w: 0.6, d: 0.6 },
    ],
    windows: 'right',
    tables: [
      { id: '창1', zone: '창가', x: 7.9, z: -3.4, w: 1.0, d: 0.8, cap: 4, chairs: 'z4' },
      { id: '창2', zone: '창가', x: 7.9, z: -0.4, w: 1.0, d: 0.8, cap: 4, chairs: 'z4' },
      { id: '창3', zone: '창가', x: 7.9, z: 2.6, w: 1.0, d: 0.8, cap: 4, chairs: 'z4' },
      { id: '홀1', zone: '홀', x: -2.0, z: -1.8, w: 1.2, d: 0.8, cap: 4, chairs: 'z4' },
      { id: '홀2', zone: '홀', x: 1.6, z: -1.8, w: 1.2, d: 0.8, cap: 4, chairs: 'z4' },
      { id: '홀3', zone: '홀', x: -2.0, z: 1.6, w: 1.2, d: 0.8, cap: 4, chairs: 'z4' },
      { id: '홀4', zone: '홀', x: 1.6, z: 1.6, w: 1.2, d: 0.8, cap: 4, chairs: 'z4' },
      { id: '홀5', zone: '홀', x: 4.4, z: 4.2, w: 1.2, d: 0.8, cap: 4, chairs: 'z4' },
      { id: '원1', zone: '원탁(단체)', x: -3.6, z: 5.0, w: 1.5, d: 1.5, cap: 6, chairs: 'ring', round: true },
      { id: '룸1', zone: '룸', x: -6.8, z: -2.9, w: 2.4, d: 1.0, cap: 8, chairs: 'z8' },
    ],
    menu: [
      { cat: '정식', items: [['한우 불고기 정식', 16000], ['제육볶음 정식', 11000], ['고등어구이 정식', 12000]] },
      { cat: '찌개·탕', items: [['된장찌개', 10000], ['김치찌개', 10000], ['갈비탕', 14000]] },
      { cat: '단품·나눔', items: [['돌솥비빔밥', 11000], ['해물파전', 15000], ['수육 보쌈(중)', 32000]] },
      { cat: '추가', items: [['공기밥', 1000], ['음료', 2000]] },
    ],
  },
};


// ===== MAXDAY 3D 교육: 창업 매장 모델하우스 (평수·구조별) =====
// 실제 프랜차이즈 납품 시 브랜드 표준 도면 수치로 바꾸면 3D·예약·안내판이 함께 바뀝니다.
const _MB = (typeof window !== 'undefined' && window.MDL_BRAND) || {};
const FR_MENU = _MB.frMenu || [
  { cat: '대표 메뉴', items: [['맥스 떡볶이', 5000], ['치즈 떡볶이', 6500], ['로제 떡볶이', 7000]] },
  { cat: '튀김·김밥', items: [['모둠 튀김', 4500], ['참치 김밥', 4500], ['꼬마 김밥(5줄)', 5500]] },
  { cat: '식사', items: [['라볶이', 6500], ['어묵탕', 5000], ['쫄면', 6500]] },
  { cat: '음료', items: [['쿨피스', 1500], ['탄산음료', 2000]] },
];
const MH = (o) => ({ open: '11:00', close: '21:00', step: 30, dur: 60, windows: 'right', menu: FR_MENU, ...o });
export const MODEL_INFO = {
  store1: { no: 1, name: '모델하우스 1호', type: '소형 · 테이크아웃형', area: '전용 10평 (약 33㎡)', seats: 10, kitchen: '주방 약 35%', layout: '입구 바로 앞 주문·픽업 카운터, 안쪽 오픈 주방, 창가 바 좌석 6석 + 2인석 2개. 배달·포장 비중이 높은 상권(역세권·학원가)에 맞춘 구조.', cost: '인테리어 약 2,500만~3,500만원 · 총 창업비용 약 6,000만~8,000만원 (예시)', staff: '피크 2~3명', fit: '1인 창업 · 배달 위주' },
  store2: { no: 2, name: '모델하우스 2호', type: '표준 · 홀형', area: '전용 20평 (약 66㎡)', seats: 20, kitchen: '주방 약 30%', layout: '안쪽 주방과 홀을 분리하고 4인석 4개 + 창가 2인석 2개. 계산대는 입구 옆, 화장실은 매장 안. 가장 많이 여는 표준 가맹점 크기.', cost: '인테리어 약 4,500만~6,000만원 · 총 창업비용 약 1억~1억 3,000만원 (예시)', staff: '피크 3~4명', fit: '부부 창업 · 홀+배달 병행' },
  store3: { no: 3, name: '모델하우스 3호', type: '대형 · 단체 홀형', area: '전용 35평 (약 116㎡)', seats: 42, kitchen: '주방 약 25%', layout: '넓은 주방(조리 3구역)과 셀프바, 4인석 9개 + 6인 원탁. 대기석과 계산대를 입구에 두어 회전율을 높인 구조. 대학가·관광지 상권용.', cost: '인테리어 약 8,000만~1억 1,000만원 · 총 창업비용 약 1억 8,000만~2억 3,000만원 (예시)', staff: '피크 5~6명', fit: '법인·다점포 · 단체 손님' },
  store4: { no: 4, name: '모델하우스 4호 · 1층', type: '단독건물 2층형', area: '1층 30평 + 2층 30평 (연면적 약 200㎡)', seats: 44, kitchen: '1층 주방 약 30%', layout: '1층은 주방·계산대·일반석, 계단으로 올라가는 2층은 홀석과 단체룸. 간판 노출이 큰 단독건물(로드숍) 플래그십 구조.', cost: '인테리어 약 1억 2,000만~1억 6,000만원 · 총 창업비용 약 2억 5,000만~3억 5,000만원 (임대료 별도, 예시)', staff: '피크 6~8명', fit: '플래그십 · 지역 거점 매장', floor: 1, other: 'store4b' },
  store4b: { no: 4, name: '모델하우스 4호 · 2층', type: '단독건물 2층형', area: '2층 30평 (약 100㎡)', seats: 24, kitchen: '서빙 스테이션', layout: '계단 앞 서빙 스테이션, 4인석 3개 + 창가 2인석 2개 + 6인 단체룸. 회식·모임 예약 손님을 2층으로 받는 구조.', cost: '4호 전체 비용에 포함 (예시)', staff: '2층 담당 1~2명', fit: '단체·모임 예약', floor: 2, other: 'store4' },
};
Object.assign(STORES, {
  store1: MH({ title: '모델하우스 1호 (10평)',
    fixtures: [
      { kind: 'kitchen', label: '오픈 주방', x: -1.4, z: -1.9, w: 4.0, d: 1.6 },
      { kind: 'counter', label: '주문·픽업 카운터', x: -1.9, z: 0.75, w: 2.6, d: 0.6 },
      { kind: 'bench', label: '포장 대기석', x: -3.1, z: 2.3, w: 0.5, d: 1.4 },
      { kind: 'plant', x: 2.9, z: 2.3, w: 0.5, d: 0.5 },
    ],
    tables: [
      { id: '바1', zone: '창가 바', x: 3.2, z: -1.6, w: 0.42, d: 1.2, cap: 2, chairs: 'bar' },
      { id: '바2', zone: '창가 바', x: 3.2, z: -0.1, w: 0.42, d: 1.2, cap: 2, chairs: 'bar' },
      { id: '바3', zone: '창가 바', x: 3.2, z: 1.4, w: 0.42, d: 1.2, cap: 2, chairs: 'bar' },
      { id: '홀1', zone: '2인석', x: 1.2, z: -0.9, w: 0.65, d: 0.65, cap: 2, chairs: 'z2', round: true },
      { id: '홀2', zone: '2인석', x: 1.2, z: 1.3, w: 0.65, d: 0.65, cap: 2, chairs: 'z2', round: true },
    ] }),
  store2: MH({ title: '모델하우스 2호 (20평)',
    fixtures: [
      { kind: 'restroom', label: '화장실', x: -3.8, z: -2.45, w: 2.4, d: 1.6 },
      { kind: 'kitchen', label: '주방', x: 1.2, z: -2.4, w: 4.6, d: 1.7 },
      { kind: 'counter', label: '계산대·포스', x: -4.0, z: 2.75, w: 1.8, d: 0.6 },
      { kind: 'plant', x: 4.6, z: 2.9, w: 0.5, d: 0.5 },
    ],
    tables: [
      { id: '홀1', zone: '홀', x: -1.7, z: 0.0, w: 1.2, d: 0.8, cap: 4, chairs: 'z4' },
      { id: '홀2', zone: '홀', x: 1.0, z: 0.0, w: 1.2, d: 0.8, cap: 4, chairs: 'z4' },
      { id: '홀3', zone: '홀', x: -1.7, z: 2.3, w: 1.2, d: 0.8, cap: 4, chairs: 'z4' },
      { id: '홀4', zone: '홀', x: 1.0, z: 2.3, w: 1.2, d: 0.8, cap: 4, chairs: 'z4' },
      { id: '창1', zone: '창가', x: 4.5, z: -0.2, w: 0.42, d: 1.2, cap: 2, chairs: 'bar' },
      { id: '창2', zone: '창가', x: 4.5, z: 1.6, w: 0.42, d: 1.2, cap: 2, chairs: 'bar' },
    ] }),
  store3: MH({ title: '모델하우스 3호 (35평)',
    fixtures: [
      { kind: 'kitchen', label: '주방 (조리 3구역)', x: -3.3, z: -3.3, w: 6.2, d: 2.3 },
      { kind: 'restroom', label: '화장실', x: 4.9, z: -3.4, w: 2.8, d: 2.1 },
      { kind: 'selfbar', label: '셀프바 (단무지·물)', x: 1.4, z: -4.1, w: 2.0, d: 0.55 },
      { kind: 'counter', label: '계산대·포스', x: -5.3, z: 3.95, w: 2.0, d: 0.6 },
      { kind: 'bench', label: '대기석', x: -2.9, z: 4.1, w: 1.8, d: 0.45 },
      { kind: 'plant', x: 6.0, z: 4.0, w: 0.5, d: 0.5 },
    ],
    tables: [
      { id: '홀1', zone: '홀', x: -4.4, z: -0.4, w: 1.2, d: 0.8, cap: 4, chairs: 'z4' },
      { id: '홀2', zone: '홀', x: -1.6, z: -0.4, w: 1.2, d: 0.8, cap: 4, chairs: 'z4' },
      { id: '홀3', zone: '홀', x: 1.2, z: -0.4, w: 1.2, d: 0.8, cap: 4, chairs: 'z4' },
      { id: '홀4', zone: '홀', x: -4.4, z: 1.9, w: 1.2, d: 0.8, cap: 4, chairs: 'z4' },
      { id: '홀5', zone: '홀', x: -1.6, z: 1.9, w: 1.2, d: 0.8, cap: 4, chairs: 'z4' },
      { id: '홀6', zone: '홀', x: 1.2, z: 1.9, w: 1.2, d: 0.8, cap: 4, chairs: 'z4' },
      { id: '창1', zone: '창가', x: 5.6, z: -1.2, w: 1.0, d: 0.8, cap: 4, chairs: 'z4' },
      { id: '창2', zone: '창가', x: 5.6, z: 1.0, w: 1.0, d: 0.8, cap: 4, chairs: 'z4' },
      { id: '창3', zone: '창가', x: 3.7, z: -1.2, w: 1.0, d: 0.8, cap: 4, chairs: 'z4' },
      { id: '원1', zone: '원탁(단체)', x: 3.9, z: 2.9, w: 1.4, d: 1.4, cap: 6, chairs: 'ring', round: true },
    ] }),
  store4: MH({ title: '모델하우스 4호 1층 (단독 2층)',
    fixtures: [
      { kind: 'restroom', label: '화장실', x: -4.0, z: -3.9, w: 2.0, d: 2.2 },
      { kind: 'kitchen', label: '주방', x: -0.9, z: -3.8, w: 4.2, d: 2.2 },
      { kind: 'stairs', label: '2층으로 올라가기', x: 3.4, z: -3.2, w: 2.2, d: 3.2, to: 'store4b', up: true },
      { kind: 'counter', label: '계산대·포스', x: 2.9, z: 4.3, w: 2.2, d: 0.6 },
    ],
    tables: [
      { id: '홀1', zone: '1층 홀', x: -2.6, z: -0.5, w: 1.2, d: 0.8, cap: 4, chairs: 'z4' },
      { id: '홀2', zone: '1층 홀', x: 0.4, z: -0.5, w: 1.2, d: 0.8, cap: 4, chairs: 'z4' },
      { id: '홀3', zone: '1층 홀', x: -2.6, z: 1.7, w: 1.2, d: 0.8, cap: 4, chairs: 'z4' },
      { id: '홀4', zone: '1층 홀', x: 0.4, z: 1.7, w: 1.2, d: 0.8, cap: 4, chairs: 'z4' },
      { id: '창1', zone: '창가', x: 4.5, z: 0.0, w: 0.42, d: 1.2, cap: 2, chairs: 'bar' },
      { id: '창2', zone: '창가', x: 4.5, z: 1.8, w: 0.42, d: 1.2, cap: 2, chairs: 'bar' },
    ] }),
  store4b: MH({ title: '모델하우스 4호 2층 (단독 2층)',
    fixtures: [
      { kind: 'stairs', label: '1층으로 내려가기', x: 3.4, z: -3.2, w: 2.2, d: 3.2, to: 'store4', up: false },
      { kind: 'restroom', label: '화장실', x: -3.9, z: -3.9, w: 2.2, d: 2.0 },
      { kind: 'room', label: '단체룸 (6인)', x: -3.4, z: 2.7, w: 3.2, d: 3.4, door: 'right' },
      { kind: 'selfbar', label: '서빙 스테이션', x: 0.6, z: -4.4, w: 2.0, d: 0.55 },
    ],
    tables: [
      { id: '2홀1', zone: '2층 홀', x: -0.6, z: -1.2, w: 1.2, d: 0.8, cap: 4, chairs: 'z4' },
      { id: '2홀2', zone: '2층 홀', x: 2.0, z: 0.0, w: 1.2, d: 0.8, cap: 4, chairs: 'z4' },
      { id: '2홀3', zone: '2층 홀', x: 2.0, z: 2.3, w: 1.2, d: 0.8, cap: 4, chairs: 'z4' },
      { id: '2창1', zone: '창가', x: 4.5, z: 0.2, w: 0.42, d: 1.2, cap: 2, chairs: 'bar' },
      { id: '2창2', zone: '창가', x: 4.5, z: 2.2, w: 0.42, d: 1.2, cap: 2, chairs: 'bar' },
      { id: '룸1', zone: '단체룸', x: -3.4, z: 2.7, w: 1.8, d: 0.8, cap: 6, chairs: 'z6' },
    ] }),
});

// 의자 위치(테이블 기준) → [x, z, 바라보는 방향 ry]
export function chairsOf(t) {
  const out = []; const { x, z, w, d } = t;
  const face = (cx, cz) => Math.atan2(x - cx, z - cz);
  const push = (cx, cz) => out.push([cx, cz, face(cx, cz)]);
  switch (t.chairs) {
    case 'z2': push(x, z - d / 2 - 0.42); push(x, z + d / 2 + 0.42); break;
    case 'z4': for (const s of [-1, 1]) { push(x - w * 0.25, z + s * (d / 2 + 0.42)); push(x + w * 0.25, z + s * (d / 2 + 0.42)); } break;
    case 'z6': for (const s of [-1, 1]) for (const k of [-1, 0, 1]) push(x + k * w * 0.33, z + s * (d / 2 + 0.42)); break;
    case 'z8': for (const s of [-1, 1]) for (const k of [-1.5, -0.5, 0.5, 1.5]) push(x + k * w * 0.24, z + s * (d / 2 + 0.42)); break;
    case 'ring': for (let i = 0; i < t.cap; i++) { const a = i / t.cap * Math.PI * 2; push(x + Math.cos(a) * (w / 2 + 0.45), z + Math.sin(a) * (w / 2 + 0.45)); } break;
    case 'sofa': for (const k of [-1, 1]) { out.push([x - w / 2 - 0.55, z + k * d * 0.25, Math.PI / 2]); push(x + w / 2 + 0.45, z + k * d * 0.25); } break;
    case 'bar': for (const k of [-1, 1]) out.push([x - 0.55, z + k * d * 0.25, Math.PI / 2]); break;
  }
  return out;
}

export function slotsOf(store) {
  const s = STORES[store]; const [oh, om] = s.open.split(':').map(Number), [ch, cm] = s.close.split(':').map(Number);
  const out = []; for (let m = oh * 60 + om; m <= ch * 60 + cm - s.dur; m += s.step) out.push(`${String(Math.floor(m / 60)).padStart(2, '0')}:${String(m % 60).padStart(2, '0')}`);
  return out;
}
export const won = n => n.toLocaleString('ko-KR') + '원';

// 포스 연동용 주문서 형식 (포스 API 연결 시 이 객체를 그대로 전송)
export function toPosOrder(r) {
  return {
    type: 'RESERVATION_PREORDER', store: r.store, orderId: r.id, table: r.table, zone: r.zone,
    visitDate: r.date, visitTime: r.time, party: r.size, customer: { name: r.name, phone: r.phone },
    items: r.items.map(([name, price, qty]) => ({ name, price, qty })), total: r.total, memo: r.memo || '', createdAt: r.createdAt,
  };
}
