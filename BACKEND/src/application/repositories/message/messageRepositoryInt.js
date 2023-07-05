

const messageRepositoryInt=(repository)=>{
    const messageAdd=(chatId, senderId,message)=>repository.messageAdd(chatId, senderId,message);
    const getMessage=(chatId)=>repository.getMessage(chatId);

    return{
        messageAdd,
        getMessage

    }

}
export default messageRepositoryInt