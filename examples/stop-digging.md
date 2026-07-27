# The Greybeard
**Task:** "Fix this `Cannot read 'name' of null`."

## Without stop-digging
```js
if (user) return user.name;        // try 1: crash moves downstream
if (user && user.name) ...         // try 2: crash moves again
const name = user?.name ?? '';     // try 3: silently wrong data
```
Three guards for one error. Each patches where null *lands*; the changelog grows and the bug survives.

## With stop-digging
Second failure = stop editing, get evidence:
```
$ log the API response
[]   ← the row is empty; user id is undefined upstream
```
Root fix — the caller read `params.id` before the route param was parsed. Fix there; the guards come out.

`Dug: assumed null at the mapper · trace showed empty result · real cause was an unparsed route param.`

**The second failure isn't telling you to try harder — it's telling you you're wrong about why.**
