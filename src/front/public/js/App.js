import test from "../../components/component.vue";
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      items: [{
        tag: "1"
      }, {
        tag: "2"
      }, {
        tag: "3"
      }]
    };
  },
  mounted: function () {
    this.items = [{
      tag: "1"
    }, {
      tag: "2"
    }];
  },
  components: {
    test
  }
};
