export interface IMessenger {
    id?: number,
    message?: string,
    status?: number,
    accessToken?: string,
    refreshToken?: string,
    username?: string,
}

export interface IroutineView {
    id?: number;
    name?: string;
    status?: boolean;
    date?: string;
    ggroupId?: number;
    recordId?: number;
}