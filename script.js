const trainingProgram = {
  phase1: {
    lower1: [
      { name: 'Elevated Deadlift', sets: '3x5-6', rir: '2-3 RIR', cues: 'Neutral trunk, stop on pelvic drift, smooth lockout.', notes: 'Start from blocks. Drop reps before load increases. No failure work.', video: 'https://www.youtube.com/embed/op9kVnSso6Q' },
      { name: 'Supported Split Squat', sets: '3x8/side', rir: '2-3 RIR', cues: 'Control depth, maintain rib-pelvis stack.', notes: 'Use light support. Focus on lumbopelvic control under fatigue.', video: 'https://www.youtube.com/embed/l4AAjz6nG2Q' },
      { name: 'Offset Carry Hold', sets: '3x20-30s/side', rir: 'Quality reps', cues: 'No leaning, shoulders level, breathe low.', notes: 'Progress hold → walk → distance → load.', video: 'https://www.youtube.com/embed/oUVxVYBvI6w' }
    ],
    upper: [
      { name: 'Bench Press', sets: '3x6-8', rir: '2-3 RIR', cues: 'Feet grounded, controlled eccentric.', notes: 'Low spinal stress category; keep smooth tempo.', video: 'https://www.youtube.com/embed/rT7DgCr-3pg' },
      { name: 'Strict Pull-Up', sets: '3x5-8', rir: '2 RIR', cues: 'Ribs down, no swinging.', notes: 'Avoid shoulder hanging at bottom.', video: 'https://www.youtube.com/embed/eGo4IYlbE5g' },
      { name: 'Wall Slides', sets: '3x10', rir: 'Technique focus', cues: 'Reach tall without lumbar arch.', notes: 'Standing stability accessory.', video: 'https://www.youtube.com/embed/rhJf7xM4xJQ' }
    ],
    lower2: [
      { name: 'Goblet Squat', sets: '3x8', rir: '2-3 RIR', cues: 'Stop before pelvic tuck, own the bottom.', notes: 'Moderate stress. Build tolerance before barbell squat return.', video: 'https://www.youtube.com/embed/MeIiIdhvXT4' },
      { name: 'Walking Lunge', sets: '3x10/side', rir: '2 RIR', cues: 'Tall trunk, soft controlled steps.', notes: 'Use moderate ROM; no fatigue chasing.', video: 'https://www.youtube.com/embed/wrwwXE_x-pQ' },
      { name: 'Supported Step-Down', sets: '2x8/side', rir: 'Technique focus', cues: 'Hip-knee-foot alignment.', notes: 'Preps deceleration capacity for squash.', video: 'https://www.youtube.com/embed/0vA9q9A5eQ8' }
    ],
    athletic: [
      { name: 'Standing Cable Press-Out', sets: '3x10', rir: '2-3 RIR', cues: 'Anti-extension, ribs stacked.', notes: 'Primary trunk endurance pattern under low risk.', video: 'https://www.youtube.com/embed/FQ5Qh7i8w8I' },
      { name: 'Hip March with Band', sets: '3x20 alternating', rir: 'Quality reps', cues: 'Quiet pelvis, no trunk sway.', notes: 'Build fatigue resistance in single-leg support.', video: 'https://www.youtube.com/embed/6xwGFn-J_QM' },
      { name: 'Lateral Shuffle Decel Drill', sets: '4x20s', rir: 'Submax effort', cues: 'Decelerate softly, chest tall.', notes: 'Early squash prep. Keep impacts low.', video: 'https://www.youtube.com/embed/j5K0fG3Y6mE' }
    ]
  },
  phase2: {},
  phase3: {}
};

