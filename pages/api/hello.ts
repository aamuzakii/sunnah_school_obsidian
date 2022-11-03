// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {PrismaClient} from '@prisma/client'
import type {NextApiRequest, NextApiResponse} from 'next'

type Data = {
  name: string
}

async function main(prisma: any) {
  // Connect the client
  await prisma.$connect()
  const post = await prisma.post.create({
    data: {
      title: 'foo',
      slug: 'foo',
      body: 'foo',
    },
  })

  console.log(post)

  // ... you will write your Prisma Client queries here
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const prisma = new PrismaClient()
  main(prisma)
  console.log(11)

  res.status(200).json({name: 'John Doe'})
}
