# Member database — Google Sheet (no backend)

Every membership signup and donation can be appended as a row to a Google Sheet
you own. This gives APEC a live, sortable, exportable member database with no
server to run. The website posts each signup to a Google **Apps Script Web App**
bound to the Sheet; there are **no API keys** to manage.

## How it fits together

```
Regular / Life / Donation  → Stripe → /api/stripe/webhook  ─┐
Free student signup form   → /api/membership/student       ─┴→ notifyNewMember()
     → POST to MEMBER_SINK_URL (this Web App) → appends a row to the Sheet
     → emails APEC a notification + emails the member a welcome/thank-you
```

The same helper also emails APEC a notification and sends the member a
welcome/thank-you email. The Sheet is purely additive — if `MEMBER_SINK_URL` is
unset, everything else still works.

## One-time setup (~5 minutes)

1. Create a new Google Sheet (e.g. **"APEC Members"**).
2. In the Sheet: **Extensions → Apps Script**.
3. Delete any placeholder code and paste the script from
   [`apec-member-sink.gs`](./apec-member-sink.gs) (in this folder).
4. Click **Deploy → New deployment**.
   - **Type:** Web app
   - **Execute as:** Me
   - **Who has access:** Anyone
   - Click **Deploy**, authorize when prompted, and **copy the Web app URL**
     (looks like `https://script.google.com/macros/s/AKfy.../exec`).
5. In **Vercel → Project → Settings → Environment Variables**, add:
   - `MEMBER_SINK_URL` = the Web app URL you copied.
   - (optional) `MEMBER_FROM_EMAIL` = a verified sender once apecanada.ca is
     verified in Resend, e.g. `APEC <noreply@apecanada.ca>`.
6. Redeploy the site (or it applies on the next deploy). New signups will start
   appearing as rows.

## Columns written

| Received At | Type | Name | Email | Phone | Amount | Billing | Source | Details |
|---|---|---|---|---|---|---|---|---|

`Type` distinguishes memberships from donations, so you can filter the Sheet
into a members view and a donations view.

## Updating the script later

If you change the script, create a **new deployment version** (Deploy → Manage
deployments → edit → new version) so the change goes live. The Web app URL stays
the same.
