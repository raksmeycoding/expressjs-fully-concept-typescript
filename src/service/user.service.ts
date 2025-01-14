import {User} from "@type/user.type"

const getAllUser = async (): Promise<User> => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return {name: "Tom Billy", age: "18"}
}


export {getAllUser}