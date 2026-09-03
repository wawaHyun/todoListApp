export interface IRoutine {
    id?: number,
    name?: string,

    ggroupId?: number,
}

export interface ITodo {
    id?: number,
    name?: string,

}


export interface IroutineView {
    id?: number;
    name?: string;
    status?: boolean;
    date?: string;
    ggroupId?: number;
}
