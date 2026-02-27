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
