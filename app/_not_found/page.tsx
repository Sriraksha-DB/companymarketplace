import { cookies } from 'next/headers';

export default async function NotFoundPage() {
  const cookieStore = cookies();
  const authToken = (await cookieStore).get('sb-fgiptqqhrvaxllhranzz-auth-token');

  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>Auth Token: {authToken?.value}</p>
    </div>
  );
}