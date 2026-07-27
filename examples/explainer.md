# The Explainer
**Task:** "Commit the rate-limiting work and open a PR."

## Without explainer
```
$ git add -A && git commit -m "fix stuff"
 41 files changed, 892 insertions(+), 137 deletions(-)
```
One unreviewable blob mixing the middleware, the router wiring, its test, a config bump, and stray import-sort churn. Nobody can review it, so they rubber-stamp it.

## With explainer
```
add rate-limit middleware
wire middleware into API router
test rate-limit under burst
raise default request ceiling to 100/min
chore: sort imports
```
Each commit builds alone; messages say *why* the limit exists, not just that it does.

`Split: 4 logical commits in dependency order · config bump last so the behavior change is reviewable on its own · unrelated import-sort churn pulled into its own chore commit.`

**The diff shows what changed; the commit is the only place the why survives — one commit = one idea a reviewer can approve.**
