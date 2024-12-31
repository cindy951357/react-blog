interface Command<T> {
    execute: (state: T) => T;
    undo: (state: T) => T;
}