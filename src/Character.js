const classList = [
  'Bowman',
  'Swordsman',
  'Magician',
  'Daemon',
  'Undead',
  'Zombie',
];

export default class Character {
  constructor(name, type) {
    if (name.length > 2 && name.length < 10) {
      this.name = name;
    } else {
      throw new Error('Имя короче двух символов или длиннее десяти!');
    }
    if (classList.includes(type)) {
      this.type = type;
    } else {
      throw new Error('Такого класса не существует!');
    }
    this.health = 100;
    this.level = 1;
    this.attack = 0;
    this.defence = 0;
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.health = 100;
      this.attack = Math.round(this.attack * 1.2);
      this.defence = Math.round(this.defence * 1.2);
    }
    if (this.health <= 0) {
      throw new Error('Персонаж мертв!');
    }
  }

  damage(points) {
    if (this.health > 0) {
      this.health -= Math.round(points * (1 - this.defence / 100));
    }
    if (this.health <= 0) {
      throw new Error('Персонаж мертв!');
    }
  }
}
