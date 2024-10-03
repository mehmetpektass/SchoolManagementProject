import Image from 'next/image';
import React from 'react'

const FormModal = ({table,type,data,id}: {
    table:
    | "teacher"
    | "student"
    | "parent"
    | "subject"
    | "class"
    | "lesson"
    | "exam"
    | "assignment"
    | "result"
    | "attendance"
    | "event"
    | "announcement";
    type:'create' | 'update' | 'delete';
    data?:any;
    id?:number;
}) => {

    const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
    const bgColor = type === "create" ? "bg-lamaYellow" : "update" ? "bg-lamaSky" : "bg-red-500"

  return (
    <div>
        <button className={`size=${size} flex items-center justify-center rounded-full p-2 ${bgColor} `}>
            <Image src={`/${type}.png`} alt="" width={16} height={16} />
        </button>
    </div>
  )
}

export default FormModal