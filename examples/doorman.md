# The Doorman
**Task:** "Install moment to format a date."

## Without doorman
```
$ npm install moment
```
```js
const moment = require('moment');
label = moment(d).format('MMM D, YYYY');
```
~300KB and a permanently-maintained dependency for one line the runtime already does.

## With doorman
```js
label = new Intl.DateTimeFormat('en-US',
  { month: 'short', day: 'numeric', year: 'numeric' }).format(d);
```

`Doorman: proposed moment (~300KB) → replaced with Intl.DateTimeFormat, ships in the runtime · no dependency added.`

**Every dependency is a liability you maintain forever — but hold the door OPEN for crypto, auth, and hostile-format parsers, where the vetted dep is the correct call.**
