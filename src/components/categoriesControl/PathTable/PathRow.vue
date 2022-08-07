<template>
    <tr>
        <td>{{category.name}}</td>
        <td>{{path}}</td>
    </tr>
</template>


<style scoped>

td{
    border-bottom: 1px solid rgba(128, 128, 128, 0.548);
    padding: 5px 20px 5px 10px;
}
</style>

<script>
import store from '../store';
import { nodeParentsById } from '../SearchBar/searcher';


export default {
    props: ['category'],
    computed: {
        path(){
            const parents = nodeParentsById(this.category.id, store.data);
            const parentsNames = parents.reverse().map(item => item.name)
            const pathArr = parentsNames.concat(this.category.name)
            const path = pathArr.join('\\');
            return path
        }
    }
}
</script>