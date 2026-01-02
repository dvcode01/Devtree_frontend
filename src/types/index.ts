export type User = {
    handle: string,
    email: string,
    nombre: string
}

export type RegisterForm = Pick<User, 'handle' | 'email' | 'nombre'> & {
    password: string,
    password_confirmation: string
}