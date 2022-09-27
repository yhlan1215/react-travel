import React from "react"
import { UserLayout } from "../../layouts"
import { SignInForm } from "../../components"

export const SignInPage = () => {
    return(
        <UserLayout>
            <SignInForm/>
        </UserLayout>
    )
}