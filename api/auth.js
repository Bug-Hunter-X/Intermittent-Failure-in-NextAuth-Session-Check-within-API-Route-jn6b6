```javascript
import {unstable_getServerSession} from 'next-auth';
import {authOptions} from './auth/[...nextauth]';

export default async function handler(req, res) {
  const session = await unstable_getServerSession(req, res, authOptions);

  if (session) {
    // Signed in
    res.status(200).json({ message: 'Signed in' });
  } else {
    // Not Signed in
    res.status(401).json({ message: 'Not signed in' });
  }
}
```