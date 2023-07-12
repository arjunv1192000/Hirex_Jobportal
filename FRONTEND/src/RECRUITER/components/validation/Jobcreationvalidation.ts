
import * as Yup from 'yup';
import { ObjectSchema } from 'yup';

interface MyFormData {
    jobTitle: string;
    jobType: string;
    jobLevel: string;
    jobTiming: string;
    about: string;
    essentialKnowledge: string;
    location: string;
    qualification : string;
    salary: string;
    date : Date;
    experience: string;
    address : string;
    opening:string;
    enddate:Date;
    skills:string[];
}


const validationSchema:ObjectSchema<MyFormData> = Yup.object().shape({
    jobTitle: Yup.string() .trim().required('Job title is required'),
    jobType: Yup.string() .trim().required('Job type is required'),
    jobLevel: Yup.string() .trim().required('Job level is required'),
    jobTiming: Yup.string() .trim().required('Job timing is required'),
    about: Yup.string() .trim().required('About is required'),
    essentialKnowledge: Yup.string() .trim().required('Essential knowledge is required'),
    location: Yup.string().required('Location is required'),
    qualification: Yup.string() .trim().required('Qualification is required'),
    salary: Yup.string() .trim().required('Salary is required'),
    date: Yup.date().required('Date is required'),
    experience: Yup.string() .trim().required('Experience is required'),
    address: Yup.string() .trim().required('Address is required'),
    opening:Yup.string() .trim().required('opening is required'),
    enddate: Yup.date().required('End Date is required'),
    skills: Yup.array().required('Skills are required'),
  });
  export default validationSchema;