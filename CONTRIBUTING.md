# Contributing to Bullpen

Bullpen is one thing done consistently: a cast of senior-dev skills that share a
voice. The bar for a new skill is that it reads like it was always in the roster.

## Adding a skill

1. Read [`AUTHORING.md`](AUTHORING.md) — the house style is the whole contract —
   and [`skills/attacker/SKILL.md`](skills/attacker/SKILL.md) as the reference.
2. Create **one** file: `skills/<slug>/SKILL.md`. Nothing else. No hooks, no
   copies, no per-platform variants — one canonical source per skill so nothing
   can drift.
3. Follow the required structure exactly: frontmatter (`name` = folder slug,
   `description`, `argument-hint`, `license`), persona, When it fires (with YAGNI
   scoping), the mechanism, Rules, Output + a `Pattern:` line, an Intensity table
   with a worked `lite`/`full`/`ultra` example, When NOT to, Boundaries, and a
   closing aphorism.
4. Run the check:

   ```
   node scripts/check-skills.js
   ```

   It confirms the frontmatter and house sections are present. CI runs the same
   check on every PR.

## What makes a good bullpen skill

- **One instinct.** Each skill is a single senior-dev reflex, personified.
- **It knows when to stay off.** A skill that fires on trivial cases is noise.
  The "When it fires" section must scope it out of the trivial path.
- **It defers to the human.** Push once, then comply. Never weaken validation,
  error handling, security, or accessibility in service of the skill's goal.
- **It's quotable.** Terse, senior, no essays. If a line isn't sharp, cut it.

Skills are prose, not code — but they're the product, so treat wording with the
same care you'd give an API.
