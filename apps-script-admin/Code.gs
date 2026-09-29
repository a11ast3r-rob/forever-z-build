const FZ = {
  SHEETS: {updates:'Updates',service:'Service',parts:'Parts',media:'Media',settings:'Settings',publicFeed:'PublicFeed'}
};

function doGet() {
  authorize_();
  return HtmlService.createTemplateFromFile('Index').evaluate()
    .setTitle('Forever Z Control Center')
    .addMetaTag('viewport','width=device-width, initial-scale=1, viewport-fit=cover');
}

function getDashboard() {
  authorize_();
  return {
    updates: readObjects_(FZ.SHEETS.updates, 50),
    service: readObjects_(FZ.SHEETS.service, 50),
    parts: readObjects_(FZ.SHEETS.parts, 100),
    media: readObjects_(FZ.SHEETS.media, 100),
    settings: getSettings_()
  };
}

function saveUpdate(p) {
  authorize_();
  const now = isoNow_();
  append_(FZ.SHEETS.updates, [
    p.ID || ('upd-' + Utilities.getUuid().slice(0,8)),
    p.Date || today_(),
    num_(p.Mileage),
    clean_(p.Title),
    clean_(p.Summary),
    clean_(p.Category || 'Update'),
    clean_(p.Status || 'Draft'),
    clean_(p.Visibility || 'Private'),
    clean_(p.HeroImageURL),
    slug_(p.ShareSlug || p.Title),
    now, now
  ]);
  publishPublicFeed_();
  return getDashboard();
}

function saveService(p) {
  authorize_();
  append_(FZ.SHEETS.service, [
    p.Date || today_(), num_(p.Mileage), clean_(p.Type || 'Maintenance'),
    clean_(p.Item), clean_(p.Brand), clean_(p.PartNumber), clean_(p.Shop),
    money_(p.Cost), clean_(p.Notes), clean_(p.Visibility || 'Private'), clean_(p.ReceiptURL)
  ]);
  publishPublicFeed_();
  return getDashboard();
}

function savePart(p) {
  authorize_();
  append_(FZ.SHEETS.parts, [
    clean_(p.Status || 'Research'), clean_(p.Category), clean_(p.Part), clean_(p.Brand),
    clean_(p.PartNumber), money_(p.Cost), clean_(p.Vendor), clean_(p.OrderedDate),
    clean_(p.InstalledDate), clean_(p.Visibility || 'Private'), clean_(p.PublicNote), clean_(p.PrivateNote)
  ]);
  publishPublicFeed_();
  return getDashboard();
}

function saveMedia(p) {
  authorize_();
  append_(FZ.SHEETS.media, [
    p.Date || today_(), clean_(p.Type || 'Photo'), clean_(p.Title), clean_(p.URL),
    clean_(p.Caption), clean_(p.Visibility || 'Private'), num_(p.SortOrder), clean_(p.RelatedUpdateID)
  ]);
  publishPublicFeed_();
  return getDashboard();
}

function publishPublicFeed() {
  authorize_();
  publishPublicFeed_();
  return {ok:true, publishedAt:isoNow_()};
}

function publishPublicFeed_() {
  const ss = ss_();
  const out = ss.getSheetByName(FZ.SHEETS.publicFeed);
  const rows = [];

  readObjects_(FZ.SHEETS.updates, 500).forEach(x => {
    if (x.Visibility === 'Public' && x.Status === 'Published') rows.push([
      'Update', x.ID, x.Date, x.Mileage, x.Title, x.Summary, x.Category,
      x.HeroImageURL || '', x.ShareSlug || slug_(x.Title), x.UpdatedAt || isoNow_(), 'Updates'
    ]);
  });

  readObjects_(FZ.SHEETS.service, 500).forEach((x,i) => {
    if (x.Visibility === 'Public') rows.push([
      'Service', 'svc-' + slug_((x.Date||'')+'-'+(x['Item / Part']||i)), x.Date, x.Mileage,
      x['Item / Part'] || x.Type || 'Service', x.Notes || '', x.Type || 'Maintenance',
      '', slug_((x.Date||'')+'-'+(x['Item / Part']||'service')), isoNow_(), 'Service'
    ]);
  });

  out.getRange(2,1,Math.max(out.getMaxRows()-1,1),out.getMaxColumns()).clearContent();
  if (rows.length) out.getRange(2,1,rows.length,11).setValues(rows);
}

function readObjects_(name, limit) {
  const sh = ss_().getSheetByName(name);
  if (!sh) throw new Error('Missing sheet: ' + name);
  const last = sh.getLastRow();
  if (last < 2) return [];
  const width = sh.getLastColumn();
  const values = sh.getRange(1,1,last,width).getDisplayValues();
  const headers = values.shift();
  return values.slice(-Math.max(1,limit||200)).reverse().filter(r=>r.some(Boolean)).map(r => {
    const o={}; headers.forEach((h,i)=>o[h]=r[i]); return o;
  });
}

function append_(name, values) {
  const lock=LockService.getDocumentLock(); lock.waitLock(10000);
  try { ss_().getSheetByName(name).appendRow(values); }
  finally { lock.releaseLock(); }
}

function getSettings_() {
  const rows=readObjects_(FZ.SHEETS.settings,200), o={};
  rows.forEach(r=>{ if(r.Key) o[r.Key]=r.Value; });
  return o;
}

function ss_() {
  const id=PropertiesService.getScriptProperties().getProperty('SPREADSHEET_ID');
  if(!id) throw new Error('Set Script Property SPREADSHEET_ID first.');
  return SpreadsheetApp.openById(id);
}

function authorize_() {
  // Deploy this admin app with "Who has access: Only myself".
  // Optional defense-in-depth: set OWNER_EMAIL. When Google exposes ActiveUser,
  // a mismatched account is rejected.
  const owner=(PropertiesService.getScriptProperties().getProperty('OWNER_EMAIL')||'').toLowerCase();
  const active=(Session.getActiveUser().getEmail()||'').toLowerCase();
  if(owner && active && owner!==active) throw new Error('Access denied.');
}

function clean_(v){ return String(v==null?'':v).trim().slice(0,5000); }
function num_(v){ const n=Number(v); return Number.isFinite(n)?n:''; }
function money_(v){ const n=Number(v); return Number.isFinite(n)?n:''; }
function today_(){ return Utilities.formatDate(new Date(), Session.getScriptTimeZone()||'America/Chicago','yyyy-MM-dd'); }
function isoNow_(){ return Utilities.formatDate(new Date(), 'GMT', "yyyy-MM-dd'T'HH:mm:ss'Z'"); }
function slug_(s){ return clean_(s).toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'').slice(0,80); }
