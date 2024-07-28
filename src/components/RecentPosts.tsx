import Image from 'next/image';
import Link from 'next/link';
import Date from '@/components/Date';
import SectionHeader from '../components/SectionHeader';
import utilStyles from '@/app/utils.module.scss';

import { getSortedPostsData, AllPostsData } from '@/lib/blog'

// type AllPostsData = {
//   date: string
//   title: string
//   image: string
//   id: string
// }[]

export default function RecentPosts() {
    const recentPostsData: AllPostsData = getSortedPostsData().slice(0,2)

    return (
        <>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <SectionHeader title="News!" href="/blog" />
                <div className="">
                    {recentPostsData.map(({ id, date, title }) => (
                        <>
                            <div className='font-medium mb-1 mt-5'>
                                <Link href={`/posts/${id}`}>{title}</Link>
                            </div>
                        //// {/* <br /> */}
                            <small className='text-gray-500 font-medium'>
                                <Date dateString={date} />
                            </small>
                        </>
                    ))}
                </div>
                <div className="py-20" />
            </section>
        </>
    );
}