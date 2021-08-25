export default class VendingMachine {
    public items: Item[] = [];
    public totalDeposit = 0;
    public getMessage: string = ''; 
    getItem(item: Item) {
      
// We want to loop throught the items in the vending machine. Then update if the item is unavailable.
    for (const item2 of this.items)
        if(item2.name === item.name){
            
            this.getMessage = 'available';

        }
    else{this.getMessage = 'unavailable';
}

    
    }
    

    public addItem(item: Item) {
        this.items.push(item);
    }
    public addDeposit(deposit: number){
        this.totalDeposit += deposit;        
}
    public getDeposit(){
        return this.totalDeposit;
}}

export class Item {
    public name: string;
    public price: number;

    constructor(name: string, price: number) {
        this.name = name; 
        this.price = price;
    }
    getPrice(){
        return this.price; 
    }

}

