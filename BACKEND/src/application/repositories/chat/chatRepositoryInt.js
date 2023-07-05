

const chatRepositoryInt=(repository)=>{
    const createChat=(senderId,receiverId)=>repository.createChat(senderId,receiverId);
    const getAllChat=(userId)=>repository.getAllChat(userId);
    const getChat=(firstId,secondId)=>repository.getChat(firstId,secondId);


    return{
        createChat,
        getAllChat,
        getChat

    }


}
export default chatRepositoryInt