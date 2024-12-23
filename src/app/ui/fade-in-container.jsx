"use client";
import {useInView} from "react-intersection-observer";

export default function container({children, className, id}){
    const { inView, ref, entry } = useInView({
        threshold: 0.5,
      });

    return (
            <div className={`section-container ${inView ? 'in-view' : 'not-in-view'} ${className}`} id={id} ref={ref}>
                {children}
            </div>
    )
}