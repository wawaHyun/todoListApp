export interface IRoutine {
    id?: number,
    name?: string,

    userId?:number,
    ggroupId?: number,
}

export interface ITodo {
    id?: number,
    name?: string,

    userId?:number,
}

export interface IRecord {
    id?: number,
    status?: boolean,
    date?: string,
    completedAt?: string,
    deletedAt? : string,

    userId?:number,
    routineId?: number,
    todoId?: number
}

export interface IGgroup {
    id?: number,
    name?: string

    userId?:number,
}
