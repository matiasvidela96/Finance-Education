import { EmailTemplate } from '../../../components/email-template';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
    try {
        const data = await resend.emails.send({
            from: 'Ivo <ivo.tonioni@gmail.com>',
            to: ['ivo.tonioni@gmail.com'],
            // to: ['matividela@yahoo.com.ar'],
            subject: 'Hola brother, probando Resend and NextJs',
            react: EmailTemplate({ firstName: 'PERRO' }),
        });

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error });
    }
}
