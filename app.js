/**
 * Corporate name generator
 */

var corp = {

    words: [
        "cloud",
        "tech",
        "park",
        "pole",
        "section",
        "sector",
        "start",
        "over",
        "grey",
        "infrared",
        "forge",
        "wolf",
        "woods",
        "aegis",
        "flux",
        "hyper",
        "tribal",
        "up",
        "life",
        "play",
        "drake",
        "river",
        "pool",
        "real",
        "access",
        "horizon",
        "frequencies",
        "center",
        "forcefield",
        "point",
        "zone",
        "area",
        "blue",
        "black",
        "space",
    ],
    
    suffixes: [
        "services",
        "solutions",
        "universal",
        "consulting",
        "provider",
        "core",
        "network",
        "integrated"
    ],

    // Determins how often suffixes shold be used
    suffixesWeight: 0.4,

    // Determines how often use three words
    threeWordsWeight: 0.1,

    pickOneAmongst: function (items) {
        var indice = Math.floor(Math.random() * items.length);
        return items[indice];
    },

    shouldUse: function (weight) {
        return Math.random() < weight;
    },

    compose: function () {
        var words = [
            this.pickOneAmongst(this.words),
            this.pickOneAmongst(this.words),
        ];
        if (this.shouldUse(this.threeWordsWeight)) {
            words.push(this.pickOneAmongst(this.words));
        }
        if (this.shouldUse(this.suffixesWeight)) {
            words.push(this.pickOneAmongst(this.suffixes));
        }
        return words;
    },

    generateName: function () {
        return this.compose().join(" ");
    },
}

$("#content").html(corp.generateName());
