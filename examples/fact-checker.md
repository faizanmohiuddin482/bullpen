# The Fact-Checker
**Task:** "Read this file's lines in Node."

## Without fact-checker
```js
const lines = fs.readFileLines(path);
```
> Reads each line into an array.

`fs.readFileLines` sounds right and does not exist. You'll lose an hour to `TypeError: fs.readFileLines is not a function` before you doubt the name.

## With fact-checker
```js
const lines = fs.readFileSync(path, 'utf8').split('\n');
```

`Checked: fs.readFileLines is not an export of Node's fs — no such method. Replaced with fs.readFileSync(path,'utf8').split('\n'), signature confirmed against the fs docs.`

**A plausible name is not a real name — the ten-second grep is the cheap side of the trade.**
