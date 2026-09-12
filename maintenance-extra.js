(() => {
  const filename = location.pathname.split('/').pop() || 'index.html';
  const officialGuide = 'https://www.nissanusa.com/content/dam/Nissan/us/manuals-and-guides/shared/2013/2013-nissan-service-maintenance-guide.pdf';

  const setSmall = (selector, text) => {
    const row = document.querySelector(selector)?.closest('label, .check');
    const small = row?.querySelector('small');
    if (small) small.textContent = text;
  };

  const addCoverageNote = (target, id, html) => {
    if (!target || document.getElementById(id)) return;
    const note = document.createElement('div');
    note.id = id;
    note.className = 'note';
    note.style.marginTop = '12px';
    note.innerHTML = html;
    target.appendChild(note);
  };

  if (filename === 'index.html' || filename === '') {
    setSmall('[data-check="underbody"]', 'Subframe, rails, oil pan, steering rack/boots and mounts, suspension pickup points, NISMO braces/dampers, exhaust, pinch welds and visible fuel/EVAP lines.');
    setSmall('[data-check="bushings"]', 'Front compression bushings, diff bushing, ball joints, tie rods, sway links, steering linkage, engine/trans mounts and wheel-bearing play/noise.');
    setSmall('[data-check="fluids"]', 'Oil, coolant, brake, clutch, manual-transmission, differential and power-steering fluid. Replace by evidence, age and history—not ritual.');
    setSmall('[data-check="coolers"]', 'Inspect radiator fins/end tanks, both fans, upper/lower coolant hoses and clamps, radiator cap, coolant-to-oil heat exchanger, and power-steering cooler/hoses/lines.');
    setSmall('[data-check="tires-brakes"]', 'Tread depth, DOT dates, wear pattern, pad thickness, rotor/caliper condition, plus flexible brake hoses and hard lines.');

    const mechanical = document.querySelector('#mechanical');
    if (mechanical) {
      const plugMini = [...mechanical.querySelectorAll('.mini')].find(el => el.textContent.toLowerCase().includes('spark plugs'));
      if (plugMini) plugMini.textContent = 'NISMO plugs: 60k interval • confirm ~120k service';

      const resetNote = [...mechanical.querySelectorAll('.note')].find(el => el.textContent.includes('Likely first-month clock reset'));
      if (resetNote) {
        resetNote.innerHTML = '<b>Likely first-month clock reset unless receipts prove otherwise:</b> manual-trans fluid • differential fluid • brake fluid • clutch fluid • coolant if age unknown • power-steering fluid by condition/history • <b>NISMO spark plugs if there is no proof of the ~120k service</b> (Nissan specifies 60,000 mi / 48 months for the NISMO) • engine + cabin filters • drive belt, tensioner/idlers and PCV by condition. Recent oil service is documented, so verify rather than changing it just for ceremony.';
      }

      addCoverageNote(mechanical, 'fz-144k-coverage', `<b>144k / age coverage — do not skip:</b> brake hoses + hard lines • steering rack boots/linkage and power-steering lines • fuel lines/connections and vapor hoses • upper/lower radiator hoses, clamps and cap • belt tensioner/idlers • engine + cabin filters • alignment/ride-height check if tire wear, pull, steering-center or handling suggests it. <b>This is inspection-first, not a parts cannon.</b> Nissan's 2013 guide lists NISMO spark-plug replacement at 60,000 miles / 48 months, so at 144k we want documentation of the ~120k service or we establish a fresh baseline. <a href="${officialGuide}" target="_blank" rel="noopener noreferrer">Official Nissan 2013 maintenance guide ↗</a>`);
    }
    return;
  }

  if (filename === 'baseline.html') {
    setSmall('[data-key="arrival.underbody"]', '2018 damage area, subframes, oil pan, rack/boots and mounts, exhaust, mounts, diff, axles, hubs, bushings, and visible fuel/EVAP lines or seepage.');
    setSmall('[data-key="arrival.cooling"]', 'Radiator, both fans, upper/lower hoses and clamps, radiator cap, factory engine oil heat exchanger, plus power-steering cooler / hoses / lines.');
    setSmall('[data-key="arrival.tiresBrakes"]', 'Tread / date codes / wear plus pads, rotors, calipers, flexible brake hoses and hard lines. Note pull or steering-center clues that justify an alignment check.');
    setSmall('[data-key="arrival.roadTest"]', 'Clutch, all gears, steering, brakes, bearings, vibration, diff clunks and suspension noise; note pull, crooked steering wheel or odd tire behavior before alignment.');

    const plugLabel = [...document.querySelectorAll('#services b')].find(el => el.textContent.includes('NISMO spark plugs'));
    if (plugLabel) plugLabel.textContent = 'NISMO spark plugs — 60k interval / confirm ~120k service';

    const coolingText = document.querySelector('#systems textarea[placeholder*="Radiator, fans, hoses"]');
    if (coolingText) coolingText.placeholder = 'Radiator, fans, upper/lower hoses, clamps, radiator cap, pressure test, factory engine oil heat exchanger, P/S cooler/lines and observed temps.';

    const steeringText = document.querySelector('#systems textarea[placeholder*="Rack, tie rods"]');
    if (steeringText) steeringText.placeholder = 'Rack and boots, tie rods/linkage, pump noise, hoses, P/S cooler/lines and play.';

    const brakeText = document.querySelector('#systems textarea[placeholder*="Pad thickness"]');
    if (brakeText) brakeText.placeholder = 'Pad thickness, rotors, calipers, flexible hoses, hard lines and fluid condition.';

    const serviceGrid = document.querySelector('#services');
    if (serviceGrid) {
      const host = serviceGrid.closest('section') || serviceGrid.parentElement;
      addCoverageNote(host, 'fz-baseline-coverage', `<b>Age/mileage items explicitly covered:</b> brake hoses/hard lines • steering rack boots/linkage • power-steering hoses/lines • fuel lines/connections + vapor hoses • radiator hoses/clamps/cap • engine/cabin filters • drive belt, tensioner/idlers + PCV • alignment only when wear/pull/steering-center evidence calls for it. <b>NISMO plug rule:</b> Nissan's 2013 guide specifies 60,000 miles / 48 months; at 144k, verify the ~120k service or replace to establish the baseline. <a href="${officialGuide}" target="_blank" rel="noopener noreferrer">Official Nissan guide ↗</a>`);
    }
  }
})();
