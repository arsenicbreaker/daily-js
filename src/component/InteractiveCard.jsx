function InteractiveCard() {
  const handleLike = () => {
   console.log("Card liked!")
  }
  const handleShare = () => {
    console.log("Card shared!")
  }
  const handleComment = (e) => {
    e.preventDefault()
    const comment = e.target.comment.value
    console.log("Comment:", comment)
    e.target.reset()
  }
    return (
      <div className="card">
      <div className="actions">
      <button onClick={handleLike}>❤️ Like</button>
      <button onClick={handleShare}>🔗 Share</button>
      </div>
      <form onSubmit={handleComment}>
      <input
        type="text"
        name="comment"
        placeholder="Add a comment..."
      />
      <button type="submit">Post</button>
    </form>
 </div>
 )
}

export default InteractiveCard