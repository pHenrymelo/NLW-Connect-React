'use client'

import { IconButton } from "@/components/icon-button"
import { InputField, InputIcon, InputRoot } from "@/components/input"
import { Copy, Link } from "lucide-react"

interface InviteLinkProps {
    inviteLink: string
}


export const InviteLink = ({inviteLink}: InviteLinkProps) => {

    const copyInviteLink = () => {
        navigator.clipboard.writeText(inviteLink)
      }

    return(
        <InputRoot>
            <InputIcon>
                <Link/>
            </InputIcon>
            <InputField defaultValue={inviteLink} readOnly/>
            <IconButton className=" -mr-2 " onClick={copyInviteLink}>
                <Copy className=" size-5 "/>
            </IconButton>
        </InputRoot>
    )
}
