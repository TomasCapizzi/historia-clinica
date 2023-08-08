import AppInfo from "../Components/Home/AppInfo";
import HomeButtons from "../Components/Home/HomeButtons";
import OtherUsers from "../Components/Home/OtherUsers";
import PersonalInfo from "../Components/Home/Personal Information/PersonalInfo";
import React from "react";

export default function Home({user}){
    return(
        <section className='flex flex-col items-center justify-center w-full'>
            <PersonalInfo user={user}/>
            <HomeButtons/>
            <AppInfo/>
            <OtherUsers user={user}/>
        </section>
    )
}

