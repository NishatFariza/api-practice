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
        div.classList.add('comment');
        div.innerHTML=`
        <h3>Name: ${comment.name}</h3>
        <p>Comment: ${comment.body}</p>
        `
       commentContainer.appendChild(div)
     });
     
}


