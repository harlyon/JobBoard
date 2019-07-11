const express = require("express")
const mongoose = require("mongoose");
const router = express.Router()
const Job = require("../models/job")

router.route('/').get((req, res) => {
  Job.find()
    .then(jobs => res.json(jobs))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  _id = new mongoose.Types.ObjectId();
  const company_name = req.body.company_name;
  const email = req.body.email;
  const job_title = req.body.job_title;
  const job_description = req.body.job_description;
  const address = req.body.address;
  const deadline = req.body.deadline;
  const experience = req.body.experience;
  const qualification = req.body.qualification;
  const skills = req.body.skills;
  const salary = req.body.salary;
  const city = req.body.city;
  const country = req.body.country;

  const newJob = new Job({
    company_name,
    email,
    job_title,
    job_description,
    address,
    deadline,
    experience,
    qualification,
    skills,
    salary,
    city,
    country,
  });

  newJob.save()
  .then(() => res.json('Job added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Job.findById(req.params.id)
    .then(job => res.json(job))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Job.findByIdAndDelete(req.params.id)
    .then(() => res.json('Job deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Exercise.findById(req.params.id)
    .then(job => {
      job.company_name = req.body.company_name;
      job.email = req.body.email;
      job.job_title = req.body.job_title;
      job.job_description = req.body.job_description;
      job.address = req.body.address;
      job.deadline = req.body.deadline;
      job.experience = req.body.experience;
      job.qualification = req.body.qualification;
      job.skills = req.body.skills;
      job.salary = req.body.salary;
      job.city = req.body.city;
      job.country = req.body.country;

      job.save()
        .then(() => res.json('Job updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;