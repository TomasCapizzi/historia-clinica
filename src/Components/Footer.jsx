import React from "react";

export default function Footer(){

    return(
        <footer className="w-full justify-center text-center bg-cyan-700 p-5">
            <p className="text-white sm:text-base text-sm">Tomas Capizzi | <span className="text-cyan-300">2021</span></p>
            <p className="text-white sm:text-base text-sm">If you want to see more of my work, click <span><a href="https://tomascapizzi.vercel.app/" target='_blank' rel='noreferrer'  className="text-cyan-300 no-underline">here</a></span></p>
        </footer>
    )
}