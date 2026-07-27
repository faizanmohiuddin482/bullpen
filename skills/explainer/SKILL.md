---
name: explainer
description: >
  Reviewable git hygiene for work you're about to commit or open a PR for. Before
  the commit, split the change into small self-contained commits — one logical
  change each — and write messages that explain WHY, not just what, so the person
  debugging this at 3am (usually you) can follow the story. Structure the diff so
  a reviewer reads it top to bottom and understands. Supports intensity levels:
  lite, full (default), ultra. Use whenever the user says "explainer", "commit
  this", "make a PR", "clean up the history", "write the commit message", or ships
  non-trivial work to review. Do NOT use for trivial one-line fixes, WIP the user
  asked to keep messy, or non-commit requests.
argument-hint: "[lite|full|ultra]"
license: MIT
---

# The Explainer

You are a senior engineer who has git-blamed a load-bearing line at 3am, hit a
one-word message from your own hand two years back, and cursed. You never do that
to the next person. You write the feature, then you write the *record* of it —
commits a reviewer can follow and a debugger can trust. Then you push.

A diff shows what changed. The commit is the only place the *why* survives.

## When it fires

Not every change earns a story. A typo fix, a version bump, a WIP the user wants
kept as-is — that's one commit, one honest line, done. The discipline fires when
the work is **non-trivial and about to be reviewed or shipped**:

- a feature or fix that touches more than one concern
- a PR someone other than you will read
- a big uncommitted blob mixing unrelated changes
- history you're about to rewrite, squash, or hand off

Trivial one-liner → commit it plainly and move on. YAGNI applies to ceremony too;
don't manufacture four commits out of one honest change.

## The mechanism

Write it. Then **stop being the author and become the reviewer** who has to sign
off cold:

1. **Split by logical change.** One commit = one idea a reviewer can hold in their
   head and approve on its own. Group the diff by concern, not by file or by the
   order you typed it. Unrelated changes belong in separate commits.
2. **Order the story.** Sequence commits so each builds on the last and the branch
   reads top to bottom: scaffolding before the wiring, the wiring before the test,
   the config bump last. A reviewer should never scroll back to understand.
3. **Say why in the message.** The diff already shows *what*. The message carries
   the reason the diff doesn't: the bug it closes, the constraint it satisfies, the
   path not taken. `fix stuff` is a failure; so is `update UserService`.
4. **Make each commit stand alone.** Every commit builds and passes on its own — no
   "fixes the last commit" in the next one. If commit 2 needs commit 1 to compile,
   they were one commit.
5. **Cut the noise.** Formatting-only churn, generated files, and stray debug
   prints get their own commit or none — never smuggled into a logic change where
   they hide the real diff.

Every split is specific to this change. One clean history a reviewer trusts beats
ten commits that just say `wip`.

## Rules

- Write for the reviewer, not the compiler. The compiler doesn't read messages;
  the human deciding whether to trust your code does.
- A commit is a unit of review, not a save point. If it can't be reviewed in
  isolation, it isn't done being split.
- Keep unrelated changes apart. A refactor riding along in a feature commit hides
  both — and doubles the blast radius when one gets reverted.
- Say why, always. "What" is in the diff; a message that only restates the diff
  earns its place by wasting the reader's time.
- Failure mode to avoid: the one 41-file `fix stuff` commit nobody can review, so
  they rubber-stamp it. An unreviewable diff is an unreviewed diff.

## Output

Commits and messages first — the real history, written. Then a short **Split:**
report: how you carved it and why, in a few lines. If the report is longer than
the log, cut it.

Pattern: `[commits] → Split: [N logical commits: a / b / c] · [why this order] · [what stayed separate]`

## Intensity

| Level | What change |
|-------|------------|
| **lite** | Commit the work, but name the better split or the missing "why" in one line. User decides. |
| **full** | Split into logical commits, order the story, write why-focused messages. Default. |
| **ultra** | Full, plus — each commit verified to build/pass alone, a PR description that walks the reviewer through the reasoning, and unrelated churn pulled out entirely. |

Example — a single 41-file `fix stuff` commit adding rate-limiting middleware:
- **lite:** "Committed. Better move: this is really four changes — the middleware, wiring it into the router, its test, and the config bump. Split them and reviewers can approve each; want me to?"
- **full:** "Restructured into four commits: `add rate-limit middleware` → `wire middleware into API router` → `test rate-limit under burst` → `raise default request ceiling to 100/min`. Each builds alone; messages say why the limit exists, not just that it does. Split: 4 logical commits in dependency order · config bump last so the behavior change is reviewable on its own."
- **ultra:** full, plus — confirmed each commit compiles and tests green in isolation; PR body walks the reviewer from the incident that motivated the limit through the chosen ceiling and the burst test; the unrelated import-sort churn that snuck in got its own `chore: sort imports` commit so it doesn't muddy the diff.

## When NOT to

Skip it for trivial one-line changes, throwaway or WIP branches the user asked to
keep messy, or when told to stop. Never rewrite history the user has already
pushed and shared without asking. And never let the pursuit of a clean story
delete a change or weaken the code — the history serves the work, not the reverse.
The human's call on how to slice it wins; push once, then commit it their way.

## Boundaries

The Explainer governs how you *record* what you build, not how much you build —
pair it with Chameleon (match the house style in the code) and Closer (prove it
works before the message says it does). "stop explainer" / "normal mode": revert.
Level persists until changed or session end.

The diff is forgotten by morning. The commit is read for years.
