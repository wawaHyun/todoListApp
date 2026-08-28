
export interface IRecord {
    id?: number,
    status?: boolean,
    memo?: string,
    completedAt?: string,
    deletedAt? : string,

    routineId?: number,
    todoId?: number
}

export interface IGgroup {
    id?: number,
    name?: string
}

export interface IMessenger {
    id?: number,
    message?: string,
    status?: number,
    accessToken?: string,
    refreshToken?: string,
    username?: string,
}
