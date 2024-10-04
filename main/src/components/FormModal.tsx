"use client";
import Image from "next/image";
import React, { useState } from "react";

const FormModal = ({
  table,
  type,
  data,
  id,
}: {
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
  type: "create" | "update" | "delete";
  data?: any;
  id?: number;
}) => {
  const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
  const bgColor =
    type === "create"
      ? "bg-lamaYellow"
      : "update"
      ? "bg-lamaSky"
      : "bg-red-500";

  const [showModal, setShowModal] = useState(false);

  const Form = () => {
    return type === 'delete' && id ? (
        <form action="" className="flex flex-col p-3 gap-4">
            <span className="text-center font-medium"> All data will be lost. Are you sure you want to delete this {table}?</span>
            <button className="bg-red-600 w-max self-center mt-2 p-2 border-none rounded-md text-white">Delete</button>
        </form>
    ) : ("create or update form")
  }

  return (
    <div>
      <button
        onClick={() => setShowModal(true)}
        className={`size=${size} flex items-center justify-center rounded-full p-2 ${bgColor} `}
      >
        <Image src={`/${type}.png`} alt="" width={16} height={16} />
      </button>
      
      {showModal && (
        <div className="w-screen h-screen absolute left-0 top-0 bg-black bg-opacity-60 flex items-center justify-center">
          <div className="bg-white rounded-md p-4 relative w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]">
          <Form/>
           
            <div className="absolute right-5 top-5 cursor-pointer">
              <Image src="/close.png" alt="" width={14} height={14} onClick={()=> setShowModal(false)} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormModal;
