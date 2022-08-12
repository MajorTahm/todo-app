export interface ITask {
    id: string
    description: string
    isComplete: boolean
    badge?: string
}

export interface IFilterItem {
    filterName: string,
    filterColor?: string
}

export interface IAppContext {
    tasks: ITask[]
    modalState: boolean
    newTask: ITask
    FILTER_MAP: IFilterItem[]
    error: string
    filter: string
    closeModal: () => void
    openModal: () => void
    changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
    submitTaskHandler: (event: React.FormEvent<HTMLElement>) => void
    addTask: (task: ITask) => void
    deleteTask: (task: ITask) => void
    completeTask: (task: ITask) => void
    addFilter: (propName: any) => void
    setError: React.Dispatch<React.SetStateAction<string>>
    setFilter: React.Dispatch<React.SetStateAction<string>>
    setNewTask: React.Dispatch<React.SetStateAction<ITask>>
    clearCompleted: () => void
}