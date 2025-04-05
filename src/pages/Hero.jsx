import React from 'react'
import { Link } from 'react-router-dom'
const IMG_URL = 'https://thumbs.dreamstime.com/b/high-tech-cow-farm-managed-artificial-intelligence-dashboard-phrase-ai-cows-high-tech-cow-farm-managed-301843265.jpg';

const Hero = () => {
  return (
    <div>
        {/* <div className="flex h-screen justify-center items-center dark:bg-slate-800">
    <div className="mx-auto mt-10 flex justify-center px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8">
        <div className="text-center ">
            <h1
                className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-slate-200 sm:text-5xl md:text-6xl">
                <span className="block xl:inline"><span className="mb-1 block">Amazing</span>
                <span className="bg-gradient-to-r from-indigo-400 to-pink-600 bg-clip-text text-transparent">
                    Cow Farming System
                </span>
                </span>
                <div className="mt-2">IoT
                    <span className="relative mt-3 whitespace-nowrap text-blue-600"><svg aria-hidden="true" viewBox="0 0 418 42"
                        className="absolute top-3/4 left-0 right-0 m-auto h-[0.58em] w-fit fill-pink-400/50"
                        preserveAspectRatio="none">
                        <path
                            d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z">
                        </path>
                    </svg>
                    <span className="relative"> Project.</span>
                    </span>
                </div>
            </h1>
            <p className="mx-auto mt-3 max-w-xl text-lg text-gray-500 dark:text-slate-400 sm:mt-5 md:mt-5">
                example is the AI Content Generator
                that helps you and your team break through creative blocks to create amazing, original content 10X
                faster.
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
                <div className="rounded-md shadow"><a
                        className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-blue-700 md:py-4 md:px-10 md:text-lg"
                        href="#">Explore Our Project 🚀
                    </a>
                </div>
            </div>
        </div>
    </div>
</div> */}
<section
    class="relative overflow-hidden bg-gradient-to-b from-blue-50 via-transparent to-transparent pb-12 sm:pb-16 sm:pt-14 lg:pb-24 xl:pb-28 xl:pt-30">
    <div class="relative z-10">
        <div
            class="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]">
            <svg class="h-[60rem] w-[100rem] flex-none stroke-blue-600 opacity-20" aria-hidden="true">
                <defs>
                    <pattern id="e9033f3e-f665-41a6-84ef-756f6778e6fe" width="200" height="200" x="50%" y="50%"
                        patternUnits="userSpaceOnUse" patternTransform="translate(-100 0)">
                        <path d="M.5 200V.5H200" fill="none"></path>
                    </pattern>
                </defs>
                <svg x="50%" y="50%" class="overflow-visible fill-blue-50">
                    <path d="M-300 0h201v201h-201Z M300 200h201v201h-201Z" stroke-width="0"></path>
                </svg>
                <rect width="100%" height="100%" stroke-width="0" fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)">
                </rect>
            </svg>
        </div>
    </div>
    <div class="relative z-20 mx-auto max-w-7xl px-6 lg:px-8">
        <div class="pt-28 sm:pt-30 mx-auto max-w-2xl text-center ">
            <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Transforming Traditional Farming with
                <span class="text-blue-600"> Smart IoT Technology
           </span>
            </h1>
            <h2 class="mt-6 text-lg leading-8 text-gray-600">
            Monitor cow health, automate feeding, and ensure farm safety — all from your phone!
            </h2>
            <div class="mt-10 flex items-center justify-center gap-x-6">
                <Link class="isomorphic-link isomorphic-link--internal inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    to="/">See More
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clip-rule="evenodd"></path>
                    </svg>
                </Link>
            </div>
        </div>
        <div class="relative mx-auto mt-10 max-w-lg">
            <img class="w-full rounded-2xl border border-gray-100 shadow" 
            src={IMG_URL} 
            alt="" />
        </div>
    </div>
</section>
    </div>
  )
}

export default Hero