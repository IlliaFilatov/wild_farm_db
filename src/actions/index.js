export const buySeeds = (seeds, price) => {
  return {
    type: 'BUY',
    data: {
      seeds,
      price
    }
  }
}
export const plantSeed = (seeds) => {
  return {
    type: 'PLANT_SEED',
    data: seeds
  }
}
export const sellHerbPart = (herb) => {
  return {
    type: 'SELL_HERB_PART',
    data: herb
  }
}
export const sellCoinsPart = (price) => {
  return {
    type: 'SELL_COINS_PART',
    data: price
  }
}
export const takeSeed = (plant) => {
  return {
    type: 'TAKE_SEED',
    data: plant
  }
}
export const dropSeed = (filledCell) => {
  return {
    type: 'DROP_SEED',
    data: filledCell
  }
}
export const herbHasGrown = (herbName) => {
  return {
    type: 'HERB_HAS_GROWN',
    data: herbName
  }
}
export const setCellFree = (cell) => {
  return {
    type: 'SET_CELL_FREE',
    data: cell
  }
}