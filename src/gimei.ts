import * as yaml from 'js-yaml';
import * as fs from 'fs';
import * as path from 'path';

export enum GENDER { male = "male", female = "female" }

export class Gimei {
  name: Name;

  static get NAMES() {
    const names_yml = path.join(__dirname, 'data/names.yml');
    const names = yaml.safeLoad(fs.readFileSync(names_yml, 'utf8'));
    return names;
  }

  static get GENDER() {
    return GENDER;
  }

  static get Random() {
    return Random;
  }

  constructor(gender: GENDER | undefined = undefined) {
    this.name = new Name(gender);
  }

  static randomName(gender: GENDER | undefined) {
    return new Name(gender);
  }

  static randomMale(): Name {
    return Name.randomMale();
  }

  static randomFemale(): Name {
    return Name.randomFemale();
  }

  kanji(): string {
    return this.name.kanji();
  }

  toString(): string {
    return this.name.kanji();
  }
}


export class Name {
  gender: GENDER | undefined;
  first: FirstName;
  last: LastName;

  constructor(gender: GENDER | undefined = undefined) {
    this.gender = gender;
    this.first = new FirstName(gender);
    this.last = new LastName();
  }

  static randomMale(): Name {
    return new this(Gimei.GENDER.male);
  }

  static randomFemale(): Name {
    return new this(Gimei.GENDER.female);
  }

  toString(): string {
    return "uheheheh";
  }

  kanji(): string {
    return `${this.last.kanji()} ${this.first.kanji()}`;
  }

  isMale(): boolean {
    return this.gender == Gimei.GENDER.male;
  }

  isFemale(): boolean {
    return this.gender == Gimei.GENDER.female;
  }
}

class FirstName {
  gender: GENDER;
  name: NameWord;

  constructor(gender: GENDER | undefined = undefined) {
    this.gender = gender || Random.randomGender();
    let data_len: number = Gimei.NAMES['first_name'][this.gender].length - 1;
    this.name = new NameWord(Gimei.NAMES['first_name'][this.gender][Random.random(0, data_len)]);
  }

  kanji(): string {
    return this.name.kanji();
  }
}

class LastName {
  name: NameWord;

  constructor() {
    let data_len: number = Gimei.NAMES['last_name'].length - 1;
    this.name = new NameWord(Gimei.NAMES['last_name'][Random.random(0, data_len)]);
  }

  kanji(): string {
    return this.name.kanji();
  }
}

class NameWord {
  name: Array<string>;

  constructor(name: Array<string>) {
    this.name = name;
  }

  kanji(): string {
    return this.name[0];
  }

  hiragana(): string {
    return this.name[1];
  }

  katakana(): string {
    return this.name[2];
  }

  toString(): string {
    return this.kanji();
  }
}

export class Random {
  /****
   * see: https://sbfl.net/blog/2017/06/01/javascript-reproducible-random/
   ***/
  w: number;
  x: number;
  y: number;
  z: number;

  constructor(seed: number = (new Date()).getTime()) {
    this.x = 123456789;
    this.y = 345677911;
    this.z = 567899233;
    this.w = seed;
  }

  next() {
    let t;
    t = this.x ^ (this.x << 11);
    this.x = this.y;
    this.y = this.z;
    this.z = this.w;
    return this.w = (this.w ^ (this.w >>> 19)) ^ (t ^ (t >>> 8));
  }

  nextInt(min: number, max: number) {
    const rand = Math.abs(this.next());
    return min + (rand % (max + 1 - min));
  }

  static random(min: number = 0, max: number = 1): number {
    let rand: Random = new Random();
    return rand.nextInt(min, max);
  }

  static randomGender(min: number | undefined = 0, max: number | undefined = 1): GENDER {
    let rand: Random = new Random();
    let index: number = rand.nextInt(min, max);
    let gender: GENDER;
    switch (index) {
      case 0:
        gender = GENDER.male;
        break;
      case 1:
        gender = GENDER.female;
        break;
      default:
        gender = GENDER.male;
        break;
    }
    return gender;
  }
}
