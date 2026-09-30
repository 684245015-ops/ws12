import { StudentDAO } from "./StudentDAO";

const studentDAO = new StudentDAO();

studentDAO.insert("500000161","อำนาจ",4.00);
studentDAO.insert("500000172","อำนาจ",3.60);
studentDAO.insert("500000133","อำนาจ",3.00);


const  student = studentDAO.findAII();
let  honor: string;
student.forEach(s => {
    if(s.isHonors() === true) honor = "เกียรตินิยม";
    else honor ="";
    console.log(`${s.getstudentCode()} ${s.getFullName()} ${s.getGpa()} ${honor}`);
})