
const PLACEHOLDER_DEMO = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';

const exercises = {
  breathing_brace: { name: '90/90 Breathing + Brace', imageSrc: 'assets/images/breathing-brace.svg', demoUrl: 'https://www.youtube.com/watch?v=eFC8qW4xMiQ', cues: 'Exhale fully, ribs stacked, keep pelvis neutral.', notes: 'Brace strategy before loading.' },
  hip_flexor_rock: { name: 'Hip Flexor Rock', imageSrc: 'assets/images/hip-flexor-rock.svg', demoUrl: null, cues: 'Glute on, gentle forward rock, no lumbar arch.', notes: 'Prep hips after sitting.' },
  thoracic_open: { name: 'Thoracic Open Book', imageSrc: 'assets/images/thoracic-open-book.svg', demoUrl: 'https://www.youtube.com/watch?v=4BOTvaRaDjI', cues: 'Rotate through ribs, not low back.', notes: 'Restore thoracic motion.' },
  hinge_dowel: { name: 'Hinge Dowel Primer', imageSrc: 'assets/images/hinge-dowel.svg', demoUrl: null, cues: 'Dowel stays in contact with head-back-hips.', notes: 'Pattern primer for hinge day.' },
  squat_pry: { name: 'Goblet Squat Pry', imageSrc: 'assets/images/squat-pry.svg', demoUrl: null, cues: 'Neutral pelvis, smooth depth.', notes: 'Squat pattern primer.' },
  glute_bridge: { name: 'Glute Bridge', imageSrc: 'assets/images/glute-bridge.svg', demoUrl: 'https://www.youtube.com/watch?v=wPM8icPu6H8', cues: 'Ribs down, squeeze glutes at top.', notes: 'Posterior chain activation.' },
  elevated_deadlift: { name: 'Elevated Deadlift', imageSrc: 'assets/images/elevated-deadlift.svg', demoUrl: 'https://www.youtube.com/watch?v=op9kVnSso6Q', cues: 'Neutral trunk, no pelvic drift.', notes: 'Primary hinge strength with reduced stress.' },
  trap_bar_deadlift: { name: 'Trap Bar Deadlift', imageSrc: 'assets/images/trap-bar-deadlift.svg', demoUrl: 'https://www.youtube.com/watch?v=AWsIwe4Qvk8', cues: 'Leg drive + brace, ribs down.', notes: 'Phase 3 force production.' },
  romanian_deadlift: { name: 'Romanian Deadlift', imageSrc: 'assets/images/romanian-deadlift.svg', demoUrl: 'https://www.youtube.com/watch?v=2SHsk9AzdjA', cues: 'Hips back, shins quiet, neutral spine.', notes: 'Posterior chain endurance.' },
  split_squat: { name: 'Supported Split Squat', imageSrc: 'assets/images/split-squat.svg', demoUrl: 'https://www.youtube.com/watch?v=l4AAjz6nG2Q', cues: 'Stack ribs over pelvis, control depth.', notes: 'Single-leg control.' },
  hamstring_curl: { name: 'Hamstring Curl', imageSrc: 'assets/images/hamstring-curl.svg', demoUrl: null, cues: 'Smooth tempo, pelvis steady.', notes: 'Low spinal stress posterior chain.' },
  chest_row: { name: 'Chest-Supported Row', imageSrc: 'assets/images/chest-supported-row.svg', demoUrl: 'https://www.youtube.com/watch?v=GZbfZ033f74', cues: 'Drive elbows, avoid shrugging.', notes: 'Upper-back support for trunk control.' },
  pallof_press: { name: 'Pallof Press', imageSrc: 'assets/images/pallof-press.svg', demoUrl: 'https://www.youtube.com/watch?v=4N6I2D7fQWQ', cues: 'No trunk rotation, breathe low.', notes: 'Anti-rotation endurance.' },
  suitcase_carry: { name: 'Suitcase Carry', imageSrc: 'assets/images/suitcase-carry.svg', demoUrl: 'https://www.youtube.com/watch?v=oUVxVYBvI6w', cues: 'No lean, neutral rib cage.', notes: 'Anti-lateral flexion carry exposure.' },
  bike_intervals: { name: 'Bike Intervals (Low Impact)', imageSrc: 'assets/images/bike-intervals.svg', demoUrl: 'https://www.youtube.com/watch?v=zA2zQG8Q6M4', cues: 'Stop well before form or breathing breakdown.', notes: 'Optional conditioning.' },
  incline_walk: { name: 'Incline Walk', imageSrc: 'assets/images/incline-walk.svg', demoUrl: null, cues: 'Stay conversational, relaxed shoulders.', notes: 'Low-CNS conditioning.' },
  wall_slide: { name: 'Wall Slide', imageSrc: 'assets/images/wall-slide.svg', demoUrl: 'https://www.youtube.com/watch?v=rhJf7xM4xJQ', cues: 'Reach up without lumbar arch.', notes: 'Upper prep + trunk control.' },
  bench_press: { name: 'Bench Press', imageSrc: 'assets/images/bench-press.svg', demoUrl: 'https://www.youtube.com/watch?v=rT7DgCr-3pg', cues: 'Stable ribcage, controlled eccentric.', notes: 'Primary upper strength.' },
  pull_up: { name: 'Strict Pull-Up', imageSrc: 'assets/images/pull-up.svg', demoUrl: 'https://www.youtube.com/watch?v=eGo4IYlbE5g', cues: 'No swing, no dead-hang collapse.', notes: 'Upper pulling strength.' },
  rear_delt: { name: 'Rear Delt Raise', imageSrc: 'assets/images/rear-delt-raise.svg', demoUrl: null, cues: 'Small controlled range, no trunk sway.', notes: 'Postural upper-back assistance.' },
  lateral_lunge: { name: 'Lateral Lunge', imageSrc: 'assets/images/lateral-lunge.svg', demoUrl: null, cues: 'Sit into hip, maintain trunk control.', notes: 'Lateral prep for squash.' },
  step_down: { name: 'Supported Step-Down', imageSrc: 'assets/images/step-down.svg', demoUrl: 'https://www.youtube.com/watch?v=0vA9q9A5eQ8', cues: 'Quiet landing, knee tracks foot.', notes: 'Deceleration control.' },
  goblet_squat: { name: 'Goblet Squat', imageSrc: 'assets/images/goblet-squat.svg', demoUrl: 'https://www.youtube.com/watch?v=MeIiIdhvXT4', cues: 'Own depth, avoid end-range collapse.', notes: 'Controlled squat pattern.' },
  box_squat: { name: 'Box Squat', imageSrc: 'assets/images/box-squat.svg', demoUrl: 'https://www.youtube.com/watch?v=bEv6CCg2BC8', cues: 'Touch-and-go control, no rocking.', notes: 'Phase 2 squat progression.' },
  front_squat: { name: 'Front Squat', imageSrc: 'assets/images/front-squat.svg', demoUrl: 'https://www.youtube.com/watch?v=tLFf4f_8FvA', cues: 'Brace hard, stay tall.', notes: 'Phase 3 squat reintroduction.' },
  cable_pressout: { name: 'Standing Cable Press-Out', imageSrc: 'assets/images/cable-pressout.svg', demoUrl: 'https://www.youtube.com/watch?v=FQ5Qh7i8w8I', cues: 'Anti-extension trunk control.', notes: 'Athletic trunk endurance.' },
  lateral_shuffle: { name: 'Lateral Shuffle + Decel', imageSrc: 'assets/images/lateral-shuffle-decel.svg', demoUrl: 'https://www.youtube.com/watch?v=j5K0fG3Y6mE', cues: 'Decelerate softly, chest tall.', notes: 'Squash prep without max effort.' },
  drop_step: { name: 'Drop-Step Deceleration', imageSrc: 'assets/images/drop-step-decel.svg', demoUrl: null, cues: 'Stick landing, quiet trunk.', notes: 'Dynamic but controlled.' },
  dead_bug: { name: 'Dead Bug', imageSrc: 'assets/images/dead-bug.svg', demoUrl: 'https://www.youtube.com/watch?v=g_BYB0R-4Ws', cues: 'Back stays quiet, long exhale.', notes: 'Anti-extension exposure.' },
  side_plank: { name: 'Side Plank', imageSrc: 'assets/images/side-plank.svg', demoUrl: 'https://www.youtube.com/watch?v=K2VljzCC16g', cues: 'Straight line ear-hip-ankle.', notes: 'Lateral trunk endurance.' },
  sled_push: { name: 'Sled Push', imageSrc: 'assets/images/sled-push.svg', demoUrl: 'https://www.youtube.com/watch?v=3fD0kVYfQjA', cues: 'Steady pace, stop before position breaks.', notes: 'Low impact capacity.' },
  desk_hip: { name: 'Desk Hip Flexor Stretch', imageSrc: 'assets/images/desk-hip-flexor.svg', demoUrl: null, cues: 'Posterior pelvic tilt, gentle hold.', notes: 'Counters sitting stiffness.' },
  desk_glute: { name: 'Standing Glute Squeeze', imageSrc: 'assets/images/desk-glute-squeeze.svg', demoUrl: null, cues: 'Ribs down, squeeze glutes 3s.', notes: 'Glute wake-up.' },
  desk_tspine: { name: 'Chair Thoracic Rotation', imageSrc: 'assets/images/desk-thoracic-rotate.svg', demoUrl: null, cues: 'Rotate through ribcage only.', notes: 'Improves thoracic mobility.' },
  desk_ham: { name: 'Hamstring Floss', imageSrc: 'assets/images/desk-hamstring-floss.svg', demoUrl: 'https://www.youtube.com/watch?v=8S0u7N5zWgA', cues: 'Gentle neural glide, no forcing.', notes: 'Posterior chain relief.' },
  desk_brace: { name: 'Brace Breathing Reset', imageSrc: 'assets/images/desk-brace-breath.svg', demoUrl: 'https://www.youtube.com/watch?v=eFC8qW4xMiQ', cues: 'Exhale, stack ribs, 2s brace hold.', notes: 'Restores lumbopelvic control.' },
  desk_walk: { name: 'Brisk Walk Prompt', imageSrc: 'assets/images/desk-walk-break.svg', demoUrl: null, cues: '2–5 minutes, smooth arm swing.', notes: 'Movement breaks stiffness cycle.' },
  desk_extension: { name: 'Standing Extension Reps', imageSrc: 'assets/images/desk-extension.svg', demoUrl: null, cues: 'Small smooth extension only.', notes: 'Quick sitting reset.' }
};

