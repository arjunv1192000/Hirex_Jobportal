import React from 'react';
import { Box, TextField, Button, Avatar, Typography } from '@mui/material';
import { useFormik } from 'formik';
import ValidationSchema from './validation/profileformvalidation.ts';
import { useNavigate } from 'react-router-dom';
import Axios from '../../axios/axios.ts';
import { useSelector } from "react-redux";
import recruiterapi from '../utils/axios.ts';



type RootState = {
    recruiter: {
        value: {
            id: string | null;
            companyname: string | null;
            name: string | null;
            email: string | null;
            access_token: string;
        };
    };
};





interface MyFormData {
    name: string;
    email: string;
    phone: string;
    about: string;
    companyname: string;
    image: File | null;
    userimage: string;

}

function Profileform() {
    const navigate = useNavigate();
    const recruiterData = useSelector((state: RootState) => state.recruiter.value);
    const id = recruiterData.id;




    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            about: '',
            companyname: '',
            userimage: '',

        } as MyFormData,
        validationSchema: ValidationSchema,
        onSubmit: async (values) => {
            const fileimg = values.image;
            if (!fileimg) {
                formik.setFieldError('image', 'Image is required');
            }



            try {
                const imageResponse = await Axios.get('/s3service');
                const imageUrl = imageResponse.data.response;



                const imageUploadResponse = await fetch(imageUrl, {
                    method: 'PUT',
                    body: fileimg,
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });


                const userimage = imageUrl.split('?')[0];
                console.log(userimage);
                formik.setFieldValue('userimage', userimage);

                const body = {
                    name: values.name,
                    email: values.email,
                    phone: values.phone,
                    about: values.about,
                    companyname: values.companyname,
                    image: userimage,
                    recruiterId: id,
                };


                const response = await recruiterapi.post('/profile/addprofile', body);



                if (response.data.status === true) {
                    navigate('/recruiter/profile');
                }
            } catch (error) {
                console.error('Error uploading image:', error);
            }
        },

    });

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.currentTarget.files && event.currentTarget.files[0];
        formik.setFieldValue('image', file || null);
    };



    return (
        <Box
            sx={{
                width: '70%',
                height: 'auto',
                borderRadius: 2,
                margin: 3,

            }}
        >
            <Typography margin={5} fontSize={28} fontWeight={1000}>
                Create your profile
            </Typography>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 3, width: '40ch' },
                    marginLeft: 30

                }}
                noValidate
                onSubmit={formik.handleSubmit}
                encType="multipart/form-data"
            >
                <div>
                    <Avatar id="img"
                        alt=""
                        src=""
                        sx={{ width: 80, height: 80, marginTop: 4, marginLeft: 4 }}
                    />
                    <Typography marginLeft={3}>Upload your profile image</Typography>
                    <TextField
                        margin="normal"
                        required
                        id="image"
                        label=""
                        name="image"
                        type="file"
                        autoFocus
                        onChange={handleImageChange}
                        error={(formik.touched.image || formik.submitCount > 0) && Boolean(formik.errors.image)}
                        helperText={(formik.touched.image || formik.submitCount > 0) && formik.errors.image}
                        onBlur={formik.handleBlur}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Fullname"
                        name="name"
                        autoComplete="name"
                        autoFocus
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        error={formik.touched.name && Boolean(formik.errors.name)}
                        helperText={formik.touched.name && formik.errors.name}
                        sx={{ width: "60%", }}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="about"
                        label="About"
                        name="about"
                        autoComplete="About"
                        autoFocus
                        multiline
                        maxRows={4}
                        value={formik.values.about}
                        onChange={formik.handleChange}
                        error={formik.touched.about && Boolean(formik.errors.about)}
                        helperText={formik.touched.about && formik.errors.about}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="phone"
                        label="Phonenumber"
                        name="phone"
                        autoComplete="phone"
                        autoFocus
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        error={formik.touched.phone && Boolean(formik.errors.phone)}
                        helperText={formik.touched.phone && formik.errors.phone}
                        sx={{ width: "60%", }}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}

                        sx={{ width: "60%", }}
                    />


                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="companyname"
                        label="companyname"
                        name="companyname"
                        autoComplete="companyname"
                        autoFocus
                        value={formik.values.companyname}
                        onChange={formik.handleChange}
                        error={formik.touched.companyname && Boolean(formik.errors.companyname)}
                        helperText={formik.touched.companyname && formik.errors.companyname}

                    />
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ mt: 3, mb: 2, height: 60, width: '60%', backgroundColor: '#131392', ml: 20 }}
                    >
                        Submit
                    </Button>
                </div>
            </Box>
        </Box>
    );
}

export default Profileform;
