import { expect } from 'chai';
import { Address, City, Gimei, Prefecture, Town } from "gimei";

describe("Address", () => {
  describe("kanji static", () => {
    it("全角文字が返ること", () => {
      let s: string = Address.kanji();
      // console.log(s);
      expect(s).to.match(/^[^\w]+$/);
    });
  });

  describe("hiragana static", () => {
    it("ひらがなが返ること", () => {
      let s: string = Address.hiragana();
      // console.log(s);
      expect(s).to.match(/^[ぁ-ん]+$/);
    });
  });

  describe("katakana static", () => {
    it("カタカナが返ること", () => {
      let s: string = Address.katakana();
      expect(s).to.match(/^[ァ-ヴ]+$/);
    });
  });

  describe("romaji static", () => {
    it("ローマ字とスペースが返ること", () => {
      let s: string = Address.romaji();
      // console.log(s);
      expect(s).to.match(/^[A-Z][a-z]+\u0020[A-Z][a-z]+\u0020[A-Z][a-z]+$/);
    });
  });

  describe("kanji", () => {
    it("全角文字が返ること", () => {
      let s: string = (new Address).kanji();
      // console.log(s);
      expect(s).to.match(/^[^\w]+$/);
    });
  });

  describe("hiragana", () => {
    it("ひらがなが返ること", () => {
      let s: string = (new Address).hiragana();
      // console.log(s);
      expect(s).to.match(/^[^\w]+$/);
    });
  });

  describe("katakana", () => {
    it("カタカナが返ること", () => {
      let s: string = (new Address).katakana();
      // console.log(s);
      expect(s).to.match(/^[^\w]+$/);
    });
  });

  describe("romaji static", () => {
    it("ローマ字とスペースが返ること", () => {
      let s: string = (new Address).romaji();
      // console.log(s);
      expect(s).to.match(/^[A-Z][a-z]+\u0020[A-Z][a-z]+\u0020[A-Z][a-z]+$/);
    });
  });
});

describe("Prefecture", () => {
  describe("kanji", () => {
    it("全角文字が返ること", () => {
      let s: string = (new Prefecture).kanji();
      // console.log(s);
      expect(s).to.match(/^[^\w]+$/);
    });
  });

  describe("hiragana", () => {
    it("ひらがなが返ること", () => {
      let s: string = (new Prefecture).hiragana();
      // console.log(s);
      expect(s).to.match(/^[ぁ-ん]+$/);
    });
  });

  describe("katakana", () => {
    it("カタカナが返ること", () => {
      let s: string = (new Prefecture).katakana();
      // console.log(s);
      expect(s).to.match(/^[ァ-ヴ]+$/);
    });
  });

  describe("toString", () => {
    it("全角文字が返ること", () => {
      let s: string = (new Prefecture).toString();
      // console.log(s);
      expect(s).to.match(/^[^\w]+$/);
    });
  });

  describe("romaji", () => {
    it("アルファベットが返ること", () => {
      let s: string = (new Prefecture).romaji();
      // console.log(s);
      expect(s).to.match(/^[A-Z][a-z]+$/);
    });
  });
});

describe("City", () => {
    describe("kanji", () => {
        it("全角文字が返ること", () => {
        let s: string = (new City).kanji();
        // console.log(s);
        expect(s).to.match(/^[^\w]+$/);
        });
    });

    describe("hiragana", () => {
        it("ひらがなが返ること", () => {
        let s: string = (new City).hiragana();
        // console.log(s);
        expect(s).to.match(/^[ぁ-ん]+$/);
        });
    });

    describe("katakana", () => {
        it("カタカナが返ること", () => {
        let s: string = (new City).katakana();
        // console.log(s);
        expect(s).to.match(/^[ァ-ヴ]+$/);
        });
    });

    describe("toString", () => {
        it("全角文字が返ること", () => {
        let s: string = (new City).toString();
        // console.log(s);
        expect(s).to.match(/^[^\w]+$/);
        });
    });

    describe("romaji", () => {
        it("アルファベットが返ること", () => {
        let s: string = (new City).romaji();
        // console.log(s);
        expect(s).to.match(/^[A-Z][a-z]+$/);
        });
    });
});

describe("Town", () => {
    describe("kanji", () => {
        it("全角文字が返ること", () => {
        let s: string = (new Town).kanji();
        // console.log(s);
        expect(s).to.match(/^[^\w]+$/);
        });
    });

    describe("hiragana", () => {
        it("ひらがなが返ること", () => {
        let s: string = (new Town).hiragana();
        // console.log(s);
        expect(s).to.match(/^[ぁ-ん]+$/);
        });
    });

    describe("katakana", () => {
        it("カタカナが返ること", () => {
        let s: string = (new Town).katakana();
        // console.log(s);
        expect(s).to.match(/^[ァ-ヴ]+$/);
        });
    });

    describe("toString", () => {
        it("全角文字が返ること", () => {
        let s: string = (new Town).toString();
        // console.log(s);
        expect(s).to.match(/^[^\w]+$/);
        });
    });

    describe("romaji", () => {
        it("アルファベットが返ること", () => {
        let s: string = (new Town).romaji();
        // console.log(s);
        expect(s).to.match(/^[A-Z][a-z]+$/);
        });
    });
});
