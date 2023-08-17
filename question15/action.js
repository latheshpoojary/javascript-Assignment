const query = (array, number) => {
  var index = array.indexOf(number);
  if (index == -1) console.log(number + " does not exist");
  else {
    let nearLargestDistance = array.length;
    let nearLargest = 0;
    array.map((item) => {
      if (item > number && item > nearLargest) {
        itemIndex = array.indexOf(item);
        if (itemIndex < index) {
          let distance = index - itemIndex;
          if (distance < nearLargestDistance) {
            nearLargestDistance = distance;
            nearLargest = item;
          }
        } else {
          let distance = itemIndex - index;
          if (distance < nearLargestDistance) {
            nearLargestDistance = distance;
            nearLargest = item;
          }
        }
      }
    });
    if (nearLargest) console.log(nearLargest);
    else console.log("no near largest number");
  }
};

query([1, 4, 3, 2, 5, 7], 7);
