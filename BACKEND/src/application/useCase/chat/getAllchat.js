const getAllChats = async (userId,repositories) => {
  

    try {

        const Getchats=await repositories.getAllChat(userId)

        return { status: true,Getchats }

    } catch {
        return { message: 'Error getting creating chat', status: false };

    }
}
export default getAllChats