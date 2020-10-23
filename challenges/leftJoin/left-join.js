
function leftJoin(hash1, hash2) {
  let joined = [];
  hash1.forEach((element) => {
    if (element != undefined) {
      let key = Object.keys(element);
      if (hash2.contains(key)) {
        let hash2Val = hash2.get(key).value;
        joined.push([key, element.value, hash2Val]);
        // {hamad: name} {ahmad: num} ---> [ahmad,num,name]=[key,key1.value,key2.value]
      } else {
        joined.push([key, element.value, null]);
      }
    }
  });
  return joined;
}
