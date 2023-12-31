import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import validationSchema from "./validation/Registervalidation";
import recruiterapi from '../utils/axios.ts';
import { useDispatch } from "react-redux";
import { login } from '../../redux/reducer/recruiterSlice'
import Axios from '../../axios/axios.ts';




interface FormValues {
    companyname: string,
    email: string;
    name: string;
    password: string;
    confirmPassword: string;
    image: File | null;
    userimage: string;

}

export default function SignIn() {

    const navigate = useNavigate();
    const dispatch = useDispatch();


    const formik = useFormik({
        initialValues: {
            companyname: '',
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            image:null,
            userimage: ''


        } as FormValues,
        validationSchema: validationSchema,
        onSubmit: async (values) => {

            const fileimg = values.image
            try {
                const imageResponse = await Axios.get('/s3service')

                const imgurl = imageResponse.data.response
               

                const imageUpload = await fetch(imgurl, {
                    method: 'PUT',
                    body: fileimg,
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                console.log('Image and CV uploaded successfully:', imageUpload);
                const userimage = imgurl.split('?')[0];
              
              
                formik.setFieldValue('userimage', userimage);
               
                
            const body = {
                companyname: values.companyname,
                name: values.name,
                email: values.email,
                password: values.password,
                confirmPassword: values.confirmPassword,
                image:userimage
                
            };
           


            recruiterapi.post("/signup", body).then((response) => {
                if (response.data.status == true) {
                    console.log(response,"fgfgfggfgf");
                    localStorage.setItem('access_token_recruiter', response.data.AccessToken)
                    localStorage.setItem('refresh_token_recruiter', response.data.RefreshToken)
                    dispatch(login({id:response.data.isRecruiter.recruiterId ,companyname:response.data.isRecruiter.recruiterCompany, name: response.data.isRecruiter.recruiterName,email: response.data.isRecruiter.recruiterEmail,image:response.data.isRecruiter.recruiterImage,jwt:response.data.AccessToken}))


                    navigate("/recruiter/dashboard")

                } else {
                    toast.error(response.data.message)
                    setTimeout(()=>{
                        navigate("/recruiter/login")

                    },1500)

                }


            }).catch((response) => {
                console.error(response.message,);



            })



            } catch (error) {
                console.error('Error uploading image and CV:', error);
            }

        
              
               

        },

    });
    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.currentTarget.files && event.currentTarget.files[0];
        formik.setFieldValue('image', file || null);
    };

    return (
        <Container component="main" maxWidth="md">
            <Box
                sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Box
                    component="img"
                    sx={{
                        height: 233,
                        width: 350, marginLeft: 80,
                        maxHeight: { xs: 233, md: 167 },
                        maxWidth: { xs: 350, md: 250 },
                    }}
                    alt=""
                    src="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/login-register/img-4.svg"
                />
                <Typography component="h1" variant="h5" sx={{ fontSize: 12, fontWeight: 500, color: "blue", marginBottom: 4 }}>
                    Register
                </Typography>
                <Typography component="h1" variant="h5">
                    Registration for Recruiters
                </Typography>

                <Box component="form" noValidate onSubmit={formik.handleSubmit} sx={{ paddingLeft: 30 }}>
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
                        sx={{ width: "60%", }}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                        sx={{ width: "60%" }}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="name"
                        name="name"
                        autoComplete="name"
                        autoFocus
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        error={formik.touched.name && Boolean(formik.errors.name)}
                        helperText={formik.touched.name && formik.errors.name}
                        sx={{ width: "60%" }}
                    />
                    <TextField
                        margin="normal"
                        required
                        id="image"
                        label=""
                        name="image"
                        type="file"
                        autoFocus
                        onChange={handleImageChange} // Handle file selection
                        error={formik.touched.image && Boolean(formik.errors.image)}
                        helperText={formik.touched.image && formik.errors.image}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                        autoComplete="current-password"
                        sx={{ width: "60%" }}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="confirmPassword"
                        label="confirmPassword"
                        name="confirmPassword"
                        autoComplete="confirmPassword"
                        autoFocus
                        value={formik.values.confirmPassword}
                        onChange={formik.handleChange}
                        error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                        helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                        sx={{ width: "60%" }}
                    />

                    <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2, height: 60, width: "60%", backgroundColor: '#131392', }} >
                        Submit&Register
                    </Button>
                    <Grid container paddingLeft={9}>

                        <Link href="#" variant="body2" onClick={() => navigate('/recruiter/login')}>
                            {"Already have an account?Login"}
                        </Link>

                    </Grid>
                </Box>
            </Box>
            <Box
                component="img"
                sx={{
                    height: 350,
                    width: 700,
                    maxHeight: { xs: 350, md: 250 },
                    maxWidth: { xs: 450, md: 350 },
                }}
                alt=""
                src="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/login-register/img-2.svg"
            />
            <Toaster
                position="top-center"
                reverseOrder={false}
            />

        </Container>
    );
}