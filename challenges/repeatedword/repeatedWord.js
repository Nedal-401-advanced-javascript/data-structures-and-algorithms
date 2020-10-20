'use strict';
const HashTable = require('../../hashtable/hashtable.js')
let arr="Once upon a time, there was a brave princess who.";
function findWord(str){
  let words=str.replace(',','').replace('.','').split(' ')
  let repetedWord = new HashTable(1024)

      let maxRepetObj={};
      let maxRepetNum=0;
  for (let i = 0; i < words.length; i++) {
      const word = words[i];
      let indexOfWord = repetedWord.entries[repetedWord.hash(word)]
      if (indexOfWord) {                                // check it there is a value in the index
          let current = indexOfWord.head
          while (current.next && !current.value[word]) { //in case there were a collisions with outher word
              current = current.next                    // search for the right word
          }
          if (current.value[word]) {  
                    current.value[word]+=1;             // in case the word in the index increment the counter {word:1}-->{word:2}
                if (current.value[word]>maxRepetNum ) { //keep track the max
                    maxRepetObj = current.value;
                    maxRepetNum = current.value[word];
                }else if(current.value[word]==maxRepetNum ){
                  let otherMax=current.value
                  maxRepetObj={...maxRepetObj,...otherMax}
                }
          }else repetedWord.add(word,1)
      }else repetedWord.add(word,1)
  }return maxRepetObj;
}

findWord(arr)