const blockTitles = { warmup: 'Warm-up / Prep', strength: 'Strength', assistance: 'Assistance', trunk: 'Trunk / Stability Finisher', conditioning: 'Optional Conditioning' };
const defaultOpen = new Set(['warmup', 'strength']);

function item(id, sets, rir, progression, stopRule = '') { return { id, sets, rir, progression, stopRule }; }

const baseDays = {
  lower1: {
    howTo: 'Move smoothly and finish feeling better than you started.',
    flow: ['Warm-up (6 min)', 'Strength (15 min)', 'Assistance (14 min)', 'Trunk (8 min)', 'Optional conditioning (8 min)'],
    stiff: [item('desk_extension','1 x 8','easy','Repeat once if still stiff.'), item('desk_hip','1 x 30s/side','easy','Keep gentle.'), item('glute_bridge','1 x 8','easy','Exhale each rep.'), item('desk_walk','2 min','easy','Stand and move now.')],
    warmup: [item('breathing_brace','2 x 5 breaths','control','Stack ribs and pelvis first.'), item('hip_flexor_rock','1 x 45s/side','easy','Open front hip.'), item('thoracic_open','1 x 6/side','easy','Restore thoracic motion.'), item('hinge_dowel','2 x 8','easy','Prime hinge mechanics.')],
    strength: [item('elevated_deadlift','3 x 5-6','2-3 RIR','Volume first. Add load only if day-after stiffness stays stable.','Stop if pelvic drift, rib flare, or end-range reliance appears.')],
    assistance: [item('split_squat','3 x 8/side','2-3 RIR','ROM first, then load.'), item('romanian_deadlift','3 x 8','2-3 RIR','Keep tempo controlled.'), item('chest_row','3 x 10','2 RIR','Upper-back support without CNS spike.')],
    trunk: [item('dead_bug','2 x 8/side','control','Anti-extension exposure.'), item('suitcase_carry','3 x 25m/side','quality','Anti-rotation/carry exposure.')],
    conditioning: [item('bike_intervals','6 x 40s easy / 20s moderate','submax','Optional only. Stop before form drops.')]
  },
  upper: {
    howTo: 'Keep trunk quiet, keep effort smooth, no grinders.',
    flow: ['Warm-up (6 min)', 'Strength (14 min)', 'Assistance (15 min)', 'Trunk (8 min)', 'Optional conditioning (10 min)'],
    stiff: [item('desk_brace','1 x 4 breaths','easy','Quick reset.'), item('desk_tspine','1 x 6/side','easy','Thoracic mobility.'), item('desk_walk','2 min','easy','Move before loading.')],
    warmup: [item('wall_slide','2 x 10','control','No lumbar arch.'), item('thoracic_open','1 x 6/side','easy','Rotate through ribs.'), item('breathing_brace','1 x 4 breaths','control','Brace reset.')],
    strength: [item('bench_press','4 x 6','2-3 RIR','Add load only with stable bar speed.','Stop if trunk position degrades.')],
    assistance: [item('pull_up','3 x 5-8','2 RIR','Avoid hanging collapse.'), item('chest_row','3 x 8-10','2 RIR','Scap control.'), item('rear_delt','2 x 12','2 RIR','Light accessory only.')],
    trunk: [item('dead_bug','2 x 8/side','control','Anti-extension work.'), item('pallof_press','3 x 20s/side','quality','Anti-rotation work.')],
    conditioning: [item('incline_walk','10-15 min zone 2','easy','Do not stack with high-CNS day.')]
  },
  lower2: {
    howTo: 'Own each rep and avoid end-range compensation.',
    flow: ['Warm-up (6 min)', 'Strength (15 min)', 'Assistance (14 min)', 'Trunk (8 min)', 'Optional conditioning (8 min)'],
    stiff: [item('desk_extension','1 x 8','easy','Small range.'), item('desk_hip','1 x 30s/side','easy','Hip opener.'), item('squat_pry','1 x 6','easy','Squat prep.')],
    warmup: [item('breathing_brace','1 x 4 breaths','control','Set rib/pelvis.'), item('hip_flexor_rock','1 x 40s/side','easy','Reduce front-hip tightness.'), item('thoracic_open','1 x 6/side','easy','Rotation prep.'), item('squat_pry','2 x 6','easy','Pattern primer.')],
    strength: [item('goblet_squat','3 x 8','2-3 RIR','Pause in bottom; add load last.','Stop if pelvic tuck or rib flare increases.')],
    assistance: [item('lateral_lunge','3 x 8/side','2 RIR','Controlled lateral mechanics.'), item('step_down','3 x 8/side','2 RIR','Deceleration control.'), item('hamstring_curl','2 x 10','2 RIR','Posterior chain support.')],
    trunk: [item('dead_bug','2 x 8/side','control','Anti-extension.'), item('suitcase_carry','3 x 20m/side','quality','Carry exposure.')],
    conditioning: [item('sled_push','6 x 15m','submax','Optional. Stop well before form break.')]
  },
  athletic: {
    howTo: 'Prepare for squash with control first, speed second.',
    flow: ['Warm-up (6 min)', 'Strength (12 min)', 'Assistance (16 min)', 'Trunk (8 min)', 'Optional conditioning (8 min)'],
    stiff: [item('desk_walk','2 min','easy','Get moving first.'), item('desk_tspine','1 x 6/side','easy','Rotation quality.'), item('desk_brace','1 x 4 breaths','easy','Brace reset.')],
    warmup: [item('breathing_brace','1 x 4 breaths','control','Stacked start.'), item('thoracic_open','1 x 6/side','easy','Rotation prep.'), item('glute_bridge','1 x 10','easy','Posterior chain wake-up.'), item('lateral_lunge','1 x 6/side','easy','Lateral prep.')],
    strength: [item('cable_pressout','3 x 10','2-3 RIR','Control extension and breathing.','Stop if rib flare appears.')],
    assistance: [item('lateral_shuffle','4 x 20s','submax','Decel mechanics first.'), item('drop_step','3 x 5/side','submax','Stick landing each rep.'), item('step_down','2 x 8/side','2 RIR','Extra braking volume.')],
    trunk: [item('dead_bug','2 x 8/side','control','Anti-extension.'), item('pallof_press','3 x 15s/side','quality','Anti-rotation under movement fatigue.')],
    conditioning: [item('bike_intervals','8 min easy-moderate waves','submax','Skip if stiffness trend worsens.')]
  }
};

