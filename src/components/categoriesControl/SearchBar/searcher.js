export const nodeParentsById = (id, data) => {
    const isFoundChild = (id, data, parents) => {
        if (data.find(item => item.id == id)) {
            return true;
        }
        else {
            for (let item of data) {
                if (item.children.length)
                    if (isFoundChild(id, item.children)) {
                        parents.push(item);
                        return true;
                    }
            }
            return false;
        }
    }

    const parents = [];
    if (data.find(item => item.id == id))
        return [];
    else {
        for (let item of data) {
            if (item.children.length)
                if (isFoundChild(id, item.children, parents)) {
                    parents.push(item);
                    return parents;
                }
        }
    }
}



export function getNodeBySerachTerm(data, searchTerm) {
    searchTerm = searchTerm.toLowerCase();
    if (data) {
        for (let i = 0; i < data.length; i++) {
            let lowCaseName = data[i].name.toLowerCase();
            if (lowCaseName.startsWith(searchTerm))
                return data[i];
            let found = getNodeBySerachTerm(data[i].children, searchTerm);
            if (found)
                return found;
            // return this.getNodeBySerachTerm(data[i].nodes, searchTerm);
        }
    }
}