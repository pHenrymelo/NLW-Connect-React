'use client'

import { Button } from "@/components/button"
import { InputField, InputIcon, InputRoot } from "@/components/input"
import { ArrowRight, Mail, User } from "lucide-react"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"  
import { useForm } from "react-hook-form"
import { subscribeToEvent } from "@/http/api"
import { useRouter, useSearchParams } from "next/navigation"

const subscriptionFormSchema = z.object({
  name: z.string().min(2, 'Digite o seu nome completo'),
  email: z.string().email('Digite um e-mail valido')
})

type SubscriptionFormSchema = z.infer<typeof subscriptionFormSchema>

export const SubscriptionForm = () => {

  const router = useRouter()
  const searchParams = useSearchParams()

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<SubscriptionFormSchema>({
    resolver: zodResolver(subscriptionFormSchema)
  })

  const onSubscribe = async ({ name, email}: SubscriptionFormSchema) => {

    const referrer = searchParams.get('referrer')

    const {subscriberId} = await subscribeToEvent({name, email, referrer})

    router.push(`/invite/${subscriberId}`)

  }


    return(
        <form
        onSubmit={handleSubmit(onSubscribe)}
        className=" bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 w-full md:max-w-[440px]">
          <h2 className=" font-heading font-semibold text-xl text-gray-200">
            Inscrição
          </h2>
          <div className="space-y-3">
            <div className=" space-y-2">
            <InputRoot error={!!errors.name}>
              <InputIcon>
                <User />
              </InputIcon>
              <InputField
                placeholder="Nome Completo"
                {...register('name')}
                />
            </InputRoot>

              {
              errors.name && (
                <p className=" text-xs text-danger">{errors.name.message}</p>
              )}

            </div>
            <div className=" space-y-2">
            <InputRoot error={!!errors.email}>
              <InputIcon>
                <Mail />
              </InputIcon>
              <InputField
                placeholder="E-mail"
                {...register('email')}
                />
            </InputRoot>

              {
              errors.email && (
                <p className=" text-xs text-danger">{errors.email.message}</p>
              )}

            </div>

            <Button type="submit">
              Confirmar
              <ArrowRight />
            </Button>
          </div>
        </form>
    )
}