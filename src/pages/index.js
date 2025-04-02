import React, {useState} from "react"
import projectThumbnail from "../images/Rectangle 25.png"
import DarkModeToggle from "../components/DarkModeToggle"
import signature from "../images/signature.svg"
import signatureDark from "../images/signature-dark.svg"
import profile from "../images/profile.jpg"
import koobThumbnail from "../images/koob-thumbnail.webp"
import rockPaperScissorThumbnail from "../images/rock-paper-scissors-thumbnail.webp"
import chatAppThumbnail from "../images/chat-app-thumbnail.webp"
import spaceTourismThumbnail from "../images/space-tourism-thumbnail.webp"
import toDoAppThumbnail from "../images/todo-app-thumbnail.webp"

const IndexPage = () => {
    const [activeJob, setActiveJob] = useState("clickr-webdeveloper")

    return (
        <>
            <nav className="section-container flex justify-end mt-8 md:mt-16">
                <DarkModeToggle />
            </nav>
            <section className="mt-20 md:mt-48 mb-36">
                <div className="section-container">
                    <h1 className="dark:text-title-dark/90 text-3xl font-bold text-title-light leading-none">
                        <span className="flex items-center">Hi, I'm AungHtetPaing <img src={profile} alt="profile image" className="w-9 h-12 md:w-12 md:h-15 rounded-2xl object-cover ml-3"/></span>
                    </h1>
                    <div className="dark:text-muted-dark text-base font-normal text-muted-light mb-6">
                        A web developer at <a href="https://www.clickrmedia.com" target="_blank" rel="noopener noreferrer" className="hover:underline dark:hover:text-normal-dark hover:text-normal-light">Clickr</a>
                    </div>
                    <p className="dark:text-normal-dark text-base text-normal-light mb-6 leading-7">
                        I'm a web developer with over three years of experience, primarily working with WordPress and Drupal at Clickr. Previously, I spent a year and a half developing with Laravel and Livewire, and I also explore Vue in personal projects. I specialize in building websites and designing EDMs with Stripo and Mailchimp. Beyond work, I enjoy learning from Laracasts and engaging in community forums. Passionate about growth, I'm eager to expand my skills in the MERN stack and advance as a full-stack developer.
                    </p>
                    <div className="flex items-center space-x-[23px]">
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className="dark:fill-normal-dark fill-[#314158]" d="M6.68952 16.2461C6.68952 16.3288 6.59677 16.3949 6.47984 16.3949C6.34677 16.4073 6.25403 16.3412 6.25403 16.2461C6.25403 16.1633 6.34677 16.0972 6.46371 16.0972C6.58468 16.0848 6.68952 16.1509 6.68952 16.2461ZM5.43548 16.06C5.40726 16.1427 5.4879 16.2378 5.60887 16.2626C5.71371 16.304 5.83468 16.2626 5.85887 16.1799C5.88306 16.0972 5.80645 16.0021 5.68548 15.9648C5.58065 15.9359 5.46371 15.9772 5.43548 16.06ZM7.21774 15.9897C7.10081 16.0186 7.02016 16.0972 7.03226 16.1923C7.04435 16.275 7.14919 16.3288 7.27016 16.2998C7.3871 16.2709 7.46774 16.1923 7.45564 16.1096C7.44355 16.031 7.33468 15.9772 7.21774 15.9897ZM9.87097 0.14209C4.27823 0.14209 0 4.49686 0 10.2329C0 14.8193 2.81452 18.744 6.83468 20.1252C7.35081 20.2204 7.53226 19.8936 7.53226 19.6248C7.53226 19.3684 7.52016 17.9541 7.52016 17.0856C7.52016 17.0856 4.69758 17.7059 4.10484 15.8532C4.10484 15.8532 3.64516 14.6497 2.98387 14.3396C2.98387 14.3396 2.06048 13.6903 3.04839 13.7027C3.04839 13.7027 4.05242 13.7854 4.60484 14.7697C5.4879 16.366 6.96774 15.9069 7.54435 15.634C7.6371 14.9723 7.89919 14.5132 8.18952 14.2403C5.93548 13.9839 3.66129 13.6489 3.66129 9.67048C3.66129 8.53319 3.96774 7.96248 4.6129 7.23462C4.50806 6.96581 4.16532 5.85747 4.71774 4.42656C5.56048 4.15774 7.5 5.54316 7.5 5.54316C8.30645 5.31157 9.17339 5.19164 10.0323 5.19164C10.8911 5.19164 11.7581 5.31157 12.5645 5.54316C12.5645 5.54316 14.504 4.15361 15.3468 4.42656C15.8992 5.8616 15.5565 6.96581 15.4516 7.23462C16.0968 7.96662 16.4919 8.53733 16.4919 9.67048C16.4919 13.6613 14.1169 13.9798 11.8629 14.2403C12.2339 14.567 12.5484 15.1873 12.5484 16.1592C12.5484 17.5529 12.5363 19.2774 12.5363 19.6166C12.5363 19.8854 12.7218 20.2121 13.2339 20.117C17.2661 18.744 20 14.8193 20 10.2329C20 4.49686 15.4637 0.14209 9.87097 0.14209ZM3.91935 14.4057C3.86694 14.4471 3.87903 14.5422 3.94758 14.6208C4.0121 14.6869 4.10484 14.7159 4.15726 14.6621C4.20968 14.6208 4.19758 14.5257 4.12903 14.4471C4.06452 14.3809 3.97177 14.352 3.91935 14.4057ZM3.48387 14.0707C3.45565 14.1245 3.49597 14.1907 3.57661 14.232C3.64113 14.2734 3.72177 14.261 3.75 14.2031C3.77823 14.1493 3.7379 14.0831 3.65726 14.0418C3.57661 14.017 3.5121 14.0294 3.48387 14.0707ZM4.79032 15.543C4.72581 15.5968 4.75 15.7208 4.84274 15.7994C4.93548 15.8945 5.05242 15.9069 5.10484 15.8408C5.15726 15.787 5.13306 15.6629 5.05242 15.5844C4.96371 15.4892 4.84274 15.4768 4.79032 15.543ZM4.33065 14.9351C4.26613 14.9764 4.26613 15.084 4.33065 15.1791C4.39516 15.2742 4.50403 15.3156 4.55645 15.2742C4.62097 15.2204 4.62097 15.1129 4.55645 15.0178C4.5 14.9227 4.39516 14.8813 4.33065 14.9351Z" fill="currentColor" />
                            </svg>
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className="dark:fill-normal-dark fill-[#314158]" d="M4.47679 18.3239H0.330357V6.18484H4.47679V18.3239ZM2.40134 4.52896C1.07545 4.52896 0 3.53056 0 2.32517C9.49017e-09 1.74618 0.252998 1.19091 0.703336 0.7815C1.15367 0.372093 1.76446 0.14209 2.40134 0.14209C3.03821 0.14209 3.649 0.372093 4.09934 0.7815C4.54968 1.19091 4.80268 1.74618 4.80268 2.32517C4.80268 3.53056 3.72679 4.52896 2.40134 4.52896ZM19.9955 18.3239H15.858V12.4147C15.858 11.0064 15.8268 9.20033 13.7022 9.20033C11.5464 9.20033 11.2161 10.7304 11.2161 12.3132V18.3239H7.07411V6.18484H11.0509V7.84072H11.1089C11.6625 6.88696 13.0147 5.88045 15.0321 5.88045C19.2286 5.88045 20 8.39268 20 11.6557V18.3239H19.9955Z" fill="currentColor" />
                            </svg>
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className="dark:fill-normal-dark fill-[#314158]" d="M17.9442 4.08804C17.9569 4.26121 17.9569 4.43441 17.9569 4.60758C17.9569 9.88946 13.8326 15.9754 6.29444 15.9754C3.97209 15.9754 1.81473 15.3198 0 14.1818C0.329962 14.2189 0.64719 14.2313 0.989848 14.2313C2.90607 14.2313 4.67006 13.6004 6.0787 12.5243C4.27666 12.4871 2.7665 11.3368 2.24618 9.75341C2.50001 9.7905 2.7538 9.81525 3.02032 9.81525C3.38833 9.81525 3.75638 9.76575 4.099 9.6792C2.22083 9.30808 0.812152 7.70002 0.812152 5.75797V5.70851C1.35782 6.00538 1.99239 6.19093 2.66493 6.21564C1.56087 5.49818 0.837542 4.27358 0.837542 2.88816C0.837542 2.14598 1.04055 1.46564 1.3959 0.871889C3.41369 3.29637 6.4467 4.87967 9.8477 5.05288C9.78426 4.756 9.74617 4.44679 9.74617 4.13754C9.74617 1.93569 11.5736 0.14209 13.8452 0.14209C15.0254 0.14209 16.0914 0.62451 16.8401 1.40381C17.7665 1.23064 18.6548 0.896638 19.4416 0.438967C19.137 1.36672 18.4898 2.14602 17.6396 2.64078C18.4645 2.55423 19.264 2.33153 20 2.02231C19.4417 2.81395 18.7437 3.519 17.9442 4.08804Z" fill="currentColor" />
                            </svg>
                        </a>
                        <span className="inline-block w-px h-7 bg-linear-to-b from-white via-black/50 to-white dark:from-black/50 dark:via-white dark:to-black/50"></span>
                        <a href="mailto:apaing894@gmail.com" target="_blank" rel="noopener noreferrer" className="dark:text-normal-dark text-normal-light text-base">
                            apaing894@gmail.com
                        </a>
                    </div>
                </div>
            </section>

            <section className="mb-20 md:mb-36">
                <div className="section-container">
                    <h2 className="section-title">
                        <span>Experiences</span>
                        <span className="section-title-bg">Experiences</span>
                    </h2>
                    <div className="flex justify-between gap-14">
                        <div className="shrink-0 flex-1 md:flex-none">
                            <div className="static md:sticky md:top-0 space-y-[20px]">
                                <div>
                                    <h3 className="text-xl font-semibold mb-4">
                                        <a href="https://www.clickrmedia.com" target="_blank" rel="noopener noreferrer" className="hover:underline dark:hover:text-normal-dark hover:text-normal-light">Clickr</a>
                                    </h3>
                                    <div className="border-l pl-2.5 space-y-[12px]">
                                        <div>
                                            <div onClick={() => setActiveJob("clickr-webdeveloper")} className={`${activeJob === 'clickr-webdeveloper' && 'dark:shadow-none dark:bg-slate-800 shadow-md'} job-tab`}>
                                                <h4 className="text-base dark:text-normal-dark text-normal-light font-medium">Web Developer</h4>
                                                <p className="text-sm font-normal dark:text-muted-dark text-muted-light">Jan 2024 - Present</p>
                                            </div>
                                            <div className={`${activeJob === 'clickr-webdeveloper' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'} job-tab-content`}>
                                                I maintain and develop websites using Sitefinity, WordPress, and SharePoint while also building and optimizing EDMs with Stripo to ensure high-quality email campaigns.
                                            </div>
                                        </div>
                                        <div>
                                            <div onClick={() => setActiveJob("clickr-juniorwebdeveloper")} className={`${activeJob === 'clickr-juniorwebdeveloper' && 'dark:shadow-none dark:bg-slate-800 shadow-md'} job-tab`}>
                                                <h4 className="text-base dark:text-normal-dark text-normal-light font-medium">Junior Web Developer</h4>
                                                <p className="text-sm font-normal dark:text-muted-dark text-muted-light">May 2023 - Jan 2024</p>
                                            </div>
                                            <div className={`${activeJob === 'clickr-juniorwebdeveloper' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'} job-tab-content`}>
                                                I primarily focused on front-end development, translating designs into clean, responsive HTML and resolving UI/UX issues. I managed and updated content on Sitefinity and Drupal websites, ensuring quality control while handling website maintenance, bug fixes, and performance improvements.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-4">
                                        <a href="https://myintthukhanadi.com" target="_blank" rel="noopener noreferrer" className="hover:underline dark:hover:text-normal-dark hover:text-normal-light">Myint Thu Kha Nadi Co., Ltd</a>
                                    </h3>
                                    <div className="border-l pl-2.5">
                                        <div>
                                            <div onClick={() => setActiveJob("myintthukhanadi-juniorwebdeveloper")} className={`${activeJob === 'myintthukhanadi-juniorwebdeveloper' && 'dark:shadow-none dark:bg-slate-800 shadow-md'} job-tab`}>
                                                <h4 className="text-base dark:text-normal-dark text-normal-light font-medium">Junior Web Developer</h4>
                                                <p className="text-sm font-normal dark:text-muted-dark text-muted-light">Jan 2022 - May 2023</p>
                                            </div>
                                            <div className={`${activeJob === 'myintthukhanadi-juniorwebdeveloper' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} job-tab-content`}>
                                                At Myint Thu Kha Nadi Co., Ltd, I developed custom e-commerce websites using Laravel, Jetstream, Livewire, TailwindCSS, and AlpineJS, delivering scalable and feature-rich solutions tailored to client needs. I built core functionalities such as user authentication, product catalogs, shopping carts, and order management systems, ensuring a seamless shopping experience. To improve responsiveness and interactivity, I leveraged Livewire and AlpineJS for real-time updates without requiring complex JavaScript frameworks. Additionally, I created a custom WordPress theme integrated with TailwindCSS, providing a modern, responsive design. Beyond development, I collaborated closely with clients to understand their requirements, offer technical guidance, and align project outcomes with business goals.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:block relative flex-1">
                            <div className={`${activeJob === 'clickr-webdeveloper' ? 'opacity-100 relative' : 'opacity-0 absolute'} text-base font-normal dark:text-normal-dark text-normal-light leading-7 transition-opacity duration-700 ease-in-out top-0`}>
                                I maintain and develop websites using Sitefinity, WordPress, and SharePoint while also building and optimizing EDMs with Stripo to ensure high-quality email campaigns.
                            </div>
                            <div className={`${activeJob === 'clickr-juniorwebdeveloper' ? 'opacity-100 relative' : 'opacity-0 absolute'} text-base font-normal dark:text-normal-dark text-normal-light leading-7 transition-opacity duration-700 ease-in-out top-0`}>
                                I primarily focused on front-end development, translating designs into clean, responsive HTML and resolving UI/UX issues. I managed and updated content on Sitefinity and Drupal websites, ensuring quality control while handling website maintenance, bug fixes, and performance improvements.
                            </div>
                            <div className={`${activeJob === 'myintthukhanadi-juniorwebdeveloper' ? 'opacity-100 relative' : 'opacity-0 absolute'} text-base font-normal dark:text-normal-dark text-normal-light leading-7 transition-opacity duration-700 ease-in-out top-0`}>
                                At Myint Thu Kha Nadi Co., Ltd, I developed custom e-commerce websites using Laravel, Jetstream, Livewire, TailwindCSS, and AlpineJS, delivering scalable and feature-rich solutions tailored to client needs. I built core functionalities such as user authentication, product catalogs, shopping carts, and order management systems, ensuring a seamless shopping experience. To improve responsiveness and interactivity, I leveraged Livewire and AlpineJS for real-time updates without requiring complex JavaScript frameworks. Additionally, I created a custom WordPress theme integrated with TailwindCSS, providing a modern, responsive design. Beyond development, I collaborated closely with clients to understand their requirements, offer technical guidance, and align project outcomes with business goals.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mb-20 md:mb-36">
                <div className="section-container">
                    <h2 className="section-title">
                        <span>Personal Projects</span>
                        <span className="section-title-bg">Personal Projects</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-7 gap-y-10">
                        <div>
                            <img src={koobThumbnail} alt="project thumbnail" className="shadow-lg rounded-md mb-5 w-full h-[210px] object-cover" />
                            <h3 className="text-xl dark:text-title-dark/90 text-title-light font-semibold mb-2.5">Koob</h3>
                            <p className="text-base dark:text-normal-dark text-normal-light font-normal mb-2.5">
                                A ecommerce book store project built with laravel8, vue3, inertia & integrated with stripe.
                            </p>
                            <div className="mb-2.5 flex flex-wrap gap-2.5">
                                <span className="pill-tag">Laravel</span>
                                <span className="pill-tag">Vue</span>
                                <span className="pill-tag">Inertia</span>
                                <span className="pill-tag">Stripe</span>
                            </div>
                        </div>
                        <div>
                            <img src={chatAppThumbnail} alt="project thumbnail" className="shadow-lg rounded-md mb-5 w-full h-[210px] object-cover" />
                            <h3 className="text-xl dark:text-title-dark/90 text-title-light font-semibold mb-2.5">Chat</h3>
                            <p className="text-base dark:text-normal-dark text-normal-light font-normal mb-2.5">Real time chat app project with Pusher</p>
                            <div className="mb-2.5 flex flex-wrap gap-2.5">
                                <span className="pill-tag">Laravel</span>
                                <span className="pill-tag">Vue</span>
                                <span className="pill-tag">Pusher</span>
                            </div>
                        </div>
                        <div>
                            <img src={rockPaperScissorThumbnail} alt="project thumbnail" className="shadow-lg rounded-md mb-5 w-full h-[210px] object-cover" />
                            <h3 className="text-xl dark:text-title-dark/90 text-title-light font-semibold mb-2.5">Rock Paper Scissors game</h3>
                            <p className="text-base dark:text-normal-dark text-normal-light font-normal mb-2.5">Frontend mentor challenge project</p>
                            <div className="mb-2.5 flex flex-wrap gap-2.5">
                                <span className="pill-tag">HTML</span>
                                <span className="pill-tag">Tailwind CSS</span>
                                <span className="pill-tag">Alpine JS</span>
                            </div>
                            <a href="https://ahp-sooyaa.github.io/rock-paper-scissors-game/" className="dark:text-normal-dark text-normal-light text-sm">
                                https://ahp-sooyaa.github.io/rock-paper-scissors-game/
                            </a>
                        </div>
                        <div>
                            <img src={spaceTourismThumbnail} alt="project thumbnail" className="shadow-lg rounded-md mb-5 w-full h-[210px] object-cover" />
                            <h3 className="text-xl dark:text-title-dark/90 text-title-light font-semibold mb-2.5">Space tourism website</h3>
                            <p className="text-base dark:text-normal-dark text-normal-light font-normal mb-2.5">Frontend mentor challenge project</p>
                            <div className="mb-2.5 flex flex-wrap gap-2.5">
                                <span className="pill-tag">HTML</span>
                                <span className="pill-tag">Tailwind CSS</span>
                                <span className="pill-tag">JavaScript</span>
                            </div>
                            <a href="https://ahp-sooyaa.github.io/space-tourism-website/" className="dark:text-normal-dark text-normal-light text-sm">
                                https://ahp-sooyaa.github.io/space-tourism-website/
                            </a>
                        </div>
                        <div>
                            <img src={toDoAppThumbnail} alt="project thumbnail" className="shadow-lg rounded-md mb-5 w-full h-[210px] object-cover" />
                            <h3 className="text-xl dark:text-title-dark/90 text-title-light font-semibold mb-2.5">Todo App</h3>
                            <p className="text-base dark:text-normal-dark text-normal-light font-normal mb-2.5">Frontend mentor challenge project</p>
                            <div className="mb-2.5 flex flex-wrap gap-2.5">
                                <span className="pill-tag">HTML</span>
                                <span className="pill-tag">Tailwind CSS</span>
                                <span className="pill-tag">Alpine JS</span>
                            </div>
                            <a href="https://ahp-sooyaa.github.io/todo-app/" className="dark:text-normal-dark text-normal-light text-sm">
                                https://ahp-sooyaa.github.io/todo-app/
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mb-20 md:mb-40">
                <div className="section-container">
                    <h2 className="section-title">
                        <span>Tech Stack</span>
                        <span className="section-title-bg">Tech Stack</span>
                    </h2>
                    <div className="flex flex-wrap gap-2.5">
                        <span className="pill-tag">HTML</span>
                        <span className="pill-tag">CSS</span>
                        <span className="pill-tag">JavaScript</span>
                        <span className="pill-tag">PHP</span>
                        <span className="pill-tag">Laravel</span>
                        <span className="pill-tag">Vue</span>
                        <span className="pill-tag">Wordpress</span>
                        <span className="pill-tag">TailwindCSS</span>
                        <span className="pill-tag">UIkit</span>
                        <span className="pill-tag">Git</span>
                        <span className="pill-tag">Sanity</span>
                        <span className="pill-tag">Netlify</span>
                    </div>
                </div>
            </section>

            <footer className="mb-6 md:mb-16">
                <div className="section-container text-center">
                    <img src={signature} alt="signature" className="block dark:hidden mx-auto" />
                    <img src={signatureDark} alt="signature dark" className="hidden dark:block mx-auto" />
                    <p className="text-sm font-normal dark:text-muted-dark text-muted-light">© 2025 AungHtetPaing. All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}

export default IndexPage

export const Head = () => <title>AungHtetPaing</title>
