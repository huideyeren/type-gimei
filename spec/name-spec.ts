import { expect } from 'chai';
import { Gimei, Random } from "gimei";

describe("sample", () => {
  it("sample01", () => {
    expect(true).to.equal(true);
  });

  it("sample02", () => {
    const gimei = Gimei.randomName();
    // console.log(gimei);
    // console.log(gimei.foo);
  });

  it("random", () => {
    const random = new Random(1);
    for (let i = 0; i < 10; i++) {
      // const val = random.next();
      const val = random.nextInt(0, 9);
      // console.log(val);
    }
  });
  

});