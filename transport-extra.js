(() => {
  const filename = location.pathname.split('/').pop() || 'index.html';
  if (filename !== 'index.html' && filename !== '') return;

  const arrival = document.querySelector('#arrival');
  if (!arrival || document.getElementById('fz-transport-live')) return;

  // Bring the mission-control copy up to the actual September 17 state without
  // forcing the tracker into the "picked up / in transit" stage prematurely.
  const paperworkStage = document.querySelector('.stage[data-stage="1"]');
  const transitStage = document.querySelector('.stage[data-stage="2"]');
  if (paperworkStage) {
    const title = paperworkStage.querySelector('b');
    const detail = paperworkStage.querySelector('span');
    if (title) title.textContent = 'Transport queued';
    if (detail) detail.textContent = 'Paid • driver assignment pending';
  }
  if (transitStage) {
    const title = transitStage.querySelector('b');
    const detail = transitStage.querySelector('span');
    if (title) title.textContent = 'Picked up';
    if (detail) detail.textContent = 'Carrier has the Z';
  }
  const heroStage = document.getElementById('heroStage');
  if (heroStage && paperworkStage?.classList.contains('active')) heroStage.textContent = 'Transport paid • driver pending';

  const moneyStatus = document.querySelector('#money .section-head .status');
  if (moneyStatus) {
    moneyStatus.textContent = 'PURCHASE SIGNED • TRANSPORT PAID';
    moneyStatus.className = 'status s-green';
  }
  const financeNote = document.querySelector('#money .finance-note');
  if (financeNote) {
    financeNote.innerHTML = '<b>Purchase paperwork is signed and transport is paid separately.</b> Insurance and GAP are handled. Keep the signed contract as the source of truth for Amount Financed, APR, Finance Charge and Total of Payments; the ~$230 figure on this page remains the working payment reference unless the signed contract says otherwise.';
  }

  const style = document.createElement('style');
  style.textContent = `
    #fz-transport-live{border:1px solid #61343b;background:linear-gradient(180deg,rgba(63,24,30,.28),rgba(17,22,30,.55));border-radius:22px;padding:18px;margin:18px 0}
    #fz-transport-live .fz-transport-status{display:flex;gap:8px;flex-wrap:wrap;margin:10px 0 14px}
    #fz-transport-live .fz-copyline{display:flex;gap:8px;align-items:stretch;margin-top:10px}
    #fz-transport-live .fz-copyline code{flex:1;white-space:normal;line-height:1.5;border:1px solid #303844;background:#0a1017;border-radius:12px;padding:11px;color:#dbe2ea;font-size:10px}
    #fz-transport-live .fz-transport-checks{display:grid;gap:8px;margin-top:12px}
    #fz-transport-live .fz-callout{border:1px dashed #70434a;background:#171319;border-radius:14px;padding:12px;font-size:10.5px;line-height:1.55;color:#d9dfe7}
    #fz-transport-live .fz-source{font-size:9px;color:#9ca7b7;margin-top:8px}
    @media(max-width:650px){#fz-transport-live{padding:13px;border-radius:17px}#fz-transport-live .fz-copyline{flex-direction:column}}
  `;
  document.head.appendChild(style);

  const section = document.createElement('section');
  section.id = 'fz-transport-live';
  section.innerHTML = `
    <div class="section-head">
      <div><div class="eyebrow">TRANSPORT CONTROL • SEP 17, 2026</div><h2>Paid. Ready. Waiting on the actual carrier.</h2></div>
      <div><span class="status s-red">DRIVER PENDING</span> <span id="fzTransportCount" class="muted">0 / 8 prep items</span></div>
    </div>

    <div class="fz-transport-status">
      <span class="mini">✓ purchase signed</span>
      <span class="mini">✓ dealer paid</span>
      <span class="mini">✓ Blue Horse paid in full</span>
      <span class="mini">✓ 09/11 valve-cover service documented</span>
      <span class="mini">waiting: carrier / driver assignment</span>
    </div>

    <div class="grid three">
      <article class="card">
        <div class="top"><h3>Today's ask to Blue Horse</h3><span class="status s-red">DO NOW</span></div>
        <p>Ask for a concrete pickup expectation, not another open-ended “we'll let you know.” The useful answer is whether a driver is assigned and whether pickup by Friday is genuinely realistic.</p>
        <div class="fz-copyline"><code id="fzTransportMessage">Good morning! Checking in on the Z this morning. Do we have a driver assigned yet? Is there a realistic chance of pickup by Friday, September 18? If not, what pickup date should I realistically plan around? Thanks!</code><button class="btn" type="button" id="fzCopyTransport">Copy</button></div>
      </article>

      <article class="card">
        <div class="top"><h3>Dealer before pickup</h3><span class="status s-amber">PROTECT THE CAR</span></div>
        <p>Get a current pre-transport photo set before the carrier touches the Z: all four corners, both sides, front/rear, roof, windshield, every wheel, interior, odometer, fuel level and especially the NISMO front lip from above and underneath.</p>
        <div class="module-meta"><span class="mini">timestamp/current photos</span><span class="mini">odometer</span><span class="mini">fuel</span><span class="mini">lip underside</span></div>
      </article>

      <article class="card">
        <div class="top"><h3>Verify the real carrier</h3><span class="status s-amber">AFTER ASSIGNMENT</span></div>
        <p>Blue Horse is the broker/coordinator. Once assigned, record the company that physically hauls the car: carrier name, driver, phone, USDOT, MC number, pickup window and ETA. Get the actual carrier's cargo-insurance certificate/limits rather than stopping at “we're insured.”</p>
        <div class="module-meta"><span class="mini">carrier name</span><span class="mini">USDOT / MC</span><span class="mini">COI + cargo limit</span><span class="mini">driver phone</span></div>
      </article>
    </div>

    <div class="fz-transport-checks">
      <label class="check"><input type="checkbox" data-fz-transport="dealer-photos"><div><b>Dealer pre-transport condition photos saved</b><small>Include NISMO lip underside, wheels, glass, odometer and fuel level.</small></div><span class="pill">DEALER</span></label>
      <label class="check"><input type="checkbox" data-fz-transport="carrier-assigned"><div><b>Actual carrier + driver assigned</b><small>Get carrier/company name, driver name, phone, pickup window and ETA.</small></div><span class="pill">CARRIER</span></label>
      <label class="check"><input type="checkbox" data-fz-transport="dot-mc"><div><b>USDOT + MC numbers recorded</b><small>Verify the company that physically has the car, not just the broker name.</small></div><span class="pill">VERIFY</span></label>
      <label class="check"><input type="checkbox" data-fz-transport="insurance"><div><b>Actual carrier cargo insurance verified</b><small>Save the certificate/coverage limit if provided.</small></div><span class="pill">INSURANCE</span></label>
      <label class="check"><input type="checkbox" data-fz-transport="lip-warning"><div><b>Low NISMO lip/loading clearance confirmed</b><small>Tell the driver this is a low NISMO and confirm appropriate ramp/loading clearance.</small></div><span class="pill">NISMO</span></label>
      <label class="check"><input type="checkbox" data-fz-transport="pickup-bol"><div><b>Pickup BOL / condition report saved</b><small>Get a photo/copy after the carrier loads the car.</small></div><span class="pill">BOL</span></label>
      <label class="check"><input type="checkbox" data-fz-transport="keys-tools"><div><b>Keys + wheel-lock/emergency tools inventoried</b><small>Confirm both key fobs, wheel-lock key if fitted, manuals and whatever spare/inflator/jack equipment is actually with the car.</small></div><span class="pill">INVENTORY</span></label>
      <label class="check"><input type="checkbox" data-fz-transport="pickup-window"><div><b>Pickup + delivery windows confirmed</b><small>Also ask whether the Z stays on one carrier or can be transferred en route.</small></div><span class="pill">SCHEDULE</span></label>
    </div>

    <div class="grid three" style="margin-top:12px">
      <article class="card">
        <div class="top"><h3>Delivery handoff</h3><span class="status s-red">BEFORE SIGNING</span></div>
        <p>Inspect the car with the driver present before signing a clean delivery receipt. Compare against dealer photos. Note and photograph any visible new damage on the BOL before the driver leaves; a clean receipt can make a later visible-damage claim much harder.</p>
        <div class="module-meta"><span class="mini">lip + wheels first</span><span class="mini">glass + panels</span><span class="mini">odometer</span><span class="mini">warning lights</span></div>
      </article>

      <article class="card">
        <div class="top"><h3>Missouri clock</h3><span class="status s-amber">PURCHASE DATE</span></div>
        <p>The Missouri 30-day title/application clock runs from the purchase date on the paperwork, not from the day transport finally reaches Joplin. For the out-of-state title, plan the Missouri ID/odometer requirement and applicable safety inspection. Jasper County is outside Missouri's emissions-testing area.</p>
        <p style="margin-bottom:0"><a href="https://dor.mo.gov/motor-vehicle/titling-registration/buying-vehicle.html" target="_blank" rel="noopener noreferrer">Missouri buying/title guide ↗</a></p>
      </article>

      <article class="card">
        <div class="top"><h3>Immediate tire plan</h3><span class="status s-green">SELECTED</span></div>
        <p>Use the factory 19-inch wheels first: Continental ExtremeContact DWS06 Plus, 245/40ZR19 98Y XL front and 285/35ZR19 99Y rear. The 18-inch RAYS concept elsewhere on the site remains a future build vision, not the immediate arrival tire purchase.</p>
        <div class="module-meta"><span class="mini">245/40ZR19 front</span><span class="mini">285/35ZR19 rear</span><span class="mini">4-wheel alignment</span></div>
      </article>

      <article class="card">
        <div class="top"><h3>144k mechanical adds</h3><span class="status s-amber">INSPECTION FIRST</span></div>
        <p>Add these to the first-shop baseline: clutch hydraulics/CSC behavior, rear differential mount/bushing, heater-hose connector near the firewall, exhaust hardware/leaks, primary grounds, and an oil-consumption baseline. These are inspection points — not permission to fire the parts cannon.</p>
        <div class="module-meta"><span class="mini">CSC / clutch fluid</span><span class="mini">diff bushing</span><span class="mini">heater-hose coupler</span><span class="mini">oil level log</span></div>
      </article>

      <article class="card">
        <div class="top"><h3>Audio + air share the hatch</h3><span class="status s-blue">LAYOUT FIRST</span></div>
        <p>Before building either system, measure one combined hatch floor. Reserve the sub/amp/DSP space and the two hidden air tanks, compressor(s), manifold, drains and service access together. Size battery power, fusing and grounds for audio + compressor load as one electrical system.</p>
        <div class="module-meta"><span class="mini">shared false floor</span><span class="mini">service access</span><span class="mini">combined current draw</span></div>
      </article>

      <article class="card">
        <div class="top"><h3>Money / coverage</h3><span class="status s-green">CORE DONE</span></div>
        <p>Insurance: done. GAP: done. Extended warranty/service contract remains optional. At 144k miles, only consider one after reading the actual coverage, mileage eligibility, seal/gasket, clutch/manual-transmission, modification and pre-existing-condition exclusions.</p>
        <div class="module-meta"><span class="mini">insurance ✓</span><span class="mini">GAP ✓</span><span class="mini">warranty optional</span></div>
      </article>
    </div>

    <div class="fz-callout" style="margin-top:12px"><b>Order of operations:</b> carrier assignment → dealer condition photos → carrier/insurance verification → low-lip loading warning → pickup BOL → delivery inspection before clean signature → Missouri paperwork/inspection → mechanical baseline → factory-size Continentals + alignment → drive and learn the car → audio/air layout → modifications.</div>
    <div class="fz-source">This panel tracks open arrival work only. Completed purchase/service history stays in the main build tracker and service history.</div>
  `;
  arrival.insertAdjacentElement('beforebegin', section);

  const storePrefix = 'forever-z-transport-v1:';
  const boxes = [...section.querySelectorAll('[data-fz-transport]')];
  const count = document.getElementById('fzTransportCount');
  const drawCount = () => {
    const done = boxes.filter(box => box.checked).length;
    if (count) count.textContent = `${done} / ${boxes.length} prep items`;
  };
  boxes.forEach(box => {
    try {
      const value = localStorage.getItem(storePrefix + box.dataset.fzTransport);
      if (value !== null) box.checked = value === '1';
    } catch (_) {}
    box.addEventListener('change', () => {
      try { localStorage.setItem(storePrefix + box.dataset.fzTransport, box.checked ? '1' : '0'); } catch (_) {}
      drawCount();
    });
  });
  drawCount();

  const copyButton = document.getElementById('fzCopyTransport');
  copyButton?.addEventListener('click', async () => {
    const text = document.getElementById('fzTransportMessage')?.textContent || '';
    try {
      await navigator.clipboard.writeText(text);
      copyButton.textContent = 'Copied ✓';
      setTimeout(() => { copyButton.textContent = 'Copy'; }, 1400);
    } catch (_) {
      alert(text);
    }
  });
})();