import { Element, Link } from "react-scroll";
import { Button } from "../components/Button";

export const MainPage=()=>{
    return(
        <section className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32 border-2 border-amber-400">
            <Element>
                <div className="container">
                    <div className="relative z-2 max-w-512 max-lg:max-w-388">
                        <div className="caption small-2 uppercase text-p3">Cloud Services</div>
                    </div>
                    <h1 className="mb-6 h1 text-p4 max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5x1 max-md:leading-12 z-2">
                        Flexible, Reliable and Fast
                    </h1>
                    <p className="max-w-440 mb-14 body-1 max-md:mb-10 z-2">
                        We Designed CloudSpark cloud services to be an easy to use, quick to learn and reliable cloud services.
                    </p>
                    <Link to="features" offset={-100} spy smooth><Button icon="⚡">Try it now</Button></Link>
                    <div className="absolute -top-32 left-[calc(50%)] w-[1230px] pointer-events-none hero-img_res z-[-1]">
                        {/* <img src="" className="size-1230 max-lg:auto"/> */}
                    </div>
                </div>
            </Element>
        </section>
    );
};