import React from "react";

export default function AppInfo(){

    return(
        <article className='flex md:w-4/5 xl:w-1024 flex-wrap justify-center text-center mb-4 lg:mb-12'> 
            <h3 className="w-full text-sky-700 text-lg lg:text-3xl font-bold my-4 md:my-8">Medical Record App</h3>
            <p className="text-justify w-4/5 md:w-full text-cyan-700 mb-1 font-medium text-sm md:text-base">Medical Records app is a powerful  applicattion designed exclusively for healthcare professionals looking for an efficient and secure way to manage and maintain medical records. This innovative digital tool offers a comprehensive solution for managing medical records, allowing helathcare professionals to focus on what is most important: the well-being of their patients.
            </p>
            <hr />
            <p className="text-justify w-4/5 md:w-full text-cyan-700 font-medium text-sm md:text-base">Medical Records is the definitive solution to simplify the management of medical records, improve the efficiency of medical work and provide quality care to patients. Don't worry about paperwork anymore, with MedRecords, all the medical information you need is at your fingertips!</p>
        </article>
    )
}