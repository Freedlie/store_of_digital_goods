export interface IUser{
    user:{
        email: string,
        name: string,
        surname: string,
        password: string,
        token: string,
        id?: number
    },
    isAuth: boolean


}