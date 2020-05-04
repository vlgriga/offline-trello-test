export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('trello-offline');

        if(serializedState === null) {
            return undefined;
        }

        return JSON.parse(serializedState);
    } catch (err) {
        console.log("Load State", err);
    }
}

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('trello-offline', serializedState);
    } catch (err) {
        console.log("Save State", err);
    }
}