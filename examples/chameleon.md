# The Chameleon
**Task:** "Add a function to fetch a user by id" — in a repo where every call goes through `api()` returning `Result<T>`.

## Without chameleon
```ts
import axios from 'axios';
export async function fetchUser(id: string) {
  try {
    const res = await axios.get(`/users/${id}`);
    return res.data;
  } catch (e) { throw e; }
}
```
A foreign body: raw `axios`, thrown errors, a `try/catch` nothing else uses. Every reviewer stops to ask "why is this one different?"

## With chameleon
```ts
export async function fetchUser(id: string): Promise<Result<User>> {
  return api.get<User>(`/users/${id}`);
}
```

`Matched: routed through the house api() client, returns Result<User> like fetchOrg next to it, same import order, table-driven test matching user.test.ts · no new deps.`

**The best contribution is invisible — reuse the project's own wrapper and error contract, even when yours is "better."**
