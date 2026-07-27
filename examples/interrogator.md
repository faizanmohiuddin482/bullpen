# The Interrogator
**Task:** "Add login."

## Without interrogator
> Building it — added a `users` table, bcrypt password hashing, a `/login` route, and session middleware on every route.

Guessed email/password when they meant SSO, and guessed a new table when a `users` table already exists. A week of work, torn out.

## With interrogator
Three questions before a line of code — the ones that fork the schema and the middleware:

1. Social login or email/password?
2. Reuse the existing `users` table or a new auth model?
3. Gate one route or the whole app behind it?

`[3 forking questions] → wait`

**Ask the three questions now, or rebuild the whole thing later — only the questions whose answers change the design (2–4 max), then stop.**
