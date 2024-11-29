import { useRef } from "react"

export function Otp(){

    const ref1 =useRef();
    const ref2 =useRef();
    const ref3 =useRef();
    const ref4 =useRef();
    const ref5 =useRef();
    const ref6 =useRef();

    return <div className="flex justify-center">
        <subOtpBox refrence={ref1} onDone={() =>{
            ref2.current.focus();
        }}/>
        <subOtpBox refrence={ref2} onDone = {() =>{
            ref3.current.focus();
        }} />
        <subOtpBox refrence={ref3} onDone = {() =>{
            ref4.current.focus();
        }}/>
        <subOtpBox refrence={ref4} onDone = {() =>{
            ref5.current.focus();
        }}/>
        <subOtpBox refrence={ref5}  onDone = {() =>{
            ref6.current.focus();
        }}/>
        <subOtpBox refrence={ref6} onDone = {() =>{
            ref6.current.focus();
        }} />
    </div>
}

function subOtpBox(){
    refrence , onDone
    return <div>
        <input refrence={refrence} onChange={(e) => {
            onDone()
        }} type="text" className="m-1 w-[40px] h-[50px] rounded-2xl bg-yellow-200
        outline-none px-4 text-white"></input>
    </div>
}