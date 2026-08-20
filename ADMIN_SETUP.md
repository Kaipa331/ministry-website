# Admin Dashboard Setup

The ministry website now has a dashboard at `/admin` where you can publish YouTube messages and live
sessions, upload audio, post announcements, and add gallery photos.

It runs on [Supabase](https://supabase.com), which provides the login, the database, and the file
storage. The free tier is enough for this site.

Until Supabase is connected the public website keeps working exactly as before, using the content
that ships with the code. Nothing breaks while you set this up.

---

## One-time setup

### 1. Create the Supabase project

1. Sign up at [supabase.com](https://supabase.com) and create a new project.
2. Choose a region close to your audience (for Malawi and Mozambique, **EU West** or
   **South Africa** if offered).
3. Save the database password somewhere safe.

### 2. Create the tables

1. In the Supabase dashboard open **SQL Editor → New query**.
2. Copy the entire contents of `supabase/schema.sql` from this project and paste it in.
3. Click **Run**.

This creates the four tables, locks them down so only a signed-in admin can change anything,
creates the `audio` and `gallery` storage buckets, and copies across the messages and announcements
that were previously hardcoded on the site. If you already ran this once, run it again after pulling
updates — it is safe, and it adds new columns such as announcement pictures.

### 3. Connect the website

1. In Supabase go to **Project Settings → API**.
2. Copy the **Project URL** and the **anon public** key.
3. In this project, copy `.env.example` to a new file named `.env.local` and paste the values in:

   ```
   VITE_SUPABASE_URL=https://your-project-ref.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-public-key
   ```

4. Restart the dev server (`pnpm dev`) so it picks up the new file.

The anon key is safe to put in the website — the database rules only allow it to read published
content. Never put the `service_role` key in this project.

### 4. Create the admin login

1. In Supabase go to **Authentication → Users → Add user**.
2. Enter the ministry email and a strong password, and tick **Auto Confirm User**.
3. Go to **Authentication → Providers → Email** and turn **Enable sign ups** _off_.

That last step matters: it means nobody can create their own account from the public website.
Additional admins are added from **Team & Password** inside the dashboard.

### 5. Deploy the admin function (needed to add other admins)

Creating another admin account has to happen on the server, otherwise the current login would be
replaced. Deploy the function in the repo at `supabase/functions/admins`:

1. In the Supabase dashboard open **Edge Functions → Deploy a new function**.
2. Name it exactly `admins`.
3. Paste the contents of `supabase/functions/admins/index.ts` and deploy.

Or, if the Supabase CLI is installed and the project is linked:

```
supabase functions deploy admins
```

Password changes work without this function. Adding or removing other admins does not, until it is
deployed.

### 6. Deploy the website

When hosting the site (Netlify, Vercel, Cloudflare Pages, etc.), add the same two variables
`VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` in the host's environment variable settings.
`.env.local` is deliberately not committed to git.

The site is a single-page app, so configure the host to serve `index.html` for unknown paths,
otherwise refreshing on `/admin` will show a 404.

---

## Using the dashboard

Go to `/admin` (there is also a small **Admin** link at the bottom of every page) and sign in.

### Videos & Live

Services stay on YouTube — the dashboard only stores the link.

- **To publish a recorded service:** paste the YouTube link, add a title and subtitle, and save.
- **To go live:** start the stream on YouTube, paste its link here, and turn on **This is live now**.
  A red "Live now" bar appears at the bottom of the home page and the Watch page plays it first.
  Turn the switch off when the session ends.
- **Featured** decides which message gets the main spot on the home page.
- Only one video can be live or featured at a time; setting a new one clears the old.

### Audio Sessions

Upload recordings straight from the computer. They appear on the Watch page with a player so
visitors can listen without leaving the site. Keep files under roughly 50 MB so they load quickly.

### Announcements

One place for three kinds of post, all shown on the News & Events page:

- **News** — ministry updates and notices
- **Upcoming meeting** — programs and gatherings still ahead
- **Past event** — outstanding events that already happened

Any of these can include an optional picture or flyer. It appears with the post on the News & Events page.

The date is free text, so you can write "12 Sep 2026" or "Sundays · 9:00 PM", whichever reads better.

### Gallery

Upload one or several photos at once. They show on the Gallery page.

### Hiding instead of deleting

Every item has a **Visible** switch. Turning it off removes the item from the public website but
keeps it in the dashboard, so you can bring it back later. Delete is permanent, and for audio and
photos it removes the uploaded file too.

### Team & Password

Signed-in admins can change their own password, add another admin with an email and temporary
password, and remove someone else’s access. Keep **Enable sign ups** turned off in Supabase so
visitors cannot register themselves.

---

## Notes

- Testimonies are still moderated by hand in `src/data/content.ts` and are not part of the
  dashboard.
- If a section has no items in the dashboard yet, the site falls back to the original built-in
  content so no page ever looks empty.

### Free tier: projects pause when idle

Supabase pauses a free project after about a week with no activity. The website will not break — it
quietly falls back to the built-in content — but anything published from the dashboard stops showing
until the project is resumed from the Supabase dashboard.

If the ministry posts most weeks this rarely happens. If it becomes a nuisance, either sign in to the
dashboard now and then, or move to the paid tier, which does not pause.
