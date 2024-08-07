function sortStudentsByScore(students) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  let result = [];
  return (result = students.sort((a, b) => {
    return b.score - a.score;
  }));
}

console.log(
  sortStudentsByScore([
    { id: "S001", name: "Anan", score: 85 },
    { id: "S002", name: "Boon", score: 92 },
    { id: "S003", name: "Chai", score: 78 },
    { id: "S004", name: "Dao", score: 95 },
    { id: "S005", name: "Ek", score: 88 },
    { id: "S006", name: "Fah", score: 80 },
  ])
);

// function sortStudentsByScore(students) {
//   // เริ่มเขียนโค้ดตรงนี้จ้า
//   const n = students.length;
//   let result;
//   for (let i = 0; i < n - 1; i++) {
//     for (let j = 0; j < n - 1; j++) {
//       if (students[j].score < students[j + 1].score) {
//         let temp = students[j].score;
//         students[j].score = students[j + 1].score;
//         students[j + 1].score = temp;
//         result = students;
//       }
//     }
//   }
//   return result;
// }
