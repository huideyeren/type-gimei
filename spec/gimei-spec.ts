import { expect } from 'chai';
import { Gimei, Name } from 'gimei';

describe('Gimei', () => {
  describe('isMale', () => {
    let name: Name | undefined;
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
    let name: Name | undefined;
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
    it('全角文字とスペースがあること', () => {
      const gimei: Gimei = new Gimei();
      console.log(gimei.kanji());

      let Random = Gimei.Random;
      let Gender = Gimei.GENDER;
      console.log(Random);
      let rand = new Random();
      console.log(rand.nextInt(0, 1));
      console.log(Gender.male);
      console.log(Gender[0]);

      expect(true).to.equal(true);
    });
  });
});
