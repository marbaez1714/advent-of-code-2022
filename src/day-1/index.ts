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
    .then((data) =>
      data
        .split("\n\n")
        .map((arr) => arr.split("\n").map((item) => parseInt(item)))
    );
};

/******************************/
/* Part One                   */
/******************************/
export const partOne = async () => {
  // Turn data into array of arrays of numbers
  const data = await getData();

  // Get all of the totals
  const totals = data.reduce<number[]>((acc, curr) => {
    const total = curr.reduce((a, b) => a + b, 0);
    return [...acc, total];
  }, []);

  // return the max value
  return Math.max(...totals);
};

/******************************/
/* Part Two                   */
/******************************/
export const partTwo = async () => {
  // Turn data into array of arrays of numbers
  const data = await getData();

  // Get all of the totals sorted
  const totals = data
    .reduce<number[]>((acc, curr) => {
      const total = curr.reduce((a, b) => a + b, 0);
      return [...acc, total];
    }, [])
    .sort((a, b) => b - a);

  return totals[0] + totals[1] + totals[2];
};
