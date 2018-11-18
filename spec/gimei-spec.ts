import { expect } from 'chai';
import { Gimei } from 'gimei';

describe('Gimei', () => {
  it('sample01', () => {
    const name = Gimei.randomMale();
    console.log(name);
    expect(true).to.equal(true);
  });
});