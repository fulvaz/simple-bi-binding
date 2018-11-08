function BiBinding<T extends {new(...args:any[]):{}}>(constructor:T) {
    return class extends constructor {
        private _data;
        public get data() {
            return this._data;
        }
        public set data(value) {
            this._data = value;
            
        }
    }
}
