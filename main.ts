import { UserDAO } from "./UserDAO";

const userDAO = new UserDAO();

userDAO.insert("อำพร","amporn@gmail.com");
userDAO.insert("พรเพ็ญ","pornpen@gmail.com");
userDAO.insert("สามารถ","samrat@gmail.com");

const  users = userDAO.findAII();
users.forEach(u =>{
    console.log(u.getInfo());
})