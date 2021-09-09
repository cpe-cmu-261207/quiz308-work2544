import { CommentType } from "../data/comments";
import ReplyFn from "./Reply";
const CmTmp = ({ username, userImagePath, commentText, likeNum, replies }: CommentType) => {
    const renderPeply = () => {

        const output: JSX.Element[] = []
        output.push(...replies.map(x => <ReplyFn username={x.username} userImagePath={x.userImagePath} commentText={x.commentText} likeNum={x.likeNum} replies={x.replies} key={x.username} />))
        return output
    }
    return (
        <div className="flex flex-col">
            <div className="flex p-2 items-start space-x-2">
                <img className="w-10 w-10 rounded-full" src={userImagePath}></img>
                <div className="bg-gray-500 rounded-lg p-2">
                    <p className="font-semibold text-white">{username}</p>
                    <p className='text-white'>{commentText}</p>
                    {/* like section (จะไม่แสดงถ้าไม่มีใครไลค์เลย) */}
                    {
                        likeNum <= 0 ? null :
                            <div className='flex items-center'>
                                <img className='w-4 h-4 mr-1' src='/like.svg'></img>
                                <p className='text-gray-300'>{likeNum}</p>
                            </div>
                    }
                </div>
            </div>
            {renderPeply()}
        </div>
    );
}
export default CmTmp