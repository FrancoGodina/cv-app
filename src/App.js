import React from "react";
import { useState } from "react";
import Personal from "./components/Personal"
import Education from "./components/Education"
import {v4 as uuidv4} from "uuid";


function App(){

  const[personalInformation, setPersonalInformation] = useState({
    id: uuidv4(),
    name: "",
    phone: "",
    email: "",
    description: ""
  });

  const handleSavePersonalInformation = (nameIn , phoneIn, emailIn, descriptionIn) => {

    const updatedPersonalInformation = { ...personalInformation };
    updatedPersonalInformation.name = nameIn;
    updatedPersonalInformation.phone = phoneIn;
    updatedPersonalInformation.email = emailIn;
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
            <button>
              Add Experience
            </button>
            </div>
        </div>
      </main>
    </div>
  );
}

export default App;