import { NextRequest, NextResponse } from 'next/server'

// URL de tu Google Apps Script (reemplaza con la tuya)
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzfk9ZvUQ5rjYOB0bMZ37yZ3b__vy8qYiiD4AxEcZNAmyFTW9B06IfxIjsD1pAwr3k/exec'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validar datos requeridos
    if (!body.name || !body.email || !body.attendance) {
      return NextResponse.json(
        { success: false, message: 'Campos obrigatórios faltando' },
        { status: 400 }
      )
    }

    // Enviar datos a Google Sheets
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    })

    const result = await response.json()

    if (result.success) {
      return NextResponse.json({
        success: true,
        message: 'RSVP enviado com sucesso!'
      })
    } else {
      throw new Error(result.message || 'Erro desconhecido')
    }

  } catch (error) {
    console.error('Erro ao enviar RSVP:', error)
    return NextResponse.json(
      { 
        success: false, 
        message: 'Erro interno do servidor' 
      },
      { status: 500 }
    )
  }
}
