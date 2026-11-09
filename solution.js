var inputs = readline().split(' ');
const nbFloors = parseInt(inputs[0]);
const width = parseInt(inputs[1]);
const nbRounds = parseInt(inputs[2]);
const exitFloor = parseInt(inputs[3]);
const exitPos = parseInt(inputs[4]);
const nbTotalClones = parseInt(inputs[5]);
const nbAdditionalElevators = parseInt(inputs[6]);
const nbElevators = parseInt(inputs[7]);

const targetPositions = {};

for (let i = 0; i < nbElevators; i++) {
    var inputs = readline().split(' ');
    const elevatorFloor = parseInt(inputs[0]);
    const elevatorPos = parseInt(inputs[1]);
    targetPositions[elevatorFloor] = elevatorPos;
}

targetPositions[exitFloor] = exitPos;

while (true) {
    var inputs = readline().split(' ');
    const cloneFloor = parseInt(inputs[0]);
    const clonePos = parseInt(inputs[1]);
    const direction = inputs[2];

    if (cloneFloor === -1) {
        console.log('WAIT');
        continue;
    }

    const targetPos = targetPositions[cloneFloor];

    if (clonePos < targetPos && direction === 'LEFT') {
        console.log('BLOCK');
    }
    else if (clonePos > targetPos && direction === 'RIGHT') {
        console.log('BLOCK');
    }
    else {
        console.log('WAIT');
    }
}
