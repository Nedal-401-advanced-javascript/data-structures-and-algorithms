'use strict';
let HashTable=require('./hashtable')
describe('check the functionality of the hash table',()=>{
     let myHashTable = new HashTable(1024)

    it('Adding a key/value to your hashtable results in the value being in the data structure',()=>{
        myHashTable.add("Nedal","0776072360");
        expect(myHashTable.entries[myHashTable.hash("Nedal")]).toBeTruthy();

    })
    it('Retrieving based on a key returns the value stored',()=>{
        expect(myHashTable.get("Nedal").head.value["Nedal"]).toBe("0776072360")
    })
    it('Successfully returns null for a key that does not exist in the hashtable',()=>{
        let hash=myHashTable.hash('Bara')
        console.log(myHashTable);
        expect(myHashTable.entries[hash]).toBeUndefined();
    })
    it('Successfully handle a collision within the hashtable',()=>{
        myHashTable.add("Nedal","026454680");
        let hashName = myHashTable.hash("Nedal")
        expect(myHashTable.entries[hashName].head.value['Nedal']).toBe("0776072360")
        expect(myHashTable.entries[hashName].head.next.value['Nedal']).toBe("026454680")
    })
})