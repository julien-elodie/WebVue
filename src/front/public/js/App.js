import publicheader from "../../components/header.vue";
import test from "../../components/component";
export default {
  name: "app",
  data() {
    return {
      menu: {
        l1: "首页",
        l2: "产品方案",
        l3: "资讯动态",
        r1: "关于我们",
        r2: "加入我们",
        r3: "病理在线",
      },
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
    publicheader,
    test
  }
};
