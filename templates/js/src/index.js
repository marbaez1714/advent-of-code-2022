async function main() {
  if (process.argv[2]) {
    const day = process.argv[2];
    executeDay(day);
  } else {
    for (let i = 0; i < 25; i++) {
      if (i > 0) {
        console.log();
      }

      const day = (i + 1).toString();
      try {
        await executeDay(day);
      } catch {
        break;
      }
    }
  }
}

async function executeDay(day) {
  const { partOne, partTwo } = require(`./day-${day}`);

  console.info(`\n\n--------- Day - ${day} ---------`);
  await partOne();
  await partTwo();
}

main();
