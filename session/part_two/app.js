let app = new Vue({
  el:'#naufalApp',
  data: {
    name: "NOVVVSL!",
    job: "Web Developer"
  },
  methods: {
    greet: function(){
      return "Hello " + this.name;
    },
    page: function(params){
      return "Wellcome to page " + params;
    }
  }
});

// app.message = "Dunia";
