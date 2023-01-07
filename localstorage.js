class ScratchLocalStorage {
    constructor() {
    }
    
    getInfo() {
        return {
            "id": "LocalStorage",
            "name": "LocalStorage",
            "blocks": [
                        {
                            "opcode": "getitem",
                            "blockType": "reporter",
                            "text": "get localstorage item from key [key]",
                            "arguments": {
                                "key": {
                                    "type": "string",
                                    "defaultValue": "key"
                                },
                            }
                        },
                        {
                            "opcode": "setitem",
                            "blockType": "reporter",
                            "text": "set localstorage item by key [key] [data]",
                            "arguments": {
                                "key": {
                                    "type": "string",
                                    "defaultValue": "key"
                                },
                                "data": {
                                    "type": "string",
                                    "defaultValue": "data"
                                },
                            }
                        },
                        {
                            opcode: 'existantitem',
                            blockType: Scratch.BlockType.BOOLEAN,
                            text: 'does localstorage item by key [key] exist?',
                            "arguments": {
                              "key": {
                                "type": Scratch.ArgumentType.STRING,
                                "defaultValue": "key",
                              }
                            }
                        },
                ],
        };
    }
    
    getitem({key}) {
        return localStorage.getItem(key);
    };
    
    setitem({key, data}) {
        localStorage.setItem(key, data);
        return localStorage.getItem(key);
    };

    existantitem({key}) {
        if(localStorage.getItem(key) === null){
            return false;
        } else {
            return true;
        }
    }
}

Scratch.extensions.register(new ScratchLocalStorage())
