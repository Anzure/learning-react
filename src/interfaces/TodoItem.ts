export default interface TodoItem {
    id: string;
    name: string;
    completed: boolean;
    added?: Date;
    deadline?: Date;
}