import { polozky } from "./data.js";
import { PolozkaKalendare } from "./model.js";

const renderGrid = (): void => {
  const gridElement = document.querySelector(".grid")!;
  const count = 7 * 24;
  for (let i = 0; i < count; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    gridElement.appendChild(cell);
  }
};

renderGrid();

const renderCalendar = (polozky: PolozkaKalendare[]): void => {
  polozky.map((polozka) => {
    const divID = polozka.cas.den;
    const marginTop = polozka.cas.hodiny * 60 + polozka.cas.minuty;
    let height = "";

    if (polozka.type === "událost") {
      height = `${polozka.trvani}px`;
    } else {
      height = "fit-content";
    }

    const dayColumn = document.querySelector(`#day${divID}`) as HTMLBodyElement;
    dayColumn.innerHTML += `<div class="calendar-item item-event ${
      polozka.type === "událost" ? "item-event" : "item-task"
    } ${
      polozka.type === "úkol" && polozka.splneno === true ? "task-done" : null
    }" style="margin-top: ${marginTop}px; height: ${height}; ${
      polozka.type === "úkol" ? "display: block" : null
    }">
              ${polozka.nazev}
            </div>`;
  });
};

renderCalendar(polozky);
