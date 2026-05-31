import { useState } from 'react'
import './Form.css'


const pageDict = {
    0:GeneralInfo,
    1:EducationInfo,
    2:WorkExperience
}



function CurrentForm(formData, setFormData){
    const [page, setPage] = useState(0);
    const ActivePage = pageDict[page]
    const ActiveFormData = formData[page]
    function BackPage(){
    if (page === 0){
        return;
    } 
    else{
        setPage(page - 1);
    }

    
    }

    function FrontPage(){
    if (page === 2){
        return;
    } 
    else{
        setPage(page + 1);
    }

    
    }

    return(
        <>
        <div className= "content">
        {ActivePage ? <ActivePage formData={ActiveFormData} setFormData={setFormData}/> : <p>Unknown page</p>}
        </div>

        <div className= "switchButtons">
            <button onClick = {BackPage} className="changeForm">Prev</button>

            <button onClick = {FrontPage} className="changeForm">Next</button>
        </div>
        
        </>
    );
}

function GeneralInfo(formData, setFormData){
    const handleSubmit = (e) => {
        e.preventDefault(); // This is the most important line!
        console.log("Form submitted safely without page reload.");
    };

    
    
    return(
        <>
        
        <h1>General Info</h1>
        
        <form action="">
            <div className="sectionEntry">
                <label>Name: </label>
                <input 
                    required
                    value={formData.name}
                    onChange={
                        (e) => setFormData((prev) => (
                            {...prev, personal: {...prev.personal, name: e.target.value}}
                        )
                    )}
                />
            </div>

            <div className="sectionEntry">
                <label>Email: </label>
                <input type="email"></input>
            </div>

            <div className="sectionEntry">
                <label>Phone #: </label>
                <input />
            </div>
            <button type="submit">Submit Info</button>
        </form>
        </>
    )
}

function EducationInfo(){
    return(
        <>
        <h1>Education Info</h1>
        <div className="sectionEntry">
            <label>School: </label>
            <input />
        </div>

        <div className="sectionEntry">
            <label>Major: </label>
            <input />
        </div>

        <div className="sectionEntry">
            <label>Start Date: </label>
            <input type="date" />
        </div>

        <div className="sectionEntry">
            <label>End Date: </label>
            <input type="date" />
        </div>
        </>
    )
}

function WorkExperience(){
    return(
        <>
        <h1>Work Experience</h1>

        <div className="sectionEntry">
            <label>Company Name: </label>
            <input />
        </div>

        <div className="sectionEntry">
            <label>Position: </label>
            <input />
        </div>

        <div className="sectionEntry">
            <label>Description: </label>
            <textarea></textarea>
        </div>
        
        <div className="sectionEntry">
            <label>Start Date: </label>
            <input type="date" />
        </div>

        <div className="sectionEntry">
            <label>End Date: </label>
            <input type="date" />
        </div>
        </>
    )
}

export {CurrentForm}