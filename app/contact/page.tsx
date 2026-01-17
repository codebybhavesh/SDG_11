import { redirect } from 'next/navigation';

export default function ContactPage() {
  // Redirect to home page and scroll to contact section
  redirect('/#contact');
}
