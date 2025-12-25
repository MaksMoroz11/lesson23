users = []
currentUser = {}


function registery() {
    let name = document.getElementById('name').value
    let login = document.getElementById('login').value
    let pw = document.getElementById('pw').value
    currentUser = {"name": name, "login": login, "password": pw}
    users.push(currentUser)
    console.log(users)
    window.location = 'index.html'
}

function showUsers() {
    const boxUsers = document.getElementsByClassName('users')[0]
    users.forEach(element => {
        let line = document.createAttribute('div')
        line.textContent = `${user.name} : ${user.login} : ${user.password}`
        boxUsers.setAttributeNode(line)
    });
    console.log(users)
}

showUsers()