<style scoped>
.ivu-card-bordered {
  margin-bottom: 16px;
}

.dblist-btn {
  margin-top: 10px;
}
</style>
<template>
  <div>
    <Row style="margin: 8px 0px" type="flex" :gutter="16">
      <Col v-for="(single,index) in encList" :key="index" :name="index" :md="12" :lg="6">
        <Card>
          <p slot="title">{{single.title}}</p>
          <div v-if="single.type == 'date2time'">
            现在:
            <p style="display: inline; color: #2d8cf0;">&nbsp;{{time}}</p>
          </div>
          <div v-else-if="single.type == 'time2date'">
            现在:
            <p style="display: inline; color: #2d8cf0;">&nbsp;{{timeStamp}}</p>
          </div>
          <div v-else>
            <p style="display: inline; color: #2d8cf0;">&nbsp;</p>
          </div>
          <Input v-model="single.key" placeholder="输入计算的字符串..." />
          <Input
            :id="index"
            style="margin-top: 10px"
            v-model="single.value"
            type="textarea"
            :rows="4"
            placeholder="计算结果..."
          />
          <div v-if="single.dropItem == undefined" style="text-align: right" class="dblist-btn">
            <Button
              @click="dbmodify(single, index)"
              size="small"
              type="primary"
              style="margin-bottom: -5px"
            >计算</Button>
            <Button
              @click="onCopy(index)"
              size="small"
              type="primary"
              style="margin-bottom: -5px"
            >复制</Button>
          </div>
          <div v-else style="text-align: right" class="dblist-btn">
            <Dropdown @on-click="dropbtn" style="margin-left: 20px">
              <Button type="primary" size="small" style="margin-bottom: -5px">
                计算
                <Icon type="ios-arrow-down"></Icon>
              </Button>
              <DropdownMenu
                v-for="(singleDrop,index2) in single.dropItem"
                :key="index2"
                :name="index2"
                slot="list"
              >
                <DropdownItem :name="singleDrop.type">{{singleDrop.key}}</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <Button
              @click="onCopy(index)"
              size="small"
              type="primary"
              style="margin-bottom: -5px"
            >复制</Button>
          </div>
          <Input
            v-if="single.publicPassword != undefined && single.length != undefined && single.length < 15"
            size="small"
            v-model="single.publicPassword"
            slot="extra"
            style="width: 185px"
            placeholder="公钥...必须10位"
            :maxlength="single.length"
            show-word-limit
          />
          <Input
            v-else-if="single.publicPassword != undefined && single.length != undefined"
            size="small"
            v-model="single.publicPassword"
            slot="extra"
            style="width: 185px"
            placeholder="公钥...必须16位"
            :maxlength="single.length"
            show-word-limit
          />
          <Input
            v-else-if="single.publicPassword != undefined"
            size="small"
            v-model="single.publicPassword"
            slot="extra"
            style="width: 185px"
            placeholder="公钥..."
          />
          <Spin size="large" fix v-if="single.flag"></Spin>
        </Card>
      </Col>
    </Row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      encList: [
        {
          title: "Jasypt加密",
          key: "",
          value: "",
          publicPassword: "",
          flag: false,
          type: "jasyptenc"
        },
        {
          title: "Jasypt解密",
          key: "",
          value: "",
          publicPassword: "",
          flag: false,
          type: "jasyptdec"
        },
        {
          title: "DES加/解密",
          key: "",
          value: "",
          length: 10,
          publicPassword: "",
          dropItem: [
            { key: "加密", type: "desenc" },
            { key: "解密", type: "desdec" }
          ],
          flag: false
        },
        {
          title: "AES-128加/解密",
          key: "",
          value: "",
          length: 16,
          publicPassword: "",
          dropItem: [
            { key: "加密", type: "aesenc" },
            { key: "解密", type: "aesdec" }
          ],
          flag: false
        },
        {
          title: "MD2计算",
          key: "",
          value: "",
          flag: false,
          type: "md2"
        },
        {
          title: "MD5计算",
          key: "",
          value: "",
          flag: false,
          type: "md5"
        },
        {
          title: "Base64加/解密",
          key: "",
          value: "",
          dropItem: [
            { key: "加密", type: "base64enc" },
            { key: "解密", type: "base64dec" }
          ],
          flag: false
        },
        {
          title: "时间戳 to 时间",
          key: "",
          value: "",
          flag: false,
          type: "time2date"
        },
        {
          title: "时间 to 时间戳",
          key: "",
          value: "",
          flag: false,
          type: "date2time"
        },
        {
          title: "SHA1计算",
          key: "",
          value: "",
          flag: false,
          type: "sha1"
        },
        {
          title: "SHA256计算",
          key: "",
          value: "",
          flag: false,
          type: "sha256"
        },
        {
          title: "SHA384计算",
          key: "",
          value: "",
          flag: false,
          type: "sha384"
        },
        {
          title: "SHA512计算",
          key: "",
          value: "",
          flag: false,
          type: "sha512"
        },
        {
          title: "哈希/散列",
          key: "",
          value: "",
          dropItem: [],
          flag: false,
          type: "base64dec"
        }
      ],
      timeStamp: new Date().getTime(),
      time: "",
      timer: "",
      dropCurrent: ""
    };
  },
  methods: {
    onCopy(e) {
      let copyDOM = document.getElementById(e);
      let range = document.createRange();
      window.getSelection().removeAllRanges();
      range.selectNode(copyDOM);
      window.getSelection().addRange(range);
      let successful = document.execCommand("copy");
      if (successful) {
        this.$Message["success"]({
          background: true,
          content: "复制成功!"
        });
      } else {
        this.$Message["error"]({
          background: true,
          content: "复制失败!"
        });
      }
      window.getSelection().removeAllRanges();
    },

    dropbtn(name) {
      let index = 0;
      if (name.search("base") != -1) {
        index = 6;
      } else if (name.search("des") != -1) {
        index = 2;
      } else if (name.search("aes") != -1) {
        index = 3;
      } else if (name.search("des") != -1) {
        index = 2;
      }
      this.dropCurrent = name;
      this.dbmodify(this.encList[index], index);
    },
    dbmodify(single, index) {
      let paramBody = {};
      this.encList[index].flag = true;
      if (this.dropCurrent != "") {
        single.type = this.dropCurrent;
      }
      if (single.key == "" || single.key.trim() == "") {
        this.$Message["error"]({
          background: true,
          content: "计算值不得为空!"
        });
        this.encList[index].flag = false;
      } else {
        this.dropCurrent = "";
        this.request
          .request("post", this.baseUrl + "/person/encrypt", "", single)
          .then(res => {
            this.encList[index].flag = false;
            if (res.status > 300) {
              this.$Message["error"]({
                background: true,
                content: "计算失败, 检查输入格式并重新计算!"
              });
            } else {
              this.encList[index].value = res.data;
              this.$Message["success"]({
                background: true,
                content: "计算完成!"
              });
            }
          });
      }
    },
    dbtest(index) {},
    timeStampAdd() {
      var date = new Date();
      this.timeStamp = date.getTime();
      var year = date.getFullYear();
      var month =
        date.getMonth() + 1 < 9
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1;
      var day = date.getDate() < 9 ? "0" + date.getDate() : date.getDate();
      var hour = date.getHours() < 9 ? "0" + date.getHours() : date.getHours();
      var minute =
        date.getMinutes() < 9 ? "0" + date.getMinutes() : date.getMinutes();
      var second =
        date.getSeconds() < 9 ? "0" + date.getSeconds() : date.getSeconds();
      this.time =
        year +
        "-" +
        month +
        "-" +
        day +
        " " +
        hour +
        ":" +
        minute +
        ":" +
        second;
    }
  },
  mounted() {
    this.timer = setInterval(this.timeStampAdd, 1000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  }
};
</script>