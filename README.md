<h1 align="center">Bullpen</h1>

<p align="center"><em>The senior dev, unbundled.</em></p>

<p align="center">
  One lazy senior dev makes your agent write less code.<br>
  A whole bullpen makes it think like the room.
</p>

---

Ponytail put the laziest senior dev inside your agent — the one who replaces fifty
lines with one. But that engineer is only one seat in the room. The same senior
also **pushes back on bad ideas, refuses to fake "done," attacks their own code,
asks before guessing, and stops digging when the hole gets deep.**

Bullpen is that room. Ten small, opinionated skills — each one instinct of a
senior engineer — that you call in by name, at the intensity you want.

## The roster

| Skill | The instinct | Thesis |
|-------|-------------|--------|
| **`/skeptic`** | Pushes back on the request when it encodes a wrong assumption | Your AI shouldn't be a yes-man. |
| **`/closer`** | Won't claim "done" until it ran the code and showed the output | "It works" is not a claim. It's a screenshot. |
| **`/attacker`** | Attacks its own code before shipping; fixes what lands | Ship code that already survived an attack. |
| **`/fact-checker`** | Verifies an API exists before calling it | It reads the docs so you don't debug the fiction. |
| **`/interrogator`** | Asks the few decisive questions before building | The most expensive code solved the wrong problem. |
| **`/stop-digging`** | Stops re-trying after two failed fixes and re-diagnoses | When you're in a hole, stop digging. |
| **`/doorman`** | Justifies every new dependency against what's already there | Every dependency is a liability you'll maintain forever. |
| **`/historian`** | Finds out why odd code exists before deleting it | Don't remove the fence until you know why it's there. |
| **`/chameleon`** | Writes code indistinguishable from the codebase around it | The best contribution is invisible. |
| **`/explainer`** | Splits work into reviewable commits a human can follow | Write for the reviewer, not the compiler. |

Each skill takes an intensity argument — **lite** (name the better move, you
decide), **full** (the discipline enforced; the default), **ultra** (the
extremist version, with the proof). Pair them freely: `/attacker` hardens what
`/ponytail` keeps lazy; `/skeptic` decides *whether* to build, `/interrogator`
clarifies *what*, `/closer` proves it's *done*.

## See it

One before/after per skill in [`examples/`](examples/) — the naive output, then
the same task with the skill on. Start with
[the Attacker](examples/attacker.md) (an IDOR + an injection, fixed at the
boundary) or [the Skeptic](examples/skeptic.md) (a cache request answered with
the index that was the real fix).

## Install

**As a Claude Code plugin:**

```
/plugin marketplace add faizanmohiuddin482/bullpen
/plugin install bullpen@bullpen
```

Or from a local clone:

```
/plugin marketplace add ./bullpen
/plugin install bullpen@bullpen
```

Then the skills are available. They fire automatically when a task matches (the
`description` in each `SKILL.md` is the trigger), or call one by name:

```
/attacker              # full intensity on this task
/skeptic ultra         # make it defend the premise
/closer lite           # just tell me verified vs assumed
stop attacker          # revert to normal mode
```

## How it's built

Bullpen ships **one canonical `SKILL.md` per skill** — nothing else. No hooks, no
MCP server, no per-platform copies, no version files to hand-sync. The design rule
is simple: never duplicate a skill's text, so it can never drift.

The only build check is [`scripts/check-skills.js`](scripts/check-skills.js): it
confirms each skill has the required frontmatter and house sections.

- Add a skill → one folder, one `SKILL.md`, following [`AUTHORING.md`](AUTHORING.md).
- Change a skill → edit one file.
- That's the whole contract.

## License

MIT.

<p align="center"><sub>The only code you trust is the code you already tried to break.</sub></p>