function clone(obj){return JSON.parse(JSON.stringify(obj));}
const program = { phase1: clone(baseDays), phase2: clone(baseDays), phase3: clone(baseDays) };

program.phase2.lower1.strength = [item('elevated_deadlift','4 x 5','2 RIR','Slight volume increase before load bump.','Stop if pelvic drift/rib flare.')];
program.phase2.lower2.strength = [item('box_squat','4 x 6','2 RIR','Controlled squat progression.','Stop if end-range reliance increases.')];
program.phase2.athletic.assistance.push(item('lateral_lunge','2 x 8/side','2 RIR','Extra lateral tolerance.'));

program.phase3.lower1.strength = [item('trap_bar_deadlift','4 x 4-5','1-2 RIR','Performance prep with clean positions.','Stop if bracing quality drops.')];
program.phase3.lower2.strength = [item('front_squat','4 x 5','1-2 RIR','Reintroduce squat intensity gradually.','Stop if pelvis/rib control is lost.')];
program.phase3.athletic.assistance = [item('lateral_shuffle','5 x 20s','submax','Faster but controlled decel.'), item('drop_step','4 x 5/side','submax','Dynamic prep with control.'), item('step_down','2 x 8/side','2 RIR','Maintain mechanics under fatigue.')];

program.phase1.desk = {
  howTo: 'Use these movement snacks to reduce sitting stiffness and restore control.',
  flow: ['2-min reset', '5-min reset', 'Optional 10-min reset'],
  stiff: [],
  reset2: [item('desk_extension','1 x 6','easy','Gentle extension.'), item('desk_hip','1 x 20s/side','easy','Hip reset.'), item('desk_brace','1 x 3 breaths','easy','Brace reset.'), item('desk_walk','60s','easy','Move now.')],
  reset5: [item('desk_hip','1 x 30s/side','easy','Hip flexor release.'), item('desk_glute','1 x 8 reps','easy','Glute wake-up.'), item('desk_tspine','1 x 6/side','easy','Thoracic rotation.'), item('desk_ham','1 x 8/side','easy','Hamstring floss.'), item('desk_brace','1 x 5 breaths','easy','Trunk bracing.')],
  reset10: [item('desk_walk','3 min','easy','Start with walk.'), item('desk_hip','2 x 30s/side','easy','Hip opening.'), item('desk_glute','2 x 10','easy','Glute activation.'), item('desk_tspine','2 x 6/side','easy','Thoracic mobility.'), item('desk_ham','2 x 8/side','easy','Posterior chain.'), item('desk_brace','2 x 4 breaths','easy','Finish with brace control.')]
};
program.phase2.desk = clone(program.phase1.desk);
program.phase3.desk = clone(program.phase1.desk);

