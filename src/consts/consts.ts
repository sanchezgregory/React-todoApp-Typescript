export const TODO_FILTERS = {
    ALL: "all",
    ACTIVE: "active",
    COMPLETED: "completed"
} as const

export const FILTER_BUTTONS = {
    [TODO_FILTERS.ALL]: {
        label: TODO_FILTERS.ALL,
        href: "#",
    } ,
    [TODO_FILTERS.ACTIVE]: {
        label: TODO_FILTERS.ACTIVE,
        href: "#",
    },
    [TODO_FILTERS.COMPLETED]: {
        label: TODO_FILTERS.COMPLETED,
        href: "#",
    },
} as const
