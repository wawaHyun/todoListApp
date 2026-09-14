
import { IRoutineView } from '@/domain/common.model'
import { create } from 'zustand'

interface routineViewState {
    data: IRoutineView,
    action:{
        update: (data: IRoutineView) => void,
        clean : () => void,
    },
}

const useRoutineViewStore = create<routineViewState>()((set,get) => ({
    data: {
            id : 0, 
            rname:'', 
            status: false,
            date : '',
            ggroupId:0,
            routineId:0,
    },
    action: {
        update: (data: IRoutineView) => set({ data }),
        clean: () => {set({ data:{
            id : 0, 
            rname:'',
            status:false,
            date : '',
            ggroupId:0,
            routineId:0,
        }, }), console.log("RoutineVeiwState clean : ", get().data)}
    },
}))

export const useRoutineViewAction = () => useRoutineViewStore((store) => store.action)
export const useRoutineViewStack = () => useRoutineViewStore((store) => store.data)
export const useRoutineViewState = () => useRoutineViewStore.getState();