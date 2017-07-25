<template>
  <!--导航-->
  <div class="Message">
    <div class="nav-bg">
      <p class="nav-title">{{title}}</p>
    </div> 
  <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from '../components/Tabbar'

export default {
  name: 'Message',
  components: {
    Tabbar
  },
  data() {
    return {
      title: '消息列表'
    }
  },
  created(){
      this.headhunter = this.$route.query.hunterDetail;

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
</style>
