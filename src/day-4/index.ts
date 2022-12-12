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

/******************************/
/* Part One                   */
/******************************/
export const partOne = async () => {
  const data = await getData();
  // [[start, end], [start,end], ...]
  const pairsList = data.map((pair) =>
    pair
      .split(",")
      .map((assignment) =>
        assignment.split("-").map((num) => parseInt(num, 10))
      )
  );

  const totalOverlap = pairsList.reduce((acc, curr) => {
    const [first, second] = curr;

    if (first[0] <= second[0] && second[1] <= first[1]) {
      return acc + 1;
    }

    if (second[0] <= first[0] && first[1] <= second[1]) {
      return acc + 1;
    }

    return acc;
  }, 0);

  return totalOverlap;
};

/******************************/
/* Part Two                   */
/******************************/
export const partTwo = async () => {
  const data = await getData();
  // [[start, end], [start,end], ...]
  const pairsList = data.map((pair) =>
    pair
      .split(",")
      .map((assignment) =>
        assignment.split("-").map((num) => parseInt(num, 10))
      )
  );

  const totalOverlap = pairsList.reduce((acc, curr) => {
    const [first, second] = curr;

    if (first[0] >= second[0] && first[0] <= second[1]) {
      return acc + 1;
    }

    if (first[1] >= second[0] && first[1] <= second[1]) {
      return acc + 1;
    }

    if (second[0] >= first[0] && second[0] <= first[1]) {
      return acc + 1;
    }

    if (second[1] >= first[0] && second[1] <= first[1]) {
      return acc + 1;
    }

    return acc;
  }, 0);

  return totalOverlap;
};
