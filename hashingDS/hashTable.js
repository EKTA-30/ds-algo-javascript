class HashTable{
    constructor(){
        this.arr = new Array(255);
        this.size = 0;
    }

    _hash(key){
        //id
        //i : 105
        //d : 100
        let hash = 0;
        for(let i =0;i<key.length;i++){
            hash += key.charCodeAt(i);
        }
        return (hash % this.arr.length);
    }
    set(key,value){
       let index =  this._hash(key);
       this.arr[index] = value;
       this.size++;
    }

    get(key){
        let index = this._hash(key);
        return this.arr[index];
    }

    remove(key){
        let index = this._hash(key);
        if(this.arr[index] && this.arr.length){
            this.arr[index] = null;
            this.size--;
            return true;
        }
        else
        {
            return false;
        }
    }

}

let map = new HashTable();
map.set('id',159);
map.set('name',"Ekta");

console.log(map.get('id'));
console.log(map.get('name'));
console.log(map.remove('name'));
console.log(map.remove('name'));

