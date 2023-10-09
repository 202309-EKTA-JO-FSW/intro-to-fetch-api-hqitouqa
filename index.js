// Please read the README.md to understand what to do. Happy Coding !
try {async function fetchUserData(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const json=await response.json()
    let userData=json
   // console.log(userData)
    
    
    
   let newUser={
        id:11,
        name: 'Lean n',
        username: 'Lean',
        email: 'Lean@gg.com',
        address:{ street: 'Light'},
        phone:' 232',
        website: 'animals.org',
        company:{
            name: 'Animal shleter'
        }

    }
    userData.push(newUser)
    
    //console.log(userData)

    let filteredList=userData.filter(function(user){

       return user.email.includes(".biz")
    })

   console.log(filteredList)

    let sortedData=userData.sort((a, b) => a.name.localeCompare(b.name))
    console.log(sortedData)

}
fetchUserData()
}
catch (err){
    console.log("error", err)
}
