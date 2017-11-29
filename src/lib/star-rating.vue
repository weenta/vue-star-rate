<template>
    <div class="star-rating">
        <span class="iconfont star-item" 
			v-for="(item,index) in itemClasses" 
			:class="[item]" 
			:style="{color: activeColor, fontSize: fontSize + 'rem' }"
			:key='index' 
			@click='rate(index)'
		></span>
    </div>  
</template>
<script>
const CLS_ON = 'icon-on';
const CLS_HALF = 'icon-half';
const CLS_OFF = 'icon-off';
export default {
	props:['score','maxScore','size','color'],
	data(){
		return {
			myScore: this.score || 0,
			fontSize: this.size || 1,
			activeColor: this.color || '#f7ba2a'
		}
	},
	computed:{
		itemClasses(){
			let result = []
			let score = Math.floor(this.myScore*2)/2
			let hasHalf = score % 1 !== 0
			let integer = Math.floor(score)
			let maxScore = this.maxScore === undefined ? 5 : this.maxScore
			for(let i = 0; i < integer; i ++){
				result.push(CLS_ON);
			}
			if(hasHalf){
				result.push(CLS_HALF);
			}
			while(result.length < Math.floor(maxScore)){
				result.push(CLS_OFF);
			}
			return result;
		}
	},
	methods:{
		rate(val){
			this.myScore = val+1
			this.$emit('rate', val+1)
		}
	}
};
</script>
<style lang="less" scoped>
    @import './fonts/iconfont.css';
    .star-rating {
	  display: inline-block;
	  
      .star-item {
			vertical-align: top;
			margin-right: 5px;
			&:last-child {
				margin-right: 0;
			}
		}
    }
</style>
