new Vue({
  el:'#naufalApp',
  data: {
    age: 20,
    year: 2018,
    x:0,
    y:0
  },
  methods:{
    add: function(increment){
      this.year += increment;
    },
    subtract: function(decrement){
      this.year -= decrement;
    },
    updateXY: function(event){
      this.x = event.offsetX;
      this.y = event.offsetY;
    }
  }
});
