
/**
 * IIFE that removes seen items from a total list on JustWatch.com.
 * 
 * Ensure you scroll down to load all items before running this script.
 */
(() => {
  const parent = document.getElementsByClassName('title-list-grid')[0]
  const all = document.getElementsByClassName('title-list-grid__item')
  const allCount = all.length;
  let seenCount = 0;
  for(each of all) {
    const hasSeen = each.querySelector('[aria-label="Mark as unseen"]')
    if (hasSeen) {
      parent.removeChild(each)
      seenCount++
    }
  }
  console.log(`You have removed ${seenCount} seen items. You have seen ${Math.round(seenCount / allCount*100, 2)}% of all ${allCount} movies. Only ${allCount - seenCount} unseen movies left.`)
}
)()

