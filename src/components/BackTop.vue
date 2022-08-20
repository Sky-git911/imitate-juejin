<template>
  <div class="scrollTop">
    <div  id="btnBox" >
       <button @click="goBack" class="to-top-btn" title="回到顶部">
         <svg class="svg">
            <path full-rule="evenodd" clip-rule="evenodd" d="M 2.75 1 C 2.33579 1 2 1.33579 2 1.75 
            C 2 2.16421 2.33579 2.5 2.75 2.5 H 13.25 
            C 13.6642 2.5 14 2.16421 14 1.75 
            C 14 1.33579 13.6642 1 13.25 1 H 2.75 Z 
            M 7.24407 3.87287 C 7.64284 3.41241 8.35716 3.41241 8.75593 3.87287 
            L 13.0622 8.84535 C 13.6231 9.49299 13.163 10.5 12.3063 10.5 
            H 10 V 14 C 10 14.5523 9.55228 15 9 15 H 7 
            C 6.44772 15 6 14.5523 6 14 V 10.5 H 3.69371 
            C 2.83696 10.5 2.37691 9.49299 2.93778 8.84535 L 7.24407 3.87287 Z"
            fill="#8A919F"
            />
         </svg>
       </button>
    </div>
    <div  id="btnBox2" >
       <button class="to-top-btn" title="建议反馈">
         <svg class="svg">
            <path full-rule="evenodd" clip-rule="evenodd" d="M 1.8252 4.002 C 1.8252 2.80032 2.79935 1.82617 4.00102 1.82617 H 12.001 C 13.2027 1.82617 14.1768 2.80032 14.1768 4.002 V 9.71628 C 14.1768 10.918 13.2027 11.8921 12.001 11.8921 H 9.43308 L 6.92709 14.1281 C 6.4455 14.5578 5.68234 14.216 5.68234 13.5706 V 11.8921 H 4.00102 C 2.79934 11.8921 1.8252 10.918 1.8252 9.71628 V 4.002 Z M 11.2414 7.86753 C 11.3826 7.65526 11.3249 7.36878 11.1126 7.22764 C 10.9004 7.08651 10.6139 7.14417 10.4728 7.35643 C 9.94042 8.15705 9.03153 8.68309 7.99997 8.68309 C 6.96841 8.68309 6.05952 8.15705 5.52719 7.35643 C 5.38605 7.14417 5.09957 7.08651 4.88731 7.22764 C 4.67504 7.36878 4.61738 7.65526 4.75852 7.86753 C 5.45467 8.91452 6.64645 9.60617 7.99997 9.60617 C 9.35349 9.60617 10.5453 8.91452 11.2414 7.86753 Z"
            fill="rgb(30, 128, 255)"
            />
         </svg>
       </button>
    </div>
  </div>
</template>    
<script>
export default {
  name: 'scrollTop',
  data() {
    return {
    }
  },
  computed: {},
  methods: {
   // 回到顶部操作
    goBack() {
      document.documentElement.scrollTop = 0;
    },
  //返回顶部事件
    scrollToTop() { 
      let topBtn = document.getElementById('btnBox');
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      console.log('距离顶部的距离:'+scrollTop) 
    // 判断距离顶部多少显示回到顶部图标
      if (scrollTop > 200) {
        topBtn.style.display = "block";
      } else if (scrollTop < 200) {
        topBtn.style.display = "none";
      }
    },
    //离开该页面需要移除这个监听的事件，不然会报错;
    destroyed() {
      window.removeEventListener("scroll", this.scrollToTop);
    },
  },
  mounted() {
     window.addEventListener('scroll', this.scrollToTop)
  },
}
</script>

<style scoped>
.scrollTop{
  height: 100vh;
  overflow-y: scroll;
}
#btnBox{
  position: fixed;
  bottom: 80px;
  right: 30px;
  font-size: 30px;
  z-index: 250;
}
#btnBox2{
  position: fixed;
  bottom: 30px;
  right: 30px;
  font-size: 30px;
  z-index: 250;
}
.to-top-btn{
   width: 42px;
   height: 39px;
   border-radius: 20px;
   background-color: white;
   border: 0ch;
   padding-top: 5px;
}
.svg{
    width: 16px;
    height: 16px;
    fill: none;
}
</style>
