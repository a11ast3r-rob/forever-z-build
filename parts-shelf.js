(() => {
  const filename = location.pathname.split('/').pop() || 'index.html';
  if (filename !== 'index.html' && filename !== '') return;
  if (document.querySelector('#parts')) return;

  const products = [
    ['Audio + sound treatment','Kenwood Excelon DMX809S','ORDERED','selected','Head unit is ordered together with the needed radio/install/interface parts. Keep the Bose system functional for the first install stage.','wireless CarPlay/Android Auto • 13-band EQ + DTA • 3 camera inputs • 3×5V preouts',[['Kenwood','https://www.kenwood.com/usa/car/excelon/dmx809s/']]],
    ['Audio + sound treatment','KICKER KSS650 — 51KSS6504','NEXT BUY','target','Front speakers are the current weak point. This 6.5-inch 4-ohm component set gives us the clean front stage we want with separate silk-dome tweeters.','6.5-in component • 4Ω • 15–125W RMS',[['KICKER','https://www.kicker.com/51KSS6504']]],
    ['Audio + sound treatment','KICKER KEY200.4','NEXT BUY','target','Compact four-channel DSP amp for the front stage: clean power plus automatic EQ, time alignment and crossover setup.','50W×4 @ 4Ω • auto 40-band EQ • time alignment',[['KICKER','https://shop.kicker.com/key-2004-4-channel-smart-amplifier']]],
    ['Audio + sound treatment','Factory Bose sub','KEEP NOW','selected','The factory sub still sounds decent. Fix and tune the front stage first; replace the bass only if it becomes the weak link afterward.','no spend now • reassess after front-stage tune',[]],
    ['Audio + sound treatment','Wicked C.A.S. 370Z Corner 1×10 Enclosure','FUTURE OPTION','future','Preferred stealth enclosure if we outgrow the Bose bass. Driver-side corner box preserves hatch space and matches the clean OEM-plus direction.','0.7 ft³ sealed • 5.9-in mounting depth',[['Wicked C.A.S.','https://shop.wickedcas.com/nissan-370z-corner-1x10-enclosure-sub-box-subwoofer-enclosure-stealth-look.html']]],
    ['Audio + sound treatment','KICKER CompRT 10 — 48CWRT104','FUTURE MATCH','future','Raw 10-inch driver matched to the Wicked C.A.S. enclosure range; dual 4-ohm coils can be wired to a 2-ohm final load.','400W RMS • DVC 4Ω • 0.4–1.25 ft³ sealed',[['KICKER','https://shop.kicker.com/comp-rt-10-4-ohm-subwoofer']]],
    ['Audio + sound treatment','Dedicated mono sub amp','WAIT','research','Only buy if/when the stealth 10 replaces the Bose sub. Match roughly 400–500W RMS at a 2-ohm load; exact amp waits until the sub build is real.','~400–500W RMS @ 2Ω • dedicated bass amp',[]],
    ['Audio + sound treatment','Door damping + foam','WITH FRONTS','selected','Treat the doors while installing the KSS650 components: useful butyl damping, rigid/sealed speaker mounting and foam/decoupling where trim can buzz.','doors first • preserve drains/service access',[['Dynamat','https://dynamat.com/products/dynamat-xtreme-door-kit']]],

    ['Tires + future wheels','Continental ExtremeContact DWS06 Plus','Selected if needed','selected','Replacement set for the stock 19-inch NISMO RAYS only if the mounted tires fail arrival inspection.','245/40ZR19 98Y XL front ×2 • 285/35ZR19 99Y rear ×2',[['Exact Tire Rack set','https://www.tirerack.com/tires/tires.jsp?fromCompare1=yes&frontTire=44YR9DWS06PXL&partnum=44YR9DWS06PXL&rearTire=835YR9DWS06P&tireMake=Continental&tireModel=ExtremeContact+DWS+06+Plus&vehicleSearch=false']]],
    ['Tires + future wheels','RAYS Gram Lights 57DR — Gunblue II','Future vision','future','The eventual 18-inch wheel look; factory NISMO RAYS stay with the car.','Target: 18×9.5 +22 F • 18×10.5 +12 R • verify brake clearance',[['Z1 / 57DR','https://www.z1motorsports.com/rays/rays/rays-gram-lights-57dr-wheel-single-gunblue-ii-p-12796.html']]],

    ['Cooling + longevity','Z1 370Z / G37 Oil Cooler Kit','PLANNED AFTER BASELINE','research','Observed oil temperature is about 220°F in current driving. Keep logging conditions; the cooler remains a longevity/thermal-margin plan rather than a reaction to one normal-use reading.','370Z/NISMO fitment • thermostatic 25-row direction',[['Z1 oil cooler','https://www.z1motorsports.com/z1-products/z1-motorsports/z1-motorsports-370z-g37-oil-cooler-kit-p-4135.html']]],

    ['Air + alignment geometry','Air Lift Performance 76010 + 76510','Planned hardware','target','Front and rear Z34 air hardware tied to the hidden hatch/audio packaging plan.','76010 front • 76510 rear • adjustable dampers',[['Front 76010','https://www.airliftperformance.com/product/76010'],['Rear 76510','https://www.airliftperformance.com/product/76510']]],
    ['Air + alignment geometry','Air Lift ALP4 — 27485','Management target','target','Current management target for the hidden dual-compressor/tank concept.','3/8-in airline management • tank/compressors separate',[['ALP4 27485','https://www.airliftperformance.com/product/27485'],['ALP4 system info','https://www.airliftperformance.com/product-lines/alp4']]],
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
    'Air + alignment geometry':'One system, aligned at real drive height'
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
    if (small) small.textContent = 'Front speakers sound shot/weak; the Bose sub still sounds decent. DMX809S + install/interface parts are ordered. Fix the front stage first, keep the Bose sub, and reassess bass after tuning.';
  }

  const audioNotes = [...document.querySelectorAll('#audio .note')];
  const headUnitNote = audioNotes.find(n => n.textContent.includes('Head unit selected') || n.textContent.includes('Next head-unit idea'));
  if (headUnitNote) headUnitNote.innerHTML = '<b>Head unit ordered:</b> Kenwood Excelon <b>DMX809S</b> plus the needed radio/install/interface parts. Front-stage next buys are <b>KICKER 51KSS6504 components + KEY200.4</b>. Keep the factory Bose sub for now; the Wicked C.A.S. single-10 corner system is an optional later upgrade, not a current requirement.';

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
