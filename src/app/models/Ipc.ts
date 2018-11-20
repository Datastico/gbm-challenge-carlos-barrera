import { IpcRow } from './IpcRow';

export interface Ipc {
    result: boolean,
    resultObj: IpcRow[],
    msg: string
}