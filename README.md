# A Vue2.x Star Rating Component for mobile
a simple star rating component for morden mobile browsers

## USEAGE
- Install
```bash
    npm i vue-star-rate
```
- QuickStart
```js
<template>
  <div class="hello">
    <span>MyRatings</span>
    <star-rating
      :size= 'size'
      :color= 'color'
      :score= 'score'
      :maxScore= 'maxScore'
      :readOnly= 'readOnly'
      @rate='rate'
    ></star-rating>
    <span>{{score}}</span>
  </div>
</template>

<script>
import starRating from "vue-star-rate";
export default {
  name: "HelloWorld",
  components: {
    starRating
  },
  data() {
    return {
      score: 3.5,
      color:'#f00',
      size:1,
      maxScore:5,
      readOnly:false
    };
  },
  methods: {
    rate(val) {
      this.score = val;
    }
  }
}
</script>
```

## Docs     
- Attribute     

| Attribute| Description |Type| Default |
| -------- | ------------|--- |---------|
|score|The initial rating|Number|0|
|maxScore|The max score |Number|5|
|size|The css fontSize of star, you should use **rem** unit|Number|1|
|color|The color of star|String|#f7ba2a|
|readOnly|whether Rate is read-only|Boolean|false|


- Event     

|Event Name|Description|Parameters|
|-----|-----------|----------|
|rate|Triggers when you click the star to rate|value of your rating|

## LICENSE
MIT