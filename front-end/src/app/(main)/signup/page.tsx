import { Jersey_10 } from 'next/font/google'

const jersey: any = Jersey_10({ subsets: ['latin'], weight: '400' })

const signup = () => {
  return (
    <div className="flex flex-col items-center bg-white">
      <header
        className={`${jersey.className} mb-12 mt-14 text-6xl font-medium text-purple-700`}
      >
        CandyCard
      </header>
      <form className="m-auto flex w-[400px] flex-col justify-center">
        <div className="mb-[68px] ml-[50px] text-[32px] font-bold text-[#B580FF]">
          sign up
        </div>
        <div className="m-auto flex flex-col justify-center">
          <label
            htmlFor="email"
            className="mb-[17px] justify-center text-left text-xl font-medium"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Example@gmail.com"
            className="m-auto flex h-[55px] w-[293px] rounded-lg bg-[#F4EDFF] p-4"
          />
          <label
            htmlFor="password"
            className="mb-[17px] mt-[40px] justify-center text-left text-xl font-medium"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="****"
            className="m-auto flex h-[55px] w-[293px] rounded-lg bg-[#F4EDFF] p-4"
          />
          <button
            type="submit"
            className="mt-[74px] h-[40px] w-[300px] rounded-xl bg-[#5E2DB1] text-base font-semibold text-white"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default signup
