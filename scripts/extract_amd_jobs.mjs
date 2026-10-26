import fs from "node:fs";

const ids = process.argv.slice(2);
for (const id of ids) {
  const html = fs.readFileSync(`/private/tmp/amd-${id}.html`, "utf8");
  const match = html.match(/<script[^>]*type="application\/ld\+json"[^>]*>\s*([\s\S]*?)\s*<\/script>/);
  if (!match) throw new Error(`No JobPosting JSON-LD for ${id}`);
  const job = JSON.parse(match[1]);
  const clean = (value = "") => value
    .replace(/<br\s*\/?\s*>/gi, "\n")
    .replace(/<\/p>/gi, "\n")
    .replace(/<li>/gi, "- ")
    .replace(/<\/li>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&mdash;/g, "—")
    .replace(/&ndash;/g, "–")
    .replace(/&rsquo;/g, "’")
    .replace(/&ldquo;/g, "“")
    .replace(/&rdquo;/g, "”")
    .replace(/&#39;/g, "'")
    .replace(/\n[ \t]+/g, "\n")
    .replace(/[ \t]+/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
  const output = {
    id,
    title: job.title,
    datePosted: job.datePosted || "",
    validThrough: job.validThrough || "",
    employmentType: job.employmentType || "",
    locations: job.jobLocation || [],
    salary: job.baseSalary || null,
    description: clean(job.description),
    url: job.url,
  };
  fs.writeFileSync(`/private/tmp/amd-${id}.json`, JSON.stringify(output, null, 2));
  fs.writeFileSync(`/private/tmp/amd-${id}.txt`, output.description + "\n");
  console.log(`${id}\t${output.title}\t${output.datePosted}\t${output.employmentType}`);
}
