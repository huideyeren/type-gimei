import { expect } from 'chai';
import { Gimei, Name } from 'gimei';

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

  describe('hiragana', () => {
    it('ひらがなとスペースが返ること', () => {
      const gimei: Gimei = new Gimei();
      expect(gimei.hiragana()).to.match(/^[^\w]+\u0020[^\w]+$/);
    });
  });
});
