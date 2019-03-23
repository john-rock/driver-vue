console.clear()

Vue.config.devtools = true;

// var url = "https://spreadsheets.google.com/feeds/list/1Kro7GozZoMHv0j_iQUqZLmuN9dONEYBWRb9grtneiQs/od6/public/values?alt=json"

let app = new Vue({
  el: '#app',
  created: function(){
    this.getDrivers();
  },
  
  data: {
    selected: '',
    selected2: '',
    driverList: [],
    key: '1'
  },

  computed: {
    orderedDrivers: function () {
      return _.orderBy(this.driverList, 'gsx$driver.$t')
    }
  },
  
  methods:{
    getDrivers: async function(){
      this.status = "Loading...";
      await axios.get("https://spreadsheets.google.com/feeds/list/1Kro7GozZoMHv0j_iQUqZLmuN9dONEYBWRb9grtneiQs/" + this.key + "/public/values?alt=json")
        .then((results) => {
        this.driverList= results.data.feed.entry;
        console.log(this.driverList);
        console.log(url);
        console.log(this.key);

      })
      .catch (function (error){
        console.log(error)
      })
    }
  }
  
})
