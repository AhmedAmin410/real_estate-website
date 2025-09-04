import { headers } from 'next/headers';
import { Webhook } from 'svix';

export async function POST(req) {
  try {
    const payload = await req.text(); // raw bodymmmama
    const headersList = headers();

    const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET); // secret from Clerk dashboard
    const evt = wh.verify(payload, {
      'svix-id': headersList.get('svix-id'),
      'svix-timestamp': headersList.get('svix-timestamp'),
      'svix-signature': headersList.get('svix-signature'),
    });

    console.log(`✅ Webhook verified: ${evt.type}`, evt.data);

    if (evt.type === 'user.created') {
      console.log('👤 User created:', evt.data);
    }

    if (evt.type === 'user.deleted') {
      console.log('🗑 User deleted:', evt.data);
    }

    if (evt.type === 'user.updated') {
      console.log('✏️ User updated:', evt.data);
    }

    return new Response('Webhook received', { status: 200 });
  } catch (err) {
    console.error('❌ Webhook verification failed:', err);
    return new Response('Error verifying webhook', { status: 400 });
  }
}
