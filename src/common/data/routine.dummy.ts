import { IGgroup, IMessenger, IRecord } from "@/domain/common.model";
import { IRoutine } from "@/domain/routine.model"

export const routineDummy: IRoutine[] = [
    { id: 0, name: '영어 voca 5개' },
    { id: 1, name: '일본어 voca 5개' },
    { id: 2, name: 'Youtube 생활영어 10분' },
    { id: 3, name: 'Youtube 생활일본어 10분' },
    { id: 4, name: '숨쉬기' },
    { id: 5, name: '걷기' },
]

export const recordDummy: IRecord[] = [
    { id: 0, status: false, completedAt: '2026-08-19', },
    { id: 1, status: false, completedAt: '', },
    { id: 2, status: true, completedAt: '2026-08-21', },
    { id: 3, status: false, completedAt: '', },
    { id: 4, status: true, completedAt: '', },
    { id: 5, status: false, completedAt: '2026-08-21', },
    { id: 6, status: false, completedAt: '', },
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