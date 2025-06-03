import React from "react";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

const Signin = () => {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1"
                        stroke="currentColor"
                        className="size-10 ml-2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                    </svg>
                </div>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogCancel>x</AlertDialogCancel>
                    <AlertDialogTitle>Selamat Datang!</AlertDialogTitle>
                    <AlertDialogDescription>
                        Ketahui perawatan kulit dasar dengan BasicDulu.
                        Mulai dari sini!
                    </AlertDialogDescription>

                {/* Login Form */}
                <div className="px-10">
            <form className="flex flex-col gap-4 mt-4">
          <div className="flex flex-col">
            <input
              id="email"
              type="email"
              className="border-2 rounded-md px-3 py-3 mt-1 text-sm focus:outline-none focus:border-[#7092CF]"
              placeholder="Email"
              required
            />
          </div>
          <div className="flex flex-col">
            <input
              id="password"
              type="password"
              className=" border-2 rounded-md px-3 py-3 mt-1 text-sm focus:outline-none focus:border-[#7092CF]"
              placeholder="Password"
              required
            />
          </div>
        </form>

        <a>
         <div className="flex items-end justify-end text-[#405E93] font-medium mt-2">
            Lupa Kata Sandi?
        </div>
        </a>

        <AlertDialogAction>Masuk</AlertDialogAction>

        </div>

        
       


                </AlertDialogHeader>
                <AlertDialogFooter>
                
                    
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
};

export default Signin;