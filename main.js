const prompt = require('prompt-sync')()


let attacks = [
    {
        name: "Morsure",
        hp: 10,
        precision: 1
    },
    {
        name: "Soin Léger",
        hp: -15,
        precision: 2
    },
    {
        name: "Griffe d'acier",
        hp: 20,
        precision: 2
    },
    {
        name: "Frappe Dévastatrice",
        hp: 30,
        precision: 3
    },
]
let pers =
{
    name: "Lyra",
    pvMax: 100,
    pv: 100,
    attack: attacks,
}

let ia =
{
    name: "Sombre lutin",
    pvMax: 100,
    pv: 100,
    attack: attacks,
}

console.log('»»————————-————-————-————-—————-———--　★　———————-————-————-————-————-————-—————-««');
console.log("Bienvenue, tu vas assister à un combat Légendaire ! Le premier à O pv va sombrer...");
console.log('»»————————-————-————-————-—————-———--　★　———————-————-————-————-————-————-—————-««');
let game = prompt("Voulez-vous jouer ? Oui (O) Non (N)").toUpperCase()
if (game == "O") {
console.log("╭───╮╭──────╮╭───╮ ┃╭╮┃┃╭╮╰╯┃┃╭╮┃ ╭───╮╭──────╮╭───╮");
console.log("╰───╯╰━━━ ━━╯╰───╯ ┃╭╮┃┃╭╮╰╯┃┃╭╮┃ ╰───╯╰━━━ ━━╯╰───╯");
    console.log("Tu marche tranquillement est un Sombre Lutin attaque" );

    function randomize(min, max) {
        return Math.round(Math.random() * (max - min) + min)
    }
    function choice() {
        for (let i = 0; i < pers.attack.length; i++) {
            console.log("╔═.✵.════════════════════════╗");
            console.log(i + " " + pers.attack[i].name);
            console.log("╚════════════════════════.✵.═╝");
        }
        let choice = parseInt(prompt("Choisi ton attaque"))
        while (choice != 0 && choice != 1 && choice != 2 && choice != 3) {
            choice = parseInt(prompt("choisi ton attaque 0, 1, 2, 3"))
        }
        return pers.attack[choice];
    }
    function atk(atks, luncher, opponent) {

        if (randomize(0, atks.precision) === atks.precision) {
            console.log(`${luncher.name} lance ${atks.name} et inflige ${atks.hp} dégâts`);
            if (atks.hp < 0) {
                luncher.pv -= atks.hp
                console.log(`${luncher.name} se soigne ${-atks.hp} PV`);
            } 
            else {
                opponent.pv -= atks.hp
                console.log(`${opponent.name} subit ${atks.hp} dégâts, il lui reste ${opponent.pv}PV`);
            }
            
        } else {
            
                console.log(`${luncher.name} a raté son ${atks.name}`);
                console.log("-----------------------------------------------------------------")
            
            
        } 
        console.log("-----------------------------------------------------------------")
        console.log(`${opponent.name} a maintenant ${opponent.pv} PV`);
        console.log(`${luncher.name} a maintenant ${luncher.pv} PV`);
    }

    function playia() {
        let iachoice = randomize(0, ia.attack.length - 1)
        return ia.attack[iachoice]
    }

    while (pers.pv > 0 || ia.pv > 0) {
        let atkplay = choice()
        atk(atkplay, pers, ia)
        console.log("-----------------------------------------------------------------")
        console.log("-----------------------------------------------------------------")

        let atkia = playia()
        atk(atkia, ia, pers)
        if (pers.pv <= 0) {
            console.log("Vous avez perdu");
            break
        } else if (ia.pv <= 0) {
            console.log("Gagné");
            break
        }
    }
} else {
    console.log("T'es naze viens jouer");
}
