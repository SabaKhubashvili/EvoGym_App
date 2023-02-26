

export enum SelectedPage{
  Home = 'home',
  Benefits = 'benefits',
  OurClasses='ourclasses',
  ContactUs='contactus'
}


export interface BenefitType {
  icon: JSX.Element,
  title:string,
  description:string,
}

export interface ClassType{
  title:string,
  description?:string,
  img:string
}
export interface contactData{
  name:string,
  email:string,
  message:string,
}

export interface message{
  value:string,
  type:string,
}