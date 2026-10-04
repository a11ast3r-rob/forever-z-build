(() => {
  const filename = location.pathname.split('/').pop() || 'index.html';
  if (filename !== 'index.html' && filename !== '') return;
  if (document.querySelector('#parts')) return;

  const products = [
    ['Audio + sound treatment','Kenwood Excelon DMX809S','INSTALLING','selected','Head-unit wiring is connected. Final factory-frame fitment and dash reassembly are the current work.','front/rear/sub preouts • remote turn-on • final dash fitment',[['Kenwood','https://www.kenwood.com/usa/car/excelon/dmx809s/']]],
    ['Audio + sound treatment','KICKER KSS650 — 51KSS6504','INSTALLED','selected','Door component stage is installed. Speaker/tweeter wiring and polarity work are complete for this phase.','6.5-in component • doors complete • polarity logged',[['KICKER','https://www.kicker.com/51KSS6504']]],
    ['Audio + sound treatment','NVX NDA11005 5-channel amp','READY TO MOUNT','selected','Amp and mounting location are ready behind the passenger seat. Reinstall trim first, then mount and wire the amp.','5-channel • behind passenger seat • mount/wire next',[]],
    ['Audio + sound treatment','KICKER 46TL7T102 Solo-Baric L7T loaded 10','IN HAND','selected','Current bass stage is here. The loaded enclosure will run from the NVX sub channel and be strapped securely in the hatch.','10-in loaded • 2Ω • 500W RMS • strap in hatch',[]],
    ['Audio + sound treatment','4-ga amp power / signal wiring','INSTALLING','selected','Main power and ground terminate at the amp behind the passenger seat; RCA/remote run from the Kenwood. Main fuse stays close to the battery.','4-ga • fused near battery • RCA + remote',[]],
    ['Audio + sound treatment','Door / hatch damping + foam','IN PROGRESS','selected','Treat doors, hatch panels and spare well where resonance or trim contact actually needs it. Preserve drains, access and serviceability.','butyl • closed-cell foam • Tesa • no MLV requirement',[]],
    ['Tires + future wheels','Continental ExtremeContact DWS06 Plus','Selected if needed','selected','Replacement set for the stock 19-inch NISMO RAYS only if the mounted tires fail arrival inspection.','245/40ZR19 98Y XL front ×2 • 285/35ZR19 99Y rear ×2',[['Exact Tire Rack set','https://www.tirerack.com/tires/tires.jsp?fromCompare1=yes&frontTire=44YR9DWS06PXL&partnum=44YR9DWS06PXL&rearTire=835YR9DWS06P&tireMake=Continental&tireModel=ExtremeContact+DWS+06+Plus&vehicleSearch=false']]],
    ['Tires + future wheels','RAYS Gram Lights 57DR — Gunblue II','Future vision','future','The eventual 18-inch wheel look; factory NISMO RAYS stay with the car.','Target: 18×9.5 +22 F • 18×10.5 +12 R • verify brake clearance',[['Z1 / 57DR','https://www.z1motorsports.com/rays/rays/rays-gram-lights-57dr-wheel-single-gunblue-ii-p-12796.html']]],

    ['Cooling + longevity','Z1 370Z / G37 Oil Cooler Kit','PLANNED AFTER BASELINE','research','Observed oil temperature is about 220°F in current driving. Keep logging conditions; the cooler remains a longevity/thermal-margin plan rather than a reaction to one normal-use reading.','370Z/NISMO fitment • thermostatic 25-row direction',[['Z1 oil cooler','https://www.z1motorsports.com/z1-products/z1-motorsports/z1-motorsports-370z-g37-oil-cooler-kit-p-4135.html']]],

    ['Air + alignment geometry','Air Lift Performance 76010 + 76510','Planned hardware','target','Vehicle-specific Z34 air hardware for the final daily/show setup. Keep the 76510 divorced-rear layout by default rather than converting to a true rear without a compelling specialist reason.','76010 front • 76510 divorced rear • adjustable dampers',[['Front 76010','https://www.airliftperformance.com/product/76010'],['Rear 76510','https://www.airliftperformance.com/product/76510']]],
    ['Air + alignment geometry','Air Lift ALP4 — 27485','Management target','target','Current management target for the stealth install. Start pressure-based if desired and keep the optional height-sensor path available for repeatable daily ride height.','3/8-in airline management • optional height sensing • tank/compressor separate',[['ALP4 27485','https://www.airliftperformance.com/product/27485'],['ALP4 system info','https://www.airliftperformance.com/product-lines/alp4']]],
    ['Air + alignment geometry','2.5–3 gallon stealth tank + isolated compressor','MEASURE FIRST','research','Packaging target for the under-floor hatch install. Measure the actual spare-well / false-floor envelope before ordering; keep drain, manifold, wiring and compressor service access.','2.5–3 gal target • rubber-isolated compressor • serviceable false floor',[]],
    ['Air + alignment geometry','Z1 front upper control arms','Geometry','research','Front camber adjustability candidate for the final drive-height alignment.','Adjustable FUCA • buy only if final geometry needs it',[['View Z1 FUCA','https://www.z1motorsports.com/z1-products/z1-motorsports/z1-adjustable-front-upper-control-arms-370z-g37-q50-q60-p-11659.html']]],
    ['Air + alignment geometry','Z1 rear camber arms','Geometry','research','Rear camber correction candidate; final ride height and alignment numbers decide.','Adjustable rear camber • street setup priority',[['View Z1 camber arms','https://www.z1motorsports.com/z1-products/z1-motorsports/z1-370z-g37-adjustable-rear-camber-arms-p-10766.html']]],
    ['Air + alignment geometry','Z1 rear traction arms','Geometry','research','Rear-geometry shortlist item if final alignment behavior justifies the extra adjustability.','Adjustable rear traction arm • conditional purchase',[['View traction arms','https://www.z1motorsports.com/z1-products/z1-motorsports/z1-motorsports-370z-g37-adjustable-rear-traction-arms-p-12038.html']]],
    ['Air + alignment geometry','SPC 72265 camber/toe cam bolts','Alignment option','research','Lower-cost factory-style adjustment option; SPC specifies that the slots must be elongated.','Fits 2009–2020 370Z • pair • slot modification required',[['SPC 72265','https://www.spcalignment.com/product/72265']]]
  ];

  const esc = s => String(s).replace(/[&<>\"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  const groups = [...new Set(products.map(p => p[0]))];
  const groupNotes = {
    'Audio + sound treatment':'Do the deadening while the interior is apart',
    'Tires + future wheels':'Factory RAYS first; 57DR later',
    'Cooling + longevity':'Measure first; buy second',
    'Air + alignment geometry':'Inspect the 144k chassis first; build the stealth air system once'
  };

  const section = document.createElement('section');
  section.id = 'parts';
  section.innerHTML = `
    <div class="section-head"><div><div class="eyebrow">PARTS SHELF</div><h2>What we are actually looking at</h2></div><span class="status s-green">LIVE LINKS</span></div>
    <div class="fz-parts-note"><b>Linked does not mean purchased.</b> This is the current shortlist so we can jump straight back to the product instead of re-researching it. Selected/target means leading choice; research means still comparing; future means not the next purchase. Prices and stock can move.</div>
    ${groups.map(group => `
      <div class="fz-parts-group">
        <div class="fz-parts-group-head"><h3>${esc(group)}</h3><span>${esc(groupNotes[group])}</span></div>
        <div class="fz-parts-grid">
          ${products.filter(p => p[0] === group).map(p => `
            <article class="fz-product-card">
              <div class="fz-product-top"><h4>${esc(p[1])}</h4><span class="fz-product-status ${p[3]}">${esc(p[2])}</span></div>
              <p>${esc(p[4])}</p>
              <div class="fz-product-spec">${esc(p[5])}</div>
              <div class="fz-product-actions">${p[6].map((l,i) => `<a class="${i===0?'primary':''}" target="_blank" rel="noopener noreferrer" href="${esc(l[1])}">${esc(l[0])}</a>`).join('')}</div>
            </article>`).join('')}
        </div>
      </div>`).join('')}
  `;

  const service = document.querySelector('#service');
  if (service) service.before(section); else document.querySelector('.shell')?.appendChild(section);

  const nav = document.querySelector('nav');
  if (nav && !nav.querySelector('a[href="#parts"]')) {
    const a = document.createElement('a');
    a.href = '#parts';
    a.textContent = 'Parts';
    const serviceLink = nav.querySelector('a[href="#service"]');
    if (serviceLink) nav.insertBefore(a, serviceLink); else nav.appendChild(a);
  }

  const wheelSelect = document.querySelector('[data-module="wheels"]');
  const wheelCard = wheelSelect?.closest('.module');
  if (wheelCard) {
    const p = wheelCard.querySelector('p');
    if (p) p.textContent = 'Factory 19-inch NISMO RAYS stay first. If the mounted tires fail inspection, the immediate replacement is Continental ExtremeContact DWS06 Plus in 245/40ZR19 front and 285/35ZR19 rear. Gunblue 57DRs remain the later wheel vision.';
    const meta = wheelCard.querySelector('.module-meta');
    if (meta) meta.innerHTML = '<span class="mini">245/40ZR19 front</span><span class="mini">285/35ZR19 rear</span><span class="mini">57DR later</span>';
  }

  const audioBaseline = document.querySelector('[data-check="audio-baseline"]')?.closest('.check');
  if (audioBaseline) {
    const small = audioBaseline.querySelector('small');
    if (small) small.textContent = 'Door speakers and tweeters are installed. Reinstall trim next, then mount/wire the NVX amp, connect and strap the L7T sub, and tune the complete five-channel system.';
  }

  const audioNotes = [...document.querySelectorAll('#audio .note')];
  const headUnitNote = audioNotes.find(n => n.textContent.includes('Head unit selected') || n.textContent.includes('Next head-unit idea'));
  if (headUnitNote) headUnitNote.innerHTML = '<b>Live audio install:</b> Kenwood Excelon <b>DMX809S</b> + <b>KICKER 51KSS6504</b> + <b>NVX NDA11005</b> + <b>KICKER 46TL7T102 L7T 10</b>. The door stage is complete. Reinstall trim next, then mount/wire the NVX behind the passenger seat, strap in the L7T, and tune.';

  const style = document.createElement('style');
  style.textContent = `
    .fz-parts-note{border:1px solid #3a3034;background:linear-gradient(135deg,#171217,#111820);border-radius:16px;padding:13px 15px;margin-bottom:12px;font-size:10.5px;line-height:1.6;color:#c7d0dc}.fz-parts-note b{color:#fff}
    .fz-parts-group{margin-top:20px}.fz-parts-group-head{display:flex;align-items:end;justify-content:space-between;gap:12px;margin-bottom:10px}.fz-parts-group-head h3{margin:0;font-size:18px}.fz-parts-group-head span{font-size:9px;color:var(--muted);text-transform:uppercase;letter-spacing:.09em}
    .fz-parts-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}.fz-product-card{border:1px solid #29313c;border-radius:16px;padding:14px;background:linear-gradient(180deg,#101720,#0d131a);display:flex;flex-direction:column;min-height:215px;position:relative;overflow:hidden}.fz-product-card:after{content:"";position:absolute;right:-42px;bottom:-42px;width:110px;height:110px;border-radius:50%;background:radial-gradient(circle,rgba(228,61,70,.09),transparent 70%);pointer-events:none}
    .fz-product-top{display:flex;justify-content:space-between;align-items:flex-start;gap:8px}.fz-product-card h4{margin:0;font-size:14px;line-height:1.25}.fz-product-status{font-size:7.5px;line-height:1;font-weight:950;letter-spacing:.08em;text-transform:uppercase;border-radius:999px;padding:5px 7px;border:1px solid #38414d;white-space:nowrap}.fz-product-status.selected{color:#9ef3bd;border-color:#285d3a;background:#11251a}.fz-product-status.target{color:#ffb4b9;border-color:#704047;background:#2b171b}.fz-product-status.research{color:#f4d18a;border-color:#705a2d;background:#251f12}.fz-product-status.future{color:#a9cdfd;border-color:#315478;background:#111e2d}
    .fz-product-card p{font-size:10px;line-height:1.55;color:#aeb9c7;margin:10px 0}.fz-product-spec{font-size:9px;color:#d7dee7;border-top:1px solid #242c36;padding-top:9px;margin-top:auto}.fz-product-actions{display:flex;gap:7px;flex-wrap:wrap;margin-top:10px}.fz-product-actions a{text-decoration:none;border:1px solid #3a4350;border-radius:9px;padding:7px 9px;font-size:8.5px;font-weight:900;color:#e9eef5;background:#141c26;position:relative;z-index:1}.fz-product-actions a.primary{border-color:#714149;background:#32191e;color:#ffb7bc}.fz-product-actions a:hover{border-color:#8d555e}
    @media(max-width:980px){.fz-parts-grid{grid-template-columns:repeat(2,1fr)}}
    @media(max-width:650px){.fz-parts-grid{grid-template-columns:1fr}.fz-parts-group-head{align-items:start;flex-direction:column}}
  `;
  document.head.appendChild(style);
})();
