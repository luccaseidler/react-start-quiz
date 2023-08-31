import { Question } from "@/types/Question";
import { useState} from 'react';

type Props = {
    question: Question;
    count: number;
    onAnswer: (answer: number) => void;
}

export const QuestionItem = ({ question, count, onAnswer}: Props) => {
    
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)

    const checkQuestion = (key: number) => {
        if(selectedAnswer === null) {
            setSelectedAnswer(key);
            
            setTimeout(() => {
                onAnswer(key);
                setSelectedAnswer(null);    
            }, 2000)
        }
    }
    const questionDefault = `cursor-default hover:opacity-100 hover:scale-100 hover:bg-purple-100 hover:text-purple-700`

    return (
        <div>   
            <div className="text-3xl font-bold mb-5">{count}. {question.question}</div>
            <div>
                {question.options.map((item, key) => (
                    <div 
                        key={key} 
                        onClick={() => checkQuestion(key)}
                        className={`border px-3 py-2 rounded-md text-lg mb-4 text-purple-700 cursor-pointer bg-purple-100 border-purple-300 hover:bg-purple-500 hover:text-white hover:scale-105 transition-all duration-300
                        ${selectedAnswer !== null && `${questionDefault}`}
                        ${selectedAnswer !== null && selectedAnswer === question.answer && selectedAnswer === key && 'text-white bg-green-500 border-green-400 hover:bg-green-400 hover:text-white'}
                        ${selectedAnswer !== null && selectedAnswer !== question.answer && selectedAnswer === key && 'text-white bg-red-600 border-red-300 hover:bg-red-500'}
                        `}
                        >{item}</div>
                ))}
            </div>
        </div>
    )
}