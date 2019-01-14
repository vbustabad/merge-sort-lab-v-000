function findMinAndRemoveSorted(array){
  return array.shift();
}

function merge(firstSubarray, secondSubarray){
  let sorted = [];
  let minfirstSubarray = firstSubarray[0];
  let minsecondSubarray = secondSubarray[0];

  while (firstSubarray.length != 0 && secondSubarray.length != 0) {
    if (minfirstSubarray < minsecondSubarray) {
      sorted.push(minfirstSubarray);
    } else {
      sorted.push(minsecondSubarray);
    }
  }

  return sorted;
}

function mergeSort(array){
    let midpoint = array.length/2
    let firstHalf = array.slice(0, midpoint)
    let secondHalf = array.slice(midpoint, array.length)

    if (array.length < 2){
      return array
    } else {
      merge(mergeSort(firstHalf), mergeSort(secondHalf))
    }
  }
