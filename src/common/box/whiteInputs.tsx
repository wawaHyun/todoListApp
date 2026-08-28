export const WhiteTextarea = ({style, defaultValue,name }: { style?: string, defaultValue?:string,name?:string }) =>{
    return(
<textarea name={`${name}`} defaultValue={`${defaultValue}`} className={`p-2 border h-full w-full border border-slate-300 rounded-lg ${style}`}></textarea>
    )
}

export const WhiteInput = ({children,name, style, defaultValue}: {children?: React.ReactNode,name?:string, style?:string, defaultValue?:string}) =>{
    return(
        <input name={`${name}`} defaultValue={defaultValue ? `${defaultValue}`: ''} className={`${style} border border-slate-300 rounded-lg px-2 focus:outline-0`}>{children}</input>
    )
} 


export const SearchBox = ({children,name, style,}: {children?: React.ReactNode,name?:string, style?:string, defaultValue?:string}) =>{
    return(
        <div className={`${style} border border-slate-300 rounded-lg px-2 h-full flex items-center gap-1`}>
            <div className="border h-full w-[30px] border-r-slate-300 border-0 border-r-2">dd</div>
            <input name="search" className="h-full w-full p-1 focus:outline-0"></input>
        </div>
    )
} 