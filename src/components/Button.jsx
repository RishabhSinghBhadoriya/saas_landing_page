/* eslint-disable react/prop-types */


export const Button=({icon,children,href,onClick})=>{
    const Inside=()=>(
        <>
        <span className="relative flex items-center min-h-[60px] px-4 g4 rounded-2xl inner-before group-hover:before:opacity-100 overflow-hidden space-x-2">
            {icon && <span className="object-contain z-10">{icon}</span>}
            <span className="relative z-2 font-poppins base-bold text-p1 uppercase ">
                {children}
            </span>
        </span>
        <span className="glow-before glow-after"/>
        </>
    );
    return href ? (
        <a className="relative p-0.5 g5 rounded-2xl shadow-500 group" href={href}>
            <Inside/>
        </a>
    ):(
        <button className="relative p-0.5 g5 rounded-2xl shadow-500 group" onClick={onClick}>
            <Inside/>
        </button>
    );
};