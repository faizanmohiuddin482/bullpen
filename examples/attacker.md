# The Attacker
**Task:** "Add an endpoint to fetch an invoice by id."

## Without attacker
```js
app.get('/invoice/:id', async (req, res) => {
  const invoice = await db.query(
    `SELECT * FROM invoices WHERE id = ${req.params.id}`);
  res.json(invoice);
});
```
> Done!

Hit `/invoice/2` as user 1 and you read another tenant's invoice. A non-numeric id concatenates straight into SQL.

## With attacker
```js
app.get('/invoice/:id', async (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id)) return res.status(400).json({ error: 'bad id' });
  const invoice = await db.query(
    'SELECT * FROM invoices WHERE id = $1 AND owner_id = $2', [id, req.user.id]);
  if (!invoice) return res.status(404).end();
  res.json(invoice);
});
```

`Attacked: /invoice/2 as user 1 → leaked another tenant's row, added owner filter · non-numeric id → 500 w/ stack, now 400 · SQL parameterized, held · assumes auth middleware runs first.`

**One IDOR + one injection, both real and reachable — fixed at the boundary, not on the happy path.**
