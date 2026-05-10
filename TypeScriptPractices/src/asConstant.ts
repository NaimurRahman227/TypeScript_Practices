// enum userRoles {
//     Admin = 'Admin',
//     Editor = 'Editor',
//     Viewer = 'Viewer',
// }

const userRoles = {
    Admin : 'Admin',
    Editor : 'Editor',
    Viewer : 'Viewer',
} as const;


const Editor = (role : keyof typeof userRoles)=>{
    if (role === userRoles.Admin || role === userRoles.Editor){
        return true;
    } else return false;
};

const proUser = Editor(userRoles.Admin)

console.log(proUser)   