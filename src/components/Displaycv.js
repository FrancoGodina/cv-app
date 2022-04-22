function Displaycv(props) {
    return(
        <div className="display-container">
            <div className="display-header">
                <h1>{props.personalInformation.name}</h1>
                <h2>{props.personalInformation.title}</h2>
            </div>
            <hr></hr>
            <div className="display-body">
                <div className="personal">
                    <h1>Personal Details</h1>
                    <h3>Description:</h3>
                    <p>{props.personalInformation.description}</p>
                    <h3>Email:</h3><p>{props.personalInformation.email}</p>
                    <h3>Phone number:</h3><p>{props.personalInformation.phone}</p>
                </div>
                <hr></hr>
                <div className="education">
                    <h1>Education</h1>
                    <h3>School:</h3>
                    <p>{props.educationInformation.school}</p>
                    <h3>Title:</h3>
                    <p>{props.educationInformation.title}</p>
                    <h3>Date:</h3>
                    <p>{props.educationInformation.date}</p>
                </div>
                <hr></hr>
                    <h1>Experience</h1>
                    {props.experiences.map((exp, i) => {
                        return(
                            <div className="experience" key={i}>
                                <h3>Date:</h3>
                                <p>{exp.from} - {exp.to}</p>
                                <h3>Position:</h3>
                                <p>{exp.position}</p>
                                <h3>Company:</h3>
                                <p>{exp.company}</p>
                            </div>
                        )
                    })}
            </div>
        </div>
        

    )
}

export default Displaycv;