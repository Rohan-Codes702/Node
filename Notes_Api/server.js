const express=require('express');

const fs=require('fs');
const app=express();
app.use(express.json());

const notes_file="./data/notes.json";

const loadNotes=()=>{
const data=fs.readFileSync(notes_file);
return JSON.parse(data);
};

const saveNotes=(notes)=>{
    fs.writeFileSync(notes_file,JSON.stringify(notes,null,2));
};

app.get("/notes",(req,res)=>{
    const notes=loadNotes();
    res.json(notes);
})

app.get("/notes/:id",(req,res)=>{
    const notes=loadNotes();

    const note=notes.find(n=>n.id==req.params.id);

    if(!note){
        return res.status(404).json({message:"Note not found"});
    }

    res.json(note);
});

app.post("/notes",(req,res)=>{
    const notes=loadNotes();

    const newNote={
        id:notes.length? notes[notes.length-1].id+1:1,
        title:req.body.title,
        content:req.body.content
    };

    notes.push(newNote);
    saveNotes(notes);

    res.status(201).json(newNote);
})

app.put("/notes/:id",(req,res)=>{
    const notes=loadNotes();

    const note=notes.find(n=>n.id ==req.params.id);

    if(!note){
        return res.status(404).json({message: "Note not found"});
    }

    note.title=req.body.title || note.title;
    note.content=req.body.content || note.content;

    saveNotes(notes);
    res.json(note);
});

app.delete("/notes/:id",(req,res)=>{
    const notes=loadNotes();
    const remainingNotes=notes.filter(n=>n.id!=req.params.id);

    if(remainingNotes.length===notes.length){
        return res.status(404).json({message:"Note not found"});
    }

    saveNotes(remainingNotes);

    res.json({message:"Note deleted successfully"});
});

app.listen(3000,()=>{
console.log("Notes API running at http://localhost:3000");
})

