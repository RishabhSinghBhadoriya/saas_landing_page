import { TestItems } from "../components/TestItems";
import { testimonials } from "../content";

export const Testimonials=()=>{
    const halfLength=Math.floor(testimonials.length/2);
    return(
        <section className="relative z-2 py-24 md:py-28 lg:py-40">
            <div className="container block lg:flex">
                <div className="testimonials_head-res relative z-2 mr-20 flex-300">
                    <h3 className="h3 max-md:h5 text-p4">
                        Words from our clients
                    </h3>
                </div>
                <div className="testimonials_inner-after testimonials_inner-before relative -my-12 -mr-3 flex items-start max-lg:static max-md:block ">
                    <div className="testimonials_group-after flex-50">
                        {testimonials.slice(0,halfLength).map((testimonial)=><TestItems key={testimonial.id} item={testimonial} containerClassName="last:after:hidden last:after:max-md:block"/>)}
                    </div>
                    <div className="flex-50">
                    {testimonials.slice(0,halfLength).map((testimonial)=><TestItems key={testimonial.id} item={testimonial} containerClassName="last:after:hidden after:right-auto"/>)}
                    </div>
                </div>
            </div>
        </section>
    );
}