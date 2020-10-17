# Hashtables
A hash table (also called a hash, hash map, unordered map or dictionary) is a data structure that pairs keys to values. Its a technique to convert a range of key values into a range of indexes of an array.
## Challenge
implement a Hashtable with the following methods:add, get ,contains, hash

## Approach & Efficiency
The hashcode is an index in the underlying array of the hashtable. This means that finding a key in a hashtable is as fast as accessing an array by index. So, while searching, the hash table mechanism gives me O(1) performance for any given key search, since a constant amount of time is required to compute the hash value and then index the hash table at that location.

> The more collisions you generate, the more the complexity tends toward O(n).
## API
- add: takes in both the key and value. This method should hash the key, and add the key and value pair to the table, handling collisions as needed.
- get: takes in the key and returns the value from the table.
- contains: takes in the key and returns a boolean, indicating if the key exists in the table already.
- hash: takes in an arbitrary key and returns an index in the collection.