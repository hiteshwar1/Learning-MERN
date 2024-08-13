// let score = prompt("Score");
//alert -> show some msg
// switch (score) {
//   case score >= 90 && score <= 100:
//     alert("A");
//     break;
//   case score >= 70 && score <= 89:
//     alert("B");
//     break;
//   case score >= 60 && score <= 69:
//     alert("C");
//     break;
//   case score >= 50 && score <= 59:
//     alert("D");
//     break;
//   default:
//     alert("F");
//     break;
// }

//  for of loop
// let grades = ["A", "B", "C", "D", "F"];
// for (let grade of grades) {
//   if (score >= 90 && score <= 100) {
//     console.log(grade);
//     break;
//   }
// }

//  while loop
// let i = 90;
// while (i <= 100) {
//   console.log(grades[Math.floor(i / 10) - 1]);
//   i += 10;
// }

//  do while loop
// do {
//   console.log(grades[Math.floor(i / 10) - 1]);
//   i += 10;
// } while (i <= 100);

//  forEach loop
// grades.forEach(function (grade) {
//   console.log(grade);
// });

//  map function
// let gradesMap = grades.map(function (grade) {
//   return grade + "!";
// });
// console.log(gradesMap);

//  filter function
// let gradesFilter = grades.filter(function (grade) {
//   return grade === "A";
// });
// console.log(gradesFilter);

// for in loop -> we canned used for of with objects we use a for in loop
let students = {
  John: 85,
  Alice: 90,
  Bob: 70,
};

for (let key in students) {
  console.log(key + " - " + students[key]);
}

let obj = {
  item: "pen",
  price: 10,
  color: "blue",
  quantity: 5,
};

//rather than concatenating multiple times, we can use template literals with this ` `

console.log(
  `the item ${obj.item} has price ${obj.price} and color ${obj.color} ${obj.quantity} ${obj.color}`
);

// str.length, str.toUpperCase(), str.toLowerCase(), str.trim()-> removes whitespaces
// str.slice(start,end(optional value)) -> (end is not included) returns part of string
// str.concat(t)
// str.replace(searchVal,newVal)
// str.charAt(idx)

// let fullName = prompt("Enter your name:");
// alert(`@${fullName}${fullName.length}`);

let arr = [85, 97, 44, 37, 76, 60];
let sum = 0;
for (let i of arr) {
  sum += i;
}
console.log(sum / arr.length);

arr = [250, 645, 300, 900, 50];
for (let i = 0; i < arr.length; i++) {
  arr[i] *= 0.9;
}
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// arr.push(50); -> add to end
// arr.pop() -> delete from end and return
// arr.toString(); -> arr to string
// arr.concat(a) -> concat to arrays

// unshift -> add to start
// shift -> remove from start and return

// arr.slice(start, end) -> return piece of array
// arr.splice(startidx,delcount,newel....)-> changes original array

arr = ["F", "A", "A", "N", "G"];
arr.shift();
arr[arr.indexOf("A")] = "OLA";
arr.push("Amazon");
console.log(arr);

function cntVowels(str) {
  let cnt = 0;
  for (let i of str) {
    if (i == "a" || i == "e" || i == "i" || i == "o" || i == "u") cnt++;
  }
  return cnt;
}

const cntVowelsArrow = (str) => {
  let cnt = 0;
  for (let i of str) {
    if (i == "a" || i == "e" || i == "i" || i == "o" || i == "u") cnt++;
  }
  return cnt;
};

console.log(cntVowels("Hello World")); // Output: 3
console.log(cntVowelsArrow("Hello World")); // Output: 3

// for each
arr = ["pune", "delhi", "mumbai"];
arr.forEach((val, idx, arr) => {
  console.log(idx + 1 + ". " + val + " " + arr);
});

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.forEach((val, idx, arr) => {
  arr[idx] = val * val;
});

console.log(arr);

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newArr = arr.map((val, idx, arr) => {
  return val * val;
});
let evenArr = arr.filter((val) => {
  return val % 2 === 0;
});
let oddArr = arr.filter((val) => {
  return val % 2 === 1;
});
console.log(evenArr);
console.log(oddArr);

arr = [87, 88, 89, 90, 91, 92, 93, 94, 95, 96];
newArr = arr.filter((val, idx, arr) => {
  return val >= 90;
});
console.log(newArr);

document.querySelector("h2").innerText += " Hiteshwar Singh";

document.querySelector("button").addEventListener("click", () => {
  if (document.querySelector("button").style.backgroundColor == "blue") {
    document.querySelector("button").style.backgroundColor = "red";
    document.querySelector("div").style.backgroundColor = "red";
  } else {
    document.querySelector("button").style.backgroundColor = "blue";
    document.querySelector("div").style.backgroundColor = "blue";
  }
});
