import { PolozkaKalendare } from "./model";

export const polozky: PolozkaKalendare[] = [
  {
    nazev: "Zubařka",
    cas: {
      den: 5,
      hodiny: 13,
      minuty: 30,
    },
    type: "událost",
    trvani: 60,
  },
  {
    nazev: "Domácí úkol 2 TypeScript",
    cas: {
      den: 4,
      hodiny: 20,
      minuty: 59,
    },
    type: "úkol",
    splneno: true,
  },
  {
    nazev: "Vyluxovat, vytřít",
    cas: {
      den: 6,
      hodiny: 12,
      minuty: 0,
    },
    type: "úkol",
    splneno: false,
  },
  {
    nazev: "Rande",
    cas: {
      den: 5,
      hodiny: 19,
      minuty: 30,
    },
    type: "událost",
    trvani: 180,
  },
];
