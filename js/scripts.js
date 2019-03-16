console.clear()

Vue.config.devtools = true;

var url = "https://spreadsheets.google.com/feeds/list/1oBMFnukoAvh8CtqHFCr04uOxeDckdHgHlHbOXbaWb04/od6/public/values?alt=json"

let app = new Vue({
  el: '#app',
  created: function(){
    this.getDrivers();
  },
  
  data: {
    selected: null,
    selected2: null,
    drivers: []
  },

  computed: {
    orderedDrivers: function () {
      return _.orderBy(this.drivers, 'gsx$driver.$t')
    }
  },
  
  methods:{
    getDrivers: function(){
      axios.get(url)
        .then(results => {
        this.drivers = results.data.feed.entry;
        console.log(this.drivers);
        console.log(url);
      })
      .catch (function (error){
        console.log(error)
      })
    }
  }
  
})
