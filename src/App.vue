<template>
  <div id="app">
    <el-container>
      <!-- 头部 -->
      <el-header>{{Header}}</el-header>
      <!-- 导航栏 -->
      <el-container>
        <el-aside width="200px">
            <el-row class="tac">
              <el-col :span="24">
                <el-menu :default-active="$route.path" router unique-opened class="el-menu-vertical-demo"
                  @open="handleOpen" @close="handleClose">
                  <template v-for="(item, index) in $router.options.routes" v-if="!item.hidden" >
                      <!--二级菜单-->
                      <template v-if="!item.leaf" >
                          <el-submenu :index="index+''" :key="index+1">
                            <template slot="title">
                              <i :class="item.iconCls"></i>
                              <span>{{item.name}}</span>
                            </template>
                            <el-menu-item-group>
                              <el-menu-item :index="child.path" :key="index+2" v-for="(child, index) in item.children">
                                {{child.name}}
                              </el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                      </template>
                      <!--一级菜单-->
                      <template v-else>
                          <el-menu-item :index="child.path" :key="index*8" v-for="(child, index) in item.children">
                            <i :class="child.iconCls"></i>
                            <span slot="title">{{child.name}}</span>
                          </el-menu-item>
                      </template>
                  </template>
                </el-menu>
              </el-col>
            </el-row>
        </el-aside>
        <!-- 内容 -->
        <el-main>
          <el-row>
            <el-col :span="24">
              <div class="grid-content" style="padding: 20px;">
                <router-view/>
              </div>
            </el-col>
          </el-row>
 
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
 
<script>
export default {
  data() {
      return {
        Header:'渭南师范学院',
        menuItems:[],
      }
    },
  methods: {
      handleOpen(key, keyPath) {
        //console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        //console.log(key, keyPath);
      }
  }
}
</script>
 
<style>
body{
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
 
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
 
.el-header, .el-footer {
  background-color: #235d8b;
  color: #ffffff;
  text-align: left;
  line-height: 60px;
  position: absolute;
  top: 0;
  left: 0;
  height: 60px;
  width: 100%;
  z-index: 100;
}
 
.el-aside {
  background-color: #4175a4;
  color: #ffffff;
  text-align: left;
  height: 100%;
  z-index: 10;
  position: absolute;
  left: 0;
  top: 0;
  padding-top: 80px;
}
 
.el-main {
  background-color: #FFFFFF;
  color: #333;
  text-align: left;
  height: 100%;
  position: absolute;
  left: 0; 
  top: 0;
  padding-top: 80px;
  padding-left: 210px;
  width: 100%;
}
 
body > .el-container {
  margin-bottom: 40px;
}
 
.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}
 
.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.el-menu-vertical-demo{
  background:#4175a4;
}
</style>