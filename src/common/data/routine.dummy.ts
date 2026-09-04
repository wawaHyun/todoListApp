import { IGgroup, IMessenger, IRecord } from "@/domain/common.model";
import { IRoutine } from "@/domain/routine.model"

export const routineDummy: IRoutine[] = [
    { id: 0, name: '영어 voca 5개' , ggroupId:0 },
    { id: 1, name: '일본어 voca 5개', ggroupId:0 },
    { id: 2, name: 'Youtube 생활영어 10분', ggroupId:1 },
    { id: 3, name: 'Youtube 생활일본어 10분', ggroupId:1 },
    { id: 4, name: '숨쉬기', ggroupId:2 },
    { id: 5, name: '걷기', ggroupId:2 },
]

export const recordDummy: IRecord[] = [
    { id: 0, status: true, date:'2026-09-31', completedAt: '2026-10-21', deletedAt:'', routineId:1 },
    { id: 1, status: false, date:'2026-09-31', completedAt: '', deletedAt:'', routineId:5 },
    { id: 2, status: true, date:'2026-09-30', completedAt: '2026-10-21', deletedAt:'', routineId:5 },
    { id: 3, status: false, date:'2026-09-30', completedAt: '',deletedAt:'', routineId:3 },
    { id: 4, status: false, date:'2026-09-31', completedAt: '', deletedAt:'', routineId:2 },
    { id: 5, status: true, date:'2026-09-30', completedAt: '2026-10-21', deletedAt:'', routineId:1 },
    { id: 6, status: false, date:'2026-09-30', completedAt: '', deletedAt:'', routineId:4 },
];

export const groupDummy: IGgroup[] = [
    { id: 0, name: 'English' },
    { id: 1, name: 'Japanese' },
    { id: 2, name: '운동!' },
];

export const todoDummy: IRoutine[] = [
    { id: 0, name: '물마시기' },
    { id: 1, name: '갤럭시 체크' },
]


export const messengerDummy: IMessenger[] = [
    { id: 0, message: 'falseDummy' },
    { id: 1, message: 'trueDummy' },
]