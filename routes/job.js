const express = require("express")
const router = express.Router()
// const cors = require("cors")
const multer = require("multer")
const Job = require("../models/job")

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});

router.get("/", (req, res, next) => {
  Job.find()
    .select("company_name job_title _id jobImage job_description address deadline experience qualification skills salary city country")
    .exec()
    .then(docs => {
      const response = {
        count: docs.length,
        jobs: docs.map(doc => {
          return {
            _id: doc._id,
            company_name: doc.company_name,
            job_title: doc.job_title,
            jobImage: doc.productImage,
            job_description: doc.job_description,
            address: doc.address,
            deadline: doc.deadline,
            experience: doc.experience,
            qualification: doc.qualification,
            skills: doc.skills,
            salary: doc.salary,
            city: doc.city,
            country: doc.country,
            request: {
              type: "GET",
              url: "http://localhost:9000/jobs/" + doc._id
            }
          };
        })
      };
      //   if (docs.length >= 0) {
      res.status(200).json(response);
      //   } else {
      //       res.status(404).json({
      //           message: 'No entries found'
      //       });
      //   }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

router.post("/", upload.single('jobImage'), (req, res, next) => {
  const job = new Job({
    _id: new mongoose.Types.ObjectId(),
    company_name: req.body.company_name,
    job_title: req.body.job_title,
    jobImage: req.file.path,
    job_description: req.body.job_description,
    address: req.body.address,
    deadline: req.body.deadline,
    experience: req.body.experience,
    qualification: req.body.qualification,
    skills: req.body.skills,
    salary: req.body.salary,
    city: req.body.city,
    country: req.body.country,
  });
  job
    .save()
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: "Created product successfully",
        createdJob: {
          _id: result._id,
          company_name: result.company_name,
          job_title: result.job_title,
          jobImage: result.productImage,
          job_description: result.job_description,
          address: result.address,
          deadline: result.deadline,
          experience: result.experience,
          qualification: result.qualification,
          skills: result.skills,
          salary: result.salary,
          city: result.city,
          country: result.country,
            request: {
                type: 'GET',
                url: "http://localhost:9000/jobs/" + result._id
            }
        }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

router.get("/:jobId", (req, res, next) => {
  const id = req.params.jobId;
  Job.findById(id)
  .select("company_name job_title _id jobImage job_description address deadline experience qualification skills salary city country")
    .exec()
    .then(doc => {
      console.log("From database", doc);
      if (doc) {
        res.status(200).json({
            job: doc,
            request: {
                type: 'GET',
                url: 'http://localhost:9000/jobs'
            }
        });
      } else {
        res
          .status(404)
          .json({ message: "No valid entry found for provided ID" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});