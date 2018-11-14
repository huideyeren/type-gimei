import { expect } from 'chai';
import { Gimei } from "gimei";

describe("sample", () => {
  it("sample01", () => {
    expect(true).to.equal(true);
  });

  it("sample02", () => {
    expect(Gimei.name()).to.equal("mytest");
  });
});