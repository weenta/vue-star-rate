<template>
    <div class="star-rating">
        <span class="iconfont star-item" 
			v-for="(item,index) in itemClasses" 
			:class="[item,'size-'+size]" 
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
	model: {
		prop: 'myRating',
		event: 'rate'
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
		},

		_initMyRating(){
			let myRating = this.myScore > 1 ? this.myScore - 1 : 0
			this.rate(myRating)
		}

	},
	mounted(){
		this._initMyRating()
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
			// color:#f7ba2a;
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


