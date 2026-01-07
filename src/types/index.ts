export type User = {
    handle: string,
    email: string,
    nombre: string,
    _id?: string
}

export type RegisterForm = Pick<User, 'handle' | 'email' | 'nombre'> & {
    password: string,
    password_confirmation: string
}

export type LoginForm = Pick<RegisterForm, 'email' | 'password'>;