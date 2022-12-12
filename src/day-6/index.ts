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
    .then((data) => data.split(""));
};

/******************************/
/* Part One                   */
/******************************/
export const partOne = async () => {
  const data = await getData();
  const totalLength = 4;
  let answer = 0;

  for (let i = totalLength - 1; i < data.length; i++) {
    const charSet = new Set(data.slice(i - totalLength, i));
    if (charSet.size === totalLength) {
      answer = i;
      break;
    }
  }

  return answer;
};

/******************************/
/* Part Two                   */
/******************************/
export const partTwo = async () => {
  const data = await getData();
  const totalLength = 14;
  let answer = 0;

  for (let i = totalLength - 1; i < data.length; i++) {
    const charSet = new Set(data.slice(i - totalLength, i));
    if (charSet.size === totalLength) {
      answer = i;
      break;
    }
  }

  return answer;
};
