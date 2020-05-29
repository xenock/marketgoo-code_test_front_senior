const socketIo = require("socket.io")
const initSocket = (server, onConnect) => {
    const io = socketIo.listen(server);
    io.on("connection", (socket) => {
        console.log("--- NEW CLIENT CONNECTED ---");
        onConnect(socket)
    });
}

module.exports = initSocket;


