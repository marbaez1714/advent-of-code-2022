import fs from "fs/promises";
import path from "path";

/******************************/
/* Utils                      */
/******************************/
const getData = async () => {
  const data = await fs
    .readFile(path.resolve(__dirname, "./input.txt"), {
      encoding: "utf8",
    })
    .then((data) => data.split("\n\n"));

  // array of each stack in rows
  const stacksArray = data[0].split("\n");

  // Each column in an array
  const columns = stacksArray
    .pop()!
    .trim()
    .split("   ")
    .map((i) => parseInt(i));

  // Each stack as arrays going bottom -> top
  const stacks: string[][] = [];

  // Creates each of the stacks
  columns.forEach((col, index) => {
    const position = col + index * 3;
    stacks.push([]);
    stacksArray.forEach((row) => {
      if (row[position] !== " ") {
        stacks[index].unshift(row[position]);
      }
    });
  });

  // Turns the moves into arrays of [move, from, to]
  const moves = data[1].split("\n").map((line) =>
    line
      .replace(/(move )|(from )|(to )/g, "")
      .split(" ")
      .map((move) => parseInt(move))
  ) as [number, number, number][];

  return { stacks, moves };
};

/******************************/
/* Part One                   */
/******************************/
export const partOne = async () => {
  const { stacks, moves } = await getData();

  const positions = stacks;

  // makes each of the moves
  moves.forEach((action) => {
    const [moves, from, to] = action;

    for (let i = 0; i < moves; i++) {
      const crate = positions[from - 1].pop();
      if (crate) {
        positions[to - 1].push(crate);
      }
    }
  });

  const answer = positions.reduce((acc, curr) => {
    return [...acc, curr[curr.length - 1]];
  }, []);

  return answer.join("");
};

/******************************/
/* Part Two                   */
/******************************/
export const partTwo = async () => {
  const { stacks, moves } = await getData();

  const positions = stacks;

  // makes each of the moves
  moves.forEach((action) => {
    const [moves, from, to] = action;

    const creates = positions[from - 1].splice(-moves);
    positions[to - 1] = [...positions[to - 1], ...creates];
  });

  const answer = positions.reduce((acc, curr) => {
    return [...acc, curr[curr.length - 1]];
  }, []);

  return answer.join("");
};
