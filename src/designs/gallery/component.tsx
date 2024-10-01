export default function Gallery() {
    return (
        <>
            <div className="outer d-flex flex-column justify-content-center w-100 h-100">
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <h1 className="fw-light text-white m-0">Pure CSS Gradient Background Animation</h1>
                    <div className="btn-group my-5">
                        <a href="https://codepen-api-export-production.s3.us-west-2.amazonaws.com/zip/PEN/pyBNzX/1578778289271/pure-css-gradient-background-animation.zip" className="btn btn-outline-light" aria-current="page">
                        <i className="fas fa-file-download me-2" /> SOURCE CODE</a>
                        <a href="https://codepen.io/P1N2O/full/pyBNzX" className="btn btn-outline-light">FULL SCREEN <i className="fas fa-expand ms-2" /></a>
                    </div>
                </div>
            </div>
            <style jsx>
                {`
                    .outer {
                        background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
                        background-size: 400% 400%;
                        animation: gradient 15s ease infinite;
                        height: 100vh;
                    }

                    @keyframes gradient {
                        0% {
                            background-position: 0% 50%;
                        }
                        50% {
                            background-position: 100% 50%;
                        }
                        100% {
                            background-position: 0% 50%;
                        }
                    }
                `}
            </style>
        </>
    )
}