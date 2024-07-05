import Comment from "./Comment";

export default function CommentList () {
    const comments = Array.from({ length: 10 }, (_, i) => `This is comment ${i + 1}`);
    return (
        <div>
            {comments.map((text, index) => (
                <Comment key={index} commentText={text}/>
            ))}
        </div>
    )
}