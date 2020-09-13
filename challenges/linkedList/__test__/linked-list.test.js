'use strict';
const linkedList = require('../linked-list.js');

describe('Linked list insertions', () => {

    let ll = new linkedList();
    let value = 'first';
    let secValue = 'second';
    let therValue = 'third'
    ll.insert(value);
    ll.append(secValue);
    ll.insertAfter(secValue, therValue)
    it('Can successfully add a node to the end of the linked list', () => {

        expect(ll.head.value).toEqual(value);
        expect(ll.head.pointer).not.toBeNull();
    })
    it('Can successfully add multiple nodes to the end of a linked list', () => {
        expect(ll.head.pointer.value).toEqual(secValue);

    })
    it('Can successfully insert a node before a node located i the middle of a linked list', () => {
        expect(ll.head.pointer.pointer.value).toEqual(therValue);

    })
    it('Can successfully insert a node before the first node of a linked list', () => {
        ll.insertBefor(secValue, therValue);
        expect(ll.head.pointer.value).toEqual(therValue);

    })
    it('Will return true when finding a value within the linked list that exists, Will return false when searching for a value in the linked list that does not exist', () => {
        expect(ll.includes('10nthValue')).toBeFalsy();
        expect(ll.includes(secValue)).toBeTruthy();
    })
    
})
