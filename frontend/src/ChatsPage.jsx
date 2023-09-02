import  {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic('984f1547-35c3-4e15-939b-b95b4d045a74',
     props.user.username, 
     props.user.secret
     );
    return (
    <div style={{height: '100vh'}}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps} style={{height: '100%'}} />
    </div>
    )
}
export default ChatsPage;