'use client';
import React, { useEffect, useState } from 'react';
import { Footer } from '@/components/Footer';
import { Montserrat, Bai_Jamjuree } from 'next/font/google';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

const bai_jamjuree = Bai_Jamjuree({ weight: '500', subsets: ['latin'] });
const montserrat = Montserrat({ weight: '500', subsets: ['latin'] });
const questions = [
    {
        question:
            'Bagaimana kondisi kulit wajahmu saat bangun tidur (tanpa menggunakan skincare malam)?',
        options: [
            'Terasa berminyak di seluruh wajah',
            'Berminyak di area T-zone (dahi, hidung, dagu), kering di pipi',
            'Kering dan terasa kaku',
            'Tidak berminyak dan tidak kering, terasa normal',
        ],
    },
    {
        question:
            'Setelah mencuci muka dengan sabun wajah, apa yang kamu rasakan?',
        options: [
            'Kulit cepat berminyak kembali',
            'Pipi terasa kering, tapi T-zone tetap berminyak',
            'Kulit terasa sangat kering, ketarik, bahkan bersisik',
            'Kulit terasa segar dan nyaman',
        ],
    },
    {
        question: 'Bagaimana pori-pori kulit wajahmu?',
        options: [
            'Besar dan terlihat jelas di seluruh wajah',
            'Besar di T-zone, kecil di pipi',
            'Kecil dan hampir tidak terlihat',
            'Ukuran normal dan tidak terlalu mencolok',
        ],
    },
    {
        question: 'Apakah kamu sering mengalami jerawat atau komedo?',
        options: [
            'Sangat sering, terutama jerawat aktif',
            'Kadang-kadang di area T-zone',
            'Jarang, hampir tidak pernah',
            'Tidak terlalu sering, hanya sesekali',
        ],
    },
    {
        question:
            'Bagaimana kondisi kulitmu saat berada di ruangan ber-AC dalam waktu lama?',
        options: [
            'Tetap berminyak',
            'T-zone sedikit berminyak, pipi terasa kering',
            'Kulit terasa sangat kering dan gatal',
            'Kulit tetap nyaman dan tidak terlalu berubah',
        ],
    },
];

