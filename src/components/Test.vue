<template>
    <div class="test">
        <div>{{title}}</div>
        <br />
        <div>
            <label>checkbox :</label>
            <input type="checkbox" :value="checked" @change="handleCheck"/>
        </div>
        <slot />
    </div>
</template>
<script>
    export default {
        name:'test',
        data() {
            return {
                checked: false
            }
        },
        props:{
            title:String
        },
        methods:{
            handleCheck (e) {
                let value = e.target.value;
            }
        }
    }
</script>