['phase2', 'phase3'].forEach((phase, idx) => {
  const multiplier = idx + 1;
  Object.entries(trainingProgram.phase1).forEach(([day, exercises]) => {
    trainingProgram[phase][day] = exercises.map((exercise) => ({
      ...exercise,
      sets: idx === 0 ? exercise.sets.replace('3x', '4x').replace('2x', '3x') : exercise.sets,
      rir: idx === 0 ? '2 RIR' : '1-2 RIR',
      notes: idx === 0
        ? `${exercise.notes} Phase 2: add small volume only if stiffness stays stable.`
        : `${exercise.notes} Phase 3: maintain control while introducing moderate intensity.`
    }));
  });
});

const dayTitles = {
  lower1: 'Lower 1 (Hinge)',
  upper: 'Upper',
  lower2: 'Lower 2 (Squat/Lateral)',
  athletic: 'Athletic / Squash Prep'
};

const state = {
  day: 'lower1',
  phase: localStorage.getItem('phase') || 'phase1',
  theme: localStorage.getItem('theme') || 'auto'
};

const dayTitle = document.getElementById('dayTitle');
const exerciseList = document.getElementById('exerciseList');
const template = document.getElementById('exerciseTemplate');
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');

function applyTheme() {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const useDark = state.theme === 'dark' || (state.theme === 'auto' && prefersDark);
  document.documentElement.classList.toggle('dark', useDark);
  themeIcon.textContent = useDark ? '🌙' : '☀️';
}

function render() {
  dayTitle.textContent = dayTitles[state.day];
  exerciseList.innerHTML = '';

  const items = trainingProgram[state.phase][state.day];

  items.forEach((exercise, index) => {
    const node = template.content.cloneNode(true);
    const card = node.querySelector('.exercise-card');
    const iframe = node.querySelector('iframe');
    const name = node.querySelector('.exercise-name');
    const meta = node.querySelector('.exercise-meta');
    const cues = node.querySelector('.exercise-cues');
    const notes = node.querySelector('.notes');
    const toggle = node.querySelector('.collapse-toggle.small');
    const loadInput = node.querySelector('.load-input');
    const fatigue = node.querySelector('.fatigue-check');

    const exerciseKey = `${state.phase}-${state.day}-${index}`;
    const noteId = `notes-${exerciseKey}`;

    iframe.src = exercise.video;
    name.textContent = exercise.name;
    meta.textContent = `${exercise.sets} · ${exercise.rir}`;
    cues.textContent = `Cues: ${exercise.cues}`;
    notes.textContent = exercise.notes;
    notes.id = noteId;
    toggle.dataset.target = noteId;

    loadInput.value = localStorage.getItem(`load-${exerciseKey}`) || '';
    fatigue.checked = localStorage.getItem(`fatigue-${exerciseKey}`) === 'true';

    loadInput.addEventListener('input', () => {
      localStorage.setItem(`load-${exerciseKey}`, loadInput.value);
    });
    fatigue.addEventListener('change', () => {
      localStorage.setItem(`fatigue-${exerciseKey}`, String(fatigue.checked));
    });

    card.addEventListener('click', (event) => {
      if (event.target.closest('input, button, iframe, label')) return;
      card.classList.add('card-elevated');
      setTimeout(() => card.classList.remove('card-elevated'), 220);
    });

    exerciseList.appendChild(node);
  });
}

function setActiveButtons() {
  document.querySelectorAll('.day-tab').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.day === state.day);
  });
  document.querySelectorAll('.phase-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.phase === state.phase);
  });
}

document.querySelectorAll('.day-tab').forEach((btn) => {
  btn.addEventListener('click', () => {
    state.day = btn.dataset.day;
    setActiveButtons();
    render();
  });
});

document.querySelectorAll('.phase-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    state.phase = btn.dataset.phase;
    localStorage.setItem('phase', state.phase);
    setActiveButtons();
    render();
  });
});

document.addEventListener('click', (event) => {
  const toggle = event.target.closest('.collapse-toggle');
  if (!toggle) return;
  const target = document.getElementById(toggle.dataset.target);
  if (!target) return;
  target.classList.toggle('open');
  toggle.classList.toggle('open');
});

themeToggle.addEventListener('click', () => {
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
render();
