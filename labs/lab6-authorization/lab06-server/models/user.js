// let users = [];
class User {
    constructor(username, password, role) {
        this.username = username;
        this.password = password;
        this.role = role;
    }
    login() {
        return users.find(u => u.username === this.username && u.password === this.password);

    }
}
const users = [new User('danny', 'admin123', 'admin'), new User('zest', 'zest123', 'user')];

module.exports = User