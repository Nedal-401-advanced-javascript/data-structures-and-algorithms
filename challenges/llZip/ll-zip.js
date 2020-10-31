"use strict";
let LinkedList = require("./ll-module");

module.exports = function (list1, list2) {
  let newList = new LinkedList();
  let current = list1.head;
  let current2 = list2.head;

  while (current || current2) {
    if (current) {
      if (newList.head) {
        newList.append(current.value);
      } else {
        newList.insert(current.value);
      }
      current = current.pointer;
    }

    if (current2) {
      newList.append(current2.value);
      current2 = current2.pointer;
    }
  }
  console.log(newList.toString());

  return newList;
};

// let ll=new LinkedList()
// ll.insert(1)
// ll.append(2)
// ll.append(3)
// ll.append(4)
// ll.append(5)
// let ll2=new LinkedList()
// ll2.insert(6)
// ll2.append(7)
// ll2.append(8)
// ll2.append(9)
// zipLists(ll,ll2)
