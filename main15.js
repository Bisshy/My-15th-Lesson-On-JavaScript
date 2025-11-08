//Data stuucttre: Object and Array;

//Arrays

// let listOfNumbers= [2,3,5,7,11];

// console.log(listOfNumbers[2]);
// console.log(listOfNumbers[0]);
// console.log(listOfNumbers[2-1]);

// console.log(listOfNumbers.length);

//Methods
// let doh = "Doh";
// console.log(typeof doh.toUpperCase);
// console.log(doh.toUpperCase());

// let sequence = [1,2,3];
// sequence.push(4);
// sequence.push(5);
// console.log(sequence);
// console.log(sequence.pop());
// console.log(sequence);

// //Objects

// let day1= {
//     squirrel:false,
//     events:["work", "touched", "pizza", "running"]
// };

// console.log(day1.squirrel);
// console.log(day1.wolf);
// day1.wolf=false;
// console.log(day1.wolf);

// let description = {
//     work:"went to work",
//     "touched tree":"Touched a tree"
// };

// let anObject = {left:1, right:2};
// console.log(anObject.left);
// delete anObject.left;
// console.log(anObject.left);
// console.log("left" in anObject);
// console.log("right" in anObject);

// console.log(Object.keys({x:0, y:0, z:2}));

// let objectA= {a:1, b:2};
// Object.assign(objectA, {b:3, c:4});
// console.log(objectA);

// console.log(typeof []);

// let journal = [
//     {eventsA: ["work", "touched tree", "pizza", "running", "television"],
//         squirrel:false},
//     {eventsB:["work", "ice cream","cauliflower", "lasagna","touched tree", "brushed teeth"],
//         squirrel:false},
//     {eventsC:["weekend", "cycling", "breaking", "peanuts", "beer"],
//         squirrel:true
//     },
// ]

//Mutability

// let object1 = {value:10};
// let object2 = object1;
// let object3 = {value:10};

// console.log(object1==object2);
// console.log(object1 == object3);
// object1.value = 50;
// console.log(object2.value);
// console.log(object3.value);

// const score = {visitor:0, home:1};

// console.log(score);

// score.visitor = 3;
// score.home = 1;

// console.log(score);

//The Lycanthrope's log

//  journal = [];

//  function addEntry(events, squirrel){

//     journal.push({events, squirrel});

//  }
//  addEntry(["work", "touched tree", "pizza", "running", "television"],false);
 
//  addEntry(["work", "ice cream", "cauliflower", "lasagna", "touched tree", "brushed teeth"],false);

//  addEntry(["weekend", "cycling", "break", "peanuts", "beer"],true);

