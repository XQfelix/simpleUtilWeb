<template>
  <div>
    <Upload
      multiple
      ref="upload"
      type="drag"
      :on-error="handleError"
      :on-success="handleSuccess"
      :action="uploadUrl"
    >
      <div style="padding: 5px 0">
        <Icon type="ios-cloud-upload" size="52" style="color: #2d8cf0"></Icon>
        <p>点击 或 拖拽进行文件上传</p>
      </div>
    </Upload>
    <Table :loading="loading" size="small" :columns="thead" :data="tbody" border></Table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      uploadUrl: this.baseUrl + "/person/file/upload",
      loading: false,
      thead: [
        {
          title: "文件名称",
          key: "filename",
          resizable: true,
        },
        {
          title: "路径",
          key: "filepath",
          resizable: true,
        },
        {
          title: "大小",
          key: "filesize",
          resizable: true
        },
        {
          title: "上传时间",
          key: "filetime",
          resizable: true
        },
        {
          title: "操作",
          key: "action",
          width: 135,
          align: "center",
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "text",
                    size: "small",
                    icon: "md-download",
                  },
                  style: {
                    marginRight: "8px"
                  },
                  on: {
                    click: () => {
                      this.downLoad(params);
                    }
                  }
                },
                // "下载"
              ),

              h(
                "Button",
                {
                  props: {
                    type: "text",
                    size: "small",
                    icon: "md-trash",
                  },
                  on: {
                    click: () => {
                      this.remove(params);
                    }
                  }
                },
                // "删除"
              )
            ]);
          }
        }
      ],
      tbody: []
    };
  },
  methods: {
    // 文件加载
    getFileList() {
      this.loading = true;
      this.request
        .request(
          "get",
          this.baseUrl + "/person/file/getallfile",
          "",
          ""
        )
        .then(res => {
          this.loading = false;
          if(res.data.length>0){
            this.tbody = res.data;
          }
        });
    },
    // 删除文件
    remove(param) {
      this.request
        .request(
          "get",
          this.baseUrl + "/person/file/delete?filename=" + param.row.filename + "&fileindex=" + param.index,
          "",
          ""
        )
        .then(res => {
          this.tbody.splice(param.index, 1);
          this.$Message["success"]({
            background: true,
            content: "删除成功!"
          });
        });
    },
    // 上传成功回调
    handleSuccess(res, file) {
      this.$refs["upload"].clearFiles();
      this.$Message["success"]({
        background: true,
        content: "上传成功!"
      });
      this.getFileList();
    },
    // 上传失败回调
    handleError(res, file) {
      this.$refs["upload"].clearFiles();
      this.$Message["error"]({
        background: true,
        content: "上传失败!"
      });
    },
    // 文件下载
    downLoad(param) {
      this.$Loading.start();
      this.loading = true;
      this.axios({
        url: this.baseUrl + "/person/file/download",
        method: "POST",
        data: param.row.filename,
        responseType: "blob"
      })
        .then(res => {
          let url = window.URL.createObjectURL(new Blob([res.data]));
          let link = document.createElement("a");
          link.href = url;
          link.setAttribute("target", "_blank");
          link.setAttribute("download", param.row.filename);
          document.body.appendChild(link);
          link.click();
          this.$Message["success"]({
            background: true,
            content: "下载完成!"
          });
          this.$Loading.finish();
          this.loading = false;
        })
        .catch(e => {
          this.$Message["error"]({
            background: true,
            content: "下载失败!"
          });
          this.$Loading.error();
          this.loading = false;
        });
    }
  },
  mounted(){
      this.getFileList();
  }
};
</script>
