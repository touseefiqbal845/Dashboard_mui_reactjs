import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Box,
  Grid,
  IconButton,
} from "@mui/material";

import { Iconify } from 'src/components/iconify';


const jobList = [
  {
    id: 1,
    companyLogo: "https://cdn.iconscout.com/icon/free/png-256/google-160-189824.png",
    title: "Software Engineer",
    postedDate: "21 Mar 2025",
    candidates: 12,
    experience: "No experience",
    jobType: "Full-time",
    salary: "Negotiable",
    postedBy: "CEO",
  },
  {
    id: 2,
    companyLogo: "https://cdn.iconscout.com/icon/free/png-256/google-160-189824.png",
    title: "Marketing Manager",
    postedDate: "19 Mar 2025",
    candidates: 12,
    experience: "1 year exp",
    jobType: "Part-time",
    salary: "Negotiable",
    postedBy: "CTO",
  },
  {
    id: 3,
    companyLogo: "https://cdn.iconscout.com/icon/free/png-256/google-160-189824.png",
    title: "Data Scientist",
    postedDate: "18 Mar 2025",
    candidates: 12,
    experience: "2 year exp",
    jobType: "On demand",
    salary: "Negotiable",
    postedBy: "Project Manger",
  },
  {
    id: 3,
    companyLogo: "https://cdn.iconscout.com/icon/free/png-256/google-160-189824.png",
    title: "Data Scientist",
    postedDate: "18 Mar 2025",
    candidates: 12,
    experience: "2 year exp",
    jobType: "On demand",
    salary: "Negotiable",
    postedBy: "Project Manger",
  }, {
    id: 3,
    companyLogo: "https://cdn.iconscout.com/icon/free/png-256/google-160-189824.png",
    title: "Data Scientist",
    postedDate: "18 Mar 2025",
    candidates: 12,
    experience: "2 year exp",
    jobType: "On demand",
    salary: "Negotiable",
    postedBy: "Project Manger",
  }, {
    id: 3,
    companyLogo: "https://cdn.iconscout.com/icon/free/png-256/google-160-189824.png",
    title: "Data Scientist",
    postedDate: "18 Mar 2025",
    candidates: 12,
    experience: "2 year exp",
    jobType: "On demand",
    salary: "Negotiable",
    postedBy: "Project Manger",
  }, {
    id: 3,
    companyLogo: "https://cdn.iconscout.com/icon/free/png-256/google-160-189824.png",
    title: "Data Scientist",
    postedDate: "18 Mar 2025",
    candidates: 12,
    experience: "2 year exp",
    jobType: "On demand",
    salary: "Negotiable",
    postedBy: "Project Manger",
  }, {
    id: 3,
    companyLogo: "https://cdn.iconscout.com/icon/free/png-256/google-160-189824.png",
    title: "Data Scientist",
    postedDate: "18 Mar 2025",
    candidates: 12,
    experience: "2 year exp",
    jobType: "On demand",
    salary: "Negotiable",
    postedBy: "Project Manger",
  }, 
];

const JobItem = () => {
  return (
    <Grid container spacing={3}>
      {jobList.map((job) => (
        <Grid item xs={12} sm={6} md={3} key={job.id}>
          <Card sx={{ borderRadius: 3, boxShadow: 2 }}>
            <CardContent>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Avatar src={job.companyLogo} sx={{ width: 40, height: 40 }} />
                <IconButton>
                  <Iconify icon="solar:cart-3-bold" width={24} />
                </IconButton>
              </Box>
              <Typography variant="h6" fontWeight="bold" mt={1}>
                {job.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Posted date: {job.postedDate}
              </Typography>
              <Box display="flex" alignItems="center" mt={1} color="green">
                <Iconify icon="solar:cart-3-bold" width={24} />
                <Typography variant="body2" ml={0.5}>
                  {job.candidates} candidates
                </Typography>
              </Box>
              <Box mt={2} mb={2} borderBottom="1px solid #eee" />
              <Grid container spacing={2}>


                {[
                  { icon: "material-symbols:work", text: job.experience },
                  { icon: "tabler:clock-hour-9", text: job.jobType },
                  { icon: "material-symbols:attach-money", text: job.salary },
                  { icon: "material-symbols:person-outline", text: job.postedBy },
                ].map((item, index) => (
                  <Grid item xs={6} key={index}>
                    <Box display="flex" alignItems="center" color="text.secondary">
                      <Iconify icon={item.icon} width={24} />
                      <Typography variant="body2" ml={0.5}>
                        {item.text}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>

            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default JobItem;
