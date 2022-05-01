<script>
  import { onMount } from "svelte";
  import Cell from "./Cell.svelte";
  import { cellsArePairable } from "./computePairable";

  const NO_SELECTED = -1;
  const COLUMNS_NUMBER = 6;
  const ROWS_TO_ADD = 4;
  const PAIR_CLEAR_POINTS = 5;
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
    } else {
      selectedIndex = newIndex;
    }
  }

  function addCells() {
    for (let i = 0; i < COLUMNS_NUMBER * ROWS_TO_ADD; i++) {
      cellList.push({
        pristine: true,
        value: Math.floor(Math.random() * 9 + 1),
      });
    }
    cellList = cellList;
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
      </div>
    {/each}
  </div>

  <button on:click={addCells}>+</button>
</main>

<style>
  main {
    text-align: center;
  }

  .cell-grid {
    display: grid;
  }
</style>
