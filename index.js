const express = require('express');

const app = express();
const server = require("http").createServer(app)
// const io = require('socket.io')(server, {}); //initial declaration but makes errors on client





    //------ From Socket.io docs
// const io = require('socket.io')(server, {
//     cors: {
//         origin: "https://example.com",
//         methods: [ "GET", "POST" ],
//         allowedHeaders: [ "my-custom-header" ],
//         credentials: true
//     }
// }); 
    //------ END From Socket.io docs


    //------ From Hitesh Choudhary
const io = require('socket.io')(server, {
    cors: {
        origin: "*",
    }
}); 
    //------ END From Hitesh Choudhary






require('dotenv').config()
const mongoose = require('mongoose')    
const bodyParser = require('body-parser')
const cors = require('cors')
const mongodbCloud = process.env.DB_MONGODB


app.use(cors())


    //------ From Hitesh Choudhary and PedroTech
io.on("connection", (socket) => {
    // console.log(`Socket id is: ${JSON.stringify(socket)}`) //My first trial and error
    console.log("Socket here: :", socket.id)
    console.log("Socket is active to be connected")

    socket.on("join_room", (data) => {
        socket.join(data)
        console.log(`User with ID: ${socket.id} joined room: ${data}`)
    })

    socket.on("disconnect", () => {
        console.log("User disconnected", socket.id)
    })

    socket.on("send_message", (data) => {
        // console.log(data)
        socket.to(data.room).emit("receive_message", data);
    });

        //------------------------- Hitesh Choudhary
    socket.on("chat", (payload) => {
        console.log("Payload here: ")
        io.emit("chat", payload)
    })
        //------------------------- END Hitesh Choudhary
})
    //------ END From Hitesh Choudhary and PedroTech


const PORT = process.env.PORT

//add whitelisted origins here
const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
    method: [ "GET", "POST" ]
}


// mongoose.Promise = global.Promise;
mongoose.connection.once('open', () => console.log('Now connected to MongoDB cloud.'))
mongoose.connect(mongodbCloud, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

app.use(express.json({limit: '50mb'}))
app.use(express.urlencoded({ limit: '50mb', extended: true }))



// routes(app);
const userRoutes = require('./routes/user')
const projectRoutes = require('./routes/project')
const taskRoutes = require('./routes/task')
const conversationRoutes = require('./routes/conversation')
const messageRoutes = require('./routes/message')
const contactRoutes = require('./routes/contact')

app.use('/api/users', cors(corsOptions), userRoutes)
app.use('/api/projects', cors(corsOptions), projectRoutes)
app.use('/api/tasks', cors(corsOptions), taskRoutes)
app.use('/api/conversations', cors(corsOptions), conversationRoutes)
app.use('/api/messages', cors(corsOptions), messageRoutes)
app.use('/api/contacts', cors(corsOptions), contactRoutes)




app.get('/', (req, res) => {
    res.send("connected")
});

server.listen(PORT, () => {
    console.log(`Server now running port: ${PORT}`)
})

