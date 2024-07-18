interface Cas {
  den: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  hodiny: number;
  minuty: number;
}

interface Polozka {
  nazev: string;
  cas: Cas;
}

interface Udalost extends Polozka {
  type: "událost";
  trvani: number;
}

interface Ukol extends Polozka {
  type: "úkol";
  splneno: boolean;
}

export type PolozkaKalendare = Udalost | Ukol;
