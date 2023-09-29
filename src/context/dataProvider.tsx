"use client"
import { v4 as uuidv4 } from 'uuid';
import { createContext } from "react";

const data = {
  title: "Create Next App",
  description: "Generated by create next app",
  about: {
    title: "About Me",
    subtitle: "Is there anything I can do for you?",
    gretting: "Hello! I’m Donald Wellborn.",
    desc: "Back-end Frond-end developer from UK, London. I have rich experience in wordpress, also I am good at Magento. I love to talk with you about our unique.",
    list: [
      { id: uuidv4(), data: "Age", value: "36" },
      { id: uuidv4(), data: "Residence", value: "CO" },
      { id: uuidv4(), data: "Freelance", value: "Available" },
      { id: uuidv4(), data: "Address", value: "Bogota, Colombia" },
    ],
    block: [
      {
        id:   uuidv4(),
        icon: "code",
        name: "Front-end", 
        desc: "Modern and mobile-ready website that will help you reach all of your marketing.",
      },
      {
        id:   uuidv4(),
        icon: "ui",
        name: "UX / UI",
        desc: "UI/UX focus on the user, frontend focus on the settings of the user.",
      },
      {
        id:   uuidv4(),
        icon: "wordpress",
        name: "WordPress Development",
        desc: "WordPress development services improve business websites.",
      },
      {
        id:   uuidv4(),
        icon: "shield",
        name: "WordPress Security",
        desc: "Security consultants can check the code and scan for vulnerabilities.",
      }
    ]
  }
}

export const DataContext = createContext()

export const DataContextProvider = ({ children }: any) => {
  return (
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  )
}