<template>
    <table>
        <thead>
            <tr>
                <th>Название</th>
                <th>Путь</th>
            </tr>
        </thead>

        <tbody>
            <PathRow v-for="item in rows" 
                :category="item" 
                :key="item.id" 
            />
        </tbody>
    </table>
</template>


<style scoped>

table {
    border-spacing: 0;
    border-collapse: collapse;
    font-family: system-ui;
    font-size: 14px;
}

thead tr {
    background-color: rgba(128, 128, 128, 0.548);
}

th {
    border-right: 1px solid #fff;
    border-bottom: 1px solid rgba(128, 128, 128, 0.548);
    padding: 5px 20px 5px 10px;
}

</style>


<script>
import store from '../store';
import PathRow from './PathRow.vue'

export default {
    components: {PathRow},
    computed: {
        rows(){
            const rows = [];
            for (let id in store.selectedNodes) {
                if (store.selectedNodes[id]) {
                    let item = getNodeById(store.data, id);
                    rows.push(item)
                }
            }
            return rows;
        }
    }
}

function getNodeById(data, id) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].id == id)
            return data[i];
        let found = getNodeById(data[i].children, id);
        if (found)
            return found;
    }
}
</script>