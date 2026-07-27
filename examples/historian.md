# The Historian
**Task:** "Delete this redundant retry wrapper around the payment call, it's just noise."

## Without historian
```diff
- await retry(() => charge(card, amount), { attempts: 3 });
+ await charge(card, amount);
```
> Removed the redundant wrapper.

Reviews clean, ships, and the next intermittent upstream 502 drops a real payment. The worst kind of small diff.

## With historian
```
$ git blame -L … charge.js
wrap charge() in retry — upstream 502s intermittently (#4821)   ← issue still open
```
Not noise — it covers a flaky processor. Kept it, documented it:
```js
// historian: retry covers flaky upstream 502s, see #4821 — remove when they fix idempotency
await retry(() => charge(card, amount), { attempts: 3 });
```

`Dug: blame said "wrap for intermittent 502s (#4821)" · kept because the fence is load-bearing · left comment linking the issue.`

**Don't remove the fence until you know who built it and why — "looks unused" is a hypothesis, blame is the fact.**
