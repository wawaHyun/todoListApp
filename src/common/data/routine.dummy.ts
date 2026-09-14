
import { IMessenger, IroutineView } from "@/domain/common.model";
import { IGgroup, IRecord, IRoutine } from "@/domain/routine.model"

export const routineDummy: IRoutine[] = [
    { id: 0, name: '영어 voca 5개' , ggroupId:0 },
    { id: 1, name: '일본어 voca 5개', ggroupId:0 },
    { id: 2, name: 'Youtube 생활영어 10분', ggroupId:1 },
    { id: 3, name: 'Youtube 생활일본어 10분', ggroupId:1 },
    { id: 4, name: '숨쉬기', ggroupId:2 },
    { id: 5, name: '걷기', ggroupId:2 },
]

export const recordDummy: IRecord[] = [
    { id: 0, status: true, date: '2026-09-29', routineId: 0 },
    { id: 1, status: false, date: '2026-09-29', routineId: 1 },
    { id: 2, status: true, date: '2026-09-30', routineId: 2 },
    { id: 3, status: false, date: '2026-09-30', routineId: 3 },
    { id: 4, status: false, date: '2026-09-29', routineId: 4 },
    { id: 5, status: true, date: '2026-09-30', routineId: 5 },
    { id: 6, status: false, date: '2026-09-30', routineId: 6 },
    { id: 7, status: false, date: '2026-09-30', todoId: 0 },
    { id: 8, status: false, date: '2026-09-29', todoId: 1 },
    { id: 9, status: true, date: '2026-09-30', todoId: 2 },
    { id: 10, status: true, date: '2026-09-30', todoId: 3 },
    { id: 11, status: false, date: '2026-09-30', todoId: 4 },
    { id: 12, status: false, date: '2026-09-29', todoId: 5 },
    { id: 13, status: false, date: '2026-09-29', todoId: 6 },
];

export const groupDummy: IGgroup[] = [
    { id: 0, name: 'English' },
    { id: 1, name: 'Japanese' },
    { id: 2, name: '운동!' },
];

export const todoDummy: IRoutine[] = [
    { id: 0, name: '물마시기' },
    { id: 1, name: '갤럭시 체크' },
    { id: 2, name: '열심히 일하기' },
    { id: 3, name: '가족들과 삼겹살!' },
    { id: 4, name: '친구한테 연락하기' },
    { id: 5, name: '방울토마토 물주기' },
    { id: 6, name: '화분 분갈이' },
]

export const messengerDummy: IMessenger[] = [
    { id: 0, message: 'falseDummy' },
    { id: 1, message: 'trueDummy' },
]

export const routineViewDummy: IroutineView[] = [
    { id: 1, rname: '아침에 물 한 잔', status: true, date: '2026-09-29', ggroupId: 1, routineId: 101 },
    { id: 2, rname: '영양제 먹기', status: false, date: '2026-09-29', ggroupId: 1, routineId: 102 },
    { id: 3, rname: '30분 운동하기', status: true, date: '2026-09-29', ggroupId: 2, routineId: 103 },
    { id: 4, rname: '영어 공부하기', status: false, date: '2026-09-29', ggroupId: 2, routineId: 104 },
    { id: 5, rname: '책 10페이지 읽기', status: true, date: '2026-09-29', ggroupId: 3, routineId: 105 },
    { id: 6, rname: '잠들기 전 스트레칭', status: false, date: '2026-09-29', ggroupId: 3, routineId: 106 },
    { id: 7, rname: '방 정리하기', status: true, date: '2026-09-29', ggroupId: 4, routineId: 107 },
    { id: 8, rname: '일기 쓰기', status: false, date: '2026-09-29', ggroupId: 5, routineId: 108 },
    { id: 9, rname: 'todo일기 쓰기1', status: false, date: '2026-09-29', todoId: 109 },
    { id: 10, rname: 'todo일기 쓰기2', status: true, date: '2026-09-29', todoId: 110 },
    { id: 11, rname: 'todo일기 쓰기3', status: false, date: '2026-09-29',todoId: 111 },
];

