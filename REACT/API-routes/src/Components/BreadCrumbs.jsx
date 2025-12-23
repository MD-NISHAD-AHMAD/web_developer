import React from "react";

import { Link, useLocation } from 'react-router-dom'

export const BreadCrumb = () => {
    const location = useLocation();
    console.log('location', location)

    let currentPath = '';

    const crumbName = location.pathname
    .split('/')
    .filter((el) => el===! '')
    .map((item) => {
        return (currentPath += '/${item}')
    })
    console.log('crumbsName', crumbName)

    return <div>{currentPath}</div>
}