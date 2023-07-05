const messageAdd = async (chatId, senderId, message,repositories) => {
  

    try {

        const addmessage=await repositories.messageAdd(chatId, senderId,message)

        return { status: true,addmessage }

    } catch {
        return { message: 'Error getting on adding message', status: false };

    }
}
export default messageAdd