import fs from "fs/promises";

export const partOne = async () => {
  try {
    const data = await fs.readFile("src/day-1/input.txt", { encoding: "utf8" });
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

export const partTwo = async () => {
  try {
    const data = await fs.readFile("src/day-1/input.txt", { encoding: "utf8" });
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};
