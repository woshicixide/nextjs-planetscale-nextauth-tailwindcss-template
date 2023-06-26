import { Card, Title, Text } from '@tremor/react';
// import { queryBuilder } from '../lib/planetscale';
import Search from './search';
import UsersTable from './table';
// import { Prisma } from '@prisma/client';
// import prisma from "@/lib/prisma";
import prisma from '../lib/prisma';

export const dynamic = 'force-dynamic';

export default async function IndexPage({
  searchParams
}: {
  searchParams: { q: string };
}) {
  const search = searchParams.q ?? '';

  const users = await prisma.user2.findMany({
    where: {
      name: {
        contains: search
      }
    }
  });
  console.log('users:', users);

  // const users = await queryBuilder
  //   .selectFrom('users')
  //   .select(['id', 'name', 'username', 'email'])
  //   .where('name', 'like', `%${search}%`)
  //   .execute();

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>Users</Title>
      <Text>
        A list of users retrieved from a MySQL database (PlanetScale).
      </Text>
      <Search />
      <Card className="mt-6">
        <UsersTable users={users} />
      </Card>
    </main>
  );
}
