import React from 'react'
import { signIn } from 'next-auth/react'

const Login = () => {
  return (
    <>
      {/* <!-- component --> */}
      {/* <!-- This is an example component --> */}
      <div className='flex items-center justify-center min-h-screen bg-slate-200'>
        <div className='flex flex-col'>
          {/* <!-- Button --> */}
          <button
            type='button'
            className='flex break-inside bg-black rounded-3xl px-8 py-4 mb-4 w-full dark:bg-slate-800 dark:text-white'
          >
            <div className='flex items-center justify-between flex-1'>
              <span className='text-lg font-medium text-white'>
                Get started
              </span>
              <svg
                width='17'
                height='17'
                viewBox='0 0 17 17'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M0 8.71423C0 8.47852 0.094421 8.25246 0.262491 8.08578C0.430562 7.91911 0.658514 7.82547 0.896201 7.82547H13.9388L8.29808 2.23337C8.12979 2.06648 8.03525 1.84013 8.03525 1.60412C8.03525 1.36811 8.12979 1.14176 8.29808 0.974875C8.46636 0.807989 8.6946 0.714233 8.93259 0.714233C9.17057 0.714233 9.39882 0.807989 9.5671 0.974875L16.7367 8.08499C16.8202 8.16755 16.8864 8.26562 16.9316 8.3736C16.9767 8.48158 17 8.59733 17 8.71423C17 8.83114 16.9767 8.94689 16.9316 9.05487C16.8864 9.16284 16.8202 9.26092 16.7367 9.34348L9.5671 16.4536C9.39882 16.6205 9.17057 16.7142 8.93259 16.7142C8.6946 16.7142 8.46636 16.6205 8.29808 16.4536C8.12979 16.2867 8.03525 16.0604 8.03525 15.8243C8.03525 15.5883 8.12979 15.362 8.29808 15.1951L13.9388 9.603H0.896201C0.658514 9.603 0.430562 9.50936 0.262491 9.34268C0.094421 9.17601 0 8.94995 0 8.71423Z'
                  fill='white'
                />
              </svg>
            </div>
          </button>

          {/* <!-- Button --> */}
          <button
            type='button'
            className='flex break-inside bg-white text-black border-2 border-black rounded-3xl px-6 py-3 mb-4 w-full dark:bg-slate-800 dark:text-white'
          >
            <div className='m-auto'>
              <div className='flex items-center justify-start flex-1 space-x-4'>
                <svg width='25' height='25' viewBox='0 0 24 24'>
                  <path
                    fill='currentColor'
                    d='M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z'
                  />
                </svg>
                <span className='font-medium mb-[-2px]'>
                  Continue with Google
                </span>
              </div>
            </div>
          </button>

          {/* <!-- Button --> */}
          <button
            type='button'
            className='flex break-inside bg-white text-black border-2 border-black rounded-3xl px-6 py-3 mb-4 w-full dark:bg-slate-800 dark:text-white'
            onClick={() => signIn()}
          >
            <div className='m-auto'>
              <div className='flex items-center justify-start flex-1 space-x-4'>
                <svg width='25' height='25' viewBox='0 0 24 24'>
                  <path
                    fill='currentColor'
                    d='M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z'
                  />
                </svg>
                <span className='font-medium mb-[-2px]'>
                  Continue with Facebook
                </span>
              </div>
            </div>
          </button>

          {/* <!-- Button --> */}
          <button
            type='button'
            className='flex break-inside bg-[#2ea44f] text-white border-2 border-transparent rounded-3xl px-6 py-3 mb-4 w-full'
          >
            <div className='m-auto'>
              <div className='flex items-center justify-start flex-1 space-x-4'>
                <svg width='25' height='25' viewBox='0 0 24 24'>
                  <path
                    fill='currentColor'
                    d='M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z'
                  />
                </svg>
                <span className='font-medium'>Continue with Github</span>
              </div>
            </div>
          </button>
        </div>
      </div>
    </>
  )
}

export default Login
