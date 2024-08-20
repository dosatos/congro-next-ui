import { NextRequest, NextResponse } from 'next/server'
import React from 'react'

export const middleware = (request: NextRequest) => {
    const isAuthenticated = false;
    if (!isAuthenticated) {
        return NextResponse.redirect(new URL('/login', request.url))
    }
    return NextResponse.next()
}

export const config = {
    matcher: ['/users']
}