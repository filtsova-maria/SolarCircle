import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


export default function Page() {
    return (
        <div className='flex-col border border-grey-dark rounded bg-white p-4 min-w-[24rem] shadow-md'>
            <Image className='mx-auto' src="/logo.svg" alt="logo" width={64} height={64} />
            <div className='my-1'>
                Looks like you are not signed in!
            </div>
            <form className='my-3 flex flex-col gap-2'>
                <div className='flex items-center'>
                    <label htmlFor='login' className='px-2 text-right table-cell text-grey-mid w-24'>Login</label>
                    <input id="login" className='border border-grey-mid rounded table-cell h-8 flex-0' />
                </div>
                <div className='flex items-center'>
                    <label htmlFor='password' className='px-2 text-right table-cell text-grey-mid w-24'>Password</label>
                    <input id="password" type='password' className='border border-grey-mid rounded table-cell h-8 flex-0' />
                </div>
            </form>
            <div className='flex justify-around items-center'>
                <caption>
                    Do not have an account? <br />
                    <Link href="/">Register</Link>
                </caption>
                <Link href="/"><button className='btn-primary'>{"Sign in >"}</button></Link>
            </div>
        </div>
    );
}
