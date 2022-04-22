import React from "react";
import { useState } from "react";
import Personal from "./components/Personal"
import Education from "./components/Education"
import Experience from "./components/Experience";
import Displaycv from "./components/Displaycv";
import {v4 as uuidv4} from "uuid";


function App(){

  const[personalInformation, setPersonalInformation] = useState({
    id: uuidv4(),
    name: "",
    title: "",
    email: "",
    phone: "",
    description: ""
  });

  const handleSavePersonalInformation = (nameIn , titleIn, emailIn, phoneIn, descriptionIn) => {

    const updatedPersonalInformation = { ...personalInformation };
    updatedPersonalInformation.name = nameIn;
    updatedPersonalInformation.title = titleIn;
    updatedPersonalInformation.email = emailIn;
    updatedPersonalInformation.phone = phoneIn;
    updatedPersonalInformation.description = descriptionIn;

    setPersonalInformation(updatedPersonalInformation);
  }

  const [educationInformation, setEducationInformation] = useState({
    id: uuidv4(),
    school: "",
    title: "",
    date: ""
  })

  const handleSaveEducationInformation = (schoolIn, titleIn, dateIn) => {

    const updatedEducationInformation = { ...educationInformation};
    updatedEducationInformation.school = schoolIn;
    updatedEducationInformation.title = titleIn;
    updatedEducationInformation.date = dateIn;

    setEducationInformation(updatedEducationInformation);
  }

  const [experiences, setExperiences] = useState([
    {
      id: uuidv4(),
      position: "",
      company: "",
      from: "",
      to: ""
    }
  ])

  const addExperience = () => {
    const updatedExperiences = [
      ...experiences,
      {
        id: uuidv4(),
        position: "",
        company: "",
        from: "",
        to: "",
      },
    ];
    setExperiences(updatedExperiences);
  }

  const handleSaveExperience = (experienceId, positionIn, companyIn, fromIn, toIn) => {
    const updatedExperiences = [...experiences];
    updatedExperiences.forEach((experience) => {
      if(experience.id === experienceId) {
        experience.position = positionIn;
        experience.company = companyIn;
        experience.from = fromIn;
        experience.to = toIn;
      }
    })
    setExperiences(updatedExperiences)
  }

  const handleDeleteExperience = (id) => {
    let indexToDelete = -1;
    experiences.forEach((experiences, i) => {
      if(experiences.id === id) {
        indexToDelete = i;
      }
    });

    const updatedExperiences = [...experiences];
    updatedExperiences.splice(indexToDelete,1 );
    setExperiences(updatedExperiences);
  }

  return(
    <div>
      <header>CV creator</header>
      <main>
        <div>
          <Personal handleSavePersonalInformation={handleSavePersonalInformation} personalInformation={personalInformation}/>
          <div>
        <div>
          <Education handleSaveEducationInformation={handleSaveEducationInformation} educationInformation={educationInformation}/>
        </div>
            <h3>Experience(s)</h3>
            {experiences.map((experience) => {
              return (
                <Experience
                  key={experience.id}
                  id={experience.id}
                  handleSaveExperience={handleSaveExperience}
                  handleDeleteExperience={handleDeleteExperience}
                  experiences={experiences}
                />
              );
            })}
            <button onClick={() => addExperience()}>
              Add Experience
            </button>
            </div>
        </div>
        <div>
          <Displaycv 
            personalInformation={personalInformation} 
            educationInformation={educationInformation}
            experiences={experiences}
          />
        </div>
      </main>
    </div>
  );
}

export default App;