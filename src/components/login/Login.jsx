import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
// import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import GoogleIcon from '@mui/icons-material/Google';

const validationSchema = yup.object({
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
});

export default function Login() {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <>
            <h1 className={"text-black mb-5"}>Hone</h1>
            <div>
                <form onSubmit={formik.handleSubmit}>
                    <TextField
                        fullWidth
                        id="email"
                        name="email"
                        label="Email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                    />
                    <TextField
                        fullWidth
                        id="password"
                        name="password"
                        label="Password"
                        type="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                        className="!mt-5"
                    />
                    <Button variant="outlined" fullWidth type="submit" className={"!bg-orange-500 !w-48 !mt-5 !rounded-lg !text-white"}>
                        Login
                    </Button>
                    <Button variant="outlined" fullWidth type="submit" className={"!bg-white !text-black !w-48 !mt-5 !rounded-lg"}>
                        Create Account
                    </Button>
                    {/* <GoogleIcon /> */}
                </form>
            </div>
        </>
    )
}