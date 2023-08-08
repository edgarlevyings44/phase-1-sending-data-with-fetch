// Add your code here
function submitData(userName, email){
    const apiUrl = 'http://localhost:3000/users'
    const postInfo = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
           

        },
        body: JSON.stringify({
            name: userName,
            email: email
        })

    }
    return fetch(apiUrl, postInfo)
    .then(response => response.json())
    .then(data => document.body.innerHTML = data.id)
    .catch(error => {document.body.innerHTML = error.message})
    }
    submitData('Steve', 'steve@steve.com')
    
