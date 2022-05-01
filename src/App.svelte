<script>
  import { onMount } from "svelte";
  import Cell from "./Cell.svelte";
  import { cellsArePairable } from "./computePairable";

  const NO_SELECTED = -1;
  const COLUMNS_NUMBER = 8;
  const ROWS_TO_ADD = 4;
  const PAIR_CLEAR_POINTS = 5;
  const ROW_CLEAR_POINTS = 10;
  const SUM_TO_MATCH = 10;

  let score = 0;
  let times_added = 0;
  let cellList = [];
  let selectedIndex = NO_SELECTED;

  function cellsAreMatched(newIndex) {
    const selectedValue = cellList[selectedIndex].value;
    const newValue = cellList[newIndex].value;

    if (
      selectedValue == newValue ||
      selectedValue + newValue === SUM_TO_MATCH
    ) {
      return true;
    }
    return false;
  }

  function onSelectCell(newIndex) {
    if (selectedIndex < 0) {
      selectedIndex = newIndex;
      return;
    }

    if (
      cellsArePairable(cellList, selectedIndex, newIndex, COLUMNS_NUMBER) &&
      cellsAreMatched(newIndex)
    ) {
      cellList[selectedIndex].pristine = false;
      cellList[newIndex].pristine = false;
      cellList = cellList;

      score += PAIR_CLEAR_POINTS;

      selectedIndex = NO_SELECTED;

      cleanLines();
    } else {
      selectedIndex = newIndex;
    }
  }

  function cleanLines() {
    const rows = cellList.length / COLUMNS_NUMBER;

    let rowsToDelete = [];

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < COLUMNS_NUMBER; j++) {
        if (cellList[i * COLUMNS_NUMBER + j].pristine) {
          break;
        } else if (j === COLUMNS_NUMBER - 1) {
          rowsToDelete.unshift(i);
        }
      }
    }

    for (let row of rowsToDelete) {
      console.log("Row removed : ", row);
      new Promise((resolve) => setTimeout(resolve, 600)).then(() => {
        cellList.splice(row * COLUMNS_NUMBER, COLUMNS_NUMBER);
        cellList = cellList;
      });
      score += ROW_CLEAR_POINTS;
    }
  }

  async function addCells() {
    for (let i = 0; i < COLUMNS_NUMBER * ROWS_TO_ADD; i++) {
      new Promise((resolve) => setTimeout(resolve, 30 * i)).then(() => {
        cellList.push({
          pristine: true,
          value: Math.floor(Math.random() * 9 + 1),
        });
        cellList = cellList;
      });
    }

    // Dummy data for tests
    // cellList.push({ pristine: false, value: 2 });
    times_added++;
  }

  onMount(() => {
    addCells();
  });
</script>

<main>
  <p>
    Score: {score} - Sum to match: {SUM_TO_MATCH} - Times added: {times_added}
  </p>
  <p>
    You can match pairs, and addition (2 numbers) that gives {SUM_TO_MATCH}.
    <br />
    You can pair two number for matchchecking if they are next to each other on the
    line (grayed out numbers don't count)
    <br />
    or if they wrap around the edge (e.g: last of first line and first of second
    line) or around the start (first number and last number of the grid can match).
    <br />
    Also vertically, with column wrapping (first of the column can match last of
    the column).
    <br />
    You can add more rows if you are stuck with the "+" button.
  </p>
  <div
    class="cell-grid"
    style:grid-template-columns={[...Array(COLUMNS_NUMBER)]
      .map(() => "1fr")
      .join(" ")}
  >
    {#each cellList as cell, index}
      <div>
        <Cell
          pristine={cell.pristine}
          value={cell.value}
          selected={selectedIndex == index}
          on:click={() => cell.pristine && onSelectCell(index)}
        />
        <!-- <span>{index}</span> -->
      </div>
    {/each}
  </div>

  <button on:click={addCells}>+</button>
</main>

<style>
  :global(body) {
      background-color: mediumseagreen;
  }

  main {
    text-align: center;
  }

  .cell-grid {
    display: grid;
  }
</style>
