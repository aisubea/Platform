var motoGP =[
    {
        circuit : "Losail",
        location : "Qatar",
        winner : {
            firstName : "Andrea",
            lastName : "Dovizioso",
            country : "Italy"
        }
    },
    {
        circuit : "Autodromo",
        location : "Argentina",
        winner : {
            firstName : "Cal",
            lastName : "Crutchlow",
            country : "UK"
        }
    },
    {
        circuit : "De Jerez",
        location : "Spain",
        winner : {
            firstName : "Valentino",
            lastName : "Rossi",
            country : "Italy"
        } 
    },
    {
        circuit : "Mugello",
        location : "Italy",
        winner : {
            firstName : "Andrea",
            lastName : "Dovizioso",
            country : "Italy"
        }
    }
];

let grouped = {};

for (let event of motoGP) {
  let { country, firstName, lastName } = event.winner;
  let name = `${firstName} ${lastName}`;
  let winLocation = `${event.circuit}, ${event.location}`;

  if (!grouped[country]) {
    grouped[country] = { WinningCircuits: [], totalWin: 0 };
  }

  grouped[country].WinningCircuits.push({ name, winLocation });
  grouped[country].totalWin++;
}

console.log(JSON.stringify(grouped, null, 2));