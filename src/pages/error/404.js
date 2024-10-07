import React from 'react'

function NotFound() {
    return (
        <div className="d-flex justify-content-center align-items-center h-100 mt-5 mb-5 py-5">
            <div className="text-center">
                <div className="display-1 fw-bold">404</div>
                <div className="fs-3 fw-medium">Page Not Found</div>
                <div className="fs-5 fw-light">Sorry, the page you are looking for does not exist.</div>
                <div className="mt-5">
                    <a href="/" className="btn btn-success rounded-pill">
                        Back to Home
                    </a>
                </div>
            </div>
        </div>
    )
}

export default NotFound