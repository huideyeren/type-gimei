import { expect } from 'chai';
import { Gimei, GENDER, Random } from "gimei";
import * as _ from 'lodash';

describe("Random", () => {
  describe("randomGender", () => {
    it("500回randomでGenderを生成したら発生回数の誤差は50以下となる", () => {
      // 50セット(test_num)実行し、8割以上がその誤差に収まることを期待
      let set_num: number = 50;
      let expect_num: number = set_num * 0.8;
      let result: Array<number> = _.times(set_num).map(i => {
        let counter = {
          "male": 0, "female": 0
        };
        _.times(500).map(j => {
          let gender: GENDER = Random.randomGender();
          // console.log(gender);
          counter[gender]++;
        });
        let diff: number = Math.abs(counter['male'] - counter['female']);
        return diff;
      });
      expect(result.filter(diff => diff < 50).length).to.greaterThan(expect_num);
    });
  });
});