import React from 'react';
import { useForm } from 'react-hook-form';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Config/firebase/firebaseconfig';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate('/dashboard');
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
    reset();
  };

  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      {/* Ensures the background of the entire screen is white */}
      <div className="bg-white shadow-md shadow-2xl  rounded-lg p-8 w-full max-w-xs">
        <h1 className="text-center text-2xl font-bold mb-6">Login</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered input-neutral w-full bg-white hover:border-violet-600"
            {...register('email', { required: true })}
          />
          {errors.email && (
            <span className="text-error text-sm">This field is required</span>
          )}
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered input-neutral w-full bg-white hover:border-violet-600"
            {...register('password', { required: true })}
          />
          {errors.password && (
            <span className="text-error text-sm">This field is required</span>
          )}

          <button className="btn btn-primary mx-[5rem] px-8">Login</button>
        </form>
        <br />
        <Link
          to="/register"
          className="m-3 text-blue-600 hover:text-blue-800 underline"
        >
          Don't have an account? Register
        </Link>
      </div>
    </div>
  );
};

export default Login;