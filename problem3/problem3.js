const loadComments = ()=>{
    fetch('https://jsonplaceholder.typicode.com/comments')
.then(res => res.json())
.then(data => displayComment(data))
}

loadComments();

const displayComment = comments =>{
    const commentContainer =document.getElementById('comments');
        //  console.log(comments);
//    for (const comment of comments ){
//        const div =document.createElement('div');
//        div.classList.add('comment');
//        div.innerHTML=`
//        <h3>Name: ${comment.name}</h3>
//        <p>Comment: ${comment.body}</p>
//        `
//       commentContainer.appendChild(div)
//    }
     comments.forEach(comment => {
        const div =document.createElement('div');
        // div.innerHTML ="";
        div.classList.add('comment');
        div.innerHTML=`
        <h3>Name: ${comment.name}</h3>
        <p>Comment: ${comment.body}</p>
        <button onclick='loadDetails(${comment.id})'>Click Me</button>
        `
       commentContainer.appendChild(div)
     });
     
}
const loadDetails = id =>{
    // console.log(id)
    fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
    .then(res => res.json())
    .then(data =>commentDetalis(data))

}
const commentDetalis = comment =>{
    const commentDetails =document.getElementById('comment-details');
    const div =document.createElement('div');
       commentDetails.innerHTML ="";
        div.classList.add('comment');
        div.innerHTML=`
        <h3>Name: ${comment.name}</h3>
        <p>Comment: ${comment.email}</p>
        `

        commentDetails.appendChild(div)
}