const state = { day: 'lower1', phase: localStorage.getItem('phase') || 'phase1', theme: localStorage.getItem('theme') || 'auto' };
const dayTitles = { lower1: 'Lower 1 (Hinge)', upper: 'Upper', lower2: 'Lower 2 (Squat/Lateral)', athletic: 'Athletic / Squash Prep', desk: 'Desk Relief' };

const dayTitle = document.getElementById('dayTitle');
const dayIntro = document.getElementById('dayIntro');
const flowPanel = document.getElementById('flowPanel');
const stiffPanel = document.getElementById('stiffPanel');
const stiffBody = document.getElementById('stiffBody');
const programSections = document.getElementById('programSections');
const sectionTemplate = document.getElementById('sectionTemplate');
const cardTemplate = document.getElementById('cardTemplate');
const themeIcon = document.getElementById('themeIcon');

function applyTheme(){
  const dark = state.theme === 'dark' || (state.theme === 'auto' && matchMedia('(prefers-color-scheme: dark)').matches);
  document.documentElement.classList.toggle('dark', dark);
  themeIcon.textContent = state.theme === 'auto' ? '🌓' : dark ? '🌙' : '☀️';
}

function cardNode(blockKey, idx, eItem){
  const lib = exercises[eItem.id];
  const node = cardTemplate.content.cloneNode(true);
  const card = node.querySelector('.exercise-card');
  const img = node.querySelector('.exercise-image');
  const name = node.querySelector('.exercise-name');
  const meta = node.querySelector('.exercise-meta');
  const cues = node.querySelector('.exercise-cues');
  const prog = node.querySelector('.exercise-progression');
  const stop = node.querySelector('.exercise-stop');
  const link = node.querySelector('.demo-link');
  const badge = node.querySelector('.needs-link');
  const notes = node.querySelector('.notes');
  const toggle = node.querySelector('.collapse-toggle.small');
  const loadInput = node.querySelector('.load-input');
  const fatigue = node.querySelector('.fatigue-check');
  const key = `${state.phase}-${state.day}-${blockKey}-${idx}`;

  img.src = lib.imageSrc;
  name.textContent = lib.name;
  meta.textContent = `${eItem.sets} · ${eItem.rir}`;
  cues.textContent = `Cues: ${lib.cues}`;
  prog.textContent = `Progression: ${eItem.progression}`;
  stop.textContent = eItem.stopRule ? `Stop rule: ${eItem.stopRule}` : '';
  notes.textContent = lib.notes;
  notes.id = `notes-${key}`;
  toggle.dataset.target = notes.id;

  if (!lib.demoUrl) { link.href = PLACEHOLDER_DEMO; link.textContent = 'Demo (placeholder)'; badge.style.display = 'inline-flex'; }
  else { link.href = lib.demoUrl; link.textContent = 'Watch demo'; }

  loadInput.value = localStorage.getItem(`load-${key}`) || '';
  fatigue.checked = localStorage.getItem(`fatigue-${key}`) === 'true';
  loadInput.addEventListener('input',()=>localStorage.setItem(`load-${key}`, loadInput.value));
  fatigue.addEventListener('change',()=>localStorage.setItem(`fatigue-${key}`, String(fatigue.checked)));
  card.addEventListener('click',(ev)=>{ if (ev.target.closest('button,input,a,label')) return; card.classList.add('card-elevated'); setTimeout(()=>card.classList.remove('card-elevated'),160); });
  return node;
}

