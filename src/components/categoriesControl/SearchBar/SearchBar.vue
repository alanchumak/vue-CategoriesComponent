<template>
    <input placeholder="Поиск..." @input="onFiltered" />
</template>


<script>
import store from '../store';
import { nodeParentsById, getNodeBySerachTerm } from './searcher';

export default {
    methods: {
        onFiltered(e){
            let searchTerm = e.target.value;
            const id = getNodeBySerachTerm(store.data, searchTerm)?.id;
            if (!id) return;
            const parents = nodeParentsById(id, store.data)
            const parentsId = parents.map(item => item.id)
            store.nodeFiltered(parentsId, id)
        }
    },
    data(){ return {text: ''}}
}
</script>


<style scoped>
input {
    width: 96%;
    /* margin-right: 5px; */
}
</style>