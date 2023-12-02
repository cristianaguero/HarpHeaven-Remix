

function Course({ course }) {

    const { title, content, image } = course;

    const imageSrc = image?.data?.attributes?.url;

    return (
        <>
            <style jsx='true'>{`
                .course {
                    background-image: linear-gradient(to right, rgb(0 0 0 / .65), rgb(0 0 0 / .7)), url(${imageSrc});
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                }
            `}</style>

            <div className="container course-grid">
                <div className="content">
                    <h2 className="heading">{title}</h2>
                    <p className="text">{content}</p>
                </div>
            </div>
        </>
    )
}

export default Course