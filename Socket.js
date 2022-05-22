let io;

module.exports={
    init:httpServer=>{
        io=require("socket.io")(httpServer,{
            cors:{
                origin:"https://628886eca833125466a99c75--heroic-cupcake-dc4577.netlify.app"
            }
        });
        return io;
    },
    getIO:()=>{
        if(!io){
            throw new Error("Socket.io not initialized");
        }
        return io;
    }
}