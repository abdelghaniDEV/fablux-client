"use client";
import React, { FormEventHandler, useState } from "react";
import { Input } from "./ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Axe, Send } from "lucide-react";
import axios from "axios";

interface MessageType {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const defaultMesage: MessageType = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export default function ContactForm() {
  const [message, setMessage] = useState(defaultMesage);
  const [Errors, setErrors] = useState(defaultMesage);
  const [leading , setLeading] = useState(false)

  const handelChangeInputs = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setMessage((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const checkData = () => {
    let isValid = true;
    let newErrors: MessageType = { ...Errors };

    // التحقق من الاسم
    if (!message.name.trim()) {
      isValid = false;
      newErrors.name = "Name is required";
    } else {
      newErrors.name = "";
    }

    // التحقق من البريد الإلكتروني
    if (!message.email.trim()) {
      isValid = false;
      newErrors.email = "Email is required";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(message.email)) {
      isValid = false;
      newErrors.email = "Email is invalid";
    } else {
      newErrors.email = "";
    }

    // التحقق من رقم الهاتف
    if (!message.phone.trim()) {
      isValid = false;
      newErrors.phone = "Phone number is required";
    } else if (!/^[\d+\-()\s]{6,15}$/.test(message.phone)) {
      isValid = false;
      newErrors.phone = "Phone number is invalid";
    } else {
      newErrors.phone = "";
    }

    // التحقق من الرسالة
    if (!message.message.trim()) {
      isValid = false;
      newErrors.message = "Message is required";
    } else {
      newErrors.message = "";
    }

    setErrors(newErrors);
    return isValid;
  };

  const handelSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (checkData()) {
      try {
        setLeading(true)
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/leads`,
          message
        );
        console.log("Message Seding success", response.data);
        
        setLeading(false)
      } catch (err) {
        console.log(err);
        setLeading(false)
      }
    }
  };

  return (
    <DialogContent className="bg-[#000000cb] w-[800px]">
      <DialogHeader className="flex flex-col items-center">
        <DialogTitle className="text-primary text-[30px] font-[600]">
          Welcome to Fablox Group
        </DialogTitle>
        <DialogDescription className="text-white text-[20px]">
          Leave your message and we will contact you as soon as possible
        </DialogDescription>
      </DialogHeader>
      <div>
        <form onSubmit={handelSubmit} className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-3 relative">
              <label className="">Email</label>
              <Input
                type="text"
                name="email"
                onChange={handelChangeInputs}
                placeholder="Entre Your Email"
                className={`${Errors.email && "border-[1px] border-red-500"}`}
              />
              {Errors.email && (
                <p className="text-red-500 text-[12px] absolute bottom-[-20px]">
                  {Errors.email}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-3 relative">
              <label className="">Your company name</label>
              <Input
                type="text"
                placeholder="Enter your company name"
                name="name"
                onChange={handelChangeInputs}
                className={`${Errors.name && "border-[1px] border-red-500"}`}
              />
              {Errors.name && (
                <p className="text-red-500 text-[12px] absolute bottom-[-20px]">
                  {Errors.name}
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-3 relative">
            <label className="">Contact phone number</label>
            <Input
              type="text"
              name="phone"
              onChange={handelChangeInputs}
              placeholder="Enter phone number"
              className={`${Errors.phone && "border-[1px] border-red-500"}`}
            />
            {Errors.phone && (
                <p className="text-red-500 text-[12px] absolute bottom-[-20px]">
                  {Errors.phone}
                </p>
              )}
          </div>
          <div className="flex flex-col gap-3 relative">
            <label className="">Message topic</label>
            <Textarea
              placeholder="Enter Message topic"
              onChange={handelChangeInputs}
              name="message"
              className={`h-[100px] ${
                Errors.message && "border-[1px] border-red-500"
              }`}
            />
            {Errors.message && (
                <p className="text-red-500 text-[12px] absolute bottom-[-20px]">
                  {Errors.message}
                </p>
              )}
          </div>
          <div className="flex items-center flex-col">
            <Button className="flex items-center gap-1 text-[20px]">
              <span>{leading ? "..." : "Send"}</span>
              <Send />
            </Button>
          </div>
        </form>
      </div>
    </DialogContent>
  );
}
