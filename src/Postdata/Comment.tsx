import { comments } from "../data/comments"
import CmTmp from "./CommentTemplate"

const MyComment=()=>{
const render=()=>{
    const output:JSX.Element[]=[]
    const EIEIComment=comments
    console.log(EIEIComment)
    output.push(...EIEIComment.map(x=><CmTmp username={x.username} userImagePath={x.userImagePath} commentText={x.commentText} likeNum={x.likeNum} replies={x.replies} />))
    return output
}    
return (<div>
{render()}
</div>);
}
export default MyComment;
