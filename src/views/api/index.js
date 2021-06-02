import server from "@/utils/request";

export const userService = (params={}) => {
    return server.get('/api/user',{...params})
}

