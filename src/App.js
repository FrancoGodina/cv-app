import React from "react";
import { useState } from "react";
import Personal from "./components/Personal"
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

  return(
    <div>
      <header>CV creator</header>
      <main>
        <div>
          <Personal handleSavePersonalInformation={handleSavePersonalInformation} personalInformation={personalInformation}/>
          <div>
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