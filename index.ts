import { from } from 'rxjs';
import { first } from 'rxjs/operators';

//https://www.learnrxjs.io/learn-rxjs/operators/filtering/first
// Example 1: First value from sequence

const listOfArr = from([
  [111, 2, 3, 4, 5],
  [19, 2, 53, 42, 15],
  [14, 21, 35, 4, 5],
]);
//no arguments, emit first value
const example = listOfArr.pipe(first());

const subscribe = example.subscribe((val) =>
  console.log(`First value: ${val}`)
);
//output: "First arr of sequence"
