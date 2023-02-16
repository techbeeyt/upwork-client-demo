import React, { useState } from 'react';
import { useFormik, FormikProvider, Form } from 'formik';
import * as Yup from 'yup';
import logo from '../assets/images/kiwify-green-logo.png';
import CheckboxWithLiveFeedback from '../components/FormComponents/CheckboxWithFeedback';
import TextInputLiveFeedback from '../components/FormComponents/TextInputLiveFeedback';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const Register = () => {
  const [isAcceptedTerms, setIsAcceptedTerms ] = useState(false);
  const [isTermsTouched, setIsTermsTouched ] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: '',
      repeatEmail: '',
      password: '',
    },
    onSubmit: async (values) => {
      if(isAcceptedTerms){
        await sleep(500);
        alert(JSON.stringify(values, null, 2));
      } else {
        setIsTermsTouched(true);
      }
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required('Esse campo é obrigatório')
        .matches(
          /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
          'O e-mail deve ser válido'
        ),
      repeatEmail: Yup.string()
        .equals([Yup.ref('email')], 'Os e-mails devem ser iguais')
        .required('Esse campo é obrigatório'),
      password: Yup.string().required('Esse campo é obrigatório'),
    }),
  });

  return (
    <FormikProvider value={formik}>
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
         {/* This part is header and logo section of the login page */}
         <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img src={logo} alt="Workflow" className="mx-auto h-12 w-auto" /> 
          <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
            { "Criar nova conta"}
          </h2>
          <p className="mt-2 text-center text-base leading-5 text-gray-600">
            { " Ou " }
            <a href="/signup?redirect" className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">
              entrar na sua conta existente
            </a>
          </p>
        </div>
        
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
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
                label="Repetir e-mail"
                id="repeatEmail"
                name="repeatEmail"
                type="text"
                className="bg-slate-100 rounded"
              />
            </div>

            <div className='mt-6'>
              <TextInputLiveFeedback
                label="Senha"
                id="password"
                name="password"
                type="password"
                className="bg-slate-100 rounded"
              />
            </div>
            <div className="mt-6">
              <CheckboxWithLiveFeedback
                name="terms"
                isChecked={isAcceptedTerms}
                setIsChecked={setIsAcceptedTerms}
                isTouched={isTermsTouched}
                setIsTermsTouched={setIsTermsTouched}
              />
            </div>
            <div>
              <div className="mt-6">
                <span className="block w-full rounded-md shadow-sm">
                  <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                    Criar conta
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


export default Register;