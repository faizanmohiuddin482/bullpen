# The Scorekeeper
**Task:** "Is `/skeptic` actually helping on this repo, or should I turn it down?"

## Without scorekeeper
> Skeptic has been really useful this week — it caught a few questionable
> requests and pushed back on some over-engineering. I'd keep it at full.

Nothing in that answer was counted. It's a vibe dressed as a report, and it
argues for leaving the setting exactly where it is.

## With scorekeeper
`~/.bullpen/log.md` (excerpt, `payments-api`):
```
- 2026-09-28 · payments-api · skeptic · full · overruled · objected to retry queue, user kept it
- 2026-09-29 · payments-api · skeptic · full · fixed · cache request → added index on status instead
- 2026-09-30 · payments-api · skeptic · full · overruled · objected to splitting refunds service
- 2026-10-01 · payments-api · skeptic · full · clean · rename request, no wrong premise
- 2026-10-01 · payments-api · skeptic · full · overruled · objected to feature flag, user kept it
- 2026-10-02 · payments-api · skeptic · full · clean · debounce request, built as asked
```

| Skill | Fires | fixed | flagged | overruled | clean | skipped | mostly |
|-------|------:|------:|--------:|----------:|------:|--------:|--------|
| skeptic | 6 | 1 | 0 | 3 | 2 | 0 | full |

Recent catches: skeptic — cache request → index on `status` (fixed).

`Tune: skeptic → lite because 3 of 6 fires were overruled (50%) — it's pushing harder than you want here; lite still names the better move, in one line.`

**Six real fires, counted — and the call comes with the numbers that argue for it. You still pick the level.**
