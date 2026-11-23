// One Sentence, One Journey: a complete story about a journey, told in exactly
// one sentence. The program writes the story to /output/entry.txt. The gate
// wants 1 to 300 UTF-8 characters, no title and no second sentence, so the
// story below is a single sentence with one period at its end.
import { mkdirSync, writeFileSync } from 'node:fs';
import { isAbsolute, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = fileURLToPath(new URL('.', import.meta.url));
const outEnv = process.env.MAKEFUN_OUTPUT_DIR;
const out = outEnv ? (isAbsolute(outEnv) ? outEnv : join(here, outEnv)) : '/output';

const story = "Mara boarded the night train to the coast with her grandmother's brass compass in her pocket, meaning to scatter the ashes at dawn, but when the train stopped at a station not on any map, she stepped onto the platform and found her grandmother waiting there, young again, holding out her hand.";

mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), story, 'utf8');
