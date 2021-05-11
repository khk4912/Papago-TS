# Papago-TS

TypeScript wrapper for Papago API.

## Install

```
npm install papago-ts
```

## Usage

### NMT Translation

```ts
import Papago from "papago-ts"

let papago = new Papago("clientID", "clientSecret")
papago.nmtTranslate("ko", "en", "안녕하세요").then(console.log)
```

```ts
>> Hello
```

### Language Detection

```ts
import Papago from "papago-ts"

let papago = new Papago("clientID", "clientSecret")
papago.detectLangs("안녕하세요!").then(console.log)
```

```ts
>> ko
```

### Name Romanization

```ts
import Papago from "papago-ts"

let papago = new Papago("clientID", "clientSecret")
papago.romanziation("이지은").then(console.log)
```

```ts
>> {
  sFirstName: '이',
  aItems: [
    { name: 'Lee Jieun', score: '99' },
    { name: 'Lee Jeeeun', score: '27' },
    { name: 'Lee Jien', score: '27' },
    { name: 'Lee Jeeen', score: '7' }
  ]
}
```
