import { useEffect,useState } from "react";
import { baseUrl,getRequest } from "../utils/services";

export const useFetchRecipientUser = (chat,user) => {
    const [recipientUser,setRecipientUser ] = useState(null);
    const [error, setError] = useState(null)

    const recipientId = chat?.members?.find((id) => id !==user?._id)
    // const recipientId ="650c067e1b8de365a3397a66"
    // console.log("chat",chat);
    // console.log(recipientId);

    useEffect(() => {

        const getUser = async()=>{
     if(!recipientId) return null;

     const response = await getRequest(`${baseUrl}/users/find/${recipientId}`)

     if(response.error){
        return setError(response);
     }
     setRecipientUser(response)
        }

        getUser();
    }, [recipientId]);


    return { recipientUser };
    
}