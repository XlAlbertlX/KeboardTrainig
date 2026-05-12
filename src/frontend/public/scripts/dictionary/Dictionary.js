class Dictionary {
    #dictionary;

    constructor() {
        this.#dictionary = [
            {
                "first" : "first string",
                "second" : "second string",
                "third" : "third string",
                "fourth" : "fourth string",
                "fifth" : "fifth string",
                "sixth" : "sixth string",
                "seventh" : "seventh string",
                "eighth" : "eighth string",
                "nineth" : "nineth string",
                "tenth" : "tenth string",
                "eleventh" : "eleventh string",
            }
        ];
    }

    get getDictionary() {
        return Object.values(this.#dictionary[0]);
    }

    getRandomStringFromDictionary = () => {
        let array = Object.values(this.#dictionary[0])

        return array[Math.floor(Math.random() * array.length)];
    }

}

export default Dictionary;