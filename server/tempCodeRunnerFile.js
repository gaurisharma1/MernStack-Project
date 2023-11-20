app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);


app.use((req,res,next)=>{
    console.log("I am a middleware");
})

app.listen(2000, () => {
    connect();
    console.log("Connected to backend.")
})

