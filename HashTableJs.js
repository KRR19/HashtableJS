class HashTable {
    constructor(size){
      this.data = new Array(size);
    }
  
    _hash(key) {
      let hash = 0;
      for (let i =0; i < key.length; i++){
          hash = (hash + key.charCodeAt(i) * i) % this.data.length
      }
      return hash;
    }

    get(key) {
        const hashKey = this._hash(key);
        const current = this.data[hashKey];
        if(current) {
          for(let i = 0; i < current.length; i++) {
            if(current[i][0] === key) {
              return current[i][1];
            }
          }
        }
        return undefined;
    }

    set(key, value) {
        const hashKey = this._hash(key);
        if(!this.data[hashKey]) {
          this.data[hashKey] = [];
        }

        this.data[hashKey].push([key, value]);
    }
  }
  
  const myHashTable = new HashTable(50)
  myHashTable.set('grapes', 10000)
  myHashTable.get('grapes')
  myHashTable.set('apples', 9)
  myHashTable.get('apples')


  