import { inflateRawSync, inflateSync } from "node:zlib";
import { readFileSync, writeFileSync } from "node:fs";

const buf = readFileSync("D:/Yasirpersonal/resume/public/resume/Yasir_Hussain_Resume.pdf");
const text = buf.toString("latin1");
const chunks = [];
const re = /stream\r?\n([\s\S]*?)\r?\nendstream/g;
let m;
while ((m = re.exec(text))) {
  const raw = Buffer.from(m[1], "latin1");
  for (const fn of [inflateSync, inflateRawSync]) {
    try {
      chunks.push(fn(raw).toString("latin1"));
      break;
    } catch {}
  }
}
const joined = chunks.join("\n");
const strings = [...joined.matchAll(/\((?:\\.|[^\\)]){2,}\)/g)].map((s) =>
  s[0]
    .slice(1, -1)
    .replace(/\\([()\\])/g, "$1")
    .replace(/\\n/g, "\n")
    .replace(/\\r/g, ""),
);
writeFileSync("D:/Yasirpersonal/resume/_resume_text.txt", strings.join("\n"));
console.log(strings.filter((s) => /skill|php|node|laravel|mysql|git|aws|html|css|sql|bootstrap|postman|mongo/i.test(s)).join("\n---\n"));
