import { faSignIn } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Input } from 'components';
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
                <Input label="Login" id="login" type='text' />
                <Input label="Password" id="password" type='password' />
            </form>
            <div className='flex justify-around items-center'>
                <caption>
                    Do not have an account? <br />
                    <Link href="/">Register</Link>
                </caption>
                <Link href="/"><button className='btn-primary'>
                    Sign in
                    <FontAwesomeIcon
                        icon={faSignIn}
                        className='font-default text-white pl-1'
                    />
                </button></Link>
            </div>
        </div>
    );
}
