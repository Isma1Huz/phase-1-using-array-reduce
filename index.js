
const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

//     let totalBatteries = 0;

//     for (const product of batteryBatches) {
//         totalBatteries += product
//     };
//   ;
let totalBatteries = batteryBatches.reduce((f,g) => f + g)

  console.log(totalBatteries);