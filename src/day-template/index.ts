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
export const partOne = async () => {};

/******************************/
/* Part Two                   */
/******************************/
export const partTwo = async () => {};
