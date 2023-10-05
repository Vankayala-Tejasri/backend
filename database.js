const oracledb=require('oracledb');
const dbConfig={
    user:"system",
    password:"manager",
    connectString:"localhost:/XEXDB"
};
const Query=async(sql)=>{
    let connection;
    try{
        connection=await oracledb.getConnection(dbConfig);
        const result=await connection.execute(sql);
        await connection.commit();
        return result;
    }catch (error){
        console.error(error);
    }finally{
        if(connection){
            try{
                await connection.close();
            }catch (error){
                console.error(error);
            }
            }
        }
    };
const Result = async (...Parameters) => {
  
    let Sql, Message;
         console.log(typeof (Parameters[2]));
    Details = Parameters[2];
    try{
        Details = eval(`(${Parameters[2]})`);
      } catch(err){}
    switch (Parameters[1]) {
         case "Insert":
            Sql = `insert into ${Parameters[0]} values('${Details.name}','${Details.sym_name}')`;
            Message = "Inserted Successfully";
            break;
         case "Update":
            Sql = `update ${Parameters[0]} set name = '${Parameters[3].name}', sym_name = '${Parameters[3].sym_name}' where name = '${Details}'`;
            Message = `Success Updating`;
            break;
        case "Delete":
           Sql = `delete from ${Parameters[0]} where disease = '${Details}'`;
           Message = `Success deleting ${Details}`;
           break;         
        case "Read":
            Sql = `select name from ${Parameters[0]} where sym_name ='${Details}'`;
            Message = `Showing all the values in the database ${Parameters[0]}`;
            if(Details.disease){
                Sql = `select * from ${Parameters[0]} where disease = '${Details.wef_date}'`;
                Message = `${Details.wef_date} Retrived`
            }
        break;
        default:
         console.error("Invalid Parameters");
         break;
     }
       console.log(Sql);
       var result= await Query(Sql);
       result.Message = Message;
       return result;
   };





 const Register = async (...Parameters) => {
  
    let Sql, Message;
         console.log(typeof (Parameters[2]));
    Details = Parameters[2];
    try{
        Details = eval(`(${Parameters[2]})`);
      } catch(err){}
    switch (Parameters[1]) {
         case "Insert":
            Sql = `insert into ${Parameters[0]} values('${Details.username}','${Details.mobilenumber}','${Details.aadharnumber}','${Details.age}','${Details.email}','${Details.password}','${Details.gender}')`;
            Message = "Inserted Successfully";
            break;
         case "Update":
            Sql = `update ${Parameters[0]} set username = '${Parameters[3].username}', mobilenumber = '${Parameters[3].mobilenumber}',aadharnumber='${Parameters[3].aadharnumber}',age = '${Parameters[3].age}' ,email = '${Parameters[3].email}' , password = '${Parameters[3].password}' , gender = '${Parameters[3].gender}'where email = '${Details}'`;
            Message = `Success Updating`;
            break;
        case "Delete":
           Sql = `delete from ${Parameters[0]} where email = '${Details}'`;
           Message = `Success deleting ${Details}`;
           break;         
        case "Read":
            Sql = `select * from ${Parameters[0]} where email='${Details}'`;
            Message = `Showing all the values in the database ${Parameters[0]}`;
            if(Details.disease){
                Sql = `select * from ${Parameters[0]} where disease = '${Details.wef_date}'`;
                Message = `${Details.wef_date} Retrived`
            }
        case "Read1":
        Sql = `select * from ${Parameters[0]}`;
        if(Details != "All"){
          Sql = `select * from ${Parameters[0]} where email = '${Details}'`;
        }
        break;
        default:
         console.error("Invalid Parameters");
         break;
     }
       console.log(Sql);
       var result= await Query(Sql);
       result.Message = Message;
       return result;
   };





 const login= async (...Parameters) => {
  
    let Sql, Message;
         console.log(typeof (Parameters[2]));
    Details = Parameters[2];
    try{
        Details = eval(`(${Parameters[2]})`);
      } catch(err){}
    switch (Parameters[1]) {

        case "Insert":
            Sql = `insert into ${Parameters[0]} values('${Details.email}','${Details.password}')`;
            Message = "Inserted Successfully";
            break;
            case "Update":
                Sql = `update ${Parameters[0]} set email = '${Parameters[3].email}' , password = '${Parameters[3].password}' where email = '${Details}'`;
                Message = `Success Updating`;
                break;
            case "Delete":
               Sql = `delete from ${Parameters[0]} where email = '${Details}'`;
               Message = `Success deleting ${Details}`;
               break;    
               
        case "Read":
            Sql = `select email,password from ${Parameters[0]} where email='${Details}'`;
            Message = `Showing all the values in the database ${Parameters[0]}`;
            if(Details.email){
                Sql = `select * from ${Parameters[0]} where email= '${Details.email}'`;
                Message = `${Details.email} Retrived`
            }
        break;
        default:
         console.error("Invalid Parameters");
         break;
     }
       console.log(Sql);
       var result= await Query(Sql);
       result.Message = Message;
       return result;
   };

   const Patient = async (...Parameters) => {
  
    let Sql, Message;
         console.log(typeof (Parameters[2]));
    Details = Parameters[2];
    try{
        Details = eval(`(${Parameters[2]})`);
      } catch(err){}
    switch (Parameters[1]) {
         case "Insert":
            Sql = `insert into ${Parameters[0]} values('${Details.name}','${Details.phonenumber}','${Details.aadharnumber}','${Details.problem}','${Details.email}','${Details.doctor}','${Details.hospital}','${Details.disability}')`;
            Message = "Inserted Successfully";
            break;
         case "Update":
            Sql = `update ${Parameters[0]} set name = '${Parameters[3].name}', phonenumber = '${Parameters[3].phonenumber}',aadharnumber='${Parameters[3].aadharnumber}',problem = '${Parameters[3].problem}' ,email = '${Parameters[3].email}' ,doctor = '${Parameters[3].doctor}' , hospital = '${Parameters[3].hospital}' , disability = '${Parameters[3].disability}'where email = '${Details}'`;
            Message = `Success Updating`;
            break;
        case "Delete":
           Sql = `delete from ${Parameters[0]} where email = '${Details}'`;
           Message = `Success deleting ${Details}`;
           break;         
        case "Read":
            Sql = `select * from ${Parameters[0]} where email='${Details}'`;
            Message = `Showing all the values in the database ${Parameters[0]}`;
            if(Details.disease){
                Sql = `select * from ${Parameters[0]} where disease = '${Details.wef_date}'`;
                Message = `${Details.wef_date} Retrived`
            }
        break;
        default:
         console.error("Invalid Parameters");
         break;
     }
       console.log(Sql);
       var result= await Query(Sql);
       result.Message = Message;
       return result;
   };

   const Doctor = async (...Parameters) => {
  
    let Sql, Message;
         console.log(typeof (Parameters[2]));
    Details = Parameters[2];
    try{
        Details = eval(`(${Parameters[2]})`);
      } catch(err){}
    switch (Parameters[1]) {
         case "Insert":
            Sql = `insert into ${Parameters[0]} values('${Details.doctor_name}','${Details.doctor_id}','${Details.doctor_qualification}','${Details.doctor_experience}')`;
            Message = "Inserted Successfully";
            break;
         case "Update":
            Sql = `update ${Parameters[0]} set doctor_name = '${Parameters[3].doctor_name}', doctor_id = '${Parameters[3].doctor_id}',doctor_qualification='${Parameters[3].doctor_qualification}',doctor_experience= '${Parameters[3].doctor_experience}' where doctor_id= '${Details}'`;
            Message = `Success Updating`;
            break;
        case "Delete":
           Sql = `delete from ${Parameters[0]} where doctor_id = '${Details}'`;
           Message = `Success deleting ${Details}`;
           break;         
        case "Read":
            Sql = `select * from ${Parameters[0]} where doctor_id='${Details}'`;
            Message = `Showing all the values in the database ${Parameters[0]}`;
            if(Details.disease){
                Sql = `select * from ${Parameters[0]} where disease = '${Details.wef_date}'`;
                Message = `${Details.wef_date} Retrived`
            }
        break;
        default:
         console.error("Invalid Parameters");
         break;
     }
       console.log(Sql);
       var result= await Query(Sql);
       result.Message = Message;
       return result;
   };

   const Appoint = async (...Parameters) => {
  
    let Sql, Message;
         console.log(typeof (Parameters[2]));
    Details = Parameters[2];
    try{
        Details = eval(`(${Parameters[2]})`);
      } catch(err){}
    switch (Parameters[1]) {
         case "Insert":
            Sql = `insert into ${Parameters[0]} values('${Details.appointname}','${Details.doctorname}','${Details.doctorid}','${Details.time}')`;
            Message = "Inserted Successfully";
            break;
         case "Update":
            Sql = `update ${Parameters[0]} set appointname = '${Parameters[3].appointname}', doctorname = '${Parameters[3].doctorname}',doctorid='${Parameters[3].doctorid}',time = '${Parameters[3].time}' where doctorid = '${Details}'`;
            Message = `Success Updating`;
            break;
        case "Delete":
           Sql = `delete from ${Parameters[0]} where doctorid = '${Details}'`;
           Message = `Success deleting ${Details}`;
           break;         
        case "Read":
            Sql = `select * from ${Parameters[0]} where doctorid='${Details}'`;
            Message = `Showing all the values in the database ${Parameters[0]}`;
            if(Details.disease){
                Sql = `select * from ${Parameters[0]} where disease = '${Details.wef_date}'`;
                Message = `${Details.wef_date} Retrived`
            }
        break;
        default:
         console.error("Invalid Parameters");
         break;
     }
       console.log(Sql);
       var result= await Query(Sql);
       result.Message = Message;
       return result;
   };

   const Hospital = async (...Parameters) => {
  
    let Sql, Message;
         console.log(typeof (Parameters[2]));
    Details = Parameters[2];
    try{
        Details = eval(`(${Parameters[2]})`);
      } catch(err){}
    switch (Parameters[1]) {
         case "Insert":
            Sql = `insert into ${Parameters[0]} values('${Details.hospitalname}','${Details.hospitalphonenumber}','${Details.villagename}','${Details.districtname}','${Details.state}','${Details.street}')`;
            Message = "Inserted Successfully";
            break;
         case "Update":
            Sql = `update ${Parameters[0]} set hospitalname = '${Parameters[3].hospitalname}', hospitalphonenumber = '${Parameters[3].hospitalphonenumber}',villagename='${Parameters[3].villagename}',districtname= '${Parameters[3].districtname}' ,state= '${Parameters[3].state}' , street = '${Parameters[3].street}' where  hospitalphonenumber= '${Details}'`;
            Message = `Success Updating`;
            break;
        case "Delete":
           Sql = `delete from ${Parameters[0]} where hospitalphonenumber = '${Details}'`;
           Message = `Success deleting ${Details}`;
           break;         
        case "Read":
            Sql = `select * from ${Parameters[0]} where hospitalphonenumber='${Details}'`;
            Message = `Showing all the values in the database ${Parameters[0]}`;
            if(Details.disease){
                Sql = `select * from ${Parameters[0]} where disease = '${Details.wef_date}'`;
                Message = `${Details.wef_date} Retrived`
            }
        break;
        default:
         console.error("Invalid Parameters");
         break;
     }
       console.log(Sql);
       var result= await Query(Sql);
       result.Message = Message;
       return result;
   };

   const Review = async (...Parameters) => {
  
    let Sql, Message;
         console.log(typeof (Parameters[2]));
    Details = Parameters[2];
    try{
        Details = eval(`(${Parameters[2]})`);
      } catch(err){}
    switch (Parameters[1]) {
         case "Insert":
            Sql = `insert into ${Parameters[0]} values('${Details.name}','${Details.phoenumber}','${Details.email}','${Details.review}','${Details.grade}')`;
            Message = "Inserted Successfully";
            break;
         case "Update":
            Sql = `update ${Parameters[0]} set name = '${Parameters[3].name}', phonenumber = '${Parameters[3].phonenumber}',email='${Parameters[3].email}',review= '${Parameters[3].review}' ,grade = '${Parameters[3].grade}' where email = '${Details}'`;
            Message = `Success Updating`;
            break;
        case "Delete":
           Sql = `delete from ${Parameters[0]} where email = '${Details}'`;
           Message = `Success deleting ${Details}`;
           break;         
        case "Read":
            Sql = `select * from ${Parameters[0]} where email='${Details}'`;
            Message = `Showing all the values in the database ${Parameters[0]}`;
            if(Details.disease){
                Sql = `select * from ${Parameters[0]} where disease = '${Details.wef_date}'`;
                Message = `${Details.wef_date} Retrived`
            }
        break;
        default:
         console.error("Invalid Parameters");
         break;
     }
       console.log(Sql);
       var result= await Query(Sql);
       result.Message = Message;
       return result;
   };

   const Comp = async (...Parameters) => {
  
    let Sql, Message;
         console.log(typeof (Parameters[2]));
    Details = Parameters[2];
    try{
        Details = eval(`(${Parameters[2]})`);
      } catch(err){}
    switch (Parameters[1]) {
         case "Insert":
            Sql = `insert into ${Parameters[0]} values('${Details.comp_name}')`;
            Message = "Inserted Successfully";
            break;
        //  case "Update":
        //     Sql = `update ${Parameters[0]} set name = '${Parameters[3].name}', phonenumber = '${Parameters[3].phonenumber}',email='${Parameters[3].email}',review= '${Parameters[3].review}' ,grade = '${Parameters[3].grade}' where email = '${Details}'`;
        //     Message = `Success Updating`;
        //     break;
        // case "Delete":
        //    Sql = `delete from ${Parameters[0]} where email = '${Details}'`;
        //    Message = `Success deleting ${Details}`;
        //    break;         
        case "Read":
            Sql = `select * from ${Parameters[0]} where comp_name='${Details}'`;
            Message = `Showing all the values in the database ${Parameters[0]}`;
            if(Details.disease){
                Sql = `select * from ${Parameters[0]} where disease = '${Details.wef_date}'`;
                Message = `${Details.wef_date} Retrived`
            }
        break;
        default:
         console.error("Invalid Parameters");
         break;
     }
       console.log(Sql);
       var result= await Query(Sql);
       result.Message = Message;
       return result;
   };

 module.exports={
    Result:Result,
    Register:Register,
    login:login,
    Review:Review,
    Doctor:Doctor,
    Patient:Patient,
    Hospital:Hospital,
    Appoint:Appoint,
    Comp:Comp
 }


 