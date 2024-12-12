//* Using the use() hook for Promises & Data Fetching
import fs from 'node:fs/promises';
import { Suspense } from 'react';

import UsePromiseDemo from '@/components/UsePromisesDemo';

export default async function Home() {
  const fetchUsersPromise = new Promise((resolve) =>
    setTimeout(async () => {
      const data = await fs.readFile('dummy-db.json', 'utf-8');
      const users = JSON.parse(data);
      resolve(users);
    }, 2000)
  );

  return (
    <main>
      <Suspense fallback={<p>Loading users...</p>}>
        <UsePromiseDemo usersPromise={fetchUsersPromise} />
      </Suspense>
    </main>
  );
}


//* Submitting Data with Server Actions
// import ServerActionsDemo from "@/components/ServerActionsDemo";

// export default function Home() {
//   return (
//     <main>
//       <ServerActionsDemo />
//     </main>
//   );
// }


//* Fetching Data with RSCs
// import DataFetchingDemo from "@/components/DataFetchingDemo";

// export default function Home() {
//   return (
//     <main>
//       <DataFetchingDemo />
//     </main>
//   );
// }

//* Combining Server and Client component
// import ClientDemo from "@/components/ClientDemo";
// import RSCDemo from "@/components/RSCDemo";

// export default function Home() {
//   return (
//     <main>
//       <ClientDemo>
//         <RSCDemo />
//       </ClientDemo>
//     </main>
//   );
// }
