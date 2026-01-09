export type User = {
    handle: string,
    email: string,
    nombre: string,
    _id?: string,
    description: string,
    image: string
}

export type RegisterForm = Pick<User, 'handle' | 'email' | 'nombre'> & {
    password: string,
    password_confirmation: string
}

export type LoginForm = Pick<RegisterForm, 'email' | 'password'>;

export type ProfileForm = Pick<User, 'handle' | 'description'>;

export type SocialNetwork = {
    id: number,
    name: string,
    url: string,
    enabled: boolean
};

export type DevTreeLink = Pick<SocialNetwork, 'name' | 'url' | 'enabled'>;