# MIRZA EARN — starter app

A responsive earning/rewards dashboard prototype with a secure-backend starter.

## Important
- This package is a **demo prototype**. Sample wallet values are not money, cannot be withdrawn and do not represent guaranteed earnings.
- A real rewards business needs funded sponsor/merchant campaigns or another lawful revenue source.
- Do not collect CNIC, bank PINs, OTPs or payment passwords in this frontend.
- GitHub Pages can host the static frontend only. It cannot safely run private admin logic or store secrets.

## Run the demo
Open `index.html` in a browser, or upload `index.html`, `styles.css`, and `app.js` to a GitHub Pages repository root.

## Secure backend path (Supabase starter)
1. Create a Supabase project.
2. Run `supabase/schema.sql` in the SQL Editor.
3. Deploy Edge Functions from `supabase/functions/`.
4. Add Supabase URL and anon key to a separate config file before connecting the frontend. Never place a service-role key in browser code.
5. Implement verified sponsor callbacks / task evidence checks before crediting rewards.
6. Connect an approved payout provider or a manually reconciled business payout workflow before enabling real withdrawals.

## Security model
- User identity is managed by Supabase Auth.
- RLS limits users to their own profile, ledger and withdrawal requests.
- Wallet balance is derived from immutable ledger entries, not editable browser state.
- Only trusted server-side functions can post reward ledger entries.
- Withdrawal requests are pending until an authorized admin reviews them.
- Add rate limits, CAPTCHA, device/fraud checks, audit logs and sponsor funding reconciliation before public launch.

## Not production-ready
The Edge Function examples are starter templates and require deployment configuration, admin authorization, rate limiting, provider integration, monitoring and legal/compliance review before real money is handled.