//  var JOURNAL = [
//   {"events":["carrot","exercise","weekend"],"squirrel":false},
//   {"events":["bread","pudding","brushed teeth","weekend","touched tree"],"squirrel":false},
//   {"events":["carrot","nachos","brushed teeth","cycling","weekend"],"squirrel":false},
//   {"events":["brussel sprouts","ice cream","brushed teeth","computer","weekend"],"squirrel":false},
//   {"events":["potatoes","candy","brushed teeth","exercise","weekend","dentist"],"squirrel":false},
//   {"events":["brussel sprouts","pudding","brushed teeth","running","weekend"],"squirrel":false},
//   {"events":["pizza","brushed teeth","computer","work","touched tree"],"squirrel":false},
//   {"events":["bread","beer","brushed teeth","cycling","work"],"squirrel":false},
//   {"events":["cauliflower","brushed teeth","work"],"squirrel":false},
//   {"events":["pizza","brushed teeth","cycling","work"],"squirrel":false},
//   {"events":["lasagna","nachos","brushed teeth","work"],"squirrel":false},
//   {"events":["brushed teeth","weekend","touched tree"],"squirrel":false},
//   {"events":["lettuce","brushed teeth","television","weekend"],"squirrel":false},
//   {"events":["spaghetti","brushed teeth","work"],"squirrel":false},
//   {"events":["brushed teeth","computer","work"],"squirrel":false},
//   {"events":["lettuce","nachos","brushed teeth","work"],"squirrel":false},
//   {"events":["carrot","brushed teeth","running","work"],"squirrel":false},
//   {"events":["brushed teeth","work"],"squirrel":false},
//   {"events":["cauliflower","reading","weekend"],"squirrel":false},
//   {"events":["bread","brushed teeth","weekend"],"squirrel":false},
//   {"events":["lasagna","brushed teeth","exercise","work"],"squirrel":false},
//   {"events":["spaghetti","brushed teeth","reading","work"],"squirrel":false},
//   {"events":["carrot","ice cream","brushed teeth","television","work"],"squirrel":false},
//   {"events":["spaghetti","nachos","work"],"squirrel":false},
//   {"events":["cauliflower","ice cream","brushed teeth","cycling","work"],"squirrel":false},
//   {"events":["spaghetti","peanuts","computer","weekend"],"squirrel":true},
//   {"events":["potatoes","ice cream","brushed teeth","computer","weekend"],"squirrel":false},
//   {"events":["potatoes","ice cream","brushed teeth","work"],"squirrel":false},
//   {"events":["peanuts","brushed teeth","running","work"],"squirrel":false},
//   {"events":["potatoes","exercise","work"],"squirrel":false},
//   {"events":["pizza","ice cream","computer","work"],"squirrel":false},
//   {"events":["lasagna","ice cream","work"],"squirrel":false},
//   {"events":["cauliflower","candy","reading","weekend"],"squirrel":false},
//   {"events":["lasagna","nachos","brushed teeth","running","weekend"],"squirrel":false},
//   {"events":["potatoes","brushed teeth","work"],"squirrel":false},
//   {"events":["carrot","work"],"squirrel":false},
//   {"events":["pizza","beer","work","dentist"],"squirrel":false},
//   {"events":["lasagna","pudding","cycling","work"],"squirrel":false},
//   {"events":["spaghetti","brushed teeth","reading","work"],"squirrel":false},
//   {"events":["spaghetti","pudding","television","weekend"],"squirrel":false},
//   {"events":["bread","brushed teeth","exercise","weekend"],"squirrel":false},
//   {"events":["lasagna","peanuts","work"],"squirrel":true},
//   {"events":["pizza","work"],"squirrel":false},
//   {"events":["potatoes","exercise","work"],"squirrel":false},
//   {"events":["brushed teeth","exercise","work"],"squirrel":false},
//   {"events":["spaghetti","brushed teeth","television","work"],"squirrel":false},
//   {"events":["pizza","cycling","weekend"],"squirrel":false},
//   {"events":["carrot","brushed teeth","weekend"],"squirrel":false},
//   {"events":["carrot","beer","brushed teeth","work"],"squirrel":false},
//   {"events":["pizza","peanuts","candy","work"],"squirrel":true},
//   {"events":["carrot","peanuts","brushed teeth","reading","work"],"squirrel":false},
//   {"events":["potatoes","peanuts","brushed teeth","work"],"squirrel":false},
//   {"events":["carrot","nachos","brushed teeth","exercise","work"],"squirrel":false},
//   {"events":["pizza","peanuts","brushed teeth","television","weekend"],"squirrel":false},
//   {"events":["lasagna","brushed teeth","cycling","weekend"],"squirrel":false},
//   {"events":["cauliflower","peanuts","brushed teeth","computer","work","touched tree"],"squirrel":false},
//   {"events":["lettuce","brushed teeth","television","work"],"squirrel":false},
//   {"events":["potatoes","brushed teeth","computer","work"],"squirrel":false},
//   {"events":["bread","candy","work"],"squirrel":false},
//   {"events":["potatoes","nachos","work"],"squirrel":false},
//   {"events":["carrot","pudding","brushed teeth","weekend"],"squirrel":false},
//   {"events":["carrot","brushed teeth","exercise","weekend","touched tree"],"squirrel":false},
//   {"events":["brussel sprouts","running","work"],"squirrel":false},
//   {"events":["brushed teeth","work"],"squirrel":false},
//   {"events":["lettuce","brushed teeth","running","work"],"squirrel":false},
//   {"events":["candy","brushed teeth","work"],"squirrel":false},
//   {"events":["brussel sprouts","brushed teeth","computer","work"],"squirrel":false},
//   {"events":["bread","brushed teeth","weekend"],"squirrel":false},
//   {"events":["cauliflower","brushed teeth","weekend"],"squirrel":false},
//   {"events":["spaghetti","candy","television","work","touched tree"],"squirrel":false},
//   {"events":["carrot","pudding","brushed teeth","work"],"squirrel":false},
//   {"events":["lettuce","brushed teeth","work"],"squirrel":false},
//   {"events":["carrot","ice cream","brushed teeth","cycling","work"],"squirrel":false},
//   {"events":["pizza","brushed teeth","work"],"squirrel":false},
//   {"events":["spaghetti","peanuts","exercise","weekend"],"squirrel":true},
//   {"events":["bread","beer","computer","weekend","touched tree"],"squirrel":false},
//   {"events":["brushed teeth","running","work"],"squirrel":false},
//   {"events":["lettuce","peanuts","brushed teeth","work","touched tree"],"squirrel":false},
//   {"events":["lasagna","brushed teeth","television","work"],"squirrel":false},
//   {"events":["cauliflower","brushed teeth","running","work"],"squirrel":false},
//   {"events":["carrot","brushed teeth","running","work"],"squirrel":false},
//   {"events":["carrot","reading","weekend"],"squirrel":false},
//   {"events":["carrot","peanuts","reading","weekend"],"squirrel":true},
//   {"events":["potatoes","brushed teeth","running","work"],"squirrel":false},
//   {"events":["lasagna","ice cream","work","touched tree"],"squirrel":false},
//   {"events":["cauliflower","peanuts","brushed teeth","cycling","work"],"squirrel":false},
//   {"events":["pizza","brushed teeth","running","work"],"squirrel":false},
//   {"events":["lettuce","brushed teeth","work"],"squirrel":false},
//   {"events":["bread","brushed teeth","television","weekend"],"squirrel":false},
//   {"events":["cauliflower","peanuts","brushed teeth","weekend"],"squirrel":false}
// ];




