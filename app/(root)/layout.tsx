import { isAuth } from '@/lib/actions/auth.actions';
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation';
import { ReactNode } from 'react'

const layout = async ({children}:{children:ReactNode}) => {
  const isAuthUser = await isAuth();
  if(!isAuthUser){
    redirect('/sign-in')
  }
  return (
    <div className='root-layout'>
      <nav>
        <Link href={'/'} className='flex items-center gap-2'>
        <Image src={'/logo.svg'} alt='logo' width={38} height={32}/>
        <h2 className='text-primary-100'>Dr.Interview</h2>
        </Link>
      </nav>
      {children}
    </div>
  )
}
 
export default layout