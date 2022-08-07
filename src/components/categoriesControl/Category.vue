<template>
    <div>
        <input type="checkbox" :checked="isSelected" @change="onSelected" />
        <button :class="{focused: isFocused}" @click="onExpanded">
            {{ category.name }}
        </button>
    </div>
    <ul v-if="isExpanded">
        <li v-for="item in category.children" :key="item.id">
            <Category :category="item" />
        </li>
    </ul>
</template>


<style scoped>



input {
    width: 1rem;
    height: 1rem;
    background-color: blue;
    margin: 0 3px 0 0;
}

ul {
    list-style-type: none;
    margin-top: 5px;
}

ul ul {
    padding-left: 25px;
}

li {
    margin-bottom: 5px;
}

button{
    border: none;
    background-color: transparent;
    padding-bottom: 0;
}

div{
    display: flex;
}

.focused {
    background-color: rgba(128, 128, 128, 0.459);
    /* border: none; */
}
</style>


<script>
import store from './store.js'

export default {
    props: ['category'],
    computed: {
        isSelected(){
            return store.selectedNodes[this.category.id]
        },
        isExpanded(){
            return store.expandedNodes[this.category.id]
        },
        isFocused(){
            return store.focusedNode == this.category.id
        }
    },
    methods: {
        onSelected(){
            store.nodeSelected(this.category.id)
        },
        onExpanded() {
            store.nodeExpanded(this.category.id)
        }
    }
}
</script>