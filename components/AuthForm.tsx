"use client"

import {
    Form
} from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import Image from "next/image"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "./ui/button"
import Link from "next/link"
import { toast } from "sonner"
import FormFeild from "./FormFeild"
import { useRouter } from "next/navigation"



const authFormSchema = (type: FormType) => {
    return z.object({
        name: type === 'sign-up' ? z.string().min(3) : z.string().optional(),
        email: z.string().email(),
        password: z.string().min(3),
    })
}

const AuthForm = ({ type }: { type: FormType }) => {
    const router = useRouter()
    const formSchema = authFormSchema(type)

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            password: ""
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            if (type === 'sign-up') {
                toast.success("Account created successfully,Please sign in")
                router.push('/sign-in')
            } else {
                toast.success("Sign in successfully")
                router.push('/')
            }
        } catch (err) {
            console.log(err);
            toast.error(`There was an error:${err}`)
        }
    }

    const isSign = type === 'sign-in'

    return (
        <div className="card-border lg:min-w-[566px]">
            <div className="flex flex-col gap-6 card py-14 px-10">
                <div className="flex flex-row gap-2 justify-center">
                    <Image src={'/logo.svg'} alt="logo" height={32} width={38} />
                    <h2 className="text-primary-100">Dr.Interview</h2>
                </div>
                <h3>Practice job interview with AI</h3>

                <Form {...form} >
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6 mt-4 form">
                        {!isSign && (
                            <FormFeild control={form.control} name="name" label="Name" placeholder="Your name" />
                        )}
                        <FormFeild control={form.control} name="email" label="Email" placeholder="Your email address" type="email" />
                        <FormFeild control={form.control} name="password" label="Password" placeholder="Enter your password" 
                        type="password"
                        /
                        >
                        <Button type="submit" className="btn">{isSign ? 'Sign in' : 'Create an account '}</Button>
                    </form>
                </Form>
                <p className="text-center">
                    {isSign ? 'No accont yet?' : 'Have an account already?'}
                    <Link href={!isSign ? '/sign-in' : '/sign-up'} className="font-bold text-user-primary ml-1">
                        {!isSign ? "Sign In" : "Sign up"}
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default AuthForm