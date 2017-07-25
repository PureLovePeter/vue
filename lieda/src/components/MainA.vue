
<template>
  <div class="main-a">
    <div class="nav-bg">
      <p class="mainTitle">{{messageTitle}}</p>
      <img class="scan" src="../assets/images/扫描二维码.png">
    </div>
    <div class="content">
    <ul class="cell">
      <div class="cellContent">
        <li class="cellLi" v-for="item in items" @click="gotolist(item)">
          <img :src="item.image">
          <p class="cellTitle"> {{ item.title }}</p>
        </li>
      </div>
    </ul>
    <p style="height:15px ; width:100% ;  background-color: #f4f4f4;"></p>
    <ul class="cellItem">
      <li v-for="headhunter in headHunters" @click="gotoDetail(headhunter)">
        <p style="height:1px ; width:100% ;  background-color: #e4e4e4;"></p>
        <div class="cellgood">
          <img class="cellimage" :src="headhunter.avatarUrl | headFilter" alt="">
          <div class="celldetail">
            <p class="name">{{headhunter.name}}</p>
            <p class="detail">{{headhunter.noticeMsg}}</p>
          </div>
        </div>
      </li>
    </ul>
    <div v-if="show" class="loading">
        <div style="height:20px;margin-top:30px;font-size:14px">加载中...</div>
    </div>
    </div>
    <transition name="daggerbar">
    <Tabbar></Tabbar>
    </transition>
  </div>
</template>

<script>
import Tabbar from './Tabbar'

export default {
  name: 'main-a',
  components: {
    Tabbar
  },
  data() {
    return {
      show:true,
      messageTitle: '职位列表',
      items: [
        { title: '超级猎头', image: require('../assets/images/超级猎头.png'), itemId: 0 },
        { title: '高薪必备', image: require('../assets/images/高薪必备.png'), itemId: 1 },
        { title: '使命必达', image: require('../assets/images/使命必达.png'), itemId: 2 },
        { title: '每月杰出', image: require('../assets/images/每日杰出.png'), itemId: 3 }
      ],
      headHunters: [
      ]
    }
  },
  created: function () {
    this.show = true;
    this.$nextTick(function () {
      var url = 'http://192.168.50.32:6280/jobhunter-mobile/m/headhunter/v2/badgeHhs?testUserId=100000064&badgeType=1'
      this.$http.get(url).then(response => {
        console.log(response)
        this.show = false;
        if (response.status == 200) {
          console.log('请求成功')
          this.headHunters = response.body.data;
        } else {
          console.log('请求失败')
        }
      })
    })
  },
  methods: {
    gotoDetail(msg) {
      this.$router.push({ path: 'HunterDetail', query: { hunterDetail: msg } })
    },
    gotolist(msg) {
      this.$router.push({ path: 'HunterList', query: { listId: msg.itemId } })
    }
  },
  filters:{
    headFilter(headAdvater){
      if(headAdvater == null){
        return require('../assets/images/猎头默认头像.png')
      }
      return headAdvater;
    }
  }
}
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-a{
  height: 100%;
}

.nav-bg{
  width: 100%;
  margin: 0px 0px;
  height: 64px;
  background-color: black;
}

.scan {
  float: right;
  padding: 0px;
  margin: 20px;
  height: 25px;
  width: 25px;
}

.mainTitle {
  float: left;
  font-size: 18px;
  margin: 0px 0px 0px 0px;
  width: 60%;
  height: 30px;
  padding: 20px 0px 0px 0px;
  text-align: right;
  color: white;
}


img {
  height: 45px;
  width: 45px;
}
.content{
  position:absolute;
  width: 100%;
  overflow-y:auto;
  top:64px;
  bottom:49px;
  z-index:10;
}

.loading{
  position: fixed;
  margin-left: 40%;
  bottom: 50%;
  width: 80px;
  height: 80px;
  border-radius: 4px;
  background-color: grey;
  opacity: 0.8;
  color: white;
  text-align: center;
}

.cellContent {
  display: flex;
  flex-direction: row;
}

.cellLi {
  width: 25%;
  height: 70px;
  padding: 0px 0px;
  margin: 0px 0px;
}

.cellItem {
  width: 100%;
  margin: 0px 0px;
  overflow-y: outo;
}

.cellgood {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 60px;
}

.cellTitle {
  font-size: 11px;
  height: 20px;
  margin-top: 10px;
}
.main-box{
  display: block;
  margin: 0px 0px;
}

ul {
  -webkit-padding-start: 0px;
  list-style: none;
}

p {
  margin: 0px 0px;
}

.cellimage {
  border-width: 1px;
  border-color: #e4e4e4;
  border-radius: 4px;
  height: 45px;
  width: 45px;
  margin-left: 15px;
  margin-top: 7.5px;
}

.name {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  text-align: left;
  margin-top: 10px;
  font-size: 16px;
}

.detail {
  text-align: left;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  padding-top: 3px;
  overflow: hidden;
  color: #999999;
}

.celldetail {
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  margin-right: 15px;
  font-size: 13px;
}

.daggerbar-enter-active {
      transition: all .3s ease;
}
.daggerbar-enter {
      transform: translateX(-100%);
      opacity: 0;
}

</style>


