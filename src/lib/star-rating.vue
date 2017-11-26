<template>
    <div class="star-rating">
        <span class="iconfont star-item" v-for="(item,index) in itemClasses" :class="[item,'size-'+size]" :key='index' @click='rate(index)'></span>
    </div>  
</template>
<script>
const CLS_ON = 'icon-on';
const CLS_HALF = 'icon-half';
const CLS_OFF = 'icon-off';
export default {
	props:['score','maxScore','size'],
	data(){
		return {
			myScore: this.score
		}
	},
	computed:{
		
		itemClasses(){
			let result = [];
			let score = Math.floor(this.myScore*2)/2;
			let hasHalf = score % 1 !== 0;
			let integer = Math.floor(score);
			for(let i = 0; i < integer; i ++){
				result.push(CLS_ON);
			}
			if(hasHalf){
				result.push(CLS_HALF);
			}
			while(result.length < Math.floor(this.maxScore)){
				result.push(CLS_OFF);
			}
			return result;
		}
	},
	methods:{
		rate(val){
			console.log(val+1)
			this.myScore = val+1
		}
	}
};
</script>
<style lang="less" scoped>
    @import './fonts/iconfont.css';
    .star-rating {
	  display: inline-block;
	  width:auto;
	  
      .star-item {
			vertical-align: top;
			color:rgb(247, 186, 42);
			margin-right: 5px;
			&:last-child {
				margin-right: 0;
			}
		}
		.rating {
			font-size: 16px;
		}
		.size-12 {
			font-size: 12px;
		}
		.size-18 {
			font-size: 18px;
		}
		.size-30 {
			font-size: 30px;
		}
    }
</style>


