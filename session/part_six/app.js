new Vue({
  el:'#naufalApp',
  data:{
    a:0,
    b:0,
    age:20
  },
  methods:{
    addA: function(){
      console.log("add A");
      return this.a++;
    },
    addB: function(){
      console.log("add B");
      return this.b++;
    }
  },
  computed:{
    updateA: function(){
      console.log("update A");
      return this.a + this.age;
    },
    updateB: function(){
      console.log("update B");
      return this.b + this.age;
    }
  }
});
