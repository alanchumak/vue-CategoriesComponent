<template>
    <ul>
        <li v-for="item in categories" :key="item.id"> 
            <Category :category="item" />
        </li>
    </ul>
</template>
<style scoped>
ul {
    list-style-type: none;
    padding-inline-start: 0;
    margin-block-start: 0;
}

li {
    margin-bottom: 5px;
}
</style>


<script>
import Category from './Category.vue'
import store from './store.js'
export default {
    components: { Category },
    data(){
        return {
            categories: store.data
        }
    }
}
</script>

