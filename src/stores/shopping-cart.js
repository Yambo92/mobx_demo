import { observable, action, computed} from 'mobx';



export class ShoppingCart {

    @observable
    items = [];
  
    @computed
    get totalPrice() {
      console.log('totalPrice called');
      
      return this.items.reduce( (acc, cur) => acc + cur.price, 0 )
    }
  
    @action
    add(item) {
        item.id = this.items.length === 0 ? 1 : Math.max(...this.items.map(i => i.id)) + 1;
      this.items.push(item);
    }
  }