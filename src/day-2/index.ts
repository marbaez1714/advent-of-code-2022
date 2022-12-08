import fs from "fs/promises";
import path from "path";

/******************************/
/* Utils                      */
/******************************/
const getData = async () => {
  return await fs
    .readFile(path.resolve(__dirname, "./input.txt"), {
      encoding: "utf8",
    })
    .then((data) => data.split("\n"));
};

const scoreMap = {
  "A X": 4, // rock v rock
  "A Y": 8, // rock v paper
  "A Z": 3, // rock v scissors
  "B X": 1, // paper v rock
  "B Y": 5, // paper v paper
  "B Z": 9, // paper v scissors
  "C X": 7, // scissors v rock
  "C Y": 2, // scissors v paper
  "C Z": 6, // scissors v scissors
};

const gameMap = {
  "A Z": "A Y", // win rock v paper
  "B Z": "B Z", // win paper v scissors
  "C Z": "C X", // win scissors v rock
  "A X": "A Z", // loss rock v paper
  "B X": "B X", // loss paper v scissors
  "C X": "C Y", // loss scissors v rock
  "A Y": "A X", // draw rock v rock
  "B Y": "B Y", // draw paper v paper
  "C Y": "C Z", // draw scissors v scissors
};

/******************************/
/* Part One                   */
/******************************/
export const partOne = async () => {
  // Get formatted data as array of games that are arrays of choices
  const data = await getData();

  const scores = data.map((game) => scoreMap[game as keyof typeof scoreMap]);

  const finalScore = scores.reduce((acc, curr) => acc + curr, 0);

  return finalScore;
};

/******************************/
/* Part Two                   */
/******************************/
export const partTwo = async () => {
  const data = await getData();

  const scores = data.map(
    (game) =>
      scoreMap[gameMap[game as keyof typeof gameMap] as keyof typeof scoreMap]
  );

  const finalScore = scores.reduce((acc, curr) => acc + curr, 0);

  return finalScore;
};
