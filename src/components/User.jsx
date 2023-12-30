import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function User() {
  const [avatar, setAvatar] = useState('Loading');
  const [Username, setUsername] = useState('Loading');
  const [Followers, setFollowers] = useState('Loading');
  const [link, setLink] = useState('Loading');
  const [loading, setLoading] = useState(true);

  const { userid } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${userid}`);
        const data = await response.json();
        setAvatar(data.avatar_url);
        setFollowers(data.followers);
        setUsername(data.name);
        setLink(data.html_url);
        setLoading(false); 
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [userid]);

  return (
    <>
      {loading ? (
        <div className="flex flex-wrap mt-20 justify-center h-screen">
          <div className="animate-spin rounded-full border-t-4 border-sky-800 border-solid h-12 w-12"></div>
        </div>
      ) : (
        <div className="flex flex-wrap p-10 justify-center">
          <div className="">
            <h1 className="text-center font-sans text-3xl font-black text-blue-700 sm:text-5xl lg:text-[3.5rem] xl:text-6xl mb-4">{Username}</h1>
            <img
              className="mx-auto w-48 h-48 rounded-full transition duration-300 transform hover:scale-105"
              src={avatar}
              alt={`${Username}'s Avatar`}
            />
          </div>
          <div className="lg:ml-10 max-md:mt-10 flex justify-center ">
            <div className="font-semibold">
              <h1 className="font-sans text-3xl font-black text-blue-700 sm:text-5xl lg:text-[3.5rem] xl:text-6xl mb-4">Followers</h1>
              <h3 className="mt-20 max-md:mt-7 text-center font-sans text-3xl font-black text-green-500 sm:text-5xl lg:text-[3.5rem] xl:text-6xl transition duration-300 transform hover:scale-105">
                {Followers}
              </h3>
            </div>
          </div>
          <div className='flex w-full justify-center p-10'>
            <a target="_blank" rel="noopener noreferrer" className="bg-slate-300 text-blue-800 font-bold px-4 py-2 border border-gray-500 rounded-xl transition duration-300 hover:bg-slate-400 hover:border-slate-400" href={link}>Check</a>
          </div>
        </div>
      )}
    </>
  );
}
