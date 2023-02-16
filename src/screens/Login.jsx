import React from 'react';
import { useFormik, FormikProvider, Form } from 'formik';
import * as Yup from 'yup';
import logo from '../assets/images/kiwify-green-logo.png';
import TextInputLiveFeedback from '../components/FormComponents/TextInputLiveFeedback';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (values) => {
      await sleep(500);
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required('Esse campo é obrigatório')
        .matches(
          /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
          'O e-mail deve ser válido'
        ),
      password: Yup.string().required('Esse campo é obrigatório')
    }),
  });

  return (
    <FormikProvider value={formik}>
      <div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
         {/* This part is header and logo section of the login page */}
         <div class="sm:mx-auto sm:w-full sm:max-w-md">
          <img src={logo} alt="Workflow" class="mx-auto h-12 w-auto" /> 
          <h2 class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
            { "Entrar na sua conta"}
          </h2>
          <p class="mt-2 text-center text-base leading-5 text-gray-600">
            { " Ou " }
            <a href="/signup?redirect" class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">
              fazer cadastro
            </a>
          </p>
        </div>
        
        <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <Form className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
            <TextInputLiveFeedback
              label="E-mail"
              id="email"
              name="email"
              type="text"
              className="bg-slate-100 rounded"
            />

            <div className='mt-6'>
              <TextInputLiveFeedback
                label="Senha"
                id="password"
                name="password"
                type="password"
                className="bg-slate-100 rounded"
              />
            </div>
            <div class="mt-2 flex items-center justify-end">
              <div class="text-sm leading-5">
                <a href="/ResetPassword" class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                  Esqueceu a senha?
                </a>
              </div>
            </div>
            <div>
              <div class="mt-6">
                <span class="block w-full rounded-md shadow-sm">
                  <button type="button" class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                    Entrar
                  </button>
                </span>
              </div>
            </div>
          </Form>
        </div>

      </div>
    </FormikProvider>
  );
};


export default Login;