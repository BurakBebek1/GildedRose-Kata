import { Item } from "../models/item.model";

const MAXQUALITY: number = 50;
const SELLINELEVEN: number = 11;
const SELLINSIX: number = 6;
const SELLINZERO: number = 0;

const checkMaxQuality = (quality: number): boolean =>
  quality < MAXQUALITY ? true : false;
const checkSellInUnderEleven = (sellIn: number): boolean =>
  sellIn < SELLINELEVEN ? true : false;
const checkSellInUnderSix = (sellIn: number): boolean =>
  sellIn < SELLINSIX ? true : false;
const checkSellInUnderZero = (sellIn: number): boolean =>
  sellIn < SELLINZERO ? true : false;

const decreaseQuality = (quality: number): number => {
  quality = quality - 1;
  return quality;
};

const decreaseSellIn = (sellIn: number): number => {
  sellIn = sellIn - 1;
  return sellIn;
};

const increaseQuality = (quality: number): number => {
  quality = quality + 1;
  return quality;
};

export const updateAgedBrie = (item: Item): Item => {
  item.quality = checkMaxQuality(item.quality)
    ? increaseQuality(item.quality)
    : item.quality;
  item.sellIn = decreaseSellIn(item.sellIn);
  item.quality =
    checkSellInUnderZero(item.sellIn) && checkMaxQuality(item.quality)
      ? increaseQuality(item.quality)
      : item.quality;
  return item;
};

export const updateBackstagePassesConcert = (item: Item): Item => {
  item.quality = increaseQuality(item.quality);
  item.quality = checkSellInUnderEleven(item.sellIn)
    ? increaseQuality(item.quality)
    : item.quality;
  item.quality = checkSellInUnderSix(item.sellIn)
    ? increaseQuality(item.quality)
    : item.quality;

  item.sellIn = decreaseSellIn(item.sellIn);
  item.quality = checkSellInUnderZero(item.sellIn) ? 0 : item.quality;
  return item;
};

export const updateSulfurasHandOfRagnaros = (item: Item): Item => {
  item.quality = 80;
  return item;
};

export const updateNormal = (item: Item): Item => {
  item.quality = decreaseQuality(item.quality);

  item.sellIn = decreaseSellIn(item.sellIn);
  item.quality = checkSellInUnderZero(item.sellIn)
    ? decreaseQuality(item.quality)
    : item.quality;
  return item;
};

export const updateConjured = (item: Item): Item => {
  item.quality = decreaseQuality(decreaseQuality(item.quality));
  return item;
};
