let io;

module.exports={
    init:httpServer=>{
        io=require("socket.io")(httpServer,{
            cors:{
                origin:"https://heroic-cupcake-dc4577.netlify.app"
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
