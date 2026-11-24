// Two Lines to Your Past Self — entry program.
// Writes the two-line warning to MAKEFUN_OUTPUT_DIR/entry.txt.
// The entry is exactly two lines, 203 characters of text (204 bytes in the
// file including its trailing newline): a warning about one
// specific moment (a 2:13 a.m. voice memo) and the consequence that
// followed from it (two years chasing eight lost notes).
// The program writes only to MAKEFUN_OUTPUT_DIR, never to the working
// directory, and never removes or cleans the output directory.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY_LINES: string[] = [
  "Don't delete the 2:13 a.m. voice memo where you hum the chorus you woke up singing.",
  "It was the only copy of the melody that became your first song, and you spent two years trying to remember eight notes.",
];

const ENTRY_TEXT: string = ENTRY_LINES.join("\n") + "\n";

function main(): void {
  const outDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? "";
  if (outDir.length === 0) {
    throw new Error("MAKEFUN_OUTPUT_DIR is not set");
  }
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), ENTRY_TEXT, "utf8");
}

main();
