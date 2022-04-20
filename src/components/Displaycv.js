function Displaycv(props) {
    return(
        <div className="container">
            <div className="header">
                <h1>{props.personalInformation.name}</h1>
                <h2>{props.personalInformation.title}</h2>
            </div>
            <div className="personal">
                <h1>Personal Details</h1>
                <h3>Description:</h3>
                <p>{props.personalInformation.description}</p>
                <h3>Email:</h3><p>{props.personalInformation.email}</p>
                <h3>Phone number:</h3><p>{props.personalInformation.phone}</p>
            </div>
            <div className="education">
                <h1>Education</h1>
                <h3>School:</h3>
                <p>{props.educationInformation.school}</p>
                <h3>Title:</h3>
                <p>{props.educationInformation.title}</p>
                <h3>Date:</h3>
                <p>{props.educationInformation.date}</p>
            </div>
        </div>
        

    )
}

export default Displaycv;