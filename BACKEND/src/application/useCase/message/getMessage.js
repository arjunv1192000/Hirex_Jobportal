const getMessage = async (chatId,repositories) => {
  

    try {

        const Getmessage=await repositories.getMessage(chatId)

        return { status: true,Getmessage }

    } catch {
        return { message: 'Error getting message', status: false };

    }
}
export default getMessage