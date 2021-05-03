<template>
  <div class="authContainer">
    <Card>
      <div>
        <h2>{{ signInOrRegister }}</h2>
      </div>
      <Form
        class="authForm"
        ref="formInline"
        :model="formInline"
        :rules="ruleInline"
        inline
      >
        <FormItem prop="email" inline>
          <Input
            type="text"
            v-model="formInline.email"
            placeholder="EmailAddress"
          >
            <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem prop="password" inline>
          <Input
            type="password"
            v-model="formInline.password"
            placeholder="Password"
          >
            <Icon type="ios-lock-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem>
          <Button
            shape="circle"
            type="primary"
            @click="handleSubmit('formInline')"
            >{{ signInOrRegister }}</Button
          >
        </FormItem>
      </Form>
    </Card>
  </div>
</template>
<script>
export default {
  props: ["authWay"],
  data() {
    return {
      formInline: {
        email: "",
        password: ""
      },
      ruleInline: {
        email: [
          {
            required: true,
            message: "Please fill in the email address",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "Please fill in the password.",
            trigger: "blur"
          },
          {
            type: "string",
            min: 6,
            message: "The password length cannot be less than 6 bits",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          const formData = {
            email: this.formInline.email,
            password: this.formInline.password
          };
          this.$emit("auth", formData);
          this.$Message.success("Success!");
        } else {
          this.$Message.error("Fail!");
        }
      });
    }
  },
  computed: {
    signInOrRegister() {
      if (this.authWay === "/signin") {
        return "Sign In";
      } else {
        return "Register";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.authForm {
  display: flex;
  flex-direction: column;
  align-items: center;
  .ivu-form-item {
    width: 30%;
  }
}
</style>
