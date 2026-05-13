"use strict";
// enum userRoles {
//     Admin = 'Admin',
//     Editor = 'Editor',
//     Viewer = 'Viewer',
// }
Object.defineProperty(exports, "__esModule", { value: true });
const userRoles = {
    Admin: 'Admin',
    Editor: 'Editor',
    Viewer: 'Viewer',
};
const Editor = (role) => {
    if (role === userRoles.Admin || role === userRoles.Editor) {
        return true;
    }
    else
        return false;
};
const proUser = Editor(userRoles.Admin);
console.log(proUser);
//# sourceMappingURL=asConstant.js.map