export default function Quiz() {
    const router = useRouter();

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [totalScore, setTotalScore] = useState(0);
    const [result, setResult] = useState('');
    const [showDialog, setShowDialog] = useState(false);
    const [isRedirecting, setIsRedirecting] = useState(false);
    const [showExitDialog, setShowExitDialog] = useState(false);
    const [answers, setAnswers] = useState<string[]>([]);
    const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(
        Array(questions.length).fill(null),
    );

    const calculateResult = (finalScore: number) => {
        if (finalScore >= 17) {
            setResult('Kulit Berminyak');
        } else if (finalScore >= 13) {
            setResult('Kulit Kombinasi');
        } else if (finalScore >= 9) {
            setResult('Kulit Kering');
        } else {
            setResult('Kulit Normal');
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

        const answerLetter = ['A', 'B', 'C', 'D'][currentSelectedIndex];
        let points = 0;
        switch (answerLetter) {
            case 'A':
                points = 4;
                break;
            case 'B':
                points = 3;
                break;
            case 'C':
                points = 2;
                break;
            case 'D':
                points = 1;
                break;
        }

        // Update totalScore
        setTotalScore((prev) => prev + points);

        // Simpan jawaban (huruf A/B/C/D)
        setAnswers((prevAnswers) => [...prevAnswers, answerLetter]);

        if (currentQuestion === questions.length - 1) {
            calculateResult(totalScore + points);
            setShowDialog(true);
        } else {
            setCurrentQuestion((prev) => prev + 1);
        }
    };

    const handleDialogOk = () => {
        // Simpan jawaban ke localStorage / session supaya later bisa ditampilin setelah registered
        localStorage.setItem('skinQuizAnswers', JSON.stringify(answers));
        localStorage.setItem('skinQuizResult', result);
        setIsRedirecting(true);
    };

    useEffect(() => {
        if (isRedirecting) {
            router.push('/profil-kulit');
        }
    }, [isRedirecting, router]);

    const progressPercentage = ((currentQuestion + 1) / questions.length) * 100;

    return (
        <>
            {/* Header */}
            <div className="flex justify-between items-center px-13 py-7 border-b border-black">
                <button onClick={handleBack}>
                    <ArrowLeft size={26} />
                </button>
                <div className={`${bai_jamjuree.className}`}>
                    <p className="text-xl font-extrabold">PahamiKulit</p>
                </div>
                <span className="text-[#D64F7E] font-semibold text-lg">
                    {progressPercentage}%
                </span>
            </div>

            <div
                className={`${montserrat.className} bg-[#E6EEFC] min-h-screen overflow-hidden`}
            >
                <div className="mt-5 ml-9 text-[#E6EEFC]">[Navigation]</div>

                {/* Title Section */}
                <div
                    className="hidden md:hidden lg:block absolute bg-[#FFD5E9] h-50 w-50 mt-15 right-92"
                    style={{
                        clipPath: 'ellipse(100px 100px at center bottom)',
                    }}
                ></div>
                <div className="absolute right-51">
                    <img
                        src="/Pink-11.png"
                        alt="Mascot"
                        className="w-97 h-auto -mt-16"
                    />
                </div>
                <div className="text-white bg-gradient-to-b from-[#7293D0] to-[#B5CBF0] mx-45 mt-12 mb-16 rounded-xl p-17">
                    <h1 className="text-4xl font-bold pb-2">Tes Jenis Kulit</h1>
                    <p className="text-lg">
                        Jawab beberapa pertanyaan untuk mengetahui jenis
                        kulitmu!
                    </p>
                </div>

                <div className="max-w-2xl mx-auto">
                    <h2 className="text-lg font-bold mb-2">
                        Progress: {progressPercentage}%
                    </h2>
                    <div className="w-full bg-gray-100 rounded-full h-2">
                        <div
                            className="bg-[#7092CF] h-2 rounded-full transition-all duration-300"
                            style={{ width: `${progressPercentage}%` }}
                        ></div>
                    </div>
                </div>

                <div className="max-w-2xl text-2xl font-semibold text-center justify-center mx-auto mt-14 mb-10">
                    {questions[currentQuestion].question}
                </div>

                <div className="flex flex-wrap gap-6 justify-center">
                    {questions[currentQuestion].options.map((text, index) => (
                        <div
                            key={index}
                            onClick={() => handleAnswerClick(index)}
                            className={`w-[300px] h-[180px] px-6 py-6 rounded-2xl text-center flex items-center justify-center text-lg font-medium cursor-pointer transition-all
                ${
                    selectedAnswers[currentQuestion] === index
                        ? 'bg-[#7092CF] text-white'
                        : 'bg-white text-black'
                }
                hover:bg-[#7092CF] hover:text-white`}
                            style={{
                                boxShadow: '0 5px 0px rgba(213, 228, 255, 1)',
                            }}
                        >
                            {text}
                        </div>
                    ))}
                </div>

                <div className="mt-14 text-center">
                    {currentQuestion === questions.length - 1 ? (
                        <button
                            className="flex items-center mx-auto text-white font-semibold bg-[#7092CF] hover:bg-[#405E93] px-6 py-3 rounded-full"
                            style={{
                                boxShadow: '0 5px 0px rgba(64, 94, 147, 1)',
                            }}
                            onClick={handleNext}
                            disabled={selectedAnswers[currentQuestion] === null}
                        >
                            Selesaikan
                        </button>
                    ) : (
                        <button
                            className="flex items-center mx-auto text-white font-semibold bg-[#7092CF] hover:bg-[#405E93] px-6 py-3 rounded-full"
                            style={{
                                boxShadow: '0 5px 0px rgba(64, 94, 147, 1)',
                            }}
                            onClick={handleNext}
                            disabled={selectedAnswers[currentQuestion] === null}
                        >
                            Selanjutnya
                        </button>
                    )}
                </div>

                {showExitDialog && (
                    <div className="fixed inset-0 z-50 backdrop-brightness-35 backdrop-blur-sm flex items-center justify-center">
                        <div className="relative bg-white p-13 rounded-xl max-w-lg text-center border-1">
                            {/* Tombol X */}
                            <button
                                className="absolute text-3xl top-4 right-4 text-gray-500 hover:text-gray-800"
                                onClick={() => setShowExitDialog(false)}
                            >
                                &times;
                            </button>

                            <h2 className="text-2xl font-bold mb-4">
                                Yakin mau keluar?
                            </h2>
                            <p className="text-gray-700 mb-6">
                                Selesaikan tes jenis kulit untuk mengetahui
                                kandungan dan produk terbaik untuk kulitmu.
                            </p>

                            <div className="flex justify-center gap-4">
                                <button
                                    onClick={() =>
                                        router.push('/tes-jenis-kulit')
                                    }
                                    className="bg-white hover:bg-[#405E93] hover:text-white border-black hover:border-[#405E93] px-8 py-2 rounded-lg border-2"
                                    style={{
                                        boxShadow:
                                            '0 4px 0px rgba(64, 94, 147, 1)',
                                    }}
                                >
                                    Keluar
                                </button>
                                <button
                                    onClick={() => setShowExitDialog(false)}
                                    className="bg-[#7092CF] hover:bg-[#405E93] text-white px-8 py-2 rounded-lg"
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
                            className="bg-white p-13 rounded-xl border-2 max-w-lg text-center"
                            // style={{
                            //     boxShadow: '0 4px 0px rgba(64, 94, 147, 1)',
                            // }}
                        >
                            <h2 className="text-2xl font-bold mb-3">
                                Selesai!
                            </h2>
                            <p className="text-gray-700 mb-5">
                                Kami akan menganalisis dan mencari produk yang
                                cocok untuk kamu. Tunggu sebentar, ya
                            </p>
                            <button
                                onClick={handleDialogOk}
                                className="bg-[#7092CF] hover:bg-[#405E93] text-white px-8 py-2 rounded-full"
                                style={{
                                    boxShadow: '0 4px 0px rgba(64, 94, 147, 1)',
                                }}
                            >
                                Oke
                            </button>
                        </div>
                    </div>
                )}
            </div>

            <Footer />
        </>
    );
}
