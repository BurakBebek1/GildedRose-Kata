import { Item } from "./shared/models/item.model";
import {
  updateAgedBrie,
  updateBackstagePassesConcert,
  updateNormal,
  updateSulfurasHandOfRagnaros,
  updateConjured,
} from "./shared/components/qualityOperations";

enum Names {
  AgedBrie = "Aged Brie",
  BackstagePassesConcert = "Backstage passes to a TAFKAL80ETC concert",
  SulfurasHandOfRagnaros = "Sulfuras, Hand of Ragnaros",
  Conjured = "Conjured",
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality(): Item[] {
    this.items.forEach((currentItem) => {
      switch (currentItem.name) {
        case Names.AgedBrie: {
          currentItem = updateAgedBrie(currentItem);
          break;
        }
        case Names.BackstagePassesConcert: {
          currentItem = updateBackstagePassesConcert(currentItem);
          break;
        }
        case Names.SulfurasHandOfRagnaros: {
          currentItem = updateSulfurasHandOfRagnaros(currentItem);
          break;
        }
        case Names.Conjured: {
          currentItem = updateConjured(currentItem);
          break;
        }
        default: {
          currentItem = updateNormal(currentItem);
        }
      }
    });
    return this.items;
  }
}
