import Link from 'next/link'
import Date from '@/components/Date'
import { siteTitle } from '@/app/layout'
import utilStyles from './../utils.module.scss'

import { getSortedPostsData, AllPostsData } from '@/lib/blog'

import Separator from '@/components/Separator'

export const metadata = {
  title: siteTitle,
}

export default function BlogPage() {
  const allPostsData: AllPostsData = getSortedPostsData()

  return (
    <>
      <div className="y-3 min-h-screen">
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h1 className={utilStyles.headingXl}>Projects</h1>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <div className='font-medium mb-1 mt-5'>
                  <Link href={`/posts/${id}`}>{title}</Link>
                </div>
                {/* <br /> */}
                <small className='text-gray-500 font-medium'>
                  //// <Date dateString={date} />
                </small>
                {/* <div className="py-1 max-w-2xl"><Separator /></div> */}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  )
}