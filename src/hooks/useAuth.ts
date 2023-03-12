import {useSelector} from "react-redux";

export function useAuth(){
    const user:any = useSelector<any>(state => state.user);
    console.log(user);
    return{
        isAuth: !!user?.email,
    }
}