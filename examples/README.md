# Bullpen — before/after examples

One worked before/after per skill: the naive agent output on the left, the skill's
discipline on the right, and the terse house-format report line each one ends on.
Short by design — every file fits on a screen.

| Skill | Example | What it demonstrates |
|-------|---------|----------------------|
| Skeptic | [skeptic.md](skeptic.md) | Redis cache request → the unindexed query is the real fix; object before building |
| Closer | [closer.md](closer.md) | CSV export claimed done → run it, paste the row count + header receipt |
| Attacker | [attacker.md](attacker.md) | Invoice-by-id endpoint → IDOR + SQL injection found and fixed at the boundary |
| Fact-Checker | [fact-checker.md](fact-checker.md) | `fs.readFileLines()` doesn't exist → verified `readFileSync().split('\n')` |
| Interrogator | [interrogator.md](interrogator.md) | "Add login" → three forking questions before a line of code |
| Stop-Digging | [stop-digging.md](stop-digging.md) | Third null-check → stop, trace where null is born, fix the root |
| Doorman | [doorman.md](doorman.md) | `install moment` → `Intl.DateTimeFormat` already ships in the runtime |
| Historian | [historian.md](historian.md) | "Redundant" retry → git blame reveals it guards a flaky upstream; keep it |
| Chameleon | [chameleon.md](chameleon.md) | New fetch fn → match the house `api()` wrapper + `Result<T>`, not raw axios |
| Explainer | [explainer.md](explainer.md) | One 41-file `fix stuff` commit → four reviewable commits that say why |
