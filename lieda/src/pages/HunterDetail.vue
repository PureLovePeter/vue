<template>
  <!--导航-->
  <div class="hunter-detail">
    <h1 class="nav">
      <p class="nav-title">{{title}}</p>
    </h1>
    <!--头试图-->
    <div class="detail-top">
      <img :src="headhunter.avatarUrl" alt="" class="detail-headImage">
      <div class="detail-gender">合伙人 先生</div>
      <div class="detail-name">{{headhunter.name}}</div>
      <div class="detail-top-gate">
        <div class="detail-gate">
          <div class="detail-gate-content">1年</div>
          <div class="detail-gate-name">猎头经验</div>
        </div>
        <div class="detail-gate">
          <div class="detail-gate-content">96%</div>
          <div class="detail-gate-name">面试率</div>
        </div>
        <div class="detail-gate">
          <div class="detail-gate-content">94%</div>
          <div class="detail-gate-name">推荐率</div>
        </div>
      </div>
      <!--灰色-->
      <div class="detail-bgline"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hunter-detail',
  data() {
    return {
      title: '猎头详情',
      headhunter: {

      }
    }
  },
  created(){
      this.headhunter = this.$route.query.hunterDetail;
  },
  components: {}
}
</script>

<style scoped>
.nav {
  display: inherit;
  background-color: black;
  margin-top: 0px;
  margin-bottom: 0px;
  height: 64px;
}

.nav-title {
  float: left;
  font-size: 18px;
  margin: 0px 0px 0px 0px;
  width: 60%;
  height: 30px;
  padding: 20px 0px 0px 0px;
  text-align: right;
  color: white;
}

.detail-headImage {
  height: 90px;
  width: 90px;
  text-align: center;
  border-radius: 45px;
}
.detail-name{
  font: 14px;
  margin-top: 10px;
}

.detail-top-gate{
  display: flex;
  flex-direction: row;
  margin-top: 10px;
}

.detail-gate{
  display: flex;
  flex-direction: column;
  width: 33.3%;
  height: 60px;
}

.detail-gate-content{
  color: red;
  font: 15px;
}

.detail-gate-name{
  margin-top: 10px;
  font: 15px;
}

.detail-bgline{
  height: 15px;
  background-color: #f4f4f4;
}
</style>
