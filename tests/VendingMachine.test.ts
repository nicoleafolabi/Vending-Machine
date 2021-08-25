import VendingMachine from "../src/VendingMachine";
import { Item } from '../src/VendingMachine'

describe('Vending Machine', () => {
    test('smoke test', () => {
        expect(true).toBeTruthy();
    });
})

// #1
test('returns all items in the vending machine', () => {
    let vendingMachine = new VendingMachine();
    let item = new Item('Cake', 200); 
    vendingMachine.addItem(item);
    expect(vendingMachine.items.length).toEqual(1);  
})

test('return price for items in the vending machine',() => {
    let vendingMachine = new VendingMachine ();
    let item = new Item('Cake', 200);
    vendingMachine.addItem(item);
    expect(item.getPrice()).toEqual(200)
})

// #2 and #3
test('return customers balance',() => {
    let vendingMachine = new VendingMachine ();
    let deposit = 1000;
    vendingMachine.addDeposit(deposit);
    expect(vendingMachine.getDeposit()).toEqual(1000);
    let nextDeposit = 5000;
    vendingMachine.addDeposit(nextDeposit);
    expect(vendingMachine.getDeposit()).toEqual(6000);
})

// #4
test ('return unavailable if item is ',() => {
    let vendingMachine = new VendingMachine ();
    let item = new Item ('Cake',10);
    vendingMachine.getItem(item);
    expect(vendingMachine.getMessage).toEqual('unavailable');
}) 