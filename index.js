const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.static('public'));
app.get('/api/comments', async (req, res) => {
    try {
      
        const query = req.query.query;
        const apiUrl = `https://jsonplaceholder.typicode.com/comments?postId=3`;
        const response = await axios.get(apiUrl); 
        console.log("response",response.data)
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
