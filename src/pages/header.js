import Headerlink from '../components/headerlink'

export default function Header() {
  return (
    <div class='w-screen py-5 flex align-center justify-center'>
      <div class='w-screen flex justify-between align-center px-8 flex-wrap'>
        <h1 Style='color: white' class='text-5xl font-black drop-shadow-[5px_5px_0px_rgba(0,0,0)] max-sm:text-4xl'>STANDARDS.WTF</h1>
        <div class='flex items-center justify-around my-3 max-md:mt-5 w-[300px]'>
          <Headerlink title='RESTART' route='/'></Headerlink>
          <Headerlink title='SHARE' ></Headerlink>
        </div>
      </div>
    </div>
  );
}
