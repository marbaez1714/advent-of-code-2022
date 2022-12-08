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

const getPriority = (character: string) => {
  const value = character.charCodeAt(0) - 96;
  return value > 0 ? value : value + 58;
};

/******************************/
/* Part One                   */
/******************************/
export const partOne = async () => {
  // Get all of the sacks
  const data = await getData();

  // Iterate through each
  const total = data.reduce((acc, curr) => {
    // Find the length
    const length = curr.length;
    // Get the first half
    const firstCompartment = curr.substring(0, length / 2);
    // Get the second half
    const secondCompartment = curr.substring(length / 2, length);
    // Create test
    const matchTest = new RegExp(`[${firstCompartment}]`, "g");
    // Get Matches
    const matches = secondCompartment.match(matchTest);
    // Add matches to total
    const priority = matches ? getPriority(matches[0]) : 0;

    return acc + priority;
  }, 0);

  return total;
};

/******************************/
/* Part Two                   */
/******************************/
export const partTwo = async () => {
  // Get all of the sacks
  const data = await getData();

  let answer = 0;

  // Iterate through the groups
  for (let i = 0; i < data.length; i += 3) {
    const groupFirst = data[i];
    const groupSecond = data[i + 1];
    const groupThird = data[i + 2];

    const firstMatchTest = new RegExp(`[${groupFirst}]`, "g");
    const firstMatches = groupSecond.match(firstMatchTest);
    const secondMatchTest = new RegExp(`[${firstMatches?.join("")}]`, "g");
    const secondMatches = groupThird.match(secondMatchTest) ?? [""];

    answer += getPriority(secondMatches[0]);
  }

  return answer;
};
