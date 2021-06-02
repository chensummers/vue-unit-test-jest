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
import {userService} from './api'
export default {
  name: "TestUnit",
  components: {
    Test
  },
  mounted() {
    userService().then(res=>{
      console.log('/TestUnit.vue [20--view]--1',res);
    })
  }
};
</script>
