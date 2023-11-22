import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@cluster0.cvvuuzw.mongodb.net/`
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }
}

export default Connection;