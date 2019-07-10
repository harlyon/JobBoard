const mongoose = require("mongoose")
const Schema = mongoose.Schema

const JobSchema = new Schema({
    company_name: { type: String, required: true },
    email: { type: String, required: true },
    job_title: { type: String, required: true },
    job_description: { type: String, required: true },
    address: { type: String, required: true },
    deadline: { type: String, required: true },
    experience: { type: String, required: true },
    qualification: { type: String, required: true },
    skills: { type: String, required: true },
    salary: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
},{
    timestamps: true,
  })

module.exports = Job = mongoose.model('jobs', JobSchema)