<template>
  <div class="public_header">
    <div class="public_container clearfloat">
      <div class="header_nav_left">
        <ul class="header_nav">
          <li class="header_nav_item first">
            <a href="">{{ l1 }}</a>
          </li>
          <li class="header_nav_item hide">
            <a href="">{{ l2 }}</a>
          </li>
          <li class="header_nav_item hide">
            <a href="">{{ l3 }}</a>
          </li>
        </ul>
      </div>
      <div class="header_nav_right">
        <ul class="header_nav">
          <li class="header_nav_item first">
            <a href="">{{ r1 }}</a>
          </li>
          <li class="header_nav_item hide">
            <a href="">{{ r2 }}</a>
          </li>
          <li class="header_nav_item hide">
            <a href="">{{ r3 }}</a>
          </li>
        </ul>
      </div>
      <div class="public_header_logo">
        <a href="https://cn.vuejs.org/" class="logo_link"></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "public_header",
  props: ["l1", "l2", "l3", "r1", "r2", "r3"]
};
</script>

<style>
.public_header {
  margin-bottom: 40px;
}

.public_container {
  position: relative;
  margin: 0 auto;
  background: #3b8070;
  height: 40px;
}

.public_header .public_header_logo {
  position: relative;
  margin: 0 auto;
  width: 64px;
  padding: 8px;
}

.public_header .public_header_logo .logo_link {
  width: 64px;
  height: 64px;
  background: url("../public/img/logo.png");
  background-size: 64px 64px;
  display: block;
}

.public_header .header_nav_left {
  float: left;
  width: 50%;
  height: 100%;
}

.public_header .header_nav_right {
  float: right;
  width: 50%;
  height: 100%;
}
@media screen and (min-width: 641px) {
  .public_header .header_nav {
    padding: 8px 32px;
    height: 24px;
  }
  .public_header .header_nav .header_nav_item {
    width: 33.3%;
    float: left;
  }
}
@media screen and (max-width: 640px) {
  .public_header .header_nav .first {
    height: 24px;
  }
  .public_header .header_nav .header_nav_item {
    position: relative;
    margin: -1px auto;
    padding: 8px 0;
    width: 120px;
    
  }
  .public_header .header_nav .hide {
    visibility: hidden;
    height: 23px;
    background: #41b883;
    border: #35495e solid 1px;
  }
}

.public_header .header_nav .header_nav_item a {
  text-align: center;
  color: #000000;
  margin: 0 8px;
}

.public_header .header_nav .header_nav_item a:hover {
  color: #ffffff;
}
</style>
