# Project Brief — "Spanish for Muna" (A1 → A2 course site)

**Audience for this document:** Claude Code (and Carlos, the author/maintainer).
**Purpose:** Build a small, private, interactive web course that takes one specific learner from high-A1 to A2 Spanish, with a single concrete goal. This brief is the source of truth for scope, content structure, and architecture. When in doubt, prefer the simplest thing that serves the one learner — do not generalize into a "platform."

---

## 1. Project objective

### What we are building
A self-paced, mobile-first web course of **12 units (~1 week each)** that teaches **Castilian (Spain) Spanish** to one adult learner, Muna. The site renders authored unit content from markdown, embeds curated video, and adds lightweight interactivity (flashcards, self-checks, a Claude-powered practice chat, and a Unit-12 conversation simulator).

### The single success criterion
By the end of Unit 12, Muna can hold a **relaxed 10–15 minute conversation with Carlos's Spanish grandmother** — weather, food, family, "what each has been up to." Every design and content decision is judged against this. Features that don't serve it are out of scope.

### Design philosophy
- **One user, not a platform.** No sign-up, no multi-user accounts, no CMS, no admin dashboard. Content lives as markdown files in the repo; Carlos edits those.
- **Short and fun beats comprehensive.** The learner has a short attention span and was bored by textbooks. Units are ~15–25 min of contact time. Lean, warm, visual, low-overwhelm.
- **Speaking and listening first.** Reading is light support; grammar is explained through examples, never as rule-dumps.
- **Castilian only.** Vosotros, pretérito perfecto for recent events, "vale / venga / coger" register. Latin American forms are actively avoided (the learner's prior Duolingo exposure pushed Latin American Spanish — the site should gently counter that).
- **Made-for-her touch.** The learner is a native Swahili/Kikuyu/English speaker from Kenya. Occasional light Swahili anchors (e.g., a friendly *"Karibu"* on the home page, a Swahili gloss where it genuinely clarifies an abstract concept) signal the course was built for her — but this is a garnish, not a feature. Do not build Swahili translation infrastructure.

### Non-goals (explicit)
- No user authentication / login.
- No payment, no public launch, no marketing pages.
- No progress data stored on a server (lightweight local-only progress is fine — see §4).
- No auto-generated or AI-selected video content — videos are human-vetted and hardcoded per unit (see §3).
- No native mobile app.

---

## 2. The learner (context for tone & level calibration)

- Adult woman, from Kenya. Native: Kikuyu, Swahili, English. Living in Castellón de la Plana, Spain ~1.5 years; married to a Spaniard (Carlos, the author).
- **Current level:** high A1 / early A2. Already "chunks" whole sentences rather than decoding word-by-word, so she is *not* an absolute beginner. Do not start content at "Hola, me llamo…".
- **What has worked for her:** YouTube videos. **What hasn't:** textbooks (boring, too little guidance), Duolingo (gave Latin American Spanish), tutoring (no continuity).
- **Constraints:** short attention span; wants speaking + listening, not writing drills.
- **Motivation:** emotional and concrete — connect with her husband's family, especially abuela. Build toward that warmth, not toward exam prep.

The site's tone toward the learner: encouraging, warm, never patronizing, never guilt-inducing about missed days.

---

## 3. Content

### 3.1 The 12 units (sequence is fixed — built backwards from the abuela conversation)

| # | Title | Communicative goal | Grammar focus |
|---|---|---|---|
| 1 | Saludos, presentaciones y la familia | Introduce herself, talk about family, greet relatives | ser, llamarse, tener; vosotros |
| 2 | La casa y la rutina diaria | Describe her day and home | present regular verbs, reflexives, hay |
| 3 | La compra | Shop, handle the cashier exchange | numbers/prices, quiero/quería, cuánto cuesta |
| 4 | Comida y cocinar | Talk about food, order at a bar — **★ abuela call #1 (5 min)** | gustar, encantar, me pones |
| 5 | El tiempo y las estaciones | Talk weather (the abuela icebreaker) | hace frío/calor, está lloviendo |
| 6 | Salir con amigos | Make plans, bar/club register | ir a + infinitive, quedar, vale/venga |
| 7 | La ciudad y el transporte | Get around Castellón, ask directions | estar (location), coger, prepositions |
| 8 | Hablar del pasado | Tell someone what she did — **★ abuela call #2 (5–8 min)** | pretérito perfecto (he hecho, he ido) |
| 9 | Sentimientos y opiniones | Say what she thinks/feels about Spain & Kenya | creo que, me parece que, connectors |
| 10 | Salud y el cuerpo | Pharmacy, doctor, "me duele" | doler (like gustar), necesito, tengo que |
| 11 | Planes y el futuro | Talk about plans and hopes | ir a + inf (extended), querer/gustaría |
| 12 | Conversación con la abuela | The real conversation — **★ abuela call #3** | no new grammar; integration/review |

The three "abuela calls" (Units 4, 8, 12) are checkpoints, not separate pages — they're the headline mission of those units.

### 3.2 The unit template (LOCKED — every unit page uses this exact structure)

Each unit is one page composed of these sections, in this order:

1. **Objetivo** — one plain-language communicative goal.
2. **Vocabulario** — 10–15 Castilian items, themed. Rendered as interactive flip-flashcards (see §4).
3. **Gramática** — minimal grammar note, taught through examples, not rules. Short.
4. **Diálogos** — 2–3 modeled exchanges drawn from her real-life situations.
5. **Lectura** — a 6–10 line themed excerpt, lightly glossed, read for gist. 1–2 comprehension questions (self-check).
6. **Vídeo** — ONE vetted YouTube embed (the unit's anchor), hardcoded. (Optionally a 2nd as "stretch.")
7. **Práctica** — the interactive Claude-powered practice chat, scoped to this unit's vocab/grammar (see §4).
8. **Misiones** — the homework engine (see §3.4).
9. **Cierre** — two short blocks:
   - *Lo que ya sabes* — can-do checklist in Spanish (confidence).
   - *Lo que toca practicar* — gentle "needs more reps" note.
10. **Directorio / enlaces** — a short list of extra optional resources for this unit's theme (the "if you want more" links). 1–2 are *recommended* and visually highlighted; the rest are a quiet directory.

> Content authoring note: Carlos + Claude (chat) author the per-unit content as markdown with a defined frontmatter schema. Claude Code's job is to render that markdown into the template, NOT to write the Spanish content. Define a clean, documented frontmatter schema (vocab list, video URL, mission set, links, etc.) so authoring stays simple.

### 3.3 Resources per unit
- **1–2 highlighted picks** per unit (the anchor video + the recommended reader chapter or supplementary link), shown prominently.
- **A directory of additional links** at the bottom of each unit (the broader set surfaced in research), low-key, for the curious.
- Videos are **hardcoded, human-vetted URLs** — never fetched or chosen at runtime. The companion resource pack ("Castilian Spanish Resource Pack for Muna") is the source for these.
- A single **graded reader** runs in parallel across the course (primary candidate: Difusión's *Lola Lago & asociados*, A1, audio-paired). If digital, link to it; the site does not host copyrighted reader content.

### 3.4 Homework / missions model
Each unit's **Misiones** block has a three-rung "fallback ladder" so there's always a version she can succeed at:
1. **Misión real** — out in the world (shop, bar, bus, a relative). E.g., "Complete one supermarket transaction in Spanish, including the small talk."
2. **Misión en casa** — lower stakes, with Carlos. E.g., "Tonight, ask Carlos about his day and catch three words."
3. **Reto opcional (divertido)** — a small confidence dare. E.g., "Compliment a stranger's dog in Spanish."

Render these as a friendly card with the three tiers visible. No deadlines, no streaks, no guilt mechanics. Optionally a single "¡Hecho!" (done) toggle per mission, stored locally only.

### 3.5 FAQs (a dedicated page; draft content below — refine later)
- **¿Cuánto tiempo necesito por unidad?** ~15–25 min of lesson contact, plus the mission during the week. One unit ≈ one week.
- **¿Qué hago si una unidad es difícil?** Repeat the video, do the home mission instead of the real one, move on — you can always come back. It's not a test.
- **¿Por qué español de España y no el de Duolingo?** This course teaches Castilian — the Spanish abuela and the neighbours speak. Some words differ (coger, vale, vosotros); that's intentional.
- **¿Tengo que escribir?** No. This is mostly listening and speaking. Reading is light support.
- **¿Y si no hago la misión?** Nothing happens. Do the easiest version, or skip it. The missions are where the real learning is, but no pressure.
- **¿Cómo uso el chat de práctica?** Talk to it in Spanish at your level; it corrects gently and only switches to English/Swahili hints if you ask.

### 3.6 Other pages
- **Home / Inicio** — warm welcome (a light *"Karibu / Bienvenida"* touch), the abuela north-star framing, "start here," and a unit overview.
- **Cómo funciona este curso** — the how-to-use page (pace, missions, the practice chat, the reader).
- **Glosario** (optional, nice-to-have) — cumulative vocabulary from all completed units; can be auto-built from unit frontmatter.

---

## 4. Platform & technical specification

### 4.1 Recommended stack
- **Astro** (static-site generator). Rationale: markdown-native content collections (one `.md` per unit, rendered through one layout = exactly our model), ships almost no JS by default, and its "islands" architecture lets us drop interactive widgets (flashcards, quizzes, the practice chat) into otherwise-static pages without a heavy SPA. Best fit for "12 markdown units + a few interactive islands."
- **Simpler fallback** if Astro feels heavy: plain HTML + Tailwind + a small JS file, with a build script that generates each unit page from a markdown source. Mention this only if Astro proves awkward; Astro is the default recommendation.
- **Styling:** Tailwind. Mobile-first (she'll use a phone). Warm, friendly, high-contrast, generous touch targets. Avoid a "corporate textbook" look — think friendly and a little playful.
- **Interactive islands** can be React or vanilla; React only where it earns its place (the practice chat).

### 4.2 Hosting & deployment
- **Cloudflare Pages** (or Netlify) — free tier, Git-push deploy. Either supports serverless functions, which we need for the API proxy (§4.4).

### 4.3 Interactivity (the "fun" layer) — what to build, in priority order
1. **Vocabulary flip-flashcards** — tap to flip Spanish ↔ meaning. Pure client-side. (Powers the Vocabulario section.)
2. **Self-check quizzes** — multiple-choice with instant feedback for the Lectura comprehension and a short end-of-unit check. Pure client-side.
3. **Embedded YouTube** — the anchor video(s), responsive.
4. **Local progress markers** — checkboxes / "completed" state per unit and per mission. **Use `localStorage`** (this is a real deployed site, not a claude.ai artifact, so `localStorage` is available and appropriate — no backend needed). No accounts, device-local only. Make it clear it's just on her device.
5. **Claude-powered practice chat (per unit)** — see §4.4.
6. **Abuela conversation simulator (Unit 12)** — a Claude-powered roleplay where Claude plays a warm Spanish grandmother, kept at A2, on the real topics (weather/food/family). This is the capstone feature and the most motivating single thing on the site — build it well. Same API/proxy plumbing as the practice chat.

### 4.4 The Claude-powered features — IMPORTANT architecture note
The practice chat and abuela simulator call the **Anthropic API**. Architecture requirements:
- **The API key must NOT be embedded in client-side code.** A static site that calls the API directly from the browser would expose the key to anyone who views source. This is a hard security constraint.
- **Solution:** a small **serverless proxy function** (Cloudflare Pages Function or Netlify Function) that holds the key as an environment variable/secret, receives the chat messages from the browser, calls the Anthropic API server-side, and returns the response. The browser never sees the key.
- The system prompt for each practice chat is where the pedagogy lives: cap the level (A1 for early units, A2 later), instruct Claude to respond in simple Castilian Spanish, correct gently, stay on the unit's vocab/grammar, and only offer an English/Swahili hint if the learner explicitly asks. The unit's frontmatter should feed its vocab/grammar into this system prompt.
- **Honest cost note for Carlos:** API usage is paid per token. For one learner it's trivial (cents), but the key is real money tied to an account — keep it server-side and consider a simple rate limit in the proxy function so a stuck loop can't run up usage.
- If standing up the proxy is a blocker for shipping the first unit, build Phases 1–2 (full static course) without the chat, and add the chat in Phase 3. The course is fully usable without it.

### 4.5 Content model / authoring
- One markdown file per unit in an Astro content collection, with a documented frontmatter schema covering: title, unit number, objetivo, vocab array (term + gloss), grammar note, dialogues, reading excerpt + questions, video URL(s), mission set (real/casa/reto), cierre checklists, and the links directory.
- One layout component renders the locked template (§3.2) from that frontmatter + markdown body.
- Goal: Carlos can add a new unit by writing one markdown file, nothing else.

---

## 5. Suggested build phases (incremental — ship early)
- **Phase 1 — Scaffold + Unit 1 as the template.** Set up Astro, the unit layout, the frontmatter schema, home page, and fully build **Unit 1** end-to-end (static parts + flashcards + quiz + embedded video). Deploy. This is "a couple of units / at least the first one" — the immediate goal.
- **Phase 2 — Remaining units.** Author Units 2–12 as markdown against the same template. The "Cómo funciona" and FAQ pages.
- **Phase 3 — Claude features.** The serverless API proxy, the per-unit practice chat, and the Unit-12 abuela simulator. Optional glossary auto-build.

Build for incremental shipping: the site must be useful and deployable at the end of Phase 1.

---

## 6. Guardrails for Claude Code (what NOT to do)
- Do not add authentication, databases, or multi-user features.
- Do not fetch, search for, or auto-select videos at runtime — only render the hardcoded, vetted URLs from the content files.
- Do not embed the Anthropic API key client-side. Always proxy.
- Do not write the Spanish learning content — render what's authored in markdown. (Placeholder/sample content for scaffolding is fine and encouraged for Unit 1, clearly marked as placeholder.)
- Do not build Swahili translation infrastructure — Swahili is occasional flavor text in content only.
- Do not over-engineer the design system; keep it light, warm, mobile-first.

---

## 7. Open decisions / what Carlos needs to provide
- **Stack confirmation:** Astro (recommended) vs. plain HTML+Tailwind. Default to Astro unless Carlos says otherwise.
- **Hosting:** Cloudflare Pages vs. Netlify (either fine).
- **Reader choice:** confirm the parallel graded reader (default: Difusión *Lola Lago & asociados* A1) and whether it's linked or, if a license allows, excerpted.
- **Phase 3 timing:** build the Claude chat now or after the full static course ships.
- **Unit 1 content:** the authored markdown for Unit 1 (vocab, dialogues, reading, missions, links) — to be produced in the Claude chat alongside this build. Claude Code can scaffold with clearly-marked placeholder content until the real Unit 1 markdown is ready.
