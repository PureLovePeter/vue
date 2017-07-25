<template>
  <div id="position-cell">
      <div class="position-content">
          <div class="position-line" style="width:100%;background-color:#e4e4e4;height:1px"></div>
          <div class="position-conclod">
            <img :src="position.enterpriseLogo | headAvatar" alt="" class="position-image">
            <div class="position-detail">
                <div class="position-text" style="font-size: 16px;margin-top: 15px;height: 20px;color: #333333;">{{position.positionTitle}}</div>
                <div class="position-text" style="font-size: 14px;margin-top: 8px;height: 18px;color: #333333;">{{position.enterpriseName}}</div>
                <div class="position-text" style="font-size: 14px;margin-top: 8px;height: 18px;color: #999999;">{{position.positionCityName}}</div>
                <div class="position-text" style="font-size: 14px;margin-top: 8px;height: 18px;color: #999999;">{{position.recommendHeadhunterList | recomend}}</div>
            </div>
          </div>
      </div>
    </div>
</template>

<script>
    export default{
        name:'position-cell',
        data() {
            return{
                position:this.childVue
            }
        },
        filters:{
            headAvatar(imgageUrl){
                if (imgageUrl == null){
                   return require('../assets/images/默认图片公司logo.png'); 
                }
                return  imgageUrl;
            },
            recomend(headhunters){
                var headhunterNames = '';
                for (headhunter in headhunters){
                    console.log('===='+headhunter.name)
                    headhunterNames + headhunter.name
                }
                return '猎头' + headhunterNames + '等正在推荐' 
            }
        },
        props:['childVue']
    }
</script>

<style>
.position-content{
    display: flex;
    flex-direction: column;
    height:  120px;
     
}
.position-conclod{
    display: flex;
    flex-direction: row;
}

.position-image{
    border-radius: 4px;
    height: 60px;
    width: 60px;
    margin: 15px 15px 15px 30px;
}

.position-detail{
    display: flex;
    flex-direction: column;
    margin-right: 10px;
}

.position-text{
    text-align: left;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
}

</style>
