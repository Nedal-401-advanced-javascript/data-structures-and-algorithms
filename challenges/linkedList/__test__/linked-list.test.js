'use strict';
const Node = require('../linked-list.js');
// jest.spyOn(global.console, 'log');

describe('Node Module', ()=> {
    it('constructor()', ()=> {
        let node = new Node();
        expect(node.value).toEqual(undefined);
    }) 
});