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
      data.split("\n").map((row) => row.split("").map((tree) => parseInt(tree)))
    );
};

const visibleFromLeft = (row: number[], treeIdx: number) => {
  const currentTree = row[treeIdx];
  let isVisible = true;

  for (let i = 0; i < treeIdx; i++) {
    const compareTree = row[i];
    if (compareTree >= currentTree) {
      isVisible = false;
      break;
    }
  }

  return isVisible;
};

const scoreLeft = (row: number[], treeIdx: number) => {
  const currentTree = row[treeIdx];
  let score = 0;

  for (let i = treeIdx - 1; i >= 0; i--) {
    const compareTree = row[i];
    score++;

    if (compareTree >= currentTree) {
      break;
    }
  }

  return score;
};

const visibleFromRight = (row: number[], treeIdx: number) => {
  const currentTree = row[treeIdx];

  let isVisible = true;

  for (let i = row.length - 1; i > treeIdx; i--) {
    const compareTree = row[i];
    if (compareTree >= currentTree) {
      isVisible = false;
      break;
    }
  }

  return isVisible;
};

const scoreRight = (row: number[], treeIdx: number) => {
  const currentTree = row[treeIdx];
  let score = 0;

  for (let i = treeIdx + 1; i < row.length; i++) {
    const compareTree = row[i];
    score++;

    if (compareTree >= currentTree) {
      break;
    }
  }

  return score;
};

const visibleFromTop = (grid: number[][], rowIdx: number, treeIdx: number) => {
  const currentTree = grid[rowIdx][treeIdx];
  let isVisible = true;

  for (let i = 0; i < rowIdx; i++) {
    const compareTree = grid[i][treeIdx];

    if (compareTree >= currentTree) {
      isVisible = false;
      break;
    }
  }

  return isVisible;
};

const scoreTop = (grid: number[][], rowIdx: number, treeIdx: number) => {
  const currentTree = grid[rowIdx][treeIdx];
  let score = 0;

  for (let i = rowIdx - 1; i >= 0; i--) {
    const compareTree = grid[i][treeIdx];
    score++;
    if (compareTree >= currentTree) {
      break;
    }
  }

  return score;
};

const visibleFromBottom = (
  grid: number[][],
  rowIdx: number,
  treeIdx: number
) => {
  const currentTree = grid[rowIdx][treeIdx];
  let isVisible = true;

  for (let i = grid.length - 1; i > rowIdx; i--) {
    const compareTree = grid[i][treeIdx];

    if (compareTree >= currentTree) {
      isVisible = false;
      break;
    }
  }

  return isVisible;
};

const scoreBottom = (grid: number[][], rowIdx: number, treeIdx: number) => {
  const currentTree = grid[rowIdx][treeIdx];
  let score = 0;

  for (let i = rowIdx + 1; i < grid.length; i++) {
    const compareTree = grid[i][treeIdx];
    score++;
    if (compareTree >= currentTree) {
      break;
    }
  }

  return score;
};

/******************************/
/* Part One                   */
/******************************/
export const partOne = async () => {
  const grid = await getData();
  let totalVisible = 0;

  grid.forEach((row, rowIdx) => {
    row.forEach((tree, treeIdx) => {
      if (visibleFromLeft(row, treeIdx)) {
        totalVisible++;
        return;
      }
      if (visibleFromRight(row, treeIdx)) {
        totalVisible++;
        return;
      }

      if (visibleFromTop(grid, rowIdx, treeIdx)) {
        totalVisible++;
        return;
      }
      if (visibleFromBottom(grid, rowIdx, treeIdx)) {
        totalVisible++;
        return;
      }
    });
  });

  return totalVisible;
};

/******************************/
/* Part Two                   */
/******************************/
export const partTwo = async () => {
  const grid = await getData();
  let highestScore = 0;

  grid.forEach((row, rowIdx) => {
    row.forEach((tree, treeIdx) => {
      const left = scoreLeft(row, treeIdx);
      const right = scoreRight(row, treeIdx);
      const top = scoreTop(grid, rowIdx, treeIdx);
      const bottom = scoreBottom(grid, rowIdx, treeIdx);
      const sum = left * right * top * bottom;

      highestScore = highestScore < sum ? sum : highestScore;
    });
  });

  return highestScore;
};
