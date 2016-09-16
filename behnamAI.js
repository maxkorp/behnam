// behnamAI.js

const BEHNAM_CHARS = ['cloud', 'little_mac'];

class Behnam {
  constructor(char) {
    if (char && BEHNAM_CHARS.includes(char)) {
      this.char = char;
    } else {
      const randIndex = Math.floor(Math.random() * BEHNAM_CHARS.length);
      this.char = BEHNAM_CHARS[randIndex];
    }
  }

  harass(player) {
    while (player.alive()) {
      this.dashAttack(player);
    }
  }

  init() {
    while (playerOnField) {
      if (barg.alive()) {
        this.harass(barg);
        continue;
      }

      this.dashAttack();
    }
  }
}

const behnam = new Behnam();
behnam.init();

// insert the saltiest comment directed at Max below
