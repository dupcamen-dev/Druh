const fs = require("fs");
const p = "src/components/Kramnychka.tsx";
const t = fs.readFileSync(p, "utf8");
const lines = t.split(/\r?\n/);
function show(a, b) {
  for (let i = a; i <= b; i++) {
    console.log(String(i + 1).padStart(3), JSON.stringify(lines[i]).slice(0, 105));
  }
}
console.log("total lines:", lines.length);
console.log("has asset import:", /from "@\/lib\/base"/.test(t));
console.log("has Image import:", /^import Image from "next\/image"/m.test(t));
console.log("--- section open ---");
for (let i = 0; i < lines.length; i++) {
  if (/<section/.test(lines[i])) { show(i, i + hao_lines); break; }
}
