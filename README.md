# type-gimei

type-gimeiは日本人の名前をランダムに返すライブラリです。

テストの時に使うことを想定しています。

rubyのgimeiにインスパイアされており、インターフェースをなるべく踏襲するようにしています。

住所のデータに関しては未実装です。

j# 使い方

## TypeScript

```typescript
import { Gimei, Name } from 'type-gimei';

for (let i = 0; i < 10; i++) {
  const name: Name = Gimei.randomName();
  const hiragana: string = name.hiragana();
  const romaji: string = name.romaji();
  const kanji: string = name.kanji();
  const katakana: string = name.katakana();
  console.log(`
    ${hiragana}
    ${romaji}
    ${kanji}
    ${katakana}
  `);
}
```

## ES6, ES5

```javascript
const {Gimei} = require('type-gimei');
for (let i = 0; i < 10; i++) {
  let name = Gimei.randomFemale();
  console.log(name.hiragana());
  console.log(name.kanji());
  console.log(name.romaji());
  console.log('----');
}
```

```javascript
var gimei = require('type-gimei').Gimei;

var name = gimei.randomName();
var hiragana = name.hiragana();
var romaji = name.romaji();
var kanji = name.kanji();
var katakana = name.katakana();

console.log(hiragana);
console.log(romaji);
console.log(kanji);
console.log(katakana);
```
