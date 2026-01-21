// all the authntication  related service are there these are bacially the controllers protion but the logic part /


type UserType ={
    email:string
}
type regiseterData ={
    name:string,
    email:string,
    password:string,
    role:string
}
type loginData={
    email:string,
    password:string
}
const existingUser: UserType ={
 email:"horairahsaleem12123@gmail.com"
}

export const registerUser= async (data:regiseterData):  Promise<{userID:string,role:string}> =>
    {
        const {name,email,password,role}=data
        if(!name||!email||!password) throw new Error('input data is incomplete')
        if(email===existingUser.email) throw new Error('user alreading exist')


return {
    userID:'temp',
    role:'temp'
}

    }

    export const loginUser = async(data:loginData):Promise<{userID:string,role:string}>=>{

const {email,password}=data
        if(email!==existingUser.email) throw new Error('user not regisetred')





        return{
            userID:" temp",
            role:"temp"
        }

    }

    // [please tell me is you review the code ]