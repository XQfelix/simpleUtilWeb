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
      <Col :md="12" :lg="6">
        <Card>
          <p slot="title">HttpServer</p>
          <i-form :model="formItem" label-position="left" :label-width="80">
            <Form-item label="地址">
                <i-input :value.sync="formItem.input" placeholder="/rest"></i-input>
            </Form-item>
            <Form-item label="端口">
                <i-input :value.sync="formItem.input" placeholder="0000"></i-input>
            </Form-item>
            <Form-item label="文件路径">
              <Tooltip placement="bottom-end" style="width: 100%">
              <i-input :value.sync="formItem.input" placeholder="/tmp/test.txt"></i-input>
              <div slot="content">
                <p>响应数据可以是一个json或者txt的文件</p>
                <p>传入路径即可</p>
            </div>
              </Tooltip>
            </Form-item>
            <Form-item label="响应数据">
              <Tooltip placement="bottom-end" style="width: 100%">
                <i-input :value.sync="formItem.textarea" type="textarea" :autosize="{minRows: 4,maxRows: 4}" placeholder="Hello World"></i-input>
                <div slot="content">
                  <p>可以在输入框中直接输入想要返回的数据</p>
                  <p>例如: Hello World</p>
              </div>
              </Tooltip>
            </Form-item>
            <Form-item style="position: relative; top: 10px">
                <i-button type="primary" size="small">启动</i-button>
                <i-button type="primary" size="small" style="margin-left: 8px">停止</i-button>
            </Form-item>
          </i-form>
        </Card>
      </Col>

      <Col :md="12" :lg="6">
        <Card>
          <p slot="title">SocketTCPServer</p>
          <i-form :model="formItem" label-position="left" :label-width="80">
            <Form-item label="地址">
                <i-input :value.sync="formItem.input" placeholder="/rest"></i-input>
            </Form-item>
            <Form-item label="端口">
                <i-input :value.sync="formItem.input" placeholder="0000"></i-input>
            </Form-item>
            <Form-item label="文件路径">
              <Tooltip placement="bottom-end" style="width: 100%">
              <i-input :value.sync="formItem.input" placeholder="/tmp/test.txt"></i-input>
              <div slot="content">
                <p>响应数据可以是一个json或者txt的文件</p>
                <p>传入路径即可</p>
            </div>
              </Tooltip>
            </Form-item>
            <Form-item label="响应数据">
              <Tooltip placement="bottom-end" style="width: 100%">
                <i-input :value.sync="formItem.textarea" type="textarea" :autosize="{minRows: 4,maxRows: 4}" placeholder="Hello World"></i-input>
                <div slot="content">
                  <p>可以在输入框中直接输入想要返回的数据</p>
                  <p>例如: Hello World</p>
              </div>
              </Tooltip>
            </Form-item>
            <Form-item style="position: relative; top: 10px">
                <i-button type="primary" size="small">启动</i-button>
                <i-button type="primary" size="small" style="margin-left: 8px">停止</i-button>
            </Form-item>
          </i-form>
        </Card>
      </Col>

      <Col :md="12" :lg="6">
        <Card>
          <p slot="title">SocketUDPserver</p>
          <i-form :model="formItem" label-position="left" :label-width="80">
            <Form-item label="地址">
                <i-input :value.sync="formItem.input" placeholder="/rest"></i-input>
            </Form-item>
            <Form-item label="端口">
                <i-input :value.sync="formItem.input" placeholder="0000"></i-input>
            </Form-item>
            <Form-item label="文件路径">
              <Tooltip placement="bottom-end" style="width: 100%">
              <i-input :value.sync="formItem.input" placeholder="/tmp/test.txt"></i-input>
              <div slot="content">
                <p>响应数据可以是一个json或者txt的文件</p>
                <p>传入路径即可</p>
            </div>
              </Tooltip>
            </Form-item>
            <Form-item label="响应数据">
              <Tooltip placement="bottom-end" style="width: 100%">
                <i-input :value.sync="formItem.textarea" type="textarea" :autosize="{minRows: 4,maxRows: 4}" placeholder="Hello World"></i-input>
                <div slot="content">
                  <p>可以在输入框中直接输入想要返回的数据</p>
                  <p>例如: Hello World</p>
              </div>
              </Tooltip>
            </Form-item>
            <Form-item style="position: relative; top: 10px">
                <i-button type="primary" size="small">启动</i-button>
                <i-button type="primary" size="small" style="margin-left: 8px">停止</i-button>
            </Form-item>
          </i-form>
        </Card>
      </Col>

      <Col :md="12" :lg="6">
        <Card>
          <p slot="title">WebServiceServer</p>
          <i-form :model="formItem" label-position="left" :label-width="80">
            <Form-item label="地址">
                <i-input :value.sync="formItem.input" placeholder="/rest"></i-input>
            </Form-item>
            <Form-item label="端口">
                <i-input :value.sync="formItem.input" placeholder="0000"></i-input>
            </Form-item>
            <Form-item label="文件路径">
              <Tooltip placement="bottom-end" style="width: 100%">
              <i-input :value.sync="formItem.input" placeholder="/tmp/test.txt"></i-input>
              <div slot="content">
                <p>响应数据可以是一个json或者txt的文件</p>
                <p>传入路径即可</p>
            </div>
              </Tooltip>
            </Form-item>
            <Form-item label="响应数据">
              <Tooltip placement="bottom-end" style="width: 100%">
                <i-input :value.sync="formItem.textarea" type="textarea" :autosize="{minRows: 4,maxRows: 4}" placeholder="Hello World"></i-input>
                <div slot="content">
                  <p>可以在输入框中直接输入想要返回的数据</p>
                  <p>例如: Hello World</p>
              </div>
              </Tooltip>
            </Form-item>
            <Form-item style="position: relative; top: 10px">
                <i-button type="primary" size="small">启动</i-button>
                <i-button type="primary" size="small" style="margin-left: 8px">停止</i-button>
            </Form-item>
          </i-form>
        </Card>
      </Col>

      <Col :md="12" :lg="6">
        <Card>
          <p slot="title">ActiveMqReceiver</p>
          <i-form :model="formItem" label-position="left" :label-width="80">
            <Form-item label="地址">
                <i-input :value.sync="formItem.input" placeholder="/rest"></i-input>
            </Form-item>
            <Form-item label="端口">
                <i-input :value.sync="formItem.input" placeholder="0000"></i-input>
            </Form-item>
            <Form-item label="文件路径">
              <Tooltip placement="bottom-end" style="width: 100%">
              <i-input :value.sync="formItem.input" placeholder="/tmp/test.txt"></i-input>
              <div slot="content">
                <p>响应数据可以是一个json或者txt的文件</p>
                <p>传入路径即可</p>
            </div>
              </Tooltip>
            </Form-item>
            <Form-item label="响应数据">
              <Tooltip placement="bottom-end" style="width: 100%">
                <i-input :value.sync="formItem.textarea" type="textarea" :autosize="{minRows: 4,maxRows: 4}" placeholder="Hello World"></i-input>
                <div slot="content">
                  <p>可以在输入框中直接输入想要返回的数据</p>
                  <p>例如: Hello World</p>
              </div>
              </Tooltip>
            </Form-item>
            <Form-item style="position: relative; top: 10px">
                <i-button type="primary" size="small">启动</i-button>
                <i-button type="primary" size="small" style="margin-left: 8px">停止</i-button>
            </Form-item>
          </i-form>
        </Card>
      </Col>

      <Col :md="12" :lg="6">
        <Card>
          <p slot="title">RabbitMqReceiver</p>
          <i-form :model="formItem" label-position="left" :label-width="80">
            <Form-item label="地址">
                <i-input :value.sync="formItem.input" placeholder="/rest"></i-input>
            </Form-item>
            <Form-item label="端口">
                <i-input :value.sync="formItem.input" placeholder="0000"></i-input>
            </Form-item>
            <Form-item label="文件路径">
              <Tooltip placement="bottom-end" style="width: 100%">
              <i-input :value.sync="formItem.input" placeholder="/tmp/test.txt"></i-input>
              <div slot="content">
                <p>响应数据可以是一个json或者txt的文件</p>
                <p>传入路径即可</p>
            </div>
              </Tooltip>
            </Form-item>
            <Form-item label="响应数据">
              <Tooltip placement="bottom-end" style="width: 100%">
                <i-input :value.sync="formItem.textarea" type="textarea" :autosize="{minRows: 4,maxRows: 4}" placeholder="Hello World"></i-input>
                <div slot="content">
                  <p>可以在输入框中直接输入想要返回的数据</p>
                  <p>例如: Hello World</p>
              </div>
              </Tooltip>
            </Form-item>
            <Form-item style="position: relative; top: 10px">
                <i-button type="primary" size="small">启动</i-button>
                <i-button type="primary" size="small" style="margin-left: 8px">停止</i-button>
            </Form-item>
          </i-form>
        </Card>
      </Col>

      <Col :md="12" :lg="6">
        <Card>
          <p slot="title">KafkaReceiver</p>
          <i-form :model="formItem" label-position="left" :label-width="80">
            <Form-item label="地址">
                <i-input :value.sync="formItem.input" placeholder="/rest"></i-input>
            </Form-item>
            <Form-item label="端口">
                <i-input :value.sync="formItem.input" placeholder="0000"></i-input>
            </Form-item>
            <Form-item label="文件路径">
              <Tooltip placement="bottom-end" style="width: 100%">
              <i-input :value.sync="formItem.input" placeholder="/tmp/test.txt"></i-input>
              <div slot="content">
                <p>响应数据可以是一个json或者txt的文件</p>
                <p>传入路径即可</p>
            </div>
              </Tooltip>
            </Form-item>
            <Form-item label="响应数据">
              <Tooltip placement="bottom-end" style="width: 100%">
                <i-input :value.sync="formItem.textarea" type="textarea" :autosize="{minRows: 4,maxRows: 4}" placeholder="Hello World"></i-input>
                <div slot="content">
                  <p>可以在输入框中直接输入想要返回的数据</p>
                  <p>例如: Hello World</p>
              </div>
              </Tooltip>
            </Form-item>
            <Form-item style="position: relative; top: 10px">
                <i-button type="primary" size="small">启动</i-button>
                <i-button type="primary" size="small" style="margin-left: 8px">停止</i-button>
            </Form-item>
          </i-form>
        </Card>
      </Col>

      <Col :md="12" :lg="6">
        <Card>
          <p slot="title">IbmMQReceiver</p>
          <i-form :model="formItem" label-position="left" :label-width="80">
            <Form-item label="地址">
                <i-input :value.sync="formItem.input" placeholder="/rest"></i-input>
            </Form-item>
            <Form-item label="端口">
                <i-input :value.sync="formItem.input" placeholder="0000"></i-input>
            </Form-item>
            <Form-item label="文件路径">
              <Tooltip placement="bottom-end" style="width: 100%">
              <i-input :value.sync="formItem.input" placeholder="/tmp/test.txt"></i-input>
              <div slot="content">
                <p>响应数据可以是一个json或者txt的文件</p>
                <p>传入路径即可</p>
            </div>
              </Tooltip>
            </Form-item>
            <Form-item label="响应数据">
              <Tooltip placement="bottom-end" style="width: 100%">
                <i-input :value.sync="formItem.textarea" type="textarea" :autosize="{minRows: 4,maxRows: 4}" placeholder="Hello World"></i-input>
                <div slot="content">
                  <p>可以在输入框中直接输入想要返回的数据</p>
                  <p>例如: Hello World</p>
              </div>
              </Tooltip>
            </Form-item>
            <Form-item style="position: relative; top: 10px">
                <i-button type="primary" size="small">启动</i-button>
                <i-button type="primary" size="small" style="margin-left: 8px">停止</i-button>
            </Form-item>
          </i-form>
        </Card>
      </Col>

      <Col :md="12" :lg="6">
        <Card>
          <p slot="title">SyslogReceiver</p>
          <i-form :model="formItem" label-position="left" :label-width="80">
            <Form-item label="地址">
                <i-input :value.sync="formItem.input" placeholder="/rest"></i-input>
            </Form-item>
            <Form-item label="端口">
                <i-input :value.sync="formItem.input" placeholder="0000"></i-input>
            </Form-item>
            <Form-item label="文件路径">
              <Tooltip placement="bottom-end" style="width: 100%">
              <i-input :value.sync="formItem.input" placeholder="/tmp/test.txt"></i-input>
              <div slot="content">
                <p>响应数据可以是一个json或者txt的文件</p>
                <p>传入路径即可</p>
            </div>
              </Tooltip>
            </Form-item>
            <Form-item label="响应数据">
              <Tooltip placement="bottom-end" style="width: 100%">
                <i-input :value.sync="formItem.textarea" type="textarea" :autosize="{minRows: 4,maxRows: 4}" placeholder="Hello World"></i-input>
                <div slot="content">
                  <p>可以在输入框中直接输入想要返回的数据</p>
                  <p>例如: Hello World</p>
              </div>
              </Tooltip>
            </Form-item>
            <Form-item style="position: relative; top: 10px">
                <i-button type="primary" size="small">启动</i-button>
                <i-button type="primary" size="small" style="margin-left: 8px">停止</i-button>
            </Form-item>
          </i-form>
        </Card>
      </Col>
    </Row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      httpServerUrl: "/rest",
      httpServerPort: "",
      timeStamp: new Date().getTime(),
      time: "",
      timer: "",
      dropCurrent: "",
      formItem: {
        input: '',
        select: '',
        radio: 'male',
        checkbox: [],
        switch: true,
        date: '',
        time: '',
        slider: [20, 50],
        textarea: ''
      }
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