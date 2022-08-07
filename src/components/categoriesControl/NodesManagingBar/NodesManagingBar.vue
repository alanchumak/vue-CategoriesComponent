<template>
    <div>
        <button class="selectAll" @click="selectAll"></button>
        <button class="deselectAll" @click="deselectAll"></button>
        <button class="expandAll" @click="expandAll"></button>
        <button class="collapseAll" @click="collapseAll"></button>
    </div>
</template>


<script>
import store from '../store'

export default {
   methods: {
        selectAll(){
           store.allNodesSelected()
        },
        deselectAll(){
            store.allNodesDeselected()
        },
        expandAll(){
            store.allNodesExpanded()
        },
        collapseAll(){
            store.allNodesCollapsed()
        }
   }
}
</script>


<style scoped>
div {
    margin: 5px 0 10px 0;
}

button {
    height: 25px;
    border: none;
    padding: 6px;
}

.selectAll {
    background: url('./icons/selectAll.png');
    width: 53px;
}

.deselectAll {
    background: url('./icons/deselectAll.png');
    width: 53px;
    margin: 0 5px;
}

.expandAll {
    background: url('./icons/expandAll.png');
    width: 44px;
}

.collapseAll {
    background: url('./icons/collapseAll.png');
    width: 44px;
    margin-left: 5px;
}
</style>


