import apple from "./../assets/apple.jpg";
import banana from "./../assets/banana.jpg";
import grapes from "./../assets/grapes.jpg";
import kiwi from "./../assets/kiwi.jpg";
import nectarine from "./../assets/nectarine.jpg";
import papaya from "./../assets/papaya.jpg";
import pear from "./../assets/pear.jpg";
import watermelon from "./../assets/watermelon.jpg";

export const shuffle = seed => {
  let items = [...seed, ...seed];

  for (let index in items) {
    let randIndex = Math.floor(Math.random() * items.length);
    let temp = items[index];
    items[index] = items[randIndex];
    items[randIndex] = temp;
  }

  return items;
};

export const FruitImages = {
  1: apple,
  2: banana,
  3: grapes,
  4: kiwi,
  5: nectarine,
  6: papaya,
  7: pear,
  8: watermelon
};

export const Difficulty = {
  "easy": 4,
  "medium": 6,
  "hard": 8
};
