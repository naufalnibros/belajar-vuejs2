new Vue({
  el:'#naufalApp',
  data:{
    available: true,
    present: true,
    nearby: true
  },
  computed:{
    compareClass: function(){
      return {
        cssavailable: this.present,
        nearby: this.nearby
      };
    }
  }
});
