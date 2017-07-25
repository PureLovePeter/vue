<template>
    <div class="hunter-list">
        <!--导航-->
        <h1 class="nav">
            <img @click="back" style="margin:20px 15px;height:25px" src="../assets/返回.png" alt="">
            <p class="nav-title">{{title}}</p>
        </h1>
        <!--图片-->
        <img class="list-top-image" :src="topImage" alt="">
    </div>
</template>

<script>
export default {
    name: 'hunter-list',
    data() {
        return {
            title: '猎头列表',
            headhunter: {

            },
            images: [
                { image: require('../assets/images/超级猎头top.png') },
                { image: require('../assets/images/高薪必备top.png') },
                { image: require('../assets/images/使命必达top.png') },
                { image: require('../assets/images/每月杰出top.png') },
            ],
            topImage: ''
        }
    },
    methods:{
     back:function(){
         this.$router.push('/')
     }
    },
    created: function () {
        var index = this.$route.query.listId;
        console.log('index=' + index);
        this.topImage = this.images[index].image;
    },
    components: {}
}
</script>

<style scoped>
.nav {
    display: flex;
    flex-direction: row;
    background-color: black;
    margin-top: 0px;
    margin-bottom: 0px;
    height: 64px;
}

.nav-title {
    float: left;
    font-size: 18px;
    margin: 0px 0px 0px 0px;
    width: 100%;
    height: 30px;
    padding: 20px 0px 0px 0px;
    text-align: center;
    padding-right: 50px;
    color: white;
}

.list-top-image {
    width: 100%;
}
</style>
