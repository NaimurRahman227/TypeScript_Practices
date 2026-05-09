type roles = "admin" | "user" | "guest"

const editor = (role : roles) => {
    if (role === 'admin' || role === 'user'){
        return true;
    } else return false;
};

const loggedIn = editor("admin");

console.log(`Yes this user is permited for editing : ${loggedIn}`)

enum userRoles {
    Admin = 'Admin',
    Editor = 'Editor',
    Viewer = 'Viewer',
}

const Editor = (role : userRoles)=>{
    if (role === userRoles.Admin || role === userRoles.Editor){
        return true;
    } else return false;
};

const proUser = Editor(userRoles.Admin)

console.log(proUser)