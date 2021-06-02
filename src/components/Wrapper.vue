<template>
    <div class="wrapper">
        <div class="div">div1</div>
        <div class="div">div2</div>
        <p class="p p0">p</p>
        <p class="p0">p0</p>
        <p class="p1">p1</p>
        <p class="p2">p2</p>
        <span class="span">span</span>
        <input type="checkbox" v-model="checked"/>
        <input type="radio" value="radio1" v-model="radio"/>
        <input type="radio" value="radio2" v-model="radio"/>
        <input type="text" v-model="value"/>
        <input type="text" v-model="value"/>
    </div>
</template>
<script>
export default {
    data() {
        return {
            checked:'',
            radio:'radio2',
            value:''
        }
    }
}
</script>

