<template>
  <div>
    <el-row style="height: 100%;">
      <el-col :span="8" :offset="8" class="register-box">
        <el-row>
          <el-col :span="16" :offset="4">
            <el-form :model="queryForm" ref="queryForm" label-width="100px">
              <h2>注册页面</h2>
              <el-form-item label="地址:" prop="address">
                <input type="primary" 选手选填部分 v-model="选手选填部分" />
              </el-form-item>
              <el-form-item label="角色:" prop="role">
                选手选填部分
              </el-form-item>
              <el-form-item label="密码:" prop="password">
                <input type="primary" 选手选填部分 v-model="选手选填部分" show-password />
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>

        <el-row style="margin-bottom: 20px">
          <el-col :span="16" :offset="4">
            <el-button type="primary" 选手选填部分 round>注册</el-button>
            <el-button type="primary" @click="handleReset('queryFrom')" round>重置</el-button>
            <el-button type="primary" 选手选填部分 round>返回</el-button>
          </el-col>
        </el-row>
      </el-col>

    </el-row>
  </div>
</template>

<script>

export default {
  name: "Register",
  data () {
    return {
      registerdata: {
        address: '',
        role: '',
        password: ''
      }
    }
  },
  methods: {
    register: function() {
      // 表单信息检查
      // 选手选填部分

      this.axios.post('/account/register', this.registerdata).then((response) => {
        if (response.data.code == 选手选填部分) {
          alert('选手选填部分')
          this.$router.push('/login')
        } else {
          alert(`选手选填部分, ${response.data.data}`)
        }
      })
    },
    goback: function() {
      // 选手选填部分
    },
    handleReset (form) {
      this.registerdata.address = ""
      this.registerdata.role = ""
      this.registerdata.password = ""
      console.log(form);
    }
  },

}
</script>

<style>
.register-box {
  border-style: solid;
  border-color: #e6e6e6;
  margin-top: 5%;
  /* background-color:rgba(255,255,255,0.7); */
  background-color: #d1dbe5
}
</style>