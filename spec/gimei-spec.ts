import { expect } from 'chai';
import { Gimei, Name, FirstName, LastName } from 'gimei';

describe('Gimei', () => {
  describe('isMale', () => {
    let name: Name;
    before(() => {
      name = Gimei.randomMale();
    });
    it('isMaleがtrueを返すこと', () => {
      expect(Name).exist;
      expect(Name).to.be.a('function');
      expect(name).to.be.a('object');
      expect(name.isMale()).to.equal(true);
    });
  });

  describe('isFemale', () => {
    let name: Name;
    before(() => {
      name = Gimei.randomFemale();
    });
    it('isFemaleがtrueを返すこと', () => {
      expect(Name).exist;
      expect(Name).to.be.a('function');
      expect(name).to.be.a('object');
      expect(name.isFemale()).to.equal(true);
    });
  });

  describe('randomName', () => {
    it('randomなNameを返すこと', () => {
      let name: Name = Gimei.randomName();
      expect(name.kanji()).to.match(/^[^\w]+\u0020[^\w]+$/);
    });
  });

  describe('kanji', () => {
    it('全角文字とスペースが返ること', () => {
      expect(" ".charCodeAt(0).toString(16)).to.equal("20");
      expect(" ").to.match(/^\u0020$/);
      expect("　".charCodeAt(0).toString(16)).to.equal("3000");
      expect("　").to.match(/^\u3000$/);
      expect(" と　").to.match(/^\sと\s$/);

      // 全角マッチに関して精度あげたい。。
      const gimei: Gimei = new Gimei();
      let kanji: string = gimei.kanji();
      expect(kanji).to.match(/^[^\w]+\u0020[^\w]+$/);
    });
  });

  describe('toString()', () => {
    it('全角文字とスペースが返ること', () => {
      let s: string = (new Gimei()).toString();
      expect(s).to.match(/^[^\w]+\u0020[^\w]+$/);
    });
  });

  describe('kanji static', () => {
    it('全角文字とスペースが返ること', () => {
      expect(Gimei.kanji()).to.match(/^[^\w]+\u0020[^\w]+$/);
    });
  });

  describe('hiragana', () => {
    it('ひらがなとスペースが返ること', () => {
      const gimei: Gimei = new Gimei();
      // 精度
      expect(gimei.hiragana()).to.match(/^[^\w]+\u0020[^\w]+$/);
    });
  });

  describe('katakana', () => {
    it('カタカナとスペースが返ること', () => {
      const gimei: Gimei = new Gimei();
      // console.log(gimei.katakana());
      expect(gimei.katakana()).to.match(/^[^\w]+\u0020[^\w]+$/);
    });
  });

  describe('katakana static', () => {
    it('カタカナとスペースが返ること', () => {
      expect(Gimei.katakana()).to.match(/^[^\w]+\u0020[^\w]+$/);
    });
  });

  describe('name static', () => {
    it('Name オブジェクトが返ること', () => {
      // Gimei.name()とするとbuiltin関数にぶつかる
      let n: Name = Gimei.createName();
      expect(n instanceof Name).to.equal(true);
    });
  });

  describe('name', () => {
    it('Name オブジェクトが返ること', () => {
      // Gimei.name()とするとbuiltin関数にぶつかる
      let n: Name = (new Gimei()).name;
      expect(n instanceof Name).to.equal(true);
    });
  });

  describe('first static', () => {
    it('FirstName オブジェクトが返ること', () => {
      let n: FirstName = Gimei.first();
      expect(n instanceof FirstName).to.equal(true);
    });
  });

  describe('first', () => {
    it('FirstName オブジェクトが返ること', () => {
      let gimei: Gimei = new Gimei();
      expect(gimei.first instanceof FirstName).to.equal(true);
    });
  });

  describe('last static', () => {
    it('LastName オブジェクトが返ること', () => {
      let n: LastName = Gimei.last();
      expect(n instanceof LastName).to.equal(true);
    });
  });

  describe('last', () => {
    it('Last オブジェクトが返ること', () => {
      let gimei: Gimei = new Gimei();
      expect(gimei.last instanceof LastName).to.equal(true);
    });
  });

  describe('romaji static', () => {
    it('ローマ字とスペースが返ること', () => {
      let n: string = Gimei.romaji();
      expect(n).to.match(/^[A-Z][a-z]+\u0020[A-Z][a-z]+$/);
    });
  });

  describe('romaji', () => {
    it('ローマ字とスペースが返ること', () => {
      let n: string = (new Gimei()).romaji();
      expect(n).to.match(/^[A-Z][a-z]+\u0020[A-Z][a-z]+$/);
    });
  });
});
