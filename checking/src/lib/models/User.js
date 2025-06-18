import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    id: {
        type: string,
        required: true,
        unique: true
    }
})

const User = mongoose.model('User', UserSchema)
export default User