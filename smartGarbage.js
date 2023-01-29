const bins = {
  waste: 0,
  recycling: 0,
  compost: 0
}

function smartGarbage(trash, bins) {
  if (trash === "waste") {
    bins.waste += 1;
    return bins
  } else if (trash === "recycling") {
    bins.recycling += 1;
    return bins
  } else if (trash === "compost") {
    bins.compost += 1;
    return bins
  }
}
smartGarbage('waste', bins)
smartGarbage('recycling', bins)
console.log(bins)