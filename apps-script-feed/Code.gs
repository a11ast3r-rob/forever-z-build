function doGet(e) {
  const data = buildFeed_();
  const format = String((e && e.parameter && e.parameter.format) || 'json').toLowerCase();
  if (format === 'js') {
    return ContentService.createTextOutput('window.FOREVER_Z_REMOTE_DATA=' + JSON.stringify(data) + ';')
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }
  return ContentService.createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

function buildFeed_() {
  const id = PropertiesService.getScriptProperties().getProperty('SPREADSHEET_ID');
  if (!id) throw new Error('Set Script Property SPREADSHEET_ID first.');
  const sh = SpreadsheetApp.openById(id).getSheetByName('PublicFeed');
  const values = sh.getDataRange().getDisplayValues();
  const headers = values.shift() || [];
  const items = values.filter(r=>r.some(Boolean)).map(r=>{
    const o={}; headers.forEach((h,i)=>o[h]=r[i]);
    return {
      type:o.Type,id:o.ID,date:o.Date,mileage:Number(o.Mileage)||null,title:o.Title,
      summary:o.Summary,category:o.Category,heroImageURL:o.HeroImageURL,slug:o.Slug,updatedAt:o.UpdatedAt
    };
  });
  return {updatedAt:new Date().toISOString(),items:items,parts:[]};
}
