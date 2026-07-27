#!/usr/bin/env node
// The only build-time check bullpen needs: every skill is one canonical
// SKILL.md with the required frontmatter and the house sections. No copy-sync,
// no drift — because nothing is duplicated. One source per skill, full stop.
const fs = require("fs");
const path = require("path");

const skillsDir = path.join(__dirname, "..", "skills");
const REQUIRED_FRONTMATTER = ["name:", "description:", "argument-hint:", "license:"];
const REQUIRED_SECTIONS = ["## Rules", "## Intensity", "## Boundaries"];

let failed = false;
const fail = (m) => { console.error("✗ " + m); failed = true; };

const skills = fs.readdirSync(skillsDir).filter((d) =>
  fs.statSync(path.join(skillsDir, d)).isDirectory()
);

for (const slug of skills) {
  const file = path.join(skillsDir, slug, "SKILL.md");
  if (!fs.existsSync(file)) { fail(`${slug}: no SKILL.md`); continue; }
  const text = fs.readFileSync(file, "utf8");

  const fm = text.match(/^---\n([\s\S]*?)\n---/);
  if (!fm) { fail(`${slug}: missing frontmatter`); continue; }
  for (const key of REQUIRED_FRONTMATTER) {
    if (!fm[1].includes(key)) fail(`${slug}: frontmatter missing "${key}"`);
  }
  const nameMatch = fm[1].match(/name:\s*(\S+)/);
  if (nameMatch && nameMatch[1] !== slug) {
    fail(`${slug}: frontmatter name "${nameMatch[1]}" != folder "${slug}"`);
  }
  for (const sec of REQUIRED_SECTIONS) {
    if (!text.includes(sec)) fail(`${slug}: missing section "${sec}"`);
  }
  if (!/lite/.test(text) || !/ultra/.test(text)) {
    fail(`${slug}: intensity levels (lite/ultra) not documented`);
  }
}

if (failed) {
  console.error(`\n${skills.length} skills checked — see failures above.`);
  process.exit(1);
}
console.log(`✓ ${skills.length} skills valid: ${skills.sort().join(", ")}`);
