import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) return json({ error: "Not signed in." }, 401);

    const supabaseUrl = Deno.env.get("SUPABASE_URL") ?? "";
    const anonKey = Deno.env.get("SUPABASE_ANON_KEY") ?? "";
    const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";

    const asUser = createClient(supabaseUrl, anonKey, {
      global: { headers: { Authorization: authHeader } },
    });
    const {
      data: { user },
      error: userError,
    } = await asUser.auth.getUser();
    if (userError || !user) return json({ error: "Not signed in." }, 401);

    const asAdmin = createClient(supabaseUrl, serviceKey);
    const body = (await req.json()) as {
      action?: string;
      email?: string;
      password?: string;
      id?: string;
    };

    if (body.action === "list") {
      const { data, error } = await asAdmin.auth.admin.listUsers({ perPage: 200 });
      if (error) throw error;
      return json({
        users: data.users.map((u) => ({
          id: u.id,
          email: u.email ?? "",
          created_at: u.created_at,
          last_sign_in_at: u.last_sign_in_at,
        })),
      });
    }

    if (body.action === "create") {
      const email = (body.email ?? "").trim().toLowerCase();
      const password = body.password ?? "";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return json({ error: "Enter a valid email address." }, 400);
      }
      if (password.length < 8) {
        return json({ error: "Password must be at least 8 characters." }, 400);
      }
      const { data, error } = await asAdmin.auth.admin.createUser({
        email,
        password,
        email_confirm: true,
      });
      if (error) throw error;
      return json({
        user: { id: data.user?.id, email: data.user?.email ?? email },
      });
    }

    if (body.action === "remove") {
      const id = body.id ?? "";
      if (!id) return json({ error: "Missing admin id." }, 400);
      if (id === user.id) return json({ error: "You cannot remove your own account." }, 400);
      const { error } = await asAdmin.auth.admin.deleteUser(id);
      if (error) throw error;
      return json({ ok: true });
    }

    return json({ error: "Unknown action." }, 400);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Something went wrong.";
    return json({ error: message }, 400);
  }
});
