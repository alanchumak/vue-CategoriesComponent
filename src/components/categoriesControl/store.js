
import { reactive } from 'vue'
import data from './data.js'


const store = reactive({
    selectedNodes: getNodesSelectedState(data),
    expandedNodes: getNodesExpandedState(data),
    data,
    focusedNode: data[0].id,
    nodeSelected(id) { 
        this.selectedNodes[id] = !this.selectedNodes[id] 
    },
    nodeExpanded(id) {
        this.expandedNodes[id] = !this.expandedNodes[id]
        this.focusedNode = id    
    },
    nodeFiltered(parentsId, id){
        parentsId.forEach(id => this.expandedNodes[id] = true)
        this.focusedNode = id   
    },
    allNodesExpanded() {
        for (let id in this.expandedNodes)
            this.expandedNodes[id] = true
    },
    allNodesCollapsed() {
        for (let id in this.expandedNodes)
            this.expandedNodes[id] = false
        this.focusedNode = this.data[0].id
    },
    allNodesDeselected() {
        for (let id in this.expandedNodes) {
            this.expandedNodes[id] = true
            this.selectedNodes[id] = false
        }
    },
    allNodesSelected() {
        for (let id in this.expandedNodes) {
            this.expandedNodes[id] = true
            this.selectedNodes[id] = true
        }
    },
})

export default store

function getNodesSelectedState(data, nodesSelectedStateIds = {}) {
    return data.reduce((result, item) => {
        result[item.id] = item.isSelected;
        return getNodesSelectedState(item.children, result);
    }, nodesSelectedStateIds);
}

function getNodesExpandedState(data, nodes = {}) {
    return data.reduce((result, item) => {
        result[item.id] = false;
        return getNodesExpandedState(item.children, result);
    }, nodes);
}