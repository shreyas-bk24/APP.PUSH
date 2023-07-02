import React from 'react'
import CustomForm from '../../components/CustomForm/CustomForm'

// multiple functions to render forms for multiple domains with respective names

export const AI = () => {
  return (
    <CustomForm field='AI' />
  )
}

export const Cyber=()=>{
    return(
        <CustomForm field='Cyber Security' />
    )
}

export const AppDev=()=>{
    return(
        <CustomForm field='App Development' />
    )
}

export const Webdev=()=>{
    return(
        <CustomForm field='Web development' />
    )
}

export const DS=()=>{
    return(
        <CustomForm field='Data Science' />
    )
}

export const DA=()=>{
    return(
        <CustomForm field='Data Analysis' />
    )
}

export const IOT=()=>{
    return(
        <CustomForm field='IOT' />
    )
}