// function phi(table){
//   return (table[3] * table[0] - table[2] * table[1]) / Math.sqrt((table[2] + table[3]) * (table[0] + table[1]) * (table[1] + table[3]) * (table[0] + table[2]));
// }

// console.log(phi([76, 9, 4, 1]));

// for(let event of journalEvents(JOURNAL)){
//   let correlation = phi(tableFor(event, JOURNAL));
//   if(correlation > 0.1 || correlation <-0.1){
//       console.log(event + ":", correlation);
//   }
// }
// console.log(journalEvents("brushed teeth"));
 
//  function tableFor(event, journal){
//     let table = [0, 0, 0, 0];
//     for (let i = 0; i < journal.length; i++){
//         let entry = journal[i]; 
//         let index = 0;
//         if(entry.events.includes(event)) index +=1;
//         if(entry.squirrel) index +=2;
//         table[index] += 1;
//     }
//     return table;
//  }

//  console.log(tableFor("pizza", JOURNAL));

//  //Simpler way to write the for looping;

//  for(let entry of JOURNAL){
//   console.log(`${entry.events.length} events`)
//  }


//  function journalEvents(journal) {
//     let events = [];
//     for (let entry of journal) {
//       for (let event of entry.events) {
//         if (!events.includes(event)) {
//           events.push(event);
//         }
//       }
//     }
//     return events;
//   }
//   console.log(journalEvents(JOURNAL));

//   for(let event of journalEvents(JOURNAL)){
//     console.log(event + ":", phi (tableFor(event, JOURNAL)));
//   }

//   for(let event of journalEvents(JOURNAL)){
//     let correlation = phi(tableFor(event, JOURNAL));
//     if (correlation > 0.1 || correlation < 0.1){
//       console.log(event + ":", correlation);
//     }
//   };

//   for(let entry of JOURNAL){
//     if (entry.events.includes("peanuts") && !entry.events.includes("brushed teeth")){
//       entry.events.push("peanut teeth");
//     }
//   }

//   console.log(phi(tableFor("peanut teeth", JOURNAL)));

//   let todoList = [];
//   function remember(task){
//     todoList.push(task);
//   }
//   function getTask(){
//     return todoList.shift();
//   }
//   function rememberUrgently(task){
//     todoList.unshift(task);
//   }
// remember("buy soap");
// console.log(getTask());
// rememberUrgently("Talk with friends");
// console.log(getTask());

// console.log([1, 2, 3, 2, 1].indexOf(2));
// console.log([1,2,3,2,1].lastIndexOf(2));

// console.log([0, 1, 2, 3, 4].slice(2,4));
// console.log([0, 1, 2, 3, 4].slice(2));

// function remove(array, index){
//   return array.slice(0, index)
//   .concat(array.slice(index +1));
   
// }
// console.log(remove(["a", "b", "c", "d", "e"], 2));

//Strings and their properties

// let kim = "Kim";
// kim.age = 88;
// console.log(kim.age);
// console.log("Coconut".slice(4,7));
// console.log("Coconut".lastIndexOf("o"));

// console.log("one two three".indexOf("ee"));

// console.log("  okay \n".trim());

// console.log(String(6).padStart(3,"0"));

// let sentence ="Secretarybirds specialize in stomping";
// let words = sentence.split(" ");
// console.log(words);
// console.log(words[3].repeat(3));

// function max(...numbers){
//   let result = -Infinity;
//   for(let number of numbers){
//     if(number>result) result=number;
//   }
//   return result;
// }

// console.log(max(4,1,9,-1));

// function min(...numbers){
//   let result = Infinity;
//   for(let number of numbers){
//     if(number<result) result=number;
//   }
//   return result;
// }

// console.log(min(4,1,9,-1));

// let numbers = [5,1,7]
// console.log(max(...numbers));
// console.log(min(...numbers));

// let word = ["never", "fully"];
// console.log(["will",...word, "understand"]);

// function randomPointOnCircle(radius){
//   let angle = Math.random() *2*Math.PI;
//   return{x: radius * Math.cos(angle),
//           y: radius * Math.sin(angle)
//   };
// }
//   console.log(randomPointOnCircle(2));

//   let {name} = {name:"Farajimi", age:23};
//   console.log(name);

//   let string = JSON.stringify({squirrel:false,
//                                 events:["weekends"] });
//   console.log(string);
//   console.log(JSON.parse(string).events);
//   var list = {
//     value: 1,
//     rest: {
//       value: 2,
//       rest: {
//         value: 3,
//         rest: null
//       }
//     }
//   };