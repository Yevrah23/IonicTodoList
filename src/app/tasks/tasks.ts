export class Tasks{
    private currentTasks: { taskName: string}[] = [];
    private completedTasks: {taskName: string}[] = [];

    addTask(task: { taskName: string}){
        this.currentTasks.push(task);
        console.log(this.currentTasks);
    }
    getTasks(){
        return this.currentTasks.slice();
    }
    deleteTasks(task:{taskName: string}){
        let index = this.currentTasks.indexOf(task);
        this.currentTasks.splice(index,1);
    }
    editTasks(task: { taskName: string }, newtask:{ taskName: string}) {
        let index = this.currentTasks.indexOf(task);
        this.currentTasks.splice(index,1,newtask);
    }
}