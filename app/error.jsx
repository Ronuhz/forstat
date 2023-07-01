'use client'

const error = ({ error, reset }) => {
	return (
		<div className='flex flex-col items-center justify-center overflow-hidden mt-40 font-burbank-black outline-black'>
			<h1 className='text-center text-5xl text-red-600'>
				Something went wrong!
			</h1>
			<button onClick={reset} className='mt-8 text-4xl primary_button'>
				Try Again
			</button>
		</div>
	)
}

export default error
