import { useState } from 'react'
import './Form.css'
import { PDFDownloadLink } from '@react-pdf/renderer';
import { ResumePDF } from './ResumePDF';

const pageDict = {
    0:GeneralInfo,
    1:EducationInfo,
    2:WorkExperience
}



function CurrentForm({formData, setFormData}){
    const [page, setPage] = useState(0);
    const ActivePage = pageDict[page]
    // const dataKeys = {0:"general", 1:"education", 2:"experience", }

    // const ActiveFormData = dataKeys[pages]
    function BackPage(){
        if (page === 0){
            return;
        } 
        else{
            setPage(page - 1);
        }
    
    }

    function FrontPage(e){
        if (page === 2){
            return;
        } 
        const form = e.target.closest('form')
        if (form && form.reportValidity()){
            setPage(page + 1);
        }
    

    
    }

    

    const handleSubmit = (e) => {
        e.preventDefault(); 
        console.log("Form submitted safely without page reload.");
        // window.print()
    };

    return(
        <form onSubmit={handleSubmit}>
        <div className= "content">
        {ActivePage ? <ActivePage formData={formData} setFormData={setFormData}/> : <p>Unknown page</p>}
        </div>

        <div className= "switchButtons">
            <button type="button" onClick = {BackPage} className="changeForm">Prev</button>
            {page < 2 ?
            <button type="button" onClick = {FrontPage} className="changeForm">Next</button>
            : (
                    
                    <>
                        {/* <button type="submit" className="submitForm">
                            Submit here
                        </button> */}

                        <PDFDownloadLink
                            document={<ResumePDF formData={formData} />}
                            fileName={`${formData.general.name || 'Resume'}.pdf`}
                        >
                            {({ loading }) => (
                                <button type="button" className="submitForm">
                                    {loading ? 'Generating PDF...' : 'Download PDF Resume'}
                                </button>
                            )}
                        </PDFDownloadLink>
                    </>
                )}
        </div>
        
        </form>
    );
}

function GeneralInfo({formData, setFormData}){
    // const handleSubmit = (e) => {
    //     e.preventDefault(); 
    //     console.log("Form submitted safely without page reload.");
    // };

    
    
    return(
        <>
        
        <h1>General Info</h1>
        
        {/* <form onSubmit={(e) => e.preventDefault()}> */}
            <div className="sectionEntry">
                <label>Name: </label>
                <input 
                    required
                    value={formData.general.name}
                    onChange={(e) => setFormData((prev) => ({
                        ...prev, 
                        general: {
                            ...prev.general,
                            name: e.target.value
                        }})
                    )}
                />
            </div>

            <div className="sectionEntry">
                <label>Email: </label>
                <input 
                    type="email"
                    value={formData.general.email}
                    onChange={(e) => setFormData((prev) => ({
                        ...prev, 
                        general: {
                            ...prev.general,
                            email: e.target.value
                        }})
                    )}
                
                />

            </div>

            <div className="sectionEntry">
                <label>Phone #: </label>
                <input 
                    value = {formData.general.phone}
                    onChange={(e) => setFormData((prev) => ({
                        ...prev, 
                        general: {
                            ...prev.general,
                            phone: e.target.value
                        }})
                    )}
                
                />
            </div>
            
        {/* </form> */}
        </>
    )
}

function EducationInfo({formData, setFormData}){
    return(
        <>
        <h1>Education Info</h1>
        <div className="sectionEntry">
            <label>School: </label>
            <input
                required 
                value = {formData.education.school}
                onChange={(e) => setFormData((prev) => ({
                        ...prev, 
                        education: {
                            ...prev.education,
                            school: e.target.value
                        }})
                    )}
            />
        </div>

        <div className="sectionEntry">
            <label>Major: </label>
            <input
                required  
                value = {formData.education.major}
                onChange={(e) => setFormData((prev) => ({
                        ...prev, 
                        education: {
                            ...prev.education,
                            major: e.target.value
                        }})
                    )}    
            />
        </div>

        <div className="sectionEntry">
            <label>Start Date: </label>
            <input
                type="date" 
                value = {formData.education.startDate}
                onChange={(e) => setFormData((prev) => ({
                        ...prev, 
                        education: {
                            ...prev.education,
                            startDate: e.target.value
                        }})
                    )}
            
            />
        </div>

        <div className="sectionEntry">
            <label>End Date: </label>
            <input 
                type="date" 
                value = {formData.education.endDate}
                onChange={(e) => setFormData((prev) => ({
                        ...prev, 
                        education: {
                            ...prev.education,
                            endDate: e.target.value
                        }})
                    )}
            
            />
        </div>
        </>
    )
}

function WorkExperience({formData, setFormData}){
    return(
        <>
        <h1>Work Experience</h1>

        <div className="sectionEntry">
            <label>Company Name: </label>
            <input 
                required
                value = {formData.experience.company}
                onChange={(e) => setFormData((prev) => ({
                        ...prev, 
                        experience: {
                            ...prev.experience,
                            company: e.target.value
                        }})
                    )}
            />
        </div>

        <div className="sectionEntry">
            <label>Position: </label>
            <input 
                required
                value = {formData.experience.position}
                onChange={(e) => setFormData((prev) => ({
                        ...prev, 
                        experience: {
                            ...prev.experience,
                            position: e.target.value
                        }})
                    )}
            />
        </div>

        <div className="sectionEntry">
            <label>Description: </label>
            <textarea
                value = {formData.experience.description}
                onChange={(e) => setFormData((prev) => ({
                        ...prev, 
                        experience: {
                            ...prev.experience,
                            description: e.target.value
                        }})
                    )}
            ></textarea>
        </div>
        
        <div className="sectionEntry">
            <label>Start Date: </label>
            <input 
                type="date"
                value = {formData.experience.startDate}
                onChange={(e) => setFormData((prev) => ({
                        ...prev, 
                        experience: {
                            ...prev.experience,
                            startDate: e.target.value
                        }})
                    )}
            />
        </div>

        <div className="sectionEntry">
            <label>End Date: </label>
            <input 
                type="date"
                value = {formData.experience.endDate}
                onChange={(e) => setFormData((prev) => ({
                        ...prev, 
                        experience: {
                            ...prev.experience,
                            endDate: e.target.value
                        }})
                    )}
            />
        </div>
        
        </>
    )
}

export {CurrentForm}