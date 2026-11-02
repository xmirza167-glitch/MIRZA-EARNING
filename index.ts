// Supabase Edge Function starter: daily-checkin
// Deploy with verify_jwt enabled. This template intentionally refuses to credit
// funds until a funded campaign and server-side ledger transaction are configured.
import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

serve(async (req) => {
  if (req.method !== "POST") return new Response("Method not allowed", { status: 405 });
  const auth = req.headers.get("Authorization");
  if (!auth) return new Response("Unauthorized", { status: 401 });
  const supabase = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_ANON_KEY")!, {
    global: { headers: { Authorization: auth } }
  });
  const { data: { user }, error } = await supabase.auth.getUser();
  if (error || !user) return new Response("Unauthorized", { status: 401 });
  return Response.json({
    ok: false,
    mode: "setup_required",
    message: "No reward was credited. Configure a funded campaign, duplicate-claim protection and a server-only ledger transaction first."
  }, { status: 501 });
});
