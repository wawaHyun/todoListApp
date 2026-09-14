import { Href } from "expo-router";

export interface IMessenger {
    id?: number,
    message?: string,
    status?: number,
    accessToken?: string,
    refreshToken?: string,
}

export interface IroutineView {
    id?: number,
    gname?: string,
    rname?: string,
    tname?: string,
    status?: boolean,
    date?: string,
    userId?:number,
    ggroupId?: number,
    routineId?: number,
    todoId?: number;
}

export interface IPetScript {
    id?: number,
    script: string[],
}

export interface IMenu {
    id?: number,
    menu: string,
    href: Href,
}