import mongoose from "mongoose";

const connectDatabase = async()=>{

    try {
       const connection= await mongoose.connect(`${ process.env.MONGO_DB_URL}`);
        if(connection){
            console.log("Database Connected Successfully".bgGreen);
        }else{
            console.log("Database Failed to Connect".bgRed);
        }

    } catch (error) {
        console.log("Database Failed to connect".bgYellow, error);
        process.exit(1);
    }
}

export default connectDatabase;