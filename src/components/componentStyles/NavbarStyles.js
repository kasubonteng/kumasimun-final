export const styles = {
  main: ' fixed w-full z-80 top-0',
  header:
    'relative px-[100px] py-[20px] flex justify-between items-center bg-white border-solid border-b-2 border-black',
  logo: 'relative text-[30px] font-extrabold tracking-[1px]',
  link: "m-1 cursor-pointer my-[4px] mx-4 font-medium tracking-[1px] md:hidden relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-black after:origin-bottom-left after:ease-out after:duration-[25] after:transition-[transform] hover:after:scale-x-[1] ",
  burgerLink:
    'cursor-pointer  md:mr-0 md:mb-[50px] md:font-bold md:text-[25px] md:tracking-[2px] px-3 py-[2px] m-1 font-medium',
  input: 'z-10',
  label: 'hidden md:block md:cursor-pointer md:text-[25px] md:z-30',
  sidebar:
    'md:inset-0 md:flex md:flex-col md:justify-center md:items-center md:fixed md:z-80 md:bg-[rgba(255,255,255)]',
};
