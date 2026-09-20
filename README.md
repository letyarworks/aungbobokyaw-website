# Aung Bo Bo Kyaw — personal site

Next.js 14 site for **aungbobokyaw.com**, with a blog and training center
backed by Markdown files, and a WordPress-style **/admin** dashboard
(Decap CMS) for writing posts and courses from a browser instead of git.

Cross-linked with [letyarlabs.com](https://letyarlabs.com) — this is the
founder/personal site; Letyar Labs is the studio.

## Design note

This site shares Letyar's Ink/Navy foundation but uses **Heritage Lacquer**
(`#B23A22`) as its primary accent instead of Cyan. That's deliberate:
Letyar's own `COLORS.md` reserves Lacquer specifically for personal/
heritage context — a founder's own site is exactly that, so this is the
one place in the whole Letyar universe where it's meant to be the lead
color. Cyan is kept as the secondary color, used only for links back to
Letyar Labs itself.

## Stack

- Next.js 14 (App Router) + TypeScript, Tailwind CSS
- Blog posts & courses: Markdown files in `content/posts/` and
  `content/courses/`, parsed with `gray-matter` + `marked`
- `/admin`: [Decap CMS](https://decapcms.org) — edits those same Markdown
  files by committing directly to this GitHub repo

## Run locally

```bash
npm install
npm run dev
```

## Push to GitHub

```bash
cd aungbobokyaw
git init
git add .
git commit -m "Initial commit: personal site with blog, training, CMS"
git branch -M main
git remote add origin https://github.com/letyarworks/aungbobokyaw-website.git
git push -u origin main
```

If your repo name ends up different from `aungbobokyaw-website`, update the
`repo:` line in `public/admin/config.yml` to match — the CMS won't be able
to save otherwise.

## Deploy to Vercel

1. https://vercel.com/new → import the repo
2. Add your domain (`aungbobokyaw.com`) under Project → Settings → Domains,
   and point its DNS at Vercel as instructed there
3. Deploy

## Setting up the /admin dashboard (one-time)

The CMS needs a GitHub OAuth App so it can commit posts on your behalf.

1. Go to https://github.com/settings/developers → **New OAuth App**
   - Homepage URL: `https://aungbobokyaw.com`
   - Authorization callback URL: `https://aungbobokyaw.com/api/callback`
2. Copy the generated **Client ID** and **Client Secret**
3. In Vercel → Project → Settings → Environment Variables, add:
   - `OAUTH_CLIENT_ID` = the client ID
   - `OAUTH_CLIENT_SECRET` = the client secret
4. Redeploy (env var changes need a new deploy to take effect)
5. Visit `https://aungbobokyaw.com/admin` → **Login with GitHub** → you
   should land in the CMS with **Blog Posts** and **Training Courses**
   collections

Publishing a post or course in the CMS commits a new `.md` file straight
to `content/posts/` or `content/courses/` on `main`, which triggers a new
Vercel deploy automatically — so "Publish" in the dashboard really does
put it live, the same way a WordPress publish button would, just via git
instead of a database.

**This OAuth wiring hasn't been tested end-to-end against a live GitHub
OAuth App** (no network access on this end to verify it). The flow
follows the standard, well-documented pattern for self-hosting Decap CMS's
GitHub backend, but if login gets stuck after step 5, the most likely
causes are: the callback URL in the GitHub OAuth App doesn't exactly match
`/api/callback`, or the env vars weren't picked up because of a missing
redeploy. If it still doesn't work, the fallback is to point
`config.yml`'s `base_url` at `https://api.netlify.com` and connect this
repo to a free Netlify site purely for its OAuth provider — that's the
officially documented alternative and needs no custom code on this end.

## Where things live

- `content/posts/*.md` — blog posts (frontmatter: title, date, summary, tags, cover)
- `content/courses/*.md` — training courses (frontmatter: title, level, duration, price, summary)
- `lib/posts.ts` / `lib/courses.ts` — Markdown readers
- `public/admin/config.yml` — CMS field definitions; add a new collection here to manage more content types
- `app/api/auth/route.ts` + `app/api/callback/route.ts` — the GitHub OAuth handshake the CMS needs
- `app/about/page.tsx` — the founder page, with the career-progression timeline
