import "../style/index.less";

// 食物
class Food {
  element: HTMLBaseElement;
  constructor() {
    this.element = document.getElementById("food") as any;
  }
  get X() {
    return this.element.offsetLeft;
  }
  get Y() {
    return this.element.offsetHeight;
  }
  change() {
    const left = Math.round(Math.random() * 29) * 10;
    const top = Math.round(Math.random() * 29) * 10;

    this.element.style.left = left + "px";
    this.element.style.top = top + "px";
  }
}

class Score {
  score = 0;
  level = 1;
  scoreELe: any;
  levelELe: any;
  constructor() {
    this.scoreELe = document.getElementById("score");
    this.levelELe = document.getElementById("level");
  }

  addScore() {
    this.scoreELe.innerHTML = ++this.score + "";
  }
  levelUp() {
    if (this.level < 10) {
      this.levelELe.innerHTML = ++this.level + "";
    }
  }
}

const score = new Score();
score.addScore();
