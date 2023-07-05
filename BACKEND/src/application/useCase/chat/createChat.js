const createChat = async (senderId,receiverId,repositories) => {
  

    try {

        const chat=await repositories.createChat(senderId,receiverId)

        return { status: true,chat }

    } catch {
        return { message: 'Error getting creating chat', status: false };

    }
}
export default createChat