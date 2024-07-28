export default function SectionHeader({ title, href }) {
    return (
      <div className='flex justify-between items-center MB-8'>
        <h2 className='text-3xl font-bold'>{title}</h2>
        <a className='text-indigo-600 font-bold px-5' href={href}>
          View all
        </a>
      </div>
    );
  }