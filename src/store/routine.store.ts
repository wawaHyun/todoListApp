import { IRoutine } from '@/domain/routine.model'
import { create } from 'zustand'

interface routineState {
    data: IRoutine,
    action:{
        update: (data: IRoutine) => void,
        clean : () => void,
    },
}

const useRoutineStore = create<routineState>()((set,get) => ({
    data: {
            id : 0, 
            name:'',
            ggroupId:0
    },
    action: {
        update: (data: IRoutine) => set({ data }),
        clean: () => {set({ data:{
            id : 0, 
            name:'',
            ggroupId:0
        }, }), console.log("RoutineState clean : ", get().data)}
    },
}))

export const useRoutineAction = () => useRoutineStore((store) => store.action)
export const useRoutineStack = () => useRoutineStore((store) => store.data)
export const useRoutineState = () => useRoutineStore.getState();








// import { IRecord } from '@/domain/common.model'
// import { create } from 'zustand'

// interface recordState {
//     data: IRecord,
//     action:{
//         update: (data: IRecord) => void,
//         clean : () => void,
//     },
// }

// const useRecordStore = create<recordState>()((set,get) => ({
//     data: {
//             id : 0, 
//             status:false,
//             date:'',
//             completedAt:'',
//             deletedAt:'',
//     },
//     action: {
//         update: (data: IRecord) => set({ data }),
//         clean: () => {set({ data:{
//             id : 0, 
//             status:false,
//             date:'',
//             completedAt:'',
//             deletedAt:'',
//         }, }), console.log("RecordState clean : ", get().data)}
//     },
// }))

// export const useRecordAction = () => useRecordStore((store) => store.action)
// export const useRecordStack = () => useRecordStore((store) => store.data)
// export const useRecordState = () => useRecordStore.getState();







// import { ITodo } from '@/domain/routine.model'
// import { create } from 'zustand'

// interface todoState {
//     data: ITodo,
//     action:{
//         update: (data: ITodo) => void,
//         clean : () => void,
//     },
// }

// const useTodoStore = create<todoState>()((set,get) => ({
//     data: {
//             id : 0, 
//             name:'',
//     },
//     action: {
//         update: (data: ITodo) => set({ data }),
//         clean: () => {set({ data:{
//             id : 0, 
//             name:'',
//         }, }), console.log("TodoState clean : ", get().data)}
//     },
// }))

// export const useTodoAction = () => useTodoStore((store) => store.action)
// export const useTodoStack = () => useTodoStore((store) => store.data)
// export const useTodoState = () => useTodoStore.getState();