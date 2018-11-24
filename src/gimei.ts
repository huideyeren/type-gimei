import * as yaml from 'js-yaml';
import * as fs from 'fs';
import * as path from 'path';

const jconv = require('jaconv');

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

  static createName(): Name {
    return new Name();
  }

  static kanji(): string {
    return this.createName().kanji();
  }

  static katakana(): string {
    return this.createName().katakana();
  }

  static romaji(): string {
    return this.createName().romaji();
  }

  static first(): FirstName {
    return this.createName().first;
  }

  static last(): LastName {
    return this.createName().last;
  }

  kanji(): string {
    return this.name.kanji();
  }

  hiragana(): string {
    return this.name.hiragana();
  }

  katakana(): string {
    return this.name.katakana();
  }

  romaji(): string {
    return this.name.romaji();
  }

  get first(): FirstName {
    return this.name.first;
  }

  get last(): LastName {
    return this.name.last;
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

  static kanji(): string {
    return (new this).kanji();
  }

  static hiragana(): string {
    return (new this).hiragana();
  }

  static katakana(): string {
    return (new this).katakana();
  }

  static romaji(): string {
    return (new this).romaji();
  }

  toString(): string {
    return "uheheheh";
  }

  kanji(): string {
    return `${this.last.kanji()} ${this.first.kanji()}`;
  }

  hiragana(): string {
    return `${this.last.hiragana()} ${this.first.hiragana()}`;
  }

  katakana(): string {
    return `${this.last.katakana()} ${this.first.katakana()}`;
  }

  romaji(): string {
    return `${this.last.romaji()} ${this.first.romaji()}`;
  }

  isMale(): boolean {
    return this.gender == Gimei.GENDER.male;
  }

  isFemale(): boolean {
    return this.gender == Gimei.GENDER.female;
  }
}

export class FirstName {
  gender: GENDER;
  name: NameWord;

  constructor(gender: GENDER | undefined = undefined) {
    this.gender = gender || Random.randomGender();
    let data_len: number = Gimei.NAMES['first_name'][this.gender].length - 1;
    this.name = new NameWord(Gimei.NAMES['first_name'][this.gender][Random.random(0, data_len)]);
  }

  static createMale(): FirstName {
    return (new this(GENDER.male));
  }

  static createFemale(): FirstName {
    return (new this(GENDER.female));
  }

  kanji(): string {
    return this.name.kanji();
  }

  hiragana(): string {
    return this.name.hiragana();
  }

  katakana(): string {
    return this.name.katakana();
  }

  romaji(): string {
    return this.name.romaji();
  }

  isMale(): boolean {
    return this.gender === GENDER.male;
  }

  isFemale(): boolean {
    return this.gender === GENDER.female;
  }

  toString(): string {
    return this.name.toString();
  }
}

export class LastName {
  name: NameWord;

  constructor() {
    let data_len: number = Gimei.NAMES['last_name'].length - 1;
    this.name = new NameWord(Gimei.NAMES['last_name'][Random.random(0, data_len)]);
  }

  kanji(): string {
    return this.name.kanji();
  }

  hiragana(): string {
    return this.name.hiragana();
  }

  katakana(): string {
    return this.name.katakana();
  }

  romaji(): string {
    return this.name.romaji();
  }

  toString(): string {
    return this.name.toString();
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

  romaji(): string {
    let n: string = jconv.toHebon(this.hiragana());
    return n.charAt(0) + n.slice(1).toLowerCase();
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

  constructor(seed?: number) {
    if (seed === undefined) {
      // see: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/random
      let max = 100;
      let min = 0;
      seed = Math.floor(Math.random() * (max - min)) + min;
    }
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

  static randomGender(min: number = 0, max: number = 1): GENDER {
    let rand: Random = new Random();
    let index: number = rand.nextInt(min, max);
    let gender: GENDER;
    // console.log(`${min}:${max}`);
    // console.log(index);
    // console.log("----");
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
