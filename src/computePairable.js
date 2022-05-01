export function cellsArePairable(
  cellList,
  selectedIndex,
  newIndex,
  columnsNumber
) {
  return (
    isClosestRightPristine(cellList, selectedIndex, newIndex) ||
    isClosestLeftPristine(cellList, selectedIndex, newIndex) ||
    isClosestUpPristine(cellList, selectedIndex, newIndex, columnsNumber) ||
    isClosestDownPristine(cellList, selectedIndex, newIndex, columnsNumber)
  );
}

function isClosestLeftPristine(cellList, selectedIndex, newIndex) {
  let i = selectedIndex;
  do {
    i--;
    if (i < 0) {
      i = cellList.length - 1;
    }
  } while (!cellList[i].pristine);

  if (i !== selectedIndex && i === newIndex) {
    return true;
  }
  return false;
}

function isClosestRightPristine(cellList, selectedIndex, newIndex) {
  let i = selectedIndex;
  do {
    i++;
    if (i === cellList.length) {
      i = 0;
    }
  } while (!cellList[i].pristine);

  if (i !== selectedIndex && i === newIndex) {
    return true;
  }
  return false;
}

function isClosestUpPristine(cellList, selectedIndex, newIndex, columnsNumber) {
  let i = selectedIndex;
  do {
    i -= columnsNumber;
    if (i < 0) {
      i = cellList.length + i;
    }
  } while (!cellList[i].pristine);

  if (i !== selectedIndex && i === newIndex) {
    return true;
  }
  return false;
}

function isClosestDownPristine(
  cellList,
  selectedIndex,
  newIndex,
  columnsNumber
) {
  let i = selectedIndex;
  do {
    i += columnsNumber;
    if (i >= cellList.length) {
      i -= cellList.length;
    }
  } while (!cellList[i].pristine);

  if (i !== selectedIndex && i === newIndex) {
    return true;
  }
  return false;
}
