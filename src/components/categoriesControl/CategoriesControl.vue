<template>
    <div class="control">
        <div class="leftPart">
            <div style="white-space: nowrap">
                <SearchBar />
                <NodesManagingBar />
            </div>
            <CategoriesList />
        </div>
        <div class="pathTable">
            <PathTable />
        </div>
    </div>
</template>


<style scoped>
.control{
    display: flex;
}

.leftPart {
    padding-right: 10px;
    border-right: 1px dashed gray;
}

.pathTable{
    margin-left: 10px;
}
</style>


<script>
import CategoriesList from './CategoriesList.vue'
import SearchBar from './SearchBar/SearchBar.vue'
import PathTable from './PathTable/PathTable.vue'
import NodesManagingBar from './NodesManagingBar/NodesManagingBar.vue'
export default {
    components: { CategoriesList, SearchBar, PathTable, NodesManagingBar },
    
}
</script>