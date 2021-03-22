type epoch = number

export type Template = {
    title: string
    description?: string
    data?: string

    created: epoch /* epoch */
    modified: epoch
}