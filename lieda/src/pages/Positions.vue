<template>
  <!--导航-->
  <div class="Positions">
  <div class="nav-bg">
      <p class="nav-title">{{title}}</p>
  </div> 
  <div class="posidion-body">
  <PositionCell v-for="position in positions" :childVue="position"></PositionCell>
  </div>
  <div v-if="show" class="loading">
      <div style="height:20px;margin-top:30px;font-size:14px">加载中...</div>
  </div>
  <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from '../components/Tabbar'
import PositionCell from  '../components/PositonCell'

export default {
  name: 'Positions',
  components: {
    Tabbar,
    PositionCell
  },
  data() {
    return {
      show:true,
      title: '职位列表',
      positions:[]
    }
  },
  created(){
      this.show = true;
      this.$nextTick(function () {
      var url = 'http://192.168.50.32:6280/jobhunter-mobile/m/position/v1/recommendedPositionsList?testUserId=100000064'
      this.$http.get(url).then(response => {
        console.log(response)
        this.show = false;
        if (response.status == 200) {
          console.log('请求成功')
          this.positions = response.body.data.positions;
        } else {
          console.log('请求失败')
        }
      })
    })
  },
}
</script>

<style scoped>
.nav-bg{
  width: 100%;
  margin: 0px 0px;
  height: 64px;
  background-color: black;
}

.nav-title{
  color: white;
  height: 24px;
  padding: 20px;
  font-size: 18px;
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

.posidion-body{
  position: absolute;
  bottom: 49px;
  top: 64px;
  width: 100%;
  text-align: left;
  overflow-y:auto;

}
</style>
