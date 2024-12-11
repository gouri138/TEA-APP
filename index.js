import express from 'express'

const app=express()
const port = process.env.PORT || 3000;
const hostname = 'localhost'; 


app.use(express.json());

let teaData=[]
let nextID=1


//add a new tea
app.post('/teas',(req,res)=>
{
    const {name,price} = req.body
    const newTea={id:nextID++,name,price}
    teaData.push(newTea)
    res.status(201).send(newTea)

})



//get all tea
app.get('/teas',(req,res)=>
{
    res.status(200).send(teaData)
})

//get tea with id
app.get('/teas/:id',(req,res)=>
{
   const tea= teaData.find(t=>t.id===parseInt(req.params.id))
    {
        if(!tea)
        {
            return res.status(404).send('tea not found')
        }
        res.status(200).send(tea)
    }
})

//update tea

app.put('/teas/:id',(req,res)=>
{
    const teaID=req.params.id
    const tea=teaData.find(t=>t.id===parseInt(req.params.id))
    if(!tea)
    {
        return res.status(404).send('Tea not found')

    }
    const{name,price}=req.body
    tea.name=name;
    tea.price=price
    res.status(200).send(tea)

})


//delete tea

app.delete('/teas/:id',(req,res)=>
{
    teaData.findIndex(t=>t.id===parseInt(req.params.id))
    if(index===-1)
    {
        return res.status(404).send("NOT FOUND") 
    }
    teaData.splice(index,1)
    return res.status(204).send("delete") 
})





app.get("/",(req,res)=>
{
    res.send("hellooo from gourii")
})


app.get("/ice-tea",(req,res)=>
    {
        res.send("hellooo from ice-tea")
    })


app.get("/twitter",(req,res)=>
        {
            res.send("hellooo from twitter")
        })

app.listen(port,()=>
{
    console.log(`SERVER IS RUNNING AT PORT http://${hostname}:${port}`)
})