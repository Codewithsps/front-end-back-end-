import express from 'express';
const app = express();
const port = process.env.PORT || 3000; 

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// }); 
app.use (express.static('dist'));
app.get('/api/jokes', (req, res) => {
    const jokes = [
        {   id: 1,  
            joke: 'Why did the chicken go to the seance? To talk to the other side.',
        },
        
        {   id: 2,
            joke: 'Why did the scarecrow win an award? Because he was outstanding in his field.',
        },
        
        {   id: 3,
            joke: 'What do you call a fish wearing a crown? A kingfish.',
        },
    ];  
    res.send(jokes);
});

app.listen(3000, () => {
  console.log(`Server is running on http://localhost:${port}`);
});