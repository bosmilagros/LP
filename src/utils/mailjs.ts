export const sendEmail = async (formData: { name: string; email: string; message: string }) => {
    const response = await fetch('https://api.mailjs.com/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            service_id: 'service_byw3332',
            template_id: 'template_ohd1hz8',
            user_id: 'Iwan Kiswanto',
            template_params: {
                name: formData.name,
                email: formData.email,
                message: formData.message,
            },
        }),
    });

    if (!response.ok) {
        throw new Error('Failed to send email');
    }

    return response.json();
};