import { Element } from "react-scroll";
export const Download=()=>{
    return(
        <section>
            <Element name="download" className="g7 relative pb-32 pt-24 max-lg:pb-24 max-md:py-16">
                <div className="container">
                    <div className="flex items-center">
                        <div className="relative mr-6 flex-540 max-xl:flex-280 max-lg:flex-256 max-md:flex-100">
                            <div className="mb-10">
                                <img src="clousparklogo" width={160} height={55} alt="logo"/>
                            </div>
                            <p className="body-1 mb-10 max-w-md">
                                Try it now for free
                            </p>
                            <ul className="flex flex-wrap items-center gap-6 ">
                                <li className="download_tech-link_last-before download_tech-link_last-after">
                                    <a href={""} className="size-22 download_tech-icon_before relative flex items-center justify-center rounded-half border-2 border-s3 bg-s1 transition-borderColor duration-500">
                                        <span className="download_tech-icon">
                                            <img src="/winicon.png" alt="windows"  className="size-9"/>
                                        </span>
                                    </a>
                                </li>
                                <li className="download_tech-link_last-before download_tech-link_last-after">
                                    <a href={""} className="size-22 download_tech-icon_before relative flex items-center justify-center rounded-half border-2 border-s3 bg-s1 transition-borderColor duration-500">
                                        <span className="download_tech-icon">
                                            <img src="/mac.png" alt="windows"  className="size-9"/>
                                        </span>
                                    </a>
                                </li>
                                <li className="download_tech-link_last-before download_tech-link_last-after">
                                    <a href={""} className="size-22 download_tech-icon_before relative flex items-center justify-center rounded-half border-2 border-s3 bg-s1 transition-borderColor duration-500">
                                        <span className="download_tech-icon">
                                            <img src="/linux.png" alt="windows"  className="size-9"/>
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="mb-10 max-md:hidden">
                            <div className="download_preview-before dowload_preview-after rounded-40 relative w-[955px] border-s5 p-6">
                                <div className="relative rounded-3xl bg-s1 px-6 pb-6 pt-14">
                                    <span className="download_preview-dot left-6 bg-p2"/>
                                    <span className="download_preview-dot left-11 bg-s3"/>
                                    <span className="download_preview-dot left-16 bg-p1/15"/>
                                    <img src="./original-2c5f1bd5046c74610f3f2b1246b79c7c.jpg" width={855} height={655} alt="screen" className="rounded-xl"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ul className="mt-24 flex justify-center max-lg:hidden">

                    </ul>
                </div>
            </Element>
        </section>
    );
}