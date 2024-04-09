class DataStorage<T> {
  private data : T[] = [];
  add(item :T) {
    this.data.push(item);
  }
  remove(item :T) {
    this.data.splice(this.data.indexOf(item), 1);
  }
  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.add('Bryan')