import { isAuth } from '@/lib/actions/auth.actions';
import { redirect } from 'next/navigation';
import { ReactNode } from 'react';

const AuthLayout = async({children}:{children:ReactNode}) => {
   const isAuthUser = await isAuth();
    if(isAuthUser){
      redirect('/')
    }
  return (
    <div className='auth-layout'>{children}</div>
  )
}

export default AuthLayout