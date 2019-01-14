function findMinAndRemoveSorted(array){
  return array.shift();
}

function merge(firstSubarray, secondSubArray){
  let sorted = [];

  while (firstSubarray.length != 0 && secondSubArray.length != 0) {
    let firstMin = findMinAndRemoveSorted(firstSubarray);
    let secondMin = findMinAndRemoveSorted(secondSubArray);
    sorted.push(firstMin);
    sorted.push(secondMin);
  }
  return sorted;
}

function mergeSort(array){
    let midpoint = array.length/2
    let firstHalf = array.slice(0, midpoint)
    let secondHalf = array.slice(midpoint, array.length)

    if(array.length < 2){
      return array
    } else {
      merge(mergeSort(firstHalf), mergeSort(secondHalf))
    }
  }
