<template>
  <!--导航-->
  <div class="Me">
    <div class="me-bady">
      <div class="me-top">
        <div class="me-top-content">
          <img :src="user.avartUrl" alt="" class="me-head-avatar">
          <div style="display:flex;flex-direction: column">
            <div class="me-name">{{user.name}}</div>
            <div class="me-state">{{user.age |agehandle}}{{user.workYear | workYear}}</div>
          </div>
        </div>
        <div class="me-bottom">
          <div class="me-rate"></div>
          <div class="me-rate"></div>
          <div class="me-rate"></div>
        </div>
      </div>
      <ul class="me-list" style="margin-top:40px">
        <div class="me-list-content" >
          <li v-for="item in items">
            <div style="height:1px;background-color:#e4e4e4;width:100%"></div>
            <div style="height:10px;background-color:#f4f4f4;width:100%"></div>
            <div style="display: flex;flex-direction: row;width:200px;float: left">
              <img :src="item.image" alt="" class="me-image">
              <div class="me-title">{{item.title}}</div>
            </div>
            <img src="../assets/images/进入箭头.png" alt="" class="me-godetail">
            <div style="height:1px;background-color:#e4e4e4;width:100%"></div>
          </li>
        </div>
      </ul>
    </div>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from '../components/Tabbar'
import { formatDate } from '../PubliJS/date.js';

export default {
  name: 'Me',
  components: {
    Tabbar
  },
  data() {
    return {
      title: '我的列表',
      user: {},
      items: [
        { title: '在线简历', image: require('../assets/meimages/在线简历.png'), itemId: 0 },
        { title: '职位管理', image: require('../assets/meimages/职位管理.png'), itemId: 1 },
        { title: '关注猎头', image: require('../assets/meimages/关注猎头.png'), itemId: 2 },
        { title: '设置', image: require('../assets/meimages/设置.png'), itemId: 3 }
      ],
    }
  },
  filters: {
    formatDate(time) {
      var date = new Date(time);
      return formatDate(date, 'yyyy年MM月dd日');
    },
    workYear(year) {
      if (year == 0) {
        return ''
      } else {
        return '工作年限' + year + '年'
      }
    },
    agehandle(age) {
      return '年龄' + age + '岁  '
    }
  },
  created: function () {
    this.$nextTick(function () {
      var url = 'http://192.168.50.32:6280/jobhunter-mobile/m/resume/v1/getPersonResumeInfo?testUserId=100000063'
      this.$http.get(url).then(response => {
        console.log(response)
        if (response.status == 200) {
          console.log('请求成功')
          this.user = response.body.data;
          console.log(date)
        } else {
          console.log('请求失败')
        }
      })
    })
  },
}
</script>

<style scoped>
.me-bady{
  position: absolute;
  width: 100%;
  top: 0px;
  bottom: 49px;
}

.me-top {
  margin: 20px 5%;
  height: 120px;
  width: 90%;
  box-shadow: 0px 0px 5px 5px #e4e4e4;
}

.me-top-content {
  display: flex;
  flex-direction: row;
}

.me-head-avatar {
  margin: 15px 15px;
  height: 80px;
  width: 80px;
  border-radius: 40px;
}

.me-name {
  margin-top: 30px;
  font-size: 18px;
  text-align: left;
  font-weight: 800;
  font-family: Helvetica;
}

.me-state {
  font-size: 13px;
  margin-top: 10px;
  text-align: left;
}

.me-image{
   margin-top: 12.5px;
   margin-left: 15px;
   margin-right: 15px;
   height: 20px;
   width: 20px;
}
.me-list{
  margin:0px 0px;
  padding: 0px 0px;
}

.me-title{
  height: 20px;
  font-size: 15px;
  margin: 15px 0px;
}

li{
  list-style:none;
  height:65px;
  width: 100%;  
}

.me-godetail{
  float: right;
  padding: 0px;
  margin: 12.5;
  width: 20px;
  height: 20px;
}
</style>
