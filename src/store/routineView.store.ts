
import { IroutineView } from '@/domain/routine.model'
import { create } from 'zustand'

interface routineViewState {
    data: IroutineView,
    action:{
        update: (data: IroutineView) => void,
        clean : () => void,
    },
}

const useRoutineViewStore = create<routineViewState>()((set,get) => ({
    data: {
            id : 0, 
            name:'', 
            status: false,
            date : 0,
            ggroupId:0 
    },
    action: {
        update: (data: IroutineView) => set({ data }),
        clean: () => {set({ data:{
            id : 0, 
            name:'',
            status:false,
            date : 0,
            ggroupId:0
        }, }), console.log("RoutineVeiwState clean : ", get().data)}
    },
}))

export const useRoutineViewAction = () => useRoutineViewStore((store) => store.action)
export const useRoutineViewStack = () => useRoutineViewStore((store) => store.data)
export const useRoutineViewState = () => useRoutineViewStore.getState();