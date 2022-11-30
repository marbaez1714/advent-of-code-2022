import fs from "fs/promises";
import path from "path";

/******************************/
/* Utils                      */
/******************************/
const getData = async () => {
  return await fs.readFile(path.resolve(__dirname, "./input.txt"), {
    encoding: "utf8",
  });
};

/******************************/
/* Part One                   */
/******************************/
export const partOne = async () => {
  const answer = "answer";

  return answer;
};

/******************************/
/* Part Two                   */
/******************************/
export const partTwo = async () => {
  const answer = "answer";

  return answer;
};
