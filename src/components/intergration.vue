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
    <div style="margin: 0 auto">
      <Tabs v-model="formItem.activeTab">
        <Tab-pane label="HttpServer" name="http">
          <!-- <Spin size="large" fix v-if="spinFlag"></Spin> -->
          <i-form :model="formItem" label-position="right" :label-width="80">
            <Form-item label="地址" required>
              <i-input v-model="formItem.httpUrl" placeholder="/rest"></i-input>
            </Form-item>
            <Form-item label="端口" required>
              <i-input v-model="formItem.httpPort" placeholder="0000"></i-input>
            </Form-item>
            <Form-item label="文件路径">
              <Tooltip placement="bottom" style="width: 100%">
                <i-input v-model="formItem.httpFilePath" placeholder="/tmp/test.txt"></i-input>
                <div slot="content">
                  <p>响应数据可以是一个json或者txt的文件</p>
                  <p>传入路径即可</p>
                </div>
              </Tooltip>
            </Form-item>
            <Form-item label="响应数据">
              <Tooltip placement="bottom" style="width: 100%">
                <i-input
                  v-model="formItem.httpTextArea"
                  type="textarea"
                  :autosize="{minRows: 8,maxRows: 8}"
                  placeholder="Hello World"
                ></i-input>
                <div slot="content">
                  <p>在输入框中直接输入想要返回的数据,</p>
                  <p>若使用该选项则无需填写文件路径</p>
                  <p>例如: Hello World</p>
                </div>
              </Tooltip>
            </Form-item>
            <Form-item style="position: relative; top: 10px">
              <i-button
                :type="btnType"
                size="small"
                :loading="spinFlag"
                @click="handleStart('http')"
              >{{startBtnContext}}</i-button>
            </Form-item>
            <Divider />
            <Form-item label="请求数据">
              <Tooltip placement="top" style="width: 100%">
                <i-input
                  v-model="responseData"
                  type="textarea"
                  :autosize="{minRows: 20,maxRows: 20}"
                  placeholder="客户端请求的数据"
                ></i-input>
                <div slot="content">
                  <p>客户端请求的数据</p>
                </div>
              </Tooltip>
            </Form-item>
          </i-form>
        </Tab-pane>
        <Tab-pane label="SocketTCPServer" name="socketTcpServer">
          <i-form :model="formItem" label-position="right" :label-width="80">
            <Form-item label="端口" required>
              <i-input v-model="formItem.socketTCPServerPort" placeholder="0000"></i-input>
            </Form-item>
            <Form-item label="文件路径">
              <Tooltip placement="bottom" style="width: 100%">
                <i-input v-model="formItem.socketTCPServerFilePath" placeholder="/tmp/test.txt"></i-input>
                <div slot="content">
                  <p>响应数据可以是一个json或者txt的文件</p>
                  <p>传入路径即可</p>
                </div>
              </Tooltip>
            </Form-item>
            <Form-item label="响应数据">
              <Tooltip placement="bottom" style="width: 100%">
                <i-input
                  v-model="formItem.socketTCPServerTextArea"
                  type="textarea"
                  :autosize="{minRows: 8,maxRows: 8}"
                  placeholder="Hello World"
                ></i-input>
                <div slot="content">
                  <p>在输入框中直接输入想要返回的数据,</p>
                  <p>若使用该选项则无需填写文件路径</p>
                  <p>例如: Hello World</p>
                </div>
              </Tooltip>
            </Form-item>
            <Form-item style="position: relative; top: 10px">
              <i-button
                :type="btnType"
                size="small"
                :loading="spinFlag"
                @click="handleStart('socketTcpServer')"
              >{{startBtnContext}}</i-button>
            </Form-item>
            <Divider />
            <Form-item label="请求数据">
              <Tooltip placement="top" style="width: 100%">
                <i-input
                  v-model="socketTCPServerResData"
                  type="textarea"
                  :autosize="{minRows: 22,maxRows: 22}"
                  placeholder="Hello World"
                ></i-input>
                <div slot="content">
                  <p>客户端请求的数据</p>
                </div>
              </Tooltip>
            </Form-item>
          </i-form>
        </Tab-pane>
        <Tab-pane label="SocketUDPServer" name="socketUdpServer">
          <i-form :model="formItem" label-position="right" :label-width="80">
            <Form-item label="端口" required>
              <i-input v-model="formItem.socketUDPServerPort" placeholder="0000"></i-input>
            </Form-item>
            <Form-item label="编码" required>
              <Tooltip placement="bottom" style="width: 100%">
                <i-input v-model="formItem.charset" placeholder="UTF-8"></i-input>
                <div slot="content">
                  <p>默认: UTF-8</p>
                </div>
              </Tooltip>
            </Form-item>
            <Form-item style="position: relative; top: 10px">
              <i-button
                :type="btnType"
                size="small"
                :loading="spinFlag"
                @click="handleStart('socketUdpServer')"
              >{{startBtnContext}}</i-button>
            </Form-item>
            <Divider />
            <Form-item label="请求数据">
              <Tooltip placement="top" style="width: 100%">
                <i-input
                  v-model="socketUDPServerResData"
                  type="textarea"
                  :autosize="{minRows: 31,maxRows: 31}"
                  placeholder="Hello World"
                ></i-input>
                <div slot="content">
                  <p>客户端请求的数据</p>
                </div>
              </Tooltip>
            </Form-item>
          </i-form>
        </Tab-pane>
        <Tab-pane label="WebServiceServer" name="webServiceServer">
          <i-form :model="formItem" label-position="right" :label-width="80">
            <Form-item label="地址" required>
              <Tooltip placement="bottom" style="width: 100%">
                <i-input v-model="formItem.webServiceServerUrl" placeholder="/rest"></i-input>
                <div slot="content">
                  <p>启动成功之后参数列表地址</p>
                  <p>{ http://ip:端口/地址?wsdl }</p>
                  <p>例如:http://127.0.0.1:7777/path?wsdl</p>
                </div>
              </Tooltip>
            </Form-item>
            <Form-item label="端口" required>
              <i-input v-model="formItem.webServiceServerPort" placeholder="0000"></i-input>
            </Form-item>
            <Form-item label="文件路径">
              <Tooltip placement="bottom" style="width: 100%">
                <i-input v-model="formItem.webServiceServerFilePath" placeholder="/tmp/test.txt"></i-input>
                <div slot="content">
                  <p>响应数据可以是一个json或者txt的文件</p>
                  <p>传入路径即可</p>
                </div>
              </Tooltip>
            </Form-item>
            <Form-item label="响应数据">
              <Tooltip placement="bottom" style="width: 100%">
                <i-input
                  v-model="formItem.webServiceServerTextArea"
                  type="textarea"
                  :autosize="{minRows: 8,maxRows: 8}"
                  placeholder="Hello World"
                ></i-input>
                <div slot="content">
                  <p>在输入框中直接输入想要返回的数据,</p>
                  <p>若使用该选项则无需填写文件路径</p>
                  <p>例如: Hello World</p>
                </div>
              </Tooltip>
            </Form-item>
            <Form-item style="position: relative; top: 10px">
              <i-button
                :type="btnType"
                size="small"
                :loading="spinFlag"
                @click="handleStart('webServiceServer')"
              >{{startBtnContext}}</i-button>
            </Form-item>
            <Divider />
            <Form-item label="请求数据">
              <Tooltip placement="top" style="width: 100%">
                <i-input
                  v-model="webServiceServerResData"
                  type="textarea"
                  :autosize="{minRows: 20,maxRows: 30}"
                  placeholder="Hello World"
                ></i-input>
                <div slot="content">
                  <p>客户端请求的数据</p>
                </div>
              </Tooltip>
            </Form-item>
          </i-form>
        </Tab-pane>
        <Tab-pane label="ActiveMqReceiver" name="activeMqReceiver">
          <i-form :model="formItem" label-position="right" :label-width="80">
            <Form-item label="MQ地址" required>
              <i-input v-model="formItem.activeMqUrl" placeholder="tcp://0.0.0.0:61616"></i-input>
            </Form-item>
            <Form-item label="模式" required>
              <Radio-group v-model="formItem.activeMqFlag">
                  <Radio label="true">Queue</Radio>
                  <Radio label="false">Topic</Radio>
              </Radio-group>
           </Form-item>
            <Form-item label="队列名称" required>
              <i-input v-model="formItem.activeMqQueueName" placeholder="queue"></i-input>
            </Form-item>
            <Form-item label="用户名">
              <i-input v-model="formItem.activeMqUserName" placeholder="username"></i-input>
            </Form-item>
            <Form-item label="密码">
              <i-input v-model="formItem.activeMqPassWord" placeholder="password"></i-input>
            </Form-item>
            <Form-item style="position: relative; top: 10px">
              <i-button
                :type="btnType"
                size="small"
                :loading="spinFlag"
                @click="handleStart('activeMqReceiver')"
              >{{startBtnContext}}</i-button>
            </Form-item>
            <Divider />
            <Form-item label="接收数据">
              <Tooltip placement="top" style="width: 100%">
                <i-input
                  v-model="activeMqResData"
                  type="textarea"
                  :autosize="{minRows: 25,maxRows: 25}"
                  placeholder="Hello World"
                ></i-input>
                <div slot="content">
                  <p>接收到的数据</p>
                </div>
              </Tooltip>
            </Form-item>
          </i-form>
        </Tab-pane>
        <Tab-pane label="RabbitMqReceiver" name="rabbitMqReceiver">
          <i-form :model="formItem" label-position="right" :label-width="80">
            <Form-item label="MQ地址" required>
              <i-input :value.sync="formItem.rabbitUrl" placeholder="Rabbit MQ 地址"></i-input>
            </Form-item>
            <Form-item label="队列名称" required>
              <i-input :value.sync="formItem.rabbitQueueName" placeholder="队列名称"></i-input>
            </Form-item>
            <Form-item label="用户名" required>
              <i-input :value.sync="formItem.rabbitUserName" placeholder="用户名"></i-input>
            </Form-item>
            <Form-item label="密码" required>
              <i-input :value.sync="formItem.rabbitPassWord" placeholder="密码"></i-input>
            </Form-item>
            <Form-item label="交换机">
               <Tooltip content="若不采用交换机模式, 可不填写" style="width: 100%">
                <i-input :value.sync="formItem.rabbitExchange" placeholder="交换机名称, 非必填选项"></i-input>
               </Tooltip>
            </Form-item>
            <Form-item label="路由模式">
               <Tooltip content="若不采用路由模式, 无需勾选" style="width: 100%" placement="bottom-start">
                    <RadioGroup v-model="formItem.rabbitRouterModel">
                      <Radio label="topic">topic</Radio>
                      <Radio label="direct">direct</Radio>
                   </RadioGroup>
                </Tooltip>
            </Form-item>
            <Form-item label="路由标识">
              <Tooltip content="若采用路由模式, 填写对应标识符" style="width: 100%">
               <i-input :value.sync="formItem.rabbitRouterKey" placeholder="在topic模式下, #：表示匹配一个或多个词；（lazy.#.b.c）  *：表示匹配一个词；（*.orange.b）"></i-input>
              </Tooltip>
            </Form-item>
            <FormItem label="持久化">
              <!-- <Tooltip content="队列是否持久化, 默认关闭" style="width: 100%" placement="bottom-start"> -->
              <i-switch v-model="formItem.rabbitDurable">
                  <span slot="open">on</span>
                  <span slot="close">off</span>
              </i-switch>
              <!-- </Tooltip> -->
          </FormItem>
            <Form-item style="position: relative; top: 10px">
              <i-button
                :type="btnType"
                size="small"
                :loading="spinFlag"
                @click="handleStart('rabbitMqReceiver')"
              >{{startBtnContext}}</i-button>
            </Form-item>
            <Divider />
            <Form-item label="接收数据">
              <Tooltip placement="top" style="width: 100%">
                <i-input
                  v-model="rabbitMqResData"
                  type="textarea"
                  :autosize="{minRows: 20,maxRows: 20}"
                  placeholder="Hello World"
                ></i-input>
                <div slot="content">
                  <p>获取到的数据</p>
                </div>
              </Tooltip>
            </Form-item>
          </i-form>
        </Tab-pane>
        <Tab-pane label="KafkaReceiver" name="KafkaReceiver">
          <i-form :model="formItem" label-position="right" :label-width="80">
            <Form-item label="Host" required>
              <Tooltip content="Kafka集群地址, 多个用逗号隔开" style="width: 100%">
                <i-input :value.sync="formItem.input" placeholder="/rest"></i-input>
              </Tooltip>
            </Form-item>
            <Form-item label="Topic" required>
              <i-input :value.sync="formItem.input" placeholder="0000"></i-input>
            </Form-item>
            <Form-item label="GroupID" required>
              <i-input :value.sync="formItem.input" placeholder="0000"></i-input>
            </Form-item>
            <Form-item style="position: relative; top: 10px">
              <i-button type="primary" size="small">启动</i-button>
              <i-button type="primary" size="small" style="margin-left: 8px">停止</i-button>
            </Form-item>
            <Divider />
            <Form-item label="接收数据">
              <Tooltip placement="top" style="width: 100%">
                <i-input
                  :value.sync="formItem.textarea"
                  type="textarea"
                  :autosize="{minRows: 29,maxRows: 29}"
                  placeholder="Hello World"
                ></i-input>
                <div slot="content">
                  <p>接收到的数据</p>
                </div>
              </Tooltip>
            </Form-item>
          </i-form>
        </Tab-pane>
        <Tab-pane label="IbmMQReceiver" name="IbmMQReceiver">
          <i-form :model="formItem" label-position="right" :label-width="80">
            <Form-item label="host" required>
              <i-input :value.sync="formItem.input" placeholder="/rest"></i-input>
            </Form-item>
            <Form-item label="port" required>
              <i-input :value.sync="formItem.input" placeholder="/rest"></i-input>
            </Form-item>
            <Form-item label="manager" required>
              <i-input :value.sync="formItem.input" placeholder="/rest"></i-input>
            </Form-item>
            <Form-item label="channel" required>
              <i-input :value.sync="formItem.input" placeholder="/rest"></i-input>
            </Form-item>
            <Form-item label="queue" required>
              <i-input :value.sync="formItem.input" placeholder="/rest"></i-input>
            </Form-item>
            <Form-item label="ccsid" required>
              <i-input :value.sync="formItem.input" placeholder="/rest"></i-input>
            </Form-item>
            <Form-item label="用户名" required>
              <i-input :value.sync="formItem.input" placeholder="/rest"></i-input>
            </Form-item>
            <Form-item label="密码" required>
              <i-input :value.sync="formItem.input" placeholder="0000"></i-input>
            </Form-item>
            <Form-item style="position: relative; top: 10px">
              <i-button type="primary" size="small">启动</i-button>
              <i-button type="primary" size="small" style="margin-left: 8px">停止</i-button>
            </Form-item>
            <Divider />
            <Form-item label="接收数据">
              <Tooltip placement="top" style="width: 100%">
                <i-input
                  :value.sync="formItem.textarea"
                  type="textarea"
                  :autosize="{minRows: 19,maxRows: 19}"
                  placeholder="Hello World"
                ></i-input>
                <div slot="content">
                  <p>接收到的数据</p>
                </div>
              </Tooltip>
            </Form-item>
          </i-form>
        </Tab-pane>
        <Tab-pane label="SyslogReceiver" name="SyslogReceiver">
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
                <i-input
                  :value.sync="formItem.textarea"
                  type="textarea"
                  :autosize="{minRows: 8,maxRows: 8}"
                  placeholder="Hello World"
                ></i-input>
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
            <Divider />
            <Form-item label="请求数据">
              <Tooltip placement="bottom-end" style="width: 100%">
                <i-input
                  :value.sync="formItem.textarea"
                  type="textarea"
                  :autosize="{minRows: 20,maxRows: 30}"
                  placeholder="Hello World"
                ></i-input>
                <div slot="content">
                  <p>可以在输入框中直接输入想要返回的数据</p>
                  <p>例如: Hello World</p>
                </div>
              </Tooltip>
            </Form-item>
          </i-form>
        </Tab-pane>
      </Tabs>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      btnType: "primary",
      spinFlag: false,
      startBtnContext: "启动",
      websock: null,
      intergrationStatus: 0,
      formItem: {
        activeTab: "http",
        charset: "UTF-8",
        type: "",
        httpUrl: "/rest",
        httpPort: "10010",
        httpFilePath: "",
        httpTextArea: "",
        socketTCPServerPort: "10010",
        socketTCPServerFilePath: "",
        socketTCPServerTextArea: "",
        socketUDPServerPort: "10010",
        webServiceServerUrl: "/webservice",
        webServiceServerPort: "10010",
        webServiceServerFilePath: "",
        webServiceServerTextArea: "",
        activeMqFlag: "true",
        activeMqUrl: "tcp://0.0.0.0:61616",
        activeMqUserName: "admin",
        activeMqPassWord: "admin",
        activeMqQueueName: "queue1",
        rabbitUrl: "192.168.1.162",
        rabbitQueueName: "queue",
        rabbitUserName: "test",
        rabbitPassWord: "test",
        rabbitExchange: "",
        rabbitRouterModel: "",
        rabbitRouterKey: "",
        rabbitDurable: false,
      },
      responseData: "",
      socketTCPServerResData: "",
      socketUDPServerResData: "",
      webServiceServerResData: "",
      activeMqResData: "",
      rabbitMqResData: "",
    };
  },
  methods: {
    checkRunStatus() {
      this.request
        .request(
          "post",
          this.baseUrl + "/person/checkIntergrationstatus",
          "",
          ""
        )
        .then(res => {
          this.spinFlag = false;
          this.btnType = "primary";
          if (res.data.status === 1) {
            this.startBtnContext = "停止";
            const modelType = res.data.type;
            this.formItem.activeTab = modelType;
            this.formItem.type = modelType;
            if (modelType === "http") {
              this.formItem.httpUrl = res.data.httpUrl;
              this.formItem.httpPort = res.data.httpPort;
              this.formItem.httpTextArea = res.data.httpTextArea;
              this.formItem.httpFilePath = res.data.httpFilePath;
            } else if (modelType === "socketTcpServer") {
              this.formItem.socketTCPServerPort = res.data.socketTCPServerPort;
              this.formItem.socketTCPServerFilePath =
                res.data.socketTCPServerFilePath;
              this.formItem.socketTCPServerTextArea =
                res.data.socketTCPServerTextArea;
            } else if (modelType === "socketUdpServer") {
              this.formItem.charset = res.data.charset;
              this.formItem.socketUDPServerPort = res.data.socketUDPServerPort;
            } else if (modelType === "webServiceServer") {
              this.formItem.webServiceServerUrl = res.data.webServiceServerUrl;
              this.formItem.webServiceServerPort =
                res.data.webServiceServerPort;
              this.formItem.webServiceServerTextArea =
                res.data.webServiceServerTextArea;
              this.formItem.webServiceServerFilePath =
                res.data.webServiceServerFilePath;
            } else if (modelType === "activeMqReceiver") {
              this.formItem.activeMqUrl = res.data.activeMqUrl;
              this.formItem.activeMqFlag = res.data.activeMqFlag;
              this.formItem.activeMqUserName =res.data.activeMqUserName;
              this.formItem.activeMqPassWord =res.data.activeMqPassWord;
              this.formItem.activeMqQueueName = res.data.activeMqQueueName;
             }else if (modelType === "rabbitMqReceiver") {
              this.formItem.rabbitUrl = res.data.rabbitUrl;
              this.formItem.rabbitQueueName = res.data.rabbitQueueName;
              this.formItem.rabbitUserName =res.data.rabbitUserName;
              this.formItem.rabbitPassWord =res.data.rabbitPassWord;
              this.formItem.rabbitExchange = res.data.rabbitExchange;
              this.formItem.rabbitRouterModel = res.data.rabbitRouterModel;
              this.formItem.rabbitRouterKey = res.data.rabbitRouterKey;
              this.formItem.rabbitDurable = res.data.rabbitDurable;
            }
          } else {
            this.startBtnContext = "启动";
          }
        });
    },
    handleStart(type) {
      this.spinFlag = true;
      this.formItem.type = type;
      if (this.startBtnContext === "启动") {
        this.startBtnContext = "启动中";
        this.btnType = "warning";
        this.request
          .request(
            "post",
            this.baseUrl + "/person/receiverstart",
            "",
            this.formItem
          )
          .then(res => {
            this.$Notice.success({
              title: "启动成功",
              // desc: "这条通知不会自动关闭，需要点击关闭按钮才可以关闭。",
              duration: 0
            });
            this.checkRunStatus();
          });
      } else {
        this.startBtnContext = "停止中";
        this.btnType = "warning";
        this.request
          .request(
            "post",
            this.baseUrl + "/person/receiverstart",
            "",
            this.formItem
          )
          .then(res => {
            this.$Notice.success({
              title: "停止成功",
              duration: 2
            });
            this.checkRunStatus();
          });
      }
    },
    initWebSocket() {
      //初始化weosocket
      this.websock = new WebSocket("ws://127.0.0.1:9763/websocket/felix/util");
      this.websock.onmessage = this.websocketonmessage;
      this.websock.onopen = this.websocketonopen;
      this.websock.onerror = this.websocketonerror;
      this.websock.onclose = this.websocketclose;
    },
    websocketonopen() {
      //连接建立之后执行send方法发送数据
      let actions = "webSocketUtilClient";
      this.websocketsend(actions);
    },
    websocketonerror() {
      //连接建立失败重连
      this.initWebSocket();
    },
    websocketonmessage(e) {
      //数据接收
      const redata = e.data;
      if (this.formItem.type === "http") {
        if (this.responseData.length > 50000) {
          this.responseData = "";
        }
        this.responseData += redata;
      } else if (this.formItem.type === "socketTcpServer") {
         if (this.socketTCPServerResData.length > 50000) {
          this.socketTCPServerResData = "";
        }
        this.socketTCPServerResData += redata;
      } else if (this.formItem.type === "socketUdpServer") {
         if (this.socketUDPServerResData.length > 50000) {
          this.socketUDPServerResData = "";
        }
        this.socketUDPServerResData += redata;
      } else if (this.formItem.type === "webServiceServer") {
         if (this.webServiceServerResData.length > 50000) {
          this.webServiceServerResData = "";
        }
        this.webServiceServerResData += redata;
      } else if (this.formItem.type === "activeMqReceiver") {
         if (this.activeMqResData.length > 50000) {
          this.activeMqResData = "";
        }
        this.activeMqResData += redata;
      } else if (this.formItem.type === "rabbitMqReceiver") {
         if (this.rabbitMqResData.length > 50000) {
          this.rabbitMqResData = "";
        }
        this.rabbitMqResData += redata;
      }
    },
    websocketsend(Data) {
      //数据发送
      this.websock.send(Data);
    },
    websocketclose(e) {
      //关闭
      console.log("断开连接", e);
    }
  },

  mounted() {
    this.checkRunStatus();
  },
  created() {
    this.initWebSocket();
  },
  destroyed() {
    this.websock.close(); //离开路由之后断开websocket连接
  }
};
</script>