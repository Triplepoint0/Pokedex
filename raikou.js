var pknumb = 243;

    
    class pokemon {
    constructor(name, hp, attack, defense, abilities, types, weight, base, id) {
            this.name = name;
            this.hp = hp;
            this.attack = attack;
            this.defense = defense;
            this.abilities = abilities;
            this.types = types;
            this.weight = weight;
            this.base = base;
            this.id = id;
        }
    }

    class Jason{
        constructor(pokemon) {
            this.pokemon = []
        }
        all() {
            return this.pokemon
    
        }
        add(addToArray) {
            this.pokemon.push(addToArray)
        }
    
        get(name) {
            for (let i = 0; i < this.pokemon.length; i++) {
                if (name == this.pokemon[i].name) {
                    return this.pokemon[i]
                }
            }
        }
    }
    let jason = new Jason()
    

    axios.get("https://pokeapi.co/api/v2/pokemon/" + pknumb + "/")
    .then((response) => {
        var data = response.data
        var name = document.querySelector("span.pname")
        var hp = document.querySelector(".health")
        var attack = document.querySelector(".atkbarz")
        var defense = document.querySelector(".defbarz")
        var ability1 = document.querySelector(".abi1")
        var ability2 = document.querySelector(".abi2")
        var types = document.querySelector(".type")
        var weight = document.querySelector("#txt2")
        
        var id = document.querySelector(".no")

        name.innerHTML = data.name
        hp.innerHTML = data.stats[5].base_stat
        attack.innerHTML = data.stats[4].base_stat
        defense.innerHTML = data.stats[3].base_stat
        ability1.innerHTML = data.abilities[0].ability.name
        ability2.innerHTML = data.abilities[1].ability.name
        types.innerHTML = data.types[0].type.name
        weight.innerHTML = data.weight

        id.innerHTML = data.id

    })
    .catch((error) => {
        console.log(error)
    })