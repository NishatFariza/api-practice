const loadUsers =  () => {
   fetch('https://randomuser.me/api/')
   .then(res => res.json())
   .then(data => userDetails(data.results[0]) )
}

loadUsers();


const userDetails = users =>{
   //  console.log(users.results[0].name)
   
   // for (const user in users) {
      console.log(users)
    const userContainer =document.querySelector('#user-details');
      //   console.log(user)
        const div =document.createElement('div')
        div.classList.add('users')
        div.innerHTML=`
        <h3>Name: ${users.name.first, users.name.last}<h3>
        <p>Gender: ${users.gender}</p>
        <img src="${users.picture.large}"/>
        <p>City: ${users.location.city}</p>
        <p>Street name: ${users.location.coordinates.latitude}</p>
        <p>Street no: ${users.location.street.number}</p>
        <p>Street name: ${users.location.street.name}</p>
        <p>Time: ${users.location.timezone.description}</p>
        
        `
      userContainer.appendChild(div)
   // }
}
        
    