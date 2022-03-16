<template>
  <el-upload
    :on-success="onFileChange"
  >
    <i class="el-icon-upload"></i>
    <div
      class="el-upload__text el-upload-text"
    >Click to upload a data here</div>
    <div
      class="el-upload__tip el-upload-text el-form-item__content"
      slot="tip"
    >
      DROP your data here INFO
    </div>  
  </el-upload>
  <el-upload
    :on-success="onSuccess"
    :limit="1"
  >
    <i class="el-icon-upload"></i>
    <div
      class="el-upload__text el-upload-text"
    >{{ "Click to upload a file here" }}</div>
    <div
      class="el-upload__tip el-upload-text el-form-item__content"
      slot="tip"
    >
      DROP your file here INFO
    </div>  
  </el-upload>
</template>
<script>
  import 'element-plus/dist/index.css';
  import carboneSDK from "carbone-sdk-js";

  export default {
    data() {
      return {
        file_data: "123",
      }
    },
    methods: {
      onFileChange(response, file, fileList) {
        this.readFile(file.raw);
      },
      readFile(file) {
        let reader = new FileReader();
        reader.onload = e => {
          console.log(e.target.result);
          let json = JSON.parse(e.target.result);
          console.log('before data is', this.file_data);
          this.file_data = json;
          console.log('json data??', json);
        };
        reader.readAsText(file);
      },      
      onSuccess(response, file, fileList) {
        console.log('on success response', response);
        console.log('file is', file);
        console.log('file list', fileList);
        let _template = file.raw;
        // SDK constructor, the access token have to be passed as an argument to carboneRenderSDK
        const _carboneService = carboneSDK("test_eyJhbGciOiJFUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiI1MzIyIiwiYXVkIjoiY2FyYm9uZSIsImV4cCI6MjI3NzY4MzM4MSwiZGF0YSI6eyJpZEFjY291bnQiOjUzMjJ9fQ.ANZaLAiG84GuhP4OV8l2jH3eKjH754B9o6RtsFlvDYWNmLHb3DMo8bGxN0gcuMdXwJtHNoe9lkMboV99Ul0QvrsfAGLqGVpZd6bnoYanPmFdRxFTZzneaA3ZvWVKjxCXCH6g4f5_jTQW4dyiNkleQF6YthgRPy1aMXLwpKgF7OGgoIic");
        // Template from a file input OR template ID
        // Data from an input, for example: {"data" :{"firstname":"John","lastname":"Wick"},"convertTo":"pdf"}
        // Render the report from an DOCX template and a JSON Data
        console.log('proxy template', {...file});
        console.log('_template is',_template);
        console.log('uploading files...', {...this.file_data});
        _carboneService.render({...file}, {...this.file_data}).then(({ content, name }) => {
          // name == report name as a String
          console.log('content is??', content);
          console.log('name', name)
          // content == report content as a Blob, it can be used to download the file
        });

      },
    }
  }

</script>