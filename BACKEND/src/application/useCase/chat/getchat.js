const getChat = async (firstId,secondId,repositories) => {
  

    try {

        const Getchats=await repositories.getChat(firstId,secondId)

        return { status: true,Getchats }

    } catch {
        return { message: 'Error getting creating chat', status: false };

    }
}
export default getChat