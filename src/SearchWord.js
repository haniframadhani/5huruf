export default function SearchWord(p1, p2, p3, p4, p5, inc, exc) {
  const inputSpesifik = [p1, p2, p3, p4, p5]; //input
  const inputTermasukSplit = inc.toLowerCase().split(/,\s*/); //input
  const inputTidakTermasukSplit = exc.toLowerCase().split(/,\s*/); //input
  let result, resultIncExc;
  return fetch('./word-list/word-list.json')
    .then(response => response.json())
    .then(response => {
      const kata = response.indonesia;
      const resultInc = kata.filter(val => inputTermasukSplit.every(v => val.includes(v)));
      const resultExc = kata.filter(val => inputTidakTermasukSplit.every(v => !val.includes(v)));
      if (inputTermasukSplit != '' && inputTidakTermasukSplit != '' && inputSpesifik.some(Boolean) == true) { // 1 1 1
        resultIncExc = resultInc.filter(val => inputTidakTermasukSplit.every(v => !val.includes(v)));
        result = resultIncExc.filter(val => inputSpesifik.every((val2, i) => val2 ? val[i] === val2 : true));
      } else if (inputTermasukSplit != '' && inputTidakTermasukSplit != '' && inputSpesifik.some(Boolean) == false) { // 1 1 0
        resultIncExc = resultInc.filter(val => inputTidakTermasukSplit.every(v => !val.includes(v)));
        result = resultInc.filter((e) => resultIncExc.indexOf(e) > -1);
      } else if (inputTermasukSplit != '' && inputTidakTermasukSplit == '' && inputSpesifik.some(Boolean) == true) { // 1 0 1
        result = resultInc.filter(val => inputSpesifik.every((val2, i) => val2 ? val[i] === val2 : true));
      } else if (inputTermasukSplit != '' && inputTidakTermasukSplit == '' && inputSpesifik.some(Boolean) == false) { // 1 0 0
        result = resultInc;
      } else if (inputTermasukSplit == '' && inputTidakTermasukSplit != '' && inputSpesifik.some(Boolean) == true) { // 0 1 1
        result = resultExc.filter(val => inputSpesifik.every((val2, i) => val2 ? val[i] === val2 : true));
      } else if (inputTermasukSplit == '' && inputTidakTermasukSplit != '' && inputSpesifik.some(Boolean) == false) { // 0 1 0
        result = resultExc;
      } else if (inputTermasukSplit == '' && inputTidakTermasukSplit == '' && inputSpesifik.some(Boolean) == true) { // 0 0 1
        result = kata.filter(val => inputSpesifik.every((val2, i) => val2 ? val[i] === val2 : true));
      }
      // console.log("result : ", result);
      return result;
    });
}