(() => {
  const filename = location.pathname.split('/').pop() || 'index.html';
  const officialGuide = 'https://www.nissanusa.com/content/dam/Nissan/us/manuals-and-guides/shared/2013/2013-nissan-service-maintenance-guide.pdf';
  const ownerManual = 'https://www.nissanusa.com/content/dam/Nissan/us/manuals-and-guides/zroadster/2013/2013-Nissan-ZRoadster-owner-manual.pdf';
  const moTitleGuide = 'https://dor.mo.gov/motor-vehicle/titling-registration/';
  const moBuyingGuide = 'https://dor.mo.gov/motor-vehicle/titling-registration/buying-vehicle.html';

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

  const addSectionAfter = (target, id, html) => {
    if (!target || document.getElementById(id)) return;
    const section = document.createElement('section');
    section.id = id;
    section.innerHTML = html;
    target.insertAdjacentElement('afterend', section);
  };

  const addRecentServiceHistory = () => {
    if (document.getElementById('fz-history-2026-09')) return;
    const list = document.querySelector('#car .history-list');
    if (!list) return;
    const item = document.createElement('div');
    item.id = 'fz-history-2026-09';
    item.className = 'history-item';
    item.innerHTML = '<time>Sep 11, 2026<br><small>144,009 mi</small></time><div><b>Valve-cover gasket service + safety inspection</b><span>Jim Shorkey Nissan of Gainesville documented valve cover gasket(s) replaced, safety inspection performed, and the car washed/detailed. Treat the gasket job as freshly completed: verify it stays dry after transport and the first heat cycles rather than replacing anything again.</span></div>';
    list.appendChild(item);
  };

  const landingCards = `
    <div class="section-head"><div><div class="eyebrow">JOPLIN LANDING PLAN</div><h2>Arrival, paperwork and the first boring miles</h2></div><span class="muted">Make it legal, document what arrived, then learn the car.</span></div>
    <div class="grid three">
      <article class="card"><div class="top"><h3>Missouri title + inspection</h3><span class="status s-red">DO EARLY</span></div><p>This 2013 is outside Missouri's first-10-years safety-inspection exemption. For an out-of-state title, an authorized Missouri safety inspection that is no more than 60 days old also satisfies the ID/OD inspection requirement. Missouri gives a newly purchased vehicle 30 days from purchase to apply for title. Joplin is outside the St. Louis emissions-testing area.</p><div class="module-meta"><span class="mini">safety inspection</span><span class="mini">ID / OD</span><span class="mini">30-day title clock</span><span class="mini">no Joplin emissions test</span></div><p style="margin-bottom:0"><a href="${moTitleGuide}" target="_blank" rel="noopener noreferrer">Missouri titling requirements ↗</a> · <a href="${moBuyingGuide}" target="_blank" rel="noopener noreferrer">Buying-a-vehicle checklist ↗</a></p></article>
      <article class="card"><div class="top"><h3>Two-shop strategy if needed</h3><span class="status s-blue">CALL AHEAD</span></div><p><b>Torq'd Performance & Repair</b> is a good local candidate for the modification / health assessment because they work with aftermarket and performance hardware. <b>Allan's Auto Repair</b> is listed as a Missouri safety-inspection station and is a practical state-inspection/general-repair option. One shop can do both only if it is currently an authorized inspection station and comfortable evaluating a 370Z.</p><div class="module-meta"><span class="mini">Torq'd · 417-623-8677</span><span class="mini">Allan's · 417-396-0583</span><span class="mini">confirm appointment + scope</span></div></article>
      <article class="card"><div class="top"><h3>As-delivered modification audit</h3><span class="status s-amber">IDENTIFY FIRST</span></div><p>Photograph the engine bay and underside before buying parts. Confirm whether the dual intake boxes/tubes are OEM, whether the exhaust/cats/muffler are factory NISMO pieces, and whether the suspension has OEM springs/dampers or aftermarket springs/coilovers. Also note wheel spacers/lugs, brake hardware, wiring, audio changes and anything that looks freshly disturbed.</p><div class="module-meta"><span class="mini">intakes</span><span class="mini">exhaust + cats</span><span class="mini">springs / coilovers</span><span class="mini">wiring + audio</span></div></article>
      <article class="card"><div class="top"><h3>Daily-driver rules</h3><span class="status s-green">KEEP IT EASY</span></div><p>After startup, drive gently while the drivetrain comes up to temperature; save high RPM and heavy load until oil temperature is established. Approach steep driveways and speed bumps diagonally when clearance requires it. Our conservative ownership target is oil/filter about every 4,000 miles or 6 months, whichever comes first, while using condition/history to avoid pointless duplicate service.</p><div class="module-meta"><span class="mini">warm gently</span><span class="mini">protect NISMO lip</span><span class="mini">4k / 6mo owner target</span><span class="mini">log every service</span></div></article>
      <article class="card"><div class="top"><h3>Fresh valve-cover work</h3><span class="status s-green">DONE · VERIFY</span></div><p>The valve-cover gasket(s) were replaced September 11, 2026 at 144,009 miles. On arrival, inspect the rear/outer cover seams for fresh oil, then recheck after several heat cycles and during routine under-hood checks. A dry repair stays in the “done” column; no reason to reopen it.</p><div class="module-meta"><span class="mini">09/11/2026</span><span class="mini">144,009 mi</span><span class="mini">watch for re-seep</span></div></article>
      <article class="card"><div class="top"><h3>Clutch + rear diff watch items</h3><span class="status s-amber">KNOWN Z34 ITEMS</span></div><p>Keep the clutch reservoir clean and at the proper level. For this car, Nissan specifies Genuine Nissan Super Heavy Duty Brake Fluid or equivalent <b>DOT 3</b> for the clutch circuit; do not turn “DOT 4” into a blind requirement. Keep watching the rear differential bushing for dark silicone-fluid streaking or excess movement and replace only if evidence says it is failing.</p><div class="module-meta"><span class="mini">clutch fluid · DOT 3 OEM spec</span><span class="mini">CSC behavior</span><span class="mini">diff bushing leak / movement</span></div><p style="margin-bottom:0"><a href="${ownerManual}" target="_blank" rel="noopener noreferrer">2013 Nissan owner manual ↗</a></p></article>
    </div>`;

  if (filename === 'index.html' || filename === '') {
    addRecentServiceHistory();

    setSmall('[data-check="transport-photos"]', 'Before moving it: all four corners, roof, windshield, wheels, NISMO front lip / bumper underside, rocker edges, visible underside and odometer. Photograph any loading-ramp scrape immediately.');
    setSmall('[data-check="damage-compare"]', 'Compare every panel, wheel and the low front aero to dealer photos. Also look at the pavement under the engine/transmission/rear diff for fresh transport-day drips before driving away.');
    setSmall('[data-check="cold-start"]', 'Rattle, smoke, belt noise, idle stability and warning lights. Note crank speed; if transport left the battery weak, test/charge it rather than judging the engine from a low-voltage start.');
    setSmall('[data-check="leaks"]', 'Especially freshly serviced valve-cover seams, front cover, transmission, rear diff bushing and driveline seals. Recheck the ground after the first drive/heat cycle.');
    setSmall('[data-check="bushings"]', 'Front compression bushings, diff bushing, ball joints, tie rods, sway links, steering linkage, engine/trans mounts and wheel-bearing play/noise. Look for dark streaks below the fluid-filled rear diff bushing.');
    setSmall('[data-check="fluids"]', 'Oil, coolant, brake, clutch, manual-transmission, differential and power-steering fluid. Clutch circuit OEM spec is Nissan Super Heavy Duty / equivalent DOT 3. Replace by evidence, age and history—not ritual.');
    setSmall('[data-check="coolers"]', 'Inspect radiator fins/end tanks, both fans, upper/lower coolant hoses and clamps, radiator cap, coolant-to-oil heat exchanger, and power-steering cooler/hoses/lines.');
    setSmall('[data-check="tires-brakes"]', 'Tread depth, DOT dates, wear pattern, pad thickness, rotor/caliper condition, plus flexible brake hoses and hard lines.');

    const arrival = document.querySelector('#arrival');
    addSectionAfter(arrival, 'fz-joplin-landing', landingCards);

    const mechanical = document.querySelector('#mechanical');
    if (mechanical) {
      const plugMini = [...mechanical.querySelectorAll('.mini')].find(el => el.textContent.toLowerCase().includes('spark plugs'));
      if (plugMini) plugMini.textContent = 'NISMO plugs: 60k interval • confirm ~120k service';

      const resetNote = [...mechanical.querySelectorAll('.note')].find(el => el.textContent.includes('Likely first-month clock reset'));
      if (resetNote) {
        resetNote.innerHTML = '<b>Likely first-month clock reset unless receipts prove otherwise:</b> manual-trans fluid • differential fluid • brake fluid • clutch fluid • coolant if age unknown • power-steering fluid by condition/history • <b>NISMO spark plugs if there is no proof of the ~120k service</b> (Nissan specifies 60,000 mi / 48 months for the NISMO) • engine + cabin filters • drive belt, tensioner/idlers and PCV by condition. Oil/filter service was documented in May 2026, and valve-cover gasket service was documented 09/11/2026 at 144,009 miles, so verify those items rather than paying to repeat fresh work.';
      }

      addCoverageNote(mechanical, 'fz-144k-coverage', `<b>144k / age coverage — do not skip:</b> brake hoses + hard lines • steering rack boots/linkage and power-steering lines • fuel lines/connections and vapor hoses • upper/lower radiator hoses, clamps and cap • belt tensioner/idlers • engine + cabin filters • alignment/ride-height check if tire wear, pull, steering-center or handling suggests it. <b>This is inspection-first, not a parts cannon.</b> Nissan's 2013 guide lists NISMO spark-plug replacement at 60,000 miles / 48 months, so at 144k we want documentation of the ~120k service or we establish a fresh baseline. <a href="${officialGuide}" target="_blank" rel="noopener noreferrer">Official Nissan 2013 maintenance guide ↗</a>`);
    }
    return;
  }

  if (filename === 'baseline.html') {
    setSmall('[data-key="arrival.transportPhotos"]', 'All sides, wheels, glass, NISMO aero and odometer before the transporter leaves. Get a low photo under the front lip / bumper for fresh ramp scrapes and glance under the car for new fluid spots before moving it.');
    setSmall('[data-key="arrival.coldStart"]', 'Smoke, rattles, knocks, idle and warning lights before revving. Note crank speed; if it is sluggish after transport, test/charge the battery and record charging voltage.');
    setSmall('[data-key="arrival.fluids"]', 'Oil, coolant, brake, clutch and power-steering levels plus visible leaks. Pay special attention to the freshly replaced valve-cover gasket seams and recheck after a heat cycle.');
    setSmall('[data-key="arrival.underbody"]', '2018 damage area, subframes, oil pan, rack/boots and mounts, exhaust, mounts, diff, axles, hubs, bushings, visible fuel/EVAP lines, and dark streaking below the rear differential bushing.');
    setSmall('[data-key="arrival.cooling"]', 'Radiator, both fans, upper/lower hoses and clamps, radiator cap, factory engine oil heat exchanger, plus power-steering cooler / hoses / lines.');
    setSmall('[data-key="arrival.tiresBrakes"]', 'Tread / date codes / wear plus pads, rotors, calipers, flexible brake hoses and hard lines. Note pull or steering-center clues that justify an alignment check.');
    setSmall('[data-key="arrival.roadTest"]', 'Clutch, all gears, steering, brakes, bearings, vibration, diff clunks and suspension noise; note pull, crooked steering wheel or odd tire behavior before alignment.');

    const arrivalSection = document.querySelector('[data-key="arrival.transportPhotos"]')?.closest('section');
    addSectionAfter(arrivalSection, 'fz-baseline-joplin', landingCards);

    const plugLabel = [...document.querySelectorAll('#services b')].find(el => el.textContent.includes('NISMO spark plugs'));
    if (plugLabel) plugLabel.textContent = 'NISMO spark plugs — 60k interval / confirm ~120k service';

    const coolingText = document.querySelector('#systems textarea[placeholder*="Radiator, fans, hoses"]');
    if (coolingText) coolingText.placeholder = 'Radiator, fans, upper/lower hoses, clamps, radiator cap, pressure test, factory engine oil heat exchanger, P/S cooler/lines and observed temps.';

    const steeringText = document.querySelector('#systems textarea[placeholder*="Rack, tie rods"]');
    if (steeringText) steeringText.placeholder = 'Rack and boots, tie rods/linkage, pump noise, hoses, P/S cooler/lines and play.';

    const brakeText = document.querySelector('#systems textarea[placeholder*="Pad thickness"]');
    if (brakeText) brakeText.placeholder = 'Pad thickness, rotors, calipers, flexible hoses, hard lines and fluid condition.';

    const clutchText = document.querySelector('#systems textarea[placeholder*="master / CSC"]');
    if (clutchText) clutchText.placeholder = 'Engagement, slip, hot/cold pedal return, fluid level/condition, and identify whether the 2017 master/slave repair left an OEM-style internal CSC, HD internal CSC, or external/CMAK-style conversion; clutch-fluid OEM spec is Nissan Super Heavy Duty or equivalent DOT 3.';

    const serviceGrid = document.querySelector('#services');
    if (serviceGrid) {
      const host = serviceGrid.closest('section') || serviceGrid.parentElement;
      addCoverageNote(host, 'fz-baseline-coverage', `<b>Age/mileage items explicitly covered:</b> brake hoses/hard lines • steering rack boots/linkage • power-steering hoses/lines • fuel lines/connections + vapor hoses • radiator hoses/clamps/cap • engine/cabin filters • drive belt, tensioner/idlers + PCV • alignment only when wear/pull/steering-center evidence calls for it. <b>NISMO plug rule:</b> Nissan's 2013 guide specifies 60,000 miles / 48 months; at 144k, verify the ~120k service or replace to establish the baseline. <b>Fresh-work rule:</b> valve-cover gasket(s) were replaced 09/11/2026 at 144,009 miles, so inspect for a re-seep rather than repeating the repair. <a href="${officialGuide}" target="_blank" rel="noopener noreferrer">Official Nissan guide ↗</a>`);
    }
  }
})();
