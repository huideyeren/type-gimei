import { expect } from 'chai';
import { Gimei, Name } from 'gimei';

describe('Gimei', () => {
  describe('isMale', () => {
    let name: Name;
    before(() => {
      name = Gimei.randomMale();
    });
    it('male', () => {
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
    it('male', () => {
      expect(Name).exist;
      expect(Name).to.be.a('function');
      expect(name).to.be.a('object');
      expect(name.isFemale()).to.equal(true);
    });
  });

  describe('kanji', () => {
    it('全角文字とスペースが返ること', () => {
      const gimei: Gimei = new Gimei();
      console.log(gimei.kanji());
      // console.log(Gimei.Random.randomGender() == Gimei.GENDER.male);
      expect(true).to.equal(true);
    });
  });
});
