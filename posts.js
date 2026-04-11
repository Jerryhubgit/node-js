const posts = [
    { id: 1, title: 'post one'}, 
    { id: 2, title: 'post two'}
]

const getPosts = () => posts
export const getPostsLength = () => `Post Length: ${posts.length}`

export default getPosts