function renderList(container, blockKey, items){
  const frag = document.createDocumentFragment();
  items.forEach((it, i)=> frag.appendChild(cardNode(blockKey, i, it)));
=======
const VIDEO_URLS = {
  // Swap URLs here. Keep full YouTube embed format: https://www.youtube.com/embed/VIDEO_ID
  elevatedDeadlift: 'https://www.youtube.com/embed/op9kVnSso6Q',
  rdls: 'https://www.youtube.com/embed/2SHsk9AzdjA',
  trapBarDeadlift: 'https://www.youtube.com/embed/AWsIwe4Qvk8',
  gobletSquat: 'https://www.youtube.com/embed/MeIiIdhvXT4',
  boxSquat: 'https://www.youtube.com/embed/bEv6CCg2BC8',
  frontSquat: 'https://www.youtube.com/embed/tLFf4f_8FvA',
  splitSquat: 'https://www.youtube.com/embed/l4AAjz6nG2Q',
  walkingLunge: 'https://www.youtube.com/embed/wrwwXE_x-pQ',
  stepDown: 'https://www.youtube.com/embed/0vA9q9A5eQ8',
  benchPress: 'https://www.youtube.com/embed/rT7DgCr-3pg',
  pullup: 'https://www.youtube.com/embed/eGo4IYlbE5g',
  row: 'https://www.youtube.com/embed/GZbfZ033f74',
  wallSlide: 'https://www.youtube.com/embed/rhJf7xM4xJQ',
  offsetCarry: 'https://www.youtube.com/embed/oUVxVYBvI6w',
  pallofPress: 'https://www.youtube.com/embed/4N6I2D7fQWQ',
  cablePressout: 'https://www.youtube.com/embed/FQ5Qh7i8w8I',
  deadBug: 'https://www.youtube.com/embed/g_BYB0R-4Ws',
  sidePlank: 'https://www.youtube.com/embed/K2VljzCC16g',
  bike: 'https://www.youtube.com/embed/zA2zQG8Q6M4',
  sledPush: 'https://www.youtube.com/embed/3fD0kVYfQjA',
  lateralShuffle: 'https://www.youtube.com/embed/j5K0fG3Y6mE',
  decelStep: 'https://www.youtube.com/embed/rfRO2fR3w3g',
  hipMarchBand: 'https://www.youtube.com/embed/6xwGFn-J_QM',
  couchStretch: 'https://www.youtube.com/embed/Fj5VQ2qWwXM',
  gluteBridge: 'https://www.youtube.com/embed/wPM8icPu6H8',
  thoracicOpenBook: 'https://www.youtube.com/embed/4BOTvaRaDjI',
  hamstringFloss: 'https://www.youtube.com/embed/8S0u7N5zWgA',
  breathingBrace: 'https://www.youtube.com/embed/eFC8qW4xMiQ',
  deskHipShift: 'https://www.youtube.com/embed/9f0f5LwM2oI',
  deskExtension: 'https://www.youtube.com/embed/VUsM4wR0S6M',
  deskRotation: 'https://www.youtube.com/embed/0NQf9jz2WQ4',
  deskCalfPump: 'https://www.youtube.com/embed/EjQ0f4fR8M8',
  deskWalk: 'https://www.youtube.com/embed/Jv8n9wH0R9M',
  placeholder: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
};

function ex({ name, key, sets, rir, cues, notes, progression, needsVideo = false }) {
  return { name, video: VIDEO_URLS[key] || VIDEO_URLS.placeholder, sets, rir, cues, notes, progression, needsVideo: needsVideo || !(VIDEO_URLS[key]) };
}

const program = {
  phase1: {
    lower1: {
      warmup: [
        ex({ name: '90/90 Breathing + Brace', key: 'breathingBrace', sets: '2 x 5 breaths', rir: 'Control', cues: 'Exhale fully, ribs down, quiet pelvis.', notes: 'Reset trunk before loading hinge.', progression: 'Keep same dose; quality first.' }),
        ex({ name: 'Couch Stretch Pulses', key: 'couchStretch', sets: '1 x 45s/side', rir: 'Easy', cues: 'Glute squeeze, avoid lumbar extension.', notes: 'Targets front-of-hip tightness from sitting.', progression: 'Add 10s only if symptoms stable.' }),
        ex({ name: 'Hip Hinge Patterning', key: 'placeholder', sets: '2 x 8', rir: 'Easy', cues: 'Reach hips back, neutral spine.', notes: 'Groove hip-dominant pattern.', progression: 'Move slowly, pause at mid-shin.', needsVideo: true })
      ],
      strength: [
        ex({ name: 'Elevated Deadlift', key: 'elevatedDeadlift', sets: '3 x 5-6', rir: '2-3 RIR', cues: 'Neutral trunk, no rib flare, no pelvic drift.', notes: 'Stop set if position degrades.', progression: 'Drop reps before adding load; no failure.' })
      ],
      assistance: [
        ex({ name: 'Supported Split Squat', key: 'splitSquat', sets: '3 x 8/side', rir: '2-3 RIR', cues: 'Control depth before pelvis tucks.', notes: 'Use support as needed.', progression: 'Increase ROM first, then load.' }),
        ex({ name: 'Hamstring Curl', key: 'placeholder', sets: '3 x 10', rir: '2 RIR', cues: 'Smooth tempo, keep pelvis neutral.', notes: 'Low spinal stress posterior-chain volume.', progression: 'Add 1–2 reps weekly before load.', needsVideo: true }),
        ex({ name: 'Calf Raise', key: 'placeholder', sets: '2 x 12-15', rir: '2 RIR', cues: 'Full range with control.', notes: 'Supports lower-limb capacity.', progression: 'Add reps, then small load.', needsVideo: true })
      ],
      trunk: [
        ex({ name: 'Offset Carry Hold', key: 'offsetCarry', sets: '3 x 20-30s/side', rir: 'Quality', cues: 'No lean. Nasal breathing.', notes: 'Anti-lateral flexion and bracing under fatigue.', progression: 'Hold → walk → distance → load.' }),
        ex({ name: 'Dead Bug', key: 'deadBug', sets: '2 x 8/side', rir: 'Control', cues: 'Low back quiet; slow exhales.', notes: 'Anti-extension endurance.', progression: 'Longer lever when stable.' })
      ],
      conditioning: [
        ex({ name: 'Bike Intervals (Low Impact)', key: 'bike', sets: '6 x 40s easy/20s moderate', rir: 'Submax', cues: 'Stay conversational; avoid burn-out.', notes: 'Do only if stiffness is not trending up.', progression: 'Add one interval max per week.' })
      ]
    },
    upper: {
      warmup: [
        ex({ name: 'Wall Slides', key: 'wallSlide', sets: '2 x 10', rir: 'Control', cues: 'Reach without low-back arch.', notes: 'Scap/trunk prep.', progression: 'Keep strict form.' }),
        ex({ name: 'Thoracic Open Book', key: 'thoracicOpenBook', sets: '1 x 6/side', rir: 'Easy', cues: 'Rotate through ribcage, not lumbar.', notes: 'Restore thoracic rotation.', progression: 'Pause 2 seconds at end range.' })
      ],
      strength: [
        ex({ name: 'Bench Press', key: 'benchPress', sets: '4 x 6', rir: '2-3 RIR', cues: 'Stack ribs/pelvis, controlled descent.', notes: 'Low lumbar stress strength anchor.', progression: 'Add load only when bar speed is steady.' })
      ],
      assistance: [
        ex({ name: 'Strict Pull-Up', key: 'pullup', sets: '3 x 5-8', rir: '2 RIR', cues: 'No swing; avoid dead hang collapse.', notes: 'Vertical pull strength.', progression: 'Add rep before adding external load.' }),
        ex({ name: 'Chest-Supported Row', key: 'row', sets: '3 x 8-10', rir: '2 RIR', cues: 'Drive elbows, keep neck long.', notes: 'Posterior shoulder + scap endurance.', progression: 'Add reps then load.' }),
        ex({ name: 'Lateral Raise', key: 'placeholder', sets: '2 x 12', rir: '2 RIR', cues: 'Smooth arc, no trunk lean.', notes: 'Category 1 accessory.', progression: 'Tiny load increments.', needsVideo: true })
      ],
      trunk: [
        ex({ name: 'Pallof Press Hold', key: 'pallofPress', sets: '3 x 20s/side', rir: 'Quality', cues: 'Ribs down, no rotation.', notes: 'Anti-rotation tolerance.', progression: 'Step farther from cable anchor.' })
      ],
      conditioning: [
        ex({ name: 'Incline Walk', key: 'placeholder', sets: '10-15 min zone 2', rir: 'Easy', cues: 'Nasal breathing, relaxed trunk.', notes: 'Optional capacity without CNS stacking.', progression: 'Add 2 minutes weekly.', needsVideo: true })
      ]
    },
    lower2: {
      warmup: [
        ex({ name: 'Couch Stretch', key: 'couchStretch', sets: '1 x 45s/side', rir: 'Easy', cues: 'Glute squeeze.', notes: 'Prep hip extension.', progression: 'Add 10s if needed.' }),
        ex({ name: 'Glute Bridge ISO', key: 'gluteBridge', sets: '2 x 20s', rir: 'Control', cues: 'Ribs down, squeeze glutes.', notes: 'Pelvic control prep.', progression: 'Single-leg variation later.' })
      ],
      strength: [
        ex({ name: 'Goblet Squat', key: 'gobletSquat', sets: '3 x 8', rir: '2-3 RIR', cues: 'Stop before butt-wink; own depth.', notes: 'Controlled squat re-entry.', progression: 'Pause 1 second at bottom before load.' })
      ],
      assistance: [
        ex({ name: 'Walking Lunge', key: 'walkingLunge', sets: '3 x 10/side', rir: '2 RIR', cues: 'Tall trunk, smooth steps.', notes: 'Moderate stress unilateral work.', progression: 'Add steps before load.' }),
        ex({ name: 'Supported Step-Down', key: 'stepDown', sets: '2 x 8/side', rir: 'Control', cues: 'Hip-knee-foot aligned.', notes: 'Deceleration prep with control.', progression: 'Increase step height gradually.' })
      ],
      trunk: [
        ex({ name: 'Side Plank', key: 'sidePlank', sets: '3 x 20-30s/side', rir: 'Quality', cues: 'Long line, no sag.', notes: 'Lateral trunk endurance.', progression: 'Top-leg lift only when stable.' })
      ],
      conditioning: [
        ex({ name: 'Sled Push (Light)', key: 'sledPush', sets: '6 x 15-20m', rir: 'Submax', cues: 'Steady pace, neutral trunk.', notes: 'Low-impact conditioning.', progression: 'Add one round per week max.' })
      ]
    },
    athletic: {
      warmup: [
        ex({ name: 'Hip March + Band', key: 'hipMarchBand', sets: '2 x 16 alt', rir: 'Control', cues: 'Quiet pelvis.', notes: 'Single-leg trunk prep.', progression: 'Heavier band only if stable.' }),
        ex({ name: 'Thoracic Rotation Reach', key: 'thoracicOpenBook', sets: '1 x 6/side', rir: 'Easy', cues: 'Rotate through ribs.', notes: 'Prepare for rotational sport demands.', progression: 'Increase pause duration.' })
      ],
      strength: [
        ex({ name: 'Standing Cable Press-Out', key: 'cablePressout', sets: '3 x 10', rir: '2-3 RIR', cues: 'No extension; smooth press.', notes: 'Anti-extension endurance under load.', progression: 'Increase cable load slowly.' })
      ],
      assistance: [
        ex({ name: 'Lateral Shuffle Decel Drill', key: 'lateralShuffle', sets: '4 x 20s', rir: 'Submax', cues: 'Decelerate softly.', notes: 'Early squash prep without max effort.', progression: 'Longer work interval before speed.' }),
        ex({ name: 'Drop-Step Deceleration', key: 'decelStep', sets: '3 x 5/side', rir: 'Control', cues: 'Stick landing quietly.', notes: 'Build braking mechanics.', progression: 'Add distance, not chaos.' })
      ],
      trunk: [
        ex({ name: 'Offset Carry Walk', key: 'offsetCarry', sets: '3 x 25m/side', rir: 'Quality', cues: 'No trunk drift.', notes: 'Fatigue-resistant bracing.', progression: 'Distance before load.' })
      ],
      conditioning: [
        ex({ name: 'Tempo Bike + Mobility', key: 'bike', sets: '12 min alternating 2/1 min', rir: 'Moderate', cues: 'Stay below all-out effort.', notes: 'Avoid stacking hard CNS days.', progression: 'Add total time by 2 min.' })
      ]
    },
    desk: {
      warmup: [
        ex({ name: 'Desk Hip Shift', key: 'deskHipShift', sets: '1 x 45s/side', rir: 'Easy', cues: 'Gentle range only.', notes: 'Unloads hip/lumbar stiffness after sitting.', progression: 'Repeat 2 rounds if needed.' }),
        ex({ name: 'Standing Lumbar Extension', key: 'deskExtension', sets: '1 x 8 reps', rir: 'Easy', cues: 'Small smooth extension.', notes: 'Counter prolonged flexed sitting.', progression: 'Only pain-free range.' })
      ],
      strength: [
        ex({ name: 'Bracing Reset at Desk', key: 'breathingBrace', sets: '2 x 4 breaths', rir: 'Control', cues: 'Exhale > brace > hold 2s.', notes: 'Restores trunk stiffness strategy.', progression: 'Add one breath per set.' })
      ],
      assistance: [
        ex({ name: 'Chair Thoracic Rotation', key: 'deskRotation', sets: '1 x 6/side', rir: 'Easy', cues: 'Rotate from rib cage.', notes: 'Improve rotation for squash prep.', progression: 'Pause 2s each rep.' }),
        ex({ name: 'Calf / Ankle Pumps', key: 'deskCalfPump', sets: '1 x 30', rir: 'Easy', cues: 'Full ankle motion.', notes: 'Circulation + lower leg stiffness relief.', progression: 'Add set later in day.' })
      ],
      trunk: [
        ex({ name: 'Suitcase Hold (Backpack)', key: 'offsetCarry', sets: '2 x 20s/side', rir: 'Quality', cues: 'Stand tall, no lean.', notes: 'Desk-friendly anti-lateral flexion.', progression: 'Hold longer before adding load.' })
      ],
      conditioning: [
        ex({ name: '5-Min Brisk Walk Break', key: 'deskWalk', sets: '5 min', rir: 'Easy', cues: 'Relaxed arm swing.', notes: 'Movement snack to reduce stiffness.', progression: '2–3 times/day on high-sit days.' })
      ]
    }
  }
};

program.phase2 = JSON.parse(JSON.stringify(program.phase1));
program.phase3 = JSON.parse(JSON.stringify(program.phase1));

function mapPhase(dayData, phase) {
  const cfg = {
    phase1: { setBoost: 0, rir: '2-3 RIR', note: 'Control first. Keep stress moderate.' },
    phase2: { setBoost: 1, rir: '2 RIR', note: 'Volume up slightly. Add dynamic/lateral tolerance.' },
    phase3: { setBoost: 1, rir: '1-2 RIR', note: 'Performance prep. Controlled intensity, no failure.' }
  }[phase];

  const update = (arr, type) => arr.map((item) => {
    const copy = { ...item };
    if (/x/.test(copy.sets) && cfg.setBoost && (type === 'strength' || type === 'assistance')) {
      copy.sets = copy.sets.replace(/(\d+)\s*x/, (m, n) => `${Number(n) + cfg.setBoost} x`);
    }
    if (type !== 'warmup' && type !== 'conditioning' && type !== 'desk') copy.rir = cfg.rir;
    copy.progression = `${copy.progression} ${cfg.note}`;
    return copy;
  });

  return {
    warmup: update(dayData.warmup, 'warmup'),
    strength: update(dayData.strength, 'strength'),
    assistance: update(dayData.assistance, 'assistance'),
    trunk: update(dayData.trunk, 'trunk'),
    conditioning: update(dayData.conditioning, 'conditioning')
  };
}

Object.keys(program.phase1).forEach((day) => {
  program.phase2[day] = mapPhase(program.phase1[day], 'phase2');
  program.phase3[day] = mapPhase(program.phase1[day], 'phase3');
});

// Phase-specific exercise swaps for progression realism.
program.phase2.lower2.strength = [ex({ name: 'Box Squat (controlled depth)', key: 'boxSquat', sets: '4 x 6', rir: '2 RIR', cues: 'Own depth on box touch.', notes: 'Bridge from goblet to barbell pattern.', progression: 'Lower box only when position stays clean.' })];
program.phase3.lower2.strength = [ex({ name: 'Front Squat (light-moderate)', key: 'frontSquat', sets: '4 x 5', rir: '1-2 RIR', cues: 'Brace first, upright torso.', notes: 'Reintroduce higher-performance squat pattern.', progression: 'Add load gradually; no grind reps.' })];
program.phase3.lower1.strength = [ex({ name: 'Trap Bar Deadlift', key: 'trapBarDeadlift', sets: '4 x 4-5', rir: '1-2 RIR', cues: 'Leg drive + neutral trunk.', notes: 'Higher force output while controlling lumbar stress.', progression: 'Increase load only if day-after stiffness is stable.' })];

const mobility = {
  stiffAfterSitting: [
    ex({ name: 'Standing Extension Reps', key: 'deskExtension', sets: '1 x 8', rir: 'Easy', cues: 'Small smooth range.', notes: 'Quick lumbar extension bias.', progression: 'Repeat every 60-90 min sitting.' }),
    ex({ name: 'Couch Stretch', key: 'couchStretch', sets: '1 x 30s/side', rir: 'Easy', cues: 'Glute on, avoid arch.', notes: 'Reduce hip flexor pull.', progression: 'Add 10s if needed.' }),
    ex({ name: 'Glute Bridge x Breath', key: 'gluteBridge', sets: '1 x 8', rir: 'Easy', cues: 'Exhale at top.', notes: 'Posterior chain wake-up.', progression: 'Pause 2s each rep.' }),
    ex({ name: 'Walk + Arm Swing', key: 'deskWalk', sets: '1 x 90s', rir: 'Easy', cues: 'Relaxed gait.', notes: 'Circulation and stiffness reset.', progression: 'Go to 2 minutes.' })
  ],
  dailyReset: [
    ex({ name: 'Hip Flexor Reset', key: 'couchStretch', sets: '1 x 45s/side', rir: 'Easy', cues: 'Posterior pelvic tilt.', notes: 'Front hip release.', progression: 'Stay pain-free.' }),
    ex({ name: 'Glute Bridge', key: 'gluteBridge', sets: '1 x 12', rir: 'Easy', cues: 'Ribs down.', notes: 'Glute activation.', progression: 'Add mini-band.' }),
    ex({ name: 'Thoracic Open Book', key: 'thoracicOpenBook', sets: '1 x 6/side', rir: 'Easy', cues: 'Breathe at end range.', notes: 'Thoracic mobility.', progression: '2-second pauses.' }),
    ex({ name: 'Hamstring Floss', key: 'hamstringFloss', sets: '1 x 8/side', rir: 'Easy', cues: 'Gentle nerve glide.', notes: 'Posterior chain reset.', progression: 'Small ROM only.' }),
    ex({ name: 'Brace Breathing', key: 'breathingBrace', sets: '1 x 5 breaths', rir: 'Control', cues: 'Exhale, stack, brace.', notes: 'Trunk pressure strategy.', progression: 'Add hold to 3 seconds.' })
  ]
};

const dayTitles = {
  lower1: 'Lower 1 (Hinge)',
  upper: 'Upper',
  lower2: 'Lower 2 (Squat/Lateral)',
  athletic: 'Athletic / Squash Prep',
  desk: 'Desk Relief'
};

const sectionLabels = {
  warmup: 'Warm-up / Prep (5–8 min)',
  strength: 'Strength (Main pattern)',
  assistance: 'Assistance (2–4 exercises)',
  trunk: 'Trunk Endurance / Stability',
  conditioning: 'Optional Conditioning (Low impact)'
};

const state = {
  day: 'lower1',
  phase: localStorage.getItem('phase') || 'phase1',
  theme: localStorage.getItem('theme') || 'auto'
};

const dayTitleEl = document.getElementById('dayTitle');
const programSectionsEl = document.getElementById('programSections');
const sectionTemplate = document.getElementById('sectionTemplate');
const exerciseTemplate = document.getElementById('exerciseTemplate');
const stiffBodyEl = document.getElementById('stiffBody');
const resetBodyEl = document.getElementById('dailyResetBody');
const themeIcon = document.getElementById('themeIcon');

function applyTheme() {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const useDark = state.theme === 'dark' || (state.theme === 'auto' && prefersDark);
  document.documentElement.classList.toggle('dark', useDark);
  themeIcon.textContent = state.theme === 'auto' ? '🌓' : useDark ? '🌙' : '☀️';
}

function renderCards(items, container, keyPrefix) {
  const frag = document.createDocumentFragment();
  items.forEach((item, index) => {
    const node = exerciseTemplate.content.cloneNode(true);
    const card = node.querySelector('.exercise-card');
    const iframe = node.querySelector('iframe');
    const name = node.querySelector('.exercise-name');
    const meta = node.querySelector('.exercise-meta');
    const cues = node.querySelector('.exercise-cues');
    const prog = node.querySelector('.exercise-progression');
    const notes = node.querySelector('.notes');
    const collapseBtn = node.querySelector('.collapse-toggle.small');
    const loadInput = node.querySelector('.load-input');
    const fatigueCheck = node.querySelector('.fatigue-check');
    const missingBadge = node.querySelector('.missing-badge');

    const entryKey = `${keyPrefix}-${index}`;
    const noteId = `notes-${entryKey}`;

    iframe.src = item.video;
    name.textContent = item.name;
    meta.textContent = `${item.sets} · ${item.rir}`;
    cues.textContent = `Cues: ${item.cues}`;
    prog.textContent = `Progression: ${item.progression}`;
    notes.textContent = item.notes;
    notes.id = noteId;
    collapseBtn.dataset.target = noteId;

    if (item.needsVideo) missingBadge.style.display = 'inline-flex';

    loadInput.value = localStorage.getItem(`load-${entryKey}`) || '';
    fatigueCheck.checked = localStorage.getItem(`fatigue-${entryKey}`) === 'true';

    loadInput.addEventListener('input', () => localStorage.setItem(`load-${entryKey}`, loadInput.value));
    fatigueCheck.addEventListener('change', () => localStorage.setItem(`fatigue-${entryKey}`, String(fatigueCheck.checked)));

    card.addEventListener('click', (event) => {
      if (event.target.closest('button,input,iframe,label')) return;
      card.classList.add('card-elevated');
      setTimeout(() => card.classList.remove('card-elevated'), 180);
    });

    frag.appendChild(node);
  });

  container.innerHTML = '';
  container.appendChild(frag);
}

function renderDay(){
  const day = program[state.phase][state.day];
  dayTitle.textContent = dayTitles[state.day];
  dayIntro.innerHTML = `<h2>How to use this day</h2><p class="muted">${day.howTo}</p>`;
  flowPanel.innerHTML = `<h2>Today’s Flow</h2><ol class="flow-list">${day.flow.map(x=>`<li>${x}</li>`).join('')}</ol>`;

  if (state.day === 'desk') {
    stiffPanel.style.display = 'none';
  } else {
    stiffPanel.style.display = 'block';
    renderList(stiffBody, 'stiff', day.stiff);
  }

  const blocks = state.day === 'desk'
    ? [['reset2','2-minute reset'], ['reset5','5-minute reset'], ['reset10','Optional 10-minute stiffness reduction']]
    : Object.entries(blockTitles);

  const frag = document.createDocumentFragment();
  blocks.forEach(([key,label])=>{
    const node = sectionTemplate.content.cloneNode(true);
    const btn = node.querySelector('.collapse-toggle');
    const title = node.querySelector('.section-title');
    const body = node.querySelector('.section-body');
    const id = `sec-${state.phase}-${state.day}-${key}`;
    title.textContent = label;
    btn.dataset.target = id;
    body.id = id;
    const open = defaultOpen.has(key) || state.day === 'desk';
    if (open){btn.classList.add('open'); body.classList.add('open');}
    renderList(body, key, day[key]);
    frag.appendChild(node);
  });
  programSections.innerHTML = '';
  programSections.appendChild(frag);
}

function setActive(){
  document.querySelectorAll('.day-tab').forEach(b=>b.classList.toggle('active', b.dataset.day===state.day));
  document.querySelectorAll('.phase-btn').forEach(b=>b.classList.toggle('active', b.dataset.phase===state.phase));
}

document.querySelectorAll('.day-tab').forEach(b=>b.addEventListener('click',()=>{state.day=b.dataset.day;setActive();renderDay();}));
document.querySelectorAll('.phase-btn').forEach(b=>b.addEventListener('click',()=>{state.phase=b.dataset.phase;localStorage.setItem('phase',state.phase);setActive();renderDay();}));
document.getElementById('themeToggle').addEventListener('click',()=>{state.theme=state.theme==='auto'?'dark':state.theme==='dark'?'light':'auto';localStorage.setItem('theme',state.theme);applyTheme();});
document.addEventListener('click',(e)=>{const btn=e.target.closest('.collapse-toggle'); if(!btn)return; const target=document.getElementById(btn.dataset.target); if(!target)return; btn.classList.toggle('open'); target.classList.toggle('open');});
matchMedia('(prefers-color-scheme: dark)').addEventListener('change',()=>state.theme==='auto'&&applyTheme());
if ('serviceWorker' in navigator) window.addEventListener('load',()=>navigator.serviceWorker.register('service-worker.js'));

setActive(); applyTheme(); renderDay();
=======
function renderSections() {
  const dayProgram = program[state.phase][state.day];
  const frag = document.createDocumentFragment();

  Object.entries(sectionLabels).forEach(([key, label]) => {
    const blockNode = sectionTemplate.content.cloneNode(true);
    const btn = blockNode.querySelector('.collapse-toggle');
    const title = blockNode.querySelector('.section-title');
    const body = blockNode.querySelector('.section-body');
    const bodyId = `${state.phase}-${state.day}-${key}`;

    title.textContent = label;
    btn.dataset.target = bodyId;
    body.id = bodyId;

    renderCards(dayProgram[key], body, `${state.phase}-${state.day}-${key}`);
    frag.appendChild(blockNode);
  });

  programSectionsEl.innerHTML = '';
  programSectionsEl.appendChild(frag);
}

function renderFixedMobility() {
  renderCards(mobility.stiffAfterSitting, stiffBodyEl, 'stiffness');
  renderCards(mobility.dailyReset, resetBodyEl, 'reset');
}

function setActiveButtons() {
  document.querySelectorAll('.day-tab').forEach((btn) => btn.classList.toggle('active', btn.dataset.day === state.day));
  document.querySelectorAll('.phase-btn').forEach((btn) => btn.classList.toggle('active', btn.dataset.phase === state.phase));
}

function renderApp() {
  dayTitleEl.textContent = dayTitles[state.day];
  renderSections();
  renderFixedMobility();
}

document.querySelectorAll('.phase-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    state.phase = btn.dataset.phase;
    localStorage.setItem('phase', state.phase);
    setActiveButtons();
    renderApp();
  });
});

document.querySelectorAll('.day-tab').forEach((btn) => {
  btn.addEventListener('click', () => {
    state.day = btn.dataset.day;
    setActiveButtons();
    renderApp();
  });
});

document.addEventListener('click', (event) => {
  const btn = event.target.closest('.collapse-toggle');
  if (!btn) return;
  const target = document.getElementById(btn.dataset.target);
  if (!target) return;
  target.classList.toggle('open');
  btn.classList.toggle('open');
});

document.getElementById('themeToggle').addEventListener('click', () => {
  state.theme = state.theme === 'auto' ? 'dark' : state.theme === 'dark' ? 'light' : 'auto';
  localStorage.setItem('theme', state.theme);
  applyTheme();
});

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
  if (state.theme === 'auto') applyTheme();
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('service-worker.js'));
}

setActiveButtons();
applyTheme();
renderApp();

