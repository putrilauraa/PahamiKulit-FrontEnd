'use client';
import React, { useEffect, useState } from 'react';
import { Footer } from '@/components/Footer';
import { Montserrat, Bai_Jamjuree } from 'next/font/google';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { LOCAL_API_URL } from '@/configs/app';
import { jwtDecode } from 'jwt-decode';

const bai_jamjuree = Bai_Jamjuree({ weight: '500', subsets: ['latin'] });
const montserrat = Montserrat({ weight: '500', subsets: ['latin'] });
const API_URL = LOCAL_API_URL;

interface DecodedToken {
    user_id: number;
    user_name: string;
    exp: number;
    [key: string]: any;
}

export default function Quiz() {
    const router = useRouter();

    const [questions, setQuestions] = useState<any[]>([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [totalScore, setTotalScore] = useState(0);
    const [result, setResult] = useState('');
    const [showDialog, setShowDialog] = useState(false);
    const [isRedirecting, setIsRedirecting] = useState(false);
    const [showExitDialog, setShowExitDialog] = useState(false);
    const [answers, setAnswers] = useState<string[]>([]);
    const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(
        [],
    );

    const submitSkinTestResult = async (score: number) => {
        try {
            const token = localStorage.getItem('token');

            if (!token) {
                throw new Error('No authentication token found');
            }

            const decoded: DecodedToken = jwtDecode(token);
            console.log(token);

            const response = await fetch(
                `${API_URL}/users/${decoded.user_id}/skin-test`,
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({
                        score: score,
                    }),
                },
            );

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log('Skin test result submitted successfully:', data);

            return data;
        } catch (error) {
            console.error('Error submitting skin test result:', error);
            throw error;
        }
    };

    const calculateResult = async (finalScore: number) => {
        if (finalScore >= 17) {
            setResult('Kulit Berminyak');
        } else if (finalScore >= 13) {
            setResult('Kulit Kombinasi');
        } else if (finalScore >= 9) {
            setResult('Kulit Kering');
        } else {
            setResult('Kulit Normal');
        }

        try {
            await submitSkinTestResult(finalScore);
        } catch (err) {
            console.error('Submission failed, but moving on...');
        }
    };

    const handleBack = () => {
        if (currentQuestion === 0) {
            setShowExitDialog(true);
        } else {
            setCurrentQuestion((prev) => prev - 1);
        }
    };

    const handleAnswerClick = (index: number) => {
        const updatedAnswers = [...selectedAnswers];
        updatedAnswers[currentQuestion] = index;
        setSelectedAnswers(updatedAnswers);
    };

    const handleNext = () => {
        const currentSelectedIndex = selectedAnswers[currentQuestion];
        if (currentSelectedIndex === null) return;

        const selectedOption =
            questions[currentQuestion].options[currentSelectedIndex];
        const points = selectedOption.point;

        const newScore = totalScore + points; // <-- new total score

        // Save the score
        setTotalScore(newScore);
        setAnswers((prevAnswers) => [...prevAnswers, selectedOption.option]);

        if (currentQuestion === questions.length - 1) {
            calculateResult(newScore); // ✅ use the up-to-date value
            setShowDialog(true);
        } else {
            setCurrentQuestion((prev) => prev + 1);
        }
    };

    const handleDialogOk = () => {
        // Simpan jawaban ke localStorage / session supaya later bisa ditampilin setelah registered
        // localStorage.setItem('skinQuizAnswers', JSON.stringify(answers));
        // localStorage.setItem('skinQuizResult', result);
        // setIsRedirecting(true);
        router.push('/profil-kulit');
    };

    useEffect(() => {
        if (isRedirecting) {
            router.push('/profil-kulit');
        }
    }, [isRedirecting, router]);

    useEffect(() => {
        // fetch data dari backend
        const fetchQuestions = async () => {
            try {
                const response = await fetch(`${API_URL}/skin-test-questions/`);
                if (!response.ok)
                    throw new Error('Failed to fetch skin-test-questions');

                const data = await response.json();

                setQuestions(data);
                // setSelectedAnswers(Array(data.length).fill(null)); // init selectedAnswers sesuai jumlah questions
            } catch (error) {
                console.error('Error fetching questions:', error);
            }
        };

        fetchQuestions();
    }, []);

    useEffect(() => {
        if (questions.length > 0) {
            setSelectedAnswers(Array(questions.length).fill(null));
        }
    }, [questions]);

    // const progressPercentage = ((currentQuestion + 1) / questions.length) * 100;

    const progressPercentage =
        Array.isArray(questions) && questions.length > 0
            ? ((currentQuestion + 1) / questions.length) * 100
            : 0;

    return (
        <>
            {/* Header */}
            <div className="flex justify-between items-center px-10 lg:px-13 py-4 lg:py-7 border-b border-black">
                <button onClick={handleBack}>
                    <ArrowLeft size={26} />
                </button>
                <div className={`${bai_jamjuree.className}`}>
                    <p className="text-xl font-extrabold">PahamiKulit</p>
                </div>
                <span className="text-[#D64F7E] font-semibold lg:text-lg">
                    {progressPercentage}%
                </span>
            </div>

            <div
                className={`${montserrat.className} bg-[#E6EEFC] min-h-screen overflow-hidden`}
            >
                <div className="mt-5 ml-9 text-[#E6EEFC]">[Navigation]</div>

                {questions.length === 0 ? (
                    <div className="flex justify-center items-center h-screen text-lg font-semibold">
                        Loading...
                    </div>
                ) : (
                    <>
                        {/* Title Section */}
                        <div
                            className="hidden md:hidden lg:block absolute bg-[#FFD5E9] h-50 w-50 mt-15 right-92"
                            style={{
                                clipPath:
                                    'ellipse(100px 100px at center bottom)',
                            }}
                        ></div>
                        <div className="absolute right-51">
                            <img
                                src="/Pink-11.png"
                                alt="Mascot"
                                className="hidden lg:block w-97 h-auto -mt-16"
                            />
                        </div>
                        <div className="text-white bg-gradient-to-b from-[#7293D0] to-[#B5CBF0] mx-5 lg:mx-45 lg:mt-12 mb-8 lg:mb-16 rounded-xl p-8 lg:p-17">
                            <h1 className="text-xl lg:text-4xl font-bold pb-1 lg:pb-2">
                                Tes Jenis Kulit
                            </h1>
                            <p className="text-xs lg:text-lg">
                                Jawab beberapa pertanyaan untuk mengetahui jenis
                                kulitmu!
                            </p>
                        </div>

                        <div className="max-w-xs lg:max-w-2xl mx-auto">
                            <h2 className="text-[10px] lg:text-lg font-bold mb-1 lg:mb-2">
                                Progress: {progressPercentage}%
                            </h2>
                            <div className="w-full bg-gray-100 rounded-full h-1 lg:h-2">
                                <div
                                    className="bg-[#7092CF] h-1 lg:h-2 rounded-full transition-all duration-300"
                                    style={{ width: `${progressPercentage}%` }}
                                ></div>
                            </div>
                        </div>

                        <div className="max-w-xs lg:max-w-2xl text-xs lg:text-2xl font-semibold text-center justify-center mx-auto mt-5 lg:mt-14 mb-5 lg:mb-10">
                            {questions[currentQuestion].question}
                        </div>

                        <div className="flex flex-wrap gap-3 lg:gap-6 justify-center">
                            {questions[currentQuestion].options.map(
                                (opt: any, index: number) => (
                                    <div
                                        key={opt.id}
                                        onClick={() => handleAnswerClick(index)}
                                        className={`w-[295px] lg:w-[300px] lg:h-[180px] p-6 rounded-2xl text-center flex items-center justify-center text-xs lg:text-lg font-medium cursor-pointer transition-all
                ${
                    selectedAnswers[currentQuestion] === index
                        ? 'bg-[#7092CF] text-white'
                        : 'bg-white text-black'
                }
                hover:bg-[#7092CF] hover:text-white`}
                                        style={{
                                            boxShadow:
                                                '0 5px 0px rgba(213, 228, 255, 1)',
                                        }}
                                    >
                                        {opt.option}
                                    </div>
                                ),
                            )}
                        </div>

                        <div className="mt-8 lg:mt-14 text-center">
                            {currentQuestion === questions.length - 1 ? (
                                <button
                                    className="flex items-center mx-auto text-white font-semibold bg-[#7092CF] hover:bg-[#405E93] px-6 py-3 rounded-full text-xs lg:text-base"
                                    style={{
                                        boxShadow:
                                            '0 5px 0px rgba(64, 94, 147, 1)',
                                    }}
                                    onClick={handleNext}
                                    disabled={
                                        selectedAnswers[currentQuestion] ===
                                        null
                                    }
                                >
                                    Selesaikan
                                </button>
                            ) : (
                                <button
                                    className="flex items-center mx-auto text-white font-semibold bg-[#7092CF] hover:bg-[#405E93] px-6 py-3 rounded-full text-xs lg:text-base"
                                    style={{
                                        boxShadow:
                                            '0 5px 0px rgba(64, 94, 147, 1)',
                                    }}
                                    onClick={handleNext}
                                    disabled={
                                        selectedAnswers[currentQuestion] ===
                                        null
                                    }
                                >
                                    Selanjutnya
                                </button>
                            )}
                        </div>

                        {showExitDialog && (
                            <div className="fixed inset-0 z-50 backdrop-brightness-35 backdrop-blur-sm flex items-center justify-center">
                                <div className="relative bg-white p-5 lg:p-13 rounded-xl max-w-lg text-center border-1 mx-10 lg:mx-0">
                                    {/* Tombol X */}
                                    <button
                                        className="hidden lg:block absolute text-3xl top-4 right-4 text-gray-500 hover:text-gray-800"
                                        onClick={() => setShowExitDialog(false)}
                                    >
                                        &times;
                                    </button>

                                    <h2 className="text-lg lg:text-2xl font-bold mb-2 lg:mb-4">
                                        Yakin mau keluar?
                                    </h2>
                                    <p className="text-gray-700 text-xs lg:text-base mb-6">
                                        Selesaikan tes jenis kulit untuk
                                        mengetahui produk dan kandungan yang
                                        tepat untuk kulitmu.
                                    </p>

                                    <div className="flex justify-center gap-4">
                                        <button
                                            onClick={() =>
                                                router.push('/tes-jenis-kulit')
                                            }
                                            className="bg-white hover:bg-[#405E93] hover:text-white border-black hover:border-[#405E93] text-xs lg:text-base px-6 lg:px-8 py-2 rounded-lg border lg:border-2"
                                            style={{
                                                boxShadow:
                                                    '0 4px 0px rgba(64, 94, 147, 1)',
                                            }}
                                        >
                                            Keluar
                                        </button>
                                        <button
                                            onClick={() =>
                                                setShowExitDialog(false)
                                            }
                                            className="bg-[#7092CF] hover:bg-[#405E93] text-white text-xs lg:text-base px-6 lg:px-8 py-2 rounded-lg"
                                            style={{
                                                boxShadow:
                                                    '0 4px 0px rgba(64, 94, 147, 1)',
                                            }}
                                        >
                                            Lanjut Tes
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {showDialog && (
                            <div className="fixed inset-0 backdrop-brightness-35 backdrop-blur-sm flex items-center justify-center">
                                <div
                                    className="bg-white p-5 lg:p-13 rounded-xl border lg:border-2 lg:max-w-lg text-center mx-10 lg:mx-0"
                                    // style={{
                                    //     boxShadow: '0 4px 0px rgba(64, 94, 147, 1)',
                                    // }}
                                >
                                    <h2 className="text-lg lg:text-2xl font-bold mb-1 lg:mb-3">
                                        Selesai!
                                    </h2>
                                    <p className="text-gray-700 mb-3 lg:mb-5 text-xs lg:text-base">
                                        Kami akan melakukan analisis untuk
                                        menemukan produk yang sesuai dengan
                                        kebutuhanmu. Tunggu sebentar, ya
                                    </p>
                                    <button
                                        onClick={handleDialogOk}
                                        className="bg-[#7092CF] hover:bg-[#405E93] text-white text-xs lg:text-base px-6 lg:px-8 py-1 lg:py-2 rounded-full"
                                        style={{
                                            boxShadow:
                                                '0 4px 0px rgba(64, 94, 147, 1)',
                                        }}
                                    >
                                        Oke
                                    </button>
                                </div>
                            </div>
                        )}
                    </>
                )}
            </div>

            <Footer />
        </>
    );
}
