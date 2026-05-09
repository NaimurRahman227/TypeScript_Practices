"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const editor = (role) => {
    if (role === 'admin' || role === 'user') {
        return true;
    }
    else
        return false;
};
const loggedIn = editor("admin");
console.log(`Yes this user is permited for editing : ${loggedIn}`);
var userRoles;
(function (userRoles) {
    userRoles["Admin"] = "Admin";
    userRoles["Editor"] = "Editor";
    userRoles["Viewer"] = "Viewer";
})(userRoles || (userRoles = {}));
const Editor = (role) => {
    if (role === userRoles.Admin || role === userRoles.Editor) {
        return true;
    }
    else
        return false;
};
const proUser = Editor(userRoles.Admin);
console.log(proUser);
//# sourceMappingURL=enum.js.map