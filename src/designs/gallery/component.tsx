export default function Gallery() {
    return (
        <>
            <div className="outer flex flex-col justify-center items-center w-full h-screen">
                <h1 className="font-light text-white text-2xl m-0">Pure CSS Gradient Background Animation</h1>
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