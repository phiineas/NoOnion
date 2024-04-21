"use client";
import { Button } from '@/components/ui/button'
import React from 'react'
import { useRouter } from 'next/navigation'

export default function page() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();

    const handleClick = () => {
        router.push('/recommendation');
    }

    return (
        <div>
            Welcome to No Onion No Rizz
            <Button variant={'outline'} onClick={handleClick}>
                Get Started
            </Button>
        </div>
    )
}