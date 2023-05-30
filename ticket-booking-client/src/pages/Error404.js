import React from 'react'
import { Link } from 'react-router-dom'

export default function Error404() {
  return (
    <div>
         <>
      {/* begin::Title */}
      <h1 className='fw-bolder fs-2hx text-gray-900 mb-4'>Oops!</h1>
      {/* end::Title */}

      {/* begin::Text */}
      <div className='fw-semibold fs-6 text-gray-500 mb-7'>We can't find that page.</div>
      {/* end::Text */}

      {/* begin::Illustration */}
      <div className='mb-3'>
      </div>
      {/* end::Illustration */}

      {/* begin::Link */}
      <div className='mb-0'>
        <Link to='/' className='btn btn-sm btn-success'>
          Return Home
        </Link>
      </div>
      {/* end::Link */}
    </>
    </div>
  )
}
