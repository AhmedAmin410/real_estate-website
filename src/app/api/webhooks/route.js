import { headers } from 'next/headers';
import { Webhook } from 'svix'; // Clerk uses Svix under the hood

export async function POST(req) {
  try {
    const payload = await req.text(); // raw body
    const headersList = headers();

    const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET); // must set in .env
    const evt = wh.verify(payload, {
      'svix-id': headersList.get('svix-id'),
      'svix-timestamp': headersList.get('svix-timestamp'),
      'svix-signature': headersList.get('svix-signature'),
    });

    // Log event
    console.log(`✅ Received webhook with ID ${evt.id} and type ${evt.type}`);
    console.log('Payload:', evt.data);

    // Handle event types
    if (evt.type === 'user.created') {
      console.log('👤 User created:', evt.data);
    }

    if (evt.type === 'user.deleted') {
      console.log('🗑️ User deleted:', evt.data);
    }

    if (evt.type === 'user.updated') {
      console.log('✏️ User updated:', evt.data);
    }

    return new Response('Webhook received', { status: 200 });
  } catch (err) {
    console.error('❌ Error verifying webhook:', err);
    return new Response('Error verifying webhook', { status: 400 });
  }
}
