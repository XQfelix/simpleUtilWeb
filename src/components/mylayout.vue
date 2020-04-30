<style>
body {
  height: 100%;
}
.layout {
  /* border: 1px solid #d7dde4; */
  background: #f5f7f9;
  position: relative;
  overflow: hidden;
}
.layout-logo {
  width: 200px;
  height: 30px;
  /* background: url(bgimage.gif) no-repeat fixed top; */
  border-radius: 3px;
  float: left;
  position: relative;
  top: 0px;
  left: -8px;
  font-size: 30px;
  color: #efefef;
}
.layout-nav {
  width: 50px;
  margin: 0 auto;
  margin-right: 10px;
}
</style>
<template>
  <div class="layout">
    <Layout :style="{minHeight: '100vh'}">
      <Layout>
          <Menu
            @on-select="childTag"
            theme="dark"
            mode="horizontal"
            active-key="1"
          >
            <Submenu name="1">
              <template slot="title">
                <Icon type="ios-navigate"></Icon>常用工具
              </template>
              <MenuItem name="encryptutil">加密/解密</MenuItem>
              <MenuItem name="filelist">文件管理</MenuItem>
              <MenuItem name="postchild">PostChild</MenuItem>
            </Submenu>
            <Submenu name="2">
              <template slot="title">
                <Icon type="ios-keypad"></Icon>接口测试
              </template>
              <MenuItem name="receive">接收</MenuItem>
              <!-- <MenuItem name="send">发送</MenuItem> -->
            </Submenu>
            <Submenu name="3">
              <template slot="title">
                <Icon type="ios-briefcase" />Nosql
              </template>
              <!-- <MenuItem name="3-5">Redis</MenuItem> -->
              <!-- <MenuItem name="3-6">Memecache</MenuItem> -->
            </Submenu>
          </Menu>
        <Layout :style="{padding: '8px'}">
          <Content>
            <router-view />
          </Content>
        </Layout>
      </Layout>
      <Footer style="text-align: left;">2011-2016 &copy; TalkingData</Footer>
    </Layout>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    childTag(e) {
      if (this.$route.name != e) {
        this.$Loading.start();
        this.$router.push({
          path: "/" + e
        });
        this.$Loading.finish();
      }
    },
    ok() {
      this.$Message.info("You click ok");
    },
    cancel() {
      this.$Message.info("You click cancel");
    }
  }
};
</script>
