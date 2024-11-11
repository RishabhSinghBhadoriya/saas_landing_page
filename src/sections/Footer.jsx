export const Footer=()=>{
    return(
    <footer>
        <div className="container py-10">
            <div className="flex w-full max-md:flex-col">
                <div className="small-compact flex flex-1 flex-wrap items-center justify-center gap-5">
                    <div className="opacity-70">&copy; Rishabh</div>
                    <div className="flex items-center justify-center sm:ml-auto">
                        <p className="legal-after relative mr-9 text-p5 transition-all duration-500 hover:text-p1">Privacy Policy</p>
                        <p className="relative mr-9 legal-after text-p5 transition-all duration-500 hover:text-p1">Terms of Use</p>
                        <p className="pl-2">
                        <a href="https://dribbble.com/shots/23879879-Project-files-Untitled-UI?utm_source=Clipboard_Shot&utm_campaign=jordanhughes&utm_content=Project%20files%20%E2%80%94%20Untitled%20UI&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=jordanhughes&utm_content=Project%20files%20%E2%80%94%20Untitled%20UI&utm_medium=Social_Share" className="text-p5 transition-all duration-500 hover:text-p1">Dashboard Image Credit: 👈🏻</a>
                        </p>
                    </div>
                    
                </div>
                <ul className="flex flex-1 justify-center gap-3 max-md:mt-10 md:justify-end">
                    <li>
                    <a href="" className="social-icon">
                        <img src="./ytlogo.png" className="size-1/2 object-contain"/>
                    </a>
                    </li>
                    <li>
                    <a href="" className="social-icon">
                        <img src="./instalogo.png" className="size-1/2 object-contain"/>
                    </a>
                    </li>
                    <li>
                    <a href="" className="social-icon">
                        <img src="./twit.png" className="size-1/2 object-contain"/>
                    </a>
                    </li>
                    <li>
                    <a href="" className="social-icon">
                        <img src="./facebooklogo.png" className="size-1/2 object-contain"/>
                    </a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
    );
}