<template>
  <div class="test-unit">
    <Test title="This is Test Unit!">
      <br />
      <div>this is slot</div>
    </Test>
  </div>
</template>

<script>
// @ is an alias to /src
import Test from "@/components/Test.vue";

export default {
  name: "TestUnit",
  components: {
    Test
  },
  mounted() {
    this.$http.get('/user').then(res=>{
      console.log('/TestUnit.vue [20]--1',res);
    })
  }
};
</script>
