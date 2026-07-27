# The Closer
**Task:** "Implement the CSV export."

## Without closer
```js
function exportCsv(rows) {
  const header = 'id,name,email';
  const body = rows.map(r => `${r.id},${r.name},${r.email}`).join('\n');
  return header + '\n' + body;
}
```
> Done — this should work. ✅

Never ran. A name with a comma silently corrupts every downstream column, and nobody knows until a customer opens the file.

## With closer
Same code, but proven before the word "done":

```
$ node export.js > out.csv
wrote 1,204 rows
$ head -1 out.csv
id,name,email
```

`Verified: ran export.js → 1,204 rows, header order id,name,email, spot-checked row 1 · commas-in-fields quoted and held.`

**"It works" is a screenshot, not a claim — run it, exercise the changed path, paste the real output.**
