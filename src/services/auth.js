import client from "../client/api";

export const login = async (username,password,email) => {
    try{
        const user = {
            username,
            password,
            email
        }
        const response = await client.post("/auth/login",user)
        return response
    }catch(error){
        console.log("Some error occurred "+error)
    }
}