# type-gimei

type-gimeiは日本人の名前をランダムに返すライブラリです。

テストの時に使うことを想定しています。

rubyのgimeiにインスパイアされており、インターフェースをなるべく踏襲するようにしています。

住所のデータに関しては未実装です。

# 使い方

## TypeScript

```typescript
import { Gimei, Name, Address } from '@huideyeren/type-gimei';

for (let i = 0; i < 10; i++) {
  const name: Name = Gimei.randomName();
  const hiragana: string = name.hiragana();
  const romaji: string = name.romaji();
  const kanji: string = name.kanji();
  const katakana: string = name.katakana();
  const address: Address = Gimei.randomAddress();
  const address_hiragana: string = address.hiragana();
  const address_romaji: string = address.romaji();
  const address_kanji: string = address.kanji();
  const address_katakana: string = address.katakana();
  console.log(`
    ${hiragana}
    ${romaji}
    ${kanji}
    ${katakana}
    ${address_hiragana}
    ${address_romaji}
    ${address_kanji}
    ${address_katakana}
  `);
}
```

## ES6, ES5

```javascript
const {Gimei} = require('@huideyeren/type-gimei');
for (let i = 0; i < 10; i++) {
  let name = Gimei.randomFemale();
  let address = Gimei.randomAddress();
  console.log(name.hiragana());
  console.log(name.kanji());
  console.log(name.romaji());
  console.log('----');
  console.log(address.prefecture());
  console.log(address.city());
  console.log(address.town());
  console.log('----');
}
```

```javascript
var gimei = require('@huideyeren/type-gimei').Gimei;

var name = gimei.randomName();
var hiragana = name.hiragana();
var romaji = name.romaji();
var kanji = name.kanji();
var katakana = name.katakana();

var address = gimei.randomAddress();
var address_hiragana = address.hiragana();
var address_romaji = address.romaji();
var address_kanji = address.kanji();
var address_katakana = address.katakana();

console.log(hiragana);
console.log(romaji);
console.log(kanji);
console.log(katakana);
console.log(address_hiragana);
console.log(address_romaji);
console.log(address_kanji);
console.log(address_katakana);
```
