# Forever Z — Google Control Plane Setup

The public showcase is already built at:

**https://a11ast3r-rob.github.io/forever-z-build/showcase.html**

A private Google Sheet named **Forever Z Control Center** has also been created. Keep that Sheet private.

## Architecture

```
Your Google login
      ↓
Private Apps Script Admin
      ↓
Forever Z Control Center (private Google Sheet)
      ↓  only rows explicitly marked Public
PublicFeed tab
      ↓
Read-only Apps Script Feed
      ↓
GitHub Pages showcase.html
```

The important rule is fail-closed: **Private never leaves the control plane.**

## Private admin deployment

Create a new standalone Apps Script project and copy:

- `apps-script-admin/Code.gs`
- `apps-script-admin/Index.html`
- `apps-script-admin/appsscript.json`

In **Project Settings → Script properties**, add:

- `SPREADSHEET_ID` = the ID from the private Forever Z Control Center Sheet URL
- optional `OWNER_EMAIL` = your Google account email

Deploy as a Web app:

- Execute as: **Me**
- Who has access: **Only myself**

This gives you the phone-friendly private owner UI behind Google authentication.

## Read-only public feed deployment

Create a second standalone Apps Script project and copy:

- `apps-script-feed/Code.gs`
- `apps-script-feed/appsscript.json`

Set the same `SPREADSHEET_ID` Script Property.

Deploy as a Web app:

- Execute as: **Me**
- Who has access: **Anyone**

This project contains **no write functions** and only reads the sanitized `PublicFeed` tab.

After deployment, copy its `/exec` URL into `public-config.js`:

```js
window.FOREVER_Z_PUBLIC_FEED_URL = "https://script.google.com/macros/s/.../exec";
```

The public site then loads the live feed. If the feed is unavailable, it falls back to `public-data.js`, so the page still works.

## Publishing from the admin

- Add/update information in the private admin.
- Choose **Visibility = Public** only for information safe to share.
- Journal updates also require **Status = Published**.
- The admin rebuilds `PublicFeed` automatically after saves; there is also a manual **Publish feed** button.
- VIN, financing, receipts and private notes should remain Private.

## Public following

The site includes a static RSS feed at `feed.xml`. The next enhancement can have the public feed project generate a live RSS response too, but the current feed is usable immediately.
