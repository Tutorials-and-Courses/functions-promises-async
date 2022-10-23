const goToTheMoonAndBack = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("moondust");
    }, 1000);
  });
};

async function sendManToTheMoon() {
  const moondata = await goToTheMoonAndBack();
  console.log(`Moonman is back with some ${moondata}.`);
}

// sendManToTheMoon();
// console.log("World keeps spinning");

//We call sendManToTheMoon()  which is asynchronous, then the await is triggered and skipped the end of the function until the result of sendManToTheMoon() is ready.
// then the last console.log("World keeps spinning"); was printed
//One second later moondata was received when the promise resolved

// ------------------- Chaining Awaits ------------------------------------

async function testFindings(data) {
  console.log("Very good findings!");
  return Promise.resolve("yay");
}

async function moonMission() {
  try {
    const results = await sendManToTheMoon();
    const findings = await testFindings(results);
    if (findings === "yay") {
      console.log("Mission was a success");
    }
  } catch (error) {
    console.log("Houston, we have a problem");
  }
}

moonMission();
console.log("World keeps spinning");
