// Command Pattern
export const createCommand = (execute: any, undo: any) => ({
    execute,
    undo,
});