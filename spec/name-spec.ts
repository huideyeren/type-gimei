import { expect } from 'chai';
import { FirstName, Gimei, LastName, Name } from "gimei";

describe("Name", () => {
  describe("male static", () => {
    let name: Name;
    before(() => {
      name = Name.randomMale();
    });

    it("Nameオブジェクトが返ること", () => {
        expect(name instanceof Name).to.equal(true);
      }
    );

    it("isMaleがtrueを返すこと", () => {
      expect(name.isMale()).to.equal(true);
    });
  });

  describe("female static", () => {
    let name: Name;
    before(() => {
      name = Name.randomFemale();
    });

    it("Nameオブジェクトが返ること", () => {
        expect(name instanceof Name).to.equal(true);
      }
    );

    it("isFemaleがtrueを返すこと", () => {
      expect(name.isFemale()).to.equal(true);
    });

  });

  describe("kanji static", () => {
    it("全角文字とスペースが返ること", () => {
      let s: string = Name.kanji();
      // console.log(s);
      expect(s).to.match(/^[^\w]+\u0020+[^\w]+$/);
    });
  });

  describe("hiragana static", () => {
    it("ひらがなとスペースが返ること", () => {
      let s: string = Name.hiragana();
      // console.log(s);
      expect(s).to.match(/^[ぁ-ん]+\u0020+[ぁ-ん]+$/);
    });
  });

  describe("katakana static", () => {
    it("カタカナとスペースが返ること", () => {
      let s: string = Name.katakana();
      expect(s).to.match(/^[ァ-ヴ]+\u0020+[ァ-ヴ]+$/);
    });
  });

  describe("romaji static", () => {
    it("ローマ字とスペースが返ること", () => {
      let s: string = Name.romaji();
      // console.log(s);
      expect(s).to.match(/^[A-Z][a-z]+\u0020[A-Z][a-z]+$/);
    });
  });

  describe("kanji", () => {
    it("全角文字とスペースが返ること", () => {
      let s: string = (new Name).kanji();
      // console.log(s);
      expect(s).to.match(/^[^\w]+\u0020+[^\w]+$/);
    });
  });

  describe("hiragana", () => {
    it("ひらがなとスペースが返ること", () => {
      let s: string = (new Name).hiragana();
      // console.log(s);
      expect(s).to.match(/^[ぁ-ん]+\u0020+[ぁ-ん]+$/);
    });
  });

  describe("katakana", () => {
    it("カタカナとスペースが返ること", () => {
      let s: string = (new Name).katakana();
      // console.log(s);
      expect(s).to.match(/^[ァ-ヴ]+\u0020+[ァ-ヴ]+$/);
    });
  });

  describe("first", () => {
    it("FirstNameオブジェクトが返ること", () => {
      let f: FirstName = (new Name).first;
      expect(f instanceof FirstName).to.equal(true);
    });
  });

  describe("last", () => {
    it("LastNameオブジェクトが返ること", () => {
      let l: LastName = (new Name).last;
      expect(l instanceof LastName).to.equal(true);
    });
  });

  describe("romaji static", () => {
    it("ローマ字とスペースが返ること", () => {
      let s: string = (new Name).romaji();
      // console.log(s);
      expect(s).to.match(/^[A-Z][a-z]+\u0020[A-Z][a-z]+$/);
    });
  });
});

describe("FirstName", () => {
  describe("male static", () => {
    let f: FirstName;

    before(() => {
      f = FirstName.createMale();
    });

    it("FirstNameオブジェクトが返ること", () => {
      expect(f instanceof FirstName).to.equal(true);
    });

    it("isMaleがtrueを返すこと", () => {
      expect(f.isMale()).to.equal(true);
    });
  });

  describe("female static", () => {
    let f: FirstName;

    before(() => {
      f = FirstName.createFemale();
    });

    it("FirstNameオブジェクトが返ること", () => {
      expect(f instanceof FirstName).to.equal(true);
    });

    it("isFemaleがtrueを返すこと", () => {
      expect(f.isFemale()).to.equal(true);
    });
  });

  describe("kanji", () => {
    it("全角文字が返ること", () => {
      let s: string = (new FirstName).kanji();
      // console.log(s);
      expect(s).to.match(/^[^\w]+$/);
    });
  });

  describe("hiragana", () => {
    it("ひらがなが返ること", () => {
      let s: string = (new FirstName).hiragana();
      // console.log(s);
      expect(s).to.match(/^[ぁ-ん]+$/);
    });
  });

  describe("katakana", () => {
    it("カタカナが返ること", () => {
      let s: string = (new FirstName).katakana();
      // console.log(s);
      expect(s).to.match(/^[ァ-ヴ]+$/);
    });
  });

  describe("toString", () => {
    it("全角文字が返ること", () => {
      let s: string = (new FirstName).toString();
      // console.log(s);
      expect(s).to.match(/^[^\w]+$/);
    });
  });

  describe("romaji", () => {
    it("アルファベットが返ること", () => {
      let s: string = (new FirstName).romaji();
      // console.log(s);
      expect(s).to.match(/^[A-Z][a-z]+$/);
    });
  });
});

describe("LastName", () => {
  describe("kanji", () => {
    it("全角文字が返ること", () => {
      let s: string = (new LastName).kanji();
      // console.log(s);
      expect(s).to.match(/^[^\w]+$/);
    });
  });

  describe("hiragana", () => {
    it("ひらがなが返ること", () => {
      let s: string = (new LastName()).hiragana();
      // console.log(s);
      expect(s).to.match(/^[ぁ-ん]+$/);
    });
  });

  describe("katakana", () => {
    it("カタカナが返ること", () => {
      let s: string = (new LastName).katakana();
      // console.log(s);
      expect(s).to.match(/^[ァ-ヴ]+$/);
    });
  });

  describe("toString", () => {
    it("全角文字が返ること", () => {
      let s: string = (new LastName).toString();
      // console.log(s);
      expect(s).to.match(/^[^\w]+$/);
    });
  });

  describe("romaji", () => {
    it("アルファベットが返ること", () => {
      let s: string = (new LastName).romaji();
      // console.log(s);
      expect(s).to.match(/^[A-Z][a-z]+$/);
    });
  });
});

