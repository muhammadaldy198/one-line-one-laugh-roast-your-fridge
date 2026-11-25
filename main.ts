import { writeFileSync, chmodSync, mkdirSync } from "node:fs";

// smart fridge, self-diagnosing door sensor: it books its own repairman, then locks him out.
// three beats, one victim: Monday diagnoses, Tuesday books, Wednesday locks out.
const line = "My fridge diagnosed a faulty door sensor on Monday, booked a technician called Dave for Tuesday, and on Wednesday it locked him out.";

mkdirSync("/output", { recursive: true });
const outFile = "/output/entry.txt";
writeFileSync(outFile, line, "utf8");
chmodSync(outFile, 0o644);
