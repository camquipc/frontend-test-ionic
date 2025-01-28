import { TutorInterface } from "./tutorInterface";
import { UserInterface } from "./userInterface";



  export interface BookingInterface{
    id: string;
    TutorId:TutorInterface;
    StudentId:UserInterface;
    Date: string;
    StartTime: string;
    EndTime: string;
  }